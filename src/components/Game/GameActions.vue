<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ClearIcon from '../Shared/Icons/ClearIcon.vue'
import UndoIcon from '../Shared/Icons/UndoIcon.vue'

//props
const props = defineProps({
  isDisabled: {
    required: true,
    type: Boolean,
    default: false,
  },
})

//composables
const { t } = useI18n()

//emitters
const emitters = defineEmits(['onUndo', 'onClear'])

//methods
const onUndo = () => emitters('onUndo')
const onClear = () => emitters('onClear')
</script>
<template>
  <div class="game-actions">
    <button
      :disabled="props.isDisabled"
      type="button"
      tabindex="0"
      class="game-action-btn text-grey"
      @click.prevent="onUndo"
    >
      <UndoIcon />
      <span>{{ t('components.game.undo') }}</span>
    </button>
    <button
      :disabled="props.isDisabled"
      type="button"
      tabindex="0"
      class="game-action-btn text-grey"
      @click.prevent="onClear"
    >
      <ClearIcon />
      <span>{{ t('components.game.clear') }}</span>
    </button>
  </div>
</template>
