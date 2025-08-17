<script setup lang="ts">
import WheelImg from '@/assets/imgs/wheel.png'
import { onMounted, useTemplateRef, watch } from 'vue'
import WheelAnimation from './Wheel/WheelAnimation'
import { storeToRefs } from 'pinia'
import { GameStates, useGameStore } from '@/stores/game'
import SoundManager from '@/core/core.Sounds'
const duration = 9000
const width = 540
const height = 540

const wheel = useTemplateRef<HTMLCanvasElement>('wheel')

//composables
const { setGameState } = useGameStore()
const { gameState, result } = storeToRefs(useGameStore())

//animation
const WAnim = new WheelAnimation()
WAnim.addDropCallBack(() => {
  console.log('the ball dropped:: ' + result.value)
  setGameState(GameStates.RESULTS)
})

onMounted(() => {
  if (wheel.value) {
    const context2d: any = wheel.value.getContext('2d')
    const defaultWidth = 270
    const defaultHeight = 270
    const { devicePixelRatio } = window

    wheel.value.width = defaultWidth * devicePixelRatio
    wheel.value.height = defaultHeight * devicePixelRatio

    context2d?.scale(devicePixelRatio, devicePixelRatio)

    WAnim.init({
      ctx: context2d,
      width: defaultWidth,
      height: defaultHeight,
      ballStartDropCallback: () => {
        SoundManager.Instance().stop('SPIN')
        SoundManager.Instance().play('DROP')
      },
    })

    const startAnimationFrame = () => {
      window.requestAnimationFrame(() => {
        startAnimationFrame()
        WAnim.render()
      })
    }

    startAnimationFrame()
  }
})

//watchers
watch(gameState, () => {
  switch (gameState.value) {
    case GameStates.SPINNING:
      SoundManager.Instance().play('SPIN', true)
      WAnim.changeHasBall(true)
      WAnim.changeResult(result.value, false)
      break
    case GameStates.BETTING:
      WAnim.changeResult(false, false)
      SoundManager.Instance().stop('SPIN')
      break
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
