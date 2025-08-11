import { ScreenEnum } from '@/core/enums/Screens'

//Tabs Configuration
export enum TabsEnum {
  RULES = 'rules',
  PAYTABLES = 'paytables',
  RESULTS = 'results',
  DRAW = 'draw',
}

export const GAME_NAME = 'Roulette Originals'
export const APP_STORAGE_ID = GAME_NAME.split(' ').join('_') + '_store'
export const GAME_ID = 11510
export const MOBILE_RESOLUTION = 915

//Game Configuration
export const MIN_RANDOM_BALL = 1
export const MAX_RANDOM_BALL = 80
export const MAX_SELECTED_NUMBERS = 10
export const MIN_SELECTED_NUMBERS = 2

export const AUTOPLAY_MAX_NO_BETS = 100
export const PAST_RESULTS_LIMIT = 6
export const PAST_RESULTS_MOBILE_LIMIT = 3

export const DEFAULT_ROOM = 'pick5'
export const DEFAULT_COLOR = 'blue'

export const DEFAULT_TICKET_COST = 0.5
export const DEFAULT_SCREEN: ScreenEnum = ScreenEnum.LOADING
export const DEFAULT_TAB = TabsEnum.RESULTS

//Services configuration
export const GAME_USE_HISTORY = false
export const GAME_USE_DRAWS = false

//SOUNDS CONFIG
export const GAME_SOUNDS = new Map<string, string>()
GAME_SOUNDS.set('BALL_MISS', 'small-short-deep-whoosh.mp3')
GAME_SOUNDS.set('BALL_MATCH', 'fast-deep-cinematic-whoosh-swo.mp3')
GAME_SOUNDS.set('CLICK', 'click.mp3')
GAME_SOUNDS.set('CANT_BET', 'cant_bet.mp3')
GAME_SOUNDS.set('PLACE_BET', 'play_click.mp3')
GAME_SOUNDS.set('REVEALED', 'revealed.mp3')

//WEBSOCKET CONFIG
export const WS_RECONNECT = false
export const DEFAULT_SOCKET_ENDPOINT = 'dev.igameforge.com'
export const DEFAULT_SOCKET_SERVER_PATH = ''
export const HEARTBEAT_INTERVAL = 20

export const GAME_USE_PROXY = false

export const AUTOCLOSE_RESULTS_MODAL = 3 //seconds
export const WEEKLY_PRIZE = 250000

export const CLOSE_BETS_SEC = 9
export const EXTRACTING_SEC = 9

export const GAME_RATIO = 16 / 8

//config
/**http://localhost:3000/work/keno-originals/?game=cowboykeno&playToken=loadtest1012&funReal=1&fixedID=empty&brandID=0&siteID=4&gameID=11510&language=en&historyURL=HTMLTableBetList_v2.jsp&lobbyURL=https://www.multiplaygaming.com&depositURL=https://www.multiplaygaming.com&endpoint=irgs-ge.multiplaygaming.com/mprgs&RNGtoken=test23754 */
