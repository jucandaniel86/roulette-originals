import { useAppStore } from '@/stores/app'
import { useWindowSize } from '@vueuse/core'
import { onMounted, onUnmounted } from 'vue'

export const useResize = () => {
  //@ts-ignore
  const resize = async () => {
    const { setResolution } = useAppStore()

    const { width, height } = useWindowSize()

    setResolution({
      width: width.value,
      height: height.value,
    })
  }

  const initResizeObserver = (cb: any) => {
    const observer = new ResizeObserver((r) => {
      for (const n of r) cb(n)
    })

    onMounted(() => observer.observe(document.body))

    onUnmounted(() => observer.disconnect())
  }

  return {
    resize,
    initResizeObserver,
  }
}
