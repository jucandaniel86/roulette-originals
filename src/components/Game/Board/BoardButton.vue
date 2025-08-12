<script setup lang="ts">
import type { BoardConfigButtonType } from '@/config/board.config'
import { computed } from 'vue'

type BoardButtonType = {
  item: BoardConfigButtonType
}

const props = defineProps<BoardButtonType>()

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
</script>
<template>
  <button
    :class="activeClass"
    :data-testid="props.item.gridArea"
    data-amount="0"
    :style="{
      gridArea: props.item.gridArea,
      '--poketColor': props.item.color,
      '--poketColorLighten': props.item.colorHover,
      '--poketColorBlack': props.item.colorBlack,
      '--poketColorBlackLighten': props.item.colorBlackHover,
    }"
  >
    <div class="content">
      <div class="name">{{ props.item.label }}</div>
    </div>
    <div class="chips">
      <div class="wrap" />
      <!---->
    </div>
  </button>
</template>
