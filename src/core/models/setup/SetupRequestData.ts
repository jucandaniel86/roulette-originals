import RequestData from '../RequestData'

type PublicStateSetupData = {
  action: string
}

export default class SetupRequestData extends RequestData {
  public bonusRef1: string = ''
  public gameID: string | number = ''
  public padding: number = 20
  public requestType: string = ''
  public sessionID: string = ''
  public publicState: PublicStateSetupData | undefined = undefined

  public setup: boolean = false
}
