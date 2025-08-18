<script setup lang="ts">
import WheelImg from '@/assets/imgs/wheel.png'
import { onMounted, useTemplateRef, watch } from 'vue'
import WheelAnimation from './Wheel/WheelAnimation'
import { storeToRefs } from 'pinia'
import { GameStates, useGameStore } from '@/stores/game'
import SoundManager from '@/core/core.Sounds'
import { useSettingsStore } from '@/stores/settings'
const duration = 9000
const width = 540
const height = 540

const wheel = useTemplateRef<HTMLCanvasElement>('wheel')

//composables
const { setGameState, disableSidebar } = useGameStore()
const { gameState, result, playerResults } = storeToRefs(useGameStore())
const { settings } = storeToRefs(useSettingsStore())

//animation
const WAnim = new WheelAnimation()
WAnim.addDropCallBack(() => {
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
        if (!settings.value.INSTANT_BET) {
          SoundManager.Instance().stop('SPIN')
          SoundManager.Instance().play('DROP')
        }
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
      if (!settings.value.INSTANT_BET) {
        SoundManager.Instance().play('SPIN', true)
      }
      WAnim.changeHasBall(true)
      WAnim.changeResult(result.value, settings.value.INSTANT_BET)
      disableSidebar(true)

      if (settings.value.INSTANT_BET) {
        setGameState(GameStates.RESULTS)
      }

      break
    case GameStates.BETTING:
      WAnim.changeResult(false, settings.value.INSTANT_BET)
      if (!settings.value.INSTANT_BET) {
        SoundManager.Instance().stop('SPIN')
      }
      disableSidebar(false)
      break
    case GameStates.RESULTS:
      if (playerResults.value.isWon) {
        SoundManager.Instance().play('WIN')
      } else {
        SoundManager.Instance().play('LOSE')
      }
      disableSidebar(false)
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
