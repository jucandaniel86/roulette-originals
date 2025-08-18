import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { GAME_NAME } from '@/config/app.config'
import * as p from '../../package.json'
import type { PrizeType } from '@/core/models/bet/PublicStateResponseData'

export enum GameStates {
  INIT = 'init',
  BETTING = 'betting',
  SPINNING = 'spinning',
  RESULTS = 'results',
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

export type RoulleteBetType = {
  bet: number
  index: number
  chips: number
}

export type PlayerResultsType = {
  totalBet: number
  totalWin: number
  multiplier: number
  isWon: boolean
}

export type PastResultType = {
  id: string
  playerResults: PlayerResultsType
  prizes: PrizeType[]
  date: string
  result: number
}

export const useGameStore = defineStore('game', () => {
  const gameName = ref<string>(GAME_NAME)

  const version = ref<string | number>(p.version)

  const gameState = ref<GameStates>(GameStates.INIT)

  const gameMode = ref<GameModeType>(GameModeType.MANUAL)

  const bets = ref<RoulleteBetType[]>([])

  const betsHistory = ref<RoulleteBetType[]>([])

  const disableInteraction = ref<boolean>(false)

  const result = ref<number>(0)

  const resultsHistory = ref<PastResultType[]>([])

  const sidebarDisabled = ref<boolean>(false)

  const playerResults = ref<PlayerResultsType>({
    totalBet: 0,
    totalWin: 0,
    multiplier: 0,
    isWon: false,
  })

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

  const setGameState = (newState: GameStates) => {
    gameState.value = newState
  }

  const removeBetByIndex = (betID: number) => {
    const currentIndex = bets.value.findIndex((bet) => bet.index === betID)
    if (currentIndex !== -1) {
      bets.value.splice(currentIndex, 1)
    }
  }

  const updateBetByID = (
    betID: number,
    value: number,
    type: 'increase' | 'decrease' = 'increase',
  ) => {
    bets.value = bets.value.map((_bet) => {
      if (_bet.index === betID) {
        const newValue = type === 'increase' ? _bet.bet + value : _bet.bet - value
        const chips = type === 'increase' ? _bet.chips + 1 : _bet.chips - 1
        return {
          ..._bet,
          bet: newValue,
          chips,
        }
      }
      return { ..._bet }
    })
  }

  const addBets = (bet: RoulleteBetType) => {
    betsHistory.value?.push(bet)
    const currentBet = bets.value.find((_bet) => bet.index === _bet.index)
    if (currentBet) {
      return updateBetByID(bet.index, bet.bet)
    }
    bets.value.push({ ...bet, chips: 1 })
  }

  const clear = () => {
    betsHistory.value = []
    bets.value = []
  }

  const undo = () => {
    const lastBet = betsHistory.value[betsHistory.value.length - 1]

    if (!lastBet) return

    const currentBet = bets.value.find((_bet) => lastBet.index === _bet.index)

    if (!currentBet) return

    updateBetByID(currentBet.index, lastBet.bet, 'decrease')
    betsHistory.value.pop()

    if (currentBet.bet - lastBet.bet <= 0) {
      return removeBetByIndex(currentBet.index)
    }

    return
  }

  const setResult = (_newResult: number) => (result.value = _newResult)

  const totalBet = computed(() => bets.value.reduce((prevBet, currBet) => prevBet + currBet.bet, 0))

  const setPlayerResults = (totalWin: number, prizes: PrizeType[], isWon: boolean) => {
    const totalBet: any = prizes.reduce((prevPrize, crrPrize) => prevPrize + crrPrize.bet, 0)

    const multiplier = totalWin / totalBet
    playerResults.value = {
      totalWin,
      totalBet,
      multiplier,
      isWon,
    }
  }

  return {
    bets,
    betsHistory,
    totalBet,
    gameState,
    gameMode,
    gameName,
    version,
    disableInteraction,
    resultsHistory,
    sidebarDisabled,
    result,
    playerResults,
    disableSidebar,
    setDisabledInteraction,
    setGameType,
    setResultsHistory,
    setGameState,
    addBets,
    clear,
    undo,
    setResult,
    setPlayerResults,
  }
})
