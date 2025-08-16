import type { Fn } from '@vueuse/core'
import WheelCurves from './WheelCurves'
import WheelBall from './WheelBall'
import { useWheelRotation } from './WheelBallRotation'
import { useNumber } from '@/composables/useNumber'

type WheelAnimationSetup = {
  width: number
  height: number
  ctx: CanvasRenderingContext2D
  ballStartDropCallback: () => void
}

type WheelAnimationRotationType = {
  wheel: number
  ball: number
}

type WheelSizes = {
  x: number
  y: number
  radius: number
}

type InnerWheelSizes = {
  shadowRadius: number
  solidRadius: number
}

export type WheelSizesType = {
  mid: {
    x: number
    y: number
  }
  innerWheelRadius: number
  wheelRadius: number
  ballRadius: number
  circleInnerPadding: number
}

const DefaultSetup = {
  wheel: {
    default: 0,
    accelerated: 0,
  },
  ball: {
    default: 7,
  },
}

export default class WheelAnimation {
  //vars
  public ctx!: CanvasRenderingContext2D
  public width!: number
  public height!: number
  public instantResult: boolean = false
  public stopRotationAt: boolean = false
  public circleInnerPadding: number = 20
  public time: number = 0
  public result: any = false
  public hasBall: boolean = false
  public restOfRotation!: number
  public ballRadius!: number
  public startAnimationAtDegrees!: number
  public totalRotation!: number
  public hasDropped!: boolean
  public wheelSizes!: WheelSizes
  public innerWheelSizes!: InnerWheelSizes
  public rotations: WheelAnimationRotationType = {
    wheel: 0,
    ball: 0,
  }
  public rotationIncreasements: WheelAnimationRotationType = {
    wheel: DefaultSetup.wheel.default,
    ball: DefaultSetup.ball.default,
  }
  public curveTimeline: any
  public curves!: any[]
  public Ball: WheelBall
  public interval: any

  public dropCallback!: () => void
  public ballStartDropCallback!: () => void

  /**
   *
   * @param {WheelAnimationSetup} param0
   */
  constructor({ ctx, width, height, ballStartDropCallback }: WheelAnimationSetup) {
    this.ctx = ctx
    this.width = width
    this.height = height
    this.wheelSizes = {
      x: width / 2,
      y: height / 2,
      radius: height / 2,
    }
    this.innerWheelSizes = {
      shadowRadius: this.wheelSizes.radius - this.circleInnerPadding - 20,
      solidRadius: this.wheelSizes.radius - this.circleInnerPadding - 40,
    }
    this.ballRadius = Math.round(this.circleInnerPadding / 3.5)
    this.Ball = new WheelBall({
      ctx,
      wheelSizes: this.wheelSizes,
      radius: this.ballRadius,
      startY: (this.circleInnerPadding - 2) / 2,
      ballStartDropCallback,
    })

    this.ballStartDropCallback = ballStartDropCallback
    this.changeStartAnimationAtDegrees(0)
  }

  public getCurrentCurveXY(e: number, n: number) {
    const { curveTimeline: i } = this
    const s = e / n

    for (let o = 0; o < i.length; o += 1) {
      const a = i[o],
        l = o === 0 ? 0 : i[o - 1]
      if (a > s) {
        const c = a - l,
          u = (s - l) / c
        return this.curves[o].getQuadraticXY(u * 100)
      }
    }
    return 0
  }

  public rotate() {
    const { ctx, width, height, rotationIncreasements } = this
    const { radians } = useNumber()

    this.rotations.wheel += rotationIncreasements.wheel
    this.rotations.wheel = this.rotations.wheel - Math.ceil(this.rotations.wheel / 360) * 360

    ctx.translate(width / 2, height / 2)
    ctx.rotate(radians(rotationIncreasements.wheel))
    ctx.translate(-width / 2, -height / 2)

    if (typeof this.result === 'number') {
      if (this.curves[this.curves.length - 2]) {
        const QuadraticXY = this.curves[this.curves.length - 2].getQuadraticXY(100)

        if (this.instantResult) {
          this.Ball.changePlayAnimation(true)
          this.Ball.changeAnimationCoordinates(QuadraticXY as any)
          if (this.hasDropped) {
            this.dropCallback()
          }
        } else if (this.restOfRotation > 360) {
          const a = this.rotationIncreasements.ball
          this.restOfRotation -= a
          this.rotations.ball += a
          this.rotations.ball = this.rotations.ball - Math.floor(this.rotations.ball / 360) * 360
        } else {
          const a: any = this.getCurrentCurveXY(this.time, 2.5)

          const l =
            typeof a === 'undefined' || isNaN(a!.x)
              ? this.curves[this.curves.length - 2].getQuadraticXY(100)
              : a

          this.Ball.changePlayAnimation(true)
          this.Ball.changeAnimationCoordinates(l)
          this.time += 0.035

          if (l && l.x === QuadraticXY.x && l.y === QuadraticXY.y && !this.hasDropped) {
            this.dropCallback()
          }
        }
      }
    } else {
      this.rotations.ball += this.rotationIncreasements.ball
      this.rotations.ball = this.rotations.ball - Math.floor(this.rotations.ball / 360) * 360
    }
  }

  /**
   *
   * @param result
   * @param instantResult
   * @returns
   */
  public changeResult(result: boolean | number, instantResult: boolean) {
    this.result = result
    this.instantResult = instantResult

    const { calcBallRotations } = useWheelRotation()

    if (typeof result === 'number') {
      this.time = 0
      const position = calcBallRotations({
        ballRotation: 0,
        number: result,
      })
      const totalRotation = 720 + position - this.rotations.ball

      this.totalRotation = totalRotation
      this.restOfRotation = totalRotation
      this.hasDropped = false
      this.changeStartAnimationAtDegrees(position)

      const { curves, curveTimeline }: any = this.generateCurves()

      this.curves = curves
      this.curveTimeline = curveTimeline

      return
    }

    this.Ball.changePlayAnimation(false)
  }

  /**
   * @void
   */
  public clean() {
    const { ctx, width, height } = this
    ctx.clearRect(0, 0, width, height)
  }

  /**
   *
   * @param callback
   */
  public addDropCallBack(callback: Fn) {
    this.dropCallback = () => {
      this.hasDropped = true
      callback()
    }
  }

  /**
   *
   * @param deg
   */
  private changeStartAnimationAtDegrees(deg: number) {
    this.startAnimationAtDegrees = deg - 90
  }

  /**
   *
   * @param n
   * @returns {number}
   */
  private rand(n: number): number {
    return Math.round(Math.random() * n) - n / 2
  }

  /**
   * @returns {void}
   */
  public drawBall(): void {
    const { rotations, hasBall, result } = this

    if (hasBall && typeof result === 'number') {
      this.Ball.render(rotations.ball)
    }
  }

  /**
   * @void
   */
  public render() {
    this.clean()
    this.rotate()
    this.drawBall()
  }

  /**
   * @void
   */
  private generateCurves() {
    const {
      width,
      height,
      ballRadius,
      wheelSizes,
      innerWheelSizes,
      startAnimationAtDegrees,
      circleInnerPadding,
    } = this

    const collisions = [
      {
        degrees: startAnimationAtDegrees,
        time: 0.2,
      },
      {
        degrees: startAnimationAtDegrees + 110 + this.rand(30),
        time: 0.18,
      },
      {
        degrees: startAnimationAtDegrees + 170 + this.rand(20),
        time: 0.16,
      },
      {
        degrees: startAnimationAtDegrees + 225 + this.rand(15),
        time: 0.2,
      },
      {
        degrees: startAnimationAtDegrees + 250 + this.rand(15),
        time: 0.2,
      },
      {
        degrees: startAnimationAtDegrees + 280 + this.rand(15),
        time: 0.2,
      },
      {
        degrees: startAnimationAtDegrees + 310 + this.rand(12),
        time: 0.22,
      },
      {
        degrees: startAnimationAtDegrees + 335 + this.rand(8),
        time: 0.22,
      },
      {
        degrees: startAnimationAtDegrees + 350 + this.rand(7),
        time: 0.22,
      },
      {
        degrees: startAnimationAtDegrees + 360,
        time: 0.22,
      },
    ]

    const sizes: WheelSizesType = {
      mid: {
        x: width / 2,
        y: height / 2,
      },
      innerWheelRadius: innerWheelSizes.solidRadius,
      wheelRadius: wheelSizes.radius,
      ballRadius,
      circleInnerPadding,
    }
    const d = collisions.map((f, h) => collisions.slice(0, h + 1).reduce((y, v) => y + v.time, 0))
    return {
      curves: new WheelCurves({
        collisions,
        sizes,
      }),
      curveTimeline: d,
    }
  }

  public changeHasBall(hasBall: boolean) {
    this.hasBall = hasBall

    const n = 1000 / 60

    if (hasBall) {
      clearInterval(this.interval)
      let i = 0
      const s = 300

      this.interval = setInterval(() => {
        i += n
        const o = i / s

        if (o < 1) {
          this.rotationIncreasements.wheel =
            DefaultSetup.wheel.default +
            o * (DefaultSetup.wheel.accelerated - DefaultSetup.wheel.default)
        } else {
          clearInterval(this.interval)
        }
      }, n)
    } else {
      clearInterval(this.interval)
      let i = 0
      const s = 1000

      this.interval = setInterval(() => {
        i += n
        const o = i / s

        if (i < s) {
          this.rotationIncreasements.wheel =
            DefaultSetup.wheel.default +
            (1 - o) * (DefaultSetup.wheel.accelerated - DefaultSetup.wheel.default)
        } else {
          clearInterval(this.interval)
        }
      }, n)
    }
  }
}
