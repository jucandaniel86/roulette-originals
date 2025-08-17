<script setup lang="ts">
import { ref, watch } from 'vue'

const transform = ref(' translateY(100%)')
const background = 'rgb(254, 34, 71)'

//props
type ResultComponentT = {
  result: number
  display: boolean
}
const props = defineProps<ResultComponentT>()

watch(props, () => {
  if (props.display) {
    transform.value = 'translateY(0)'
  } else {
    transform.value = 'translateY(100%)'
  }
})
</script>
<template>
  <div class="results-wrap">
    <div class="content">
      <span
        class="roll-up"
        :style="{
          '--duration': '200ms',
          background: background,
          transform: transform,
        }"
        >{{ props.result }}
      </span>
    </div>
  </div>
</template>
