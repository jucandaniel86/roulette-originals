var Re = Object.defineProperty
var Be = (r, e, n) =>
  e in r
    ? Re(r, e, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: n,
      })
    : (r[e] = n)
var x = (r, e, n) => Be(r, typeof e != 'symbol' ? e + '' : e, n)
import './Cy5zMhaZ.js'
import { o as Ae, a as he } from './LExoXrPq.js'
import {
  p as X,
  l as V,
  b as it,
  g as S,
  a as Q,
  m as I,
  e as M,
  aG as ae,
  f as J,
  t as lt,
  h as wt,
  c as L,
  r as O,
  s as T,
  d as zt,
} from './BNnKarWL.js'
import { c as Pt, a as P, f as j } from './Ca0nN1TN.js'
import { i as ct } from './BV5sd8P7.js'
import { p as Y, s as Z, a as $, d as $t, c as Et } from './DIyi9qMm.js'
import { s as Ct } from './CqflMB0-.js'
import { P as It, B as De, h as Pe, c as Qt } from './CSbr6Y7s.js'
import { d as ut, g as q, w as pe } from './C_GUpwRi.js'
import { g as Ee } from './CxfNbwT_.js'
import { b as Ie, j as Me, g as ye, s as Oe, k as Fe } from './DKYBFEye.js'
import { u as Ge, d as Le, s as je, g as qe, L as Ve } from './CGbf59ch.js'
import { B as Kt, i as et } from './BMReQJJk.js'
import { c as Ue } from './GApdF6bJ.js'
import { m as G } from './Csgj0yys.js'
import { k as We } from './Bx6QG_BV.js'
import { b as He } from './SG3nj6Tx.js'
import { p as Ye } from './DLmr5t44.js'
import { b as Xe, g as Qe, d as Je, e as Ke, f as Ze } from './JRqb6KDW.js'
import { e as tn } from './NOeRbwEq.js'
import { s as Mt } from './wqH1EAuW.js'
import { e as en } from './D9830KA6.js'
import { a as nn } from './06dT7SKV.js'
import { c as At } from './Dh9iv_Z1.js'
import { c as Tt } from './D2LsGTiP.js'
import { _ as ht } from './Cln4k6ab.js'
import { c as sn } from './BKmsI05f.js'
import { M as an, i as rn } from './CC34c0oE.js'
import { s as Ot } from './3EunOM9s.js'
import { i as Nt } from './Cz5GrODq.js'
import { G as on } from './CC1yYqQb.js'
import { g as Zt } from './QpF0cyAG.js'
import { e as ln } from './CkcGX8RB.js'
import { e as cn } from './GEAT1r1C.js'
import { m as un } from './kzqzxofP.js'
import { i as dn } from './Cd3Wx0WL.js'
import './CFM9z1uu.js'
import { B as re } from './oQB6oHRy.js'
import { U as mn, G as Ut, a as Wt } from './B76u9CX_.js'
import { R as fn } from './CBtIPXpi.js'
import { G as Rt } from './BJxItwdS.js'
import { G as hn, a as oe } from './C5TW3cBx.js'
import { a as le, b as pn, c as yn, d as vn, H as gn, e as xn, f as bn } from './BW_Aa3ck.js'
import { G as kn, a as _n } from './3LlmKJiW.js'
import { a as ve } from './Bjit5hxv.js'
const pt = Kt.roulette,
  {
    config: Sn,
    requestClient: wn,
    httpRequestClient: zn,
  } = Ie({
    name: pt,
    slug: 'roulette',
    apiUrl: Ge,
    httpUrl: Le(je),
    getSession: qe,
    headers: {
      'x-lockdown-token': Ve,
    },
  }),
  { instantResult: vt, animationsEnabled: Lt, maxBetEnabled: Nn } = Ee(pt),
  te = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        animationsEnabled: Lt,
        instantResult: vt,
        maxBetEnabled: Nn,
      },
      Symbol.toStringTag,
      {
        value: 'Module',
      },
    ),
  ),
  {
    amount: $n,
    currency: Jt,
    lastBet: gt,
    tab: jt,
    xstate: mt,
    conversion: Cn,
    amountValidationError: Tn,
    fetching: Rn,
    disabled: Dt,
    inPlay: ge,
    hotkeysEnabled: Bn,
    modal: An,
    balance: xe,
    chips: nt,
    totalChipsBetAmount: qt,
    initialState: Dn,
  } = Ue({}),
  Pn = ut([mt, vt], ([r, e]) => !G('betTab.idle', r) && !G('autobetTab.idle', r) && e === false),
  En = ut([mt, gt], ([r, e]) => {
    const i = G('betTab', r) ? !G('betTab.fetching', r) : !G('autobetTab.betting.base.fetching', r)
    return e !== null && i ? e.state.result : null
  }),
  In = ut([mt, vt], ([r, e]) => {
    const n = G('betTab', r)
    return (
      e === false &&
      (n
        ? !G('betTab.idle', r)
        : G('autobetTab.betting.base.fetching', r) || G('autobetTab.betting.nextBet.stop', r))
    )
  }),
  be = ut([mt, gt], ([r, e]) => {
    const n = e == null ? void 0 : e.state.result,
      i = n !== void 0 && n in It ? It[n].color : void 0,
      s =
        e !== null &&
        (G('betTab.idle', r) ||
          G('autobetTab.betting.base.idle', r) ||
          G('autobetTab.betting.base.revealed', r) ||
          G('autobetTab.idle', r))
    return {
      result: n,
      showResult: s,
      color: i,
    }
  }),
  K = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        amount: $n,
        amountValidationError: Tn,
        balance: xe,
        chips: nt,
        conversion: Cn,
        currency: Jt,
        disabled: Dt,
        fetching: Rn,
        hotkeysEnabled: Bn,
        inPlay: ge,
        initialState: Dn,
        isSpinning: In,
        lastBet: gt,
        modal: An,
        resultMeta: be,
        showWheel: Pn,
        spinResult: En,
        tab: jt,
        totalChipsBetAmount: qt,
        xstate: mt,
      },
      Symbol.toStringTag,
      {
        value: 'Module',
      },
    ),
  )
function Mn(r, e) {
  X(e, false)
  const [n, i] = Z(),
    s = () => $(d, '$resultMeta', n),
    o = () => $(h, '$currency', n),
    a = () => $(m, '$disabled', n),
    l = () => $(f, '$chips', n),
    c = I()
  let u = Y(e, 'stacked', 8, false)
  const { disabled: m, resultMeta: d, chips: f, currency: h } = K
  V(
    () => s(),
    () => {
      M(c, s().showResult ? s().result : void 0)
    },
  ),
    it(),
    De(r, {
      get stacked() {
        return u()
      },
      get currency() {
        return o()
      },
      get disabled() {
        return a()
      },
      get chips() {
        return l()
      },
      get setChip() {
        return f.setChip
      },
      get result() {
        return S(c)
      },
    }),
    Q(),
    i()
}
const On = '/_app/immutable/assets/handle.kFZ07QyW.svg',
  Fn = '/_app/immutable/assets/wheel.Dr44JYXb.png',
  ke = {
    handle: On,
    wheel: Fn,
  }
Ye(Object.values(ke))
const { abs: xt, cos: tt, sin: ft, acos: Gn, atan2: bt, sqrt: st, pow: H } = Math
function kt(r) {
  return r < 0 ? -H(-r, 1 / 3) : H(r, 1 / 3)
}
const _e = Math.PI,
  Bt = 2 * _e,
  at = _e / 2,
  Ln = 1e-6,
  Ht = Number.MAX_SAFE_INTEGER || 9007199254740991,
  Yt = Number.MIN_SAFE_INTEGER || -9007199254740991,
  jn = {
    x: 0,
    y: 0,
    z: 0,
  },
  p = {
    Tvalues: [
      -0.06405689286260563, 0.06405689286260563, -0.1911188674736163, 0.1911188674736163,
      -0.3150426796961634, 0.3150426796961634, -0.4337935076260451, 0.4337935076260451,
      -0.5454214713888396, 0.5454214713888396, -0.6480936519369755, 0.6480936519369755,
      -0.7401241915785544, 0.7401241915785544, -0.820001985973903, 0.820001985973903,
      -0.8864155270044011, 0.8864155270044011, -0.9382745520027328, 0.9382745520027328,
      -0.9747285559713095, 0.9747285559713095, -0.9951872199970213, 0.9951872199970213,
    ],
    Cvalues: [
      0.12793819534675216, 0.12793819534675216, 0.1258374563468283, 0.1258374563468283,
      0.12167047292780339, 0.12167047292780339, 0.1155056680537256, 0.1155056680537256,
      0.10744427011596563, 0.10744427011596563, 0.09761865210411388, 0.09761865210411388,
      0.08619016153195327, 0.08619016153195327, 0.0733464814110803, 0.0733464814110803,
      0.05929858491543678, 0.05929858491543678, 0.04427743881741981, 0.04427743881741981,
      0.028531388628933663, 0.028531388628933663, 0.0123412297999872, 0.0123412297999872,
    ],
    arcfn: function (r, e) {
      const n = e(r)
      let i = n.x * n.x + n.y * n.y
      return typeof n.z < 'u' && (i += n.z * n.z), st(i)
    },
    compute: function (r, e, n) {
      if (r === 0) return (e[0].t = 0), e[0]
      const i = e.length - 1
      if (r === 1) return (e[i].t = 1), e[i]
      const s = 1 - r
      let o = e
      if (i === 0) return (e[0].t = r), e[0]
      if (i === 1) {
        const l = {
          x: s * o[0].x + r * o[1].x,
          y: s * o[0].y + r * o[1].y,
          t: r,
        }
        return n && (l.z = s * o[0].z + r * o[1].z), l
      }
      if (i < 4) {
        let l = s * s,
          c = r * r,
          u,
          m,
          d,
          f = 0
        i === 2
          ? ((o = [o[0], o[1], o[2], jn]), (u = l), (m = s * r * 2), (d = c))
          : i === 3 && ((u = l * s), (m = l * r * 3), (d = s * c * 3), (f = r * c))
        const h = {
          x: u * o[0].x + m * o[1].x + d * o[2].x + f * o[3].x,
          y: u * o[0].y + m * o[1].y + d * o[2].y + f * o[3].y,
          t: r,
        }
        return n && (h.z = u * o[0].z + m * o[1].z + d * o[2].z + f * o[3].z), h
      }
      const a = JSON.parse(JSON.stringify(e))
      for (; a.length > 1; ) {
        for (let l = 0; l < a.length - 1; l++)
          (a[l] = {
            x: a[l].x + (a[l + 1].x - a[l].x) * r,
            y: a[l].y + (a[l + 1].y - a[l].y) * r,
          }),
            typeof a[l].z < 'u' && (a[l] = a[l].z + (a[l + 1].z - a[l].z) * r)
        a.splice(a.length - 1, 1)
      }
      return (a[0].t = r), a[0]
    },
    computeWithRatios: function (r, e, n, i) {
      const s = 1 - r,
        o = n,
        a = e
      let l = o[0],
        c = o[1],
        u = o[2],
        m = o[3],
        d
      if (((l *= s), (c *= r), a.length === 2))
        return (
          (d = l + c),
          {
            x: (l * a[0].x + c * a[1].x) / d,
            y: (l * a[0].y + c * a[1].y) / d,
            z: i ? (l * a[0].z + c * a[1].z) / d : false,
            t: r,
          }
        )
      if (((l *= s), (c *= 2 * s), (u *= r * r), a.length === 3))
        return (
          (d = l + c + u),
          {
            x: (l * a[0].x + c * a[1].x + u * a[2].x) / d,
            y: (l * a[0].y + c * a[1].y + u * a[2].y) / d,
            z: i ? (l * a[0].z + c * a[1].z + u * a[2].z) / d : false,
            t: r,
          }
        )
      if (((l *= s), (c *= 1.5 * s), (u *= 3 * s), (m *= r * r * r), a.length === 4))
        return (
          (d = l + c + u + m),
          {
            x: (l * a[0].x + c * a[1].x + u * a[2].x + m * a[3].x) / d,
            y: (l * a[0].y + c * a[1].y + u * a[2].y + m * a[3].y) / d,
            z: i ? (l * a[0].z + c * a[1].z + u * a[2].z + m * a[3].z) / d : false,
            t: r,
          }
        )
    },
    derive: function (r, e) {
      const n = []
      for (let i = r, s = i.length, o = s - 1; s > 1; s--, o--) {
        const a = []
        for (let l = 0, c; l < o; l++)
          (c = {
            x: o * (i[l + 1].x - i[l].x),
            y: o * (i[l + 1].y - i[l].y),
          }),
            e && (c.z = o * (i[l + 1].z - i[l].z)),
            a.push(c)
        n.push(a), (i = a)
      }
      return n
    },
    between: function (r, e, n) {
      return (e <= r && r <= n) || p.approximately(r, e) || p.approximately(r, n)
    },
    approximately: function (r, e, n) {
      return xt(r - e) <= (n || Ln)
    },
    length: function (r) {
      const n = p.Tvalues.length
      let i = 0
      for (let s = 0, o; s < n; s++)
        (o = 0.5 * p.Tvalues[s] + 0.5), (i += p.Cvalues[s] * p.arcfn(o, r))
      return 0.5 * i
    },
    map: function (r, e, n, i, s) {
      const o = n - e,
        a = s - i,
        l = r - e,
        c = l / o
      return i + a * c
    },
    lerp: function (r, e, n) {
      const i = {
        x: e.x + r * (n.x - e.x),
        y: e.y + r * (n.y - e.y),
      }
      return e.z && n.z && (i.z = e.z + r * (n.z - e.z)), i
    },
    pointToString: function (r) {
      let e = r.x + '/' + r.y
      return typeof r.z < 'u' && (e += '/' + r.z), e
    },
    pointsToString: function (r) {
      return '[' + r.map(p.pointToString).join(', ') + ']'
    },
    copy: function (r) {
      return JSON.parse(JSON.stringify(r))
    },
    angle: function (r, e, n) {
      const i = e.x - r.x,
        s = e.y - r.y,
        o = n.x - r.x,
        a = n.y - r.y,
        l = i * a - s * o,
        c = i * o + s * a
      return bt(l, c)
    },
    round: function (r, e) {
      const n = '' + r,
        i = n.indexOf('.')
      return parseFloat(n.substring(0, i + 1 + e))
    },
    dist: function (r, e) {
      const n = r.x - e.x,
        i = r.y - e.y
      return st(n * n + i * i)
    },
    closest: function (r, e) {
      let n = H(2, 63),
        i,
        s
      return (
        r.forEach(function (o, a) {
          ;(s = p.dist(e, o)), s < n && ((n = s), (i = a))
        }),
        {
          mdist: n,
          mpos: i,
        }
      )
    },
    abcratio: function (r, e) {
      if (e !== 2 && e !== 3) return false
      if (typeof r > 'u') r = 0.5
      else if (r === 0 || r === 1) return r
      const n = H(r, e) + H(1 - r, e),
        i = n - 1
      return xt(i / n)
    },
    projectionratio: function (r, e) {
      if (e !== 2 && e !== 3) return false
      if (typeof r > 'u') r = 0.5
      else if (r === 0 || r === 1) return r
      const n = H(1 - r, e),
        i = H(r, e) + n
      return n / i
    },
    lli8: function (r, e, n, i, s, o, a, l) {
      const c = (r * i - e * n) * (s - a) - (r - n) * (s * l - o * a),
        u = (r * i - e * n) * (o - l) - (e - i) * (s * l - o * a),
        m = (r - n) * (o - l) - (e - i) * (s - a)
      return m == 0
        ? false
        : {
            x: c / m,
            y: u / m,
          }
    },
    lli4: function (r, e, n, i) {
      const s = r.x,
        o = r.y,
        a = e.x,
        l = e.y,
        c = n.x,
        u = n.y,
        m = i.x,
        d = i.y
      return p.lli8(s, o, a, l, c, u, m, d)
    },
    lli: function (r, e) {
      return p.lli4(r, r.c, e, e.c)
    },
    findbbox: function (r) {
      let e = Ht,
        n = Ht,
        i = Yt,
        s = Yt
      return (
        r.forEach(function (o) {
          const a = o.bbox()
          e > a.x.min && (e = a.x.min),
            n > a.y.min && (n = a.y.min),
            i < a.x.max && (i = a.x.max),
            s < a.y.max && (s = a.y.max)
        }),
        {
          x: {
            min: e,
            mid: (e + i) / 2,
            max: i,
            size: i - e,
          },
          y: {
            min: n,
            mid: (n + s) / 2,
            max: s,
            size: s - n,
          },
        }
      )
    },
    shapeintersections: function (r, e, n, i, s) {
      if (!p.bboxoverlap(e, i)) return []
      const o = [],
        a = [r.startcap, r.forward, r.back, r.endcap],
        l = [n.startcap, n.forward, n.back, n.endcap]
      return (
        a.forEach(function (c) {
          c.virtual ||
            l.forEach(function (u) {
              if (u.virtual) return
              const m = c.intersects(u, s)
              m.length > 0 && ((m.c1 = c), (m.c2 = u), (m.s1 = r), (m.s2 = n), o.push(m))
            })
        }),
        o
      )
    },
    getminmax: function (r, e, n) {
      if (!n)
        return {
          min: 0,
          max: 0,
        }
      let i = Ht,
        s = Yt,
        o,
        a
      n.indexOf(0) === -1 && (n = [0].concat(n)), n.indexOf(1) === -1 && n.push(1)
      for (let l = 0, c = n.length; l < c; l++)
        (o = n[l]), (a = r.get(o)), a[e] < i && (i = a[e]), a[e] > s && (s = a[e])
      return {
        min: i,
        mid: (i + s) / 2,
        max: s,
        size: s - i,
      }
    },
    align: function (r, e) {
      const n = e.p1.x,
        i = e.p1.y,
        s = -bt(e.p2.y - i, e.p2.x - n),
        o = function (a) {
          return {
            x: (a.x - n) * tt(s) - (a.y - i) * ft(s),
            y: (a.x - n) * ft(s) + (a.y - i) * tt(s),
          }
        }
      return r.map(o)
    },
    roots: function (r, e) {
      e = e || {
        p1: {
          x: 0,
          y: 0,
        },
        p2: {
          x: 1,
          y: 0,
        },
      }
      const n = r.length - 1,
        i = p.align(r, e),
        s = function (k) {
          return 0 <= k && k <= 1
        }
      if (n === 2) {
        const k = i[0].y,
          z = i[1].y,
          A = i[2].y,
          D = k - 2 * z + A
        if (D !== 0) {
          const F = -st(z * z - k * A),
            E = -k + z,
            W = -(F + E) / D,
            dt = -(-F + E) / D
          return [W, dt].filter(s)
        } else if (z !== A && D === 0) return [(2 * z - A) / (2 * z - 2 * A)].filter(s)
        return []
      }
      const o = i[0].y,
        a = i[1].y,
        l = i[2].y,
        c = i[3].y
      let u = -o + 3 * a - 3 * l + c,
        m = 3 * o - 6 * a + 3 * l,
        d = -3 * o + 3 * a,
        f = o
      if (p.approximately(u, 0)) {
        if (p.approximately(m, 0)) return p.approximately(d, 0) ? [] : [-f / d].filter(s)
        const k = st(d * d - 4 * m * f),
          z = 2 * m
        return [(k - d) / z, (-d - k) / z].filter(s)
      }
      ;(m /= u), (d /= u), (f /= u)
      const h = (3 * d - m * m) / 3,
        y = h / 3,
        v = (2 * m * m * m - 9 * m * d + 27 * f) / 27,
        _ = v / 2,
        w = _ * _ + y * y * y
      let N, b, C, g, R
      if (w < 0) {
        const k = -h / 3,
          z = k * k * k,
          A = st(z),
          D = -v / (2 * A),
          F = D < -1 ? -1 : D > 1 ? 1 : D,
          E = Gn(F),
          W = kt(A),
          dt = 2 * W
        return (
          (C = dt * tt(E / 3) - m / 3),
          (g = dt * tt((E + Bt) / 3) - m / 3),
          (R = dt * tt((E + 2 * Bt) / 3) - m / 3),
          [C, g, R].filter(s)
        )
      } else {
        if (w === 0)
          return (
            (N = _ < 0 ? kt(-_) : -kt(_)), (C = 2 * N - m / 3), (g = -N - m / 3), [C, g].filter(s)
          )
        {
          const k = st(w)
          return (N = kt(-_ + k)), (b = kt(_ + k)), [N - b - m / 3].filter(s)
        }
      }
    },
    droots: function (r) {
      if (r.length === 3) {
        const e = r[0],
          n = r[1],
          i = r[2],
          s = e - 2 * n + i
        if (s !== 0) {
          const o = -st(n * n - e * i),
            a = -e + n,
            l = -(o + a) / s,
            c = -(-o + a) / s
          return [l, c]
        } else if (n !== i && s === 0) return [(2 * n - i) / (2 * (n - i))]
        return []
      }
      if (r.length === 2) {
        const e = r[0],
          n = r[1]
        return e !== n ? [e / (e - n)] : []
      }
      return []
    },
    curvature: function (r, e, n, i, s) {
      let o,
        a,
        l,
        c,
        u = 0,
        m = 0
      const d = p.compute(r, e),
        f = p.compute(r, n),
        h = d.x * d.x + d.y * d.y
      if (
        (i
          ? ((o = st(
              H(d.y * f.z - f.y * d.z, 2) +
                H(d.z * f.x - f.z * d.x, 2) +
                H(d.x * f.y - f.x * d.y, 2),
            )),
            (a = H(h + d.z * d.z, 3 / 2)))
          : ((o = d.x * f.y - d.y * f.x), (a = H(h, 3 / 2))),
        o === 0 || a === 0)
      )
        return {
          k: 0,
          r: 0,
        }
      if (((u = o / a), (m = a / o), !s)) {
        const y = p.curvature(r - 0.001, e, n, i, true).k,
          v = p.curvature(r + 0.001, e, n, i, true).k
        ;(c = (v - u + (u - y)) / 2), (l = (xt(v - u) + xt(u - y)) / 2)
      }
      return {
        k: u,
        r: m,
        dk: c,
        adk: l,
      }
    },
    inflections: function (r) {
      if (r.length < 4) return []
      const e = p.align(r, {
          p1: r[0],
          p2: r.slice(-1)[0],
        }),
        n = e[2].x * e[1].y,
        i = e[3].x * e[1].y,
        s = e[1].x * e[2].y,
        o = e[3].x * e[2].y,
        a = 18 * (-3 * n + 2 * i + 3 * s - o),
        l = 18 * (3 * n - i - 3 * s),
        c = 18 * (s - n)
      if (p.approximately(a, 0)) {
        if (!p.approximately(l, 0)) {
          let f = -c / l
          if (0 <= f && f <= 1) return [f]
        }
        return []
      }
      const u = l * l - 4 * a * c,
        m = Math.sqrt(u),
        d = 2 * a
      return p.approximately(d, 0)
        ? []
        : [(m - l) / d, -(l + m) / d].filter(function (f) {
            return 0 <= f && f <= 1
          })
    },
    bboxoverlap: function (r, e) {
      const n = ['x', 'y'],
        i = n.length
      for (let s = 0, o, a, l, c; s < i; s++)
        if (
          ((o = n[s]),
          (a = r[o].mid),
          (l = e[o].mid),
          (c = (r[o].size + e[o].size) / 2),
          xt(a - l) >= c)
        )
          return false
      return true
    },
    expandbox: function (r, e) {
      e.x.min < r.x.min && (r.x.min = e.x.min),
        e.y.min < r.y.min && (r.y.min = e.y.min),
        e.z && e.z.min < r.z.min && (r.z.min = e.z.min),
        e.x.max > r.x.max && (r.x.max = e.x.max),
        e.y.max > r.y.max && (r.y.max = e.y.max),
        e.z && e.z.max > r.z.max && (r.z.max = e.z.max),
        (r.x.mid = (r.x.min + r.x.max) / 2),
        (r.y.mid = (r.y.min + r.y.max) / 2),
        r.z && (r.z.mid = (r.z.min + r.z.max) / 2),
        (r.x.size = r.x.max - r.x.min),
        (r.y.size = r.y.max - r.y.min),
        r.z && (r.z.size = r.z.max - r.z.min)
    },
    pairiteration: function (r, e, n) {
      const i = r.bbox(),
        s = e.bbox(),
        o = 1e5,
        a = n || 0.5
      if (i.x.size + i.y.size < a && s.x.size + s.y.size < a)
        return [(((o * (r._t1 + r._t2)) / 2) | 0) / o + '/' + (((o * (e._t1 + e._t2)) / 2) | 0) / o]
      let l = r.split(0.5),
        c = e.split(0.5),
        u = [
          {
            left: l.left,
            right: c.left,
          },
          {
            left: l.left,
            right: c.right,
          },
          {
            left: l.right,
            right: c.right,
          },
          {
            left: l.right,
            right: c.left,
          },
        ]
      u = u.filter(function (d) {
        return p.bboxoverlap(d.left.bbox(), d.right.bbox())
      })
      let m = []
      return (
        u.length === 0 ||
          (u.forEach(function (d) {
            m = m.concat(p.pairiteration(d.left, d.right, a))
          }),
          (m = m.filter(function (d, f) {
            return m.indexOf(d) === f
          }))),
        m
      )
    },
    getccenter: function (r, e, n) {
      const i = e.x - r.x,
        s = e.y - r.y,
        o = n.x - e.x,
        a = n.y - e.y,
        l = i * tt(at) - s * ft(at),
        c = i * ft(at) + s * tt(at),
        u = o * tt(at) - a * ft(at),
        m = o * ft(at) + a * tt(at),
        d = (r.x + e.x) / 2,
        f = (r.y + e.y) / 2,
        h = (e.x + n.x) / 2,
        y = (e.y + n.y) / 2,
        v = d + l,
        _ = f + c,
        w = h + u,
        N = y + m,
        b = p.lli8(d, f, v, _, h, y, w, N),
        C = p.dist(b, r)
      let g = bt(r.y - b.y, r.x - b.x),
        R = bt(e.y - b.y, e.x - b.x),
        k = bt(n.y - b.y, n.x - b.x),
        z
      return (
        g < k
          ? ((g > R || R > k) && (g += Bt), g > k && ((z = k), (k = g), (g = z)))
          : k < R && R < g
            ? ((z = k), (k = g), (g = z))
            : (k += Bt),
        (b.s = g),
        (b.e = k),
        (b.r = C),
        b
      )
    },
    numberSort: function (r, e) {
      return r - e
    },
  }
class Ft {
  constructor(e) {
    ;(this.curves = []),
      (this._3d = false),
      e && ((this.curves = e), (this._3d = this.curves[0]._3d))
  }
  valueOf() {
    return this.toString()
  }
  toString() {
    return (
      '[' +
      this.curves
        .map(function (e) {
          return p.pointsToString(e.points)
        })
        .join(', ') +
      ']'
    )
  }
  addCurve(e) {
    this.curves.push(e), (this._3d = this._3d || e._3d)
  }
  length() {
    return this.curves
      .map(function (e) {
        return e.length()
      })
      .reduce(function (e, n) {
        return e + n
      })
  }
  curve(e) {
    return this.curves[e]
  }
  bbox() {
    const e = this.curves
    for (var n = e[0].bbox(), i = 1; i < e.length; i++) p.expandbox(n, e[i].bbox())
    return n
  }
  offset(e) {
    const n = []
    return (
      this.curves.forEach(function (i) {
        n.push(...i.offset(e))
      }),
      new Ft(n)
    )
  }
}
const { abs: _t, min: ce, max: ue, cos: qn, sin: Vn, acos: Un, sqrt: St } = Math,
  Wn = Math.PI
class B {
  constructor(e) {
    let n = e && e.forEach ? e : Array.from(arguments).slice(),
      i = false
    if (typeof n[0] == 'object') {
      i = n.length
      const f = []
      n.forEach(function (h) {
        ;['x', 'y', 'z'].forEach(function (y) {
          typeof h[y] < 'u' && f.push(h[y])
        })
      }),
        (n = f)
    }
    let s = false
    const o = n.length
    if (i) {
      if (i > 4) {
        if (arguments.length !== 1)
          throw new Error('Only new Bezier(point[]) is accepted for 4th and higher order curves')
        s = true
      }
    } else if (o !== 6 && o !== 8 && o !== 9 && o !== 12 && arguments.length !== 1)
      throw new Error('Only new Bezier(point[]) is accepted for 4th and higher order curves')
    const a = (this._3d = (!s && (o === 9 || o === 12)) || (e && e[0] && typeof e[0].z < 'u')),
      l = (this.points = [])
    for (let f = 0, h = a ? 3 : 2; f < o; f += h) {
      var c = {
        x: n[f],
        y: n[f + 1],
      }
      a && (c.z = n[f + 2]), l.push(c)
    }
    const u = (this.order = l.length - 1),
      m = (this.dims = ['x', 'y'])
    a && m.push('z'), (this.dimlen = m.length)
    const d = p.align(l, {
      p1: l[0],
      p2: l[u],
    })
    ;(this._linear = !d.some((f) => _t(f.y) > 1e-4)),
      (this._lut = []),
      (this._t1 = 0),
      (this._t2 = 1),
      this.update()
  }
  static quadraticFromPoints(e, n, i, s) {
    if ((typeof s > 'u' && (s = 0.5), s === 0)) return new B(n, n, i)
    if (s === 1) return new B(e, n, n)
    const o = B.getABC(2, e, n, i, s)
    return new B(e, o.A, i)
  }
  static cubicFromPoints(e, n, i, s, o) {
    typeof s > 'u' && (s = 0.5)
    const a = B.getABC(3, e, n, i, s)
    typeof o > 'u' && (o = p.dist(n, a.C))
    const l = (o * (1 - s)) / s,
      c = p.dist(e, i),
      u = (i.x - e.x) / c,
      m = (i.y - e.y) / c,
      d = o * u,
      f = o * m,
      h = l * u,
      y = l * m,
      v = {
        x: n.x - d,
        y: n.y - f,
      },
      _ = {
        x: n.x + h,
        y: n.y + y,
      },
      w = a.A,
      N = {
        x: w.x + (v.x - w.x) / (1 - s),
        y: w.y + (v.y - w.y) / (1 - s),
      },
      b = {
        x: w.x + (_.x - w.x) / s,
        y: w.y + (_.y - w.y) / s,
      },
      C = {
        x: e.x + (N.x - e.x) / s,
        y: e.y + (N.y - e.y) / s,
      },
      g = {
        x: i.x + (b.x - i.x) / (1 - s),
        y: i.y + (b.y - i.y) / (1 - s),
      }
    return new B(e, C, g, i)
  }
  static getUtils() {
    return p
  }
  getUtils() {
    return B.getUtils()
  }
  static get PolyBezier() {
    return Ft
  }
  valueOf() {
    return this.toString()
  }
  toString() {
    return p.pointsToString(this.points)
  }
  toSVG() {
    if (this._3d) return false
    const e = this.points,
      n = e[0].x,
      i = e[0].y,
      s = ['M', n, i, this.order === 2 ? 'Q' : 'C']
    for (let o = 1, a = e.length; o < a; o++) s.push(e[o].x), s.push(e[o].y)
    return s.join(' ')
  }
  setRatios(e) {
    if (e.length !== this.points.length) throw new Error('incorrect number of ratio values')
    ;(this.ratios = e), (this._lut = [])
  }
  verify() {
    const e = this.coordDigest()
    e !== this._print && ((this._print = e), this.update())
  }
  coordDigest() {
    return this.points
      .map(function (e, n) {
        return '' + n + e.x + e.y + (e.z ? e.z : 0)
      })
      .join('')
  }
  update() {
    ;(this._lut = []), (this.dpoints = p.derive(this.points, this._3d)), this.computedirection()
  }
  computedirection() {
    const e = this.points,
      n = p.angle(e[0], e[this.order], e[1])
    this.clockwise = n > 0
  }
  length() {
    return p.length(this.derivative.bind(this))
  }
  static getABC(e = 2, n, i, s, o = 0.5) {
    const a = p.projectionratio(o, e),
      l = 1 - a,
      c = {
        x: a * n.x + l * s.x,
        y: a * n.y + l * s.y,
      },
      u = p.abcratio(o, e)
    return {
      A: {
        x: i.x + (i.x - c.x) / u,
        y: i.y + (i.y - c.y) / u,
      },
      B: i,
      C: c,
      S: n,
      E: s,
    }
  }
  getABC(e, n) {
    n = n || this.get(e)
    let i = this.points[0],
      s = this.points[this.order]
    return B.getABC(this.order, i, n, s, e)
  }
  getLUT(e) {
    if ((this.verify(), (e = e || 100), this._lut.length === e)) return this._lut
    ;(this._lut = []), e--
    for (let n = 0, i, s; n < e; n++)
      (s = n / (e - 1)), (i = this.compute(s)), (i.t = s), this._lut.push(i)
    return this._lut
  }
  on(e, n) {
    n = n || 5
    const i = this.getLUT(),
      s = []
    for (let o = 0, a, l = 0; o < i.length; o++)
      (a = i[o]), p.dist(a, e) < n && (s.push(a), (l += o / i.length))
    return s.length ? (t /= s.length) : false
  }
  project(e) {
    const n = this.getLUT(),
      i = n.length - 1,
      s = p.closest(n, e),
      o = s.mpos,
      a = (o - 1) / i,
      l = (o + 1) / i,
      c = 0.1 / i
    let u = s.mdist,
      m = a,
      d = m,
      f
    u += 1
    for (let h; m < l + c; m += c)
      (f = this.compute(m)), (h = p.dist(e, f)), h < u && ((u = h), (d = m))
    return (d = d < 0 ? 0 : d > 1 ? 1 : d), (f = this.compute(d)), (f.t = d), (f.d = u), f
  }
  get(e) {
    return this.compute(e)
  }
  point(e) {
    return this.points[e]
  }
  compute(e) {
    return this.ratios
      ? p.computeWithRatios(e, this.points, this.ratios, this._3d)
      : p.compute(e, this.points, this._3d, this.ratios)
  }
  raise() {
    const e = this.points,
      n = [e[0]],
      i = e.length
    for (let s = 1, o, a; s < i; s++)
      (o = e[s]),
        (a = e[s - 1]),
        (n[s] = {
          x: ((i - s) / i) * o.x + (s / i) * a.x,
          y: ((i - s) / i) * o.y + (s / i) * a.y,
        })
    return (n[i] = e[i - 1]), new B(n)
  }
  derivative(e) {
    return p.compute(e, this.dpoints[0], this._3d)
  }
  dderivative(e) {
    return p.compute(e, this.dpoints[1], this._3d)
  }
  align() {
    let e = this.points
    return new B(
      p.align(e, {
        p1: e[0],
        p2: e[e.length - 1],
      }),
    )
  }
  curvature(e) {
    return p.curvature(e, this.dpoints[0], this.dpoints[1], this._3d)
  }
  inflections() {
    return p.inflections(this.points)
  }
  normal(e) {
    return this._3d ? this.__normal3(e) : this.__normal2(e)
  }
  __normal2(e) {
    const n = this.derivative(e),
      i = St(n.x * n.x + n.y * n.y)
    return {
      x: -n.y / i,
      y: n.x / i,
    }
  }
  __normal3(e) {
    const n = this.derivative(e),
      i = this.derivative(e + 0.01),
      s = St(n.x * n.x + n.y * n.y + n.z * n.z),
      o = St(i.x * i.x + i.y * i.y + i.z * i.z)
    ;(n.x /= s), (n.y /= s), (n.z /= s), (i.x /= o), (i.y /= o), (i.z /= o)
    const a = {
        x: i.y * n.z - i.z * n.y,
        y: i.z * n.x - i.x * n.z,
        z: i.x * n.y - i.y * n.x,
      },
      l = St(a.x * a.x + a.y * a.y + a.z * a.z)
    ;(a.x /= l), (a.y /= l), (a.z /= l)
    const c = [
      a.x * a.x,
      a.x * a.y - a.z,
      a.x * a.z + a.y,
      a.x * a.y + a.z,
      a.y * a.y,
      a.y * a.z - a.x,
      a.x * a.z - a.y,
      a.y * a.z + a.x,
      a.z * a.z,
    ]
    return {
      x: c[0] * n.x + c[1] * n.y + c[2] * n.z,
      y: c[3] * n.x + c[4] * n.y + c[5] * n.z,
      z: c[6] * n.x + c[7] * n.y + c[8] * n.z,
    }
  }
  hull(e) {
    let n = this.points,
      i = [],
      s = [],
      o = 0
    for (
      s[o++] = n[0], s[o++] = n[1], s[o++] = n[2], this.order === 3 && (s[o++] = n[3]);
      n.length > 1;

    ) {
      i = []
      for (let a = 0, l, c = n.length - 1; a < c; a++)
        (l = p.lerp(e, n[a], n[a + 1])), (s[o++] = l), i.push(l)
      n = i
    }
    return s
  }
  split(e, n) {
    if (e === 0 && n) return this.split(n).left
    if (n === 1) return this.split(e).right
    const i = this.hull(e),
      s = {
        left: this.order === 2 ? new B([i[0], i[3], i[5]]) : new B([i[0], i[4], i[7], i[9]]),
        right: this.order === 2 ? new B([i[5], i[4], i[2]]) : new B([i[9], i[8], i[6], i[3]]),
        span: i,
      }
    return (
      (s.left._t1 = p.map(0, 0, 1, this._t1, this._t2)),
      (s.left._t2 = p.map(e, 0, 1, this._t1, this._t2)),
      (s.right._t1 = p.map(e, 0, 1, this._t1, this._t2)),
      (s.right._t2 = p.map(1, 0, 1, this._t1, this._t2)),
      n ? ((n = p.map(n, e, 1, 0, 1)), s.right.split(n).left) : s
    )
  }
  extrema() {
    const e = {}
    let n = []
    return (
      this.dims.forEach(
        function (i) {
          let s = function (a) {
              return a[i]
            },
            o = this.dpoints[0].map(s)
          ;(e[i] = p.droots(o)),
            this.order === 3 && ((o = this.dpoints[1].map(s)), (e[i] = e[i].concat(p.droots(o)))),
            (e[i] = e[i].filter(function (a) {
              return a >= 0 && a <= 1
            })),
            (n = n.concat(e[i].sort(p.numberSort)))
        }.bind(this),
      ),
      (e.values = n.sort(p.numberSort).filter(function (i, s) {
        return n.indexOf(i) === s
      })),
      e
    )
  }
  bbox() {
    const e = this.extrema(),
      n = {}
    return (
      this.dims.forEach(
        function (i) {
          n[i] = p.getminmax(this, i, e[i])
        }.bind(this),
      ),
      n
    )
  }
  overlaps(e) {
    const n = this.bbox(),
      i = e.bbox()
    return p.bboxoverlap(n, i)
  }
  offset(e, n) {
    if (typeof n < 'u') {
      const i = this.get(e),
        s = this.normal(e),
        o = {
          c: i,
          n: s,
          x: i.x + s.x * n,
          y: i.y + s.y * n,
        }
      return this._3d && (o.z = i.z + s.z * n), o
    }
    if (this._linear) {
      const i = this.normal(0),
        s = this.points.map(function (o) {
          const a = {
            x: o.x + e * i.x,
            y: o.y + e * i.y,
          }
          return o.z && i.z && (a.z = o.z + e * i.z), a
        })
      return [new B(s)]
    }
    return this.reduce().map(function (i) {
      return i._linear ? i.offset(e)[0] : i.scale(e)
    })
  }
  simple() {
    if (this.order === 3) {
      const s = p.angle(this.points[0], this.points[3], this.points[1]),
        o = p.angle(this.points[0], this.points[3], this.points[2])
      if ((s > 0 && o < 0) || (s < 0 && o > 0)) return false
    }
    const e = this.normal(0),
      n = this.normal(1)
    let i = e.x * n.x + e.y * n.y
    return this._3d && (i += e.z * n.z), _t(Un(i)) < Wn / 3
  }
  reduce() {
    let e,
      n = 0,
      i = 0,
      s = 0.01,
      o,
      a = [],
      l = [],
      c = this.extrema().values
    for (
      c.indexOf(0) === -1 && (c = [0].concat(c)), c.indexOf(1) === -1 && c.push(1), n = c[0], e = 1;
      e < c.length;
      e++
    )
      (i = c[e]), (o = this.split(n, i)), (o._t1 = n), (o._t2 = i), a.push(o), (n = i)
    return (
      a.forEach(function (u) {
        for (n = 0, i = 0; i <= 1; )
          for (i = n + s; i <= 1 + s; i += s)
            if (((o = u.split(n, i)), !o.simple())) {
              if (((i -= s), _t(n - i) < s)) return []
              ;(o = u.split(n, i)),
                (o._t1 = p.map(n, 0, 1, u._t1, u._t2)),
                (o._t2 = p.map(i, 0, 1, u._t1, u._t2)),
                l.push(o),
                (n = i)
              break
            }
        n < 1 &&
          ((o = u.split(n, 1)), (o._t1 = p.map(n, 0, 1, u._t1, u._t2)), (o._t2 = u._t2), l.push(o))
      }),
      l
    )
  }
  scale(e) {
    const n = this.order
    let i = false
    if ((typeof e == 'function' && (i = e), i && n === 2)) return this.raise().scale(i)
    const s = this.clockwise,
      o = i ? i(0) : e,
      a = i ? i(1) : e,
      l = [this.offset(0, 10), this.offset(1, 10)],
      c = this.points,
      u = [],
      m = p.lli4(l[0], l[0].c, l[1], l[1].c)
    if (!m) throw new Error('cannot scale this curve. Try reducing it first.')
    return (
      [0, 1].forEach(function (d) {
        const f = (u[d * n] = p.copy(c[d * n]))
        ;(f.x += (d ? a : o) * l[d].n.x), (f.y += (d ? a : o) * l[d].n.y)
      }),
      i
        ? ([0, 1].forEach(function (d) {
            if (!(n === 2 && d)) {
              var f = c[d + 1],
                h = {
                  x: f.x - m.x,
                  y: f.y - m.y,
                },
                y = i ? i((d + 1) / n) : e
              i && !s && (y = -y)
              var v = St(h.x * h.x + h.y * h.y)
              ;(h.x /= v),
                (h.y /= v),
                (u[d + 1] = {
                  x: f.x + y * h.x,
                  y: f.y + y * h.y,
                })
            }
          }),
          new B(u))
        : ([0, 1].forEach((d) => {
            if (n === 2 && d) return
            const f = u[d * n],
              h = this.derivative(d),
              y = {
                x: f.x + h.x,
                y: f.y + h.y,
              }
            u[d + 1] = p.lli4(f, y, m, c[d + 1])
          }),
          new B(u))
    )
  }
  outline(e, n, i, s) {
    n = typeof n > 'u' ? e : n
    const o = this.reduce(),
      a = o.length,
      l = []
    let c = [],
      u,
      m = 0,
      d = this.length()
    const f = typeof i < 'u' && typeof s < 'u'
    function h(g, R, k, z, A) {
      return function (D) {
        const F = z / k,
          E = (z + A) / k,
          W = R - g
        return p.map(D, 0, 1, g + F * W, g + E * W)
      }
    }
    o.forEach(function (g) {
      const R = g.length()
      f
        ? (l.push(g.scale(h(e, i, d, m, R))), c.push(g.scale(h(-n, -s, d, m, R))))
        : (l.push(g.scale(e)), c.push(g.scale(-n))),
        (m += R)
    }),
      (c = c
        .map(function (g) {
          return (
            (u = g.points),
            u[3] ? (g.points = [u[3], u[2], u[1], u[0]]) : (g.points = [u[2], u[1], u[0]]),
            g
          )
        })
        .reverse())
    const y = l[0].points[0],
      v = l[a - 1].points[l[a - 1].points.length - 1],
      _ = c[a - 1].points[c[a - 1].points.length - 1],
      w = c[0].points[0],
      N = Gt(_, y),
      b = Gt(v, w),
      C = [N].concat(l).concat([b]).concat(c)
    return C.length, new Ft(C)
  }
  outlineshapes(e, n, i) {
    n = n || e
    const s = this.outline(e, n).curves,
      o = []
    for (let a = 1, l = s.length; a < l / 2; a++) {
      const c = Hn(s[a], s[l - a], i)
      ;(c.startcap.virtual = a > 1), (c.endcap.virtual = a < l / 2 - 1), o.push(c)
    }
    return o
  }
  intersects(e, n) {
    return e
      ? e.p1 && e.p2
        ? this.lineIntersects(e)
        : (e instanceof B && (e = e.reduce()), this.curveintersects(this.reduce(), e, n))
      : this.selfintersects(n)
  }
  lineIntersects(e) {
    const n = ce(e.p1.x, e.p2.x),
      i = ce(e.p1.y, e.p2.y),
      s = ue(e.p1.x, e.p2.x),
      o = ue(e.p1.y, e.p2.y)
    return p.roots(this.points, e).filter((a) => {
      var l = this.get(a)
      return p.between(l.x, n, s) && p.between(l.y, i, o)
    })
  }
  selfintersects(e) {
    const n = this.reduce(),
      i = n.length - 2,
      s = []
    for (let o = 0, a, l, c; o < i; o++)
      (l = n.slice(o, o + 1)),
        (c = n.slice(o + 2)),
        (a = this.curveintersects(l, c, e)),
        s.push(...a)
    return s
  }
  curveintersects(e, n, i) {
    const s = []
    e.forEach(function (a) {
      n.forEach(function (l) {
        a.overlaps(l) &&
          s.push({
            left: a,
            right: l,
          })
      })
    })
    let o = []
    return (
      s.forEach(function (a) {
        const l = p.pairiteration(a.left, a.right, i)
        l.length > 0 && (o = o.concat(l))
      }),
      o
    )
  }
  arcs(e) {
    return (e = e || 0.5), this._iterate(e, [])
  }
  _error(e, n, i, s) {
    const o = (s - i) / 4,
      a = this.get(i + o),
      l = this.get(s - o),
      c = p.dist(e, n),
      u = p.dist(e, a),
      m = p.dist(e, l)
    return _t(u - c) + _t(m - c)
  }
  _iterate(e, n) {
    let i = 0,
      s = 1,
      o
    do {
      ;(o = 0), (s = 1)
      let a = this.get(i),
        l,
        c,
        u,
        m,
        d = false,
        f = false,
        h,
        y = s,
        v = 1
      do
        if (
          ((f = d),
          (m = u),
          (y = (i + s) / 2),
          (l = this.get(y)),
          (c = this.get(s)),
          (u = p.getccenter(a, l, c)),
          (u.interval = {
            start: i,
            end: s,
          }),
          (d = this._error(u, a, i, s) <= e),
          (h = f && !d),
          h || (v = s),
          d)
        ) {
          if (s >= 1) {
            if (((u.interval.end = v = 1), (m = u), s > 1)) {
              let w = {
                x: u.x + u.r * qn(u.e),
                y: u.y + u.r * Vn(u.e),
              }
              u.e += p.angle(
                {
                  x: u.x,
                  y: u.y,
                },
                w,
                this.get(1),
              )
            }
            break
          }
          s = s + (s - i) / 2
        } else s = y
      while (!h && o++ < 100)
      if (o >= 100) break
      ;(m = m || u), n.push(m), (i = v)
    } while (s < 1)
    return n
  }
}
const Gt = (r, e) => {
    const n = r.x,
      i = r.y,
      s = e.x,
      o = e.y,
      a = (s - n) / 3,
      l = (o - i) / 3
    return new B(n, i, n + a, i + l, n + 2 * a, i + 2 * l, s, o)
  },
  Hn = (r, e, n) => {
    const i = e.points.length,
      s = r.points.length,
      o = Gt(e.points[i - 1], r.points[0]),
      a = Gt(r.points[s - 1], e.points[0]),
      l = {
        startcap: o,
        forward: r,
        back: e,
        endcap: a,
        bbox: p.findbbox([o, r, e, a]),
      }
    return (
      (l.intersections = function (c) {
        return p.shapeintersections(l, l.bbox, c, c.bbox, n)
      }),
      l
    )
  }
class Yn {
  constructor({ degrees: e, time: n, handle: i, x: s, y: o, nextCurve: a }) {
    x(this, '_getDegrees', () => this.degrees)
    x(this, '_drawHandlePoint', (e) => {
      const {
          handle: { x: n, y: i },
        } = this,
        s = 5
      ;(e.fillStyle = 'blue'),
        e.fillRect(n - s / 2, i - s / 2, s, s),
        (e.fillStyle = '#fff'),
        e.fillRect(n - s / 4, i - s / 4, s / 2, s / 2)
    })
    x(this, '_getQuadraticCurve', () => {
      const { handle: e, x: n, y: i, nextCurve: s } = this
      return [n, i, e.x, e.y, s.x, s.y]
    })
    x(this, '_getQuadraticXY', (e) => {
      const { nextCurve: n } = this
      return new B(...this._getQuadraticCurve(n)).get(e / 100)
    })
    x(this, 'render', (e) => {
      e.save(), e.restore()
    })
    ;(this.degrees = e),
      (this.x = s),
      (this.y = o),
      (this.nextCurve = a),
      (this.time = n),
      (this.handle = i)
  }
}
const de = [
    0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14,
    31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26,
  ],
  Xn = ({ ballRotation: r, number: e }) => {
    const n = de.findIndex((o) => o === e),
      i = de.length
    return (n / i) * 360 - r
  },
  rt = (r) => Math.round(Math.random() * r) - r / 2,
  Qn = ({ collisions: r, sizes: e }) => {
    const {
      mid: { x: n, y: i },
      wheelRadius: wheelRadius,
      innerWheelRadius: innerWheelRadius,
      ballRadius: ballRadius,
      circleInnerPadding: circleInnerPadding,
    } = e
    let c = 50 + Math.random() * 70
    const u = r.map((m, d) => {
      const f = r[d + 1],
        h = f !== void 0,
        y = h && Math.cos(Math.radians((f.degrees + m.degrees) / 2)),
        v = h && Math.sin(Math.radians((f.degrees + m.degrees) / 2)),
        _ = h && {
          x: n + y * (innerWheelRadius + ballRadius + c),
          y: i + v * (innerWheelRadius + ballRadius + c),
        },
        w = Math.cos(Math.radians(m.degrees)),
        N = Math.sin(Math.radians(m.degrees)),
        b = {
          x:
            n +
            w * (d !== 0 ? innerWheelRadius + ballRadius : wheelRadius - circleInnerPadding / 2),
          y:
            i +
            N * (d !== 0 ? innerWheelRadius + ballRadius : wheelRadius - circleInnerPadding / 2),
        }
      return (
        (c /= 1 + Math.random() * 0.5),
        {
          ...b,
          degrees: m.degrees,
          time: m.time,
          handle: _,
        }
      )
    })
    return u.map((m, d) => {
      const f = u[d + 1],
        h = f !== void 0
      return new Yn({
        ...m,
        nextCurve: h && {
          x: f.x,
          y: f.y,
        },
      })
    })
  }

//trigger animation
class BallClass {
  constructor({ ctx: e, radius: n, wheelSizes: i, startY: s, ballStartDropCallback: o }) {
    x(this, '_changePlayAnimation', (e) => {
      this.playAnimation !== e && ((this.playAnimation = e), e && this.ballStartDropCallback())
    })
    x(this, '_changeAnimationCoordinates', (e) => {
      this.animationCoordinates = e
    })
    x(this, 'render', (e) => {
      const {
        wheelSizes: n,
        radius: i,
        ctx: s,
        startY: o,
        playAnimation: a,
        animationCoordinates: l,
      } = this
      s.save(),
        (s.fillStyle = '#fff'),
        a
          ? (s.beginPath(), s.arc(l.x, l.y, i, 0, Math.PI * 2), s.fill(), s.closePath())
          : (s.translate(n.x, n.y),
            s.rotate(Math.radians(e)),
            s.translate(-n.x, -n.y),
            s.beginPath(),
            s.arc(n.x, o, i, 0, Math.PI * 2),
            s.fill(),
            s.closePath()),
        s.restore()
    })
    ;(this.radius = n),
      (this.ctx = e),
      (this.wheelSizes = i),
      (this.startY = s),
      (this.playAnimation = false),
      (this.ballStartDropCallback = o),
      (this.animationCoordinates = {
        x: 0,
        y: 0,
      })
  }
}
Math.radians = (r) => (r * Math.PI) / 180
const ot = {
  wheel: {
    default: 0,
    accelerated: 0,
  },
  ball: {
    default: 7,
  },
}
class Kn {
  constructor({ ctx: e, width: n, height: i, ballStartDropCallback: s }) {
    x(this, 'ctx')
    x(this, 'width')
    x(this, 'instantResult')
    x(this, 'height')
    x(this, 'stopRotationAt')
    x(this, 'circleInnerPadding')
    x(this, 'time')
    x(this, 'result')
    x(this, 'hasBall')
    x(this, 'restOfRotation')
    x(this, 'ballRadius')
    x(this, 'startAnimationAtDegrees')
    x(this, 'totalRotation')
    x(this, 'hasDropped')
    x(this, 'wheelSizes')
    x(this, 'innerWheelSizes')
    x(this, 'rotations')
    x(this, 'rotationIncreasements')
    x(this, 'curveTimeline')
    x(this, 'curves')
    x(this, 'Ball')
    x(this, 'interval')
    x(this, '_getQuadraticXY')
    x(this, 'dropCallback')
    x(this, 'ballStartDropCallback')
    x(this, '_changeStartAnimationAtDegrees')
    x(this, '_generateCurves')
    x(this, '_rotate', () => {
      const { ctx: e, width: n, height: i, rotationIncreasements: s } = this
      if (
        ((this.rotations.wheel += s.wheel),
        (this.rotations.wheel = this.rotations.wheel - Math.ceil(this.rotations.wheel / 360) * 360),
        e.translate(n / 2, i / 2),
        e.rotate(Math.radians(s.wheel)),
        e.translate(-n / 2, -i / 2),
        typeof this.result == 'number')
      ) {
        const QuadraticXY = this.curves[this.curves.length - 2]._getQuadraticXY(100)
        if (this.instantResult)
          this.Ball._changePlayAnimation(true),
            this.Ball._changeAnimationCoordinates(QuadraticXY),
            this.hasDropped || this.dropCallback()
        else if (this.restOfRotation > 360) {
          const a = this.rotationIncreasements.ball
          ;(this.restOfRotation -= a),
            (this.rotations.ball += a),
            (this.rotations.ball =
              this.rotations.ball - Math.floor(this.rotations.ball / 360) * 360)
        } else {
          const a = this._getCurrentCurveXY(this.time, 2.5),
            l =
              a === void 0 || isNaN(a.x)
                ? this.curves[this.curves.length - 2]._getQuadraticXY(100)
                : a
          this.Ball._changePlayAnimation(true),
            this.Ball._changeAnimationCoordinates(l),
            (this.time += 0.035),
            l.x === QuadraticXY.x &&
              l.y === QuadraticXY.y &&
              !this.hasDropped &&
              this.dropCallback()
        }
      } else
        (this.rotations.ball += s.ball),
          (this.rotations.ball = this.rotations.ball - Math.floor(this.rotations.ball / 360) * 360)
    })
    x(this, '_clean', () => {
      const { ctx: e, width: n, height: i } = this
      e.clearRect(0, 0, n, i)
    })
    x(this, '_changeResult', (e, n) => {
      if (((this.result = e), (this.instantResult = n), typeof e == 'number')) {
        this.time = 0
        const i = Xn({
            ballRotation: 0,
            number: e,
          }),
          s = 720 + i - this.rotations.ball
        ;(this.totalRotation = s),
          (this.restOfRotation = s),
          (this.hasDropped = false),
          this._changeStartAnimationAtDegrees(i)
        const { curves: o, curveTimeline: a } = this._generateCurves()
        ;(this.curves = o), (this.curveTimeline = a)
      } else this.Ball._changePlayAnimation(false)
    })
    x(this, '_addDropCallBack', (e) => {
      this.dropCallback = () => {
        ;(this.hasDropped = true), e()
      }
    })
    x(this, '_drawBall', () => {
      const { rotations: e, hasBall: n, result: i } = this
      ;(n || typeof i == 'number') && this.Ball.render(e.ball)
    })
    x(this, '_changeHasBall', (e) => {
      this.hasBall = e
      const n = 1e3 / 60
      if (e) {
        clearInterval(this.interval)
        let i = 0
        const s = 300
        this.interval = setInterval(() => {
          i += n
          const o = i / s
          o < 1
            ? (this.rotationIncreasements.wheel =
                ot.wheel.default + o * (ot.wheel.accelerated - ot.wheel.default))
            : clearInterval(this.interval)
        }, n)
      } else {
        clearInterval(this.interval)
        let i = 0
        const s = 1e3
        this.interval = setInterval(() => {
          i += n
          const o = i / s
          i < s
            ? (this.rotationIncreasements.wheel =
                ot.wheel.default + (1 - o) * (ot.wheel.accelerated - ot.wheel.default))
            : clearInterval(this.interval)
        }, n)
      }
    })
    x(this, '_changeStartAnimationAtDegrees', (e) => {
      this.startAnimationAtDegrees = e - 90
    })
    x(this, '_generateCurves', () => {
      const {
          width: e,
          height: n,
          ballRadius: i,
          wheelSizes: s,
          innerWheelSizes: o,
          startAnimationAtDegrees: a,
          circleInnerPadding: l,
        } = this,
        c = [
          {
            degrees: a,
            time: 0.2,
          },
          {
            degrees: a + 110 + rt(30),
            time: 0.18,
          },
          {
            degrees: a + 170 + rt(20),
            time: 0.16,
          },
          {
            degrees: a + 225 + rt(15),
            time: 0.2,
          },
          {
            degrees: a + 250 + rt(15),
            time: 0.2,
          },
          {
            degrees: a + 280 + rt(15),
            time: 0.2,
          },
          {
            degrees: a + 310 + rt(12),
            time: 0.22,
          },
          {
            degrees: a + 335 + rt(8),
            time: 0.22,
          },
          {
            degrees: a + 350 + rt(7),
            time: 0.22,
          },
          {
            degrees: a + 360,
            time: 0.22,
          },
        ],
        m = {
          mid: {
            x: e / 2,
            y: n / 2,
          },
          innerWheelRadius: o.solidRadius,
          wheelRadius: s.radius,
          ballRadius: i,
          circleInnerPadding: l,
        },
        d = c.map((f, h) => c.slice(0, h + 1).reduce((y, v) => y + v.time, 0))
      return {
        curves: Qn({
          collisions: c,
          sizes: m,
        }),
        curveTimeline: d,
      }
    })
    x(this, '_getCurrentCurveXY', (e, n) => {
      const { curveTimeline: i } = this,
        s = e / n
      for (let o = 0; o < i.length; o += 1) {
        const a = i[o],
          l = o === 0 ? 0 : i[o - 1]
        if (a > s) {
          const c = a - l,
            u = (s - l) / c
          return this.curves[o]._getQuadraticXY(u * 100)
        }
      }
      return 0
    })
    x(this, 'render', () => {
      this._clean(), this._rotate(), this._drawBall()
    })
    ;(this.ctx = e),
      (this.width = n),
      (this.height = i),
      (this.circleInnerPadding = 20),
      (this.time = 0),
      this._changeStartAnimationAtDegrees(0),
      (this.rotations = {
        wheel: 0,
        ball: 0,
      }),
      (this.stopRotationAt = false),
      (this.rotationIncreasements = {
        wheel: ot.wheel.default,
        ball: ot.ball.default,
      }),
      (this.instantResult = false),
      (this.result = false),
      (this.hasBall = false),
      (this.wheelSizes = {
        x: n / 2,
        y: i / 2,
        radius: i / 2,
      }),
      (this.innerWheelSizes = {
        shadowRadius: this.wheelSizes.radius - this.circleInnerPadding - 20,
        solidRadius: this.wheelSizes.radius - this.circleInnerPadding - 40,
      }),
      (this.ballRadius = Math.round(this.circleInnerPadding / 3.5)),
      (this.Ball = new BallClass({
        ctx: e,
        wheelSizes: this.wheelSizes,
        radius: this.ballRadius,
        startY: (this.circleInnerPadding - 2) / 2,
        ballStartDropCallback: s,
      }))
    const { curves: o, curveTimeline: a } = this._generateCurves()
    ;(this.curves = o), (this.curveTimeline = a)
  }
}
var Zn = j('<canvas class="svelte-955sxt"></canvas>')
function ti(r, e) {
  X(e, false)
  const [n, i] = Z(),
    s = () => $(Lt, '$animationsEnabled', n),
    o = I()
  let a = Y(e, 'isSpinning', 8, false),
    l = Y(e, 'spinResult', 8, null),
    c = Y(e, 'instantResult', 8, false),
    u = Y(e, 'ballDropCallback', 8, () => {}),
    m = Y(e, 'ballStartDropCallback', 8, () => {}),
    d = I(a()),
    f = I(l()),
    h = I(void 0),
    y = I(void 0),
    v = 0
  const _ = {}

  //init
  Ae(() => {
    if (S(y)) {
      const C = S(y).getContext('2d'),
        g = 270,
        R = 270,
        { devicePixelRatio: k } = window
      ae(y, (S(y).height = R * k)),
        ae(y, (S(y).width = g * k)),
        C.scale(k, k),
        M(
          h,
          new Kn({
            ctx: C,
            width: g,
            height: R,
            ballStartDropCallback: m(),
          }),
        ),
        w()
    }
  }),
    he(() => {
      cancelAnimationFrame(v)
    })
  const w = () => {
    v = window.requestAnimationFrame(() => {
      w(), S(h) && S(h).render()
    })
  }
  V(
    () => (S(h), wt(a()), S(d), wt(l()), S(f), wt(u()), wt(c())),
    () => {
      S(h) &&
        (a() !== S(d) && (S(h)._changeHasBall(a()), M(d, a())),
        l() !== S(f) &&
          (l() !== null
            ? (S(h)._addDropCallBack(u()), S(h)._changeResult(l(), c()))
            : S(h)._changeResult(false, c()),
          M(f, l())))
    },
  ),
    V(
      () => s(),
      () => {
        M(o, s() ? 9e3 : 0)
      },
    ),
    it(),
    ct()
  var N = Pt(),
    b = J(N)
  We(
    b,
    () => _,
    (C) => {
      var g = Zn()
      He(
        g,
        (R) => M(y, R),
        () => S(y),
      ),
        lt(() => Ct(g, `background-image: url(${ke.wheel}); --duration: ${S(o) ?? ''}ms;`)),
        P(C, g)
    },
  ),
    P(r, N),
    Q(),
    i()
}
const ei = {
    initial: 'idle',
    id: 'betTab',
    states: {
      idle: {},
      fetching: {
        entry: ['spinSoundPlay'],
        invoke: {
          id: 'mutationBet',
          src: 'mutationBet',
          onDone: {
            actions: Mt((r, e) => ({
              type: 'SUCCESS',
              bet: e.data,
            })),
          },
          onError: {
            actions: Mt('ERROR'),
          },
        },
        on: {
          SUCCESS: {
            target: 'spinning',
            actions: ['addBetToContext'],
          },
          ERROR: {
            target: 'idle',
            actions: ['spinSoundStop', 'resetBetState'],
          },
        },
      },
      spinning: {
        entry: ['setGameState'],
        exit: ['finishGame', 'addToLastBets'],
        on: {
          BALL_DROPPED: {
            actions: ['spinSoundStop', 'dropSoundPlay'],
          },
          FINISHED_SPINNING: 'idle',
        },
      },
    },
  },
  ni = tn(ei),
  ii = {
    initial: 'idle',
    id: 'autobetTab',
    states: {
      idle: {},
      betting: {
        states: {
          base: {
            states: {
              idle: {},
              fetching: {
                entry: ['resetBetState', 'spinSoundPlay'],
                invoke: {
                  id: 'mutationBet',
                  src: 'mutationBet',
                  onDone: {
                    actions: Mt((r, e) => ({
                      type: 'SUCCESS',
                      bet: e.data,
                    })),
                  },
                  onError: {
                    actions: Mt('ERROR'),
                  },
                },
                on: {
                  SUCCESS: {
                    target: 'revealing',
                  },
                  ERROR: {
                    target: 'idle',
                    actions: ['spinSoundStop', 'resetBetState'],
                  },
                },
              },
              revealing: {
                entry: ['addBetToContext', 'setGameState'],
                on: {
                  BALL_DROPPED: {
                    actions: ['spinSoundStop', 'dropSoundPlay'],
                  },
                  FINISHED_SPINNING: 'revealed',
                },
              },
              revealed: {
                on: {
                  TO_IDLE: 'idle',
                },
                exit: ['finishGame', 'addToLastBets'],
                invoke: {
                  id: 'revealResultTimeout',
                  src: () => (r) => {
                    setTimeout(
                      () => {
                        r('TO_IDLE')
                      },
                      q(vt) === false ? 900 : 300,
                    )
                  },
                },
              },
            },
          },
          nextBet: {
            states: {
              continue: {},
              stop: {},
            },
          },
        },
      },
    },
  },
  si = en(ii),
  ai = '/_app/immutable/assets/spin.CyU0-M-n.mp3',
  ri = '/_app/immutable/assets/drop.Cmameef7.mp3',
  oi = '/_app/immutable/assets/win.BpDMfFMt.mp3',
  li = '/_app/immutable/assets/lose.CSJf_1E1.mp3',
  Vt = {
    spin: Tt(pt, ai, {
      loop: true,
    }),
    drop: Tt(pt, ri),
    win: Tt(pt, oi),
    lose: Tt(pt, li),
  },
  {
    betHistory: ci,
    blockTriggers: ui,
    blocks: di,
    currentStrategyLabel: mi,
    gamesLeft: fi,
    loadStrategy: hi,
    saveStrategy: pi,
    resetState: Se,
    initDefaultAdvancedStrategies: yi,
    initDefaultStrategies: vi,
    allowedActions: gi,
  } = Xe({}),
  { entry: xi, exit: bi, resetAutobetState: ki } = Qe(Se),
  ee = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        allowedActions: gi,
        betHistory: ci,
        blockTriggers: ui,
        blocks: di,
        currentStrategyLabel: mi,
        entry: xi,
        exit: bi,
        gamesLeft: fi,
        initDefaultAdvancedStrategies: yi,
        initDefaultStrategies: vi,
        loadStrategy: hi,
        resetAutobetState: ki,
        resetState: Se,
        saveStrategy: pi,
      },
      Symbol.toStringTag,
      {
        value: 'Module',
      },
    ),
  ),
  ne = (() => {
    const r = pe([])
    return {
      ...r,
      add: (e) => {
        r.update((n) => [e, ...n].slice(0, 5))
      },
    }
  })(),
  we = ut([nt], ([r]) => ht.isEmpty(r)),
  { xstate: _i } = K,
  Si = ut([_i, we], ([r, e]) => G('autobetTab.autopicking', r) || e),
  ze = ut([qt, xe], ([r, e]) => Pe(r, e)),
  Ne = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        autobetButtonDisabled: Si,
        invalidBetAmount: ze,
        lastBets: ne,
        noChipsPlaced: we,
      },
      Symbol.toStringTag,
      {
        value: 'Module',
      },
    ),
  ),
  { assign: wi } = nn,
  $e = Je({
    initialState: {},
    removeDeduction: (r) => {
      At.finishGame(r)
    },
    setLastBet: (r) => {
      gt.set(r)
    },
    removeActiveBet: () => {},
    general: K,
    autobet: ee,
  }),
  zi = () => {
    const { instantResult: r } = te
    q(r) || Vt.spin.play()
  },
  Ni = () => {
    Vt.spin.stop()
  },
  $i = () => {
    const { instantResult: r } = te
    q(r) || Vt.drop.play()
  },
  {
    addBetToContext: Ci,
    snapshotAutobetInfo: Ti,
    setInitialBettingState: Ri,
    initAutobetDefaultStrategies: Bi,
  } = $e,
  Ai = (...r) => {
    $e.finishGame(() => q(vt) === false)(...r)
  },
  Di = () => {
    wi({
      bet: () => null,
    }),
      gt.set(null)
  },
  Pi = (r) => {
    const e = r.bet
    gt.set(e)
  },
  Ei = (r) => {
    ne.add(r.bet)
  },
  Ii = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        addBetToContext: Ci,
        addToLastBets: Ei,
        dropSoundPlay: $i,
        finishGame: Ai,
        initAutobetDefaultStrategies: Bi,
        resetBetState: Di,
        setGameState: Pi,
        setInitialBettingState: Ri,
        snapshotAutobetInfo: Ti,
        spinSoundPlay: zi,
        spinSoundStop: Ni,
      },
      Symbol.toStringTag,
      {
        value: 'Module',
      },
    ),
  ),
  Mi = {
    kind: 'Document',
    definitions: [
      {
        kind: 'OperationDefinition',
        operation: 'mutation',
        name: {
          kind: 'Name',
          value: 'RouletteBet',
        },
        variableDefinitions: [
          {
            kind: 'VariableDefinition',
            variable: {
              kind: 'Variable',
              name: {
                kind: 'Name',
                value: 'currency',
              },
            },
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'CurrencyEnum',
                },
              },
            },
          },
          {
            kind: 'VariableDefinition',
            variable: {
              kind: 'Variable',
              name: {
                kind: 'Name',
                value: 'colors',
              },
            },
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'RouletteBetColorsInput',
                  },
                },
              },
            },
          },
          {
            kind: 'VariableDefinition',
            variable: {
              kind: 'Variable',
              name: {
                kind: 'Name',
                value: 'numbers',
              },
            },
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'RouletteBetNumbersInput',
                  },
                },
              },
            },
          },
          {
            kind: 'VariableDefinition',
            variable: {
              kind: 'Variable',
              name: {
                kind: 'Name',
                value: 'parities',
              },
            },
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'RouletteBetParitiesInput',
                  },
                },
              },
            },
          },
          {
            kind: 'VariableDefinition',
            variable: {
              kind: 'Variable',
              name: {
                kind: 'Name',
                value: 'ranges',
              },
            },
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'RouletteBetRangesInput',
                  },
                },
              },
            },
          },
          {
            kind: 'VariableDefinition',
            variable: {
              kind: 'Variable',
              name: {
                kind: 'Name',
                value: 'rows',
              },
            },
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: {
                    kind: 'Name',
                    value: 'RouletteBetRowsInput',
                  },
                },
              },
            },
          },
          {
            kind: 'VariableDefinition',
            variable: {
              kind: 'Variable',
              name: {
                kind: 'Name',
                value: 'identifier',
              },
            },
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'String',
                },
              },
            },
          },
        ],
        selectionSet: {
          kind: 'SelectionSet',
          selections: [
            {
              kind: 'Field',
              name: {
                kind: 'Name',
                value: 'rouletteBet',
              },
              arguments: [
                {
                  kind: 'Argument',
                  name: {
                    kind: 'Name',
                    value: 'currency',
                  },
                  value: {
                    kind: 'Variable',
                    name: {
                      kind: 'Name',
                      value: 'currency',
                    },
                  },
                },
                {
                  kind: 'Argument',
                  name: {
                    kind: 'Name',
                    value: 'colors',
                  },
                  value: {
                    kind: 'Variable',
                    name: {
                      kind: 'Name',
                      value: 'colors',
                    },
                  },
                },
                {
                  kind: 'Argument',
                  name: {
                    kind: 'Name',
                    value: 'numbers',
                  },
                  value: {
                    kind: 'Variable',
                    name: {
                      kind: 'Name',
                      value: 'numbers',
                    },
                  },
                },
                {
                  kind: 'Argument',
                  name: {
                    kind: 'Name',
                    value: 'parities',
                  },
                  value: {
                    kind: 'Variable',
                    name: {
                      kind: 'Name',
                      value: 'parities',
                    },
                  },
                },
                {
                  kind: 'Argument',
                  name: {
                    kind: 'Name',
                    value: 'ranges',
                  },
                  value: {
                    kind: 'Variable',
                    name: {
                      kind: 'Name',
                      value: 'ranges',
                    },
                  },
                },
                {
                  kind: 'Argument',
                  name: {
                    kind: 'Name',
                    value: 'rows',
                  },
                  value: {
                    kind: 'Variable',
                    name: {
                      kind: 'Name',
                      value: 'rows',
                    },
                  },
                },
                {
                  kind: 'Argument',
                  name: {
                    kind: 'Name',
                    value: 'identifier',
                  },
                  value: {
                    kind: 'Variable',
                    name: {
                      kind: 'Name',
                      value: 'identifier',
                    },
                  },
                },
              ],
              selectionSet: {
                kind: 'SelectionSet',
                selections: [
                  {
                    kind: 'FragmentSpread',
                    name: {
                      kind: 'Name',
                      value: 'CasinoBet',
                    },
                  },
                  {
                    kind: 'Field',
                    name: {
                      kind: 'Name',
                      value: 'state',
                    },
                    selectionSet: {
                      kind: 'SelectionSet',
                      selections: [
                        {
                          kind: 'FragmentSpread',
                          name: {
                            kind: 'Name',
                            value: 'RouletteStateFragment',
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
      },
      {
        kind: 'FragmentDefinition',
        name: {
          kind: 'Name',
          value: 'RouletteStateFragment',
        },
        typeCondition: {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'CasinoGameRoulette',
          },
        },
        selectionSet: {
          kind: 'SelectionSet',
          selections: [
            {
              kind: 'Field',
              name: {
                kind: 'Name',
                value: 'result',
              },
            },
            {
              kind: 'Field',
              name: {
                kind: 'Name',
                value: 'colors',
              },
              selectionSet: {
                kind: 'SelectionSet',
                selections: [
                  {
                    kind: 'Field',
                    name: {
                      kind: 'Name',
                      value: 'amount',
                    },
                  },
                  {
                    kind: 'Field',
                    name: {
                      kind: 'Name',
                      value: 'value',
                    },
                  },
                ],
              },
            },
            {
              kind: 'Field',
              name: {
                kind: 'Name',
                value: 'numbers',
              },
              selectionSet: {
                kind: 'SelectionSet',
                selections: [
                  {
                    kind: 'Field',
                    name: {
                      kind: 'Name',
                      value: 'amount',
                    },
                  },
                  {
                    kind: 'Field',
                    name: {
                      kind: 'Name',
                      value: 'value',
                    },
                  },
                ],
              },
            },
            {
              kind: 'Field',
              name: {
                kind: 'Name',
                value: 'parities',
              },
              selectionSet: {
                kind: 'SelectionSet',
                selections: [
                  {
                    kind: 'Field',
                    name: {
                      kind: 'Name',
                      value: 'amount',
                    },
                  },
                  {
                    kind: 'Field',
                    name: {
                      kind: 'Name',
                      value: 'value',
                    },
                  },
                ],
              },
            },
            {
              kind: 'Field',
              name: {
                kind: 'Name',
                value: 'ranges',
              },
              selectionSet: {
                kind: 'SelectionSet',
                selections: [
                  {
                    kind: 'Field',
                    name: {
                      kind: 'Name',
                      value: 'amount',
                    },
                  },
                  {
                    kind: 'Field',
                    name: {
                      kind: 'Name',
                      value: 'value',
                    },
                  },
                ],
              },
            },
            {
              kind: 'Field',
              name: {
                kind: 'Name',
                value: 'rows',
              },
              selectionSet: {
                kind: 'SelectionSet',
                selections: [
                  {
                    kind: 'Field',
                    name: {
                      kind: 'Name',
                      value: 'amount',
                    },
                  },
                  {
                    kind: 'Field',
                    name: {
                      kind: 'Name',
                      value: 'value',
                    },
                  },
                ],
              },
            },
          ],
        },
      },
      {
        kind: 'FragmentDefinition',
        name: {
          kind: 'Name',
          value: 'CasinoBet',
        },
        typeCondition: {
          kind: 'NamedType',
          name: {
            kind: 'Name',
            value: 'CasinoBet',
          },
        },
        selectionSet: {
          kind: 'SelectionSet',
          selections: [
            {
              kind: 'Field',
              name: {
                kind: 'Name',
                value: 'id',
              },
            },
            {
              kind: 'Field',
              name: {
                kind: 'Name',
                value: 'active',
              },
            },
            {
              kind: 'Field',
              name: {
                kind: 'Name',
                value: 'payoutMultiplier',
              },
            },
            {
              kind: 'Field',
              name: {
                kind: 'Name',
                value: 'amountMultiplier',
              },
            },
            {
              kind: 'Field',
              name: {
                kind: 'Name',
                value: 'amount',
              },
            },
            {
              kind: 'Field',
              name: {
                kind: 'Name',
                value: 'payout',
              },
            },
            {
              kind: 'Field',
              name: {
                kind: 'Name',
                value: 'updatedAt',
              },
            },
            {
              kind: 'Field',
              name: {
                kind: 'Name',
                value: 'currency',
              },
            },
            {
              kind: 'Field',
              name: {
                kind: 'Name',
                value: 'game',
              },
            },
            {
              kind: 'Field',
              name: {
                kind: 'Name',
                value: 'user',
              },
              selectionSet: {
                kind: 'SelectionSet',
                selections: [
                  {
                    kind: 'Field',
                    name: {
                      kind: 'Name',
                      value: 'id',
                    },
                  },
                  {
                    kind: 'Field',
                    name: {
                      kind: 'Name',
                      value: 'name',
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  },
  Oi = 'roulette',
  Fi = ({ variables: r }) =>
    new Promise((e, n) => {
      async function i() {
        let s
        try {
          ;(await Me(Oi)) ? (s = await zn('roulette/bet', r)) : (s = (await wn(Mi, r)).data),
            s != null && s.rouletteBet
              ? e({
                  ...s.rouletteBet,
                  identifier: r.identifier,
                })
              : n()
        } catch (o) {
          n(o)
        }
      }
      i()
    }),
  Gi = (r, e) => {
    let n
    return (
      r.includes('number') && (n = 'numbers'),
      r.includes('color') && (n = 'colors'),
      r.includes('parity') && (n = 'parities'),
      r.includes('range') && (n = 'ranges'),
      r.includes('row') && (n = 'rows'),
      {
        type: n,
        value: r,
        amount: e,
      }
    )
  },
  Li = () =>
    new Promise((r, e) => {
      async function n() {
        const i = At.create({
          amount: q(vt) ? 0 : q(qt),
          currency: q(Jt),
        })
        try {
          const s = ht.fromPairs(
              ht
                .toPairs(
                  ht.groupBy(
                    ht
                      .toPairs(q(nt))
                      .filter((l) => l[1] !== 0)
                      .map(([l, c]) => Gi(l, c)),
                    'type',
                  ),
                )
                .map(([l, c]) => [l, c.map((u) => ht.omit(u, ['type']))]),
            ),
            o = {
              currency: q(Jt),
              identifier: i,
              ...s,
            },
            a = await Fi({
              variables: o,
            })
          a &&
            (At.optimisticBalanceUpdate({
              identifier: i,
              betAmount: a.amount,
              betPayout: a.payout,
              currency: a.currency,
            }),
            r(a))
        } catch (s) {
          At.rollback(i), e(s)
        }
      }
      n()
    }),
  ji = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        mutationBet: Li,
      },
      Symbol.toStringTag,
      {
        value: 'Module',
      },
    ),
  ),
  qi = (r) => sn(r),
  { mutationBet: Vi, decideOnNextBet: Ui } = Ke({
    services: {
      ...ji,
    },
    moduleName: Kt.roulette,
    general: K,
    autobet: ee,
    handler: qi,
  }),
  Wi = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        decideOnNextBet: Ui,
        mutationBet: Vi,
      },
      Symbol.toStringTag,
      {
        value: 'Module',
      },
    ),
  ),
  Hi = {
    id: 'roulette',
    initial: 'betTab',
    context: {
      bet: null,
      firstBet: null,
    },
    states: {
      betTab: ni,
      autobetTab: si,
      advancedTab: {
        id: 'advancedTab',
        states: {},
      },
    },
  },
  Yi = an(Hi, {
    actions: Ii,
    services: Wi,
  }),
  yt = rn(Yi, {
    deferEvents: true,
    devTools: true,
  }),
  Xi = Ze({
    service: yt,
    gameName: 'roulette',
    resetState: () => {},
    tab: jt,
    xstate: mt,
  }),
  me = () =>
    yt.send({
      type: 'BALL_DROPPED',
    }),
  Qi = () =>
    yt.send({
      type: 'FINISHED_SPINNING',
    })
var Ji = j('<div class="wrap svelte-67f3sd"><div class="content svelte-67f3sd"><!></div></div>')
function Ki(r, e) {
  X(e, false)
  const [n, i] = Z(),
    s = () => $(u, '$isSpinning', n),
    o = () => $(c, '$instantResult', n),
    a = () => $(m, '$spinResult', n),
    l = I(),
    { instantResult: c } = te,
    { isSpinning: u, spinResult: m } = K
  V(
    () => (s(), o(), a(), me),
    () => {
      M(l, {
        isSpinning: s(),
        instantResult: o(),
        spinResult: a(),
        ballDropCallback: Qi,
        ballStartDropCallback: me,
      })
    },
  ),
    it()
  var d = Ji(),
    f = L(d),
    h = L(f)
  ti(
    h,
    $t(() => S(l)),
  ),
    O(f),
    O(d),
    P(r, d),
    Q(),
    i()
}
var Zi = j(
  '<div class="wrap svelte-6mcoxx"><div><span class="roll-up svelte-6mcoxx" data-testid="result"> </span></div></div>',
)
function Ce(r, e) {
  X(e, false)
  const [n, i] = Z(),
    s = () => $(m, '$resultMeta', n),
    o = () => $(Lt, '$animationsEnabled', n),
    a = I(),
    l = I(),
    c = I(),
    u = I(),
    { resultMeta: m } = K
  let d = Y(e, 'variant', 8, 'small')
  V(
    () => s(),
    () => {
      M(a, s().color)
    },
  ),
    V(
      () => s(),
      () => {
        M(l, s().result)
      },
    ),
    V(
      () => s(),
      () => {
        M(c, s().showResult)
      },
    ),
    V(
      () => o(),
      () => {
        M(u, o() ? 200 : 0)
      },
    ),
    it(),
    ct()
  var f = Zi(),
    h = L(f),
    y = L(h)
  let v
  var _ = L(y, true)
  O(y),
    O(h),
    O(f),
    lt(() => {
      Et(h, 1, `content variant-${d() ?? ''}`, 'svelte-6mcoxx'),
        (v = Ct(y, '', v, {
          background: S(a) ? Qt[S(a)].normal : 'none',
          transform: `translateY(${S(c) ? 0 : 100}%)`,
          '--duration': `${S(u) ?? ''}ms`,
        })),
        Ot(_, S(l) === void 0 ? '' : S(l))
    }),
    P(r, f),
    Q(),
    i()
}
var ts = j('<span class="text-[0.7em]" slot="slot-meta-info"><!></span>'),
  es = j('<div><!></div>')
function ns(r, e) {
  X(e, false)
  const [n, i] = Z(),
    s = () => $(h, '$stacked', n),
    o = () => $(be, '$resultMeta', n),
    a = () => $(jt, '$tab', n),
    l = () => $(f, '$lastBet', n),
    c = () => $(y, '$allowDismissal', n),
    u = I(),
    m = I()
  let d = Y(e, 'displayWheel', 8)
  const { lastBet: f } = ye(),
    h = Zt(),
    y = ut([mt, ge], ([N, b]) => !(G('autobetTab', N) && b))
  V(
    () => s(),
    () => {
      M(u, s() ? 'top-[50%]' : 'top-[27.5%]')
    },
  ),
    V(
      () => (s(), wt(d())),
      () => {
        M(m, s() ? 'right-0' : d() ? 'right-[-24px]' : 'right-24')
      },
    ),
    it(),
    ct()
  var v = Pt(),
    _ = J(v)
  {
    var w = (N) => {
      var b = es(),
        C = L(b)
      on(
        C,
        $t(
          {
            get tab() {
              return a()
            },
          },
          l,
          {
            get allowDismissal() {
              return c()
            },
            $$slots: {
              'slot-meta-info': (g, R) => {
                var k = ts(),
                  z = L(k)
                Ce(z, {}), O(k), P(g, k)
              },
            },
          },
        ),
      ),
        O(b),
        lt(() => Et(b, 1, `absolute left-0 ${S(m) ?? ''} ${S(u) ?? ''}`)),
        P(N, b)
    }
    Nt(_, (N) => {
      o().showResult && N(w)
    })
  }
  P(r, v), Q(), i()
}
var is = j('<button class="last-bet svelte-1s7oc9n"> </button>')
function ss(r, e) {
  X(e, false)
  let n = Y(e, 'bet', 8),
    i = Y(e, 'index', 8)
  ct()
  var s = is(),
    o = L(s, true)
  O(s),
    lt(() => {
      Ct(
        s,
        `
    opacity: ${(5 - i()) / 5};
    --bg-color: ${Qt[It[n().state.result].color].normal ?? ''};
    --bg-color-lighten: ${Qt[It[n().state.result].color].lighten ?? ''};
  `,
      ),
        Ot(o, n().state.result)
    }),
    cn('click', s, () =>
      un.bet.open({
        betId: n().id,
      }),
    ),
    P(r, s),
    Q()
}
var as = j(
  '<div class="wrap svelte-nrinvt"><div class="content svelte-nrinvt" data-testid="last-bets"></div></div>',
)
function rs(r, e) {
  X(e, false)
  const [n, i] = Z(),
    s = () => $(Lt, '$animationsEnabled', n),
    o = () => $(l, '$lastBets', n),
    a = I(),
    { lastBets: l } = Ne
  V(
    () => s(),
    () => {
      M(a, s() ? 300 : 0)
    },
  ),
    it()
  var c = as(),
    u = L(c)
  ln(
    u,
    7,
    o,
    (m) => m.id,
    (m, d, f) => {
      ss(m, {
        get index() {
          return S(f)
        },
        get bet() {
          return S(d)
        },
      })
    },
  ),
    O(u),
    O(c),
    lt(() => Ct(u, `--duration: ${S(a) ?? ''}ms;`)),
    P(r, c),
    Q(),
    i()
}
const fe = {
  undo: et._('Undo'),
  clear: et._('Clear'),
}
var os = j('<!> <span> </span>', 1),
  ls = j('<span> </span> <!>', 1),
  cs = j('<div class="wrap svelte-9l8jyi"><!> <!></div>')
function us(r, e) {
  X(e, false)
  const [n, i] = Z(),
    s = () => $(l, '$disabled', n),
    o = () => $(dn, '$i18n', n)
  let a = Y(e, 'stacked', 8, false)
  const { disabled: l } = K
  ct()
  var c = cs(),
    u = L(c)
  const m = zt(() => (a() ? 'sm' : 'lg'))
  re(u, {
    get disabled() {
      return s()
    },
    get size() {
      return S(m)
    },
    'data-testid': 'button-undo',
    $$events: {
      click(...h) {
        var y
        ;(y = nt.undo) == null || y.apply(this, h)
      },
    },
    children: (h, y) => {
      var v = os(),
        _ = J(v)
      mn(_, {})
      var w = T(_, 2),
        N = L(w, true)
      O(w), lt((b) => Ot(N, b), [() => o()._(fe.undo)], zt), P(h, v)
    },
    $$slots: {
      default: true,
    },
  })
  var d = T(u, 2)
  const f = zt(() => (a() ? 'sm' : 'lg'))
  re(d, {
    get disabled() {
      return s()
    },
    get size() {
      return S(f)
    },
    'data-testid': 'button-clear',
    $$events: {
      click(...h) {
        var y
        ;(y = nt.clear) == null || y.apply(this, h)
      },
    },
    children: (h, y) => {
      var v = ls(),
        _ = J(v),
        w = L(_, true)
      O(_)
      var N = T(_, 2)
      fn(N, {}), lt((b) => Ot(w, b), [() => o()._(fe.clear)], zt), P(h, v)
    },
    $$slots: {
      default: true,
    },
  }),
    O(c),
    P(r, c),
    Q(),
    i()
}
var ds = j(
  '<div class="wrap svelte-nxz7ul" data-testid="game-roulette"><div><!> <!> <!> <!> <div><!></div> <!></div></div>',
)
function ms(r, e) {
  X(e, false)
  const [n, i] = Z(),
    s = () => $(l, '$showWheel', n),
    o = () => $(c, '$stacked', n),
    a = I(),
    { showWheel: l } = K,
    c = Zt()
  V(
    () => (s(), o()),
    () => {
      M(a, s() || o() === false)
    },
  ),
    it(),
    ct()
  var u = ds(),
    m = L(u)
  let d
  var f = L(m)
  Ce(f, {
    variant: 'large',
  })
  var h = T(f, 2)
  rs(h, {})
  var y = T(h, 2)
  Mn(y, {
    get stacked() {
      return o()
    },
  })
  var v = T(y, 2)
  us(v, {
    get stacked() {
      return o()
    },
  })
  var _ = T(v, 2)
  let w
  var N = L(_)
  Ki(N, {}), O(_)
  var b = T(_, 2)
  ns(b, {
    get displayWheel() {
      return S(a)
    },
  }),
    O(m),
    O(u),
    lt(
      (C, g) => {
        ;(d = Et(m, 1, 'unstacked svelte-nxz7ul', null, d, C)),
          (w = Et(_, 1, 'wheel-house svelte-nxz7ul', null, w, g)),
          Ct(_, `display: ${S(a) ? 'flex' : 'none'};`)
      },
      [
        () => ({
          stacked: o(),
        }),
        () => ({
          betting: o(),
        }),
      ],
      zt,
    ),
    P(r, u),
    Q(),
    i()
}
var fs = j('<!> <!> <!> <!>', 1),
  hs = j('<!> <!> <!> <!>', 1),
  ps = j('<!> <!> <!> <!> <!> <!> <!>', 1)
function ys(r, e) {
  X(e, false)
  const [n, i] = Z(),
    s = () => $(nt, '$chips', n),
    o = () => $(qt, '$totalChipsBetAmount', n),
    a = () => $(h, '$tab', n),
    l = () => $(y, '$stacked', n),
    c = () => $(f, '$invalidBetAmount', n),
    u = () => $(d, '$autobetButtonDisabled', n),
    m = I(),
    { autobetButtonDisabled: d, invalidBetAmount: f } = Ne,
    { tab: h } = ye(),
    y = Zt()
  V(
    () => (s(), o()),
    () => {
      M(m, {
        chips: s(),
        setChips: nt.set,
        totalChipsBetAmount: o(),
      })
    },
  ),
    it(),
    ct()
  var v = Pt(),
    _ = J(v)
  {
    var w = (b) => {
        var C = Pt(),
          g = J(C)
        {
          var R = (z) => {
              var A = fs(),
                D = J(A)
              Ut(D, {
                get disabled() {
                  return c()
                },
                get totalChipsBetAmount() {
                  return o()
                },
              })
              var F = T(D, 2)
              le(F, {
                get disabled() {
                  return c()
                },
              })
              var E = T(F, 2)
              Wt(
                E,
                $t(() => S(m), {
                  get disabled() {
                    return c()
                  },
                }),
              )
              var W = T(E, 2)
              Rt(W, {
                manual: true,
                automated: true,
              }),
                P(z, A)
            },
            k = (z) => {
              var A = hs(),
                D = J(A)
              Rt(D, {
                manual: true,
                automated: true,
              })
              var F = T(D, 2)
              Ut(F, {
                get disabled() {
                  return c()
                },
                get totalChipsBetAmount() {
                  return o()
                },
              })
              var E = T(F, 2)
              Wt(
                E,
                $t(() => S(m), {
                  get disabled() {
                    return c()
                  },
                }),
              )
              var W = T(E, 2)
              le(W, {
                get disabled() {
                  return c()
                },
              }),
                P(z, A)
            }
          Nt(g, (z) => {
            l() ? z(R) : z(k, false)
          })
        }
        P(b, C)
      },
      N = (b) => {
        var C = ps(),
          g = J(C)
        {
          var R = (U) => {
              oe(U, {
                get disabled() {
                  return u()
                },
              })
            },
            k = (U) => {
              Rt(U, {
                manual: true,
                automated: true,
              })
            }
          Nt(g, (U) => {
            l() ? U(R) : U(k, false)
          })
        }
        var z = T(g, 2)
        Ut(z, {
          get disabled() {
            return u()
          },
          get totalChipsBetAmount() {
            return o()
          },
        })
        var A = T(z, 2)
        Wt(
          A,
          $t(() => S(m), {
            get disabled() {
              return u()
            },
          }),
        )
        var D = T(A, 2)
        hn(D, {})
        var F = T(D, 2)
        kn(F, {})
        var E = T(F, 2)
        _n(E, {})
        var W = T(E, 2)
        {
          var dt = (U) => {
              oe(U, {
                get disabled() {
                  return u()
                },
              })
            },
            Te = (U) => {
              Rt(U, {
                manual: true,
                automated: true,
              })
            }
          Nt(W, (U) => {
            l() === false ? U(dt) : U(Te, false)
          })
        }
        P(b, C)
      }
    Nt(_, (b) => {
      a() === 'manual' ? b(w) : b(N, false)
    })
  }
  P(r, v), Q(), i()
}
const vs = pe(true),
  ie = {
    bet: et._('Make a bet'),
    undo: et._('Undo'),
    clear: et._('Clear'),
  },
  gs = {
    ...ie,
    bet: et._('Play'),
  },
  xs = {
    stake: ie,
    sweeps: gs,
  },
  Xt = xs[ve] || ie,
  bs = {
    space: {
      description: Xt.bet,
      action: () => {
        q(jt) === 'manual'
          ? q(Dt) === false && q(ze) === false && yt.send('BET')
          : yt.send('TOGGLE_AUTOBETTING')
      },
    },
    q: {
      description: Xt.undo,
      action: () => {
        q(Dt) === false && nt.undo()
      },
    },
    w: {
      description: Xt.clear,
      action: () => {
        q(Dt) === false && nt.clear()
      },
    },
  },
  se = {
    '1.': et._(
      'Bets can be placed directly on any tile, but can’t be placed on the lines to split between outcomes.',
    ),
    '2.': et._(
      'There is only one possible green outcome, therefore reducing the house edge from traditional roulette.',
    ),
  },
  ks = {
    ...se,
    '1.': et._(
      'Stake can be placed directly on any tile, but can’t be placed on the lines to split between outcomes.',
    ),
  },
  _s = {
    stake: se,
    sweeps: ks,
  },
  Ss = _s[ve] || se
var ws = j('<!> <!> <!> <!> <!>', 1)
function va(r, e) {
  X(e, false)
  const [n, i] = Z(),
    s = () => $(o, '$currency', n)
  Oe(Sn),
    Fe({
      listener: Xi,
      general: {
        ...K,
        valid: vs,
        send: yt.send,
      },
      autobet: ee,
    }),
    he(() => {
      ne.set([]), Vt.spin.stop()
    })
  const { currency: o, chips: a } = K
  V(
    () => s(),
    () => {
      s(), a.clear()
    },
  ),
    it(),
    ct(),
    pn(r, {
      get game() {
        return Kt.roulette
      },
      children: (l, c) => {
        var u = ws(),
          m = J(u)
        yn(m, {
          children: (v, _) => {
            ys(v, {})
          },
          $$slots: {
            default: true,
          },
        })
        var d = T(m, 2)
        vn(d, {
          children: (v, _) => {
            ms(v, {})
          },
          $$slots: {
            default: true,
          },
        })
        var f = T(d, 2)
        gn(f, {
          get hotkeyMap() {
            return bs
          },
        })
        var h = T(f, 2)
        xn(h, {
          get rules() {
            return Ss
          },
        })
        var y = T(h, 2)
        bn(y, {}), P(l, u)
      },
      $$slots: {
        default: true,
      },
    }),
    Q(),
    i()
}
export { va as default }
