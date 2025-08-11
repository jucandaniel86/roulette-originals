import RequestData from '../RequestData'

export default class JoinRequestData extends RequestData {
  public requestType = 'join'
  public roomTypeId: string = ''
  public roomId: string | null = ''
}
