import ModalController from './core.ModalController'
import Singleton from './core.Singleton'
import Utils from './core.Util'
import { i18n } from '@/i18n'

export default class ErrorManager extends Singleton {
  protected name = '[ERROR_MANAGER]'
  protected static _Instance: ErrorManager

  public static Instance(): ErrorManager {
    if (!this._Instance) {
      this._Instance = new ErrorManager()
    }

    return this._Instance
  }

  handle(_errorCode: number) {
    switch (_errorCode) {
      //DUPLICATE SOCKET SESSION
      case 33:
        return this.handleRedirect()
      case 13:
        return this.handleRedirect()
      case 116:
        return this.handleRedirect()
      default:
        return this.handleRedirect()
    }
  }

  handleRedirect() {
    const disconnectUrl = Utils.getUrlParameter('disconnectredirect')
    let _redirect: any = false

    const t = i18n.global.t

    //@ts-ignore
    if (parseInt(Utils.getUrlParameter('siteID')) !== 30) {
      ModalController.Instance().error(String(t('modals.TEXT_WEBSOCKET_CLOSED')))
      return
    }

    if (
      parseInt(Utils.getUrlParameter('siteID') as string) === 30 &&
      parseInt(Utils.getUrlParameter('brandID') as string) === 1
    ) {
      _redirect = disconnectUrl !== '' ? disconnectUrl : 'https://www.lottogo.com/en?launch=4551'
    } else if (
      parseInt(Utils.getUrlParameter('siteID') as string) === 30 &&
      parseInt(Utils.getUrlParameter('brandID') as string) === 2
    ) {
      _redirect = disconnectUrl !== '' ? disconnectUrl : 'https://www.lottogo.com.au/en?launch=4551'
    }

    if (_redirect) {
      //@ts-ignore
      window.top.location.href = _redirect
    }
  }
}
