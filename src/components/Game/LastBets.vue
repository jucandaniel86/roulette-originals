<script setup lang="ts">
import { useFindBoardItem } from '@/composables/useFindBoardItem'
import { PAST_RESULTS_LIMIT } from '@/config/app.config'
import { GameStates, useGameStore } from '@/stores/game'
import { storeToRefs } from 'pinia'
import { computed, ref, watch } from 'vue'

const { find } = useFindBoardItem()
const { resultsHistory, gameState } = storeToRefs(useGameStore())

const localHistory = ref<any[]>([])

watch(gameState, () => {
  if (gameState.value === GameStates.RESULTS) {
    localHistory.value.push(resultsHistory.value[resultsHistory.value.length - 1])
  }
})

const historyData = computed(() => {
  return [...localHistory.value]
    .reverse()
    .slice(0, PAST_RESULTS_LIMIT)
    .map((el: any) => ({
      ...el,
      color: find(el.result)?.color,
      colorHover: find(el.result)?.colorHover,
    }))
})
</script>
<template>
  <div class="last-bets">
    <div class="content" style="--duration: 300ms">
      <button
        v-for="result in historyData"
        :key="result.id"
        class="last-bets-btn"
        :style="{
          '--bg-color': result.color,
          '--bg-color-lighten': result.colorHover,
        }"
      >
        {{ result.result }}
      </button>
    </div>
  </div>
</template>
