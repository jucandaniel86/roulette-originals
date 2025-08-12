<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed, ref } from 'vue'
import StakeSelector from '../Shared/StakeSelector/StakeSelector.vue'
import { storeToRefs } from 'pinia'
import { GameModeType, useGameStore } from '@/stores/game'
import { useSessionStore } from '@/stores/session'
import { useStatusStore } from '@/stores/status'
import IncreaseSelector from '../Shared/IncreaseSelector/IncreaseSelector.vue'
import { useAutoplay } from '@/composables/useAutoplay'
import { useValidation } from '@/composables/useValidation'
import InputSelector from '../Shared/InputSelector/InputSelector.vue'
import Tooltip from '../Core/tooltip/Tooltip.vue'

//models
type PlayModeType = {
  mode: GameModeType
  label: string
}

const modes = ref<PlayModeType[]>([
  {
    label: 'components.sidebar.manual',
    mode: GameModeType.MANUAL,
  },
  {
    label: 'components.sidebar.auto',
    mode: GameModeType.AUTO,
  },
])

//models
const serverLoading = ref<boolean>(false)

//composables
const { t } = useI18n()
const { betLevels, betIndex } = storeToRefs(useSessionStore())
const { setSessionData } = useSessionStore()
const { setStatusData } = useStatusStore()
const { setGameType } = useGameStore()
const { gameMode, sidebarDisabled } = storeToRefs(useGameStore())
const { credit, bet } = storeToRefs(useStatusStore())
const { autoplayOptions, runAutoplay, run, stopAutoplay } = useAutoplay()
const {
  handleNumberOfBetsChange,
  handleStopOnProfitChange,
  handleStopOnLossChange,
  handleIncreaseByWinChange,
  handleIncreaseByLossChange,
  validationErrorRef,
} = useValidation()

//methods
const updateBetIndex = (value: number) => {
  setSessionData({
    betIndex: betLevels.value.indexOf(value),
  })
  setStatusData({
    bet: value,
  })
}

//computed
const placeBetDisabled = computed(() => {
  if (credit.value < bet.value) {
    return true
  }

  if (serverLoading.value) {
    return true
  }

  if (gameMode.value === GameModeType.AUTO && validationErrorRef.value.size > 0) {
    return true
  }

  if (sidebarDisabled.value) return true

  return false
})
</script>
<template>
  <div class="game-sidebar scrollY">
    <!-- GAME TABS -->
    <div class="game-tabs">
      <div class="tabs-wrapper scrollX">
        <div class="slider">
          <div class="wrapper">
            <button
              class="tabs-buttons transition"
              :key="`Model${i}`"
              :class="{ active: mode.mode === gameMode }"
              v-for="(mode, i) in modes"
              @click.prevent="setGameType(mode.mode)"
              :disabled="sidebarDisabled"
            >
              {{ t(mode.label) }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- /GAME TABS -->

    <!-- STAKE SELECTOR -->
    <StakeSelector
      :title="t('components.sidebar.betAmount')"
      :options="betLevels"
      @stake-selector:increase="updateBetIndex"
      @stake-selector:decrease="updateBetIndex"
      :selected-option="betIndex"
      :is-disabled="sidebarDisabled"
    />
    <!-- /STAKE SELECTOR -->

    <!-- NUMBER OF BETS -->
    <InputSelector
      v-if="gameMode === GameModeType.AUTO"
      v-model="autoplayOptions.numberOfBets"
      :id="'numberOfBets'"
      :label="t('components.sidebar.noBets')"
      :invalid="validationErrorRef.has('numberOfBets')"
      :is-disabled="sidebarDisabled"
      :currency="false"
      @onInput="handleNumberOfBetsChange"
      :step="1"
      :error-message="validationErrorRef.get('numberOfBets') || ''"
    />
    <!-- /NUMBER OF BETS -->

    <!-- ON WIN -->
    <IncreaseSelector
      v-if="gameMode === GameModeType.AUTO"
      v-model="autoplayOptions.increaseByOnWin"
      :has-error="validationErrorRef.has('onWin')"
      :label="t('components.sidebar.onWin')"
      @on-change="handleIncreaseByWinChange"
      :is-disabled="sidebarDisabled"
      :error-message="validationErrorRef.get('onWin') || ''"
    />
    <!-- /ON WIN -->

    <!-- ON LOSS -->
    <IncreaseSelector
      v-if="gameMode === GameModeType.AUTO"
      v-model="autoplayOptions.increaseByOnLoss"
      :has-error="validationErrorRef.has('onLoss')"
      :label="t('components.sidebar.onLoss')"
      @on-change="handleIncreaseByLossChange"
      :is-disabled="sidebarDisabled"
      :error-message="validationErrorRef.get('onLoss') || ''"
    />
    <!-- /ON LOSS -->

    <!-- STOP ON PROFIT -->
    <InputSelector
      v-if="gameMode === GameModeType.AUTO"
      v-model="autoplayOptions.stopOnProfit"
      :id="'stopOnProfit'"
      :label="t('components.sidebar.stopProfit')"
      :invalid="validationErrorRef.has('stopOnProfit')"
      :is-disabled="sidebarDisabled"
      @onInput="handleStopOnProfitChange"
      :error-message="validationErrorRef.get('stopOnProfit') || ''"
    />
    <!-- /STOP ON PROFIT -->

    <!-- STOP ON LOSS -->
    <InputSelector
      v-if="gameMode === GameModeType.AUTO"
      v-model="autoplayOptions.stopOnLoss"
      :id="'stopOnLoss'"
      :label="t('components.sidebar.stopOnLoss')"
      :invalid="validationErrorRef.has('stopOnLoss')"
      :is-disabled="sidebarDisabled"
      @onInput="handleStopOnLossChange"
      :error-message="validationErrorRef.get('stopOnLoss') || ''"
    />
    <!-- /STOP ON LOSS -->

    <!-- PLACE BET BUTTON -->
    <button
      class="place-bet-btn transition"
      v-if="gameMode === GameModeType.MANUAL"
      :disabled="placeBetDisabled"
    >
      <span>{{ t('components.sidebar.bet') }}</span>
    </button>
    <!-- /PLACE BET BUTTON -->

    <!-- AUTOBET BUTTON -->
    <button
      class="place-bet-btn transition"
      v-if="gameMode === GameModeType.AUTO"
      :disabled="placeBetDisabled"
    >
      <span>{{ t('components.sidebar.startAutobet') }}</span>
    </button>
    <!-- /AUTOBET BUTTON -->
  </div>
</template>
