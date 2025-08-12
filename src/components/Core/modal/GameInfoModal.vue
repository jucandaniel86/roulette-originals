<template>
  <div class="wrapper wrapper-transition scrollX scrollY" ref="popup">
    <div class="modal-header">
      <h2 class="modal-header-h2">
        <AboutIcon />
        {{ t('info.title') }}
      </h2>
      <button @click.prevent="closeModal" class="transition">
        <CloseIcon />
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
import AboutIcon from '@/components/Shared/Icons/AboutIcon.vue'
import { useTemplateRef } from 'vue'
import { onClickOutside } from '@vueuse/core'
import CloseIcon from '@/components/Shared/Icons/CloseIcon.vue'

const { t } = useI18n()
const { closeModal } = useModalStore()

const popup = useTemplateRef('popup')

onClickOutside(popup, () => closeModal())
</script>
<style>
.game-info h2 {
  margin: 1rem 0;
}
</style>
