<script setup lang="ts">
import { AUTOCLOSE_RESULTS_MODAL } from '@/config/app.config'
import { onBeforeUnmount, onMounted } from 'vue'
import useModalStore from '@/stores/modal'

//@ts-ignore
let timeout: any = null

onMounted(() => {
  timeout = setTimeout(() => {
    const { closeModal } = useModalStore()
    closeModal()
  }, AUTOCLOSE_RESULTS_MODAL * 1000)
})
onBeforeUnmount(() => {
  clearTimeout(timeout)
})
</script>
<template>
  <button class="keno-tile is-match">
    <div class="gem"><div class="keno-gem"></div></div>
    <span class="tile-number">3</span>
    <div class="cover is-match"><span class="tile-number">3</span></div>
  </button>
</template>
