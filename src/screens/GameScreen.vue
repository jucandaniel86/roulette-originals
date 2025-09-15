<script setup lang="ts">
import { useResize } from '@/composables/useResize'
import { useResizeObserver, useWindowSize } from '@vueuse/core'
import { useTemplateRef } from 'vue'

//components
import StatusBar from '@/components/Core/bars/StatusBar.vue'
import Board from '@/components/Game/Board/Board.vue'
import GameActions from '@/components/Game/GameActions.vue'
import GameFooter from '@/components/Game/GameFooter.vue'
import LastBets from '@/components/Game/LastBets.vue'
import Result from '@/components/Game/Result.vue'
import Sidebar from '@/components/Game/Sidebar/Sidebar.vue'
import Wheel from '@/components/Game/Wheel.vue'
import { GameStates, useGameStore } from '@/stores/game'
import { storeToRefs } from 'pinia'
import GameResult from '@/components/Game/GameResult/GameResult.vue'
import { useAppStore } from '@/stores/app'

const GameContainer = useTemplateRef('gameContainer')

//composables
const { resize } = useResize()
const { undo, clear } = useGameStore()
const { betsHistory, gameState, result, playerResults } = storeToRefs(useGameStore())
const { isMobile } = storeToRefs(useAppStore())
const { height } = useWindowSize()

//@ts-ignore
useResizeObserver(document.body, () => resize(GameContainer.value as any))
</script>
<template>
  <div>
    <StatusBar />
    <div ref="gameContainer" class="game-layout">
      <div class="content-wrapper">
        <div class="game-frame scrollY">
          <div class="game-container">
            <Sidebar />
            <div class="game-content">
              <div class="wrap">
                <div
                  class="game-screen"
                  :style="{
                    gap: height < 500 ? 0 : '0.5em',
                    padding: height < 500 ? 0 : '1em',
                    gridTemplateColumns: `auto minmax(max-content, ${height < 500 ? 200 : 270}px) auto`,
                  }"
                >
                  <Board />
                  <Result :display="gameState === GameStates.RESULTS" :result="result" />
                  <GameResult
                    :display="gameState === GameStates.RESULTS && playerResults?.isWon"
                    :result="result"
                  />
                  <LastBets />
                  <GameActions
                    @onUndo="undo"
                    @onClear="clear"
                    :is-disabled="betsHistory.length === 0 || gameState === GameStates.SPINNING"
                  />
                  <Wheel
                    :style="{
                      display: isMobile && gameState !== GameStates.SPINNING ? 'none' : 'flex',
                    }"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <GameFooter />
      </div>
    </div>
  </div>
</template>
