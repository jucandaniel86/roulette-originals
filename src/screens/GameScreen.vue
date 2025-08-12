<script setup lang="ts">
import Board from '@/components/Game/Board.vue'
import Sidebar from '@/components/Game/Sidebar.vue'
// import { useResize } from '@/composables/useResize'
// import { useResizeObserver } from '@vueuse/core'
// import { useTemplateRef } from 'vue'

//components

// const GameContainer = useTemplateRef('gameContainer')

//composables
// const { resize } = useResize()

// useResizeObserver(document.body, () => resize(GameContainer.value as any))
</script>
<template>
  <div ref="gameContainer" class="game-layout">
    <div class="content-wrapper">
      <div class="game-frame">
        <div class="game-container">
          <Sidebar />
          <div class="game-content">
            <div class="wrap">
              <Board />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
