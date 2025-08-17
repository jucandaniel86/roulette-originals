import type BetResponseData from '@/core/models/bet/BetResponseData'
import type { PastResultType } from '@/stores/game'

export const useTicketHistory = () => {
  const formatTicket = (_payload: BetResponseData): PastResultType => {
    const totalBet: any = _payload.publicState.prizes.reduce(
      (prevPrize, crrPrize) => prevPrize + crrPrize.bet,
      0,
    )
    const totalWin = _payload.publicState.totalWin
    const multiplier = totalBet / totalWin

    return {
      id: _payload.round.roundID,
      playerResults: {
        totalBet,
        multiplier,
        totalWin,
        isWon: _payload.publicState.isWon,
      },
      prizes: _payload.publicState.prizes,
      date: new Date().toISOString(),
      result: _payload.publicState.result,
    }
  }

  return {
    formatTicket,
  }
}
