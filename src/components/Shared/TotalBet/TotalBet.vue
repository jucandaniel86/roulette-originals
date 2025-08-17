<script setup lang="ts">
import CurrencyConverter from '@/core/core.CurrencyConvertor'
import { defineProps, ref, watch } from 'vue'

type StakeSelectorType = {
  title?: string
  isDisabled?: boolean
  totalBet: number
}

const props = withDefaults(defineProps<StakeSelectorType>(), {
  isDisabled: false,
})

const isDisabled = ref<boolean>(props.isDisabled)

watch(props, () => {
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
          :value="CurrencyConverter.Convert(props.totalBet, true, false)"
        />
        <div class="after-icon">
          {{ CurrencyConverter.getCurrency() }}
        </div>
      </div>
      <div class="input-button-wrap"></div>
    </div>
    <span class="label-content">{{ props.title }}</span>
  </label>
</template>
<style scoped>
@import './TotalBet.css';
</style>
