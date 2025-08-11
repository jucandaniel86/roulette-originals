import ModalController from '@/core/core.ModalController'
import NetworkController from '@/core/core.Network'
import { GameModeType, useGameStore } from '@/stores/game'
import { useStatusStore } from '@/stores/status'
import { storeToRefs } from 'pinia'
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useNumber } from './useNumber'

export type AutoplayOptionsType = {
  numberOfBets: number
  increaseByOnWin: number
  increaseByOnLoss: number
  stopOnProfit: number
  stopOnLoss: number
}

export const useAutoplay = () => {
  const { t } = useI18n()
  const { bet } = useStatusStore()
  const {
    setDisabledInteraction,
    setDisplayResults,
    setResults,
    disableSidebar,
    setResultsHistory,
  } = useGameStore()
  const { gameMode } = storeToRefs(useGameStore())

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

  const state = ref<'betting' | 'init'>('init')

  const oe = (r: number, n = 2) => {
    const t = Math.pow(10, n)
    return Math.round((r + Number.EPSILON) * t) / t
  }

  const autoplay = async () => {
    const numberOfBets = --autoplayOptions.value.numberOfBets
    const { credit } = useStatusStore()
    const { selectedNumbers, setWinningNumbers, clearWinningNumbers } = useGameStore()
    const { generateRandomNumbers } = useNumber()

    clearWinningNumbers()

    const b = betData.value.isWon ? 'increaseByOnWin' : 'increaseByOnLoss'
    try {
      const gameData = await NetworkController.Instance().bet(selectedNumbers)

      //use animation
      await setWinningNumbers(generateRandomNumbers())

      if (gameData.publicState) {
        const TotalWin = gameData.publicState.totalWinCash
        let PlayerBet = bet

        if (
          Array.isArray(gameData.publicState.features[0].playersData[0].playerTurn.tickets) &&
          typeof gameData.publicState.features[0].playersData[0].playerTurn.tickets[0] !==
            'undefined'
        ) {
          PlayerBet = gameData.publicState.features[0].playersData[0].playerTurn.tickets[0]?.bet
        }

        setDisplayResults(true)
        setResults({
          win: TotalWin,
          bet: PlayerBet,
        })
        setResultsHistory({
          win: TotalWin,
          id: crypto.randomUUID(),
        })

        betData.value = {
          isWon: gameData.publicState.totalWinCash > 0,
          totalWinCash: gameData.publicState.totalWinCash,
        }

        autoplaySession.value.netAmount =
          autoplaySession.value.netAmount +
          oe(betData.value.totalWinCash - (autoplaySession.value.nextBet ?? bet), 2)
      }

      if (
        (autoplaySession.value.nextBet === null && (autoplaySession.value.nextBet = +bet),
        autoplayOptions.value.numberOfBets === 0 || credit - autoplaySession.value.nextBet < 0)
      ) {
        disableSidebar(false)
        setDisabledInteraction(false)
        clearAutoPlayValues()
        state.value = 'init'
        return
      }
      autoplayOptions.value.numberOfBets = numberOfBets

      autoplaySession.value.nextBet =
        autoplayOptions.value[b] > 0
          ? Math.min(0, (autoplaySession.value.nextBet * (1 + autoplayOptions.value[b] / 100), 2))
          : +bet

      if (
        (betData.value.isWon &&
          autoplayOptions.value.stopOnProfit > 0 &&
          autoplayOptions.value.stopOnProfit <= autoplaySession.value.netAmount) ||
        (!betData.value.isWon &&
          autoplayOptions.value.stopOnLoss > 0 &&
          autoplayOptions.value.stopOnLoss <= Math.abs(autoplaySession.value.netAmount))
      ) {
        //@todo close
        console.log('stop on profit exceded')
        disableSidebar(false)
        clearAutoPlayValues()
        setDisabledInteraction(false)
        state.value = 'init'
        return
      }
    } catch (_err: any) {
      ModalController.Instance().error(
        t('modals.TEXT_GENERIC_ERROR_TEXT') + '\n' + JSON.stringify(_err),
      )
      disableSidebar(false)
      state.value = 'init'
      setDisabledInteraction(false)
      clearWinningNumbers()
      clearAutoPlayValues()
      return
    }
  }

  const run = () => {
    if (autoplayOptions.value.numberOfBets === 0) return
    setTimeout(() => {
      setDisabledInteraction(true)
      disableSidebar(true)
      state.value = 'betting'

      autoplay()
    }, 1000)
  }

  const clearAutoPlayValues = () =>
    (autoplaySession.value = {
      netAmount: 0,
      nextBet: 0,
    })

  watch(betData, () => {
    if (gameMode.value == GameModeType.AUTO && state.value === 'betting') {
      run()
    }
  })

  return {
    clearAutoPlayValues,
    run,
    autoplayOptions,
  }
}
