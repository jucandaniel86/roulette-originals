import type BetResponseData from '@/core/models/bet/BetResponseData'
import type { PastResultType } from '@/stores/game'
import { useNumber } from './useNumber'

export const useTicketHistory = () => {
  const formatTicket = (_payload: BetResponseData): PastResultType => {
    const totalBet: any = _payload.publicState.prizes.reduce(
      (prevPrize, crrPrize) => prevPrize + crrPrize.bet,
      0,
    )
    const totalWin = _payload.publicState.totalWin
    const multiplier = totalWin > 0 ? totalBet / totalWin : 0

    const { generateRandomInt } = useNumber()

    return {
      id: _payload.round.roundID || `ID${generateRandomInt(1, 999999999)}`,
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
