import { ref } from 'vue'
import { defineStore, storeToRefs } from 'pinia'
import { DEFAULT_ROOM, DEFAULT_TAB, GAME_NAME, TabsEnum } from '@/config/app.config'
import p from '../../package.json'
import SoundManager from '@/core/core.Sounds'
import { useSettingsStore } from './settings'

export enum GameStates {
  BETTING = 'betting',
  EXTRACTING = 'extracting',
  CLOSED = 'betting-closed',
}

export type TicketType = {
  bet: number
  totalWin?: number
  numbers: number[]
  drawId?: number | string
  ticket?: string | number
  drawTS?: number
  id?: string | number
  matched?: number[]
}

interface GameStoreData {
  version?: string
  name?: string
  room: string
  state: GameStates
  tickets: TicketType[]
  tab: TabsEnum
  totalWin: number
  extractedNumbers: number[]
}

export type DrawTypeType = {
  timestamp: number
  extracted: number[]
  prizes: any[]
}

export enum GameModeType {
  MANUAL = 'manual',
  AUTO = 'auto',
}

export type GameResultsType = {
  win: number
  numbers: number[]
  bet: number
}

export type PastResultType = {
  id: string
  win: number
}

export const useGameStore = defineStore('game', () => {
  const game = ref<GameStoreData>({
    version: p.version,
    name: GAME_NAME,
    room: DEFAULT_ROOM,
    state: GameStates.BETTING,
    tickets: [],
    tab: DEFAULT_TAB,
    totalWin: 0,
    extractedNumbers: [],
  })

  const selectedNumbers = ref<number[]>([])

  const disableInteraction = ref<boolean>(false)

  const gameMode = ref<GameModeType>(GameModeType.MANUAL)

  const history = ref<any>()
  const draws = ref<DrawTypeType[]>()

  const displayResults = ref<boolean>(false)

  const results = ref<GameResultsType>()

  const resultsHistory = ref<PastResultType[]>([])

  const sidebarDisabled = ref<boolean>(false)

  const winningNumbers = ref<number[]>([])

  const setGamePlay = (_payload: any) => {
    game.value = {
      ...game.value,
      ..._payload,
    }
  }

  const setDisplayResults = (_payload: boolean) => (displayResults.value = _payload)

  const setResults = (_payload: any) => (results.value = _payload)

  const setHistory = (_payload: any) => {
    history.value = _payload
  }

  const setDraws = (_payload: any) => {
    draws.value = _payload
  }

  const setSelectedNumbers = (_payload: any) => {
    selectedNumbers.value = _payload
  }

  const setDisabledInteraction = (_payload: boolean) => {
    disableInteraction.value = _payload
  }

  const setGameType = (_payload: GameModeType) => {
    gameMode.value = _payload
  }

  const setResultsHistory = (_result: PastResultType) => {
    resultsHistory.value.push(_result)
  }

  const disableSidebar = (_payload: boolean) => (sidebarDisabled.value = _payload)

  const clearWinningNumbers = () => {
    winningNumbers.value = []
  }

  const setWinningNumbers = async (_numbers: number[]): Promise<void> => {
    const { settings } = storeToRefs(useSettingsStore())
    if (settings.value.INSTANT_BET) {
      winningNumbers.value = _numbers
      return Promise.resolve()
    }

    return new Promise((resolve) => {
      const numbers = [..._numbers]
      let i = 0

      const h = () => {
        setTimeout(
          () => {
            SoundManager.Instance().play('REVEALED')
            winningNumbers.value.push(numbers[i])
            i++
            if (numbers.length === i) {
              resolve()
              return
            }
            h()
          },
          i === 0 ? 0 : 150,
        )
      }

      h()
    })
  }

  return {
    game,
    history,
    draws,
    selectedNumbers,
    disableInteraction,
    gameMode,
    displayResults,
    results,
    resultsHistory,
    sidebarDisabled,
    winningNumbers,
    disableSidebar,
    setGamePlay,
    setHistory,
    setDraws,
    setSelectedNumbers,
    setDisabledInteraction,
    setGameType,
    setDisplayResults,
    setResults,
    setResultsHistory,
    setWinningNumbers,
    clearWinningNumbers,
  }
})
