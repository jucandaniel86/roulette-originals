import NetworkController from '@/core/core.Network'
import SoundManager from '@/core/core.Sounds'
import { useGameStore } from '@/stores/game'
import { useStatusStore } from '@/stores/status'
import { useNumber } from './useNumber'

export const useSidebarActions = () => {
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
    handlePlaceBet,
  }
}
