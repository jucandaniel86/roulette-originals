<script setup lang="ts">
import WheelImg from '@/assets/imgs/wheel.png'
import { onMounted, useTemplateRef } from 'vue'
import WheelAnimation from './Wheel/WheelAnimation'
import { useNumber } from '@/composables/useNumber'
const duration = 9000
const width = 540
const height = 540

const wheel = useTemplateRef<HTMLCanvasElement>('wheel')

onMounted(() => {
  if (wheel.value) {
    const context2d: any = wheel.value.getContext('2d')
    const defaultWidth = 270
    const defaultHeight = 270
    const { devicePixelRatio } = window

    wheel.value.width = defaultWidth * devicePixelRatio
    wheel.value.height = defaultHeight * devicePixelRatio

    context2d?.scale(devicePixelRatio, devicePixelRatio)

    const WAnim = new WheelAnimation({
      ctx: context2d,
      width: defaultWidth,
      height: defaultHeight,
      ballStartDropCallback: () => {},
    })

    const startAnimationFrame = () => {
      window.requestAnimationFrame(() => {
        startAnimationFrame()
        WAnim.render()
      })
    }

    startAnimationFrame()
    const { generateRandomInt } = useNumber()
    const currentNumber = generateRandomInt(0, 36)
    WAnim.addDropCallBack(() => console.log('the ball dropped::', currentNumber))
    setTimeout(() => {
      WAnim.changeHasBall(true)
      WAnim.changeResult(currentNumber, false)
    }, 2000)
  }
})
</script>
<template>
  <div class="wheel-house">
    <div class="wrap">
      <div class="content">
        <canvas
          ref="wheel"
          class="wheel"
          :style="{ '--duration': `${duration}ms`, backgroundImage: `url(${WheelImg}` }"
          :width="width"
          :height="height"
        ></canvas>
      </div>
    </div>
  </div>
</template>
