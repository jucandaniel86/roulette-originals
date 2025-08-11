import CurrencyConverter from '@/core/core.CurrencyConvertor'
import Utils from '@/core/core.Util'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export interface StatusDataI {
  bet: number
  credit: number
}

export const useStatusStore = defineStore('status', () => {
  const credit = ref<number>(0)
  const bet = ref<number>(0)

  const setStatusData = (payload: any) => {
    if (Utils.IsVariableSet(payload.bet)) {
      bet.value = payload.bet
    }

    if (Utils.IsVariableSet(payload.credit)) {
      credit.value = payload.credit
    }
  }

  const balance = computed(() => {
    return CurrencyConverter.Convert(credit.value)
  })

  return {
    credit,
    bet,
    balance,
    setStatusData,
  }
})
