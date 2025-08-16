//@ts-nocheck
import { Bezier } from 'bezier-js'

import { useNumber } from '@/composables/useNumber'
import type { WheelSizesType } from './WheelAnimation'

type WheelCurvesType = {
  collisions: any
  sizes: WheelSizesType
}

export class Curves {
  public degrees!: number
  public time!: number
  public nextCurve: any
  public x: number
  public y: number
  public handle: any

  constructor({ degrees, time, handle, x, y, nextCurve }: any) {
    this.degrees = degrees
    this.time = time
    this.nextCurve = nextCurve
    this.x = x
    this.y = y
    this.handle = handle
  }

  getDegrees() {
    return this.degrees
  }

  drawHandlePoint(ctx: CanvasRenderingContext2D) {
    const {
      handle: { x: n, y: i },
    } = this
    const s = 5

    ctx.fillStyle = 'blue'
    ctx.fillRect(n - s / 2, i - s / 2, s, s)
    ctx.fillStyle = '#fff'
    ctx.fillRect(n - s / 4, i - s / 4, s / 2, s / 2)
  }

  getQuadraticXY(args: number) {
    return new Bezier(...[this.getQuadraticCurve()]).get(args / 100)
  }

  getQuadraticCurve(): any[] {
    const { handle: e, x: n, y: i, nextCurve: s } = this
    return [n, i, e.x, e.y, s.x, s.y]
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.save()
    ctx.restore()
  }
}

export default class WheelCurves {
  constructor({ collisions, sizes }: WheelCurvesType) {
    const {
      mid: { x: centerX, y: centerY },
      wheelRadius,
      innerWheelRadius,
      ballRadius,
      circleInnerPadding,
    } = sizes
    const { radians } = useNumber()

    let c = 50 + Math.random() * 70

    const u = collisions.map((m: any, d: number) => {
      const item = collisions[d + 1]
      const check = item !== void 0

      const y = check && Math.cos(radians((item.degrees + m.degrees) / 2))
      const v = check && Math.sin(radians((item.degrees + m.degrees) / 2))
      const _ = {
        x: centerX + y * (innerWheelRadius + ballRadius + c),
        y: centerY + v * (innerWheelRadius + ballRadius + c),
      }
      const w = Math.cos(radians(m.degrees))
      const N = Math.sin(radians(m.degrees))

      const b = {
        x:
          centerX +
          w * (d !== 0 ? innerWheelRadius + ballRadius : wheelRadius - circleInnerPadding / 2),
        y:
          centerY +
          N * (d !== 0 ? innerWheelRadius + ballRadius : wheelRadius - circleInnerPadding / 2),
      }

      c /= 1 + Math.random() * 0.5
      return {
        ...b,
        degrees: m.degrees,
        time: m.time,
        handle: _,
      }
    })

    return u.map((m: any, d: number) => {
      const f = u[d + 1],
        h = f !== void 0
      return new Curves({
        ...m,
        nextCurve: h && {
          x: f.x,
          y: f.y,
        },
      })
    })
  }
}
