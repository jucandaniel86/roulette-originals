<script setup lang="ts">
import { BOARD_CONFIG, BoardConfigButtonEnum } from '@/config/board.config'
import BoardNumber from './Board/BoardNumber.vue'
import BoardButton from './Board/BoardButton.vue'

//styles
const maxWidth = 750
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

const gridTemplateAreas = () => {
  const multiplyColumn = (gridArea: string, cols: number) => Array(cols).fill(gridArea).join(' ')

  let gridAreaTemplate = ''
  gridAreaTemplate += `"${row1.map((row) => row.gridArea).join(' ')}" `
  gridAreaTemplate += `"${row2.map((row) => row.gridArea).join(' ')}" `
  gridAreaTemplate += `"${row3.map((row) => row.gridArea).join(' ')}" `
  gridAreaTemplate += `". ${row4.map((row) => multiplyColumn(row.gridArea, row.cols)).join(' ')} ." `
  gridAreaTemplate += `". ${row5.map((row) => multiplyColumn(row.gridArea, row.cols)).join(' ')} ." `

  return gridAreaTemplate
}
</script>
<template>
  <div
    class="board"
    :style="{
      width: `100%`,
      maxWidth: `${maxWidth}px`,
      gridTemplateAreas: gridTemplateAreas(),
      gridTemplateRows: `repeat(${rows}, 1fr)`,
    }"
  >
    <BoardButton v-for="(item, i) in buttons" :key="`BoardButton${i}`" :item="item" />
    <BoardNumber v-for="(item, i) in numbers" :key="`Number${i}`" :item="item" />
  </div>
</template>
