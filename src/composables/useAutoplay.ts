import { GameModeType, useGameStore } from '@/stores/game'
import { storeToRefs } from 'pinia'
import { ref, watch } from 'vue'

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

    disableSidebar,
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

  const autoplay = async () => {}

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
