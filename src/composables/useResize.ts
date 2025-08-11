import { GAME_RATIO } from '@/config/app.config'
import { useAppStore } from '@/stores/app'
import { onMounted, onUnmounted, ref } from 'vue'

export const useResize = () => {
  const resizeTimeout = ref()

  const reset = (GameContainerDiv: HTMLDivElement) => {
    if (GameContainerDiv) {
      GameContainerDiv.style.removeProperty('width')
      GameContainerDiv.style.removeProperty('transform')
      GameContainerDiv.style.removeProperty('padding-top')
      GameContainerDiv.style.removeProperty('margin-left')
      document.body.classList.remove('landscape')
    }
  }

  const resize = (GameContainerDiv: HTMLDivElement) => {
    const { isMobile } = useAppStore()
    if (isMobile) {
      reset(GameContainerDiv)
      return false
    }

    if (resizeTimeout.value) {
      clearTimeout(resizeTimeout.value)
    }

    resizeTimeout.value = setTimeout(() => {
      resizeTimeout.value = null

      const InnerWidth = window.innerWidth
      const InnerHeight = window.innerHeight
      const GameRatio = GAME_RATIO
      const WindowRatio = InnerWidth / InnerHeight

      const PTop =
        GameContainerDiv.scrollHeight - (parseFloat(GameContainerDiv.style.paddingTop) || 0)
      const GameContainerWidth = PTop * GameRatio
      const GameContainerScale =
        WindowRatio < GameRatio ? InnerWidth / GameContainerWidth : InnerHeight / PTop
      const V = GameContainerWidth * GameContainerScale
      const z = PTop * GameContainerScale
      const PaddingTop = InnerHeight > z ? ((InnerHeight - z) / 2) * (2 - GameContainerScale) : 0
      const MarginLeft = InnerWidth > V ? (InnerWidth - V) / 2 : 0

      GameContainerDiv.style.width = `${GameContainerWidth}px`
      GameContainerDiv.style.transform = `scale(${GameContainerScale})`
      GameContainerDiv.style.paddingTop = `${PaddingTop.toFixed(2)}px`
      GameContainerDiv.style.marginLeft = `${MarginLeft.toFixed(2)}px`
    }, 0)
    document.body.classList.add('landscape')
  }

  const initResizeObserver = (cb: any) => {
    const observer = new ResizeObserver((r) => {
      for (const n of r) cb(n)
    })

    onMounted(() => observer.observe(document.body))

    onUnmounted(() => observer.disconnect())
  }

  return {
    reset,
    resize,
    initResizeObserver,
  }
}
