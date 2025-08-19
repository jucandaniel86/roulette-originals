import { GameModeType, GameStates, useGameStore } from '@/stores/game'
import { storeToRefs } from 'pinia'
import { ref, watch } from 'vue'
import { useTicketHistory } from './useTicketHistory'
import { useStatusStore } from '@/stores/status'
import NetworkController from '@/core/core.Network'
import ModalController from '@/core/core.ModalController'
import { useI18n } from 'vue-i18n'
import { useSettingsStore } from '@/stores/settings'

export type AutoplayOptionsType = {
  numberOfBets: number
  increaseByOnWin: number
  increaseByOnLoss: number
  stopOnProfit: number
  stopOnLoss: number
}

export const useAutoplay = () => {
  const {
    setDisabledInteraction,
    setResult,
    setGameState,
    setPlayerResults,
    setResultsHistory,
    disableSidebar,
  } = useGameStore()
  const { gameMode, gameState, bets, totalBet } = storeToRefs(useGameStore())
  const { settings } = storeToRefs(useSettingsStore())
  const { t } = useI18n()

  const autoplayOptions = ref<AutoplayOptionsType>({
    numberOfBets: 0,
    increaseByOnWin: 0,
    increaseByOnLoss: 0,
    stopOnProfit: 0,
    stopOnLoss: 0,
  })

  const autoplaySession = ref({
    netAmount: 0,
    nextBet: 0,
  })

  const betData = ref({
    isWon: false,
    totalWinCash: 0,
  })

  let autoplayTimeout: number | null | undefined
  const runAutoplay = ref<boolean>(false)

  const oe = (r: number, n = 2) => {
    const t = Math.pow(10, n)
    return Math.round((r + Number.EPSILON) * t) / t
  }

  const autoplay = async () => {
    const numberOfBets = --autoplayOptions.value.numberOfBets
    const { credit } = useStatusStore()
    const { disableSidebar } = useGameStore()
    const { formatTicket } = useTicketHistory()

    const b = betData.value.isWon ? 'increaseByOnWin' : 'increaseByOnLoss'
    setGameState(GameStates.BETTING)

    try {
      const gameData = await NetworkController.Instance().bet(bets.value)

      if (!gameData) {
        return ModalController.Instance().error(t('modals.TEXT_GENERIC_ERROR_TEXT') + '\n')
      }

      if (gameData.publicState) {
        const TotalWin = gameData.publicState.totalWin

        setResult(gameData.publicState.result)
        setGameState(GameStates.SPINNING)
        setPlayerResults(TotalWin, gameData.publicState.prizes, gameData.publicState.isWon)

        setResultsHistory(formatTicket(gameData))

        betData.value = {
          isWon: gameData.publicState.totalWin > 0,
          totalWinCash: TotalWin,
        }

        autoplaySession.value.netAmount =
          autoplaySession.value.netAmount +
          oe(betData.value.totalWinCash - (autoplaySession.value.nextBet ?? totalBet), 2)
      }

      if (
        (autoplaySession.value.nextBet === null && (autoplaySession.value.nextBet = +totalBet),
        autoplayOptions.value.numberOfBets === 0 || credit - autoplaySession.value.nextBet < 0)
      ) {
        disableSidebar(false)
        setDisabledInteraction(false)
        clearAutoPlayValues()
        runAutoplay.value = false
        console.log('numbrer of bets error')
        return
      }
      autoplayOptions.value.numberOfBets = numberOfBets

      autoplaySession.value.nextBet =
        autoplayOptions.value[b] > 0
          ? Math.min(0, (autoplaySession.value.nextBet * (1 + autoplayOptions.value[b] / 100), 2))
          : +totalBet

      if (
        (betData.value.isWon &&
          autoplayOptions.value.stopOnProfit > 0 &&
          autoplayOptions.value.stopOnProfit <= autoplaySession.value.netAmount) ||
        (!betData.value.isWon &&
          autoplayOptions.value.stopOnLoss > 0 &&
          autoplayOptions.value.stopOnLoss <= Math.abs(autoplaySession.value.netAmount))
      ) {
        runAutoplay.value = false
        disableSidebar(false)
        clearAutoPlayValues()
        setDisabledInteraction(false)

        return
      }

      const increaseWin =
        autoplaySession.value.netAmount +
        (autoplaySession.value.netAmount * autoplayOptions.value.increaseByOnWin) / 100

      if (
        betData.value.isWon &&
        autoplayOptions.value.increaseByOnWin > 0 &&
        increaseWin <= autoplaySession.value.netAmount
      ) {
        runAutoplay.value = false
        disableSidebar(false)
        clearAutoPlayValues()
        setDisabledInteraction(false)
        return
      }
    } catch (_err: any) {
      ModalController.Instance().error(
        t('modals.TEXT_GENERIC_ERROR_TEXT') + '\n' + JSON.stringify(_err),
      )
      disableSidebar(false)

      setDisabledInteraction(false)
      clearAutoPlayValues()
      return
    }
  }

  const clearAutoPlayValues = () =>
    (autoplaySession.value = {
      netAmount: 0,
      nextBet: 0,
    })

  const startAutoplay = () => {
    if (autoplayOptions.value.numberOfBets === 0) {
      runAutoplay.value = false
      if (autoplayTimeout) clearTimeout(autoplayTimeout)
      return
    }
    disableSidebar(true)
    setDisabledInteraction(true)
    autoplayTimeout = setTimeout(
      () => {
        runAutoplay.value = true
        autoplay()
      },
      settings.value.INSTANT_BET ? 2000 : 1000,
    )
  }

  const stopAutoplay = () => {
    autoplayOptions.value.numberOfBets = 0

    clearTimeout(autoplayTimeout as any)
    runAutoplay.value = false
    disableSidebar(false)
    setDisabledInteraction(false)
    clearAutoPlayValues()
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  watch([betData, gameState], ([newA, newB], [prevA, prevB]) => {
    if (
      gameMode.value == GameModeType.AUTO &&
      ((!settings.value.INSTANT_BET &&
        newB === GameStates.RESULTS &&
        prevB === GameStates.SPINNING) ||
        (settings.value.INSTANT_BET && newB === GameStates.RESULTS && prevB === GameStates.BETTING))
    ) {
      startAutoplay()
    }
  })

  return {
    clearAutoPlayValues,
    stopAutoplay,
    startAutoplay,
    autoplayOptions,
    runAutoplay,
  }
}
