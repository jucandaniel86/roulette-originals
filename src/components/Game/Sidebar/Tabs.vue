<script setup lang="ts">
import type { PlayModeType } from '@/config/app.config'
import { GameModeType } from '@/stores/game'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

//models
const modes = ref<PlayModeType[]>([
  {
    label: 'components.sidebar.manual',
    mode: GameModeType.MANUAL,
  },
  {
    label: 'components.sidebar.auto',
    mode: GameModeType.AUTO,
  },
])

//types
type TabsType = {
  activeTab: GameModeType
  disabled: boolean
}

//props
const props = defineProps<TabsType>()

//emitters
const emitters = defineEmits(['onChange'])

//composables
const { t } = useI18n()

//methods
const handleOnChange = (type: GameModeType) => emitters('onChange', type)
</script>
<template>
  <div class="game-tabs">
    <div class="tabs-wrapper scrollX">
      <div class="slider">
        <div class="wrapper">
          <button
            class="tabs-buttons transition"
            :key="`Model${i}`"
            :class="{ active: mode.mode === props.activeTab }"
            v-for="(mode, i) in modes"
            @click.prevent="handleOnChange(mode.mode)"
            :disabled="props.disabled"
          >
            {{ t(mode.label) }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
