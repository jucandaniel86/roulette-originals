import NetworkController from '@/core/core.Network'
import SoundManager from '@/core/core.Sounds'
import { GameStates, useGameStore } from '@/stores/game'
import { useStatusStore } from '@/stores/status'
import { storeToRefs } from 'pinia'
import { useTicketHistory } from './useTicketHistory'

export const useSidebarActions = () => {
  const handlePlaceBet = async () => {
    SoundManager.Instance().play('PLACE_BET')

    const { setResultsHistory, setDisabledInteraction, setGameState, setResult, setPlayerResults } =
      useGameStore()
    const { setStatusData, credit } = useStatusStore()
    const { bets, totalBet } = storeToRefs(useGameStore())
    const { formatTicket } = useTicketHistory()

    setStatusData({
      credit: credit - totalBet.value,
    })
    setGameState(GameStates.BETTING)
    const gameData = await NetworkController.Instance().bet(bets.value)

    if (gameData.publicState) {
      const TotalWin = gameData.publicState.totalWin

      setResult(gameData.publicState.result)
      setGameState(GameStates.SPINNING)
      setPlayerResults(TotalWin, gameData.publicState.prizes, gameData.publicState.isWon)

      setResultsHistory(formatTicket(gameData))
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
