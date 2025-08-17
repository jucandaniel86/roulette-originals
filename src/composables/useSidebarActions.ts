import NetworkController from '@/core/core.Network'
import SoundManager from '@/core/core.Sounds'
import { GameStates, useGameStore } from '@/stores/game'
import { useStatusStore } from '@/stores/status'
import { storeToRefs } from 'pinia'

export const useSidebarActions = () => {
  const handlePlaceBet = async () => {
    SoundManager.Instance().play('PLACE_BET')

    const { setResultsHistory, setDisabledInteraction, setGameState, setResult } = useGameStore()
    const { setStatusData, credit } = useStatusStore()
    const { bets, totalBet } = storeToRefs(useGameStore())

    setStatusData({
      credit: credit - totalBet.value,
    })
    setGameState(GameStates.BETTING)
    const gameData = await NetworkController.Instance().bet(bets.value)

    if (gameData.publicState) {
      setResult(gameData.publicState.result)
      setGameState(GameStates.SPINNING)
      const TotalWin = gameData.publicState.totalWin
      // let PlayerBet = bet

      // if (
      //   Array.isArray(gameData.publicState.features[0].playersData[0].playerTurn.tickets) &&
      //   typeof gameData.publicState.features[0].playersData[0].playerTurn.tickets[0] !== 'undefined'
      // ) {
      //   PlayerBet = gameData.publicState.features[0].playersData[0].playerTurn.tickets[0]?.bet
      // }

      // setDisplayResults(true)
      // setResults({
      //   win: TotalWin,
      //   bet: PlayerBet,
      // })
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
