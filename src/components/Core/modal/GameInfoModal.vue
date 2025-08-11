<template>
  <div class="wrapper wrapper-transition scrollX scrollY">
    <div class="modal-header">
      <h2>
        <div class="game-info-icon" />
        {{ t('info.title') }}
      </h2>
      <button @click.prevent="closeModal">
        <div class="close-icon icon-md transition" />
      </button>
    </div>

    <div class="modal-content game-info">
      <div v-html="t('info.content')" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import useModalStore from '@/stores/modal'

const { t } = useI18n()
const { closeModal } = useModalStore()
</script>
<style>
.game-info h2 {
  margin: 1rem 0;
}
</style>
