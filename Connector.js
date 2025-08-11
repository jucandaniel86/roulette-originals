const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ['./howler-DJuVD50u.js', './index-BkaOEVGW.js', './index-BGLCchs9.css']),
) => i.map((i) => d[i])
import {
  r as i,
  R as F,
  b as r,
  k as Lr,
  t as U,
  M as Sr,
  g as dt,
  l as pt,
  u as ct,
  G as lt,
  m as gr,
} from './index-BkaOEVGW.js'
import { u as xr } from './useCssVariables-Ba7gGP9f.js'
import { u as jr } from './usePrevious-9g4wALNj.js'
import { h as Z } from './string-aT7bg8eq.js'
import { i as rr } from './validation-Bf662osL.js'
import { r as vr } from './math-DkEfAmwS.js'
const Ct = i.createContext({
    settings: {
      instantBet: !1,
      animations: !0,
      maxBet: localStorage.getItem('settings_maxBetEnabled') === 'true',
      volume:
        localStorage.getItem('settings_soundsVolume') !== null
          ? +localStorage.getItem('settings_soundsVolume')
          : 1,
    },
    setSettings: () => {},
  }),
  Et = (m) => {
    const t = new AbortController(),
      o = i.useRef(null),
      s = i.useRef(null),
      p = i.useRef(null),
      a = i.useRef(),
      [u, c] = i.useState({
        show: !1,
        attached: !1,
      }),
      [D, h] = i.useState(null),
      T = (L, n) => {
        if (m) {
          const g = m.current,
            l = L.target
          if (l === n || (g && g.contains(l))) return
          c({
            show: !1,
            attached: !1,
          }),
            t.abort()
        }
      }
    return {
      show: ({ attached: L = !1, target: n, showDelay: g, hideDelay: l }) => {
        o.current && clearTimeout(o.current),
          s.current && clearTimeout(s.current),
          h(n),
          g ? (a.current = g) : (a.current = void 0),
          L
            ? (c({
                show: !0,
                attached: !0,
              }),
              window.addEventListener('click', (I) => T(I, n), {
                capture: !0,
                signal: t.signal,
              }),
              (a.current = void 0))
            : (window.removeEventListener('click', (I) => T(I, n)),
              g && p.current === null
                ? (s.current = setTimeout(() => {
                    c({
                      show: !0,
                      attached: !1,
                    })
                  }, g))
                : c({
                    show: !0,
                    attached: !1,
                  }),
              l &&
                (o.current && clearTimeout(o.current),
                (o.current = setTimeout(() => {
                  c({
                    show: !1,
                    attached: !1,
                  })
                }, l))))
      },
      hide: (L) => {
        D && window.removeEventListener('click', (n) => T(n, D)),
          L
            ? (o.current && clearTimeout(o.current),
              (o.current = setTimeout(() => {
                c({
                  show: !1,
                  attached: !1,
                })
              }, L)))
            : c({
                show: !1,
                attached: !1,
              }),
          s.current && clearTimeout(s.current),
          a.current &&
            (p.current && clearTimeout(p.current),
            (p.current = setTimeout(() => {
              p.current = null
            }, a.current)))
      },
      state: u,
    }
  },
  ft = (m) => {
    if (!m) throw new Error('No screens defined for useScreenSizeDetector')
    const [t, o] = i.useState(),
      s = i.useMemo(() => [...m].sort((a, u) => a[1] - u[1]), [JSON.stringify(m)]),
      p = (a) => a === t
    return (
      i.useEffect(() => {
        const a = new Map()
        let u = 0
        for (const f in s) {
          const [k, L] = s[f],
            n = u
              ? `screen and (min-width: ${u}px) and (max-width: ${L - 1}px)`
              : `screen and (min-width: 0px) and (max-width: ${L - 1}px)`,
            g = (I) => {
              I.matches && o(k)
            },
            l = window.matchMedia(n)
          l.addEventListener('change', g), a.set(k, [l, g]), (u = L)
        }
        const c = 'desktop',
          D = `screen and (min-width: ${u}px)`,
          h = (f) => {
            f.matches && o(c)
          },
          T = window.matchMedia(D)
        T.addEventListener('change', h), a.set(c, [T, h])
        for (const [f, [k]] of a.entries()) k.matches && o(f)
        return () => {
          for (const [, [f, k]] of a.entries()) f.removeEventListener('change', k)
        }
      }, []),
      {
        currentScreen: t,
        is: p,
      }
    )
  },
  Wr = () => {
    const { is: m } = ft([['mobile', 915]]),
      t = document.body.classList.contains('force-desktop')
    return {
      isMobile: m('mobile') && !t,
      isForceDesktop: t,
    }
  }
function nr() {
  return (
    (nr = Object.assign
      ? Object.assign.bind()
      : function (m) {
          for (var t = 1; t < arguments.length; t++) {
            var o = arguments[t]
            for (var s in o) ({}).hasOwnProperty.call(o, s) && (m[s] = o[s])
          }
          return m
        }),
    nr.apply(null, arguments)
  )
}
function gt(m, t) {
  if (m == null) return {}
  var o = {}
  for (var s in m)
    if ({}.hasOwnProperty.call(m, s)) {
      if (t.indexOf(s) >= 0) continue
      o[s] = m[s]
    }
  return o
}
function vt(m) {
  i.useEffect(m, [])
}
var Lt = ['id', 'volume', 'playbackRate', 'soundEnabled', 'interrupt', 'onload']
function Vt(m, t) {
  var o = t === void 0 ? {} : t,
    s = o.volume,
    p = s === void 0 ? 1 : s,
    a = o.playbackRate,
    u = a === void 0 ? 1 : a,
    c = o.soundEnabled,
    D = c === void 0 ? !0 : c,
    h = o.interrupt,
    T = h === void 0 ? !1 : h,
    f = o.onload,
    k = gt(o, Lt),
    L = F.useRef(null),
    n = F.useRef(!1),
    g = F.useState(null),
    l = g[0],
    I = g[1],
    G = F.useState(null),
    V = G[0],
    W = G[1],
    N = function () {
      typeof f == 'function' && f.call(this), n.current && I(this.duration() * 1e3), W(this)
    }
  vt(function () {
    return (
      r(
        () => import('./howler-DJuVD50u.js').then((v) => v.h),
        __vite__mapDeps([0, 1, 2]),
        import.meta.url,
      ).then(function (v) {
        if (!n.current) {
          var M
          ;(L.current = (M = v.Howl) !== null && M !== void 0 ? M : v.default.Howl),
            (n.current = !0),
            new L.current(
              nr(
                {
                  src: Array.isArray(m) ? m : [m],
                  volume: p,
                  rate: u,
                  onload: N,
                },
                k,
              ),
            )
        }
      }),
      function () {
        n.current = !1
      }
    )
  }),
    F.useEffect(
      function () {
        L.current &&
          V &&
          W(
            new L.current(
              nr(
                {
                  src: Array.isArray(m) ? m : [m],
                  volume: p,
                  onload: N,
                },
                k,
              ),
            ),
          )
      },
      [JSON.stringify(m)],
    ),
    F.useEffect(
      function () {
        V && (V.volume(p), V.rate(u))
      },
      [p, u],
    )
  var z = F.useCallback(
      function (v) {
        typeof v > 'u' && (v = {}),
          !(!V || (!D && !v.forceSoundEnabled)) &&
            (T && V.stop(), v.playbackRate && V.rate(v.playbackRate), V.play(v.id))
      },
      [V, D, T],
    ),
    P = F.useCallback(
      function (v) {
        V && V.stop(v)
      },
      [V],
    ),
    d = F.useCallback(
      function (v) {
        V && V.pause(v)
      },
      [V],
    ),
    S = [
      z,
      {
        sound: V,
        stop: P,
        pause: d,
        duration: l,
      },
    ]
  return S
}
const Pt = '' + new URL('bet-DjrHjqhR.mp3', import.meta.url).href
function Ot() {
  function m(u, c) {
    const D = new Map(u)
    switch (c.type) {
      case 'MARK_VALID':
        return D.delete(c.input), D
      case 'MARK_INVALID':
        return D.set(c.input, !0), D
      default:
        return u
    }
  }
  const [t, o] = i.useReducer(m, new Map()),
    s = (u) => {
      o({
        type: 'MARK_INVALID',
        input: u,
      })
    },
    p = (u) => {
      o({
        type: 'MARK_VALID',
        input: u,
      })
    },
    a = (u) => t.has(u)
  return {
    isEnabled: t.size === 0,
    markInputInvalid: s,
    markInputValid: p,
    isInputInvalid: a,
  }
}
const It = ({
    connector: m,
    setBetAmount: t,
    refreshCampaign: o,
    currency: s,
    sessionData: p,
    handleFinishFreeBets: a,
    handleFreeBetsLimitReached: u,
  }) => {
    const [c, D] = i.useState(),
      [h, T] = i.useState(!1),
      [f, k] = i.useState('init'),
      L = jr(c),
      [n, g] = i.useState(),
      l = i.useRef(),
      I = i.useRef(!1),
      [G, V] = i.useState(0),
      W = (P) => {
        n && (m.optCampaign(n == null ? void 0 : n.id, P), T(!1), P ? (t(n.bet), D(!0)) : D(!1))
      },
      N = async () => {
        n &&
          (f === 'finished' && (await m.acknowledgeCampaign(n.id), V((P) => P + 1), g(void 0)),
          T(!1))
      },
      z = () => {
        c &&
          n &&
          g((P) =>
            P === void 0
              ? P
              : ((l.current = {
                  ...P,
                  bets: P.bets,
                  used: P.used + 1,
                }),
                l.current.bets === l.current.used && (I.current = !0),
                {
                  ...P,
                  bets: l.current.bets,
                  used: l.current.used,
                }),
          )
      }
    return (
      i.useEffect(() => {
        ;(async () => {
          var v, M
          if (!m) return
          const d = await m.getCampaigns(),
            S =
              d != null && d.length
                ? (v = d.filter((E) => E.type === 'freeBets')[0]) == null
                  ? void 0
                  : v.campaignId
                : void 0
          if (S) {
            const E = await m.getCampaign(S)
            E.status === 'started'
              ? (T(!0), k('init'))
              : E.status === 'active'
                ? (E == null ? void 0 : E.playerState.used) === (E == null ? void 0 : E.config.bets)
                  ? (D(!1), k('unfinished'), T(!0))
                  : (((M = p == null ? void 0 : p.recover) == null ? void 0 : M.wagers) === null &&
                      t(E.playerState.amount),
                    k('summary'),
                    D(!0),
                    n || T(!0))
                : E.status === 'finished' && (k('finished'), T(!0), D(!1)),
              g({
                id: S,
                bets: (E == null ? void 0 : E.config.bets) ?? 0,
                used: (E == null ? void 0 : E.playerState.used) ?? 0,
                bet: E.playerState.amount,
                betFormatted: m.formatCurrency(E.playerState.amount, s),
                totalWin: E.playerState.totalWin,
                totalWinFormatted: m.formatCurrency(E.playerState.totalWin, s),
                endTime: E.end,
              })
          } else g(void 0)
        })()
      }, [o, m, G]),
      i.useEffect(() => {
        !c && L && (a && a(), (I.current = !1))
      }, [c, L]),
      i.useEffect(() => {
        if (!n || !c) return
        const { used: P, bets: d } = n
        P === d && u && u()
      }, [n, c]),
      {
        showFreeBetsModal: h,
        freeBet: c,
        freeBetsModalType: f,
        freeBetsLimitReachedRef: I,
        campaignInfo: n,
        handleOpt: W,
        handleAcknowledgeFreeBets: N,
        freeBetsHandler: z,
      }
    )
  },
  Rt = () => {
    const m = localStorage.getItem('settings_soundsVolume'),
      t = localStorage.getItem('settings_soundsEnabled')
    let o = 1
    return (
      t !== null && t === 'true' && m !== null ? (o = parseFloat(m)) : t === 'false' && (o = 0), o
    )
  },
  tr = (m, t = !1) => {
    const o = m.replace(',', '.').replace(/^0+(?=\d)/, '')
    if ((t ? /^-?(\d*\.?\d*)$/ : /^\d*$/).test(o)) {
      if (o === '' || o === '.') return 0
      {
        const p = parseFloat(o)
        if (!isNaN(p)) return t ? o : Math.floor(p)
      }
    } else return parseInt(o)
  },
  yt = ({
    placeBet: m,
    sessionData: t,
    connector: o,
    balance: s,
    setBalance: p,
    validationErrorsRef: a,
    calculatedMaxBet: u,
    customDefaultBet: c,
    noValidateMinBet: D,
    currency: h,
    refreshCampaign: T,
    handleFinishFreeBets: f,
    handleFreeBetsLimitReached: k,
  }) => {
    const L = Rt(),
      [n] = Vt(Pt, {
        volume: L,
      }),
      { isEnabled: g, markInputInvalid: l, markInputValid: I, isInputInvalid: G } = Ot(),
      V = i.useRef(null),
      W = i.useRef(null),
      N = i.useRef(null),
      z = i.useRef(null),
      P = i.useRef(null),
      d = i.useRef(null),
      S = i.useRef(''),
      v = i.useRef(null),
      M = Et(),
      { isMobile: E } = Wr(),
      C = xr(['--balance-visibility']),
      [R, w] = i.useState('init'),
      x = jr(R),
      [er, or] = i.useState(null),
      [ur, setJ] = i.useState(0),
      [noOfBets, setNoOfBets] = i.useState(0),
      [ir, dr] = i.useState({
        state: 'reset',
        value: 0,
      }),
      [mr, pr] = i.useState({
        state: 'reset',
        value: 0,
      }),
      [Hr, cr] = i.useState(0),
      [Kr, lr] = i.useState(0),
      [Er, Vr] = i.useState(!0),
      Pr = i.useRef(!1),
      Or = i.useRef({
        netAmount: 0,
        nextBet: null,
      }),
      _r = (t == null ? void 0 : t.authenticate.currencyDecimals) ?? 2,
      zr = !Lr(C['--balance-visibility'], E),
      fr = (e, _, O) => {
        if (_ === void 0 || Number.isNaN(_)) return ''
        if (er === e) return _.toString()
        {
          let A = _
          return (
            typeof _ == 'string' && (A = _.includes('.') ? parseFloat(A) : parseInt(A, 10)),
            A.toFixed(O).toString()
          )
        }
      }
    i.useEffect(() => {
      var e, _, O, A, b, B
      t !== void 0 &&
        (p(t == null ? void 0 : t.authenticate.balance),
        setJ(
          c ??
            ((O =
              (_ = (e = t == null ? void 0 : t.info) == null ? void 0 : e.bets) == null
                ? void 0
                : _.main) == null
              ? void 0
              : O.default) ??
            ((B =
              (b = (A = t == null ? void 0 : t.info) == null ? void 0 : A.bets) == null
                ? void 0
                : b.main) == null
              ? void 0
              : B.available.min),
        ),
        w('ready'),
        Vr(!1))
    }, [t]),
      i.useEffect(() => {
        R === 'ready' && !Pr.current && o && ((Pr.current = !0), o.gameLoaded())
      }, [R, o]),
      i.useEffect(() => {
        R === 'ready' && !Er && q(ur)
      }, [s, Er]),
      i.useEffect(() => {
        R !== 'init' &&
          (window.parent || window).parent.postMessage(
            {
              message: 'balanceUpdate',
              data: {
                balance: o.floorCurrency(s),
              },
            },
            '*',
          )
      }, [s])
    const Ir = i.useRef()
    i.useEffect(() => {
      Ir.current = R
    }, [R])
    const $r = async () => {
        if (!m) throw new Error('No placeBet method is defined.')
        if (R === 'betting') return Rr()
        w('betting'), n(), await m(ur)
      },
      Fr = () => {
        setNoOfBets(0),
          (Or.current = {
            netAmount: 0,
            nextBet: null,
          })
      },
      Rr = () => {
        w('ready')
      },
      Ur = () => {
        or(null), Y(500)
      },
      {
        freeBetsHandler: Gr,
        handleAcknowledgeFreeBets: Jr,
        handleOpt: Qr,
        showFreeBetsModal: Xr,
        freeBet: sr,
        freeBetsLimitReachedRef: qr,
        freeBetsModalType: Yr,
        campaignInfo: Zr,
      } = It({
        connector: o,
        setBetAmount: setJ,
        refreshCampaign: T,
        currency: h,
        sessionData: t,
        handleFinishFreeBets: f,
        handleFreeBetsLimitReached: k,
      })
    i.useEffect(() => {
      sr && (Ar('reset'), Dr('reset'), cr(0), lr(0))
    }, [sr])
    const q = (e, _) => {
        var hr, kr, br, Br, wr, Mr, Cr, yr
        const { min: O, max: A } =
            ((br =
              (kr = (hr = t == null ? void 0 : t.info) == null ? void 0 : hr.bets) == null
                ? void 0
                : kr.main) == null
              ? void 0
              : br.available) ?? {},
          b =
            (wr = (Br = t == null ? void 0 : t.info) == null ? void 0 : Br.betLimits) == null
              ? void 0
              : wr.maxBet,
          B = (Mr = t == null ? void 0 : t.info.betLimits) == null ? void 0 : Mr.minBet,
          y = b !== void 0 ? Math.min(b, A) : A,
          H = B !== void 0 ? Math.max(B, O) : O,
          j = _ ?? u,
          K = (isNaN(e) || e < H) && !D,
          $ = e > s,
          X = e > y,
          Tr = j && e > j
        if ((!sr && (K || $ || X)) || Tr) {
          l('betAmount'), (Cr = W.current) == null || Cr.classList.add('invalid')
          const ut = j ?? y
          K
            ? a.current.set(
                'bet',
                `${U('inputMinValidation', {
                  min: o.formatCurrency(+H, h),
                })}`,
              )
            : $
              ? a.current.set('bet', U('betBalanceValidation'))
              : (X || Tr) &&
                a.current.set(
                  'bet',
                  `${U('betMaxValidation', {
                    max: o.formatCurrency(Math.min(y, ut), h),
                  })}`,
                ),
            Q(V.current, 'bet')
        } else
          I('betAmount'),
            (yr = W.current) == null || yr.classList.remove('invalid'),
            a.current.has('bet') && a.current.delete('bet'),
            Y()
      },
      rt = (e) => {
        var A, b, B, y
        if (!Z(e.target.value)) return
        or('betAmount')
        const { min: _ } =
          ((B =
            (b = (A = t == null ? void 0 : t.info) == null ? void 0 : A.bets) == null
              ? void 0
              : b.main) == null
            ? void 0
            : B.available) ?? {}
        if (isNaN(e.target.valueAsNumber) && !rr) {
          setJ(e.target.valueAsNumber),
            a.current.set(
              'bet',
              `${U('inputMinValidation', {
                min: _,
              })} ${h.toUpperCase()}`,
            ),
            l('betAmount'),
            (y = W.current) == null || y.classList.add('invalid'),
            Q(V.current, 'bet')
          return
        }
        const O = tr(e.target.value, !0)
        O !== void 0 && (q(O), setJ(O))
      },
      tt = () => {
        var O, A, b, B, y, H, j, K
        const e =
            (B =
              (b =
                (A = (O = t == null ? void 0 : t.info) == null ? void 0 : O.bets) == null
                  ? void 0
                  : A.main) == null
                ? void 0
                : b.available) == null
              ? void 0
              : B.min,
          _ =
            ((H = (y = t == null ? void 0 : t.info) == null ? void 0 : y.betLimits) == null
              ? void 0
              : H.minBet) !== void 0
              ? Math.max(
                  (K = (j = t == null ? void 0 : t.info) == null ? void 0 : j.betLimits) == null
                    ? void 0
                    : K.minBet,
                  e,
                )
              : e
        setJ(($) => {
          const X = Math.max(_ ?? 0, Math.min(s, $ / 2))
          return q(X), +X.toFixed(_r)
        })
      },
      et = () => {
        var O, A, b, B, y, H, j, K
        const e =
            (B =
              (b =
                (A = (O = t == null ? void 0 : t.info) == null ? void 0 : O.bets) == null
                  ? void 0
                  : A.main) == null
                ? void 0
                : b.available) == null
              ? void 0
              : B.max,
          _ =
            ((H = (y = t == null ? void 0 : t.info) == null ? void 0 : y.betLimits) == null
              ? void 0
              : H.maxBet) !== void 0
              ? Math.min(
                  (K = (j = t == null ? void 0 : t.info) == null ? void 0 : j.betLimits) == null
                    ? void 0
                    : K.maxBet,
                  e,
                )
              : e
        setJ(($) => {
          const X = Math.min(u ?? _, _, s, $ * 2)
          return q(X), +X.toFixed(_r)
        })
      },
      ot = () => {
        var O, A, b, B, y, H, j, K
        const e =
            (B =
              (b =
                (A = (O = t == null ? void 0 : t.info) == null ? void 0 : O.bets) == null
                  ? void 0
                  : A.main) == null
                ? void 0
                : b.available) == null
              ? void 0
              : B.max,
          _ =
            ((H = (y = t == null ? void 0 : t.info) == null ? void 0 : y.betLimits) == null
              ? void 0
              : H.maxBet) !== void 0
              ? Math.min(
                  (K = (j = t == null ? void 0 : t.info) == null ? void 0 : j.betLimits) == null
                    ? void 0
                    : K.maxBet,
                  e,
                )
              : e
        setJ(() => {
          const $ = +Math.min(u ?? _, _ ?? s)
          return q($), +$.toFixed(_r)
        })
      },
      it = (e) => {
        if (!Z(e.target.value)) return
        if (isNaN(e.target.valueAsNumber) && !rr) {
          setNoOfBets(''),
            e.target.parentElement.classList.add('invalid'),
            a.current.set(
              'numberOfBets',
              U('inputMinValidation', {
                min: 0,
              }),
            ),
            Q(N.current, 'numberOfBets'),
            l('numberOfBets')
          return
        } else
          e.target.valueAsNumber > Sr
            ? (e.target.parentElement.classList.add('invalid'),
              a.current.set(
                'numberOfBets',
                U('inputMaxValidation', {
                  max: Sr,
                }),
              ),
              Q(N.current, 'numberOfBets'),
              l('numberOfBets'))
            : (e.target.parentElement.classList.remove('invalid'),
              a.current.has('numberOfBets') && a.current.delete('numberOfBets'),
              I('numberOfBets'),
              Y())
        const _ = tr(e.target.value)
        _ !== void 0 &&
          (setNoOfBets(_),
          _ < 0 &&
            (e.target.parentElement.classList.add('invalid'),
            a.current.set(
              'numberOfBets',
              U('inputMinValidation', {
                min: 0,
              }),
            ),
            l('numberOfBets'),
            Q(N.current, 'numberOfBets')))
      },
      Ar = (e) =>
        dr({
          ...ir,
          state: e,
        }),
      mt = (e) => {
        if (!Z(e.target.value)) return
        if (isNaN(e.target.valueAsNumber) && !rr) {
          dr({
            ...ir,
            value: '',
          }),
            e.target.parentElement.classList.add('invalid'),
            l('increaseByWin')
          return
        } else e.target.parentElement.classList.remove('invalid'), I('increaseByWin')
        const _ = tr(e.target.value, !0)
        ir.state === 'reset' ||
          _ === void 0 ||
          dr({
            ...ir,
            value: _,
          })
      },
      Dr = (e) =>
        pr({
          ...mr,
          state: e,
        }),
      _t = (e) => {
        if (!Z(e.target.value)) return
        if (isNaN(e.target.valueAsNumber) && !rr) {
          pr({
            ...mr,
            value: '',
          }),
            e.target.parentElement.classList.add('invalid'),
            l('increaseByLoss')
          return
        } else e.target.parentElement.classList.remove('invalid'), I('increaseByLoss')
        const _ = tr(e.target.value, !0)
        mr.state === 'reset' ||
          _ === void 0 ||
          pr({
            ...mr,
            value: _,
          })
      },
      at = (e) => {
        if (!Z(e.target.value)) return
        if ((or('stopOnProfit'), isNaN(e.target.valueAsNumber) && !rr)) {
          cr(e.target.valueAsNumber)
          return
        } else
          e.target.parentElement.classList.remove('invalid'),
            a.current.has('stopOnProfit') && a.current.delete('stopOnProfit'),
            I('stopOnProfit'),
            Y()
        const _ = tr(e.target.value, !0)
        _ !== void 0 &&
          (cr(_),
          _ < 0 &&
            (e.target.parentElement.classList.add('invalid'),
            a.current.set(
              'stopOnProfit',
              U('inputMinValidation', {
                min: 0,
              }),
            ),
            l('stopOnProfit'),
            Q(z.current, 'stopOnProfit')))
      },
      st = (e) => {
        if (!Z(e.target.value)) return
        if ((or('stopOnLoss'), isNaN(e.target.valueAsNumber) && !rr)) {
          lr(e.target.valueAsNumber)
          return
        } else
          e.target.parentElement.classList.remove('invalid'),
            a.current.has('stopOnLoss') && a.current.delete('stopOnLoss'),
            I('stopOnLoss'),
            Y()
        const _ = tr(e.target.value, !0)
        _ !== void 0 &&
          (lr(_),
          _ < 0 &&
            (e.target.parentElement.classList.add('invalid'),
            a.current.set(
              'stopOnLoss',
              U('inputMinValidation', {
                min: 0,
              }),
            ),
            l('stopOnLoss'),
            Q(P.current, 'stopOnLoss')))
      },
      Y = (e) => {
        M.hide(e)
      },
      Q = (e, _) => {
        a.current.has(_) &&
          ((d.current = e),
          (S.current = _),
          M.show({
            target: e,
          }))
      },
      nt = (e, _) => {
        e != null && e.balance
          ? p(e.balance)
          : e != null && e.finalWin && _
            ? p((O) => o.floorCurrency(O + e.finalWin - _))
            : e != null && e.finalWin && p((O) => o.floorCurrency(O + e.finalWin))
      }
    return {
      status: R,
      numberOfBets: noOfBets,
      increaseByOnWin: ir,
      increaseByOnLoss: mr,
      stopOnProfit: fr('stopOnProfit', Hr, _r),
      stopOnLoss: fr('stopOnLoss', Kr, _r),
      disableInteraction: Er,
      setDisableInteraction: Vr,
      disableBetButton: !g,
      hideBalance: zr,
      tooltip: M,
      betAmount: ur,
      prevStatus: x,
      autoplaySessionDetails: Or,
      betAmountLabelWrapperRef: V,
      betInputWrapperRef: W,
      numberOfBetsLabelRef: N,
      stopOnProfitRef: z,
      stopOnLossRef: P,
      currentTooltipTargetRef: d,
      inputNameRef: S,
      tooltipRef: v,
      freeBet: sr,
      showFreeBetsModal: Xr,
      freeBetsModalType: Yr,
      freeBetsLimitReachedRef: qr,
      statusRef: Ir,
      campaignInfo: Zr,
      freeBetsHandler: Gr,
      handleAcknowledgeFreeBets: Jr,
      handleOpt: Qr,
      handleBetChange: rt,
      handleHalfBetClick: tt,
      handleDoubleBetClick: et,
      handleMaxBetClick: ot,
      handleBetButtonClick: $r,
      handleNumberOfBetsChange: it,
      handleIncreaseByWinClick: Ar,
      handleIncreaseByWinChange: mt,
      handleIncreaseByLossClick: Dr,
      handleIncreaseByLossChange: _t,
      handleStopOnProfitChange: at,
      handleStopOnLossChange: st,
      handleInputBlur: Ur,
      showInputTooltip: Q,
      hideInputTooltip: Y,
      markInputInvalid: l,
      markInputValid: I,
      isInputInvalid: G,
      stopBetting: Rr,
      clearAutoPlayValues: Fr,
      formatNonEditNumber: fr,
      setStatus: w,
      playBetFx: n,
      setBetAmount: setJ,
      currentEditInput: er,
      setCurrentEditInput: or,
      setNumberOfBets: (e) => {
        e > 0 && setNoOfBets(e)
      },
      setBalanceFromComplete: nt,
      validateBetAmount: q,
    }
  },
  At = (m, t = 1) => {
    let o
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(m))
      return (
        (o = m.substring(1).split('')),
        o.length == 3 && (o = [o[0], o[0], o[1], o[1], o[2], o[2]]),
        (o = '0x' + o.join('')),
        'rgba(' + [(o >> 16) & 255, (o >> 8) & 255, o & 255].join(',') + `,${t})`
      )
  },
  Dt = (m, t, o, s) => `${m.toFixed(s)} ${t == null ? void 0 : t.toUpperCase()}`,
  Tt = {
    backgroundColor: 'var(--modal-wrapper-background-color, var(--color-background-base))',
    primaryColor: 'var(--button-bet-color-background, var(--bet-win-color))',
    secondaryColor: 'var(--color-background-secondary)',
    primaryTextColor: 'var(--text-color)',
    overlayBackgroundColor: At(dt('--game-modal-overlay-color') ?? '#05111a', pt),
  },
  St = (m, { callbacks: t = {}, theme: o = {}, features: s = {} } = {}, p) => {
    const a = i.useRef(!1),
      u = ct(),
      c = u.location.search,
      h = u.location.pathname.match(/^\/game\/([^/]+)/),
      T = h && h[1] && h[1] in lt ? h[1] : m,
      [f, k] = i.useState(),
      L = i.useRef(),
      n = i.useRef(t),
      g = i.useRef(p),
      { isMobile: l } = Wr(),
      I = xr(['--rtp-visibility', '--max-exposure-visibility']),
      G = !Lr(I['--max-exposure-visibility'], l),
      V = !Lr(I['--rtp-visibility'], l),
      W = async () => {
        var E, C
        if (!f) return
        const z = gr.resolvedLanguage,
          P = m.charAt(0).toUpperCase() + m.slice(1),
          d = Object.assign({
            '/src/games/Baccarat/info/bg.md': () =>
              r(() => import('./bg-DaAz2xHA.js'), [], import.meta.url),
            '/src/games/Baccarat/info/bn.md': () =>
              r(() => import('./bn-C1U7Wyff.js'), [], import.meta.url),
            '/src/games/Baccarat/info/cs.md': () =>
              r(() => import('./cs-Dp_LkFIm.js'), [], import.meta.url),
            '/src/games/Baccarat/info/da.md': () =>
              r(() => import('./da-UqFQIOZj.js'), [], import.meta.url),
            '/src/games/Baccarat/info/de.md': () =>
              r(() => import('./de-BZa-PwVp.js'), [], import.meta.url),
            '/src/games/Baccarat/info/el.md': () =>
              r(() => import('./el-DyD-iuyI.js'), [], import.meta.url),
            '/src/games/Baccarat/info/en-sc.md': () =>
              r(() => import('./en-sc-D1v63ssa.js'), [], import.meta.url),
            '/src/games/Baccarat/info/en.md': () =>
              r(() => import('./en-Cjkkrsht.js'), [], import.meta.url),
            '/src/games/Baccarat/info/es.md': () =>
              r(() => import('./es-CZMPhLcp.js'), [], import.meta.url),
            '/src/games/Baccarat/info/et.md': () =>
              r(() => import('./et-C7Vzb4X7.js'), [], import.meta.url),
            '/src/games/Baccarat/info/fi.md': () =>
              r(() => import('./fi-DerOpyBp.js'), [], import.meta.url),
            '/src/games/Baccarat/info/fr.md': () =>
              r(() => import('./fr-Clzcdw2w.js'), [], import.meta.url),
            '/src/games/Baccarat/info/hr.md': () =>
              r(() => import('./hr-QtwK27WN.js'), [], import.meta.url),
            '/src/games/Baccarat/info/hu.md': () =>
              r(() => import('./hu-CJbeAje2.js'), [], import.meta.url),
            '/src/games/Baccarat/info/id.md': () =>
              r(() => import('./id-CqVqQ_Ja.js'), [], import.meta.url),
            '/src/games/Baccarat/info/it.md': () =>
              r(() => import('./it-u3FZvcrZ.js'), [], import.meta.url),
            '/src/games/Baccarat/info/ja.md': () =>
              r(() => import('./ja-DlPtlqwJ.js'), [], import.meta.url),
            '/src/games/Baccarat/info/ka.md': () =>
              r(() => import('./ka-CgiwhbOE.js'), [], import.meta.url),
            '/src/games/Baccarat/info/km.md': () =>
              r(() => import('./km-C3e0FJuR.js'), [], import.meta.url),
            '/src/games/Baccarat/info/ko.md': () =>
              r(() => import('./ko-CHxmyIE4.js'), [], import.meta.url),
            '/src/games/Baccarat/info/lt.md': () =>
              r(() => import('./lt-C6aI_APu.js'), [], import.meta.url),
            '/src/games/Baccarat/info/lv.md': () =>
              r(() => import('./lv-C69TtyUh.js'), [], import.meta.url),
            '/src/games/Baccarat/info/ms.md': () =>
              r(() => import('./ms-CFnx6fei.js'), [], import.meta.url),
            '/src/games/Baccarat/info/nl.md': () =>
              r(() => import('./nl-EvKZcR7N.js'), [], import.meta.url),
            '/src/games/Baccarat/info/no.md': () =>
              r(() => import('./no-CgN8bIge.js'), [], import.meta.url),
            '/src/games/Baccarat/info/pl.md': () =>
              r(() => import('./pl-FqvcJovk.js'), [], import.meta.url),
            '/src/games/Baccarat/info/pt-br.md': () =>
              r(() => import('./pt-br-xtah8SMy.js'), [], import.meta.url),
            '/src/games/Baccarat/info/pt.md': () =>
              r(() => import('./pt-BhP9lCyh.js'), [], import.meta.url),
            '/src/games/Baccarat/info/ro.md': () =>
              r(() => import('./ro-NxdPYVeQ.js'), [], import.meta.url),
            '/src/games/Baccarat/info/ru.md': () =>
              r(() => import('./ru-CRfHDKOz.js'), [], import.meta.url),
            '/src/games/Baccarat/info/sk.md': () =>
              r(() => import('./sk-DDoicoOn.js'), [], import.meta.url),
            '/src/games/Baccarat/info/sv.md': () =>
              r(() => import('./sv-nHkAxcvZ.js'), [], import.meta.url),
            '/src/games/Baccarat/info/th.md': () =>
              r(() => import('./th-BxqZBuwA.js'), [], import.meta.url),
            '/src/games/Baccarat/info/tr.md': () =>
              r(() => import('./tr-iBnAjzjW.js'), [], import.meta.url),
            '/src/games/Baccarat/info/uk.md': () =>
              r(() => import('./uk-Drz2-8cj.js'), [], import.meta.url),
            '/src/games/Baccarat/info/vi.md': () =>
              r(() => import('./vi-CYrYgLyx.js'), [], import.meta.url),
            '/src/games/Baccarat/info/zh-hant.md': () =>
              r(() => import('./zh-hant-BhWpPmoQ.js'), [], import.meta.url),
            '/src/games/Baccarat/info/zh.md': () =>
              r(() => import('./zh-Ya_z7xji.js'), [], import.meta.url),
            '/src/games/Blackjack/info/bg.md': () =>
              r(() => import('./bg-DolbmPGb.js'), [], import.meta.url),
            '/src/games/Blackjack/info/bn.md': () =>
              r(() => import('./bn-BqRPHYlV.js'), [], import.meta.url),
            '/src/games/Blackjack/info/cs.md': () =>
              r(() => import('./cs-Bl7Cb-_-.js'), [], import.meta.url),
            '/src/games/Blackjack/info/da.md': () =>
              r(() => import('./da-obEBCPk1.js'), [], import.meta.url),
            '/src/games/Blackjack/info/de.md': () =>
              r(() => import('./de-BU8xe6h9.js'), [], import.meta.url),
            '/src/games/Blackjack/info/el.md': () =>
              r(() => import('./el-Cg175hsW.js'), [], import.meta.url),
            '/src/games/Blackjack/info/en-sc.md': () =>
              r(() => import('./en-sc-DuSA38w4.js'), [], import.meta.url),
            '/src/games/Blackjack/info/en.md': () =>
              r(() => import('./en-DOseRuG7.js'), [], import.meta.url),
            '/src/games/Blackjack/info/es.md': () =>
              r(() => import('./es-Bgpzunxy.js'), [], import.meta.url),
            '/src/games/Blackjack/info/et.md': () =>
              r(() => import('./et-A5XIX1T7.js'), [], import.meta.url),
            '/src/games/Blackjack/info/fi.md': () =>
              r(() => import('./fi-BiTir0V5.js'), [], import.meta.url),
            '/src/games/Blackjack/info/fr.md': () =>
              r(() => import('./fr-yPRGaiik.js'), [], import.meta.url),
            '/src/games/Blackjack/info/hr.md': () =>
              r(() => import('./hr-DgtIDwHr.js'), [], import.meta.url),
            '/src/games/Blackjack/info/hu.md': () =>
              r(() => import('./hu-CdUKIxTi.js'), [], import.meta.url),
            '/src/games/Blackjack/info/id.md': () =>
              r(() => import('./id-CHdKn9a4.js'), [], import.meta.url),
            '/src/games/Blackjack/info/it.md': () =>
              r(() => import('./it-BPeeYfNY.js'), [], import.meta.url),
            '/src/games/Blackjack/info/ja.md': () =>
              r(() => import('./ja-Dcx3u4D7.js'), [], import.meta.url),
            '/src/games/Blackjack/info/ka.md': () =>
              r(() => import('./ka-TF4D4rHp.js'), [], import.meta.url),
            '/src/games/Blackjack/info/km.md': () =>
              r(() => import('./km-Ck1aQ50u.js'), [], import.meta.url),
            '/src/games/Blackjack/info/ko.md': () =>
              r(() => import('./ko-DlJSH9rO.js'), [], import.meta.url),
            '/src/games/Blackjack/info/lt.md': () =>
              r(() => import('./lt-BalBEDIU.js'), [], import.meta.url),
            '/src/games/Blackjack/info/lv.md': () =>
              r(() => import('./lv-C4dDz2z5.js'), [], import.meta.url),
            '/src/games/Blackjack/info/ms.md': () =>
              r(() => import('./ms-CMZ9BmaG.js'), [], import.meta.url),
            '/src/games/Blackjack/info/nl.md': () =>
              r(() => import('./nl-DGHgo81f.js'), [], import.meta.url),
            '/src/games/Blackjack/info/no.md': () =>
              r(() => import('./no-DHCLWJUb.js'), [], import.meta.url),
            '/src/games/Blackjack/info/pl.md': () =>
              r(() => import('./pl-DZ5xYnRD.js'), [], import.meta.url),
            '/src/games/Blackjack/info/pt-br.md': () =>
              r(() => import('./pt-br-BL4KKKxx.js'), [], import.meta.url),
            '/src/games/Blackjack/info/pt.md': () =>
              r(() => import('./pt-txglSbBs.js'), [], import.meta.url),
            '/src/games/Blackjack/info/ro.md': () =>
              r(() => import('./ro-CXi4ojWA.js'), [], import.meta.url),
            '/src/games/Blackjack/info/ru.md': () =>
              r(() => import('./ru-DyqJdbG9.js'), [], import.meta.url),
            '/src/games/Blackjack/info/sk.md': () =>
              r(() => import('./sk-CIzExcMt.js'), [], import.meta.url),
            '/src/games/Blackjack/info/sv.md': () =>
              r(() => import('./sv-BYqhtpMO.js'), [], import.meta.url),
            '/src/games/Blackjack/info/th.md': () =>
              r(() => import('./th-DwVRfTLN.js'), [], import.meta.url),
            '/src/games/Blackjack/info/tr.md': () =>
              r(() => import('./tr-B-64giS7.js'), [], import.meta.url),
            '/src/games/Blackjack/info/uk.md': () =>
              r(() => import('./uk-7THmG4ru.js'), [], import.meta.url),
            '/src/games/Blackjack/info/vi.md': () =>
              r(() => import('./vi-DZgnf_lc.js'), [], import.meta.url),
            '/src/games/Blackjack/info/zh-hant.md': () =>
              r(() => import('./zh-hant-BDnHKRVl.js'), [], import.meta.url),
            '/src/games/Blackjack/info/zh.md': () =>
              r(() => import('./zh-C3VsEvUV.js'), [], import.meta.url),
            '/src/games/Crash/info/bg.md': () =>
              r(() => import('./bg-CJncWe7u.js'), [], import.meta.url),
            '/src/games/Crash/info/bn.md': () =>
              r(() => import('./bn-TPQJZ4QD.js'), [], import.meta.url),
            '/src/games/Crash/info/cs.md': () =>
              r(() => import('./cs-i0PLJdoU.js'), [], import.meta.url),
            '/src/games/Crash/info/da.md': () =>
              r(() => import('./da-3S3dJriX.js'), [], import.meta.url),
            '/src/games/Crash/info/de.md': () =>
              r(() => import('./de-DVcX7vc7.js'), [], import.meta.url),
            '/src/games/Crash/info/el.md': () =>
              r(() => import('./el-BvU5gdg5.js'), [], import.meta.url),
            '/src/games/Crash/info/en-sc.md': () =>
              r(() => import('./en-sc-CSYRvuZc.js'), [], import.meta.url),
            '/src/games/Crash/info/en.md': () =>
              r(() => import('./en-Cso0AtCE.js'), [], import.meta.url),
            '/src/games/Crash/info/es.md': () =>
              r(() => import('./es-DswVRjTS.js'), [], import.meta.url),
            '/src/games/Crash/info/et.md': () =>
              r(() => import('./et-C8Kud4uR.js'), [], import.meta.url),
            '/src/games/Crash/info/fi.md': () =>
              r(() => import('./fi-Db9hga91.js'), [], import.meta.url),
            '/src/games/Crash/info/fr.md': () =>
              r(() => import('./fr-DdIbEOFl.js'), [], import.meta.url),
            '/src/games/Crash/info/hr.md': () =>
              r(() => import('./hr-BxpYYHT-.js'), [], import.meta.url),
            '/src/games/Crash/info/hu.md': () =>
              r(() => import('./hu-DHXtNQbL.js'), [], import.meta.url),
            '/src/games/Crash/info/id.md': () =>
              r(() => import('./id-BzwICQpR.js'), [], import.meta.url),
            '/src/games/Crash/info/it.md': () =>
              r(() => import('./it-B9cGeISj.js'), [], import.meta.url),
            '/src/games/Crash/info/ja.md': () =>
              r(() => import('./ja-C-ssmRdw.js'), [], import.meta.url),
            '/src/games/Crash/info/ka.md': () =>
              r(() => import('./ka-DAgrEcvq.js'), [], import.meta.url),
            '/src/games/Crash/info/km.md': () =>
              r(() => import('./km-BA5Iy6w0.js'), [], import.meta.url),
            '/src/games/Crash/info/ko.md': () =>
              r(() => import('./ko-i5QISfy0.js'), [], import.meta.url),
            '/src/games/Crash/info/lt.md': () =>
              r(() => import('./lt-Du2Q9aLV.js'), [], import.meta.url),
            '/src/games/Crash/info/lv.md': () =>
              r(() => import('./lv-Cwg7a1Wy.js'), [], import.meta.url),
            '/src/games/Crash/info/ms.md': () =>
              r(() => import('./ms-eTnYQtU2.js'), [], import.meta.url),
            '/src/games/Crash/info/nl.md': () =>
              r(() => import('./nl-DAvUorJw.js'), [], import.meta.url),
            '/src/games/Crash/info/no.md': () =>
              r(() => import('./no--x5psz5x.js'), [], import.meta.url),
            '/src/games/Crash/info/pl.md': () =>
              r(() => import('./pl-A7fqRzDO.js'), [], import.meta.url),
            '/src/games/Crash/info/pt-br.md': () =>
              r(() => import('./pt-br-DGD6v7kT.js'), [], import.meta.url),
            '/src/games/Crash/info/pt.md': () =>
              r(() => import('./pt-EgqIByze.js'), [], import.meta.url),
            '/src/games/Crash/info/ro.md': () =>
              r(() => import('./ro-B8lSpQT8.js'), [], import.meta.url),
            '/src/games/Crash/info/ru.md': () =>
              r(() => import('./ru-D1hwI6WH.js'), [], import.meta.url),
            '/src/games/Crash/info/sk.md': () =>
              r(() => import('./sk-CL-W7Ter.js'), [], import.meta.url),
            '/src/games/Crash/info/sv.md': () =>
              r(() => import('./sv-BzmKn24s.js'), [], import.meta.url),
            '/src/games/Crash/info/th.md': () =>
              r(() => import('./th-BebNw-vB.js'), [], import.meta.url),
            '/src/games/Crash/info/tr.md': () =>
              r(() => import('./tr-AFAn3YlD.js'), [], import.meta.url),
            '/src/games/Crash/info/uk.md': () =>
              r(() => import('./uk-Cha5fDxN.js'), [], import.meta.url),
            '/src/games/Crash/info/vi.md': () =>
              r(() => import('./vi-CHbGju9h.js'), [], import.meta.url),
            '/src/games/Crash/info/zh-hant.md': () =>
              r(() => import('./zh-hant-DkcjuUQ8.js'), [], import.meta.url),
            '/src/games/Crash/info/zh.md': () =>
              r(() => import('./zh-DFO5wmC8.js'), [], import.meta.url),
            '/src/games/Diamonds/info/bg.md': () =>
              r(() => import('./bg-CuU9-eDJ.js'), [], import.meta.url),
            '/src/games/Diamonds/info/bn.md': () =>
              r(() => import('./bn-DAjQwsNY.js'), [], import.meta.url),
            '/src/games/Diamonds/info/cs.md': () =>
              r(() => import('./cs-BtfwErxc.js'), [], import.meta.url),
            '/src/games/Diamonds/info/da.md': () =>
              r(() => import('./da-xRQ7rnQW.js'), [], import.meta.url),
            '/src/games/Diamonds/info/de.md': () =>
              r(() => import('./de-DzzODqGZ.js'), [], import.meta.url),
            '/src/games/Diamonds/info/el.md': () =>
              r(() => import('./el-BUep4jSp.js'), [], import.meta.url),
            '/src/games/Diamonds/info/en-sc.md': () =>
              r(() => import('./en-sc-CnGZ-Ywh.js'), [], import.meta.url),
            '/src/games/Diamonds/info/en.md': () =>
              r(() => import('./en-BYbSrfiP.js'), [], import.meta.url),
            '/src/games/Diamonds/info/es.md': () =>
              r(() => import('./es-Cns-uztZ.js'), [], import.meta.url),
            '/src/games/Diamonds/info/et.md': () =>
              r(() => import('./et-BsUEszsb.js'), [], import.meta.url),
            '/src/games/Diamonds/info/fi.md': () =>
              r(() => import('./fi-LzPdGlAW.js'), [], import.meta.url),
            '/src/games/Diamonds/info/fr.md': () =>
              r(() => import('./fr-CSRQhuK4.js'), [], import.meta.url),
            '/src/games/Diamonds/info/hr.md': () =>
              r(() => import('./hr-dEJEZh6Q.js'), [], import.meta.url),
            '/src/games/Diamonds/info/hu.md': () =>
              r(() => import('./hu-B2hJInL5.js'), [], import.meta.url),
            '/src/games/Diamonds/info/id.md': () =>
              r(() => import('./id-B8s1Sz7W.js'), [], import.meta.url),
            '/src/games/Diamonds/info/it.md': () =>
              r(() => import('./it-CDw1Xhwj.js'), [], import.meta.url),
            '/src/games/Diamonds/info/ja.md': () =>
              r(() => import('./ja-CNpym181.js'), [], import.meta.url),
            '/src/games/Diamonds/info/ka.md': () =>
              r(() => import('./ka-D0UWBNpd.js'), [], import.meta.url),
            '/src/games/Diamonds/info/km.md': () =>
              r(() => import('./km-B1_sACnm.js'), [], import.meta.url),
            '/src/games/Diamonds/info/ko.md': () =>
              r(() => import('./ko-CRMKIGv3.js'), [], import.meta.url),
            '/src/games/Diamonds/info/lt.md': () =>
              r(() => import('./lt-DhVwh7Op.js'), [], import.meta.url),
            '/src/games/Diamonds/info/lv.md': () =>
              r(() => import('./lv-D3SqR5Hb.js'), [], import.meta.url),
            '/src/games/Diamonds/info/ms.md': () =>
              r(() => import('./ms-CKve-gVc.js'), [], import.meta.url),
            '/src/games/Diamonds/info/nl.md': () =>
              r(() => import('./nl-BvP2kVaa.js'), [], import.meta.url),
            '/src/games/Diamonds/info/no.md': () =>
              r(() => import('./no-CG5lfX8_.js'), [], import.meta.url),
            '/src/games/Diamonds/info/pl.md': () =>
              r(() => import('./pl-BZ7piZuB.js'), [], import.meta.url),
            '/src/games/Diamonds/info/pt-br.md': () =>
              r(() => import('./pt-br-6VHnZJAL.js'), [], import.meta.url),
            '/src/games/Diamonds/info/pt.md': () =>
              r(() => import('./pt-CumNg2ci.js'), [], import.meta.url),
            '/src/games/Diamonds/info/ro.md': () =>
              r(() => import('./ro-Cg0PsoL4.js'), [], import.meta.url),
            '/src/games/Diamonds/info/ru.md': () =>
              r(() => import('./ru--TM_Uzru.js'), [], import.meta.url),
            '/src/games/Diamonds/info/sk.md': () =>
              r(() => import('./sk-wLslhMNx.js'), [], import.meta.url),
            '/src/games/Diamonds/info/sv.md': () =>
              r(() => import('./sv-CAxkZ9HG.js'), [], import.meta.url),
            '/src/games/Diamonds/info/th.md': () =>
              r(() => import('./th-DRMfpq8S.js'), [], import.meta.url),
            '/src/games/Diamonds/info/tr.md': () =>
              r(() => import('./tr-DvfKJZUf.js'), [], import.meta.url),
            '/src/games/Diamonds/info/uk.md': () =>
              r(() => import('./uk-DOUXqQH4.js'), [], import.meta.url),
            '/src/games/Diamonds/info/vi.md': () =>
              r(() => import('./vi-DkJG606T.js'), [], import.meta.url),
            '/src/games/Diamonds/info/zh-hant.md': () =>
              r(() => import('./zh-hant-B7a7Rbme.js'), [], import.meta.url),
            '/src/games/Diamonds/info/zh.md': () =>
              r(() => import('./zh-CP5nUpkW.js'), [], import.meta.url),
            '/src/games/Dice/info/bg.md': () =>
              r(() => import('./bg-vVukXRDu.js'), [], import.meta.url),
            '/src/games/Dice/info/bn.md': () =>
              r(() => import('./bn-CMy64xUK.js'), [], import.meta.url),
            '/src/games/Dice/info/cs.md': () =>
              r(() => import('./cs-CC5_CGdH.js'), [], import.meta.url),
            '/src/games/Dice/info/da.md': () =>
              r(() => import('./da-DkoInb9V.js'), [], import.meta.url),
            '/src/games/Dice/info/de.md': () =>
              r(() => import('./de-F-TRB1Kg.js'), [], import.meta.url),
            '/src/games/Dice/info/el.md': () =>
              r(() => import('./el-DX2Z4OFL.js'), [], import.meta.url),
            '/src/games/Dice/info/en-sc.md': () =>
              r(() => import('./en-sc-BB7ULc-Q.js'), [], import.meta.url),
            '/src/games/Dice/info/en.md': () =>
              r(() => import('./en-BdfyXTjn.js'), [], import.meta.url),
            '/src/games/Dice/info/es.md': () =>
              r(() => import('./es-lhKjgDAO.js'), [], import.meta.url),
            '/src/games/Dice/info/et.md': () =>
              r(() => import('./et-vILm4vH-.js'), [], import.meta.url),
            '/src/games/Dice/info/fi.md': () =>
              r(() => import('./fi-BaRBDRFp.js'), [], import.meta.url),
            '/src/games/Dice/info/fr.md': () =>
              r(() => import('./fr-DT6EMZ52.js'), [], import.meta.url),
            '/src/games/Dice/info/hr.md': () =>
              r(() => import('./hr-ChNLBAnS.js'), [], import.meta.url),
            '/src/games/Dice/info/hu.md': () =>
              r(() => import('./hu-BvbZQCSy.js'), [], import.meta.url),
            '/src/games/Dice/info/id.md': () =>
              r(() => import('./id-DYt0B0Df.js'), [], import.meta.url),
            '/src/games/Dice/info/it.md': () =>
              r(() => import('./it-Coz5EHIm.js'), [], import.meta.url),
            '/src/games/Dice/info/ja.md': () =>
              r(() => import('./ja-K4rlNVl3.js'), [], import.meta.url),
            '/src/games/Dice/info/ka.md': () =>
              r(() => import('./ka-DbLjjQl_.js'), [], import.meta.url),
            '/src/games/Dice/info/km.md': () =>
              r(() => import('./km-CYIQHnv3.js'), [], import.meta.url),
            '/src/games/Dice/info/ko.md': () =>
              r(() => import('./ko-CzFVNn5M.js'), [], import.meta.url),
            '/src/games/Dice/info/lt.md': () =>
              r(() => import('./lt-Qyn8_14C.js'), [], import.meta.url),
            '/src/games/Dice/info/lv.md': () =>
              r(() => import('./lv-CF_-hW9Y.js'), [], import.meta.url),
            '/src/games/Dice/info/ms.md': () =>
              r(() => import('./ms-6gZmip1h.js'), [], import.meta.url),
            '/src/games/Dice/info/nl.md': () =>
              r(() => import('./nl-juhbSjjP.js'), [], import.meta.url),
            '/src/games/Dice/info/no.md': () =>
              r(() => import('./no-BUv74Qnu.js'), [], import.meta.url),
            '/src/games/Dice/info/pl.md': () =>
              r(() => import('./pl-BfW4edA7.js'), [], import.meta.url),
            '/src/games/Dice/info/pt-br.md': () =>
              r(() => import('./pt-br-CALTEKP2.js'), [], import.meta.url),
            '/src/games/Dice/info/pt.md': () =>
              r(() => import('./pt-0avjgQFd.js'), [], import.meta.url),
            '/src/games/Dice/info/ro.md': () =>
              r(() => import('./ro-BRz7MWip.js'), [], import.meta.url),
            '/src/games/Dice/info/ru.md': () =>
              r(() => import('./ru-Cm9Tt5ly.js'), [], import.meta.url),
            '/src/games/Dice/info/sk.md': () =>
              r(() => import('./sk-C6FDfQa4.js'), [], import.meta.url),
            '/src/games/Dice/info/sv.md': () =>
              r(() => import('./sv-BiTOp9AM.js'), [], import.meta.url),
            '/src/games/Dice/info/th.md': () =>
              r(() => import('./th-DdmFDuck.js'), [], import.meta.url),
            '/src/games/Dice/info/tr.md': () =>
              r(() => import('./tr-CNoI1vnG.js'), [], import.meta.url),
            '/src/games/Dice/info/uk.md': () =>
              r(() => import('./uk-C_d7vau2.js'), [], import.meta.url),
            '/src/games/Dice/info/vi.md': () =>
              r(() => import('./vi-E5iXMHiU.js'), [], import.meta.url),
            '/src/games/Dice/info/zh-hant.md': () =>
              r(() => import('./zh-hant-C-NvhL4w.js'), [], import.meta.url),
            '/src/games/Dice/info/zh.md': () =>
              r(() => import('./zh-RoWSE86h.js'), [], import.meta.url),
            '/src/games/Dragonstower/info/bg.md': () =>
              r(() => import('./bg-Cto_t2dq.js'), [], import.meta.url),
            '/src/games/Dragonstower/info/bn.md': () =>
              r(() => import('./bn-CS3GdkLg.js'), [], import.meta.url),
            '/src/games/Dragonstower/info/cs.md': () =>
              r(() => import('./cs-93w5P5pE.js'), [], import.meta.url),
            '/src/games/Dragonstower/info/da.md': () =>
              r(() => import('./da-DIrMslLK.js'), [], import.meta.url),
            '/src/games/Dragonstower/info/de.md': () =>
              r(() => import('./de-XyEvoeiB.js'), [], import.meta.url),
            '/src/games/Dragonstower/info/el.md': () =>
              r(() => import('./el-DKQfDkZ4.js'), [], import.meta.url),
            '/src/games/Dragonstower/info/en-sc.md': () =>
              r(() => import('./en-sc-B0NAW6ji.js'), [], import.meta.url),
            '/src/games/Dragonstower/info/en.md': () =>
              r(() => import('./en-BUtnILX_.js'), [], import.meta.url),
            '/src/games/Dragonstower/info/es.md': () =>
              r(() => import('./es-BxQlbeCY.js'), [], import.meta.url),
            '/src/games/Dragonstower/info/et.md': () =>
              r(() => import('./et-CTA3Y_Yz.js'), [], import.meta.url),
            '/src/games/Dragonstower/info/fi.md': () =>
              r(() => import('./fi-53-by504.js'), [], import.meta.url),
            '/src/games/Dragonstower/info/fr.md': () =>
              r(() => import('./fr-7EY-1_V6.js'), [], import.meta.url),
            '/src/games/Dragonstower/info/hr.md': () =>
              r(() => import('./hr-KYFma8KA.js'), [], import.meta.url),
            '/src/games/Dragonstower/info/hu.md': () =>
              r(() => import('./hu-BcAR_gWk.js'), [], import.meta.url),
            '/src/games/Dragonstower/info/id.md': () =>
              r(() => import('./id-CM05gMWS.js'), [], import.meta.url),
            '/src/games/Dragonstower/info/it.md': () =>
              r(() => import('./it-CiUhU92O.js'), [], import.meta.url),
            '/src/games/Dragonstower/info/ja.md': () =>
              r(() => import('./ja-CNgL7eXe.js'), [], import.meta.url),
            '/src/games/Dragonstower/info/ka.md': () =>
              r(() => import('./ka-D-zupwS4.js'), [], import.meta.url),
            '/src/games/Dragonstower/info/km.md': () =>
              r(() => import('./km-CQU2W2_1.js'), [], import.meta.url),
            '/src/games/Dragonstower/info/ko.md': () =>
              r(() => import('./ko-lJrRc8n1.js'), [], import.meta.url),
            '/src/games/Dragonstower/info/lt.md': () =>
              r(() => import('./lt-CbJzDeqL.js'), [], import.meta.url),
            '/src/games/Dragonstower/info/lv.md': () =>
              r(() => import('./lv-BH-QgXKp.js'), [], import.meta.url),
            '/src/games/Dragonstower/info/ms.md': () =>
              r(() => import('./ms-ncBlFFGH.js'), [], import.meta.url),
            '/src/games/Dragonstower/info/nl.md': () =>
              r(() => import('./nl-DljV8WCS.js'), [], import.meta.url),
            '/src/games/Dragonstower/info/no.md': () =>
              r(() => import('./no-Qw8gMBD8.js'), [], import.meta.url),
            '/src/games/Dragonstower/info/pl.md': () =>
              r(() => import('./pl-B2-ABiWg.js'), [], import.meta.url),
            '/src/games/Dragonstower/info/pt-br.md': () =>
              r(() => import('./pt-br-DQRtur9j.js'), [], import.meta.url),
            '/src/games/Dragonstower/info/pt.md': () =>
              r(() => import('./pt-BTugsUAA.js'), [], import.meta.url),
            '/src/games/Dragonstower/info/ro.md': () =>
              r(() => import('./ro-D7bC_iFO.js'), [], import.meta.url),
            '/src/games/Dragonstower/info/ru.md': () =>
              r(() => import('./ru-BKcWX8KH.js'), [], import.meta.url),
            '/src/games/Dragonstower/info/sk.md': () =>
              r(() => import('./sk-DVFdE5A4.js'), [], import.meta.url),
            '/src/games/Dragonstower/info/sv.md': () =>
              r(() => import('./sv-DFna8qRU.js'), [], import.meta.url),
            '/src/games/Dragonstower/info/th.md': () =>
              r(() => import('./th-B3dMYi6K.js'), [], import.meta.url),
            '/src/games/Dragonstower/info/tr.md': () =>
              r(() => import('./tr-ChgfEEa6.js'), [], import.meta.url),
            '/src/games/Dragonstower/info/uk.md': () =>
              r(() => import('./uk-oI1kANdG.js'), [], import.meta.url),
            '/src/games/Dragonstower/info/vi.md': () =>
              r(() => import('./vi-m9MpVnZx.js'), [], import.meta.url),
            '/src/games/Dragonstower/info/zh-hant.md': () =>
              r(() => import('./zh-hant-Dz89DI91.js'), [], import.meta.url),
            '/src/games/Dragonstower/info/zh.md': () =>
              r(() => import('./zh-Ct6_1YEK.js'), [], import.meta.url),
            '/src/games/Hilo/info/bg.md': () =>
              r(() => import('./bg-Cl_NDcqY.js'), [], import.meta.url),
            '/src/games/Hilo/info/bn.md': () =>
              r(() => import('./bn-h87TSc1u.js'), [], import.meta.url),
            '/src/games/Hilo/info/cs.md': () =>
              r(() => import('./cs-CAOTxl_I.js'), [], import.meta.url),
            '/src/games/Hilo/info/da.md': () =>
              r(() => import('./da-CotlnAbG.js'), [], import.meta.url),
            '/src/games/Hilo/info/de.md': () =>
              r(() => import('./de-NoP077Vm.js'), [], import.meta.url),
            '/src/games/Hilo/info/el.md': () =>
              r(() => import('./el-BS1D_311.js'), [], import.meta.url),
            '/src/games/Hilo/info/en-sc.md': () =>
              r(() => import('./en-sc-eJrQ_UQ6.js'), [], import.meta.url),
            '/src/games/Hilo/info/en.md': () =>
              r(() => import('./en-Dl6BHjNh.js'), [], import.meta.url),
            '/src/games/Hilo/info/es.md': () =>
              r(() => import('./es-CFTg20RE.js'), [], import.meta.url),
            '/src/games/Hilo/info/et.md': () =>
              r(() => import('./et-SZptG5sv.js'), [], import.meta.url),
            '/src/games/Hilo/info/fi.md': () =>
              r(() => import('./fi-boHjeYFG.js'), [], import.meta.url),
            '/src/games/Hilo/info/fr.md': () =>
              r(() => import('./fr-DHSpPIk5.js'), [], import.meta.url),
            '/src/games/Hilo/info/hr.md': () =>
              r(() => import('./hr-C5gNZxv6.js'), [], import.meta.url),
            '/src/games/Hilo/info/hu.md': () =>
              r(() => import('./hu-CAhYvgtu.js'), [], import.meta.url),
            '/src/games/Hilo/info/id.md': () =>
              r(() => import('./id-gHjk8cDd.js'), [], import.meta.url),
            '/src/games/Hilo/info/it.md': () =>
              r(() => import('./it-C8zURlDo.js'), [], import.meta.url),
            '/src/games/Hilo/info/ja.md': () =>
              r(() => import('./ja-DTgzhH02.js'), [], import.meta.url),
            '/src/games/Hilo/info/ka.md': () =>
              r(() => import('./ka-BQqCTHjg.js'), [], import.meta.url),
            '/src/games/Hilo/info/km.md': () =>
              r(() => import('./km-CXW7uXVn.js'), [], import.meta.url),
            '/src/games/Hilo/info/ko.md': () =>
              r(() => import('./ko-BuCivgKE.js'), [], import.meta.url),
            '/src/games/Hilo/info/lt.md': () =>
              r(() => import('./lt-DuYcptTi.js'), [], import.meta.url),
            '/src/games/Hilo/info/lv.md': () =>
              r(() => import('./lv-Cr0p2tN_.js'), [], import.meta.url),
            '/src/games/Hilo/info/ms.md': () =>
              r(() => import('./ms-D8uwtf-P.js'), [], import.meta.url),
            '/src/games/Hilo/info/nl.md': () =>
              r(() => import('./nl-D9FLK-7U.js'), [], import.meta.url),
            '/src/games/Hilo/info/no.md': () =>
              r(() => import('./no-ChX95UC6.js'), [], import.meta.url),
            '/src/games/Hilo/info/pl.md': () =>
              r(() => import('./pl-CJiO4imx.js'), [], import.meta.url),
            '/src/games/Hilo/info/pt-br.md': () =>
              r(() => import('./pt-br-BBhvQeAy.js'), [], import.meta.url),
            '/src/games/Hilo/info/pt.md': () =>
              r(() => import('./pt-CmGJWVX_.js'), [], import.meta.url),
            '/src/games/Hilo/info/ro.md': () =>
              r(() => import('./ro-BhevvZw7.js'), [], import.meta.url),
            '/src/games/Hilo/info/ru.md': () =>
              r(() => import('./ru-DB8fV641.js'), [], import.meta.url),
            '/src/games/Hilo/info/sk.md': () =>
              r(() => import('./sk-D46SnMGo.js'), [], import.meta.url),
            '/src/games/Hilo/info/sv.md': () =>
              r(() => import('./sv-BlD9bA0p.js'), [], import.meta.url),
            '/src/games/Hilo/info/th.md': () =>
              r(() => import('./th-BUeDj3Le.js'), [], import.meta.url),
            '/src/games/Hilo/info/tr.md': () =>
              r(() => import('./tr-DvPnI5Iq.js'), [], import.meta.url),
            '/src/games/Hilo/info/uk.md': () =>
              r(() => import('./uk-DeXq0RNZ.js'), [], import.meta.url),
            '/src/games/Hilo/info/vi.md': () =>
              r(() => import('./vi-DKiBpoOZ.js'), [], import.meta.url),
            '/src/games/Hilo/info/zh-hant.md': () =>
              r(() => import('./zh-hant-DZzrpbUp.js'), [], import.meta.url),
            '/src/games/Hilo/info/zh.md': () =>
              r(() => import('./zh-C83aTyUH.js'), [], import.meta.url),
            '/src/games/Keno/info/bg.md': () =>
              r(() => import('./bg-Dgb2aBFT.js'), [], import.meta.url),
            '/src/games/Keno/info/bn.md': () =>
              r(() => import('./bn-E8JV64BE.js'), [], import.meta.url),
            '/src/games/Keno/info/cs.md': () =>
              r(() => import('./cs-BVDpMZdE.js'), [], import.meta.url),
            '/src/games/Keno/info/da.md': () =>
              r(() => import('./da-C9LclTMu.js'), [], import.meta.url),
            '/src/games/Keno/info/de.md': () =>
              r(() => import('./de-CrwUK1Di.js'), [], import.meta.url),
            '/src/games/Keno/info/el.md': () =>
              r(() => import('./el-CGvnGrBs.js'), [], import.meta.url),
            '/src/games/Keno/info/en-sc.md': () =>
              r(() => import('./en-sc-ufESPo9e.js'), [], import.meta.url),
            '/src/games/Keno/info/en.md': () =>
              r(() => import('./en-CrFiBXAC.js'), [], import.meta.url),
            '/src/games/Keno/info/es.md': () =>
              r(() => import('./es-DT0WwO-L.js'), [], import.meta.url),
            '/src/games/Keno/info/et.md': () =>
              r(() => import('./et-B9TSwRlE.js'), [], import.meta.url),
            '/src/games/Keno/info/fi.md': () =>
              r(() => import('./fi-B_zrYNTN.js'), [], import.meta.url),
            '/src/games/Keno/info/fr.md': () =>
              r(() => import('./fr-Cv_3jLdV.js'), [], import.meta.url),
            '/src/games/Keno/info/hr.md': () =>
              r(() => import('./hr-BVHn_pdm.js'), [], import.meta.url),
            '/src/games/Keno/info/hu.md': () =>
              r(() => import('./hu-DICWdZGc.js'), [], import.meta.url),
            '/src/games/Keno/info/id.md': () =>
              r(() => import('./id-L-5QcFrp.js'), [], import.meta.url),
            '/src/games/Keno/info/it.md': () =>
              r(() => import('./it-DGsrCobG.js'), [], import.meta.url),
            '/src/games/Keno/info/ja.md': () =>
              r(() => import('./ja-DIzGXwx7.js'), [], import.meta.url),
            '/src/games/Keno/info/ka.md': () =>
              r(() => import('./ka-BFnT2JTA.js'), [], import.meta.url),
            '/src/games/Keno/info/km.md': () =>
              r(() => import('./km-DUQxWpt4.js'), [], import.meta.url),
            '/src/games/Keno/info/ko.md': () =>
              r(() => import('./ko-C0-x5fK3.js'), [], import.meta.url),
            '/src/games/Keno/info/lt.md': () =>
              r(() => import('./lt-A6rlcwHM.js'), [], import.meta.url),
            '/src/games/Keno/info/lv.md': () =>
              r(() => import('./lv-Bqzwcgdb.js'), [], import.meta.url),
            '/src/games/Keno/info/ms.md': () =>
              r(() => import('./ms-eFPYIj8d.js'), [], import.meta.url),
            '/src/games/Keno/info/nl.md': () =>
              r(() => import('./nl-UeD-GJUE.js'), [], import.meta.url),
            '/src/games/Keno/info/no.md': () =>
              r(() => import('./no-B4gMIMLM.js'), [], import.meta.url),
            '/src/games/Keno/info/pl.md': () =>
              r(() => import('./pl-Dfu00if_.js'), [], import.meta.url),
            '/src/games/Keno/info/pt-br.md': () =>
              r(() => import('./pt-br-DXFWC23S.js'), [], import.meta.url),
            '/src/games/Keno/info/pt.md': () =>
              r(() => import('./pt-DTQAjDuT.js'), [], import.meta.url),
            '/src/games/Keno/info/ro.md': () =>
              r(() => import('./ro-CzLn4_FC.js'), [], import.meta.url),
            '/src/games/Keno/info/ru.md': () =>
              r(() => import('./ru-C0bPZr_L.js'), [], import.meta.url),
            '/src/games/Keno/info/sk.md': () =>
              r(() => import('./sk-9FZIKXOg.js'), [], import.meta.url),
            '/src/games/Keno/info/sv.md': () =>
              r(() => import('./sv-BrYDxc29.js'), [], import.meta.url),
            '/src/games/Keno/info/th.md': () =>
              r(() => import('./th-D7xE7wWr.js'), [], import.meta.url),
            '/src/games/Keno/info/tr.md': () =>
              r(() => import('./tr-DxthS7o2.js'), [], import.meta.url),
            '/src/games/Keno/info/uk.md': () =>
              r(() => import('./uk-BcnNQ-Ub.js'), [], import.meta.url),
            '/src/games/Keno/info/vi.md': () =>
              r(() => import('./vi-CNDm03M-.js'), [], import.meta.url),
            '/src/games/Keno/info/zh-hant.md': () =>
              r(() => import('./zh-hant-XJGZyAly.js'), [], import.meta.url),
            '/src/games/Keno/info/zh.md': () =>
              r(() => import('./zh-3X9Vbfcu.js'), [], import.meta.url),
            '/src/games/Limbo/info/bg.md': () =>
              r(() => import('./bg-CrUuNIKs.js'), [], import.meta.url),
            '/src/games/Limbo/info/bn.md': () =>
              r(() => import('./bn-tsGue7TT.js'), [], import.meta.url),
            '/src/games/Limbo/info/cs.md': () =>
              r(() => import('./cs-3mXMAlQp.js'), [], import.meta.url),
            '/src/games/Limbo/info/da.md': () =>
              r(() => import('./da-B8seww9I.js'), [], import.meta.url),
            '/src/games/Limbo/info/de.md': () =>
              r(() => import('./de-S2UY8IF4.js'), [], import.meta.url),
            '/src/games/Limbo/info/el.md': () =>
              r(() => import('./el-BT2qRfoy.js'), [], import.meta.url),
            '/src/games/Limbo/info/en-sc.md': () =>
              r(() => import('./en-sc-D8hrWtcd.js'), [], import.meta.url),
            '/src/games/Limbo/info/en.md': () =>
              r(() => import('./en-DnMt8yuG.js'), [], import.meta.url),
            '/src/games/Limbo/info/es.md': () =>
              r(() => import('./es-CyIdJHpY.js'), [], import.meta.url),
            '/src/games/Limbo/info/et.md': () =>
              r(() => import('./et-muWNfRew.js'), [], import.meta.url),
            '/src/games/Limbo/info/fi.md': () =>
              r(() => import('./fi-C_2XMB56.js'), [], import.meta.url),
            '/src/games/Limbo/info/fr.md': () =>
              r(() => import('./fr-0CuZpw3C.js'), [], import.meta.url),
            '/src/games/Limbo/info/hr.md': () =>
              r(() => import('./hr-BOeLmM6g.js'), [], import.meta.url),
            '/src/games/Limbo/info/hu.md': () =>
              r(() => import('./hu-BQC9Nw8u.js'), [], import.meta.url),
            '/src/games/Limbo/info/id.md': () =>
              r(() => import('./id-Byp7uqZP.js'), [], import.meta.url),
            '/src/games/Limbo/info/it.md': () =>
              r(() => import('./it-B2Hhs-d7.js'), [], import.meta.url),
            '/src/games/Limbo/info/ja.md': () =>
              r(() => import('./ja-CixVVYJh.js'), [], import.meta.url),
            '/src/games/Limbo/info/ka.md': () =>
              r(() => import('./ka-DS5tg8YP.js'), [], import.meta.url),
            '/src/games/Limbo/info/km.md': () =>
              r(() => import('./km-D3K1TG2_.js'), [], import.meta.url),
            '/src/games/Limbo/info/ko.md': () =>
              r(() => import('./ko-iMR5x-x3.js'), [], import.meta.url),
            '/src/games/Limbo/info/lt.md': () =>
              r(() => import('./lt-BF5iG_B4.js'), [], import.meta.url),
            '/src/games/Limbo/info/lv.md': () =>
              r(() => import('./lv-Ehsw7EG1.js'), [], import.meta.url),
            '/src/games/Limbo/info/ms.md': () =>
              r(() => import('./ms-CEHUz3Ry.js'), [], import.meta.url),
            '/src/games/Limbo/info/nl.md': () =>
              r(() => import('./nl-DnpRdF_F.js'), [], import.meta.url),
            '/src/games/Limbo/info/no.md': () =>
              r(() => import('./no-0pBjg89G.js'), [], import.meta.url),
            '/src/games/Limbo/info/pl.md': () =>
              r(() => import('./pl-CtTN0pwu.js'), [], import.meta.url),
            '/src/games/Limbo/info/pt-br.md': () =>
              r(() => import('./pt-br-Lgwd38YP.js'), [], import.meta.url),
            '/src/games/Limbo/info/pt.md': () =>
              r(() => import('./pt-D3D5zdqb.js'), [], import.meta.url),
            '/src/games/Limbo/info/ro.md': () =>
              r(() => import('./ro-jLzE_9pO.js'), [], import.meta.url),
            '/src/games/Limbo/info/ru.md': () =>
              r(() => import('./ru-DkRuTiu-.js'), [], import.meta.url),
            '/src/games/Limbo/info/sk.md': () =>
              r(() => import('./sk-D5heDD8T.js'), [], import.meta.url),
            '/src/games/Limbo/info/sv.md': () =>
              r(() => import('./sv-Blkw2zOb.js'), [], import.meta.url),
            '/src/games/Limbo/info/th.md': () =>
              r(() => import('./th-D0gCcpj_.js'), [], import.meta.url),
            '/src/games/Limbo/info/tr.md': () =>
              r(() => import('./tr-Cy6urDLK.js'), [], import.meta.url),
            '/src/games/Limbo/info/uk.md': () =>
              r(() => import('./uk-DUmOLeyU.js'), [], import.meta.url),
            '/src/games/Limbo/info/vi.md': () =>
              r(() => import('./vi-CDSVwNtr.js'), [], import.meta.url),
            '/src/games/Limbo/info/zh-hant.md': () =>
              r(() => import('./zh-hant-C2akdWu5.js'), [], import.meta.url),
            '/src/games/Limbo/info/zh.md': () =>
              r(() => import('./zh-fDSnia3g.js'), [], import.meta.url),
            '/src/games/Mines/info/bg.md': () =>
              r(() => import('./bg-CpY6Uv96.js'), [], import.meta.url),
            '/src/games/Mines/info/bn.md': () =>
              r(() => import('./bn-C0YrGAJB.js'), [], import.meta.url),
            '/src/games/Mines/info/cs.md': () =>
              r(() => import('./cs-koFxZg88.js'), [], import.meta.url),
            '/src/games/Mines/info/da.md': () =>
              r(() => import('./da-p5Bt7HiK.js'), [], import.meta.url),
            '/src/games/Mines/info/de.md': () =>
              r(() => import('./de-BbchGvd9.js'), [], import.meta.url),
            '/src/games/Mines/info/el.md': () =>
              r(() => import('./el-S2bnkK6g.js'), [], import.meta.url),
            '/src/games/Mines/info/en-sc.md': () =>
              r(() => import('./en-sc-DHavR6fu.js'), [], import.meta.url),
            '/src/games/Mines/info/en.md': () =>
              r(() => import('./en-Cgf3k0KO.js'), [], import.meta.url),
            '/src/games/Mines/info/es.md': () =>
              r(() => import('./es-DuGB5OOo.js'), [], import.meta.url),
            '/src/games/Mines/info/et.md': () =>
              r(() => import('./et-B5OJxLAb.js'), [], import.meta.url),
            '/src/games/Mines/info/fi.md': () =>
              r(() => import('./fi-Bz-bpD6r.js'), [], import.meta.url),
            '/src/games/Mines/info/fr.md': () =>
              r(() => import('./fr-BM1ioU0e.js'), [], import.meta.url),
            '/src/games/Mines/info/hr.md': () =>
              r(() => import('./hr-B15bKtBB.js'), [], import.meta.url),
            '/src/games/Mines/info/hu.md': () =>
              r(() => import('./hu-BYt65EZc.js'), [], import.meta.url),
            '/src/games/Mines/info/id.md': () =>
              r(() => import('./id-CB3TIeq9.js'), [], import.meta.url),
            '/src/games/Mines/info/it.md': () =>
              r(() => import('./it-CGkEt1EL.js'), [], import.meta.url),
            '/src/games/Mines/info/ja.md': () =>
              r(() => import('./ja-BIKnxZEx.js'), [], import.meta.url),
            '/src/games/Mines/info/ka.md': () =>
              r(() => import('./ka-DOYTRqlm.js'), [], import.meta.url),
            '/src/games/Mines/info/km.md': () =>
              r(() => import('./km-BQYtk2RR.js'), [], import.meta.url),
            '/src/games/Mines/info/ko.md': () =>
              r(() => import('./ko-CLck_Uf_.js'), [], import.meta.url),
            '/src/games/Mines/info/lt.md': () =>
              r(() => import('./lt-D_aoh87_.js'), [], import.meta.url),
            '/src/games/Mines/info/lv.md': () =>
              r(() => import('./lv-BV1VZlRT.js'), [], import.meta.url),
            '/src/games/Mines/info/ms.md': () =>
              r(() => import('./ms-BfkcBxGN.js'), [], import.meta.url),
            '/src/games/Mines/info/nl.md': () =>
              r(() => import('./nl-m8w_N1Wo.js'), [], import.meta.url),
            '/src/games/Mines/info/no.md': () =>
              r(() => import('./no-CphCtW8B.js'), [], import.meta.url),
            '/src/games/Mines/info/pl.md': () =>
              r(() => import('./pl-DJkH8gPO.js'), [], import.meta.url),
            '/src/games/Mines/info/pt-br.md': () =>
              r(() => import('./pt-br-9Me7MXHX.js'), [], import.meta.url),
            '/src/games/Mines/info/pt.md': () =>
              r(() => import('./pt-Bmmp_7r_.js'), [], import.meta.url),
            '/src/games/Mines/info/ro.md': () =>
              r(() => import('./ro-Pj-o8Gge.js'), [], import.meta.url),
            '/src/games/Mines/info/ru.md': () =>
              r(() => import('./ru-CNOvHOoF.js'), [], import.meta.url),
            '/src/games/Mines/info/sk.md': () =>
              r(() => import('./sk-CspWH7qy.js'), [], import.meta.url),
            '/src/games/Mines/info/sv.md': () =>
              r(() => import('./sv-DIAikNJH.js'), [], import.meta.url),
            '/src/games/Mines/info/th.md': () =>
              r(() => import('./th-CCuaYUkg.js'), [], import.meta.url),
            '/src/games/Mines/info/tr.md': () =>
              r(() => import('./tr-CqYUkGiP.js'), [], import.meta.url),
            '/src/games/Mines/info/uk.md': () =>
              r(() => import('./uk-Btn8TdUa.js'), [], import.meta.url),
            '/src/games/Mines/info/vi.md': () =>
              r(() => import('./vi-BoND_qPg.js'), [], import.meta.url),
            '/src/games/Mines/info/zh-hant.md': () =>
              r(() => import('./zh-hant-Y5vBrxor.js'), [], import.meta.url),
            '/src/games/Mines/info/zh.md': () =>
              r(() => import('./zh-BaoE-UkL.js'), [], import.meta.url),
            '/src/games/Plinko/info/bg.md': () =>
              r(() => import('./bg-vLHfWsS7.js'), [], import.meta.url),
            '/src/games/Plinko/info/bn.md': () =>
              r(() => import('./bn-iAjQspX1.js'), [], import.meta.url),
            '/src/games/Plinko/info/cs.md': () =>
              r(() => import('./cs-BNM-qHCC.js'), [], import.meta.url),
            '/src/games/Plinko/info/da.md': () =>
              r(() => import('./da-B86FvrFX.js'), [], import.meta.url),
            '/src/games/Plinko/info/de.md': () =>
              r(() => import('./de-C9u4ZPFf.js'), [], import.meta.url),
            '/src/games/Plinko/info/el.md': () =>
              r(() => import('./el-B6uh0-3d.js'), [], import.meta.url),
            '/src/games/Plinko/info/en-sc.md': () =>
              r(() => import('./en-sc-DhKDdqMq.js'), [], import.meta.url),
            '/src/games/Plinko/info/en.md': () =>
              r(() => import('./en-DdpjEkr8.js'), [], import.meta.url),
            '/src/games/Plinko/info/es.md': () =>
              r(() => import('./es-BDTTB5Lr.js'), [], import.meta.url),
            '/src/games/Plinko/info/et.md': () =>
              r(() => import('./et-zf4NKj1R.js'), [], import.meta.url),
            '/src/games/Plinko/info/fi.md': () =>
              r(() => import('./fi-B-9kfJr0.js'), [], import.meta.url),
            '/src/games/Plinko/info/fr.md': () =>
              r(() => import('./fr-CqPz6xwF.js'), [], import.meta.url),
            '/src/games/Plinko/info/hr.md': () =>
              r(() => import('./hr-Dp7edAIy.js'), [], import.meta.url),
            '/src/games/Plinko/info/hu.md': () =>
              r(() => import('./hu-C7E2eTVM.js'), [], import.meta.url),
            '/src/games/Plinko/info/id.md': () =>
              r(() => import('./id-BRc9v-0s.js'), [], import.meta.url),
            '/src/games/Plinko/info/it.md': () =>
              r(() => import('./it-C2_Nu9G8.js'), [], import.meta.url),
            '/src/games/Plinko/info/ja.md': () =>
              r(() => import('./ja-BC6BBbgo.js'), [], import.meta.url),
            '/src/games/Plinko/info/ka.md': () =>
              r(() => import('./ka-Cts0OPNF.js'), [], import.meta.url),
            '/src/games/Plinko/info/km.md': () =>
              r(() => import('./km-C8AdcRow.js'), [], import.meta.url),
            '/src/games/Plinko/info/ko.md': () =>
              r(() => import('./ko-CFAMbeWz.js'), [], import.meta.url),
            '/src/games/Plinko/info/lt.md': () =>
              r(() => import('./lt-DblIHkk1.js'), [], import.meta.url),
            '/src/games/Plinko/info/lv.md': () =>
              r(() => import('./lv-BeIcqhl7.js'), [], import.meta.url),
            '/src/games/Plinko/info/ms.md': () =>
              r(() => import('./ms-D4ha0-kL.js'), [], import.meta.url),
            '/src/games/Plinko/info/nl.md': () =>
              r(() => import('./nl-PiBjA5B7.js'), [], import.meta.url),
            '/src/games/Plinko/info/no.md': () =>
              r(() => import('./no-BhoUskSC.js'), [], import.meta.url),
            '/src/games/Plinko/info/pl.md': () =>
              r(() => import('./pl-oruZ5ok4.js'), [], import.meta.url),
            '/src/games/Plinko/info/pt-br.md': () =>
              r(() => import('./pt-br-3LHeE42F.js'), [], import.meta.url),
            '/src/games/Plinko/info/pt.md': () =>
              r(() => import('./pt-JdWFz5iy.js'), [], import.meta.url),
            '/src/games/Plinko/info/ro.md': () =>
              r(() => import('./ro-C9EeCMu7.js'), [], import.meta.url),
            '/src/games/Plinko/info/ru.md': () =>
              r(() => import('./ru-BhirHFkZ.js'), [], import.meta.url),
            '/src/games/Plinko/info/sk.md': () =>
              r(() => import('./sk-BWBf2B1i.js'), [], import.meta.url),
            '/src/games/Plinko/info/sv.md': () =>
              r(() => import('./sv-BfQa3Jf1.js'), [], import.meta.url),
            '/src/games/Plinko/info/th.md': () =>
              r(() => import('./th-Dg5D_d_Q.js'), [], import.meta.url),
            '/src/games/Plinko/info/tr.md': () =>
              r(() => import('./tr-5nKZN9gr.js'), [], import.meta.url),
            '/src/games/Plinko/info/uk.md': () =>
              r(() => import('./uk-Db6D0A_j.js'), [], import.meta.url),
            '/src/games/Plinko/info/vi.md': () =>
              r(() => import('./vi-B1vVegSS.js'), [], import.meta.url),
            '/src/games/Plinko/info/zh-hant.md': () =>
              r(() => import('./zh-hant-DfoHfN0F.js'), [], import.meta.url),
            '/src/games/Plinko/info/zh.md': () =>
              r(() => import('./zh-CeVQ2f_U.js'), [], import.meta.url),
            '/src/games/Videopoker/info/bg.md': () =>
              r(() => import('./bg-BhpnXx0O.js'), [], import.meta.url),
            '/src/games/Videopoker/info/bn.md': () =>
              r(() => import('./bn-CyrqJdH7.js'), [], import.meta.url),
            '/src/games/Videopoker/info/cs.md': () =>
              r(() => import('./cs-GsK2eF2A.js'), [], import.meta.url),
            '/src/games/Videopoker/info/da.md': () =>
              r(() => import('./da-DRzWHF3q.js'), [], import.meta.url),
            '/src/games/Videopoker/info/de.md': () =>
              r(() => import('./de-DoRQrCvj.js'), [], import.meta.url),
            '/src/games/Videopoker/info/el.md': () =>
              r(() => import('./el-BJVaHfIa.js'), [], import.meta.url),
            '/src/games/Videopoker/info/en-sc.md': () =>
              r(() => import('./en-sc-Dlw2R8__.js'), [], import.meta.url),
            '/src/games/Videopoker/info/en.md': () =>
              r(() => import('./en-CqlBd_9o.js'), [], import.meta.url),
            '/src/games/Videopoker/info/es.md': () =>
              r(() => import('./es-C1UQpd_Q.js'), [], import.meta.url),
            '/src/games/Videopoker/info/et.md': () =>
              r(() => import('./et-DyUHa9-D.js'), [], import.meta.url),
            '/src/games/Videopoker/info/fi.md': () =>
              r(() => import('./fi-Ct8ZeTlq.js'), [], import.meta.url),
            '/src/games/Videopoker/info/fr.md': () =>
              r(() => import('./fr-C3wWRjXJ.js'), [], import.meta.url),
            '/src/games/Videopoker/info/hr.md': () =>
              r(() => import('./hr-lfjnczmO.js'), [], import.meta.url),
            '/src/games/Videopoker/info/hu.md': () =>
              r(() => import('./hu-CMUjjBVz.js'), [], import.meta.url),
            '/src/games/Videopoker/info/id.md': () =>
              r(() => import('./id-HiyJGs6t.js'), [], import.meta.url),
            '/src/games/Videopoker/info/it.md': () =>
              r(() => import('./it-DC3jh84w.js'), [], import.meta.url),
            '/src/games/Videopoker/info/ja.md': () =>
              r(() => import('./ja-IIUjYTUD.js'), [], import.meta.url),
            '/src/games/Videopoker/info/ka.md': () =>
              r(() => import('./ka-BGEeYgef.js'), [], import.meta.url),
            '/src/games/Videopoker/info/km.md': () =>
              r(() => import('./km-DeUEwcoM.js'), [], import.meta.url),
            '/src/games/Videopoker/info/ko.md': () =>
              r(() => import('./ko-sD4Ir6ZJ.js'), [], import.meta.url),
            '/src/games/Videopoker/info/lt.md': () =>
              r(() => import('./lt-Dau2wNpf.js'), [], import.meta.url),
            '/src/games/Videopoker/info/lv.md': () =>
              r(() => import('./lv-BQJ2X9QR.js'), [], import.meta.url),
            '/src/games/Videopoker/info/ms.md': () =>
              r(() => import('./ms-DNqjDWM8.js'), [], import.meta.url),
            '/src/games/Videopoker/info/nl.md': () =>
              r(() => import('./nl-DTcv0vjy.js'), [], import.meta.url),
            '/src/games/Videopoker/info/no.md': () =>
              r(() => import('./no-CXW84c8I.js'), [], import.meta.url),
            '/src/games/Videopoker/info/pl.md': () =>
              r(() => import('./pl-CCCMmdil.js'), [], import.meta.url),
            '/src/games/Videopoker/info/pt-br.md': () =>
              r(() => import('./pt-br-CZkxHz1Y.js'), [], import.meta.url),
            '/src/games/Videopoker/info/pt.md': () =>
              r(() => import('./pt-D7AUSFE4.js'), [], import.meta.url),
            '/src/games/Videopoker/info/ro.md': () =>
              r(() => import('./ro-Bt3SYoaz.js'), [], import.meta.url),
            '/src/games/Videopoker/info/ru.md': () =>
              r(() => import('./ru-C9f2jP0k.js'), [], import.meta.url),
            '/src/games/Videopoker/info/sk.md': () =>
              r(() => import('./sk-CDRphgM4.js'), [], import.meta.url),
            '/src/games/Videopoker/info/sv.md': () =>
              r(() => import('./sv-BtT11_Pq.js'), [], import.meta.url),
            '/src/games/Videopoker/info/th.md': () =>
              r(() => import('./th-BDATTef1.js'), [], import.meta.url),
            '/src/games/Videopoker/info/tr.md': () =>
              r(() => import('./tr-CaprboK9.js'), [], import.meta.url),
            '/src/games/Videopoker/info/uk.md': () =>
              r(() => import('./uk-U8cQ0qbd.js'), [], import.meta.url),
            '/src/games/Videopoker/info/vi.md': () =>
              r(() => import('./vi-D91L-Kn5.js'), [], import.meta.url),
            '/src/games/Videopoker/info/zh-hant.md': () =>
              r(() => import('./zh-hant-Zv__QBcM.js'), [], import.meta.url),
            '/src/games/Videopoker/info/zh.md': () =>
              r(() => import('./zh-DAN5JjTQ.js'), [], import.meta.url),
            '/src/games/Wheel/info/bg.md': () =>
              r(() => import('./bg-BGyiEnN8.js'), [], import.meta.url),
            '/src/games/Wheel/info/bn.md': () =>
              r(() => import('./bn-CzSyGxdk.js'), [], import.meta.url),
            '/src/games/Wheel/info/cs.md': () =>
              r(() => import('./cs-Db5sgs_U.js'), [], import.meta.url),
            '/src/games/Wheel/info/da.md': () =>
              r(() => import('./da-rYrCRTzp.js'), [], import.meta.url),
            '/src/games/Wheel/info/de.md': () =>
              r(() => import('./de--Y27UYNr.js'), [], import.meta.url),
            '/src/games/Wheel/info/el.md': () =>
              r(() => import('./el-BF1Dw8dL.js'), [], import.meta.url),
            '/src/games/Wheel/info/en-sc.md': () =>
              r(() => import('./en-sc-BGOWQ4GB.js'), [], import.meta.url),
            '/src/games/Wheel/info/en.md': () =>
              r(() => import('./en-DLR9home.js'), [], import.meta.url),
            '/src/games/Wheel/info/es.md': () =>
              r(() => import('./es-DQcdhQHq.js'), [], import.meta.url),
            '/src/games/Wheel/info/et.md': () =>
              r(() => import('./et-Bz3j14ZT.js'), [], import.meta.url),
            '/src/games/Wheel/info/fi.md': () =>
              r(() => import('./fi-BIVnBkRb.js'), [], import.meta.url),
            '/src/games/Wheel/info/fr.md': () =>
              r(() => import('./fr-DAPhPMWl.js'), [], import.meta.url),
            '/src/games/Wheel/info/hr.md': () =>
              r(() => import('./hr-DTNhHx3A.js'), [], import.meta.url),
            '/src/games/Wheel/info/hu.md': () =>
              r(() => import('./hu-cU6tvzpa.js'), [], import.meta.url),
            '/src/games/Wheel/info/id.md': () =>
              r(() => import('./id-DxxeVzOg.js'), [], import.meta.url),
            '/src/games/Wheel/info/it.md': () =>
              r(() => import('./it-Ca0Vjs4V.js'), [], import.meta.url),
            '/src/games/Wheel/info/ja.md': () =>
              r(() => import('./ja-Cok2hWpo.js'), [], import.meta.url),
            '/src/games/Wheel/info/ka.md': () =>
              r(() => import('./ka-BPLKBRqY.js'), [], import.meta.url),
            '/src/games/Wheel/info/km.md': () =>
              r(() => import('./km-C41Xm3p9.js'), [], import.meta.url),
            '/src/games/Wheel/info/ko.md': () =>
              r(() => import('./ko-B3TDmfwm.js'), [], import.meta.url),
            '/src/games/Wheel/info/lt.md': () =>
              r(() => import('./lt-DWTe9ceh.js'), [], import.meta.url),
            '/src/games/Wheel/info/lv.md': () =>
              r(() => import('./lv--QLIlq0l.js'), [], import.meta.url),
            '/src/games/Wheel/info/ms.md': () =>
              r(() => import('./ms-BUzLSaAc.js'), [], import.meta.url),
            '/src/games/Wheel/info/nl.md': () =>
              r(() => import('./nl-UlFM16ge.js'), [], import.meta.url),
            '/src/games/Wheel/info/no.md': () =>
              r(() => import('./no-B-f9ZYUr.js'), [], import.meta.url),
            '/src/games/Wheel/info/pl.md': () =>
              r(() => import('./pl-CKD5mLxF.js'), [], import.meta.url),
            '/src/games/Wheel/info/pt-br.md': () =>
              r(() => import('./pt-br-DlFsEs5u.js'), [], import.meta.url),
            '/src/games/Wheel/info/pt.md': () =>
              r(() => import('./pt-B5v4qbpD.js'), [], import.meta.url),
            '/src/games/Wheel/info/ro.md': () =>
              r(() => import('./ro-DwSqawph.js'), [], import.meta.url),
            '/src/games/Wheel/info/ru.md': () =>
              r(() => import('./ru-CZIXfaQV.js'), [], import.meta.url),
            '/src/games/Wheel/info/sk.md': () =>
              r(() => import('./sk-BuYh34YL.js'), [], import.meta.url),
            '/src/games/Wheel/info/sv.md': () =>
              r(() => import('./sv-Dr3d8MlD.js'), [], import.meta.url),
            '/src/games/Wheel/info/th.md': () =>
              r(() => import('./th-BvTZdQJE.js'), [], import.meta.url),
            '/src/games/Wheel/info/tr.md': () =>
              r(() => import('./tr-Bpt6mOJc.js'), [], import.meta.url),
            '/src/games/Wheel/info/uk.md': () =>
              r(() => import('./uk-DLR9home.js'), [], import.meta.url),
            '/src/games/Wheel/info/vi.md': () =>
              r(() => import('./vi-CgRJQdXi.js'), [], import.meta.url),
            '/src/games/Wheel/info/zh-hant.md': () =>
              r(() => import('./zh-hant-Ds0UtHD5.js'), [], import.meta.url),
            '/src/games/Wheel/info/zh.md': () =>
              r(() => import('./zh-CWSD3Yu2.js'), [], import.meta.url),
          }),
          S = Object.keys(d).find((R) => R.includes(`/${P}/`) && R.includes(`/${z}.md`))
        if (!S) {
          console.warn(`Game info for "${P}" in "${z}" not found!`)
          return
        }
        const v = await d[S]().then((R) => R.default)
        if (!v) {
          console.warn('No game info was provided!')
          return
        }
        const M = v
          .replace(
            '{{RTP}}',
            `${V ? '' : `<span class="pill rtp"><span>RTP:</span> ${vr(f.info.config.rtp * 100, 2)}%</span>`}`,
          )
          .replace('{{MAX_WIN}}', `${vr(f.info.config.maxWin, 3)}`)
          .replace('{{winningsRoundingMention}}', gr.t('winningsRoundingMention'))
        return G
          ? M
          : M.concat(
              `<br>${gr.t('maxExposureMention')} ${(C = L.current) == null ? void 0 : C.formatCurrency((E = f == null ? void 0 : f.info.betLimits) == null ? void 0 : E.maxExposure, f == null ? void 0 : f.authenticate.currency)}`,
            )
      },
      N = () => {
        L.current.exit()
      }
    return (
      i.useEffect(() => {
        n.current = {
          ...t,
          formatCurrency: Dt,
        }
      }, [t]),
      i.useEffect(() => {
        g.current = p
      }, [p]),
      i.useEffect(() => {
        ;(async () => {
          if (!a.current) {
            a.current = !0
            const P = {
                ...c,
                game: T,
              },
              d = await window.connector.create(
                P,
                n.current,
                {
                  ...Tt,
                  ...o,
                },
                s,
              ),
              S = await d.authenticate(),
              v = await d.info(),
              M = await d.recover(!0, !0)
            if (g.current) {
              await d.fetchCurrencyDecimals(), await d.fetchExchangeRates()
              const [C] = (await d.rooms()) || [],
                { send: R } = d.initMultiplayer(
                  C.roomId,
                  () => {
                    var w, x
                    return (x = (w = g.current) == null ? void 0 : w.onConnect) == null
                      ? void 0
                      : x.call(w)
                  },
                  () => {
                    var w, x
                    return (x = (w = g.current) == null ? void 0 : w.onDisconnect) == null
                      ? void 0
                      : x.call(w)
                  },
                  (w) => {
                    var x, er
                    return (er = (x = g.current) == null ? void 0 : x.onData) == null
                      ? void 0
                      : er.call(x, w)
                  },
                )
              d.send = R
            }
            const E = d.play
            ;(d.play = (...C) => {
              const R = S.currencyDecimals ?? 2
              return C[1] && (C[1] = vr(parseFloat(C[1]), R)), E.call(d, ...C)
            }),
              (d.ceil = (C, R) => -d.floor(-C, R)),
              (d.ceilCurrency = (C, R) => -d.floorCurrency(-C, R)),
              (L.current = d),
              k({
                authenticate: S,
                info: v,
                recover: M,
              })
          }
        })()
      }, []),
      {
        sessionData: f,
        connector: L.current,
        handleGameInfo: W,
        handleExit: N,
      }
    )
  }
export { Ct as S, Vt as a, St as b, yt as c, tr as d, Et as e, Rt as g, Wr as u }
