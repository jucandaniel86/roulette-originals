import type CreditData from '../CreditData'
import ResponseData from '../ResponseData'

export type RoomType = {
  id: string
  name: string
  nameResx: string
  currency: string
  rooms: any[]
  data: any[]
}

export default class LobbyResponseData extends ResponseData {
  public requestType: string = ''
  public roomTypes: RoomType[] = []
  public isJoined: boolean = false
  public joinedRoomId: string = ''
  public updateType: string = 'LOBBY'
  public error: any
  public credit!: CreditData
}
