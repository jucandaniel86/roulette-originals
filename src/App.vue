<script setup lang="ts">
import { onMounted } from 'vue'
import { useAppStore } from './stores/app'
import LoadingScreen from './screens/LoadingScreen.vue'
import GameScreen from './screens/GameScreen.vue'
import { ScreenEnum } from './core/enums/Screens'
import useAppState from './core/core'
import ModalWindow from './components/Core/modal/ModalWindow.vue'

const { __init, screen } = useAppState()

const { setResolution } = useAppStore()

onMounted(async () => {
  try {
    await __init()
  } catch (err) {
    console.warn('[CORE]', err)
  }

  setResolution({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  window &&
    window?.addEventListener('resize', () => {
      setResolution({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    })
})
</script>

<template>
  <ModalWindow />
  <TransitionGroup name="fade">
    <LoadingScreen v-if="screen === ScreenEnum.LOADING" />
    <GameScreen v-if="screen === ScreenEnum.GAME" />
  </TransitionGroup>
</template>
