<script setup lang="ts">
import { useI18n } from 'vue-i18n'

console.log('sidebar')
const { t } = useI18n()
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
  </div>
</template>
