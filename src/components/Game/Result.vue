<script setup lang="ts">
const transform = ' translateY(100%)'
const background = 'none'
</script>
<template>
  <div class="results-wrap">
    <div class="content">
      <span
        class="roll-up"
        :style="{
          '--duration': '200ms',
          background: background,
          transform: transform,
        }"
      />
    </div>
  </div>
</template>
