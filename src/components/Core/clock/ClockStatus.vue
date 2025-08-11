<script setup lang="ts">
import { onMounted, ref, onUnmounted } from 'vue'

const date = ref(new Date())
const dateInterval = ref()

onMounted(() => {
  dateInterval.value = setInterval(() => (date.value = new Date()), 1000)
})
onUnmounted(() => {
  clearInterval(dateInterval.value)
  dateInterval.value = null
})
</script>
<template>
  <span>{{ date.toLocaleTimeString('en-GB') }}</span>
</template>
