import Singleton from './core.Singleton'
import Utils from './core.Util'
import WebsocketConnector from './core.Websocket'
import LoginRequestData from './models/login/LoginRequestData'
import type LoginResponseData from './models/login/LoginResponseData'

import type BetResponseData from './models/bet/BetResponseData'
import type RequestData from './models/RequestData'

import { DEFAULT_SOCKET_ENDPOINT, DEFAULT_SOCKET_SERVER_PATH, GAME_ID } from '@/config/app.config'
import { useGameStore } from '@/stores/game'
import type PlayerDetailsData from './models/PlayerDetailsData'
import type LobbyResponseData from './models/lobby/LobbyResponseData'
import type JoinRequestData from './models/join/JoinRequestData'
import type JoinResponseData from './models/join/JoinResponseData'
import BetRequestData from './models/bet/BetRequestData'
import Provider from './core.Provider'
import SetupRequestData from './models/setup/SetupRequestData'
import { useSessionStore } from '@/stores/session'
import { useStatusStore } from '@/stores/status'

export default class NetworkController extends Singleton {
  public serverProtocol: string = ''

  public endPoint: string = DEFAULT_SOCKET_ENDPOINT

  public serverpath: string = DEFAULT_SOCKET_SERVER_PATH

  public loginRequestData!: LoginRequestData

  public historyURL: string | undefined

  public cashierURL: string | undefined

  private allowedGameIds = [GAME_ID]

  private ws!: WebsocketConnector

  protected static _Instance: NetworkController

  public static Instance(): NetworkController {
    if (!this._Instance) {
      this._Instance = new NetworkController()
    }

    return this._Instance
  }

  private loadURLParameters(): void {
    this.loginRequestData = new LoginRequestData()
    this.loginRequestData.requestType = 'login'

    const endPoint = Provider.Instance().getProvider().ws
    if (Utils.IsVariableSet(endPoint) === false) {
      // PopUp.ShowReboot();
      throw new Error('[NETWORKCONTROLLER] Endpoint URL parameter not found.')
    }

    this.endPoint = endPoint as string

    const gameID = Utils.getUrlParameter('gameID')
    //@ts-ignore
    if (Utils.IsVariableSet(gameID) === true) this.loginRequestData.gameID = gameID

    const siteID = Utils.getUrlParameter('siteID')
    //@ts-ignore
    if (Utils.IsVariableSet(siteID) === true) this.loginRequestData.siteID = siteID

    const brandID = Utils.getUrlParameter('brandID')
    //@ts-ignore
    if (Utils.IsVariableSet(brandID) === true) this.loginRequestData.brandID = brandID

    const fixedID = Utils.getUrlParameter('fixedID')
    //@ts-ignore
    if (Utils.IsVariableSet(fixedID) === true) this.loginRequestData.fixedID = fixedID

    const playToken = Utils.getUrlParameter('playToken')
    //@ts-ignore
    if (Utils.IsVariableSet(playToken) === true) this.loginRequestData.sessionID = playToken

    const funReal = Utils.getUrlParameter('funReal')
    //@ts-ignore
    if (Utils.IsVariableSet(funReal) === true) this.loginRequestData.funReal = funReal

    const sessionID = Utils.getUrlParameter('sessionID', false)
    if (Utils.IsVariableSet(sessionID) === true) {
      //@ts-ignore
      this.loginRequestData.sessionID = sessionID
    }

    const cashierURL = Utils.getUrlParameter('cashierURL')
    if (Utils.IsVariableSet(cashierURL) === true) this.cashierURL = cashierURL
    else this.cashierURL = undefined

    const historyURL = Utils.getUrlParameter('historyURL')
    if (Utils.IsVariableSet(historyURL) === true) this.historyURL = historyURL
    else this.historyURL = undefined

    if (this.loginRequestData.validate() === false) {
      throw new Error('[NETWORKCONTROLLER] Invalid URL Params.')
    }

    if (!this.allowedGameIds.includes(parseInt(this.loginRequestData.gameID))) {
      throw new Error('[NETWORKCONTROLLER] Invalid Game ID.')
    }
  }

  private async initializeServer(): Promise<void> {
    this.ws = new WebsocketConnector()
    await this.ws.initialize(this.serverProtocol + this.endPoint + this.serverpath)
  }

  public async initialize(): Promise<void> {
    this.loadURLParameters()
    await this.initializeServer()
  }

  private generateLoginRequest(): LoginRequestData {
    return this.loginRequestData
  }

  public isConnected(): boolean {
    return this.ws.isConnected()
  }

  public isAuthenticated(): boolean {
    return this.ws.isAuthenticated()
  }

  private updateSessionID(playerDetails: PlayerDetailsData): void {
    if (this.loginRequestData.sessionID !== playerDetails.fixedReference)
      this.loginRequestData.sessionID = playerDetails.fixedReference
  }

  private generateSetupData(): RequestData {
    const finalRequest = new SetupRequestData()

    finalRequest.publicState = {
      action: 'INIT',
    }
    finalRequest.setup = false
    finalRequest.bonusRef1 = ''

    finalRequest.sessionID = this.loginRequestData.sessionID
    finalRequest.requestType = 'game'
    finalRequest.gameID = this.loginRequestData.gameID
    return finalRequest
  }

  private generateBetData(lines: any): RequestData {
    const finalRequest = new BetRequestData()
    const { bet } = useStatusStore()

    const bets = {
      bet: bet,
      numbers: lines,
    }
    finalRequest.sessionID = this.loginRequestData.sessionID
    finalRequest.gameID = this.loginRequestData.gameID
    finalRequest.publicState = {
      action: 'START',
      payload: {
        bets: [bets],
        serId: 'ser.keno.start',
      },
    }

    finalRequest.requestType = 'game'

    return finalRequest
  }

  public authenticate(): Promise<LoginResponseData> {
    return new Promise((resolve, reject) => {
      if (this.isConnected() === false) {
        reject('Invalid Connection')
        return
      }
      this.ws.authenticate(this.generateLoginRequest()).then((response) => {
        if (Utils.IsVariableSet(response.credit) === true) {
          //update to store all the shit
          this.updateSessionID(response.playerDetails)

          const { setSessionData } = useSessionStore()
          const { setStatusData } = useStatusStore()

          setStatusData({
            bet: response.defaultStake,
            credit: response.credit?.amount,
          })

          setSessionData({
            sessionID: response.playerDetails.sessionId,
            fixedID: response.playerDetails.fixedReference,
            credit: response.credit,
            currency: response.currency,
            betLevels: response.stakeValues,
            betIndex: response.stakeValues.indexOf(response.defaultStake),
          })
        }

        resolve(response)
      })
    })
  }

  public async setup(): Promise<BetResponseData> {
    if (this.isAuthenticated() === false) {
      return this.ws
        .authenticate(this.generateLoginRequest())
        .then(() => this.ws.requestNextGame(this.generateSetupData() as any))
        .then((response) => {
          if (Utils.IsVariableSet(response.credit) === true)
            // GameController.UpdateCreditData(response.credit);
            //@ts-ignore
            this.updateSessionID(response.playerDetails)
          return response
        })
    } else {
      return this.ws.requestNextGame(this.generateSetupData() as any).then((response) => {
        if (Utils.IsVariableSet(response.credit) === true)
          // GameController.UpdateCreditData(response.credit);

          //@ts-ignore
          this.updateSessionID(response.playerDetails)

        return response
      })
    }
  }

  public async lobby(): Promise<LobbyResponseData> {
    return this.ws.lobby({ requestType: 'lobby' }).then((response) => {
      return response
    })
  }

  public async join(_payload: JoinRequestData): Promise<JoinResponseData> {
    return this.ws.join(_payload).then((response) => {
      const { setGamePlay } = useGameStore()
      const currentFeature = this.ws.getCurrentFeature(response.publicView.features)
      const playerView = response.playerView
      if (currentFeature) {
        setGamePlay({
          state: currentFeature.state,
          room: currentFeature.id,
        })
      }
      if (playerView.tickets) {
        setGamePlay({
          tickets: playerView.tickets,
        })
      }
      return response
    })
  }

  public async bet(lines: any[]): Promise<BetResponseData> {
    // const { setGamePlay } = useGameStore()

    if (this.isAuthenticated() === false) {
      return this.ws
        .authenticate(this.generateLoginRequest())
        .then(() => this.ws.requestNextGame(this.generateBetData(lines) as any))
        .then((response) => {
          if (Utils.IsVariableSet(response.credit) === true)
            // GameController.UpdateCreditData(response.credit);
            //@ts-ignore
            this.updateSessionID(response.playerDetails)

          return response
        })
    } else {
      return this.ws
        .requestNextGame(this.generateBetData(lines) as any)
        .then((response) => response)
    }
  }
}
