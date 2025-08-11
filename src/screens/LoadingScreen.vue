<script setup lang="ts">
import { GAME_NAME } from '@/config/app.config'
import { useAppStore } from '@/stores/app'

// import Logo from '@/assets/imgs/logo.png'
const { version } = useAppStore()
</script>
<template>
  <div class="loading-screen__wrapper">
    <div class="loading-logo__wrapper">
      <!-- <img :src="Logo" class="logo" /> -->
      <h1>
        {{ GAME_NAME }} <sup>{{ version }}</sup>
      </h1>
      <span class="loader"></span>
    </div>
  </div>
</template>
