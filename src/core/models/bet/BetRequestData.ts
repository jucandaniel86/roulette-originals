import type { RoulleteBetType } from '@/stores/game'
import RequestData from '../RequestData'

interface PublicStateBetRequestData {
  bets: RoulleteBetType[]
  action: string
}

export default class BetRequestData extends RequestData {
  public gameID: string | number = ''
  public requestType: string = 'game'
  public sessionID: string = ''
  public publicState!: PublicStateBetRequestData
}
