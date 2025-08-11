import type { TicketType } from '@/stores/game'
import ResponseData from '../ResponseData'

export type PlayerViewType = {
  playerId: string
  name: string
  totalWin: number
  tickets: TicketType[]
}

type JoinConfigType = {
  betLevels: number[]
  defaultIndex: number
}

type PublicViewType = {
  isEnded: boolean
  isWon: boolean
  version: string
  game: string
  canCollect: boolean
  config: JoinConfigType
  totalWinCash: number
  totalWinCoins: number
  bet: number
  rolls: any[]
  features: any[]
}

export default class JoinResponseData extends ResponseData {
  public requestType: string = ''
  public playerView!: PlayerViewType
  public publicView!: PublicViewType
}
