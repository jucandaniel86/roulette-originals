import { useGameStore } from '@/stores/game'
import type { ProviderType } from './core.Provider'
import Singleton from './core.Singleton'
import Utils from './core.Util'
import { useSessionStore } from '@/stores/session'

export default class HttpConnection extends Singleton {
  protected name = '[HTTPCONNECTION]'
  protected static _Instance: HttpConnection
  private provider!: ProviderType

  constructor() {
    super()
  }

  public setProvider(provider: ProviderType) {
    this.provider = provider
  }

  public static Instance(): HttpConnection {
    if (!this._Instance) {
      this._Instance = new HttpConnection()
    }

    return this._Instance
  }

  private fetch = async (url: string, params = {}) => {
    const results = await fetch(`${url}?${new URLSearchParams(params).toString()}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(async (_res) => await _res.json())

    this._info(results)

    return results
  }

  getHistory = async () => {
    const { setHistory } = useGameStore()
    const { fixedID } = useSessionStore()
    try {
      //log send
      const payload = {
        siteId: Utils.getUrlParameter('siteId'),
        gameId: Utils.getUrlParameter('gameId'),
        userId: fixedID,
      }

      this._info({
        URL: this.provider.history,
        DATA: payload,
      })

      const historyData = await this.fetch(this.provider.history, payload)

      if (!historyData) {
        throw 'History Err::'
      }
      setHistory(historyData)
    } catch (err: any) {
      this._warn(err)
    }
  }

  getDraws = async () => {
    const { setDraws } = useGameStore()
    const { fixedID } = useSessionStore()
    try {
      //log send
      const payload = {
        siteId: Utils.getUrlParameter('siteId'),
        gameId: Utils.getUrlParameter('gameId'),
        userId: fixedID,
      }

      this._info({
        URL: this.provider.draws,
        DATA: payload,
      })

      const drawsData = await this.fetch(this.provider.draws, payload)

      if (!drawsData) {
        throw 'Draws Err::'
      }
      setDraws(drawsData.draws)
    } catch (err: any) {
      this._warn(err)
    }
  }
}
