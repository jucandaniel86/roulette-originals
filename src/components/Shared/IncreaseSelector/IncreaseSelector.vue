<script setup lang="ts">
import { nextTick, ref, useTemplateRef, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import PercentIcon from '../Icons/PercentIcon.vue'
import Tooltip from '@/components/Core/tooltip/Tooltip.vue'

//type
type IncreaseSelectorType = {
  label: string
  hasError: boolean
  id?: string
  isDisabled: boolean
  errorMessage?: string
}

//props
const props = withDefaults(defineProps<IncreaseSelectorType>(), {
  errorMessage: '',
})

//models
const model = defineModel()
const disabled = ref<boolean>(true)
const inputNumber = useTemplateRef('inputNumber')
const displayTooltip = ref<boolean>(false)

//composables
const { t } = useI18n()

//emitters
const emitters = defineEmits(['onChange', 'onHover'])

//methods
const onReset = () => {
  if (props.isDisabled) return

  model.value = 0
  disabled.value = true

  nextTick(() => {
    inputNumber.value?.dispatchEvent(
      new Event('input', {
        bubbles: true,
      }),
    )
  })
}
const onChange = (e: any) => {
  if (props.isDisabled) return
  emitters('onChange', e)
}
const activate = () => {
  if (props.isDisabled) return
  disabled.value = false
}

const handleMouseOver = () => {
  if (props.hasError) {
    displayTooltip.value = true
    return
  }
  displayTooltip.value = false
}

const handleMouseOut = () => {
  displayTooltip.value = false
}

watch(props, () => {
  displayTooltip.value = props.hasError
})
</script>
<template>
  <label class="switch-wrapper">
    <div class="content">
      <div class="switch-input-buttons-wrap">
        <a
          class="transition reset"
          @click.prevent="onReset"
          :class="{ disabled: props.isDisabled, active: disabled }"
        >
          {{ t('components.sidebar.reset') }}
        </a>
        <a
          class="transition increase"
          :disabled="disabled || props.isDisabled"
          :class="{ active: !disabled, disabled: props.isDisabled }"
          @click.prevent="activate"
        >
          {{ t('components.sidebar.increase') }}:
        </a>
      </div>
      <div class="input-wrapper" :class="{ invalid: props.hasError }">
        <div class="input-content" ref="inputContent">
          <div class="inputs">
            <input
              ref="inputNumber"
              type="number"
              min="0"
              v-model="model"
              :disabled="disabled || props.isDisabled"
              @input="onChange"
              @mouseover="handleMouseOver"
              @mouseout="handleMouseOut"
              class="input-number"
            />
            <div class="after-icon">
              <PercentIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
    <span class="input-label">{{ props.label }}</span>

    <!-- TOOLTIP -->
    <Tooltip :show="displayTooltip" :content="props.errorMessage" :target="$refs['inputContent']" />
    <!-- /TOOLTIP -->
  </label>
</template>
<style scoped>
@import './IncreaseSelector.css';
</style>
