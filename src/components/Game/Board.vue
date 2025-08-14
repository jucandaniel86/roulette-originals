<script setup lang="ts">
import { BOARD_CONFIG, BOARD_LAYOUT, BoardConfigButtonEnum } from '@/config/board.config'
import BoardNumber from './Board/BoardNumber.vue'
import BoardButton from './Board/BoardButton.vue'
import { computed } from 'vue'
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'

//composables
const { isMobile } = storeToRefs(useAppStore())

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

const layout = computed(() => (isMobile.value ? BOARD_LAYOUT.mobile : BOARD_LAYOUT.desktop))
const maxWidth = computed(() => (isMobile.value ? '' : '750px'))
const width = computed(() => (isMobile.value ? 'max-content' : '100%'))
const gridTemplateRows = computed(() => (isMobile.value ? 'none' : `repeat(${rows}, 1fr)`))
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
    <BoardButton v-for="(item, i) in buttons" :key="`BoardButton${i}`" :item="item" />
    <BoardNumber v-for="(item, i) in numbers" :key="`Number${i}`" :item="item" />
  </div>
</template>
