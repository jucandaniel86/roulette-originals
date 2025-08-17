<script setup lang="ts">
import { BOARD_CONFIG, BOARD_LAYOUT, BoardConfigButtonEnum } from '@/config/board.config'
import BoardButton from './BoardButton.vue'
import { computed } from 'vue'
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'
import { GameStates, useGameStore } from '@/stores/game'
import { useStatusStore } from '@/stores/status'
import SoundManager from '@/core/core.Sounds'

//composables
const { isMobile } = storeToRefs(useAppStore())
const { addBets, setGameState } = useGameStore()
const { bet } = storeToRefs(useStatusStore())
const { bets, result, gameState } = storeToRefs(useGameStore())

//styles
const rows = 5

//numbers
const { row1, row2, row3, row4, row5 } = BOARD_CONFIG
const numbers = [
  ...row1.filter((row) => row.type === BoardConfigButtonEnum.NUMBER),
  ...row2.filter((row) => row.type === BoardConfigButtonEnum.NUMBER),
  ...row3.filter((row) => row.type === BoardConfigButtonEnum.NUMBER),
  ...row4.filter((row) => row.type === BoardConfigButtonEnum.NUMBER),
  ...row5.filter((row) => row.type === BoardConfigButtonEnum.NUMBER),
]

const buttons = [
  ...row1.filter((row) => row.type === BoardConfigButtonEnum.BUTTON),
  ...row2.filter((row) => row.type === BoardConfigButtonEnum.BUTTON),
  ...row3.filter((row) => row.type === BoardConfigButtonEnum.BUTTON),
  ...row4.filter((row) => row.type === BoardConfigButtonEnum.BUTTON),
  ...row5.filter((row) => row.type === BoardConfigButtonEnum.BUTTON),
]

//computed
const layout = computed(() => (isMobile.value ? BOARD_LAYOUT.mobile : BOARD_LAYOUT.desktop))
const maxWidth = computed(() => (isMobile.value ? '' : '750px'))
const width = computed(() => (isMobile.value ? 'max-content' : '100%'))
const gridTemplateRows = computed(() => (isMobile.value ? 'none' : `repeat(${rows}, 1fr)`))

//methods
const handleAddBet = (betID: number) => {
  addBets({
    index: betID,
    bet: bet.value,
    chips: 1,
  })
  setGameState(GameStates.BETTING)
  SoundManager.Instance().play('MOVE')
}
const getCurrentBet = (betID: number) => bets.value.find((bet) => bet.index === betID)
</script>
<template>
  <div
    class="board"
    :style="{
      width: width,
      maxWidth: maxWidth,
      gridTemplateAreas: layout,
      gridTemplateRows: gridTemplateRows,
    }"
  >
    <BoardButton
      v-for="(item, i) in buttons"
      :key="`BoardButton${i}`"
      :item="item"
      @onClick="handleAddBet"
      :is-disabled="gameState === GameStates.SPINNING"
    />

    <BoardButton
      v-for="(item, i) in numbers"
      :key="`BoardButton${i}`"
      :item="item"
      :bet="getCurrentBet(item.betID)"
      :is-disabled="gameState === GameStates.SPINNING"
      :isWinner="gameState === GameStates.RESULTS && item.label === result"
      @onClick="handleAddBet"
    />
  </div>
</template>
