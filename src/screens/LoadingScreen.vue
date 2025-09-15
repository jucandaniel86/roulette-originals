<script setup lang="ts">
import { GAME_NAME } from '@/config/app.config'
</script>
<template>
  <div class="loading-screen__wrapper">
    <div class="loading-logo__wrapper">
      <h1>
        {{ GAME_NAME }}
      </h1>
      <span class="loader"></span>
    </div>
  </div>
</template>
