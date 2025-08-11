import type CreditData from '../CreditData'
import type ErrorData from '../ErrorData'
import type { PlayerViewType } from '../join/JoinResponseData'
import ResponseData from '../ResponseData'
import type PublicStateResponseData from './PublicStateResponseData'

export default class BetResponseData extends ResponseData {
  public publicState!: PublicStateResponseData
  public playerView!: PlayerViewType
  public error!: ErrorData
  public requestType: string = ''
  public credit!: CreditData
}
