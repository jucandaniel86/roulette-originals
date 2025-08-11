import Singleton from './core.Singleton'
import Utils from './core.Util'

export type ProviderType = {
  wrapper: string
  history: string
  draws: string
  ws: string
  env: string
  externalHistory: string
}

export enum ProviderEndpointEnum {
  DEV = 'dev.cbcontents.com',
  UAT = 'uat.cbcontents.com',
  PROD = 'prod.cbcontents.com',
}

export default class Provider extends Singleton {
  protected static _Instance: Provider
  private endpoint: string | undefined = ''
  private provider!: ProviderType

  protected name = '[PROVIDER]'

  constructor() {
    super()
  }

  public static Instance(): Provider {
    if (!this._Instance) {
      this._Instance = new Provider()
    }

    return this._Instance
  }

  public initialize(): void {
    this.endpoint = Utils.getUrlParameter('endpoint')
    const date = new Date()

    switch (this.endpoint) {
      case ProviderEndpointEnum.DEV:
        this.provider = {
          wrapper: 'https://demo.cbcontents.com/widget/game-wrapper/wrapper.js?v=' + date.getTime(),
          ws: 'wss://' + this.endpoint + '/websocket',
          env: 'DEV',
          history: 'https://dev.igameforge.com/gforge/history/games/pick5/tickets',
          draws: 'https://dev.igameforge.com/gforge/history/games/pick5/draws',
          externalHistory:
            'https://multiplaygaming.com/demogames/cowboykeno/HTMLTableBetList_v2.jsp',
        }
        break
      case ProviderEndpointEnum.UAT:
        this.provider = {
          wrapper:
            'https://demo-uat.cbcontents.com/widget/game-wrapper/wrapper.js?v=' + date.getTime(),
          ws: 'wss://' + this.endpoint + '/websocket',
          env: 'UAT',
          history: 'https://uat.igameforge.com/gforge/history/games/pick5/tickets',
          draws: 'https://uat.igameforge.com/gforge/history/games/pick5/draws',
          externalHistory:
            'https://multiplaygaming.com/demogames/cowboykeno/HTMLTableBetList_v2.jsp',
        }
        break
      case ProviderEndpointEnum.PROD:
        this.provider = {
          wrapper: 'https://fe.cbcontents.com/game-wrapper/wrapper.js?v=' + date.getTime(),
          ws: 'wss://' + this.endpoint + '/websocket',
          env: 'PROD',
          history: 'https://prod.igameforge.com/gforge/history/games/pick5/tickets',
          draws: 'https://prod.igameforge.com/gforge/history/games/pick5/draws',
          externalHistory:
            'https://multiplaygaming.com/demogames/cowboykeno/HTMLTableBetList_v2.jsp',
        }
        break
      default:
        this.provider = {
          wrapper: 'https://demo.cbcontents.com/widget/game-wrapper/wrapper.js?v=' + date.getTime(),
          ws: 'wss://' + this.endpoint + '/websocket',
          env: 'DEV',
          history: 'https://dev.igameforge.com/gforge/history/games/pick5/tickets',
          draws: 'https://dev.igameforge.com/gforge/history/games/pick5/draws',
          externalHistory:
            'https://multiplaygaming.com/demogames/cowboykeno/HTMLTableBetList_v2.jsp',
        }
    }
  }

  public getProvider(): ProviderType {
    return this.provider
  }

  public printProvider(): void {
    this._info(this.provider)
  }

  public static goToExternalHistory(): void {
    const historyUrl: any = new URL(Provider.Instance().provider.externalHistory)
    historyUrl.searchParams.append('siteID', Utils.getUrlParameter('siteID') as string)
    historyUrl.searchParams.append('gameID', Utils.getUrlParameter('gameID') as string)
    historyUrl.searchParams.append('fixedID', Utils.getUrlParameter('playToken') as string)
    //@ts-ignore
    window.open(historyUrl, '_blank').focus()
  }
}
