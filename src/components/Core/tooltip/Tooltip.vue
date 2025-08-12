<script setup lang="ts">
import { ref, watch } from 'vue'
import { createPopper } from '@popperjs/core'
import { onClickOutside } from '@vueuse/core'

type TooltipType = {
  content?: string | undefined
  target: any
  show?: boolean
}

const props = withDefaults(defineProps<TooltipType>(), { show: false })
const tooltip = ref()
const arrow = ref()
const popperInstance = ref()
const showTooltip = ref<boolean>(props.show)

const emitters = defineEmits(['onClose'])

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

onClickOutside(tooltip, () => {
  if (showTooltip.value) {
    emitters('onClose')
  }
})

watch(props, () => {
  showTooltip.value = props.show
})

watch(props, () => {
  init()
  update()
})
</script>
<template>
  <div class="tooltip-wrapper" ref="tooltip" role="tooltip" v-show="showTooltip">
    <div class="tooltip-content-wrapper">
      {{ props.content }}
      <slot />
    </div>
    <div ref="arrow" class="tooltip-arrow"></div>
  </div>
</template>
