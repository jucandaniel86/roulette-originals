import Utils from '@/core/core.Util'
import RequestData from '../RequestData'

export default class LoginRequestData extends RequestData {
  public sessionID: string = ''
  public funReal: string = '-1'
  public fixedID: string = ''
  public siteID: string = ''
  public gameID: string = ''

  public validate(): boolean {
    return (
      Utils.IsVariableSet(this.sessionID) &&
      this.sessionID !== '' &&
      Utils.IsVariableSet(this.fixedID) &&
      this.fixedID !== '-1' &&
      Utils.IsVariableSet(this.siteID) &&
      this.siteID !== '' &&
      Utils.IsVariableSet(this.gameID) &&
      this.gameID !== ''
    )
  }
}
