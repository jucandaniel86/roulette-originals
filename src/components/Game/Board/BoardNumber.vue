<script setup lang="ts">
import type { BoardConfigButtonType } from '@/config/board.config'
import { computed } from 'vue'

type BoardNumberType = {
  item: BoardConfigButtonType
}

const props = defineProps<BoardNumberType>()

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
    :data-testid="`number${props.item.label}`"
    :style="{
      gridArea: `number${props.item.label}`,
      '--poketColor': props.item.color,
      '--poketColorLighten': props.item.colorHover,
      '--poketColorBlack': props.item.colorBlack,
      '--poketColorBlackLighten': props.item.colorBlackHover,
    }"
    data-amount="0"
  >
    <div class="content svelte-1xrhvij">
      <div class="name svelte-1xrhvij">{{ props.item.label }}</div>
    </div>
    <div class="chips svelte-1xrhvij">
      <div class="wrap svelte-1rraoj6"></div>
      <!---->
    </div>
  </button>
</template>
