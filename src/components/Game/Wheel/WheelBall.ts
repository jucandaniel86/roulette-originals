import { useNumber } from '@/composables/useNumber'

interface WheelBallConstructor {
  ctx: CanvasRenderingContext2D
  radius: number
  wheelSizes: any
  startY: number
  ballStartDropCallback: () => void
}

type WheelBallCoordinates = {
  x: 0
  y: 0
}

export default class WheelBall {
  public animationCoordinates!: WheelBallCoordinates
  public ctx: CanvasRenderingContext2D
  public wheelSizes!: any
  public startY!: number
  public playAnimation = false
  public radius!: number
  public ballStartDropCallback: () => void

  /**
   *
   * @param { WheelBallConstructor } param
   */
  constructor({ ctx, radius, wheelSizes, startY, ballStartDropCallback }: WheelBallConstructor) {
    this.animationCoordinates = {
      x: 0,
      y: 0,
    }
    this.ctx = ctx
    this.wheelSizes = wheelSizes
    this.startY = startY
    this.radius = radius
    this.ballStartDropCallback = ballStartDropCallback
  }

  public changeAnimationCoordinates(coords: WheelBallCoordinates) {
    this.animationCoordinates = coords
  }

  public changePlayAnimation(playAnimation: boolean) {
    if (this.playAnimation !== playAnimation) {
      this.playAnimation = playAnimation
      if (playAnimation) {
        this.ballStartDropCallback()
      }
    }
  }

  public render(e: any) {
    const { wheelSizes, radius, ctx, startY, playAnimation, animationCoordinates } = this

    const { radians } = useNumber()

    ctx.save()
    ctx.fillStyle = '#fff'

    if (playAnimation) {
      ctx.beginPath()
      ctx.arc(animationCoordinates.x, animationCoordinates.y, radius, 0, Math.PI * 2)
      ctx.fill()
      ctx.closePath()
    } else {
      ctx.translate(wheelSizes.x, wheelSizes.y)
      ctx.rotate(radians(e))
      ctx.translate(-wheelSizes.x, -wheelSizes.y)
      ctx.beginPath()
      ctx.arc(wheelSizes.x, startY, radius, 0, Math.PI * 2)
      ctx.fill()
      ctx.closePath()
    }

    ctx.restore()
  }
}
