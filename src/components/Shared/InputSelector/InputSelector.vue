<script setup lang="ts">
import CurrencyConverter from '@/core/core.CurrencyConvertor'
import InfiniteIcon from '../Icons/InfiniteIcon.vue'
import Tooltip from '@/components/Core/tooltip/Tooltip.vue'
import { ref, watch } from 'vue'

type InputSelectorType = {
  label: string
  invalid: boolean
  isDisabled: boolean
  id: string
  currency?: boolean
  step?: number
  errorMessage?: string
}
//props
const props = withDefaults(defineProps<InputSelectorType>(), {
  currency: true,
  step: 0.01,
  errorMessage: '',
})

//models
const model = defineModel<any>()
const displayTooltip = ref<boolean>(false)
const disabled = ref<boolean>(props.isDisabled)

//emitters
const emitters = defineEmits(['onInput', 'onHover'])

//methods
const handleInputChange = (input: any) => {
  emitters('onInput', input)
}

const handleMouseOver = () => {
  if (props.invalid) {
    displayTooltip.value = true
    return
  }
  displayTooltip.value = false
}

const handleMouseOut = () => {
  displayTooltip.value = false
}

watch(props, () => {
  displayTooltip.value = props.invalid
  disabled.value = props.isDisabled
})
</script>
<template>
  <label class="label-wrapper" :key="props.id">
    <div class="input-wrap">
      <div class="input-content" ref="inputContent" :class="{ invalid: props.invalid }">
        <div class="after-icon" v-if="props.currency">{{ CurrencyConverter.getCurrency() }}</div>
        <div class="after-icon" v-if="!props.currency">
          <InfiniteIcon />
        </div>
        <input
          v-model="model"
          type="number"
          min="0"
          :step="props.step"
          @input="handleInputChange"
          @mouseover="handleMouseOver"
          @mouseout="handleMouseOut"
          :disabled="disabled"
          class="input-value"
        />
      </div>
    </div>

    <span class="label-content">{{ props.label }}</span>

    <!-- TOOLTIP -->
    <Tooltip :show="displayTooltip" :content="props.errorMessage" :target="$refs['inputContent']" />
    <!-- /TOOLTIP -->
  </label>
</template>
<style scoped>
@import './InputSelector.css';
</style>
