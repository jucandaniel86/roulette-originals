<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import StakeSelector from '../Shared/StakeSelector/StakeSelector.vue'
import { storeToRefs } from 'pinia'
import { useGameStore } from '@/stores/game'
import { useSessionStore } from '@/stores/session'
import { useStatusStore } from '@/stores/status'

//composables
const { t } = useI18n()
const { sidebarDisabled } = storeToRefs(useGameStore())
const { betLevels, betIndex } = storeToRefs(useSessionStore())
const { setSessionData } = useSessionStore()
const { setStatusData } = useStatusStore()

//methods
const updateBetIndex = (value: number) => {
  setSessionData({
    betIndex: betLevels.value.indexOf(value),
  })
  setStatusData({
    bet: value,
  })
}
</script>
<template>
  <div class="game-sidebar scrollY">
    <!-- GAME TABS -->
    <div class="game-tabs">
      <div class="tabs-wrapper scrollX">
        <div class="content-wrapper">
          <button class="tabs-buttons transition">{{ t('components.sidebar.manual') }}</button>
          <button class="tabs-buttons transition">{{ t('components.sidebar.auto') }}</button>
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
  </div>
</template>
