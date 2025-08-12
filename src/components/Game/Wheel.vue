<script setup lang="ts">
import WheelImg from '@/assets/imgs/wheel.png'
const duration = 9000
const width = 540
const height = 540
</script>
<template>
  <div class="wheel-house">
    <div class="wrap">
      <div class="content">
        <canvas
          class="wheel"
          :style="{ '--duration': `${duration}ms`, backgroundImage: `url(${WheelImg}` }"
          :width="width"
          :height="height"
        ></canvas>
      </div>
    </div>
  </div>
</template>
