<script setup lang="ts">
import { useFindBoardItem } from '@/composables/useFindBoardItem'
import CurrencyConverter from '@/core/core.CurrencyConvertor'
import { useGameStore } from '@/stores/game'
import { storeToRefs } from 'pinia'
import { ref, watch } from 'vue'

type GameResultsT = {
  result: number
  display: boolean
}
const props = defineProps<GameResultsT>()

//composables
const { playerResults } = storeToRefs(useGameStore())
const { find } = useFindBoardItem()

const currentNumber = ref(find(props.result))

watch(props, () => {
  currentNumber.value = find(props.result)
})
</script>
<template>
  <div class="game-result-overlay" v-if="props.display">
    <!---->
    <div
      class="game-result-wrap"
      :class="{
        win: playerResults?.isWon,
        lose: !playerResults?.isWon,
      }"
      style="
        --duration: 300ms;
        --modal-width: 150px;
        --modal-height: 132px;
        --win-modal-heading-color: #b1bad3;
        z-index: 65 !important;
      "
    >
      <div class="game-result-content">
        <span>
          <div class="wrap">
            <div class="content">
              <span
                class="roll-up"
                :style="{
                  transform: 'translateY(0%)',
                  '--duration': '200ms',
                  backgroundColor: currentNumber?.color,
                }"
              >
                {{ result }}
              </span>
            </div>
          </div>
        </span>
        <span class="number-multiplier" style="--truncate-max-width: 118px">
          <span
            class="weight-bold line-height-default align-left size-default text-size-default variant-subtle with-icon-space svelte-1f6lug3"
            style=""
            >{{ Number(playerResults?.multiplier).toFixed(2) }}×</span
          >
        </span>
        <div class="divider svelte-7vsiyq slim"></div>
        <span class="payout-result win">
          <div class="currency svelte-13xyujb" role="presentation">
            <span class="content svelte-13xyujb" style="max-width: 98px">
              <span
                class="weight-bold line-height-default align-center size-md text-size-md variant-subtle numeric with-icon-space is-truncate svelte-1f6lug3"
                style="font-size: 16px; line-height: 120%"
                >{{ CurrencyConverter.Convert(playerResults?.totalWin as any) }}</span
              >
            </span>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>
<style @scoped>
@import './GameResult.css';
</style>
