export type TicketType = {
  bet: number
  numbers: number[]
}

export type PlayerTurnType = {
  tickets: TicketType[]
}

export type PlayerDataType = {
  playerTurn: PlayerTurnType
}

export type FeaturesType = {
  playersData: PlayerDataType[]
}

export type PrizeType = {
  index: number
  bet: number
  refund: number
  win: number
  m: number
}

export default class PublicStateResponseData {
  public totalWin: number = -1
  public isWon: boolean = false
  public isEnded: boolean = false
  public prizes!: PrizeType[]
  public winIndexes!: number[]
  public result!: number
}
