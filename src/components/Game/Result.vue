<script setup lang="ts">
import { useFindBoardItem } from '@/composables/useFindBoardItem'
import { ref, watch } from 'vue'

const transform = ref(' translateY(100%)')

//props
type ResultComponentT = {
  result: number
  display: boolean
}
const props = defineProps<ResultComponentT>()

//composables
const { find } = useFindBoardItem()

const currentNumber = ref(find(props.result))

watch(props, () => {
  if (props.display) {
    transform.value = 'translateY(0)'
  } else {
    transform.value = 'translateY(100%)'
  }
  currentNumber.value = find(props.result)
})
</script>
<template>
  <div class="results-wrap">
    <div class="content">
      <span
        class="roll-up"
        :style="{
          '--duration': '200ms',
          background: currentNumber?.color,
          transform: transform,
        }"
        >{{ props.result }}
      </span>
    </div>
  </div>
</template>
