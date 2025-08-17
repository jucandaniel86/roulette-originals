<script setup lang="ts">
import { useGameStore } from '@/stores/game'
import ClockStatus from '../clock/ClockStatus.vue'
import { useStatusStore } from '@/stores/status'

const { balance } = useStatusStore()
const { gameName, version } = useGameStore()
</script>
<template>
  <div class="top-bar">
    <span>
      {{ gameName }}
      <sup>{{ version }}</sup>
    </span>
    <span>
      <!-- {{ Lang.Instance().translate('n:play.balance') }}:  -->
      {{ balance }}
    </span>
    <ClockStatus />
  </div>
</template>
