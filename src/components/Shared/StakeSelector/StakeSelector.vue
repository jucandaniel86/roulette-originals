<script setup lang="ts">
import CurrencyConverter from '@/core/core.CurrencyConvertor'
import SoundManager from '@/core/core.Sounds'
import { defineProps, ref, watch } from 'vue'
import ArrowDownIcon from '../Icons/ArrowDownIcon.vue'

type StakeSelectorType = {
  title?: string
  isDisabled?: boolean
  selectedOption?: number
  options: number[]
}

const props = withDefaults(defineProps<StakeSelectorType>(), {
  selectedOption: 0,
  isDisabled: false,
})

const currentOption = ref<number>(props.selectedOption || 0)
const isDisabled = ref<boolean>(props.isDisabled)
const emits = defineEmits(['stake-selector:increase', 'stake-selector:decrease'])

const increase = () => {
  if (currentOption.value + 1 >= props.options.length) return
  currentOption.value++
  SoundManager.Instance().play('CLICK')
  emits('stake-selector:increase', props.options[currentOption.value])
}

const decrease = () => {
  if (currentOption.value < 1) return
  currentOption.value--

  SoundManager.Instance().play('CLICK')
  emits('stake-selector:decrease', props.options[currentOption.value])
}

watch(props, () => {
  currentOption.value = props.selectedOption
  isDisabled.value = props.isDisabled
})
</script>
<template>
  <label class="label-wrapper">
    <div class="input-wrap">
      <div class="input-content">
        <input
          type="text"
          readonly
          class="stake-value"
          :disabled="isDisabled"
          :value="CurrencyConverter.Convert(props.options[currentOption] as number, true, false)"
        />
        <div class="after-icon">
          {{ CurrencyConverter.getCurrency() }}
        </div>
      </div>
      <div class="input-button-wrap">
        <button
          :disabled="isDisabled || currentOption + 1 === options.length"
          class="transition up"
          @click.prevent="increase"
        >
          <ArrowDownIcon />
        </button>

        <button
          :disabled="isDisabled || currentOption === 0"
          class="transition"
          @click.prevent="decrease"
        >
          <ArrowDownIcon />
        </button>
      </div>
    </div>
    <span class="label-content">{{ props.title }}</span>
  </label>
</template>
<style scoped>
@import './StakeSelector.css';
</style>
