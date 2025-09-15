<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'
import ArrowLeftIcon from '../Icons/ArrowLeftIcon.vue'
import { useI18n } from 'vue-i18n'
import ArrowRightIcon from '../Icons/ArrowRightIcon.vue'
import { useNumber } from '@/composables/useNumber'
import { useScroll } from '@vueuse/core'
import { STAKE_COLORS } from '@/config/app.config'
import CurrencyConverter from '@/core/core.CurrencyConvertor'

//props
type ChipSelectorType = {
  chips: number[]
  defaultValue: number
  isDisabled: boolean
}
const props = withDefaults(defineProps<ChipSelectorType>(), {
  defaultValue: 0,
  isDisabled: false,
})
//models
const activeValue = ref<number>(props.chips[props.defaultValue])
const scrollContent = useTemplateRef('scrollContent')

//composables
const { t } = useI18n()
const { convertToK } = useNumber()
const { x } = useScroll(scrollContent, { behavior: 'smooth' })

const emitters = defineEmits(['onChange'])

//methods
const handleOnChange = (_val: number) => {
  emitters('onChange', _val)
  activeValue.value = _val
}

const prev = () => (x.value = 0)
const next = () => (x.value = scrollContent.value?.scrollWidth || 0)
</script>
<template>
  <div class="label">
    <div class="wrap">
      <button
        type="button"
        :disabled="props.isDisabled"
        tabindex="0"
        class="transition chip-btn"
        @click.prevent="prev"
      >
        <ArrowLeftIcon />
      </button>
      <div class="scroll-wrap">
        <div class="content" ref="scrollContent">
          <button
            v-for="(chip, i) in props.chips"
            :key="`Chip${i}`"
            class="chip"
            :class="`chip-${chip}`"
            :disabled="props.isDisabled"
            @click.prevent="handleOnChange(chip)"
            :style="{
              backgroundColor: STAKE_COLORS.get(chip),
              boxShadow:
                activeValue === chip
                  ? 'rgb(145, 112, 0) 0px 0.125rem 0px 0px, rgb(255, 255, 255) 0px 0.065rem 0px 0.25rem'
                  : 'none',
            }"
          >
            <div class="content">{{ convertToK(chip) }}</div>
          </button>
        </div>
      </div>
      <button
        type="button"
        :disabled="props.isDisabled"
        tabindex="0"
        class="transition chip-btn"
        @click.prevent="next"
      >
        <ArrowRightIcon />
      </button>
    </div>

    <div class="label-content">
      <span>{{ t('components.chipSelector.chipValue') }}</span>
      <div class="currency svelte-13xyujb" role="presentation">
        <span class="content svelte-13xyujb" style="">
          <span class="" style="max-width: 12ch">
            <span>{{ CurrencyConverter.Convert(activeValue) }}</span>
          </span>
        </span>
      </div>
    </div>
  </div>
</template>
<style>
@import './ChipSelector.css';
</style>
