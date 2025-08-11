import { MAX_RANDOM_BALL, MAX_SELECTED_NUMBERS } from '@/config/app.config'
import NetworkController from '@/core/core.Network'
import SoundManager from '@/core/core.Sounds'
import { useGameStore } from '@/stores/game'
import { useStatusStore } from '@/stores/status'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useNumber } from './useNumber'

export const useSidebarActions = () => {
  const localNumbers = ref<number[]>([])
  const { selectedNumbers, displayResults } = storeToRefs(useGameStore())

  const handleAutoPick = () => {
    const { setSelectedNumbers, setDisabledInteraction, setDisplayResults, setResults } =
      useGameStore()

    if (displayResults.value) {
      setDisplayResults(false)
      setSelectedNumbers([])
      setResults({
        win: 0,
      })
    }

    const numbers = new Array(MAX_RANDOM_BALL).fill(0).map((o, index) => index)
    let u = 0

    if (selectedNumbers.value.length === MAX_SELECTED_NUMBERS) {
      localNumbers.value = numbers
      u = 10
    } else {
      localNumbers.value = numbers.filter((number) => !selectedNumbers.value.includes(number))
      u = 10 - selectedNumbers.value.length
    }

    //disable interaction
    setDisabledInteraction(true)
    let d = 0
    const h = () => {
      setTimeout(
        () => {
          const newIndex = Math.floor(Math.random() * localNumbers.value.length)
          const newNumber = localNumbers.value[newIndex]

          setSelectedNumbers([...selectedNumbers.value, newNumber])
          localNumbers.value = localNumbers.value.filter(
            (number, index, values) => number !== values[newIndex],
          )
          d++
          SoundManager.Instance().play('CLICK')
          if (d >= u) {
            localNumbers.value = []
            setDisabledInteraction(false)
            return
          }
          h()
        },
        d === 0 ? 0 : 150,
      )
    }
    if (selectedNumbers.value.length >= MAX_SELECTED_NUMBERS) {
      return
    }
    h()
  }

  const handleClearTable = () => {
    const {
      setResults,
      setSelectedNumbers,
      setDisabledInteraction,
      setDisplayResults,
      clearWinningNumbers,
    } = useGameStore()
    SoundManager.Instance().play('CLICK')
    setSelectedNumbers([])
    setDisabledInteraction(false)
    setDisplayResults(false)
    clearWinningNumbers()
    setResults({ win: 0 })
  }

  const handlePlaceBet = async () => {
    SoundManager.Instance().play('PLACE_BET')
    const {
      selectedNumbers,
      clearWinningNumbers,
      setDisplayResults,
      setResults,
      setResultsHistory,
      setWinningNumbers,
      setDisabledInteraction,
    } = useGameStore()
    const { setStatusData, bet, credit } = useStatusStore()
    const { generateRandomNumbers } = useNumber()

    clearWinningNumbers()
    setStatusData({
      credit: credit - bet,
    })

    const gameData = await NetworkController.Instance().bet([...selectedNumbers])
    const numbers = generateRandomNumbers()
    await setWinningNumbers(numbers)
    if (gameData.publicState) {
      const TotalWin = gameData.publicState.totalWinCash
      let PlayerBet = bet

      if (
        Array.isArray(gameData.publicState.features[0].playersData[0].playerTurn.tickets) &&
        typeof gameData.publicState.features[0].playersData[0].playerTurn.tickets[0] !== 'undefined'
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
      setDisabledInteraction(false)
    }

    if (gameData.credit) {
      setStatusData({
        credit: gameData.credit.amount,
      })
    }
  }

  return {
    handleAutoPick,
    handleClearTable,
    handlePlaceBet,
  }
}
