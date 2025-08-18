<script setup lang="ts">
import type { BoardConfigButtonType } from '@/config/board.config'
import type { RoulleteBetType } from '@/stores/game'
import { computed } from 'vue'

type BoardButtonType = {
  item: BoardConfigButtonType
  bet?: RoulleteBetType
  isWinner?: boolean
  isDisabled: boolean
}

//props
const props = defineProps<BoardButtonType>()

//computed
const activeClass = computed(() => {
  const _classes = ['pocket']
  if (props.item.color !== '') {
    _classes.push('colorTrue')
  } else {
    _classes.push('colorFalse')
  }
  _classes.push(props.item.gridArea)
  return _classes.join(' ')
})

// const chips = () => {
//   const availableChips = [...betLevels.value]
//   let totalBet = props.bet?.bet || 0
//   const _chips = []
//   let i = 0
//   while (totalBet > 0) {
//     const maxChip = Math.max(...availableChips)

//     if (maxChip <= totalBet) {
//       _chips.push(maxChip)
//       totalBet -= maxChip
//     } else {
//       availableChips.pop()
//     }
//     i++
//     if (i > 10) break
//   }
//   return _chips
// }

const maxChips = 5

//emitters
const emits = defineEmits(['onClick'])
const handleClick = () => emits('onClick', props.item.betID)

//computed
const chips = computed(() => {
  if (!props.bet) return []

  const chipsNr = props.bet?.chips > maxChips ? maxChips : props.bet?.chips
  return new Array(chipsNr)
    .fill({
      value: props.bet?.bet,
    })
    .map((chip, i) => ({
      ...chip,
      translate: i === 0 ? '' : `translateY(-${i * 15}%)`,
    }))
})
</script>
<template>
  <button
    :class="activeClass"
    :data-testid="props.item.gridArea"
    @click.prevent="handleClick"
    :disabled="props.isDisabled"
    :style="{
      gridArea: props.item.gridArea,
      '--poketColor': props.item.color,
      '--poketColorLighten': props.item.colorHover,
      '--poketColorBlack': props.item.colorBlack,
      '--poketColorBlackLighten': props.item.colorBlackHover,
      border: props.isWinner ? '3px solid var(--green-400)' : 'none',
    }"
  >
    <div class="content">
      <div class="name">{{ props.item.label }}</div>
    </div>
    <div class="chips">
      <div class="wrap">
        <div
          v-for="(chip, i) in chips"
          :key="`${props.item.label}_${i}`"
          :style="{
            transform: chip.translate,
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
          }"
        >
          <button class="board-chip">
            <div class="content svelte-cspjet">{{ props.bet?.bet }}</div>
          </button>
        </div>
      </div>
    </div>
  </button>
</template>
