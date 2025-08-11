import { ref } from 'vue'
import { useString } from './useString'
import { useI18n } from 'vue-i18n'
import { AUTOPLAY_MAX_NO_BETS } from '@/config/app.config'

export const useValidation = () => {
  const validationErrorRef = ref(new Map())
  const currentError = ref<string>('')
  const { t } = useI18n()

  const validatePlatform = () =>
    navigator.platform.startsWith('iP') ||
    (navigator.platform.startsWith('Mac') && navigator.maxTouchPoints > 4)

  const handleNumberOfBetsChange = (e: any) => {
    const { isString } = useString()

    if (!isString(e.target?.value)) return
    if (isNaN(e.target?.valueAsNumber) && !validatePlatform()) {
      validationErrorRef.value.set('numberOfBets', t('validation.min', { min: 0 }))
      currentError.value = 'numberOfBets'
      return
    } else {
      if (e.target.valueAsNumber > AUTOPLAY_MAX_NO_BETS) {
        validationErrorRef.value.set(
          'numberOfBets',
          t('validation.max', { max: AUTOPLAY_MAX_NO_BETS }),
        )
        currentError.value = 'numberOfBets'
      } else {
        if (validationErrorRef.value.has('numberOfBets')) {
          validationErrorRef.value.delete('numberOfBets')
          currentError.value = ''
        }
      }
    }
  }

  const handleStopOnProfitChange = (e: any) => {
    const { isString } = useString()

    if (!isString(e.target?.value)) return
    if (isNaN(e.target?.valueAsNumber) && !validatePlatform()) {
      validationErrorRef.value.set('stopOnProfit', t('validation.min', { min: 0 }))
      currentError.value = 'stopOnProfit'
      return
    } else {
      if (e.target.valueAsNumber < 0) {
        validationErrorRef.value.set('stopOnProfit', t('validation.max', { min: 0 }))
        currentError.value = 'stopOnProfit'
      } else {
        if (validationErrorRef.value.has('stopOnProfit')) {
          validationErrorRef.value.delete('stopOnProfit')
          currentError.value = ''
        }
      }
    }
  }

  const handleStopOnLossChange = (e: any) => {
    const { isString } = useString()

    if (!isString(e.target?.value)) return
    if (isNaN(e.target?.valueAsNumber) && !validatePlatform()) {
      validationErrorRef.value.set('stopOnLoss', t('validation.min', { min: 0 }))
      currentError.value = 'stopOnLoss'
      return
    } else {
      if (e.target.valueAsNumber < 0) {
        validationErrorRef.value.set('stopOnLoss', t('validation.max', { min: 0 }))
        currentError.value = 'stopOnLoss'
      } else {
        if (validationErrorRef.value.has('stopOnLoss')) {
          validationErrorRef.value.delete('stopOnLoss')
          currentError.value = ''
        }
      }
    }
  }

  const handleIncreaseByWinChange = (e: any) => {
    const { isString } = useString()

    if (!isString(e.target?.value)) return
    if (isNaN(e.target?.valueAsNumber) && !validatePlatform()) {
      validationErrorRef.value.set('onWin', t('validation.min', { min: 0 }))
      currentError.value = 'onWin'
      return
    } else {
      if (e.target.valueAsNumber < 0) {
        validationErrorRef.value.set('onWin', t('validation.max', { min: 0 }))
        currentError.value = 'onWin'
      } else {
        if (validationErrorRef.value.has('onWin')) {
          validationErrorRef.value.delete('onWin')
          currentError.value = ''
        }
      }
    }
  }
  const handleIncreaseByLossChange = (e: any) => {
    const { isString } = useString()

    if (!isString(e.target?.value)) return
    if (isNaN(e.target?.valueAsNumber) && !validatePlatform()) {
      validationErrorRef.value.set('onLoss', t('validation.min', { min: 0 }))
      currentError.value = 'onLoss'
      return
    } else {
      if (e.target.valueAsNumber < 0) {
        validationErrorRef.value.set('onLoss', t('validation.max', { min: 0 }))
        currentError.value = 'onLoss'
      } else {
        if (validationErrorRef.value.has('onLoss')) {
          validationErrorRef.value.delete('onLoss')
          currentError.value = ''
        }
      }
    }
  }

  const showInputTooltip = (inputName: string) => {
    currentError.value = inputName
    if (!validationErrorRef.value.has(inputName)) return
  }

  return {
    validationErrorRef,
    currentError,
    handleNumberOfBetsChange,
    handleStopOnProfitChange,
    handleStopOnLossChange,
    handleIncreaseByWinChange,
    handleIncreaseByLossChange,
    validatePlatform,
    showInputTooltip,
  }
}
