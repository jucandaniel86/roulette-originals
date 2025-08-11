import { DEFAULT_COLOR, MOBILE_RESOLUTION } from '@/config/app.config'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import * as p from '../../package.json'

export const useAppStore = defineStore('app', () => {
  const color = ref<'blue' | 'red' | 'green'>(DEFAULT_COLOR)
  const resolution = ref<{ width: number; height: number }>({
    width: 0,
    height: 0,
  })

  const isMobile = computed(() => resolution.value.width < MOBILE_RESOLUTION)
  const setResolution = (_resolution: { width: number; height: number }) => {
    resolution.value = _resolution
  }
  const version = p.version

  const setColor = (_color: 'blue' | 'red' | 'green') => (color.value = _color)
  return {
    resolution,
    color,
    isMobile,
    version,
    setColor,
    setResolution,
  }
})
