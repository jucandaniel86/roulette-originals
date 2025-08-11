<script setup lang="ts">
import { ref, watch } from 'vue'
import { createPopper } from '@popperjs/core'

type TooltipType = {
  content: string | undefined
  target: any
  show?: boolean
}

const props = withDefaults(defineProps<TooltipType>(), { show: false })
const tooltip = ref()
const arrow = ref()
const popperInstance = ref()

const init = () => {
  popperInstance.value = createPopper(props.target, tooltip.value, {
    placement: 'top',
    modifiers: [
      {
        name: 'arrow',
        options: {
          element: arrow.value,
        },
      },
      {
        name: 'offset',
        options: {
          offset: [0, 10],
        },
      },
    ],
  })
}
const update = () => popperInstance.value && popperInstance.value.forceUpdate()

watch(props, () => {
  init()
  update()
})
</script>
<template>
  <div class="tooltip-wrapper" ref="tooltip" role="tooltip" v-show="props.show">
    <div class="tooltip-content-wrapper">{{ props.content }}</div>
    <div ref="arrow" class="tooltip-arrow"></div>
  </div>
</template>
