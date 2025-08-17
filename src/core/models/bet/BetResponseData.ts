import type CreditData from '../CreditData'
import type ErrorData from '../ErrorData'
import ResponseData from '../ResponseData'
import type PublicStateResponseData from './PublicStateResponseData'

type RoundType = {
  open: boolean
  close: boolean
  roundID: string
}

export default class BetResponseData extends ResponseData {
  public publicState!: PublicStateResponseData
  public error!: ErrorData
  public requestType: string = ''
  public credit!: CreditData
  public round!: RoundType
}
