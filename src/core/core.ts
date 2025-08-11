/*
	__init() function logic
	1. open websocket
	2. authenticate
	3. handle errors if exists on points 1,2
	4. Load Provider
	5. Load Proxi (wrapper)
	   a) Proxi gameLoading started()
	6. Load History
	8. Load Sounds
	9. Load & Config Currency Class
	   a) Proxi game gameLoadingEnded()
	*/
import { ref } from 'vue'
import {
  DEFAULT_SCREEN,
  GAME_NAME,
  GAME_USE_DRAWS,
  GAME_USE_HISTORY,
  GAME_USE_PROXY,
} from '@/config/app.config'
import HttpConnection from './core.HttpConnection'
import NetworkController from './core.Network'
import Provider from './core.Provider'
import Proxi from './core.Proxi'
import SoundManager from './core.Sounds'
import CurrencyConverter from './core.CurrencyConvertor'
import { ScreenEnum } from './enums/Screens'
import { AppStates } from './enums/AppStates'
import ModalController from './core.ModalController'
// import Utils from './core.Util'
import { useAppStore } from '@/stores/app'

export default function useAppState() {
  const screen = ref<ScreenEnum>(DEFAULT_SCREEN)
  const state = ref<AppStates>(AppStates.INIT)

  const setScreen = (_screen: ScreenEnum) => (screen.value = _screen)
  const setState = (_state: AppStates) => (state.value = _state)

  //stores
  const appStore = useAppStore()

  const __init = async () => {
    //0. default options
    title()
    color()

    //0. get provider
    Provider.Instance().initialize()

    //1. open websocket
    try {
      await NetworkController.Instance().initialize()
    } catch (err) {
      ModalController.Instance().error(String(err))
      throw '1. OpenSocket Error'
    }

    //2. authenticate
    const userData: any = await NetworkController.Instance().authenticate()

    if (userData.error.errorCode !== 0) {
      ModalController.Instance().error(String(userData.error.errorMessage))
      throw '2. Login Auth '
    }
    setState(AppStates.AUTH)

    //3. game setup
    const gameSetup: any = await NetworkController.Instance().setup()

    if (userData.error.errorCode !== 0) {
      ModalController.Instance().error(String(gameSetup.error.errorMessage))
      throw '3. Game Setup Error'
    }
    setState(AppStates.LOBBY)

    //4. Load Provider
    if (GAME_USE_PROXY) {
      //4. Load Proxi (wrapper)
      await Proxi.Instance().init(Provider.Instance().getProvider())
    }

    //5a Loading Started
    Proxi.Instance().gameLoadingStarted()
    //6. Load Provider
    HttpConnection.Instance().setProvider(Provider.Instance().getProvider())

    //7. Load Feed
    if (GAME_USE_HISTORY) {
      await HttpConnection.Instance().getHistory()
    }

    if (GAME_USE_DRAWS) {
      await HttpConnection.Instance().getDraws()
    }

    //9. Load Sounds
    try {
      await SoundManager.Instance().load()
    } catch (err) {
      console.warn('[SOUNDMANAGER]', err)
    }

    //10. Load & Config Currency Class
    CurrencyConverter.Initialize(userData.currency)

    //10a  Proxi game gameLoadingEnded()
    Proxi.Instance().gameLoadingEnded()

    setScreen(ScreenEnum.GAME)
    setState(AppStates.ON_GAME)
  }

  const title = () => {
    document.title = GAME_NAME
  }

  const color = () => {
    document.body.className = `swp_container__${appStore.color}`
  }

  appStore.$subscribe(() => {
    color()
  })

  return {
    screen,
    state,
    setScreen,
    setState,
    __init,
  }
}
