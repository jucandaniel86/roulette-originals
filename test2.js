const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      './index-BKyAA0ld.css',
      './index-BxAtJ5g_.js',
      './cross-BuyeW6nV.js',
      './infinite-DqTlBojW.js',
      './percentage-CY_Bys6N.js',
      './win-X_j1HVa_.js',
      './GameWrapper-CJe-t3YE.js',
      './useConnector-hGUUV_WK.js',
      './useCssVariables-Ba7gGP9f.js',
      './usePrevious-9g4wALNj.js',
      './string-aT7bg8eq.js',
      './validation-Bf662osL.js',
      './math-DkEfAmwS.js',
      './useConnector-C7hDfQzC.css',
      './LabelWrapper-Fu7cROeV.js',
      './LabelWrapper-CrSoh1FP.css',
      './index-BTWbeoXe.js',
      './GameWrapper-B-nlT-Cp.css',
      './Modal-Cvh_NgI4.css',
      './BetButton-Bv-0h7w8.js',
      './Tabs-s1nvgXtL.js',
      './Tabs-BORqqS2r.css',
      './Dice-DPSBmXaU.js',
      './Dice-DmT1apu5.css',
      './index-DlaZadYj.js',
      './match-DyCz8JLu.js',
      './Diamonds-C5ixaQ1V.js',
      './Diamonds-qLOEkzk5.css',
      './index-BMHjkmIT.js',
      './OddsTable-MkCN57OT.js',
      './OddsTable-DHoQ-l14.css',
      './Select-Bn2Q0h4R.js',
      './Select-CHDeuRAy.css',
      './useCanvas-MfwR0uLc.js',
      './Plinko-CFFQHvhB.js',
      './Plinko-CRhvY8nw.css',
      './index-C_pR3XR0.js',
      './selected-D8h1kXPh.js',
      './CashoutButton-B4V_w38A.js',
      './CashoutButton-5ZWKBQEk.css',
      './GameResult-BVY0rwvU.js',
      './GameResult-XJywpdQE.css',
      './Mines-DplAZ99T.js',
      './Mines-BXa-DKbO.css',
      './index-Dp7dWiJu.js',
      './Limbo-C3DTabO2.css',
      './index-DYMaS5DS.js',
      './Keno-DT35olCW.js',
      './Keno-utxLh2eg.css',
      './index-t61uh--1.js',
      './Wheel-iP4t2NVX.js',
      './Wheel-BcjWqYqi.css',
      './index-BpnWrJhR.js',
      './flip-CJSX-K29.js',
      './Hilo-DnYIiJ9-.js',
      './Hilo-DfbgpWP9.css',
      './index-BQrTwpTh.js',
      './VideoPoker-BpbYS47a.js',
      './VideoPoker-D0AZUMpG.css',
      './index-mT5JgMFI.js',
      './mucked-azxLgn0o.js',
      './Blackjack-DJjC75A1.js',
      './Blackjack-DMrsnaF_.css',
      './index-Dvjt1iDO.js',
      './Baccarat-CMT1OeV-.js',
      './Baccarat-Cb9xY-P3.css',
      './index-ENP86-XV.js',
      './canvas-sprites-Dv6NIGXR.js',
      './BitmapFontManager-DrFyTLeO.js',
      './CanvasTextMetrics-DMwe6Nfa.js',
      './CanvasPool-UfWMyN8N.js',
      './Crash-D5829Eng.js',
      './Filter-Z9hBAnrf.js',
      './TexturePool-C6tCcnIB.js',
      './Crash-QO9wWTmP.css',
      './index-BbnGYZnK.js',
      './Dragonstower-q4X2I0tL.js',
      './Dragonstower-DS4TZzm2.css',
      './replay-D7adj5m_.js',
    ]),
) => i.map((i) => d[i])
;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o)
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === 'childList')
        for (const s of i.addedNodes) s.tagName === 'LINK' && s.rel === 'modulepreload' && r(s)
  }).observe(document, {
    childList: !0,
    subtree: !0,
  })
  function n(o) {
    const i = {}
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : o.crossOrigin === 'anonymous'
          ? (i.credentials = 'omit')
          : (i.credentials = 'same-origin'),
      i
    )
  }
  function r(o) {
    if (o.ep) return
    o.ep = !0
    const i = n(o)
    fetch(o.href, i)
  }
})()
const zy = 'modulepreload',
  Uy = function (e, t) {
    return new URL(e, t).href
  },
  od = {},
  L = function (t, n, r) {
    let o = Promise.resolve()
    if (n && n.length > 0) {
      const s = document.getElementsByTagName('link'),
        a = document.querySelector('meta[property=csp-nonce]'),
        u = (a == null ? void 0 : a.nonce) || (a == null ? void 0 : a.getAttribute('nonce'))
      o = Promise.allSettled(
        n.map((l) => {
          if (((l = Uy(l, r)), l in od)) return
          od[l] = !0
          const d = l.endsWith('.css'),
            f = d ? '[rel="stylesheet"]' : ''
          if (!!r)
            for (let g = s.length - 1; g >= 0; g--) {
              const v = s[g]
              if (v.href === l && (!d || v.rel === 'stylesheet')) return
            }
          else if (document.querySelector(`link[href="${l}"]${f}`)) return
          const p = document.createElement('link')
          if (
            ((p.rel = d ? 'stylesheet' : zy),
            d || (p.as = 'script'),
            (p.crossOrigin = ''),
            (p.href = l),
            u && p.setAttribute('nonce', u),
            document.head.appendChild(p),
            d)
          )
            return new Promise((g, v) => {
              p.addEventListener('load', g),
                p.addEventListener('error', () => v(new Error(`Unable to preload CSS for ${l}`)))
            })
        }),
      )
    }
    function i(s) {
      const a = new Event('vite:preloadError', {
        cancelable: !0,
      })
      if (((a.payload = s), window.dispatchEvent(a), !a.defaultPrevented)) throw s
    }
    return o.then((s) => {
      for (const a of s || []) a.status === 'rejected' && i(a.reason)
      return t().catch(i)
    })
  },
  By = (e, t, n) => {
    const r = e[t]
    return r
      ? typeof r == 'function'
        ? r()
        : Promise.resolve(r)
      : new Promise((o, i) => {
          ;(typeof queueMicrotask == 'function' ? queueMicrotask : setTimeout)(
            i.bind(
              null,
              new Error(
                'Unknown variable dynamic import: ' +
                  t +
                  (t.split('/').length !== n
                    ? '. Note that variables only represent file names one level deep.'
                    : ''),
              ),
            ),
          )
        })
  }
var QR =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof self < 'u'
          ? self
          : {}
function Hy(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e
}
var $p = {
    exports: {},
  },
  na = {},
  jp = {
    exports: {},
  },
  K = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var si = Symbol.for('react.element'),
  Vy = Symbol.for('react.portal'),
  Wy = Symbol.for('react.fragment'),
  Ky = Symbol.for('react.strict_mode'),
  Gy = Symbol.for('react.profiler'),
  Yy = Symbol.for('react.provider'),
  qy = Symbol.for('react.context'),
  Qy = Symbol.for('react.forward_ref'),
  Jy = Symbol.for('react.suspense'),
  Xy = Symbol.for('react.memo'),
  Zy = Symbol.for('react.lazy'),
  id = Symbol.iterator
function ev(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (id && e[id]) || e['@@iterator']), typeof e == 'function' ? e : null)
}
var zp = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Up = Object.assign,
  Bp = {}
function Xr(e, t, n) {
  ;(this.props = e), (this.context = t), (this.refs = Bp), (this.updater = n || zp)
}
Xr.prototype.isReactComponent = {}
Xr.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
Xr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function Hp() {}
Hp.prototype = Xr.prototype
function Vl(e, t, n) {
  ;(this.props = e), (this.context = t), (this.refs = Bp), (this.updater = n || zp)
}
var Wl = (Vl.prototype = new Hp())
Wl.constructor = Vl
Up(Wl, Xr.prototype)
Wl.isPureReactComponent = !0
var sd = Array.isArray,
  Vp = Object.prototype.hasOwnProperty,
  Kl = {
    current: null,
  },
  Wp = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0,
  }
function Kp(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = '' + t.key), t))
      Vp.call(t, r) && !Wp.hasOwnProperty(r) && (o[r] = t[r])
  var a = arguments.length - 2
  if (a === 1) o.children = n
  else if (1 < a) {
    for (var u = Array(a), l = 0; l < a; l++) u[l] = arguments[l + 2]
    o.children = u
  }
  if (e && e.defaultProps) for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r])
  return {
    $$typeof: si,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Kl.current,
  }
}
function tv(e, t) {
  return {
    $$typeof: si,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  }
}
function Gl(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === si
}
function nv(e) {
  var t = {
    '=': '=0',
    ':': '=2',
  }
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n]
    })
  )
}
var ad = /\/+/g
function Da(e, t) {
  return typeof e == 'object' && e !== null && e.key != null ? nv('' + e.key) : t.toString(36)
}
function Ji(e, t, n, r, o) {
  var i = typeof e
  ;(i === 'undefined' || i === 'boolean') && (e = null)
  var s = !1
  if (e === null) s = !0
  else
    switch (i) {
      case 'string':
      case 'number':
        s = !0
        break
      case 'object':
        switch (e.$$typeof) {
          case si:
          case Vy:
            s = !0
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === '' ? '.' + Da(s, 0) : r),
      sd(o)
        ? ((n = ''),
          e != null && (n = e.replace(ad, '$&/') + '/'),
          Ji(o, t, n, '', function (l) {
            return l
          }))
        : o != null &&
          (Gl(o) &&
            (o = tv(
              o,
              n +
                (!o.key || (s && s.key === o.key) ? '' : ('' + o.key).replace(ad, '$&/') + '/') +
                e,
            )),
          t.push(o)),
      1
    )
  if (((s = 0), (r = r === '' ? '.' : r + ':'), sd(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a]
      var u = r + Da(i, a)
      s += Ji(i, t, n, u, o)
    }
  else if (((u = ev(e)), typeof u == 'function'))
    for (e = u.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (u = r + Da(i, a++)), (s += Ji(i, t, n, u, o))
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
          '). If you meant to render a collection of children, use an array instead.',
      ))
    )
  return s
}
function Ti(e, t, n) {
  if (e == null) return e
  var r = [],
    o = 0
  return (
    Ji(e, r, '', '', function (i) {
      return t.call(n, i, o++)
    }),
    r
  )
}
function rv(e) {
  if (e._status === -1) {
    var t = e._result
    ;(t = t()),
      t.then(
        function (n) {
          ;(e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n))
        },
        function (n) {
          ;(e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n))
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t))
  }
  if (e._status === 1) return e._result.default
  throw e._result
}
var be = {
    current: null,
  },
  Xi = {
    transition: null,
  },
  ov = {
    ReactCurrentDispatcher: be,
    ReactCurrentBatchConfig: Xi,
    ReactCurrentOwner: Kl,
  }
function Gp() {
  throw Error('act(...) is not supported in production builds of React.')
}
K.Children = {
  map: Ti,
  forEach: function (e, t, n) {
    Ti(
      e,
      function () {
        t.apply(this, arguments)
      },
      n,
    )
  },
  count: function (e) {
    var t = 0
    return (
      Ti(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      Ti(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!Gl(e)) throw Error('React.Children.only expected to receive a single React element child.')
    return e
  },
}
K.Component = Xr
K.Fragment = Wy
K.Profiler = Gy
K.PureComponent = Vl
K.StrictMode = Ky
K.Suspense = Jy
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ov
K.act = Gp
K.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.',
    )
  var r = Up({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = Kl.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps
    for (u in t)
      Vp.call(t, u) &&
        !Wp.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u])
  }
  var u = arguments.length - 2
  if (u === 1) r.children = n
  else if (1 < u) {
    a = Array(u)
    for (var l = 0; l < u; l++) a[l] = arguments[l + 2]
    r.children = a
  }
  return {
    $$typeof: si,
    type: e.type,
    key: o,
    ref: i,
    props: r,
    _owner: s,
  }
}
K.createContext = function (e) {
  return (
    (e = {
      $$typeof: qy,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = {
      $$typeof: Yy,
      _context: e,
    }),
    (e.Consumer = e)
  )
}
K.createElement = Kp
K.createFactory = function (e) {
  var t = Kp.bind(null, e)
  return (t.type = e), t
}
K.createRef = function () {
  return {
    current: null,
  }
}
K.forwardRef = function (e) {
  return {
    $$typeof: Qy,
    render: e,
  }
}
K.isValidElement = Gl
K.lazy = function (e) {
  return {
    $$typeof: Zy,
    _payload: {
      _status: -1,
      _result: e,
    },
    _init: rv,
  }
}
K.memo = function (e, t) {
  return {
    $$typeof: Xy,
    type: e,
    compare: t === void 0 ? null : t,
  }
}
K.startTransition = function (e) {
  var t = Xi.transition
  Xi.transition = {}
  try {
    e()
  } finally {
    Xi.transition = t
  }
}
K.unstable_act = Gp
K.useCallback = function (e, t) {
  return be.current.useCallback(e, t)
}
K.useContext = function (e) {
  return be.current.useContext(e)
}
K.useDebugValue = function () {}
K.useDeferredValue = function (e) {
  return be.current.useDeferredValue(e)
}
K.useEffect = function (e, t) {
  return be.current.useEffect(e, t)
}
K.useId = function () {
  return be.current.useId()
}
K.useImperativeHandle = function (e, t, n) {
  return be.current.useImperativeHandle(e, t, n)
}
K.useInsertionEffect = function (e, t) {
  return be.current.useInsertionEffect(e, t)
}
K.useLayoutEffect = function (e, t) {
  return be.current.useLayoutEffect(e, t)
}
K.useMemo = function (e, t) {
  return be.current.useMemo(e, t)
}
K.useReducer = function (e, t, n) {
  return be.current.useReducer(e, t, n)
}
K.useRef = function (e) {
  return be.current.useRef(e)
}
K.useState = function (e) {
  return be.current.useState(e)
}
K.useSyncExternalStore = function (e, t, n) {
  return be.current.useSyncExternalStore(e, t, n)
}
K.useTransition = function () {
  return be.current.useTransition()
}
K.version = '18.3.1'
jp.exports = K
var F = jp.exports
const iv = Hy(F)
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sv = F,
  av = Symbol.for('react.element'),
  uv = Symbol.for('react.fragment'),
  lv = Object.prototype.hasOwnProperty,
  cv = sv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  dv = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0,
  }
function Yp(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null
  n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (s = t.ref)
  for (r in t) lv.call(t, r) && !dv.hasOwnProperty(r) && (o[r] = t[r])
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r])
  return {
    $$typeof: av,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: cv.current,
  }
}
na.Fragment = uv
na.jsx = Yp
na.jsxs = Yp
$p.exports = na
var D = $p.exports
const fv = {
  type: 'logger',
  log(e) {
    this.output('log', e)
  },
  warn(e) {
    this.output('warn', e)
  },
  error(e) {
    this.output('error', e)
  },
  output(e, t) {
    console && console[e] && console[e].apply(console, t)
  },
}
class ys {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    this.init(t, n)
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    ;(this.prefix = n.prefix || 'i18next:'),
      (this.logger = t || fv),
      (this.options = n),
      (this.debug = n.debug)
  }
  log() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]
    return this.forward(n, 'log', '', !0)
  }
  warn() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]
    return this.forward(n, 'warn', '', !0)
  }
  error() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]
    return this.forward(n, 'error', '')
  }
  deprecate() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]
    return this.forward(n, 'warn', 'WARNING DEPRECATED: ', !0)
  }
  forward(t, n, r, o) {
    return o && !this.debug
      ? null
      : (typeof t[0] == 'string' && (t[0] = `${r}${this.prefix} ${t[0]}`), this.logger[n](t))
  }
  create(t) {
    return new ys(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options,
    })
  }
  clone(t) {
    return (t = t || this.options), (t.prefix = t.prefix || this.prefix), new ys(this.logger, t)
  }
}
var Nt = new ys()
class ra {
  constructor() {
    this.observers = {}
  }
  on(t, n) {
    return (
      t.split(' ').forEach((r) => {
        this.observers[r] || (this.observers[r] = new Map())
        const o = this.observers[r].get(n) || 0
        this.observers[r].set(n, o + 1)
      }),
      this
    )
  }
  off(t, n) {
    if (this.observers[t]) {
      if (!n) {
        delete this.observers[t]
        return
      }
      this.observers[t].delete(n)
    }
  }
  emit(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o]
    this.observers[t] &&
      Array.from(this.observers[t].entries()).forEach((s) => {
        let [a, u] = s
        for (let l = 0; l < u; l++) a(...r)
      }),
      this.observers['*'] &&
        Array.from(this.observers['*'].entries()).forEach((s) => {
          let [a, u] = s
          for (let l = 0; l < u; l++) a.apply(a, [t, ...r])
        })
  }
}
const uo = () => {
    let e, t
    const n = new Promise((r, o) => {
      ;(e = r), (t = o)
    })
    return (n.resolve = e), (n.reject = t), n
  },
  ud = (e) => (e == null ? '' : '' + e),
  pv = (e, t, n) => {
    e.forEach((r) => {
      t[r] && (n[r] = t[r])
    })
  },
  hv = /###/g,
  ld = (e) => (e && e.indexOf('###') > -1 ? e.replace(hv, '.') : e),
  cd = (e) => !e || typeof e == 'string',
  wo = (e, t, n) => {
    const r = typeof t != 'string' ? t : t.split('.')
    let o = 0
    for (; o < r.length - 1; ) {
      if (cd(e)) return {}
      const i = ld(r[o])
      !e[i] && n && (e[i] = new n()),
        Object.prototype.hasOwnProperty.call(e, i) ? (e = e[i]) : (e = {}),
        ++o
    }
    return cd(e)
      ? {}
      : {
          obj: e,
          k: ld(r[o]),
        }
  },
  dd = (e, t, n) => {
    const { obj: r, k: o } = wo(e, t, Object)
    if (r !== void 0 || t.length === 1) {
      r[o] = n
      return
    }
    let i = t[t.length - 1],
      s = t.slice(0, t.length - 1),
      a = wo(e, s, Object)
    for (; a.obj === void 0 && s.length; )
      (i = `${s[s.length - 1]}.${i}`),
        (s = s.slice(0, s.length - 1)),
        (a = wo(e, s, Object)),
        a && a.obj && typeof a.obj[`${a.k}.${i}`] < 'u' && (a.obj = void 0)
    a.obj[`${a.k}.${i}`] = n
  },
  mv = (e, t, n, r) => {
    const { obj: o, k: i } = wo(e, t, Object)
    ;(o[i] = o[i] || []), o[i].push(n)
  },
  vs = (e, t) => {
    const { obj: n, k: r } = wo(e, t)
    if (n) return n[r]
  },
  gv = (e, t, n) => {
    const r = vs(e, n)
    return r !== void 0 ? r : vs(t, n)
  },
  qp = (e, t, n) => {
    for (const r in t)
      r !== '__proto__' &&
        r !== 'constructor' &&
        (r in e
          ? typeof e[r] == 'string' ||
            e[r] instanceof String ||
            typeof t[r] == 'string' ||
            t[r] instanceof String
            ? n && (e[r] = t[r])
            : qp(e[r], t[r], n)
          : (e[r] = t[r]))
    return e
  },
  dr = (e) => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')
var yv = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
}
const vv = (e) => (typeof e == 'string' ? e.replace(/[&<>"'\/]/g, (t) => yv[t]) : e)
class _v {
  constructor(t) {
    ;(this.capacity = t), (this.regExpMap = new Map()), (this.regExpQueue = [])
  }
  getRegExp(t) {
    const n = this.regExpMap.get(t)
    if (n !== void 0) return n
    const r = new RegExp(t)
    return (
      this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(t, r),
      this.regExpQueue.push(t),
      r
    )
  }
}
const Sv = [' ', ',', '?', '!', ';'],
  Ev = new _v(20),
  wv = (e, t, n) => {
    ;(t = t || ''), (n = n || '')
    const r = Sv.filter((s) => t.indexOf(s) < 0 && n.indexOf(s) < 0)
    if (r.length === 0) return !0
    const o = Ev.getRegExp(`(${r.map((s) => (s === '?' ? '\\?' : s)).join('|')})`)
    let i = !o.test(e)
    if (!i) {
      const s = e.indexOf(n)
      s > 0 && !o.test(e.substring(0, s)) && (i = !0)
    }
    return i
  },
  Pu = function (e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '.'
    if (!e) return
    if (e[t]) return e[t]
    const r = t.split(n)
    let o = e
    for (let i = 0; i < r.length; ) {
      if (!o || typeof o != 'object') return
      let s,
        a = ''
      for (let u = i; u < r.length; ++u)
        if ((u !== i && (a += n), (a += r[u]), (s = o[a]), s !== void 0)) {
          if (['string', 'number', 'boolean'].indexOf(typeof s) > -1 && u < r.length - 1) continue
          i += u - i + 1
          break
        }
      o = s
    }
    return o
  },
  _s = (e) => (e && e.indexOf('_') > 0 ? e.replace('_', '-') : e)
class fd extends ra {
  constructor(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : {
            ns: ['translation'],
            defaultNS: 'translation',
          }
    super(),
      (this.data = t || {}),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0)
  }
  addNamespaces(t) {
    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t)
  }
  removeNamespaces(t) {
    const n = this.options.ns.indexOf(t)
    n > -1 && this.options.ns.splice(n, 1)
  }
  getResource(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}
    const i = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator,
      s =
        o.ignoreJSONStructure !== void 0 ? o.ignoreJSONStructure : this.options.ignoreJSONStructure
    let a
    t.indexOf('.') > -1
      ? (a = t.split('.'))
      : ((a = [t, n]),
        r &&
          (Array.isArray(r)
            ? a.push(...r)
            : typeof r == 'string' && i
              ? a.push(...r.split(i))
              : a.push(r)))
    const u = vs(this.data, a)
    return (
      !u && !n && !r && t.indexOf('.') > -1 && ((t = a[0]), (n = a[1]), (r = a.slice(2).join('.'))),
      u || !s || typeof r != 'string' ? u : Pu(this.data && this.data[t] && this.data[t][n], r, i)
    )
  }
  addResource(t, n, r, o) {
    let i =
      arguments.length > 4 && arguments[4] !== void 0
        ? arguments[4]
        : {
            silent: !1,
          }
    const s = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator
    let a = [t, n]
    r && (a = a.concat(s ? r.split(s) : r)),
      t.indexOf('.') > -1 && ((a = t.split('.')), (o = n), (n = a[1])),
      this.addNamespaces(n),
      dd(this.data, a, o),
      i.silent || this.emit('added', t, n, r, o)
  }
  addResources(t, n, r) {
    let o =
      arguments.length > 3 && arguments[3] !== void 0
        ? arguments[3]
        : {
            silent: !1,
          }
    for (const i in r)
      (typeof r[i] == 'string' || Array.isArray(r[i])) &&
        this.addResource(t, n, i, r[i], {
          silent: !0,
        })
    o.silent || this.emit('added', t, n, r)
  }
  addResourceBundle(t, n, r, o, i) {
    let s =
        arguments.length > 5 && arguments[5] !== void 0
          ? arguments[5]
          : {
              silent: !1,
              skipCopy: !1,
            },
      a = [t, n]
    t.indexOf('.') > -1 && ((a = t.split('.')), (o = r), (r = n), (n = a[1])), this.addNamespaces(n)
    let u = vs(this.data, a) || {}
    s.skipCopy || (r = JSON.parse(JSON.stringify(r))),
      o
        ? qp(u, r, i)
        : (u = {
            ...u,
            ...r,
          }),
      dd(this.data, a, u),
      s.silent || this.emit('added', t, n, r)
  }
  removeResourceBundle(t, n) {
    this.hasResourceBundle(t, n) && delete this.data[t][n],
      this.removeNamespaces(n),
      this.emit('removed', t, n)
  }
  hasResourceBundle(t, n) {
    return this.getResource(t, n) !== void 0
  }
  getResourceBundle(t, n) {
    return (
      n || (n = this.options.defaultNS),
      this.options.compatibilityAPI === 'v1'
        ? {
            ...this.getResource(t, n),
          }
        : this.getResource(t, n)
    )
  }
  getDataByLanguage(t) {
    return this.data[t]
  }
  hasLanguageSomeTranslations(t) {
    const n = this.getDataByLanguage(t)
    return !!((n && Object.keys(n)) || []).find((o) => n[o] && Object.keys(n[o]).length > 0)
  }
  toJSON() {
    return this.data
  }
}
var Qp = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e
  },
  handle(e, t, n, r, o) {
    return (
      e.forEach((i) => {
        this.processors[i] && (t = this.processors[i].process(t, n, r, o))
      }),
      t
    )
  },
}
const pd = {}
class Ss extends ra {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    super(),
      pv(
        [
          'resourceStore',
          'languageUtils',
          'pluralResolver',
          'interpolator',
          'backendConnector',
          'i18nFormat',
          'utils',
        ],
        t,
        this,
      ),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      (this.logger = Nt.create('translator'))
  }
  changeLanguage(t) {
    t && (this.language = t)
  }
  exists(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : {
            interpolation: {},
          }
    if (t == null) return !1
    const r = this.resolve(t, n)
    return r && r.res !== void 0
  }
  extractFromKey(t, n) {
    let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator
    r === void 0 && (r = ':')
    const o = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator
    let i = n.ns || this.options.defaultNS || []
    const s = r && t.indexOf(r) > -1,
      a =
        !this.options.userDefinedKeySeparator &&
        !n.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !n.nsSeparator &&
        !wv(t, r, o)
    if (s && !a) {
      const u = t.match(this.interpolator.nestingRegexp)
      if (u && u.length > 0)
        return {
          key: t,
          namespaces: i,
        }
      const l = t.split(r)
      ;(r !== o || (r === o && this.options.ns.indexOf(l[0]) > -1)) && (i = l.shift()),
        (t = l.join(o))
    }
    return (
      typeof i == 'string' && (i = [i]),
      {
        key: t,
        namespaces: i,
      }
    )
  }
  translate(t, n, r) {
    if (
      (typeof n != 'object' &&
        this.options.overloadTranslationOptionHandler &&
        (n = this.options.overloadTranslationOptionHandler(arguments)),
      typeof n == 'object' &&
        (n = {
          ...n,
        }),
      n || (n = {}),
      t == null)
    )
      return ''
    Array.isArray(t) || (t = [String(t)])
    const o = n.returnDetails !== void 0 ? n.returnDetails : this.options.returnDetails,
      i = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator,
      { key: s, namespaces: a } = this.extractFromKey(t[t.length - 1], n),
      u = a[a.length - 1],
      l = n.lng || this.language,
      d = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode
    if (l && l.toLowerCase() === 'cimode') {
      if (d) {
        const _ = n.nsSeparator || this.options.nsSeparator
        return o
          ? {
              res: `${u}${_}${s}`,
              usedKey: s,
              exactUsedKey: s,
              usedLng: l,
              usedNS: u,
              usedParams: this.getUsedParamsDetails(n),
            }
          : `${u}${_}${s}`
      }
      return o
        ? {
            res: s,
            usedKey: s,
            exactUsedKey: s,
            usedLng: l,
            usedNS: u,
            usedParams: this.getUsedParamsDetails(n),
          }
        : s
    }
    const f = this.resolve(t, n)
    let c = f && f.res
    const p = (f && f.usedKey) || s,
      g = (f && f.exactUsedKey) || s,
      v = Object.prototype.toString.apply(c),
      S = ['[object Number]', '[object Function]', '[object RegExp]'],
      m = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays,
      h = !this.i18nFormat || this.i18nFormat.handleAsObject
    if (
      h &&
      c &&
      typeof c != 'string' &&
      typeof c != 'boolean' &&
      typeof c != 'number' &&
      S.indexOf(v) < 0 &&
      !(typeof m == 'string' && Array.isArray(c))
    ) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn('accessing an object - but returnObjects options is not enabled!')
        const _ = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(p, c, {
              ...n,
              ns: a,
            })
          : `key '${s} (${this.language})' returned an object instead of string.`
        return o ? ((f.res = _), (f.usedParams = this.getUsedParamsDetails(n)), f) : _
      }
      if (i) {
        const _ = Array.isArray(c),
          k = _ ? [] : {},
          w = _ ? g : p
        for (const T in c)
          if (Object.prototype.hasOwnProperty.call(c, T)) {
            const R = `${w}${i}${T}`
            ;(k[T] = this.translate(R, {
              ...n,
              joinArrays: !1,
              ns: a,
            })),
              k[T] === R && (k[T] = c[T])
          }
        c = k
      }
    } else if (h && typeof m == 'string' && Array.isArray(c))
      (c = c.join(m)), c && (c = this.extendTranslation(c, t, n, r))
    else {
      let _ = !1,
        k = !1
      const w = n.count !== void 0 && typeof n.count != 'string',
        T = Ss.hasDefaultValue(n),
        R = w ? this.pluralResolver.getSuffix(l, n.count, n) : '',
        P =
          n.ordinal && w
            ? this.pluralResolver.getSuffix(l, n.count, {
                ordinal: !1,
              })
            : '',
        I = w && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi(),
        b =
          (I && n[`defaultValue${this.options.pluralSeparator}zero`]) ||
          n[`defaultValue${R}`] ||
          n[`defaultValue${P}`] ||
          n.defaultValue
      !this.isValidLookup(c) && T && ((_ = !0), (c = b)),
        this.isValidLookup(c) || ((k = !0), (c = s))
      const H =
          (n.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && k
            ? void 0
            : c,
        V = T && b !== c && this.options.updateMissing
      if (k || _ || V) {
        if ((this.logger.log(V ? 'updateKey' : 'missingKey', l, u, s, V ? b : c), i)) {
          const E = this.resolve(s, {
            ...n,
            keySeparator: !1,
          })
          E &&
            E.res &&
            this.logger.warn(
              'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.',
            )
        }
        let z = []
        const B = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          n.lng || this.language,
        )
        if (this.options.saveMissingTo === 'fallback' && B && B[0])
          for (let E = 0; E < B.length; E++) z.push(B[E])
        else
          this.options.saveMissingTo === 'all'
            ? (z = this.languageUtils.toResolveHierarchy(n.lng || this.language))
            : z.push(n.lng || this.language)
        const Q = (E, A, M) => {
          const U = T && M !== c ? M : H
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(E, u, A, U, V, n)
            : this.backendConnector &&
              this.backendConnector.saveMissing &&
              this.backendConnector.saveMissing(E, u, A, U, V, n),
            this.emit('missingKey', E, u, A, c)
        }
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && w
            ? z.forEach((E) => {
                const A = this.pluralResolver.getSuffixes(E, n)
                I &&
                  n[`defaultValue${this.options.pluralSeparator}zero`] &&
                  A.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  A.push(`${this.options.pluralSeparator}zero`),
                  A.forEach((M) => {
                    Q([E], s + M, n[`defaultValue${M}`] || b)
                  })
              })
            : Q(z, s, b))
      }
      ;(c = this.extendTranslation(c, t, n, f, r)),
        k && c === s && this.options.appendNamespaceToMissingKey && (c = `${u}:${s}`),
        (k || _) &&
          this.options.parseMissingKeyHandler &&
          (this.options.compatibilityAPI !== 'v1'
            ? (c = this.options.parseMissingKeyHandler(
                this.options.appendNamespaceToMissingKey ? `${u}:${s}` : s,
                _ ? c : void 0,
              ))
            : (c = this.options.parseMissingKeyHandler(c)))
    }
    return o ? ((f.res = c), (f.usedParams = this.getUsedParamsDetails(n)), f) : c
  }
  extendTranslation(t, n, r, o, i) {
    var s = this
    if (this.i18nFormat && this.i18nFormat.parse)
      t = this.i18nFormat.parse(
        t,
        {
          ...this.options.interpolation.defaultVariables,
          ...r,
        },
        r.lng || this.language || o.usedLng,
        o.usedNS,
        o.usedKey,
        {
          resolved: o,
        },
      )
    else if (!r.skipInterpolation) {
      r.interpolation &&
        this.interpolator.init({
          ...r,
          interpolation: {
            ...this.options.interpolation,
            ...r.interpolation,
          },
        })
      const l =
        typeof t == 'string' &&
        (r && r.interpolation && r.interpolation.skipOnVariables !== void 0
          ? r.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables)
      let d
      if (l) {
        const c = t.match(this.interpolator.nestingRegexp)
        d = c && c.length
      }
      let f = r.replace && typeof r.replace != 'string' ? r.replace : r
      if (
        (this.options.interpolation.defaultVariables &&
          (f = {
            ...this.options.interpolation.defaultVariables,
            ...f,
          }),
        (t = this.interpolator.interpolate(t, f, r.lng || this.language || o.usedLng, r)),
        l)
      ) {
        const c = t.match(this.interpolator.nestingRegexp),
          p = c && c.length
        d < p && (r.nest = !1)
      }
      !r.lng &&
        this.options.compatibilityAPI !== 'v1' &&
        o &&
        o.res &&
        (r.lng = this.language || o.usedLng),
        r.nest !== !1 &&
          (t = this.interpolator.nest(
            t,
            function () {
              for (var c = arguments.length, p = new Array(c), g = 0; g < c; g++)
                p[g] = arguments[g]
              return i && i[0] === p[0] && !r.context
                ? (s.logger.warn(
                    `It seems you are nesting recursively key: ${p[0]} in key: ${n[0]}`,
                  ),
                  null)
                : s.translate(...p, n)
            },
            r,
          )),
        r.interpolation && this.interpolator.reset()
    }
    const a = r.postProcess || this.options.postProcess,
      u = typeof a == 'string' ? [a] : a
    return (
      t != null &&
        u &&
        u.length &&
        r.applyPostProcessor !== !1 &&
        (t = Qp.handle(
          u,
          t,
          n,
          this.options && this.options.postProcessPassResolved
            ? {
                i18nResolved: {
                  ...o,
                  usedParams: this.getUsedParamsDetails(r),
                },
                ...r,
              }
            : r,
          this,
        )),
      t
    )
  }
  resolve(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r,
      o,
      i,
      s,
      a
    return (
      typeof t == 'string' && (t = [t]),
      t.forEach((u) => {
        if (this.isValidLookup(r)) return
        const l = this.extractFromKey(u, n),
          d = l.key
        o = d
        let f = l.namespaces
        this.options.fallbackNS && (f = f.concat(this.options.fallbackNS))
        const c = n.count !== void 0 && typeof n.count != 'string',
          p = c && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi(),
          g =
            n.context !== void 0 &&
            (typeof n.context == 'string' || typeof n.context == 'number') &&
            n.context !== '',
          v = n.lngs
            ? n.lngs
            : this.languageUtils.toResolveHierarchy(n.lng || this.language, n.fallbackLng)
        f.forEach((S) => {
          this.isValidLookup(r) ||
            ((a = S),
            !pd[`${v[0]}-${S}`] &&
              this.utils &&
              this.utils.hasLoadedNamespace &&
              !this.utils.hasLoadedNamespace(a) &&
              ((pd[`${v[0]}-${S}`] = !0),
              this.logger.warn(
                `key "${o}" for languages "${v.join(', ')}" won't get resolved as namespace "${a}" was not yet loaded`,
                'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
              )),
            v.forEach((m) => {
              if (this.isValidLookup(r)) return
              s = m
              const h = [d]
              if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                this.i18nFormat.addLookupKeys(h, d, m, S, n)
              else {
                let _
                c && (_ = this.pluralResolver.getSuffix(m, n.count, n))
                const k = `${this.options.pluralSeparator}zero`,
                  w = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`
                if (
                  (c &&
                    (h.push(d + _),
                    n.ordinal &&
                      _.indexOf(w) === 0 &&
                      h.push(d + _.replace(w, this.options.pluralSeparator)),
                    p && h.push(d + k)),
                  g)
                ) {
                  const T = `${d}${this.options.contextSeparator}${n.context}`
                  h.push(T),
                    c &&
                      (h.push(T + _),
                      n.ordinal &&
                        _.indexOf(w) === 0 &&
                        h.push(T + _.replace(w, this.options.pluralSeparator)),
                      p && h.push(T + k))
                }
              }
              let y
              for (; (y = h.pop()); )
                this.isValidLookup(r) || ((i = y), (r = this.getResource(m, S, y, n)))
            }))
        })
      }),
      {
        res: r,
        usedKey: o,
        exactUsedKey: i,
        usedLng: s,
        usedNS: a,
      }
    )
  }
  isValidLookup(t) {
    return (
      t !== void 0 &&
      !(!this.options.returnNull && t === null) &&
      !(!this.options.returnEmptyString && t === '')
    )
  }
  getResource(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}
    return this.i18nFormat && this.i18nFormat.getResource
      ? this.i18nFormat.getResource(t, n, r, o)
      : this.resourceStore.getResource(t, n, r, o)
  }
  getUsedParamsDetails() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    const n = [
        'defaultValue',
        'ordinal',
        'context',
        'replace',
        'lng',
        'lngs',
        'fallbackLng',
        'ns',
        'keySeparator',
        'nsSeparator',
        'returnObjects',
        'returnDetails',
        'joinArrays',
        'postProcess',
        'interpolation',
      ],
      r = t.replace && typeof t.replace != 'string'
    let o = r ? t.replace : t
    if (
      (r && typeof t.count < 'u' && (o.count = t.count),
      this.options.interpolation.defaultVariables &&
        (o = {
          ...this.options.interpolation.defaultVariables,
          ...o,
        }),
      !r)
    ) {
      o = {
        ...o,
      }
      for (const i of n) delete o[i]
    }
    return o
  }
  static hasDefaultValue(t) {
    const n = 'defaultValue'
    for (const r in t)
      if (
        Object.prototype.hasOwnProperty.call(t, r) &&
        n === r.substring(0, n.length) &&
        t[r] !== void 0
      )
        return !0
    return !1
  }
}
const Ma = (e) => e.charAt(0).toUpperCase() + e.slice(1)
class hd {
  constructor(t) {
    ;(this.options = t),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = Nt.create('languageUtils'))
  }
  getScriptPartFromCode(t) {
    if (((t = _s(t)), !t || t.indexOf('-') < 0)) return null
    const n = t.split('-')
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === 'x')
      ? null
      : this.formatLanguageCode(n.join('-'))
  }
  getLanguagePartFromCode(t) {
    if (((t = _s(t)), !t || t.indexOf('-') < 0)) return t
    const n = t.split('-')
    return this.formatLanguageCode(n[0])
  }
  formatLanguageCode(t) {
    if (typeof t == 'string' && t.indexOf('-') > -1) {
      const n = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab']
      let r = t.split('-')
      return (
        this.options.lowerCaseLng
          ? (r = r.map((o) => o.toLowerCase()))
          : r.length === 2
            ? ((r[0] = r[0].toLowerCase()),
              (r[1] = r[1].toUpperCase()),
              n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = Ma(r[1].toLowerCase())))
            : r.length === 3 &&
              ((r[0] = r[0].toLowerCase()),
              r[1].length === 2 && (r[1] = r[1].toUpperCase()),
              r[0] !== 'sgn' && r[2].length === 2 && (r[2] = r[2].toUpperCase()),
              n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = Ma(r[1].toLowerCase())),
              n.indexOf(r[2].toLowerCase()) > -1 && (r[2] = Ma(r[2].toLowerCase()))),
        r.join('-')
      )
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t
  }
  isSupportedCode(t) {
    return (
      (this.options.load === 'languageOnly' || this.options.nonExplicitSupportedLngs) &&
        (t = this.getLanguagePartFromCode(t)),
      !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(t) > -1
    )
  }
  getBestMatchFromCodes(t) {
    if (!t) return null
    let n
    return (
      t.forEach((r) => {
        if (n) return
        const o = this.formatLanguageCode(r)
        ;(!this.options.supportedLngs || this.isSupportedCode(o)) && (n = o)
      }),
      !n &&
        this.options.supportedLngs &&
        t.forEach((r) => {
          if (n) return
          const o = this.getLanguagePartFromCode(r)
          if (this.isSupportedCode(o)) return (n = o)
          n = this.options.supportedLngs.find((i) => {
            if (i === o) return i
            if (
              !(i.indexOf('-') < 0 && o.indexOf('-') < 0) &&
              ((i.indexOf('-') > 0 && o.indexOf('-') < 0 && i.substring(0, i.indexOf('-')) === o) ||
                (i.indexOf(o) === 0 && o.length > 1))
            )
              return i
          })
        }),
      n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]),
      n
    )
  }
  getFallbackCodes(t, n) {
    if (!t) return []
    if ((typeof t == 'function' && (t = t(n)), typeof t == 'string' && (t = [t]), Array.isArray(t)))
      return t
    if (!n) return t.default || []
    let r = t[n]
    return (
      r || (r = t[this.getScriptPartFromCode(n)]),
      r || (r = t[this.formatLanguageCode(n)]),
      r || (r = t[this.getLanguagePartFromCode(n)]),
      r || (r = t.default),
      r || []
    )
  }
  toResolveHierarchy(t, n) {
    const r = this.getFallbackCodes(n || this.options.fallbackLng || [], t),
      o = [],
      i = (s) => {
        s &&
          (this.isSupportedCode(s)
            ? o.push(s)
            : this.logger.warn(`rejecting language code not found in supportedLngs: ${s}`))
      }
    return (
      typeof t == 'string' && (t.indexOf('-') > -1 || t.indexOf('_') > -1)
        ? (this.options.load !== 'languageOnly' && i(this.formatLanguageCode(t)),
          this.options.load !== 'languageOnly' &&
            this.options.load !== 'currentOnly' &&
            i(this.getScriptPartFromCode(t)),
          this.options.load !== 'currentOnly' && i(this.getLanguagePartFromCode(t)))
        : typeof t == 'string' && i(this.formatLanguageCode(t)),
      r.forEach((s) => {
        o.indexOf(s) < 0 && i(this.formatLanguageCode(s))
      }),
      o
    )
  }
}
let Tv = [
    {
      lngs: [
        'ach',
        'ak',
        'am',
        'arn',
        'br',
        'fil',
        'gun',
        'ln',
        'mfe',
        'mg',
        'mi',
        'oc',
        'pt',
        'pt-BR',
        'tg',
        'tl',
        'ti',
        'tr',
        'uz',
        'wa',
      ],
      nr: [1, 2],
      fc: 1,
    },
    {
      lngs: [
        'af',
        'an',
        'ast',
        'az',
        'bg',
        'bn',
        'ca',
        'da',
        'de',
        'dev',
        'el',
        'en',
        'eo',
        'es',
        'et',
        'eu',
        'fi',
        'fo',
        'fur',
        'fy',
        'gl',
        'gu',
        'ha',
        'hi',
        'hu',
        'hy',
        'ia',
        'it',
        'kk',
        'kn',
        'ku',
        'lb',
        'mai',
        'ml',
        'mn',
        'mr',
        'nah',
        'nap',
        'nb',
        'ne',
        'nl',
        'nn',
        'no',
        'nso',
        'pa',
        'pap',
        'pms',
        'ps',
        'pt-PT',
        'rm',
        'sco',
        'se',
        'si',
        'so',
        'son',
        'sq',
        'sv',
        'sw',
        'ta',
        'te',
        'tk',
        'ur',
        'yo',
      ],
      nr: [1, 2],
      fc: 2,
    },
    {
      lngs: [
        'ay',
        'bo',
        'cgg',
        'fa',
        'ht',
        'id',
        'ja',
        'jbo',
        'ka',
        'km',
        'ko',
        'ky',
        'lo',
        'ms',
        'sah',
        'su',
        'th',
        'tt',
        'ug',
        'vi',
        'wo',
        'zh',
      ],
      nr: [1],
      fc: 3,
    },
    {
      lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
      nr: [1, 2, 5],
      fc: 4,
    },
    {
      lngs: ['ar'],
      nr: [0, 1, 2, 3, 11, 100],
      fc: 5,
    },
    {
      lngs: ['cs', 'sk'],
      nr: [1, 2, 5],
      fc: 6,
    },
    {
      lngs: ['csb', 'pl'],
      nr: [1, 2, 5],
      fc: 7,
    },
    {
      lngs: ['cy'],
      nr: [1, 2, 3, 8],
      fc: 8,
    },
    {
      lngs: ['fr'],
      nr: [1, 2],
      fc: 9,
    },
    {
      lngs: ['ga'],
      nr: [1, 2, 3, 7, 11],
      fc: 10,
    },
    {
      lngs: ['gd'],
      nr: [1, 2, 3, 20],
      fc: 11,
    },
    {
      lngs: ['is'],
      nr: [1, 2],
      fc: 12,
    },
    {
      lngs: ['jv'],
      nr: [0, 1],
      fc: 13,
    },
    {
      lngs: ['kw'],
      nr: [1, 2, 3, 4],
      fc: 14,
    },
    {
      lngs: ['lt'],
      nr: [1, 2, 10],
      fc: 15,
    },
    {
      lngs: ['lv'],
      nr: [1, 2, 0],
      fc: 16,
    },
    {
      lngs: ['mk'],
      nr: [1, 2],
      fc: 17,
    },
    {
      lngs: ['mnk'],
      nr: [0, 1, 2],
      fc: 18,
    },
    {
      lngs: ['mt'],
      nr: [1, 2, 11, 20],
      fc: 19,
    },
    {
      lngs: ['or'],
      nr: [2, 1],
      fc: 2,
    },
    {
      lngs: ['ro'],
      nr: [1, 2, 20],
      fc: 20,
    },
    {
      lngs: ['sl'],
      nr: [5, 1, 2, 3],
      fc: 21,
    },
    {
      lngs: ['he', 'iw'],
      nr: [1, 2, 20, 21],
      fc: 22,
    },
  ],
  kv = {
    1: (e) => +(e > 1),
    2: (e) => +(e != 1),
    3: (e) => 0,
    4: (e) =>
      e % 10 == 1 && e % 100 != 11
        ? 0
        : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
          ? 1
          : 2,
    5: (e) =>
      e == 0
        ? 0
        : e == 1
          ? 1
          : e == 2
            ? 2
            : e % 100 >= 3 && e % 100 <= 10
              ? 3
              : e % 100 >= 11
                ? 4
                : 5,
    6: (e) => (e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2),
    7: (e) => (e == 1 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2),
    8: (e) => (e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3),
    9: (e) => +(e >= 2),
    10: (e) => (e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4),
    11: (e) => (e == 1 || e == 11 ? 0 : e == 2 || e == 12 ? 1 : e > 2 && e < 20 ? 2 : 3),
    12: (e) => +(e % 10 != 1 || e % 100 == 11),
    13: (e) => +(e !== 0),
    14: (e) => (e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3),
    15: (e) =>
      e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2,
    16: (e) => (e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2),
    17: (e) => (e == 1 || (e % 10 == 1 && e % 100 != 11) ? 0 : 1),
    18: (e) => (e == 0 ? 0 : e == 1 ? 1 : 2),
    19: (e) =>
      e == 1
        ? 0
        : e == 0 || (e % 100 > 1 && e % 100 < 11)
          ? 1
          : e % 100 > 10 && e % 100 < 20
            ? 2
            : 3,
    20: (e) => (e == 1 ? 0 : e == 0 || (e % 100 > 0 && e % 100 < 20) ? 1 : 2),
    21: (e) => (e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0),
    22: (e) => (e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3),
  }
const xv = ['v1', 'v2', 'v3'],
  Rv = ['v4'],
  md = {
    zero: 0,
    one: 1,
    two: 2,
    few: 3,
    many: 4,
    other: 5,
  },
  Pv = () => {
    const e = {}
    return (
      Tv.forEach((t) => {
        t.lngs.forEach((n) => {
          e[n] = {
            numbers: t.nr,
            plurals: kv[t.fc],
          }
        })
      }),
      e
    )
  }
class Cv {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    ;(this.languageUtils = t),
      (this.options = n),
      (this.logger = Nt.create('pluralResolver')),
      (!this.options.compatibilityJSON || Rv.includes(this.options.compatibilityJSON)) &&
        (typeof Intl > 'u' || !Intl.PluralRules) &&
        ((this.options.compatibilityJSON = 'v3'),
        this.logger.error(
          'Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.',
        )),
      (this.rules = Pv()),
      (this.pluralRulesCache = {})
  }
  addRule(t, n) {
    this.rules[t] = n
  }
  clearCache() {
    this.pluralRulesCache = {}
  }
  getRule(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    if (this.shouldUseIntlApi())
      try {
        const r = _s(t === 'dev' ? 'en' : t),
          o = n.ordinal ? 'ordinal' : 'cardinal',
          i = JSON.stringify({
            cleanedCode: r,
            type: o,
          })
        if (i in this.pluralRulesCache) return this.pluralRulesCache[i]
        const s = new Intl.PluralRules(r, {
          type: o,
        })
        return (this.pluralRulesCache[i] = s), s
      } catch {
        return
      }
    return this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)]
  }
  needsPlural(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    const r = this.getRule(t, n)
    return this.shouldUseIntlApi()
      ? r && r.resolvedOptions().pluralCategories.length > 1
      : r && r.numbers.length > 1
  }
  getPluralFormsOfKey(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
    return this.getSuffixes(t, r).map((o) => `${n}${o}`)
  }
  getSuffixes(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    const r = this.getRule(t, n)
    return r
      ? this.shouldUseIntlApi()
        ? r
            .resolvedOptions()
            .pluralCategories.sort((o, i) => md[o] - md[i])
            .map(
              (o) =>
                `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ''}${o}`,
            )
        : r.numbers.map((o) => this.getSuffix(t, o, n))
      : []
  }
  getSuffix(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
    const o = this.getRule(t, r)
    return o
      ? this.shouldUseIntlApi()
        ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ''}${o.select(n)}`
        : this.getSuffixRetroCompatible(o, n)
      : (this.logger.warn(`no plural rule found for: ${t}`), '')
  }
  getSuffixRetroCompatible(t, n) {
    const r = t.noAbs ? t.plurals(n) : t.plurals(Math.abs(n))
    let o = t.numbers[r]
    this.options.simplifyPluralSuffix &&
      t.numbers.length === 2 &&
      t.numbers[0] === 1 &&
      (o === 2 ? (o = 'plural') : o === 1 && (o = ''))
    const i = () =>
      this.options.prepend && o.toString() ? this.options.prepend + o.toString() : o.toString()
    return this.options.compatibilityJSON === 'v1'
      ? o === 1
        ? ''
        : typeof o == 'number'
          ? `_plural_${o.toString()}`
          : i()
      : this.options.compatibilityJSON === 'v2' ||
          (this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1)
        ? i()
        : this.options.prepend && r.toString()
          ? this.options.prepend + r.toString()
          : r.toString()
  }
  shouldUseIntlApi() {
    return !xv.includes(this.options.compatibilityJSON)
  }
}
const gd = function (e, t, n) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : '.',
      o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
      i = gv(e, t, n)
    return (
      !i && o && typeof n == 'string' && ((i = Pu(e, n, r)), i === void 0 && (i = Pu(t, n, r))), i
    )
  },
  ba = (e) => e.replace(/\$/g, '$$$$')
class Iv {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    ;(this.logger = Nt.create('interpolator')),
      (this.options = t),
      (this.format = (t.interpolation && t.interpolation.format) || ((n) => n)),
      this.init(t)
  }
  init() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    t.interpolation ||
      (t.interpolation = {
        escapeValue: !0,
      })
    const {
      escape: n,
      escapeValue: r,
      useRawValueToEscape: o,
      prefix: i,
      prefixEscaped: s,
      suffix: a,
      suffixEscaped: u,
      formatSeparator: l,
      unescapeSuffix: d,
      unescapePrefix: f,
      nestingPrefix: c,
      nestingPrefixEscaped: p,
      nestingSuffix: g,
      nestingSuffixEscaped: v,
      nestingOptionsSeparator: S,
      maxReplaces: m,
      alwaysFormat: h,
    } = t.interpolation
    ;(this.escape = n !== void 0 ? n : vv),
      (this.escapeValue = r !== void 0 ? r : !0),
      (this.useRawValueToEscape = o !== void 0 ? o : !1),
      (this.prefix = i ? dr(i) : s || '{{'),
      (this.suffix = a ? dr(a) : u || '}}'),
      (this.formatSeparator = l || ','),
      (this.unescapePrefix = d ? '' : f || '-'),
      (this.unescapeSuffix = this.unescapePrefix ? '' : d || ''),
      (this.nestingPrefix = c ? dr(c) : p || dr('$t(')),
      (this.nestingSuffix = g ? dr(g) : v || dr(')')),
      (this.nestingOptionsSeparator = S || ','),
      (this.maxReplaces = m || 1e3),
      (this.alwaysFormat = h !== void 0 ? h : !1),
      this.resetRegExp()
  }
  reset() {
    this.options && this.init(this.options)
  }
  resetRegExp() {
    const t = (n, r) => (n && n.source === r ? ((n.lastIndex = 0), n) : new RegExp(r, 'g'))
    ;(this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = t(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`,
      )),
      (this.nestingRegexp = t(
        this.nestingRegexp,
        `${this.nestingPrefix}(.+?)${this.nestingSuffix}`,
      ))
  }
  interpolate(t, n, r, o) {
    let i, s, a
    const u =
        (this.options &&
          this.options.interpolation &&
          this.options.interpolation.defaultVariables) ||
        {},
      l = (p) => {
        if (p.indexOf(this.formatSeparator) < 0) {
          const m = gd(n, u, p, this.options.keySeparator, this.options.ignoreJSONStructure)
          return this.alwaysFormat
            ? this.format(m, void 0, r, {
                ...o,
                ...n,
                interpolationkey: p,
              })
            : m
        }
        const g = p.split(this.formatSeparator),
          v = g.shift().trim(),
          S = g.join(this.formatSeparator).trim()
        return this.format(
          gd(n, u, v, this.options.keySeparator, this.options.ignoreJSONStructure),
          S,
          r,
          {
            ...o,
            ...n,
            interpolationkey: v,
          },
        )
      }
    this.resetRegExp()
    const d = (o && o.missingInterpolationHandler) || this.options.missingInterpolationHandler,
      f =
        o && o.interpolation && o.interpolation.skipOnVariables !== void 0
          ? o.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables
    return (
      [
        {
          regex: this.regexpUnescape,
          safeValue: (p) => ba(p),
        },
        {
          regex: this.regexp,
          safeValue: (p) => (this.escapeValue ? ba(this.escape(p)) : ba(p)),
        },
      ].forEach((p) => {
        for (a = 0; (i = p.regex.exec(t)); ) {
          const g = i[1].trim()
          if (((s = l(g)), s === void 0))
            if (typeof d == 'function') {
              const S = d(t, i, o)
              s = typeof S == 'string' ? S : ''
            } else if (o && Object.prototype.hasOwnProperty.call(o, g)) s = ''
            else if (f) {
              s = i[0]
              continue
            } else
              this.logger.warn(`missed to pass in variable ${g} for interpolating ${t}`), (s = '')
          else typeof s != 'string' && !this.useRawValueToEscape && (s = ud(s))
          const v = p.safeValue(s)
          if (
            ((t = t.replace(i[0], v)),
            f
              ? ((p.regex.lastIndex += s.length), (p.regex.lastIndex -= i[0].length))
              : (p.regex.lastIndex = 0),
            a++,
            a >= this.maxReplaces)
          )
            break
        }
      }),
      t
    )
  }
  nest(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      o,
      i,
      s
    const a = (u, l) => {
      const d = this.nestingOptionsSeparator
      if (u.indexOf(d) < 0) return u
      const f = u.split(new RegExp(`${d}[ ]*{`))
      let c = `{${f[1]}`
      ;(u = f[0]), (c = this.interpolate(c, s))
      const p = c.match(/'/g),
        g = c.match(/"/g)
      ;((p && p.length % 2 === 0 && !g) || g.length % 2 !== 0) && (c = c.replace(/'/g, '"'))
      try {
        ;(s = JSON.parse(c)),
          l &&
            (s = {
              ...l,
              ...s,
            })
      } catch (v) {
        return (
          this.logger.warn(`failed parsing options string in nesting for key ${u}`, v),
          `${u}${d}${c}`
        )
      }
      return s.defaultValue && s.defaultValue.indexOf(this.prefix) > -1 && delete s.defaultValue, u
    }
    for (; (o = this.nestingRegexp.exec(t)); ) {
      let u = []
      ;(s = {
        ...r,
      }),
        (s = s.replace && typeof s.replace != 'string' ? s.replace : s),
        (s.applyPostProcessor = !1),
        delete s.defaultValue
      let l = !1
      if (o[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(o[1])) {
        const d = o[1].split(this.formatSeparator).map((f) => f.trim())
        ;(o[1] = d.shift()), (u = d), (l = !0)
      }
      if (((i = n(a.call(this, o[1].trim(), s), s)), i && o[0] === t && typeof i != 'string'))
        return i
      typeof i != 'string' && (i = ud(i)),
        i || (this.logger.warn(`missed to resolve ${o[1]} for nesting ${t}`), (i = '')),
        l &&
          (i = u.reduce(
            (d, f) =>
              this.format(d, f, r.lng, {
                ...r,
                interpolationkey: o[1].trim(),
              }),
            i.trim(),
          )),
        (t = t.replace(o[0], i)),
        (this.regexp.lastIndex = 0)
    }
    return t
  }
}
const Lv = (e) => {
    let t = e.toLowerCase().trim()
    const n = {}
    if (e.indexOf('(') > -1) {
      const r = e.split('(')
      t = r[0].toLowerCase().trim()
      const o = r[1].substring(0, r[1].length - 1)
      t === 'currency' && o.indexOf(':') < 0
        ? n.currency || (n.currency = o.trim())
        : t === 'relativetime' && o.indexOf(':') < 0
          ? n.range || (n.range = o.trim())
          : o.split(';').forEach((s) => {
              if (s) {
                const [a, ...u] = s.split(':'),
                  l = u
                    .join(':')
                    .trim()
                    .replace(/^'+|'+$/g, ''),
                  d = a.trim()
                n[d] || (n[d] = l),
                  l === 'false' && (n[d] = !1),
                  l === 'true' && (n[d] = !0),
                  isNaN(l) || (n[d] = parseInt(l, 10))
              }
            })
    }
    return {
      formatName: t,
      formatOptions: n,
    }
  },
  fr = (e) => {
    const t = {}
    return (n, r, o) => {
      let i = o
      o &&
        o.interpolationkey &&
        o.formatParams &&
        o.formatParams[o.interpolationkey] &&
        o[o.interpolationkey] &&
        (i = {
          ...i,
          [o.interpolationkey]: void 0,
        })
      const s = r + JSON.stringify(i)
      let a = t[s]
      return a || ((a = e(_s(r), o)), (t[s] = a)), a(n)
    }
  }
class Ov {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    ;(this.logger = Nt.create('formatter')),
      (this.options = t),
      (this.formats = {
        number: fr((n, r) => {
          const o = new Intl.NumberFormat(n, {
            ...r,
          })
          return (i) => o.format(i)
        }),
        currency: fr((n, r) => {
          const o = new Intl.NumberFormat(n, {
            ...r,
            style: 'currency',
          })
          return (i) => o.format(i)
        }),
        datetime: fr((n, r) => {
          const o = new Intl.DateTimeFormat(n, {
            ...r,
          })
          return (i) => o.format(i)
        }),
        relativetime: fr((n, r) => {
          const o = new Intl.RelativeTimeFormat(n, {
            ...r,
          })
          return (i) => o.format(i, r.range || 'day')
        }),
        list: fr((n, r) => {
          const o = new Intl.ListFormat(n, {
            ...r,
          })
          return (i) => o.format(i)
        }),
      }),
      this.init(t)
  }
  init(t) {
    const r = (
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : {
            interpolation: {},
          }
    ).interpolation
    this.formatSeparator = r.formatSeparator ? r.formatSeparator : r.formatSeparator || ','
  }
  add(t, n) {
    this.formats[t.toLowerCase().trim()] = n
  }
  addCached(t, n) {
    this.formats[t.toLowerCase().trim()] = fr(n)
  }
  format(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}
    const i = n.split(this.formatSeparator)
    if (
      i.length > 1 &&
      i[0].indexOf('(') > 1 &&
      i[0].indexOf(')') < 0 &&
      i.find((a) => a.indexOf(')') > -1)
    ) {
      const a = i.findIndex((u) => u.indexOf(')') > -1)
      i[0] = [i[0], ...i.splice(1, a)].join(this.formatSeparator)
    }
    return i.reduce((a, u) => {
      const { formatName: l, formatOptions: d } = Lv(u)
      if (this.formats[l]) {
        let f = a
        try {
          const c = (o && o.formatParams && o.formatParams[o.interpolationkey]) || {},
            p = c.locale || c.lng || o.locale || o.lng || r
          f = this.formats[l](a, p, {
            ...d,
            ...o,
            ...c,
          })
        } catch (c) {
          this.logger.warn(c)
        }
        return f
      } else this.logger.warn(`there was no format function for ${l}`)
      return a
    }, t)
  }
}
const Nv = (e, t) => {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--)
}
class Av extends ra {
  constructor(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}
    super(),
      (this.backend = t),
      (this.store = n),
      (this.services = r),
      (this.languageUtils = r.languageUtils),
      (this.options = o),
      (this.logger = Nt.create('backendConnector')),
      (this.waitingReads = []),
      (this.maxParallelReads = o.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5),
      (this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      this.backend && this.backend.init && this.backend.init(r, o.backend, o)
  }
  queueLoad(t, n, r, o) {
    const i = {},
      s = {},
      a = {},
      u = {}
    return (
      t.forEach((l) => {
        let d = !0
        n.forEach((f) => {
          const c = `${l}|${f}`
          !r.reload && this.store.hasResourceBundle(l, f)
            ? (this.state[c] = 2)
            : this.state[c] < 0 ||
              (this.state[c] === 1
                ? s[c] === void 0 && (s[c] = !0)
                : ((this.state[c] = 1),
                  (d = !1),
                  s[c] === void 0 && (s[c] = !0),
                  i[c] === void 0 && (i[c] = !0),
                  u[f] === void 0 && (u[f] = !0)))
        }),
          d || (a[l] = !0)
      }),
      (Object.keys(i).length || Object.keys(s).length) &&
        this.queue.push({
          pending: s,
          pendingCount: Object.keys(s).length,
          loaded: {},
          errors: [],
          callback: o,
        }),
      {
        toLoad: Object.keys(i),
        pending: Object.keys(s),
        toLoadLanguages: Object.keys(a),
        toLoadNamespaces: Object.keys(u),
      }
    )
  }
  loaded(t, n, r) {
    const o = t.split('|'),
      i = o[0],
      s = o[1]
    n && this.emit('failedLoading', i, s, n),
      !n &&
        r &&
        this.store.addResourceBundle(i, s, r, void 0, void 0, {
          skipCopy: !0,
        }),
      (this.state[t] = n ? -1 : 2),
      n && r && (this.state[t] = 0)
    const a = {}
    this.queue.forEach((u) => {
      mv(u.loaded, [i], s),
        Nv(u, t),
        n && u.errors.push(n),
        u.pendingCount === 0 &&
          !u.done &&
          (Object.keys(u.loaded).forEach((l) => {
            a[l] || (a[l] = {})
            const d = u.loaded[l]
            d.length &&
              d.forEach((f) => {
                a[l][f] === void 0 && (a[l][f] = !0)
              })
          }),
          (u.done = !0),
          u.errors.length ? u.callback(u.errors) : u.callback())
    }),
      this.emit('loaded', a),
      (this.queue = this.queue.filter((u) => !u.done))
  }
  read(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout,
      s = arguments.length > 5 ? arguments[5] : void 0
    if (!t.length) return s(null, {})
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: t,
        ns: n,
        fcName: r,
        tried: o,
        wait: i,
        callback: s,
      })
      return
    }
    this.readingCalls++
    const a = (l, d) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const f = this.waitingReads.shift()
          this.read(f.lng, f.ns, f.fcName, f.tried, f.wait, f.callback)
        }
        if (l && d && o < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, t, n, r, o + 1, i * 2, s)
          }, i)
          return
        }
        s(l, d)
      },
      u = this.backend[r].bind(this.backend)
    if (u.length === 2) {
      try {
        const l = u(t, n)
        l && typeof l.then == 'function' ? l.then((d) => a(null, d)).catch(a) : a(null, l)
      } catch (l) {
        a(l)
      }
      return
    }
    return u(t, n, a)
  }
  prepareLoading(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      o = arguments.length > 3 ? arguments[3] : void 0
    if (!this.backend)
      return (
        this.logger.warn('No backend was added via i18next.use. Will not load resources.'), o && o()
      )
    typeof t == 'string' && (t = this.languageUtils.toResolveHierarchy(t)),
      typeof n == 'string' && (n = [n])
    const i = this.queueLoad(t, n, r, o)
    if (!i.toLoad.length) return i.pending.length || o(), null
    i.toLoad.forEach((s) => {
      this.loadOne(s)
    })
  }
  load(t, n, r) {
    this.prepareLoading(t, n, {}, r)
  }
  reload(t, n, r) {
    this.prepareLoading(
      t,
      n,
      {
        reload: !0,
      },
      r,
    )
  }
  loadOne(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ''
    const r = t.split('|'),
      o = r[0],
      i = r[1]
    this.read(o, i, 'read', void 0, void 0, (s, a) => {
      s && this.logger.warn(`${n}loading namespace ${i} for language ${o} failed`, s),
        !s && a && this.logger.log(`${n}loaded namespace ${i} for language ${o}`, a),
        this.loaded(t, s, a)
    })
  }
  saveMissing(t, n, r, o, i) {
    let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
      a = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {}
    if (
      this.services.utils &&
      this.services.utils.hasLoadedNamespace &&
      !this.services.utils.hasLoadedNamespace(n)
    ) {
      this.logger.warn(
        `did not save key "${r}" as the namespace "${n}" was not yet loaded`,
        'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
      )
      return
    }
    if (!(r == null || r === '')) {
      if (this.backend && this.backend.create) {
        const u = {
            ...s,
            isUpdate: i,
          },
          l = this.backend.create.bind(this.backend)
        if (l.length < 6)
          try {
            let d
            l.length === 5 ? (d = l(t, n, r, o, u)) : (d = l(t, n, r, o)),
              d && typeof d.then == 'function' ? d.then((f) => a(null, f)).catch(a) : a(null, d)
          } catch (d) {
            a(d)
          }
        else l(t, n, r, o, a, u)
      }
      !t || !t[0] || this.store.addResource(t[0], n, r, o)
    }
  }
}
const yd = () => ({
    debug: !1,
    initImmediate: !0,
    ns: ['translation'],
    defaultNS: ['translation'],
    fallbackLng: ['dev'],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: 'all',
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: 'fallback',
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: (e) => {
      let t = {}
      if (
        (typeof e[1] == 'object' && (t = e[1]),
        typeof e[1] == 'string' && (t.defaultValue = e[1]),
        typeof e[2] == 'string' && (t.tDescription = e[2]),
        typeof e[2] == 'object' || typeof e[3] == 'object')
      ) {
        const n = e[3] || e[2]
        Object.keys(n).forEach((r) => {
          t[r] = n[r]
        })
      }
      return t
    },
    interpolation: {
      escapeValue: !0,
      format: (e) => e,
      prefix: '{{',
      suffix: '}}',
      formatSeparator: ',',
      unescapePrefix: '-',
      nestingPrefix: '$t(',
      nestingSuffix: ')',
      nestingOptionsSeparator: ',',
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
  }),
  vd = (e) => (
    typeof e.ns == 'string' && (e.ns = [e.ns]),
    typeof e.fallbackLng == 'string' && (e.fallbackLng = [e.fallbackLng]),
    typeof e.fallbackNS == 'string' && (e.fallbackNS = [e.fallbackNS]),
    e.supportedLngs &&
      e.supportedLngs.indexOf('cimode') < 0 &&
      (e.supportedLngs = e.supportedLngs.concat(['cimode'])),
    e
  ),
  ki = () => {},
  Dv = (e) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
      typeof e[n] == 'function' && (e[n] = e[n].bind(e))
    })
  }
class bo extends ra {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0
    if (
      (super(),
      (this.options = vd(t)),
      (this.services = {}),
      (this.logger = Nt),
      (this.modules = {
        external: [],
      }),
      Dv(this),
      n && !this.isInitialized && !t.isClone)
    ) {
      if (!this.options.initImmediate) return this.init(t, n), this
      setTimeout(() => {
        this.init(t, n)
      }, 0)
    }
  }
  init() {
    var t = this
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = arguments.length > 1 ? arguments[1] : void 0
    ;(this.isInitializing = !0),
      typeof n == 'function' && ((r = n), (n = {})),
      !n.defaultNS &&
        n.defaultNS !== !1 &&
        n.ns &&
        (typeof n.ns == 'string'
          ? (n.defaultNS = n.ns)
          : n.ns.indexOf('translation') < 0 && (n.defaultNS = n.ns[0]))
    const o = yd()
    ;(this.options = {
      ...o,
      ...this.options,
      ...vd(n),
    }),
      this.options.compatibilityAPI !== 'v1' &&
        (this.options.interpolation = {
          ...o.interpolation,
          ...this.options.interpolation,
        }),
      n.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = n.keySeparator),
      n.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = n.nsSeparator)
    const i = (d) => (d ? (typeof d == 'function' ? new d() : d) : null)
    if (!this.options.isClone) {
      this.modules.logger
        ? Nt.init(i(this.modules.logger), this.options)
        : Nt.init(null, this.options)
      let d
      this.modules.formatter ? (d = this.modules.formatter) : typeof Intl < 'u' && (d = Ov)
      const f = new hd(this.options)
      this.store = new fd(this.options.resources, this.options)
      const c = this.services
      ;(c.logger = Nt),
        (c.resourceStore = this.store),
        (c.languageUtils = f),
        (c.pluralResolver = new Cv(f, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        d &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === o.interpolation.format) &&
          ((c.formatter = i(d)),
          c.formatter.init(c, this.options),
          (this.options.interpolation.format = c.formatter.format.bind(c.formatter))),
        (c.interpolator = new Iv(this.options)),
        (c.utils = {
          hasLoadedNamespace: this.hasLoadedNamespace.bind(this),
        }),
        (c.backendConnector = new Av(i(this.modules.backend), c.resourceStore, c, this.options)),
        c.backendConnector.on('*', function (p) {
          for (var g = arguments.length, v = new Array(g > 1 ? g - 1 : 0), S = 1; S < g; S++)
            v[S - 1] = arguments[S]
          t.emit(p, ...v)
        }),
        this.modules.languageDetector &&
          ((c.languageDetector = i(this.modules.languageDetector)),
          c.languageDetector.init &&
            c.languageDetector.init(c, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((c.i18nFormat = i(this.modules.i18nFormat)),
          c.i18nFormat.init && c.i18nFormat.init(this)),
        (this.translator = new Ss(this.services, this.options)),
        this.translator.on('*', function (p) {
          for (var g = arguments.length, v = new Array(g > 1 ? g - 1 : 0), S = 1; S < g; S++)
            v[S - 1] = arguments[S]
          t.emit(p, ...v)
        }),
        this.modules.external.forEach((p) => {
          p.init && p.init(this)
        })
    }
    if (
      ((this.format = this.options.interpolation.format),
      r || (r = ki),
      this.options.fallbackLng && !this.services.languageDetector && !this.options.lng)
    ) {
      const d = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng)
      d.length > 0 && d[0] !== 'dev' && (this.options.lng = d[0])
    }
    !this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn('init: no languageDetector is used and no lng is defined'),
      ['getResource', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'].forEach(
        (d) => {
          this[d] = function () {
            return t.store[d](...arguments)
          }
        },
      ),
      ['addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle'].forEach((d) => {
        this[d] = function () {
          return t.store[d](...arguments), t
        }
      })
    const u = uo(),
      l = () => {
        const d = (f, c) => {
          ;(this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn(
                'init: i18next is already initialized. You should call init just once!',
              ),
            (this.isInitialized = !0),
            this.options.isClone || this.logger.log('initialized', this.options),
            this.emit('initialized', this.options),
            u.resolve(c),
            r(f, c)
        }
        if (this.languages && this.options.compatibilityAPI !== 'v1' && !this.isInitialized)
          return d(null, this.t.bind(this))
        this.changeLanguage(this.options.lng, d)
      }
    return this.options.resources || !this.options.initImmediate ? l() : setTimeout(l, 0), u
  }
  loadResources(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ki
    const o = typeof t == 'string' ? t : this.language
    if (
      (typeof t == 'function' && (r = t),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        o &&
        o.toLowerCase() === 'cimode' &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return r()
      const i = [],
        s = (a) => {
          if (!a || a === 'cimode') return
          this.services.languageUtils.toResolveHierarchy(a).forEach((l) => {
            l !== 'cimode' && i.indexOf(l) < 0 && i.push(l)
          })
        }
      o
        ? s(o)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((u) => s(u)),
        this.options.preload && this.options.preload.forEach((a) => s(a)),
        this.services.backendConnector.load(i, this.options.ns, (a) => {
          !a && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language),
            r(a)
        })
    } else r(null)
  }
  reloadResources(t, n, r) {
    const o = uo()
    return (
      typeof t == 'function' && ((r = t), (t = void 0)),
      typeof n == 'function' && ((r = n), (n = void 0)),
      t || (t = this.languages),
      n || (n = this.options.ns),
      r || (r = ki),
      this.services.backendConnector.reload(t, n, (i) => {
        o.resolve(), r(i)
      }),
      o
    )
  }
  use(t) {
    if (!t)
      throw new Error(
        'You are passing an undefined module! Please check the object you are passing to i18next.use()',
      )
    if (!t.type)
      throw new Error(
        'You are passing a wrong module! Please check the object you are passing to i18next.use()',
      )
    return (
      t.type === 'backend' && (this.modules.backend = t),
      (t.type === 'logger' || (t.log && t.warn && t.error)) && (this.modules.logger = t),
      t.type === 'languageDetector' && (this.modules.languageDetector = t),
      t.type === 'i18nFormat' && (this.modules.i18nFormat = t),
      t.type === 'postProcessor' && Qp.addPostProcessor(t),
      t.type === 'formatter' && (this.modules.formatter = t),
      t.type === '3rdParty' && this.modules.external.push(t),
      this
    )
  }
  setResolvedLanguage(t) {
    if (!(!t || !this.languages) && !(['cimode', 'dev'].indexOf(t) > -1))
      for (let n = 0; n < this.languages.length; n++) {
        const r = this.languages[n]
        if (!(['cimode', 'dev'].indexOf(r) > -1) && this.store.hasLanguageSomeTranslations(r)) {
          this.resolvedLanguage = r
          break
        }
      }
  }
  changeLanguage(t, n) {
    var r = this
    this.isLanguageChangingTo = t
    const o = uo()
    this.emit('languageChanging', t)
    const i = (u) => {
        ;(this.language = u),
          (this.languages = this.services.languageUtils.toResolveHierarchy(u)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(u)
      },
      s = (u, l) => {
        l
          ? (i(l),
            this.translator.changeLanguage(l),
            (this.isLanguageChangingTo = void 0),
            this.emit('languageChanged', l),
            this.logger.log('languageChanged', l))
          : (this.isLanguageChangingTo = void 0),
          o.resolve(function () {
            return r.t(...arguments)
          }),
          n &&
            n(u, function () {
              return r.t(...arguments)
            })
      },
      a = (u) => {
        !t && !u && this.services.languageDetector && (u = [])
        const l = typeof u == 'string' ? u : this.services.languageUtils.getBestMatchFromCodes(u)
        l &&
          (this.language || i(l),
          this.translator.language || this.translator.changeLanguage(l),
          this.services.languageDetector &&
            this.services.languageDetector.cacheUserLanguage &&
            this.services.languageDetector.cacheUserLanguage(l)),
          this.loadResources(l, (d) => {
            s(d, l)
          })
      }
    return (
      !t && this.services.languageDetector && !this.services.languageDetector.async
        ? a(this.services.languageDetector.detect())
        : !t && this.services.languageDetector && this.services.languageDetector.async
          ? this.services.languageDetector.detect.length === 0
            ? this.services.languageDetector.detect().then(a)
            : this.services.languageDetector.detect(a)
          : a(t),
      o
    )
  }
  getFixedT(t, n, r) {
    var o = this
    const i = function (s, a) {
      let u
      if (typeof a != 'object') {
        for (var l = arguments.length, d = new Array(l > 2 ? l - 2 : 0), f = 2; f < l; f++)
          d[f - 2] = arguments[f]
        u = o.options.overloadTranslationOptionHandler([s, a].concat(d))
      } else
        u = {
          ...a,
        }
      ;(u.lng = u.lng || i.lng),
        (u.lngs = u.lngs || i.lngs),
        (u.ns = u.ns || i.ns),
        u.keyPrefix !== '' && (u.keyPrefix = u.keyPrefix || r || i.keyPrefix)
      const c = o.options.keySeparator || '.'
      let p
      return (
        u.keyPrefix && Array.isArray(s)
          ? (p = s.map((g) => `${u.keyPrefix}${c}${g}`))
          : (p = u.keyPrefix ? `${u.keyPrefix}${c}${s}` : s),
        o.t(p, u)
      )
    }
    return typeof t == 'string' ? (i.lng = t) : (i.lngs = t), (i.ns = n), (i.keyPrefix = r), i
  }
  t() {
    return this.translator && this.translator.translate(...arguments)
  }
  exists() {
    return this.translator && this.translator.exists(...arguments)
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t
  }
  hasLoadedNamespace(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    if (!this.isInitialized)
      return this.logger.warn('hasLoadedNamespace: i18next was not initialized', this.languages), !1
    if (!this.languages || !this.languages.length)
      return (
        this.logger.warn(
          'hasLoadedNamespace: i18n.languages were undefined or empty',
          this.languages,
        ),
        !1
      )
    const r = n.lng || this.resolvedLanguage || this.languages[0],
      o = this.options ? this.options.fallbackLng : !1,
      i = this.languages[this.languages.length - 1]
    if (r.toLowerCase() === 'cimode') return !0
    const s = (a, u) => {
      const l = this.services.backendConnector.state[`${a}|${u}`]
      return l === -1 || l === 0 || l === 2
    }
    if (n.precheck) {
      const a = n.precheck(this, s)
      if (a !== void 0) return a
    }
    return !!(
      this.hasResourceBundle(r, t) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (s(r, t) && (!o || s(i, t)))
    )
  }
  loadNamespaces(t, n) {
    const r = uo()
    return this.options.ns
      ? (typeof t == 'string' && (t = [t]),
        t.forEach((o) => {
          this.options.ns.indexOf(o) < 0 && this.options.ns.push(o)
        }),
        this.loadResources((o) => {
          r.resolve(), n && n(o)
        }),
        r)
      : (n && n(), Promise.resolve())
  }
  loadLanguages(t, n) {
    const r = uo()
    typeof t == 'string' && (t = [t])
    const o = this.options.preload || [],
      i = t.filter((s) => o.indexOf(s) < 0 && this.services.languageUtils.isSupportedCode(s))
    return i.length
      ? ((this.options.preload = o.concat(i)),
        this.loadResources((s) => {
          r.resolve(), n && n(s)
        }),
        r)
      : (n && n(), Promise.resolve())
  }
  dir(t) {
    if (
      (t ||
        (t =
          this.resolvedLanguage ||
          (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)),
      !t)
    )
      return 'rtl'
    const n = [
        'ar',
        'shu',
        'sqr',
        'ssh',
        'xaa',
        'yhd',
        'yud',
        'aao',
        'abh',
        'abv',
        'acm',
        'acq',
        'acw',
        'acx',
        'acy',
        'adf',
        'ads',
        'aeb',
        'aec',
        'afb',
        'ajp',
        'apc',
        'apd',
        'arb',
        'arq',
        'ars',
        'ary',
        'arz',
        'auz',
        'avl',
        'ayh',
        'ayl',
        'ayn',
        'ayp',
        'bbz',
        'pga',
        'he',
        'iw',
        'ps',
        'pbt',
        'pbu',
        'pst',
        'prp',
        'prd',
        'ug',
        'ur',
        'ydd',
        'yds',
        'yih',
        'ji',
        'yi',
        'hbo',
        'men',
        'xmn',
        'fa',
        'jpr',
        'peo',
        'pes',
        'prs',
        'dv',
        'sam',
        'ckb',
      ],
      r = (this.services && this.services.languageUtils) || new hd(yd())
    return n.indexOf(r.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf('-arab') > 1
      ? 'rtl'
      : 'ltr'
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0
    return new bo(t, n)
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ki
    const r = t.forkResourceStore
    r && delete t.forkResourceStore
    const o = {
        ...this.options,
        ...t,
        isClone: !0,
      },
      i = new bo(o)
    return (
      (t.debug !== void 0 || t.prefix !== void 0) && (i.logger = i.logger.clone(t)),
      ['store', 'services', 'language'].forEach((a) => {
        i[a] = this[a]
      }),
      (i.services = {
        ...this.services,
      }),
      (i.services.utils = {
        hasLoadedNamespace: i.hasLoadedNamespace.bind(i),
      }),
      r && ((i.store = new fd(this.store.data, o)), (i.services.resourceStore = i.store)),
      (i.translator = new Ss(i.services, o)),
      i.translator.on('*', function (a) {
        for (var u = arguments.length, l = new Array(u > 1 ? u - 1 : 0), d = 1; d < u; d++)
          l[d - 1] = arguments[d]
        i.emit(a, ...l)
      }),
      i.init(o, n),
      (i.translator.options = o),
      (i.translator.backendConnector.services.utils = {
        hasLoadedNamespace: i.hasLoadedNamespace.bind(i),
      }),
      i
    )
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage,
    }
  }
}
const Le = bo.createInstance()
Le.createInstance = bo.createInstance
Le.createInstance
Le.dir
Le.init
Le.loadResources
Le.reloadResources
Le.use
Le.changeLanguage
Le.getFixedT
const JR = Le.t
Le.exists
Le.setDefaultNamespace
Le.hasLoadedNamespace
Le.loadNamespaces
Le.loadLanguages
var Mv = function (t) {
    return {
      type: 'backend',
      init: function (r, o, i) {},
      read: function (r, o, i) {
        if (typeof t == 'function') {
          if (t.length < 3) {
            try {
              var s = t(r, o)
              s && typeof s.then == 'function'
                ? s
                    .then(function (a) {
                      return i(null, (a && a.default) || a)
                    })
                    .catch(i)
                : i(null, s)
            } catch (a) {
              i(a)
            }
            return
          }
          t(r, o, i)
          return
        }
        i(null, t && t[r] && t[r][o])
      },
    }
  },
  Cu = {},
  Jp = {
    exports: {},
  },
  rt = {},
  Xp = {
    exports: {},
  },
  Zp = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
;(function (e) {
  function t(E, A) {
    var M = E.length
    E.push(A)
    e: for (; 0 < M; ) {
      var U = (M - 1) >>> 1,
        $ = E[U]
      if (0 < o($, A)) (E[U] = A), (E[M] = $), (M = U)
      else break e
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0]
  }
  function r(E) {
    if (E.length === 0) return null
    var A = E[0],
      M = E.pop()
    if (M !== A) {
      E[0] = M
      e: for (var U = 0, $ = E.length, fe = $ >>> 1; U < fe; ) {
        var he = 2 * (U + 1) - 1,
          gt = E[he],
          st = he + 1,
          Mt = E[st]
        if (0 > o(gt, M))
          st < $ && 0 > o(Mt, gt)
            ? ((E[U] = Mt), (E[st] = M), (U = st))
            : ((E[U] = gt), (E[he] = M), (U = he))
        else if (st < $ && 0 > o(Mt, M)) (E[U] = Mt), (E[st] = M), (U = st)
        else break e
      }
    }
    return A
  }
  function o(E, A) {
    var M = E.sortIndex - A.sortIndex
    return M !== 0 ? M : E.id - A.id
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance
    e.unstable_now = function () {
      return i.now()
    }
  } else {
    var s = Date,
      a = s.now()
    e.unstable_now = function () {
      return s.now() - a
    }
  }
  var u = [],
    l = [],
    d = 1,
    f = null,
    c = 3,
    p = !1,
    g = !1,
    v = !1,
    S = typeof setTimeout == 'function' ? setTimeout : null,
    m = typeof clearTimeout == 'function' ? clearTimeout : null,
    h = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function y(E) {
    for (var A = n(l); A !== null; ) {
      if (A.callback === null) r(l)
      else if (A.startTime <= E) r(l), (A.sortIndex = A.expirationTime), t(u, A)
      else break
      A = n(l)
    }
  }
  function _(E) {
    if (((v = !1), y(E), !g))
      if (n(u) !== null) (g = !0), B(k)
      else {
        var A = n(l)
        A !== null && Q(_, A.startTime - E)
      }
  }
  function k(E, A) {
    ;(g = !1), v && ((v = !1), m(R), (R = -1)), (p = !0)
    var M = c
    try {
      for (y(A), f = n(u); f !== null && (!(f.expirationTime > A) || (E && !b())); ) {
        var U = f.callback
        if (typeof U == 'function') {
          ;(f.callback = null), (c = f.priorityLevel)
          var $ = U(f.expirationTime <= A)
          ;(A = e.unstable_now()),
            typeof $ == 'function' ? (f.callback = $) : f === n(u) && r(u),
            y(A)
        } else r(u)
        f = n(u)
      }
      if (f !== null) var fe = !0
      else {
        var he = n(l)
        he !== null && Q(_, he.startTime - A), (fe = !1)
      }
      return fe
    } finally {
      ;(f = null), (c = M), (p = !1)
    }
  }
  var w = !1,
    T = null,
    R = -1,
    P = 5,
    I = -1
  function b() {
    return !(e.unstable_now() - I < P)
  }
  function O() {
    if (T !== null) {
      var E = e.unstable_now()
      I = E
      var A = !0
      try {
        A = T(!0, E)
      } finally {
        A ? H() : ((w = !1), (T = null))
      }
    } else w = !1
  }
  var H
  if (typeof h == 'function')
    H = function () {
      h(O)
    }
  else if (typeof MessageChannel < 'u') {
    var V = new MessageChannel(),
      z = V.port2
    ;(V.port1.onmessage = O),
      (H = function () {
        z.postMessage(null)
      })
  } else
    H = function () {
      S(O, 0)
    }
  function B(E) {
    ;(T = E), w || ((w = !0), H())
  }
  function Q(E, A) {
    R = S(function () {
      E(e.unstable_now())
    }, A)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null
    }),
    (e.unstable_continueExecution = function () {
      g || p || ((g = !0), B(k))
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
          )
        : (P = 0 < E ? Math.floor(1e3 / E) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return c
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u)
    }),
    (e.unstable_next = function (E) {
      switch (c) {
        case 1:
        case 2:
        case 3:
          var A = 3
          break
        default:
          A = c
      }
      var M = c
      c = A
      try {
        return E()
      } finally {
        c = M
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, A) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          E = 3
      }
      var M = c
      c = E
      try {
        return A()
      } finally {
        c = M
      }
    }),
    (e.unstable_scheduleCallback = function (E, A, M) {
      var U = e.unstable_now()
      switch (
        (typeof M == 'object' && M !== null
          ? ((M = M.delay), (M = typeof M == 'number' && 0 < M ? U + M : U))
          : (M = U),
        E)
      ) {
        case 1:
          var $ = -1
          break
        case 2:
          $ = 250
          break
        case 5:
          $ = 1073741823
          break
        case 4:
          $ = 1e4
          break
        default:
          $ = 5e3
      }
      return (
        ($ = M + $),
        (E = {
          id: d++,
          callback: A,
          priorityLevel: E,
          startTime: M,
          expirationTime: $,
          sortIndex: -1,
        }),
        M > U
          ? ((E.sortIndex = M),
            t(l, E),
            n(u) === null && E === n(l) && (v ? (m(R), (R = -1)) : (v = !0), Q(_, M - U)))
          : ((E.sortIndex = $), t(u, E), g || p || ((g = !0), B(k))),
        E
      )
    }),
    (e.unstable_shouldYield = b),
    (e.unstable_wrapCallback = function (E) {
      var A = c
      return function () {
        var M = c
        c = A
        try {
          return E.apply(this, arguments)
        } finally {
          c = M
        }
      }
    })
})(Zp)
Xp.exports = Zp
var bv = Xp.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fv = F,
  tt = bv
function x(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n])
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  )
}
var eh = new Set(),
  Fo = {}
function or(e, t) {
  $r(e, t), $r(e + 'Capture', t)
}
function $r(e, t) {
  for (Fo[e] = t, e = 0; e < t.length; e++) eh.add(t[e])
}
var Kt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Iu = Object.prototype.hasOwnProperty,
  $v =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  _d = {},
  Sd = {}
function jv(e) {
  return Iu.call(Sd, e) ? !0 : Iu.call(_d, e) ? !1 : $v.test(e) ? (Sd[e] = !0) : ((_d[e] = !0), !1)
}
function zv(e, t, n, r) {
  if (n !== null && n.type === 0) return !1
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0
    case 'boolean':
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
    default:
      return !1
  }
}
function Uv(e, t, n, r) {
  if (t === null || typeof t > 'u' || zv(e, t, n, r)) return !0
  if (r) return !1
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t
      case 4:
        return t === !1
      case 5:
        return isNaN(t)
      case 6:
        return isNaN(t) || 1 > t
    }
  return !1
}
function Fe(e, t, n, r, o, i, s) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s)
}
var ke = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    ke[e] = new Fe(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0]
  ke[t] = new Fe(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  ke[e] = new Fe(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
  ke[e] = new Fe(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    ke[e] = new Fe(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  ke[e] = new Fe(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
  ke[e] = new Fe(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
  ke[e] = new Fe(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
  ke[e] = new Fe(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var Yl = /[\-:]([a-z])/g
function ql(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Yl, ql)
    ke[t] = new Fe(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Yl, ql)
    ke[t] = new Fe(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Yl, ql)
  ke[t] = new Fe(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
  ke[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
ke.xlinkHref = new Fe('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
  ke[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function Ql(e, t, n, r) {
  var o = ke.hasOwnProperty(t) ? ke[t] : null
  ;(o !== null
    ? o.type !== 0
    : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
    (Uv(t, n, o, r) && (n = null),
    r || o === null
      ? jv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var en = Fv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  xi = Symbol.for('react.element'),
  gr = Symbol.for('react.portal'),
  yr = Symbol.for('react.fragment'),
  Jl = Symbol.for('react.strict_mode'),
  Lu = Symbol.for('react.profiler'),
  th = Symbol.for('react.provider'),
  nh = Symbol.for('react.context'),
  Xl = Symbol.for('react.forward_ref'),
  Ou = Symbol.for('react.suspense'),
  Nu = Symbol.for('react.suspense_list'),
  Zl = Symbol.for('react.memo'),
  nn = Symbol.for('react.lazy'),
  rh = Symbol.for('react.offscreen'),
  Ed = Symbol.iterator
function lo(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Ed && e[Ed]) || e['@@iterator']), typeof e == 'function' ? e : null)
}
var ue = Object.assign,
  Fa
function vo(e) {
  if (Fa === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      Fa = (t && t[1]) || ''
    }
  return (
    `
` +
    Fa +
    e
  )
}
var $a = !1
function ja(e, t) {
  if (!e || $a) return ''
  $a = !0
  var n = Error.prepareStackTrace
  Error.prepareStackTrace = void 0
  try {
    if (t)
      if (
        ((t = function () {
          throw Error()
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error()
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, [])
        } catch (l) {
          var r = l
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (l) {
          r = l
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (l) {
        r = l
      }
      e()
    }
  } catch (l) {
    if (l && r && typeof l.stack == 'string') {
      for (
        var o = l.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          a = i.length - 1;
        1 <= s && 0 <= a && o[s] !== i[a];

      )
        a--
      for (; 1 <= s && 0 <= a; s--, a--)
        if (o[s] !== i[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || o[s] !== i[a])) {
                var u =
                  `
` + o[s].replace(' at new ', ' at ')
                return (
                  e.displayName &&
                    u.includes('<anonymous>') &&
                    (u = u.replace('<anonymous>', e.displayName)),
                  u
                )
              }
            while (1 <= s && 0 <= a)
          break
        }
    }
  } finally {
    ;($a = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : '') ? vo(e) : ''
}
function Bv(e) {
  switch (e.tag) {
    case 5:
      return vo(e.type)
    case 16:
      return vo('Lazy')
    case 13:
      return vo('Suspense')
    case 19:
      return vo('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = ja(e.type, !1)), e
    case 11:
      return (e = ja(e.type.render, !1)), e
    case 1:
      return (e = ja(e.type, !0)), e
    default:
      return ''
  }
}
function Au(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case yr:
      return 'Fragment'
    case gr:
      return 'Portal'
    case Lu:
      return 'Profiler'
    case Jl:
      return 'StrictMode'
    case Ou:
      return 'Suspense'
    case Nu:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case nh:
        return (e.displayName || 'Context') + '.Consumer'
      case th:
        return (e._context.displayName || 'Context') + '.Provider'
      case Xl:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case Zl:
        return (t = e.displayName || null), t !== null ? t : Au(e.type) || 'Memo'
      case nn:
        ;(t = e._payload), (e = e._init)
        try {
          return Au(e(t))
        } catch {}
    }
  return null
}
function Hv(e) {
  var t = e.type
  switch (e.tag) {
    case 24:
      return 'Cache'
    case 9:
      return (t.displayName || 'Context') + '.Consumer'
    case 10:
      return (t._context.displayName || 'Context') + '.Provider'
    case 18:
      return 'DehydratedFragment'
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      )
    case 7:
      return 'Fragment'
    case 5:
      return t
    case 4:
      return 'Portal'
    case 3:
      return 'Root'
    case 6:
      return 'Text'
    case 16:
      return Au(t)
    case 8:
      return t === Jl ? 'StrictMode' : 'Mode'
    case 22:
      return 'Offscreen'
    case 12:
      return 'Profiler'
    case 21:
      return 'Scope'
    case 13:
      return 'Suspense'
    case 19:
      return 'SuspenseList'
    case 25:
      return 'TracingMarker'
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null
      if (typeof t == 'string') return t
  }
  return null
}
function vn(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e
    case 'object':
      return e
    default:
      return ''
  }
}
function oh(e) {
  var t = e.type
  return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio')
}
function Vv(e) {
  var t = oh(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t]
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var o = n.get,
      i = n.set
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this)
        },
        set: function (s) {
          ;(r = '' + s), i.call(this, s)
        },
      }),
      Object.defineProperty(e, t, {
        enumerable: n.enumerable,
      }),
      {
        getValue: function () {
          return r
        },
        setValue: function (s) {
          r = '' + s
        },
        stopTracking: function () {
          ;(e._valueTracker = null), delete e[t]
        },
      }
    )
  }
}
function Ri(e) {
  e._valueTracker || (e._valueTracker = Vv(e))
}
function ih(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    r = ''
  return (
    e && (r = oh(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  )
}
function Es(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function Du(e, t) {
  var n = t.checked
  return ue({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  })
}
function wd(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked
  ;(n = vn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
    })
}
function sh(e, t) {
  ;(t = t.checked), t != null && Ql(e, 'checked', t, !1)
}
function Mu(e, t) {
  sh(e, t)
  var n = vn(t.value),
    r = t.type
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n)
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value')
    return
  }
  t.hasOwnProperty('value')
    ? bu(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && bu(e, t.type, vn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Td(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type
    if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null))) return
    ;(t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t)
  }
  ;(n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n)
}
function bu(e, t, n) {
  ;(t !== 'number' || Es(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var _o = Array.isArray
function Or(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {}
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0)
  } else {
    for (n = '' + vn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        ;(e[o].selected = !0), r && (e[o].defaultSelected = !0)
        return
      }
      t !== null || e[o].disabled || (t = e[o])
    }
    t !== null && (t.selected = !0)
  }
}
function Fu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(x(91))
  return ue({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  })
}
function kd(e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(x(92))
      if (_o(n)) {
        if (1 < n.length) throw Error(x(93))
        n = n[0]
      }
      t = n
    }
    t == null && (t = ''), (n = t)
  }
  e._wrapperState = {
    initialValue: vn(n),
  }
}
function ah(e, t) {
  var n = vn(t.value),
    r = vn(t.defaultValue)
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r)
}
function xd(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function uh(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function $u(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? uh(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e
}
var Pi,
  lh = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o)
          })
        }
      : e
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t
    else {
      for (
        Pi = Pi || document.createElement('div'),
          Pi.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Pi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function $o(e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var To = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Wv = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(To).forEach(function (e) {
  Wv.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (To[t] = To[e])
  })
})
function ch(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (To.hasOwnProperty(e) && To[e])
      ? ('' + t).trim()
      : t + 'px'
}
function dh(e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = ch(n, t[n], r)
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o)
    }
}
var Kv = ue(
  {
    menuitem: !0,
  },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
)
function ju(e, t) {
  if (t) {
    if (Kv[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(x(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(x(60))
      if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML))
        throw Error(x(61))
    }
    if (t.style != null && typeof t.style != 'object') throw Error(x(62))
  }
}
function zu(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string'
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1
    default:
      return !0
  }
}
var Uu = null
function ec(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var Bu = null,
  Nr = null,
  Ar = null
function Rd(e) {
  if ((e = li(e))) {
    if (typeof Bu != 'function') throw Error(x(280))
    var t = e.stateNode
    t && ((t = ua(t)), Bu(e.stateNode, e.type, t))
  }
}
function fh(e) {
  Nr ? (Ar ? Ar.push(e) : (Ar = [e])) : (Nr = e)
}
function ph() {
  if (Nr) {
    var e = Nr,
      t = Ar
    if (((Ar = Nr = null), Rd(e), t)) for (e = 0; e < t.length; e++) Rd(t[e])
  }
}
function hh(e, t) {
  return e(t)
}
function mh() {}
var za = !1
function gh(e, t, n) {
  if (za) return e(t, n)
  za = !0
  try {
    return hh(e, t, n)
  } finally {
    ;(za = !1), (Nr !== null || Ar !== null) && (mh(), ph())
  }
}
function jo(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var r = ua(n)
  if (r === null) return null
  n = r[t]
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      ;(r = !r.disabled) ||
        ((e = e.type),
        (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
        (e = !r)
      break e
    default:
      e = !1
  }
  if (e) return null
  if (n && typeof n != 'function') throw Error(x(231, t, typeof n))
  return n
}
var Hu = !1
if (Kt)
  try {
    var co = {}
    Object.defineProperty(co, 'passive', {
      get: function () {
        Hu = !0
      },
    }),
      window.addEventListener('test', co, co),
      window.removeEventListener('test', co, co)
  } catch {
    Hu = !1
  }
function Gv(e, t, n, r, o, i, s, a, u) {
  var l = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, l)
  } catch (d) {
    this.onError(d)
  }
}
var ko = !1,
  ws = null,
  Ts = !1,
  Vu = null,
  Yv = {
    onError: function (e) {
      ;(ko = !0), (ws = e)
    },
  }
function qv(e, t, n, r, o, i, s, a, u) {
  ;(ko = !1), (ws = null), Gv.apply(Yv, arguments)
}
function Qv(e, t, n, r, o, i, s, a, u) {
  if ((qv.apply(this, arguments), ko)) {
    if (ko) {
      var l = ws
      ;(ko = !1), (ws = null)
    } else throw Error(x(198))
    Ts || ((Ts = !0), (Vu = l))
  }
}
function ir(e) {
  var t = e,
    n = e
  if (e.alternate) for (; t.return; ) t = t.return
  else {
    e = t
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return)
    while (e)
  }
  return t.tag === 3 ? n : null
}
function yh(e) {
  if (e.tag === 13) {
    var t = e.memoizedState
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
      return t.dehydrated
  }
  return null
}
function Pd(e) {
  if (ir(e) !== e) throw Error(x(188))
}
function Jv(e) {
  var t = e.alternate
  if (!t) {
    if (((t = ir(e)), t === null)) throw Error(x(188))
    return t !== e ? null : e
  }
  for (var n = e, r = t; ; ) {
    var o = n.return
    if (o === null) break
    var i = o.alternate
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r
        continue
      }
      break
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Pd(o), e
        if (i === r) return Pd(o), t
        i = i.sibling
      }
      throw Error(x(188))
    }
    if (n.return !== r.return) (n = o), (r = i)
    else {
      for (var s = !1, a = o.child; a; ) {
        if (a === n) {
          ;(s = !0), (n = o), (r = i)
          break
        }
        if (a === r) {
          ;(s = !0), (r = o), (n = i)
          break
        }
        a = a.sibling
      }
      if (!s) {
        for (a = i.child; a; ) {
          if (a === n) {
            ;(s = !0), (n = i), (r = o)
            break
          }
          if (a === r) {
            ;(s = !0), (r = i), (n = o)
            break
          }
          a = a.sibling
        }
        if (!s) throw Error(x(189))
      }
    }
    if (n.alternate !== r) throw Error(x(190))
  }
  if (n.tag !== 3) throw Error(x(188))
  return n.stateNode.current === n ? e : t
}
function vh(e) {
  return (e = Jv(e)), e !== null ? _h(e) : null
}
function _h(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = _h(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var Sh = tt.unstable_scheduleCallback,
  Cd = tt.unstable_cancelCallback,
  Xv = tt.unstable_shouldYield,
  Zv = tt.unstable_requestPaint,
  ce = tt.unstable_now,
  e_ = tt.unstable_getCurrentPriorityLevel,
  tc = tt.unstable_ImmediatePriority,
  Eh = tt.unstable_UserBlockingPriority,
  ks = tt.unstable_NormalPriority,
  t_ = tt.unstable_LowPriority,
  wh = tt.unstable_IdlePriority,
  oa = null,
  At = null
function n_(e) {
  if (At && typeof At.onCommitFiberRoot == 'function')
    try {
      At.onCommitFiberRoot(oa, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Et = Math.clz32 ? Math.clz32 : i_,
  r_ = Math.log,
  o_ = Math.LN2
function i_(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((r_(e) / o_) | 0)) | 0
}
var Ci = 64,
  Ii = 4194304
function So(e) {
  switch (e & -e) {
    case 1:
      return 1
    case 2:
      return 2
    case 4:
      return 4
    case 8:
      return 8
    case 16:
      return 16
    case 32:
      return 32
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424
    case 134217728:
      return 134217728
    case 268435456:
      return 268435456
    case 536870912:
      return 536870912
    case 1073741824:
      return 1073741824
    default:
      return e
  }
}
function xs(e, t) {
  var n = e.pendingLanes
  if (n === 0) return 0
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455
  if (s !== 0) {
    var a = s & ~o
    a !== 0 ? (r = So(a)) : ((i &= s), i !== 0 && (r = So(i)))
  } else (s = n & ~o), s !== 0 ? (r = So(s)) : i !== 0 && (r = So(i))
  if (r === 0) return 0
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Et(t)), (o = 1 << n), (r |= e[n]), (t &= ~o)
  return r
}
function s_(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1
    default:
      return -1
  }
}
function a_(e, t) {
  for (
    var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - Et(i),
      a = 1 << s,
      u = o[s]
    u === -1 ? (!(a & n) || a & r) && (o[s] = s_(a, t)) : u <= t && (e.expiredLanes |= a), (i &= ~a)
  }
}
function Wu(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Th() {
  var e = Ci
  return (Ci <<= 1), !(Ci & 4194240) && (Ci = 64), e
}
function Ua(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function ai(e, t, n) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Et(t)),
    (e[t] = n)
}
function u_(e, t) {
  var n = e.pendingLanes & ~t
  ;(e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements)
  var r = e.eventTimes
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Et(n),
      i = 1 << o
    ;(t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i)
  }
}
function nc(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var r = 31 - Et(n),
      o = 1 << r
    ;(o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o)
  }
}
var J = 0
function kh(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var xh,
  rc,
  Rh,
  Ph,
  Ch,
  Ku = !1,
  Li = [],
  ln = null,
  cn = null,
  dn = null,
  zo = new Map(),
  Uo = new Map(),
  on = [],
  l_ =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    )
function Id(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      ln = null
      break
    case 'dragenter':
    case 'dragleave':
      cn = null
      break
    case 'mouseover':
    case 'mouseout':
      dn = null
      break
    case 'pointerover':
    case 'pointerout':
      zo.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      Uo.delete(t.pointerId)
  }
}
function fo(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = li(t)), t !== null && rc(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e)
}
function c_(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (ln = fo(ln, e, t, n, r, o)), !0
    case 'dragenter':
      return (cn = fo(cn, e, t, n, r, o)), !0
    case 'mouseover':
      return (dn = fo(dn, e, t, n, r, o)), !0
    case 'pointerover':
      var i = o.pointerId
      return zo.set(i, fo(zo.get(i) || null, e, t, n, r, o)), !0
    case 'gotpointercapture':
      return (i = o.pointerId), Uo.set(i, fo(Uo.get(i) || null, e, t, n, r, o)), !0
  }
  return !1
}
function Ih(e) {
  var t = bn(e.target)
  if (t !== null) {
    var n = ir(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = yh(n)), t !== null)) {
          ;(e.blockedOn = t),
            Ch(e.priority, function () {
              Rh(n)
            })
          return
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
        return
      }
    }
  }
  e.blockedOn = null
}
function Zi(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Gu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var r = new n.constructor(n.type, n)
      ;(Uu = r), n.target.dispatchEvent(r), (Uu = null)
    } else return (t = li(n)), t !== null && rc(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function Ld(e, t, n) {
  Zi(e) && n.delete(t)
}
function d_() {
  ;(Ku = !1),
    ln !== null && Zi(ln) && (ln = null),
    cn !== null && Zi(cn) && (cn = null),
    dn !== null && Zi(dn) && (dn = null),
    zo.forEach(Ld),
    Uo.forEach(Ld)
}
function po(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ku || ((Ku = !0), tt.unstable_scheduleCallback(tt.unstable_NormalPriority, d_)))
}
function Bo(e) {
  function t(o) {
    return po(o, e)
  }
  if (0 < Li.length) {
    po(Li[0], e)
    for (var n = 1; n < Li.length; n++) {
      var r = Li[n]
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (
    ln !== null && po(ln, e),
      cn !== null && po(cn, e),
      dn !== null && po(dn, e),
      zo.forEach(t),
      Uo.forEach(t),
      n = 0;
    n < on.length;
    n++
  )
    (r = on[n]), r.blockedOn === e && (r.blockedOn = null)
  for (; 0 < on.length && ((n = on[0]), n.blockedOn === null); )
    Ih(n), n.blockedOn === null && on.shift()
}
var Dr = en.ReactCurrentBatchConfig,
  Rs = !0
function f_(e, t, n, r) {
  var o = J,
    i = Dr.transition
  Dr.transition = null
  try {
    ;(J = 1), oc(e, t, n, r)
  } finally {
    ;(J = o), (Dr.transition = i)
  }
}
function p_(e, t, n, r) {
  var o = J,
    i = Dr.transition
  Dr.transition = null
  try {
    ;(J = 4), oc(e, t, n, r)
  } finally {
    ;(J = o), (Dr.transition = i)
  }
}
function oc(e, t, n, r) {
  if (Rs) {
    var o = Gu(e, t, n, r)
    if (o === null) Ja(e, t, r, Ps, n), Id(e, r)
    else if (c_(o, e, t, n, r)) r.stopPropagation()
    else if ((Id(e, r), t & 4 && -1 < l_.indexOf(e))) {
      for (; o !== null; ) {
        var i = li(o)
        if ((i !== null && xh(i), (i = Gu(e, t, n, r)), i === null && Ja(e, t, r, Ps, n), i === o))
          break
        o = i
      }
      o !== null && r.stopPropagation()
    } else Ja(e, t, r, null, n)
  }
}
var Ps = null
function Gu(e, t, n, r) {
  if (((Ps = null), (e = ec(r)), (e = bn(e)), e !== null))
    if (((t = ir(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = yh(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (Ps = e), null
}
function Lh(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4
    case 'message':
      switch (e_()) {
        case tc:
          return 1
        case Eh:
          return 4
        case ks:
        case t_:
          return 16
        case wh:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var an = null,
  ic = null,
  es = null
function Oh() {
  if (es) return es
  var e,
    t = ic,
    n = t.length,
    r,
    o = 'value' in an ? an.value : an.textContent,
    i = o.length
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (es = o.slice(e, 1 < r ? 1 - r : void 0))
}
function ts(e) {
  var t = e.keyCode
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function Oi() {
  return !0
}
function Od() {
  return !1
}
function ot(e) {
  function t(n, r, o, i, s) {
    ;(this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null)
    for (var a in e) e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]))
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Oi
        : Od),
      (this.isPropagationStopped = Od),
      this
    )
  }
  return (
    ue(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Oi))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Oi))
      },
      persist: function () {},
      isPersistent: Oi,
    }),
    t
  )
}
var Zr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  sc = ot(Zr),
  ui = ue({}, Zr, {
    view: 0,
    detail: 0,
  }),
  h_ = ot(ui),
  Ba,
  Ha,
  ho,
  ia = ue({}, ui, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ac,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== ho &&
            (ho && e.type === 'mousemove'
              ? ((Ba = e.screenX - ho.screenX), (Ha = e.screenY - ho.screenY))
              : (Ha = Ba = 0),
            (ho = e)),
          Ba)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Ha
    },
  }),
  Nd = ot(ia),
  m_ = ue({}, ia, {
    dataTransfer: 0,
  }),
  g_ = ot(m_),
  y_ = ue({}, ui, {
    relatedTarget: 0,
  }),
  Va = ot(y_),
  v_ = ue({}, Zr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0,
  }),
  __ = ot(v_),
  S_ = ue({}, Zr, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    },
  }),
  E_ = ot(S_),
  w_ = ue({}, Zr, {
    data: 0,
  }),
  Ad = ot(w_),
  T_ = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  k_ = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  x_ = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  }
function R_(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = x_[e]) ? !!t[e] : !1
}
function ac() {
  return R_
}
var P_ = ue({}, ui, {
    key: function (e) {
      if (e.key) {
        var t = T_[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = ts(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? k_[e.keyCode] || 'Unidentified'
          : ''
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ac,
    charCode: function (e) {
      return e.type === 'keypress' ? ts(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress'
        ? ts(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0
    },
  }),
  C_ = ot(P_),
  I_ = ue({}, ia, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Dd = ot(I_),
  L_ = ue({}, ui, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ac,
  }),
  O_ = ot(L_),
  N_ = ue({}, Zr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0,
  }),
  A_ = ot(N_),
  D_ = ue({}, ia, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  M_ = ot(D_),
  b_ = [9, 13, 27, 32],
  uc = Kt && 'CompositionEvent' in window,
  xo = null
Kt && 'documentMode' in document && (xo = document.documentMode)
var F_ = Kt && 'TextEvent' in window && !xo,
  Nh = Kt && (!uc || (xo && 8 < xo && 11 >= xo)),
  Md = ' ',
  bd = !1
function Ah(e, t) {
  switch (e) {
    case 'keyup':
      return b_.indexOf(t.keyCode) !== -1
    case 'keydown':
      return t.keyCode !== 229
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0
    default:
      return !1
  }
}
function Dh(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var vr = !1
function $_(e, t) {
  switch (e) {
    case 'compositionend':
      return Dh(t)
    case 'keypress':
      return t.which !== 32 ? null : ((bd = !0), Md)
    case 'textInput':
      return (e = t.data), e === Md && bd ? null : e
    default:
      return null
  }
}
function j_(e, t) {
  if (vr)
    return e === 'compositionend' || (!uc && Ah(e, t))
      ? ((e = Oh()), (es = ic = an = null), (vr = !1), e)
      : null
  switch (e) {
    case 'paste':
      return null
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char
        if (t.which) return String.fromCharCode(t.which)
      }
      return null
    case 'compositionend':
      return Nh && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var z_ = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
}
function Fd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!z_[e.type] : t === 'textarea'
}
function Mh(e, t, n, r) {
  fh(r),
    (t = Cs(t, 'onChange')),
    0 < t.length &&
      ((n = new sc('onChange', 'change', null, n, r)),
      e.push({
        event: n,
        listeners: t,
      }))
}
var Ro = null,
  Ho = null
function U_(e) {
  Kh(e, 0)
}
function sa(e) {
  var t = Er(e)
  if (ih(t)) return e
}
function B_(e, t) {
  if (e === 'change') return t
}
var bh = !1
if (Kt) {
  var Wa
  if (Kt) {
    var Ka = 'oninput' in document
    if (!Ka) {
      var $d = document.createElement('div')
      $d.setAttribute('oninput', 'return;'), (Ka = typeof $d.oninput == 'function')
    }
    Wa = Ka
  } else Wa = !1
  bh = Wa && (!document.documentMode || 9 < document.documentMode)
}
function jd() {
  Ro && (Ro.detachEvent('onpropertychange', Fh), (Ho = Ro = null))
}
function Fh(e) {
  if (e.propertyName === 'value' && sa(Ho)) {
    var t = []
    Mh(t, Ho, e, ec(e)), gh(U_, t)
  }
}
function H_(e, t, n) {
  e === 'focusin'
    ? (jd(), (Ro = t), (Ho = n), Ro.attachEvent('onpropertychange', Fh))
    : e === 'focusout' && jd()
}
function V_(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return sa(Ho)
}
function W_(e, t) {
  if (e === 'click') return sa(t)
}
function K_(e, t) {
  if (e === 'input' || e === 'change') return sa(t)
}
function G_(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var Tt = typeof Object.is == 'function' ? Object.is : G_
function Vo(e, t) {
  if (Tt(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1
  var n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) {
    var o = n[r]
    if (!Iu.call(t, o) || !Tt(e[o], t[o])) return !1
  }
  return !0
}
function zd(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function Ud(e, t) {
  var n = zd(e)
  e = 0
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return {
          node: n,
          offset: t - e,
        }
      e = r
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = zd(n)
  }
}
function $h(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? $h(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1
}
function jh() {
  for (var e = window, t = Es(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = Es(e.document)
  }
  return t
}
function lc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  )
}
function Y_(e) {
  var t = jh(),
    n = e.focusedElem,
    r = e.selectionRange
  if (t !== n && n && n.ownerDocument && $h(n.ownerDocument.documentElement, n)) {
    if (r !== null && lc(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length))
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)
      ) {
        e = e.getSelection()
        var o = n.textContent.length,
          i = Math.min(r.start, o)
        ;(r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Ud(n, i))
        var s = Ud(n, r)
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)))
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({
          element: e,
          left: e.scrollLeft,
          top: e.scrollTop,
        })
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
  }
}
var q_ = Kt && 'documentMode' in document && 11 >= document.documentMode,
  _r = null,
  Yu = null,
  Po = null,
  qu = !1
function Bd(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  qu ||
    _r == null ||
    _r !== Es(r) ||
    ((r = _r),
    'selectionStart' in r && lc(r)
      ? (r = {
          start: r.selectionStart,
          end: r.selectionEnd,
        })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Po && Vo(Po, r)) ||
      ((Po = r),
      (r = Cs(Yu, 'onSelect')),
      0 < r.length &&
        ((t = new sc('onSelect', 'select', null, t, n)),
        e.push({
          event: t,
          listeners: r,
        }),
        (t.target = _r))))
}
function Ni(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  )
}
var Sr = {
    animationend: Ni('Animation', 'AnimationEnd'),
    animationiteration: Ni('Animation', 'AnimationIteration'),
    animationstart: Ni('Animation', 'AnimationStart'),
    transitionend: Ni('Transition', 'TransitionEnd'),
  },
  Ga = {},
  zh = {}
Kt &&
  ((zh = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Sr.animationend.animation,
    delete Sr.animationiteration.animation,
    delete Sr.animationstart.animation),
  'TransitionEvent' in window || delete Sr.transitionend.transition)
function aa(e) {
  if (Ga[e]) return Ga[e]
  if (!Sr[e]) return e
  var t = Sr[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in zh) return (Ga[e] = t[n])
  return e
}
var Uh = aa('animationend'),
  Bh = aa('animationiteration'),
  Hh = aa('animationstart'),
  Vh = aa('transitionend'),
  Wh = new Map(),
  Hd =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' ',
    )
function xn(e, t) {
  Wh.set(e, t), or(t, [e])
}
for (var Ya = 0; Ya < Hd.length; Ya++) {
  var qa = Hd[Ya],
    Q_ = qa.toLowerCase(),
    J_ = qa[0].toUpperCase() + qa.slice(1)
  xn(Q_, 'on' + J_)
}
xn(Uh, 'onAnimationEnd')
xn(Bh, 'onAnimationIteration')
xn(Hh, 'onAnimationStart')
xn('dblclick', 'onDoubleClick')
xn('focusin', 'onFocus')
xn('focusout', 'onBlur')
xn(Vh, 'onTransitionEnd')
$r('onMouseEnter', ['mouseout', 'mouseover'])
$r('onMouseLeave', ['mouseout', 'mouseover'])
$r('onPointerEnter', ['pointerout', 'pointerover'])
$r('onPointerLeave', ['pointerout', 'pointerover'])
or('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '))
or(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' '),
)
or('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
or('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '))
or('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '))
or('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '))
var Eo =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  X_ = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Eo))
function Vd(e, t, n) {
  var r = e.type || 'unknown-event'
  ;(e.currentTarget = n), Qv(r, t, void 0, e), (e.currentTarget = null)
}
function Kh(e, t) {
  t = (t & 4) !== 0
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event
    r = r.listeners
    e: {
      var i = void 0
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            u = a.instance,
            l = a.currentTarget
          if (((a = a.listener), u !== i && o.isPropagationStopped())) break e
          Vd(o, a, l), (i = u)
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (u = a.instance),
            (l = a.currentTarget),
            (a = a.listener),
            u !== i && o.isPropagationStopped())
          )
            break e
          Vd(o, a, l), (i = u)
        }
    }
  }
  if (Ts) throw ((e = Vu), (Ts = !1), (Vu = null), e)
}
function ne(e, t) {
  var n = t[el]
  n === void 0 && (n = t[el] = new Set())
  var r = e + '__bubble'
  n.has(r) || (Gh(t, e, 2, !1), n.add(r))
}
function Qa(e, t, n) {
  var r = 0
  t && (r |= 4), Gh(n, e, r, t)
}
var Ai = '_reactListening' + Math.random().toString(36).slice(2)
function Wo(e) {
  if (!e[Ai]) {
    ;(e[Ai] = !0),
      eh.forEach(function (n) {
        n !== 'selectionchange' && (X_.has(n) || Qa(n, !1, e), Qa(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[Ai] || ((t[Ai] = !0), Qa('selectionchange', !1, t))
  }
}
function Gh(e, t, n, r) {
  switch (Lh(t)) {
    case 1:
      var o = f_
      break
    case 4:
      o = p_
      break
    default:
      o = oc
  }
  ;(n = o.bind(null, t, n, e)),
    (o = void 0),
    !Hu || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, {
            capture: !0,
            passive: o,
          })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, {
            passive: o,
          })
        : e.addEventListener(t, n, !1)
}
function Ja(e, t, n, r, o) {
  var i = r
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return
      var s = r.tag
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var u = s.tag
            if (
              (u === 3 || u === 4) &&
              ((u = s.stateNode.containerInfo), u === o || (u.nodeType === 8 && u.parentNode === o))
            )
              return
            s = s.return
          }
        for (; a !== null; ) {
          if (((s = bn(a)), s === null)) return
          if (((u = s.tag), u === 5 || u === 6)) {
            r = i = s
            continue e
          }
          a = a.parentNode
        }
      }
      r = r.return
    }
  gh(function () {
    var l = i,
      d = ec(n),
      f = []
    e: {
      var c = Wh.get(e)
      if (c !== void 0) {
        var p = sc,
          g = e
        switch (e) {
          case 'keypress':
            if (ts(n) === 0) break e
          case 'keydown':
          case 'keyup':
            p = C_
            break
          case 'focusin':
            ;(g = 'focus'), (p = Va)
            break
          case 'focusout':
            ;(g = 'blur'), (p = Va)
            break
          case 'beforeblur':
          case 'afterblur':
            p = Va
            break
          case 'click':
            if (n.button === 2) break e
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            p = Nd
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            p = g_
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            p = O_
            break
          case Uh:
          case Bh:
          case Hh:
            p = __
            break
          case Vh:
            p = A_
            break
          case 'scroll':
            p = h_
            break
          case 'wheel':
            p = M_
            break
          case 'copy':
          case 'cut':
          case 'paste':
            p = E_
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            p = Dd
        }
        var v = (t & 4) !== 0,
          S = !v && e === 'scroll',
          m = v ? (c !== null ? c + 'Capture' : null) : c
        v = []
        for (var h = l, y; h !== null; ) {
          y = h
          var _ = y.stateNode
          if (
            (y.tag === 5 &&
              _ !== null &&
              ((y = _), m !== null && ((_ = jo(h, m)), _ != null && v.push(Ko(h, _, y)))),
            S)
          )
            break
          h = h.return
        }
        0 < v.length &&
          ((c = new p(c, g, null, n, d)),
          f.push({
            event: c,
            listeners: v,
          }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((c = e === 'mouseover' || e === 'pointerover'),
          (p = e === 'mouseout' || e === 'pointerout'),
          c && n !== Uu && (g = n.relatedTarget || n.fromElement) && (bn(g) || g[Gt]))
        )
          break e
        if (
          (p || c) &&
          ((c =
            d.window === d ? d : (c = d.ownerDocument) ? c.defaultView || c.parentWindow : window),
          p
            ? ((g = n.relatedTarget || n.toElement),
              (p = l),
              (g = g ? bn(g) : null),
              g !== null && ((S = ir(g)), g !== S || (g.tag !== 5 && g.tag !== 6)) && (g = null))
            : ((p = null), (g = l)),
          p !== g)
        ) {
          if (
            ((v = Nd),
            (_ = 'onMouseLeave'),
            (m = 'onMouseEnter'),
            (h = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((v = Dd), (_ = 'onPointerLeave'), (m = 'onPointerEnter'), (h = 'pointer')),
            (S = p == null ? c : Er(p)),
            (y = g == null ? c : Er(g)),
            (c = new v(_, h + 'leave', p, n, d)),
            (c.target = S),
            (c.relatedTarget = y),
            (_ = null),
            bn(d) === l &&
              ((v = new v(m, h + 'enter', g, n, d)),
              (v.target = y),
              (v.relatedTarget = S),
              (_ = v)),
            (S = _),
            p && g)
          )
            t: {
              for (v = p, m = g, h = 0, y = v; y; y = pr(y)) h++
              for (y = 0, _ = m; _; _ = pr(_)) y++
              for (; 0 < h - y; ) (v = pr(v)), h--
              for (; 0 < y - h; ) (m = pr(m)), y--
              for (; h--; ) {
                if (v === m || (m !== null && v === m.alternate)) break t
                ;(v = pr(v)), (m = pr(m))
              }
              v = null
            }
          else v = null
          p !== null && Wd(f, c, p, v, !1), g !== null && S !== null && Wd(f, S, g, v, !0)
        }
      }
      e: {
        if (
          ((c = l ? Er(l) : window),
          (p = c.nodeName && c.nodeName.toLowerCase()),
          p === 'select' || (p === 'input' && c.type === 'file'))
        )
          var k = B_
        else if (Fd(c))
          if (bh) k = K_
          else {
            k = V_
            var w = H_
          }
        else
          (p = c.nodeName) &&
            p.toLowerCase() === 'input' &&
            (c.type === 'checkbox' || c.type === 'radio') &&
            (k = W_)
        if (k && (k = k(e, l))) {
          Mh(f, k, n, d)
          break e
        }
        w && w(e, c, l),
          e === 'focusout' &&
            (w = c._wrapperState) &&
            w.controlled &&
            c.type === 'number' &&
            bu(c, 'number', c.value)
      }
      switch (((w = l ? Er(l) : window), e)) {
        case 'focusin':
          ;(Fd(w) || w.contentEditable === 'true') && ((_r = w), (Yu = l), (Po = null))
          break
        case 'focusout':
          Po = Yu = _r = null
          break
        case 'mousedown':
          qu = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(qu = !1), Bd(f, n, d)
          break
        case 'selectionchange':
          if (q_) break
        case 'keydown':
        case 'keyup':
          Bd(f, n, d)
      }
      var T
      if (uc)
        e: {
          switch (e) {
            case 'compositionstart':
              var R = 'onCompositionStart'
              break e
            case 'compositionend':
              R = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              R = 'onCompositionUpdate'
              break e
          }
          R = void 0
        }
      else
        vr
          ? Ah(e, n) && (R = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (R = 'onCompositionStart')
      R &&
        (Nh &&
          n.locale !== 'ko' &&
          (vr || R !== 'onCompositionStart'
            ? R === 'onCompositionEnd' && vr && (T = Oh())
            : ((an = d), (ic = 'value' in an ? an.value : an.textContent), (vr = !0))),
        (w = Cs(l, R)),
        0 < w.length &&
          ((R = new Ad(R, e, null, n, d)),
          f.push({
            event: R,
            listeners: w,
          }),
          T ? (R.data = T) : ((T = Dh(n)), T !== null && (R.data = T)))),
        (T = F_ ? $_(e, n) : j_(e, n)) &&
          ((l = Cs(l, 'onBeforeInput')),
          0 < l.length &&
            ((d = new Ad('onBeforeInput', 'beforeinput', null, n, d)),
            f.push({
              event: d,
              listeners: l,
            }),
            (d.data = T)))
    }
    Kh(f, t)
  })
}
function Ko(e, t, n) {
  return {
    instance: e,
    listener: t,
    currentTarget: n,
  }
}
function Cs(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      i = o.stateNode
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = jo(e, n)),
      i != null && r.unshift(Ko(e, i, o)),
      (i = jo(e, t)),
      i != null && r.push(Ko(e, i, o))),
      (e = e.return)
  }
  return r
}
function pr(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function Wd(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      l = a.stateNode
    if (u !== null && u === r) break
    a.tag === 5 &&
      l !== null &&
      ((a = l),
      o
        ? ((u = jo(n, i)), u != null && s.unshift(Ko(n, u, a)))
        : o || ((u = jo(n, i)), u != null && s.push(Ko(n, u, a)))),
      (n = n.return)
  }
  s.length !== 0 &&
    e.push({
      event: t,
      listeners: s,
    })
}
var Z_ = /\r\n?/g,
  e0 = /\u0000|\uFFFD/g
function Kd(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Z_,
      `
`,
    )
    .replace(e0, '')
}
function Di(e, t, n) {
  if (((t = Kd(t)), Kd(e) !== t && n)) throw Error(x(425))
}
function Is() {}
var Qu = null,
  Ju = null
function Xu(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  )
}
var Zu = typeof setTimeout == 'function' ? setTimeout : void 0,
  t0 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Gd = typeof Promise == 'function' ? Promise : void 0,
  n0 =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Gd < 'u'
        ? function (e) {
            return Gd.resolve(null).then(e).catch(r0)
          }
        : Zu
function r0(e) {
  setTimeout(function () {
    throw e
  })
}
function Xa(e, t) {
  var n = t,
    r = 0
  do {
    var o = n.nextSibling
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), Bo(t)
          return
        }
        r--
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++
    n = o
  } while (n)
  Bo(t)
}
function fn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType
    if (t === 1 || t === 3) break
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
      if (t === '/$') return null
    }
  }
  return e
}
function Yd(e) {
  e = e.previousSibling
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e
        t--
      } else n === '/$' && t++
    }
    e = e.previousSibling
  }
  return null
}
var eo = Math.random().toString(36).slice(2),
  Ot = '__reactFiber$' + eo,
  Go = '__reactProps$' + eo,
  Gt = '__reactContainer$' + eo,
  el = '__reactEvents$' + eo,
  o0 = '__reactListeners$' + eo,
  i0 = '__reactHandles$' + eo
function bn(e) {
  var t = e[Ot]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[Gt] || n[Ot])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = Yd(e); e !== null; ) {
          if ((n = e[Ot])) return n
          e = Yd(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function li(e) {
  return (
    (e = e[Ot] || e[Gt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function Er(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(x(33))
}
function ua(e) {
  return e[Go] || null
}
var tl = [],
  wr = -1
function Rn(e) {
  return {
    current: e,
  }
}
function re(e) {
  0 > wr || ((e.current = tl[wr]), (tl[wr] = null), wr--)
}
function ee(e, t) {
  wr++, (tl[wr] = e.current), (e.current = t)
}
var _n = {},
  Ie = Rn(_n),
  We = Rn(!1),
  Gn = _n
function jr(e, t) {
  var n = e.type.contextTypes
  if (!n) return _n
  var r = e.stateNode
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext
  var o = {},
    i
  for (i in n) o[i] = t[i]
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  )
}
function Ke(e) {
  return (e = e.childContextTypes), e != null
}
function Ls() {
  re(We), re(Ie)
}
function qd(e, t, n) {
  if (Ie.current !== _n) throw Error(x(168))
  ee(Ie, t), ee(We, n)
}
function Yh(e, t, n) {
  var r = e.stateNode
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n
  r = r.getChildContext()
  for (var o in r) if (!(o in t)) throw Error(x(108, Hv(e) || 'Unknown', o))
  return ue({}, n, r)
}
function Os(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || _n),
    (Gn = Ie.current),
    ee(Ie, e),
    ee(We, We.current),
    !0
  )
}
function Qd(e, t, n) {
  var r = e.stateNode
  if (!r) throw Error(x(169))
  n
    ? ((e = Yh(e, t, Gn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      re(We),
      re(Ie),
      ee(Ie, e))
    : re(We),
    ee(We, n)
}
var zt = null,
  la = !1,
  Za = !1
function qh(e) {
  zt === null ? (zt = [e]) : zt.push(e)
}
function s0(e) {
  ;(la = !0), qh(e)
}
function Pn() {
  if (!Za && zt !== null) {
    Za = !0
    var e = 0,
      t = J
    try {
      var n = zt
      for (J = 1; e < n.length; e++) {
        var r = n[e]
        do r = r(!0)
        while (r !== null)
      }
      ;(zt = null), (la = !1)
    } catch (o) {
      throw (zt !== null && (zt = zt.slice(e + 1)), Sh(tc, Pn), o)
    } finally {
      ;(J = t), (Za = !1)
    }
  }
  return null
}
var Tr = [],
  kr = 0,
  Ns = null,
  As = 0,
  at = [],
  ut = 0,
  Yn = null,
  Ut = 1,
  Bt = ''
function Nn(e, t) {
  ;(Tr[kr++] = As), (Tr[kr++] = Ns), (Ns = e), (As = t)
}
function Qh(e, t, n) {
  ;(at[ut++] = Ut), (at[ut++] = Bt), (at[ut++] = Yn), (Yn = e)
  var r = Ut
  e = Bt
  var o = 32 - Et(r) - 1
  ;(r &= ~(1 << o)), (n += 1)
  var i = 32 - Et(t) + o
  if (30 < i) {
    var s = o - (o % 5)
    ;(i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (Ut = (1 << (32 - Et(t) + o)) | (n << o) | r),
      (Bt = i + e)
  } else (Ut = (1 << i) | (n << o) | r), (Bt = e)
}
function cc(e) {
  e.return !== null && (Nn(e, 1), Qh(e, 1, 0))
}
function dc(e) {
  for (; e === Ns; ) (Ns = Tr[--kr]), (Tr[kr] = null), (As = Tr[--kr]), (Tr[kr] = null)
  for (; e === Yn; )
    (Yn = at[--ut]),
      (at[ut] = null),
      (Bt = at[--ut]),
      (at[ut] = null),
      (Ut = at[--ut]),
      (at[ut] = null)
}
var Ze = null,
  Je = null,
  ie = !1,
  St = null
function Jh(e, t) {
  var n = lt(5, null, null, 0)
  ;(n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function Jd(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (Ze = e), (Je = fn(t.firstChild)), !0) : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ze = e), (Je = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n =
              Yn !== null
                ? {
                    id: Ut,
                    overflow: Bt,
                  }
                : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = lt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ze = e),
            (Je = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function nl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function rl(e) {
  if (ie) {
    var t = Je
    if (t) {
      var n = t
      if (!Jd(e, t)) {
        if (nl(e)) throw Error(x(418))
        t = fn(n.nextSibling)
        var r = Ze
        t && Jd(e, t) ? Jh(r, n) : ((e.flags = (e.flags & -4097) | 2), (ie = !1), (Ze = e))
      }
    } else {
      if (nl(e)) throw Error(x(418))
      ;(e.flags = (e.flags & -4097) | 2), (ie = !1), (Ze = e)
    }
  }
}
function Xd(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return
  Ze = e
}
function Mi(e) {
  if (e !== Ze) return !1
  if (!ie) return Xd(e), (ie = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== 'head' && t !== 'body' && !Xu(e.type, e.memoizedProps))),
    t && (t = Je))
  ) {
    if (nl(e)) throw (Xh(), Error(x(418)))
    for (; t; ) Jh(e, t), (t = fn(t.nextSibling))
  }
  if ((Xd(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(x(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === '/$') {
            if (t === 0) {
              Je = fn(e.nextSibling)
              break e
            }
            t--
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++
        }
        e = e.nextSibling
      }
      Je = null
    }
  } else Je = Ze ? fn(e.stateNode.nextSibling) : null
  return !0
}
function Xh() {
  for (var e = Je; e; ) e = fn(e.nextSibling)
}
function zr() {
  ;(Je = Ze = null), (ie = !1)
}
function fc(e) {
  St === null ? (St = [e]) : St.push(e)
}
var a0 = en.ReactCurrentBatchConfig
function mo(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(x(309))
        var r = n.stateNode
      }
      if (!r) throw Error(x(147, e))
      var o = r,
        i = '' + e
      return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var a = o.refs
            s === null ? delete a[i] : (a[i] = s)
          }),
          (t._stringRef = i),
          t)
    }
    if (typeof e != 'string') throw Error(x(284))
    if (!n._owner) throw Error(x(290, e))
  }
  return e
}
function bi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      x(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e),
    ))
  )
}
function Zd(e) {
  var t = e._init
  return t(e._payload)
}
function Zh(e) {
  function t(m, h) {
    if (e) {
      var y = m.deletions
      y === null ? ((m.deletions = [h]), (m.flags |= 16)) : y.push(h)
    }
  }
  function n(m, h) {
    if (!e) return null
    for (; h !== null; ) t(m, h), (h = h.sibling)
    return null
  }
  function r(m, h) {
    for (m = new Map(); h !== null; )
      h.key !== null ? m.set(h.key, h) : m.set(h.index, h), (h = h.sibling)
    return m
  }
  function o(m, h) {
    return (m = gn(m, h)), (m.index = 0), (m.sibling = null), m
  }
  function i(m, h, y) {
    return (
      (m.index = y),
      e
        ? ((y = m.alternate),
          y !== null ? ((y = y.index), y < h ? ((m.flags |= 2), h) : y) : ((m.flags |= 2), h))
        : ((m.flags |= 1048576), h)
    )
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m
  }
  function a(m, h, y, _) {
    return h === null || h.tag !== 6
      ? ((h = su(y, m.mode, _)), (h.return = m), h)
      : ((h = o(h, y)), (h.return = m), h)
  }
  function u(m, h, y, _) {
    var k = y.type
    return k === yr
      ? d(m, h, y.props.children, _, y.key)
      : h !== null &&
          (h.elementType === k ||
            (typeof k == 'object' && k !== null && k.$$typeof === nn && Zd(k) === h.type))
        ? ((_ = o(h, y.props)), (_.ref = mo(m, h, y)), (_.return = m), _)
        : ((_ = us(y.type, y.key, y.props, null, m.mode, _)),
          (_.ref = mo(m, h, y)),
          (_.return = m),
          _)
  }
  function l(m, h, y, _) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== y.containerInfo ||
      h.stateNode.implementation !== y.implementation
      ? ((h = au(y, m.mode, _)), (h.return = m), h)
      : ((h = o(h, y.children || [])), (h.return = m), h)
  }
  function d(m, h, y, _, k) {
    return h === null || h.tag !== 7
      ? ((h = Un(y, m.mode, _, k)), (h.return = m), h)
      : ((h = o(h, y)), (h.return = m), h)
  }
  function f(m, h, y) {
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return (h = su('' + h, m.mode, y)), (h.return = m), h
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case xi:
          return (
            (y = us(h.type, h.key, h.props, null, m.mode, y)),
            (y.ref = mo(m, null, h)),
            (y.return = m),
            y
          )
        case gr:
          return (h = au(h, m.mode, y)), (h.return = m), h
        case nn:
          var _ = h._init
          return f(m, _(h._payload), y)
      }
      if (_o(h) || lo(h)) return (h = Un(h, m.mode, y, null)), (h.return = m), h
      bi(m, h)
    }
    return null
  }
  function c(m, h, y, _) {
    var k = h !== null ? h.key : null
    if ((typeof y == 'string' && y !== '') || typeof y == 'number')
      return k !== null ? null : a(m, h, '' + y, _)
    if (typeof y == 'object' && y !== null) {
      switch (y.$$typeof) {
        case xi:
          return y.key === k ? u(m, h, y, _) : null
        case gr:
          return y.key === k ? l(m, h, y, _) : null
        case nn:
          return (k = y._init), c(m, h, k(y._payload), _)
      }
      if (_o(y) || lo(y)) return k !== null ? null : d(m, h, y, _, null)
      bi(m, y)
    }
    return null
  }
  function p(m, h, y, _, k) {
    if ((typeof _ == 'string' && _ !== '') || typeof _ == 'number')
      return (m = m.get(y) || null), a(h, m, '' + _, k)
    if (typeof _ == 'object' && _ !== null) {
      switch (_.$$typeof) {
        case xi:
          return (m = m.get(_.key === null ? y : _.key) || null), u(h, m, _, k)
        case gr:
          return (m = m.get(_.key === null ? y : _.key) || null), l(h, m, _, k)
        case nn:
          var w = _._init
          return p(m, h, y, w(_._payload), k)
      }
      if (_o(_) || lo(_)) return (m = m.get(y) || null), d(h, m, _, k, null)
      bi(h, _)
    }
    return null
  }
  function g(m, h, y, _) {
    for (var k = null, w = null, T = h, R = (h = 0), P = null; T !== null && R < y.length; R++) {
      T.index > R ? ((P = T), (T = null)) : (P = T.sibling)
      var I = c(m, T, y[R], _)
      if (I === null) {
        T === null && (T = P)
        break
      }
      e && T && I.alternate === null && t(m, T),
        (h = i(I, h, R)),
        w === null ? (k = I) : (w.sibling = I),
        (w = I),
        (T = P)
    }
    if (R === y.length) return n(m, T), ie && Nn(m, R), k
    if (T === null) {
      for (; R < y.length; R++)
        (T = f(m, y[R], _)),
          T !== null && ((h = i(T, h, R)), w === null ? (k = T) : (w.sibling = T), (w = T))
      return ie && Nn(m, R), k
    }
    for (T = r(m, T); R < y.length; R++)
      (P = p(T, m, R, y[R], _)),
        P !== null &&
          (e && P.alternate !== null && T.delete(P.key === null ? R : P.key),
          (h = i(P, h, R)),
          w === null ? (k = P) : (w.sibling = P),
          (w = P))
    return (
      e &&
        T.forEach(function (b) {
          return t(m, b)
        }),
      ie && Nn(m, R),
      k
    )
  }
  function v(m, h, y, _) {
    var k = lo(y)
    if (typeof k != 'function') throw Error(x(150))
    if (((y = k.call(y)), y == null)) throw Error(x(151))
    for (
      var w = (k = null), T = h, R = (h = 0), P = null, I = y.next();
      T !== null && !I.done;
      R++, I = y.next()
    ) {
      T.index > R ? ((P = T), (T = null)) : (P = T.sibling)
      var b = c(m, T, I.value, _)
      if (b === null) {
        T === null && (T = P)
        break
      }
      e && T && b.alternate === null && t(m, T),
        (h = i(b, h, R)),
        w === null ? (k = b) : (w.sibling = b),
        (w = b),
        (T = P)
    }
    if (I.done) return n(m, T), ie && Nn(m, R), k
    if (T === null) {
      for (; !I.done; R++, I = y.next())
        (I = f(m, I.value, _)),
          I !== null && ((h = i(I, h, R)), w === null ? (k = I) : (w.sibling = I), (w = I))
      return ie && Nn(m, R), k
    }
    for (T = r(m, T); !I.done; R++, I = y.next())
      (I = p(T, m, R, I.value, _)),
        I !== null &&
          (e && I.alternate !== null && T.delete(I.key === null ? R : I.key),
          (h = i(I, h, R)),
          w === null ? (k = I) : (w.sibling = I),
          (w = I))
    return (
      e &&
        T.forEach(function (O) {
          return t(m, O)
        }),
      ie && Nn(m, R),
      k
    )
  }
  function S(m, h, y, _) {
    if (
      (typeof y == 'object' &&
        y !== null &&
        y.type === yr &&
        y.key === null &&
        (y = y.props.children),
      typeof y == 'object' && y !== null)
    ) {
      switch (y.$$typeof) {
        case xi:
          e: {
            for (var k = y.key, w = h; w !== null; ) {
              if (w.key === k) {
                if (((k = y.type), k === yr)) {
                  if (w.tag === 7) {
                    n(m, w.sibling), (h = o(w, y.props.children)), (h.return = m), (m = h)
                    break e
                  }
                } else if (
                  w.elementType === k ||
                  (typeof k == 'object' && k !== null && k.$$typeof === nn && Zd(k) === w.type)
                ) {
                  n(m, w.sibling),
                    (h = o(w, y.props)),
                    (h.ref = mo(m, w, y)),
                    (h.return = m),
                    (m = h)
                  break e
                }
                n(m, w)
                break
              } else t(m, w)
              w = w.sibling
            }
            y.type === yr
              ? ((h = Un(y.props.children, m.mode, _, y.key)), (h.return = m), (m = h))
              : ((_ = us(y.type, y.key, y.props, null, m.mode, _)),
                (_.ref = mo(m, h, y)),
                (_.return = m),
                (m = _))
          }
          return s(m)
        case gr:
          e: {
            for (w = y.key; h !== null; ) {
              if (h.key === w)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === y.containerInfo &&
                  h.stateNode.implementation === y.implementation
                ) {
                  n(m, h.sibling), (h = o(h, y.children || [])), (h.return = m), (m = h)
                  break e
                } else {
                  n(m, h)
                  break
                }
              else t(m, h)
              h = h.sibling
            }
            ;(h = au(y, m.mode, _)), (h.return = m), (m = h)
          }
          return s(m)
        case nn:
          return (w = y._init), S(m, h, w(y._payload), _)
      }
      if (_o(y)) return g(m, h, y, _)
      if (lo(y)) return v(m, h, y, _)
      bi(m, y)
    }
    return (typeof y == 'string' && y !== '') || typeof y == 'number'
      ? ((y = '' + y),
        h !== null && h.tag === 6
          ? (n(m, h.sibling), (h = o(h, y)), (h.return = m), (m = h))
          : (n(m, h), (h = su(y, m.mode, _)), (h.return = m), (m = h)),
        s(m))
      : n(m, h)
  }
  return S
}
var Ur = Zh(!0),
  em = Zh(!1),
  Ds = Rn(null),
  Ms = null,
  xr = null,
  pc = null
function hc() {
  pc = xr = Ms = null
}
function mc(e) {
  var t = Ds.current
  re(Ds), (e._currentValue = t)
}
function ol(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break
    e = e.return
  }
}
function Mr(e, t) {
  ;(Ms = e),
    (pc = xr = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (Ve = !0), (e.firstContext = null))
}
function pt(e) {
  var t = e._currentValue
  if (pc !== e)
    if (
      ((e = {
        context: e,
        memoizedValue: t,
        next: null,
      }),
      xr === null)
    ) {
      if (Ms === null) throw Error(x(308))
      ;(xr = e),
        (Ms.dependencies = {
          lanes: 0,
          firstContext: e,
        })
    } else xr = xr.next = e
  return t
}
var Fn = null
function gc(e) {
  Fn === null ? (Fn = [e]) : Fn.push(e)
}
function tm(e, t, n, r) {
  var o = t.interleaved
  return (
    o === null ? ((n.next = n), gc(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Yt(e, r)
  )
}
function Yt(e, t) {
  e.lanes |= t
  var n = e.alternate
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return)
  return n.tag === 3 ? n.stateNode : null
}
var rn = !1
function yc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: {
      pending: null,
      interleaved: null,
      lanes: 0,
    },
    effects: null,
  }
}
function nm(e, t) {
  ;(e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      })
}
function Vt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  }
}
function pn(e, t, n) {
  var r = e.updateQueue
  if (r === null) return null
  if (((r = r.shared), G & 2)) {
    var o = r.pending
    return o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)), (r.pending = t), Yt(e, n)
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), gc(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Yt(e, n)
  )
}
function ns(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), nc(e, n)
  }
}
function ef(e, t) {
  var n = e.updateQueue,
    r = e.alternate
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        }
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next)
      } while (n !== null)
      i === null ? (o = i = t) : (i = i.next = t)
    } else o = i = t
    ;(n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n)
    return
  }
  ;(e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t)
}
function bs(e, t, n, r) {
  var o = e.updateQueue
  rn = !1
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    a = o.shared.pending
  if (a !== null) {
    o.shared.pending = null
    var u = a,
      l = u.next
    ;(u.next = null), s === null ? (i = l) : (s.next = l), (s = u)
    var d = e.alternate
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== s && (a === null ? (d.firstBaseUpdate = l) : (a.next = l), (d.lastBaseUpdate = u)))
  }
  if (i !== null) {
    var f = o.baseState
    ;(s = 0), (d = l = u = null), (a = i)
    do {
      var c = a.lane,
        p = a.eventTime
      if ((r & c) === c) {
        d !== null &&
          (d = d.next =
            {
              eventTime: p,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            })
        e: {
          var g = e,
            v = a
          switch (((c = t), (p = n), v.tag)) {
            case 1:
              if (((g = v.payload), typeof g == 'function')) {
                f = g.call(p, f, c)
                break e
              }
              f = g
              break e
            case 3:
              g.flags = (g.flags & -65537) | 128
            case 0:
              if (((g = v.payload), (c = typeof g == 'function' ? g.call(p, f, c) : g), c == null))
                break e
              f = ue({}, f, c)
              break e
            case 2:
              rn = !0
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64), (c = o.effects), c === null ? (o.effects = [a]) : c.push(a))
      } else
        (p = {
          eventTime: p,
          lane: c,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((l = d = p), (u = f)) : (d = d.next = p),
          (s |= c)
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break
        ;(c = a), (a = c.next), (c.next = null), (o.lastBaseUpdate = c), (o.shared.pending = null)
      }
    } while (!0)
    if (
      (d === null && (u = f),
      (o.baseState = u),
      (o.firstBaseUpdate = l),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t
      do (s |= o.lane), (o = o.next)
      while (o !== t)
    } else i === null && (o.shared.lanes = 0)
    ;(Qn |= s), (e.lanes = s), (e.memoizedState = f)
  }
}
function tf(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function')) throw Error(x(191, o))
        o.call(r)
      }
    }
}
var ci = {},
  Dt = Rn(ci),
  Yo = Rn(ci),
  qo = Rn(ci)
function $n(e) {
  if (e === ci) throw Error(x(174))
  return e
}
function vc(e, t) {
  switch ((ee(qo, t), ee(Yo, e), ee(Dt, ci), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : $u(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = $u(t, e))
  }
  re(Dt), ee(Dt, t)
}
function Br() {
  re(Dt), re(Yo), re(qo)
}
function rm(e) {
  $n(qo.current)
  var t = $n(Dt.current),
    n = $u(t, e.type)
  t !== n && (ee(Yo, e), ee(Dt, n))
}
function _c(e) {
  Yo.current === e && (re(Dt), re(Yo))
}
var se = Rn(0)
function Fs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState
      if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!'))
        return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t
    } else if (t.child !== null) {
      ;(t.child.return = t), (t = t.child)
      continue
    }
    if (t === e) break
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null
      t = t.return
    }
    ;(t.sibling.return = t.return), (t = t.sibling)
  }
  return null
}
var eu = []
function Sc() {
  for (var e = 0; e < eu.length; e++) eu[e]._workInProgressVersionPrimary = null
  eu.length = 0
}
var rs = en.ReactCurrentDispatcher,
  tu = en.ReactCurrentBatchConfig,
  qn = 0,
  ae = null,
  me = null,
  ve = null,
  $s = !1,
  Co = !1,
  Qo = 0,
  u0 = 0
function Re() {
  throw Error(x(321))
}
function Ec(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++) if (!Tt(e[n], t[n])) return !1
  return !0
}
function wc(e, t, n, r, o, i) {
  if (
    ((qn = i),
    (ae = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (rs.current = e === null || e.memoizedState === null ? f0 : p0),
    (e = n(r, o)),
    Co)
  ) {
    i = 0
    do {
      if (((Co = !1), (Qo = 0), 25 <= i)) throw Error(x(301))
      ;(i += 1), (ve = me = null), (t.updateQueue = null), (rs.current = h0), (e = n(r, o))
    } while (Co)
  }
  if (
    ((rs.current = js),
    (t = me !== null && me.next !== null),
    (qn = 0),
    (ve = me = ae = null),
    ($s = !1),
    t)
  )
    throw Error(x(300))
  return e
}
function Tc() {
  var e = Qo !== 0
  return (Qo = 0), e
}
function It() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  }
  return ve === null ? (ae.memoizedState = ve = e) : (ve = ve.next = e), ve
}
function ht() {
  if (me === null) {
    var e = ae.alternate
    e = e !== null ? e.memoizedState : null
  } else e = me.next
  var t = ve === null ? ae.memoizedState : ve.next
  if (t !== null) (ve = t), (me = e)
  else {
    if (e === null) throw Error(x(310))
    ;(me = e),
      (e = {
        memoizedState: me.memoizedState,
        baseState: me.baseState,
        baseQueue: me.baseQueue,
        queue: me.queue,
        next: null,
      }),
      ve === null ? (ae.memoizedState = ve = e) : (ve = ve.next = e)
  }
  return ve
}
function Jo(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function nu(e) {
  var t = ht(),
    n = t.queue
  if (n === null) throw Error(x(311))
  n.lastRenderedReducer = e
  var r = me,
    o = r.baseQueue,
    i = n.pending
  if (i !== null) {
    if (o !== null) {
      var s = o.next
      ;(o.next = i.next), (i.next = s)
    }
    ;(r.baseQueue = o = i), (n.pending = null)
  }
  if (o !== null) {
    ;(i = o.next), (r = r.baseState)
    var a = (s = null),
      u = null,
      l = i
    do {
      var d = l.lane
      if ((qn & d) === d)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: l.action,
              hasEagerState: l.hasEagerState,
              eagerState: l.eagerState,
              next: null,
            }),
          (r = l.hasEagerState ? l.eagerState : e(r, l.action))
      else {
        var f = {
          lane: d,
          action: l.action,
          hasEagerState: l.hasEagerState,
          eagerState: l.eagerState,
          next: null,
        }
        u === null ? ((a = u = f), (s = r)) : (u = u.next = f), (ae.lanes |= d), (Qn |= d)
      }
      l = l.next
    } while (l !== null && l !== i)
    u === null ? (s = r) : (u.next = a),
      Tt(r, t.memoizedState) || (Ve = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = u),
      (n.lastRenderedState = r)
  }
  if (((e = n.interleaved), e !== null)) {
    o = e
    do (i = o.lane), (ae.lanes |= i), (Qn |= i), (o = o.next)
    while (o !== e)
  } else o === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function ru(e) {
  var t = ht(),
    n = t.queue
  if (n === null) throw Error(x(311))
  n.lastRenderedReducer = e
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState
  if (o !== null) {
    n.pending = null
    var s = (o = o.next)
    do (i = e(i, s.action)), (s = s.next)
    while (s !== o)
    Tt(i, t.memoizedState) || (Ve = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i)
  }
  return [i, r]
}
function om() {}
function im(e, t) {
  var n = ae,
    r = ht(),
    o = t(),
    i = !Tt(r.memoizedState, o)
  if (
    (i && ((r.memoizedState = o), (Ve = !0)),
    (r = r.queue),
    kc(um.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ve !== null && ve.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), Xo(9, am.bind(null, n, r, o, t), void 0, null), _e === null))
      throw Error(x(349))
    qn & 30 || sm(n, t, o)
  }
  return o
}
function sm(e, t, n) {
  ;(e.flags |= 16384),
    (e = {
      getSnapshot: t,
      value: n,
    }),
    (t = ae.updateQueue),
    t === null
      ? ((t = {
          lastEffect: null,
          stores: null,
        }),
        (ae.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function am(e, t, n, r) {
  ;(t.value = n), (t.getSnapshot = r), lm(t) && cm(e)
}
function um(e, t, n) {
  return n(function () {
    lm(t) && cm(e)
  })
}
function lm(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !Tt(e, n)
  } catch {
    return !0
  }
}
function cm(e) {
  var t = Yt(e, 1)
  t !== null && wt(t, e, 1, -1)
}
function nf(e) {
  var t = It()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Jo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = d0.bind(null, ae, e)),
    [t.memoizedState, e]
  )
}
function Xo(e, t, n, r) {
  return (
    (e = {
      tag: e,
      create: t,
      destroy: n,
      deps: r,
      next: null,
    }),
    (t = ae.updateQueue),
    t === null
      ? ((t = {
          lastEffect: null,
          stores: null,
        }),
        (ae.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  )
}
function dm() {
  return ht().memoizedState
}
function os(e, t, n, r) {
  var o = It()
  ;(ae.flags |= e), (o.memoizedState = Xo(1 | t, n, void 0, r === void 0 ? null : r))
}
function ca(e, t, n, r) {
  var o = ht()
  r = r === void 0 ? null : r
  var i = void 0
  if (me !== null) {
    var s = me.memoizedState
    if (((i = s.destroy), r !== null && Ec(r, s.deps))) {
      o.memoizedState = Xo(t, n, i, r)
      return
    }
  }
  ;(ae.flags |= e), (o.memoizedState = Xo(1 | t, n, i, r))
}
function rf(e, t) {
  return os(8390656, 8, e, t)
}
function kc(e, t) {
  return ca(2048, 8, e, t)
}
function fm(e, t) {
  return ca(4, 2, e, t)
}
function pm(e, t) {
  return ca(4, 4, e, t)
}
function hm(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null)
      }
    )
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null
      }
    )
}
function mm(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), ca(4, 4, hm.bind(null, t, e), n)
}
function xc() {}
function gm(e, t) {
  var n = ht()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && Ec(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e)
}
function ym(e, t) {
  var n = ht()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && Ec(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e)
}
function vm(e, t, n) {
  return qn & 21
    ? (Tt(n, t) || ((n = Th()), (ae.lanes |= n), (Qn |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (Ve = !0)), (e.memoizedState = n))
}
function l0(e, t) {
  var n = J
  ;(J = n !== 0 && 4 > n ? n : 4), e(!0)
  var r = tu.transition
  tu.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(J = n), (tu.transition = r)
  }
}
function _m() {
  return ht().memoizedState
}
function c0(e, t, n) {
  var r = mn(e)
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Sm(e))
  )
    Em(t, n)
  else if (((n = tm(e, t, n, r)), n !== null)) {
    var o = Ae()
    wt(n, e, r, o), wm(n, t, r)
  }
}
function d0(e, t, n) {
  var r = mn(e),
    o = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }
  if (Sm(e)) Em(t, o)
  else {
    var i = e.alternate
    if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
      try {
        var s = t.lastRenderedState,
          a = i(s, n)
        if (((o.hasEagerState = !0), (o.eagerState = a), Tt(a, s))) {
          var u = t.interleaved
          u === null ? ((o.next = o), gc(t)) : ((o.next = u.next), (u.next = o)),
            (t.interleaved = o)
          return
        }
      } catch {
      } finally {
      }
    ;(n = tm(e, t, o, r)), n !== null && ((o = Ae()), wt(n, e, r, o), wm(n, t, r))
  }
}
function Sm(e) {
  var t = e.alternate
  return e === ae || (t !== null && t === ae)
}
function Em(e, t) {
  Co = $s = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function wm(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), nc(e, n)
  }
}
var js = {
    readContext: pt,
    useCallback: Re,
    useContext: Re,
    useEffect: Re,
    useImperativeHandle: Re,
    useInsertionEffect: Re,
    useLayoutEffect: Re,
    useMemo: Re,
    useReducer: Re,
    useRef: Re,
    useState: Re,
    useDebugValue: Re,
    useDeferredValue: Re,
    useTransition: Re,
    useMutableSource: Re,
    useSyncExternalStore: Re,
    useId: Re,
    unstable_isNewReconciler: !1,
  },
  f0 = {
    readContext: pt,
    useCallback: function (e, t) {
      return (It().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: pt,
    useEffect: rf,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), os(4194308, 4, hm.bind(null, t, e), n)
    },
    useLayoutEffect: function (e, t) {
      return os(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return os(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = It()
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
    },
    useReducer: function (e, t, n) {
      var r = It()
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = c0.bind(null, ae, e)),
        [r.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = It()
      return (
        (e = {
          current: e,
        }),
        (t.memoizedState = e)
      )
    },
    useState: nf,
    useDebugValue: xc,
    useDeferredValue: function (e) {
      return (It().memoizedState = e)
    },
    useTransition: function () {
      var e = nf(!1),
        t = e[0]
      return (e = l0.bind(null, e[1])), (It().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ae,
        o = It()
      if (ie) {
        if (n === void 0) throw Error(x(407))
        n = n()
      } else {
        if (((n = t()), _e === null)) throw Error(x(349))
        qn & 30 || sm(r, t, n)
      }
      o.memoizedState = n
      var i = {
        value: n,
        getSnapshot: t,
      }
      return (
        (o.queue = i),
        rf(um.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Xo(9, am.bind(null, r, i, n, t), void 0, null),
        n
      )
    },
    useId: function () {
      var e = It(),
        t = _e.identifierPrefix
      if (ie) {
        var n = Bt,
          r = Ut
        ;(n = (r & ~(1 << (32 - Et(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Qo++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':')
      } else (n = u0++), (t = ':' + t + 'r' + n.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1,
  },
  p0 = {
    readContext: pt,
    useCallback: gm,
    useContext: pt,
    useEffect: kc,
    useImperativeHandle: mm,
    useInsertionEffect: fm,
    useLayoutEffect: pm,
    useMemo: ym,
    useReducer: nu,
    useRef: dm,
    useState: function () {
      return nu(Jo)
    },
    useDebugValue: xc,
    useDeferredValue: function (e) {
      var t = ht()
      return vm(t, me.memoizedState, e)
    },
    useTransition: function () {
      var e = nu(Jo)[0],
        t = ht().memoizedState
      return [e, t]
    },
    useMutableSource: om,
    useSyncExternalStore: im,
    useId: _m,
    unstable_isNewReconciler: !1,
  },
  h0 = {
    readContext: pt,
    useCallback: gm,
    useContext: pt,
    useEffect: kc,
    useImperativeHandle: mm,
    useInsertionEffect: fm,
    useLayoutEffect: pm,
    useMemo: ym,
    useReducer: ru,
    useRef: dm,
    useState: function () {
      return ru(Jo)
    },
    useDebugValue: xc,
    useDeferredValue: function (e) {
      var t = ht()
      return me === null ? (t.memoizedState = e) : vm(t, me.memoizedState, e)
    },
    useTransition: function () {
      var e = ru(Jo)[0],
        t = ht().memoizedState
      return [e, t]
    },
    useMutableSource: om,
    useSyncExternalStore: im,
    useId: _m,
    unstable_isNewReconciler: !1,
  }
function vt(e, t) {
  if (e && e.defaultProps) {
    ;(t = ue({}, t)), (e = e.defaultProps)
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
function il(e, t, n, r) {
  ;(t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ue({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var da = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? ir(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var r = Ae(),
      o = mn(e),
      i = Vt(r, o)
    ;(i.payload = t),
      n != null && (i.callback = n),
      (t = pn(e, i, o)),
      t !== null && (wt(t, e, o, r), ns(t, e, o))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var r = Ae(),
      o = mn(e),
      i = Vt(r, o)
    ;(i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = pn(e, i, o)),
      t !== null && (wt(t, e, o, r), ns(t, e, o))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = Ae(),
      r = mn(e),
      o = Vt(n, r)
    ;(o.tag = 2),
      t != null && (o.callback = t),
      (t = pn(e, o, r)),
      t !== null && (wt(t, e, r, n), ns(t, e, r))
  },
}
function of(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Vo(n, r) || !Vo(o, i)
        : !0
  )
}
function Tm(e, t, n) {
  var r = !1,
    o = _n,
    i = t.contextType
  return (
    typeof i == 'object' && i !== null
      ? (i = pt(i))
      : ((o = Ke(t) ? Gn : Ie.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? jr(e, o) : _n)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = da),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  )
}
function sf(e, t, n, r) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && da.enqueueReplaceState(t, t.state, null)
}
function sl(e, t, n, r) {
  var o = e.stateNode
  ;(o.props = n), (o.state = e.memoizedState), (o.refs = {}), yc(e)
  var i = t.contextType
  typeof i == 'object' && i !== null
    ? (o.context = pt(i))
    : ((i = Ke(t) ? Gn : Ie.current), (o.context = jr(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (il(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount(),
      t !== o.state && da.enqueueReplaceState(o, o.state, null),
      bs(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308)
}
function Hr(e, t) {
  try {
    var n = '',
      r = t
    do (n += Bv(r)), (r = r.return)
    while (r)
    var o = n
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack
  }
  return {
    value: e,
    source: t,
    stack: o,
    digest: null,
  }
}
function ou(e, t, n) {
  return {
    value: e,
    source: null,
    stack: n ?? null,
    digest: t ?? null,
  }
}
function al(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var m0 = typeof WeakMap == 'function' ? WeakMap : Map
function km(e, t, n) {
  ;(n = Vt(-1, n)),
    (n.tag = 3),
    (n.payload = {
      element: null,
    })
  var r = t.value
  return (
    (n.callback = function () {
      Us || ((Us = !0), (yl = r)), al(e, t)
    }),
    n
  )
}
function xm(e, t, n) {
  ;(n = Vt(-1, n)), (n.tag = 3)
  var r = e.type.getDerivedStateFromError
  if (typeof r == 'function') {
    var o = t.value
    ;(n.payload = function () {
      return r(o)
    }),
      (n.callback = function () {
        al(e, t)
      })
  }
  var i = e.stateNode
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        al(e, t), typeof r != 'function' && (hn === null ? (hn = new Set([this])) : hn.add(this))
        var s = t.stack
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : '',
        })
      }),
    n
  )
}
function af(e, t, n) {
  var r = e.pingCache
  if (r === null) {
    r = e.pingCache = new m0()
    var o = new Set()
    r.set(t, o)
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o))
  o.has(n) || (o.add(n), (e = I0.bind(null, e, t, n)), t.then(e, e))
}
function uf(e) {
  do {
    var t
    if (
      ((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e
    e = e.return
  } while (e !== null)
  return null
}
function lf(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null ? (n.tag = 17) : ((t = Vt(-1, 1)), (t.tag = 2), pn(n, t, 1))),
          (n.lanes |= 1)),
      e)
}
var g0 = en.ReactCurrentOwner,
  Ve = !1
function Ne(e, t, n, r) {
  t.child = e === null ? em(t, null, n, r) : Ur(t, e.child, n, r)
}
function cf(e, t, n, r, o) {
  n = n.render
  var i = t.ref
  return (
    Mr(t, o),
    (r = wc(e, t, n, r, i, o)),
    (n = Tc()),
    e !== null && !Ve
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), qt(e, t, o))
      : (ie && n && cc(t), (t.flags |= 1), Ne(e, t, r, o), t.child)
  )
}
function df(e, t, n, r, o) {
  if (e === null) {
    var i = n.type
    return typeof i == 'function' &&
      !Ac(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Rm(e, t, i, r, o))
      : ((e = us(n.type, null, r, t, t.mode, o)), (e.ref = t.ref), (e.return = t), (t.child = e))
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps
    if (((n = n.compare), (n = n !== null ? n : Vo), n(s, r) && e.ref === t.ref)) return qt(e, t, o)
  }
  return (t.flags |= 1), (e = gn(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e)
}
function Rm(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps
    if (Vo(i, r) && e.ref === t.ref)
      if (((Ve = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0)) e.flags & 131072 && (Ve = !0)
      else return (t.lanes = e.lanes), qt(e, t, o)
  }
  return ul(e, t, n, r, o)
}
function Pm(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null,
      }),
        ee(Pr, qe),
        (qe |= n)
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ee(Pr, qe),
          (qe |= e),
          null
        )
      ;(t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null,
      }),
        (r = i !== null ? i.baseLanes : n),
        ee(Pr, qe),
        (qe |= r)
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n), ee(Pr, qe), (qe |= r)
  return Ne(e, t, o, n), t.child
}
function Cm(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function ul(e, t, n, r, o) {
  var i = Ke(n) ? Gn : Ie.current
  return (
    (i = jr(t, i)),
    Mr(t, o),
    (n = wc(e, t, n, r, i, o)),
    (r = Tc()),
    e !== null && !Ve
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), qt(e, t, o))
      : (ie && r && cc(t), (t.flags |= 1), Ne(e, t, n, o), t.child)
  )
}
function ff(e, t, n, r, o) {
  if (Ke(n)) {
    var i = !0
    Os(t)
  } else i = !1
  if ((Mr(t, o), t.stateNode === null)) is(e, t), Tm(t, n, r), sl(t, n, r, o), (r = !0)
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps
    s.props = a
    var u = s.context,
      l = n.contextType
    typeof l == 'object' && l !== null
      ? (l = pt(l))
      : ((l = Ke(n) ? Gn : Ie.current), (l = jr(t, l)))
    var d = n.getDerivedStateFromProps,
      f = typeof d == 'function' || typeof s.getSnapshotBeforeUpdate == 'function'
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((a !== r || u !== l) && sf(t, s, r, l)),
      (rn = !1)
    var c = t.memoizedState
    ;(s.state = c),
      bs(t, r, s, o),
      (u = t.memoizedState),
      a !== r || c !== u || We.current || rn
        ? (typeof d == 'function' && (il(t, n, d, r), (u = t.memoizedState)),
          (a = rn || of(t, n, a, r, c, u, l))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != 'function' &&
                  typeof s.componentWillMount != 'function') ||
                (typeof s.componentWillMount == 'function' && s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == 'function' && s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (s.props = r),
          (s.state = u),
          (s.context = l),
          (r = a))
        : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1))
  } else {
    ;(s = t.stateNode),
      nm(e, t),
      (a = t.memoizedProps),
      (l = t.type === t.elementType ? a : vt(t.type, a)),
      (s.props = l),
      (f = t.pendingProps),
      (c = s.context),
      (u = n.contextType),
      typeof u == 'object' && u !== null
        ? (u = pt(u))
        : ((u = Ke(n) ? Gn : Ie.current), (u = jr(t, u)))
    var p = n.getDerivedStateFromProps
    ;(d = typeof p == 'function' || typeof s.getSnapshotBeforeUpdate == 'function') ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((a !== f || c !== u) && sf(t, s, r, u)),
      (rn = !1),
      (c = t.memoizedState),
      (s.state = c),
      bs(t, r, s, o)
    var g = t.memoizedState
    a !== f || c !== g || We.current || rn
      ? (typeof p == 'function' && (il(t, n, p, r), (g = t.memoizedState)),
        (l = rn || of(t, n, l, r, c, g, u) || !1)
          ? (d ||
              (typeof s.UNSAFE_componentWillUpdate != 'function' &&
                typeof s.componentWillUpdate != 'function') ||
              (typeof s.componentWillUpdate == 'function' && s.componentWillUpdate(r, g, u),
              typeof s.UNSAFE_componentWillUpdate == 'function' &&
                s.UNSAFE_componentWillUpdate(r, g, u)),
            typeof s.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != 'function' ||
              (a === e.memoizedProps && c === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != 'function' ||
              (a === e.memoizedProps && c === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (s.props = r),
        (s.state = g),
        (s.context = u),
        (r = l))
      : (typeof s.componentDidUpdate != 'function' ||
          (a === e.memoizedProps && c === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != 'function' ||
          (a === e.memoizedProps && c === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1))
  }
  return ll(e, t, n, r, i, o)
}
function ll(e, t, n, r, o, i) {
  Cm(e, t)
  var s = (t.flags & 128) !== 0
  if (!r && !s) return o && Qd(t, n, !1), qt(e, t, i)
  ;(r = t.stateNode), (g0.current = t)
  var a = s && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Ur(t, e.child, null, i)), (t.child = Ur(t, null, a, i)))
      : Ne(e, t, a, i),
    (t.memoizedState = r.state),
    o && Qd(t, n, !0),
    t.child
  )
}
function Im(e) {
  var t = e.stateNode
  t.pendingContext
    ? qd(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && qd(e, t.context, !1),
    vc(e, t.containerInfo)
}
function pf(e, t, n, r, o) {
  return zr(), fc(o), (t.flags |= 256), Ne(e, t, n, r), t.child
}
var cl = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0,
}
function dl(e) {
  return {
    baseLanes: e,
    cachePool: null,
    transitions: null,
  }
}
function Lm(e, t, n) {
  var r = t.pendingProps,
    o = se.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    a
  if (
    ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (o |= 1),
    ee(se, o & 1),
    e === null)
  )
    return (
      rl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === '$!' ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = {
                mode: 'hidden',
                children: s,
              }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = ha(s, r, 0, null)),
              (e = Un(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = dl(n)),
              (t.memoizedState = cl),
              e)
            : Rc(t, s))
    )
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return y0(e, t, s, r, a, o, n)
  if (i) {
    ;(i = r.fallback), (s = t.mode), (o = e.child), (a = o.sibling)
    var u = {
      mode: 'hidden',
      children: r.children,
    }
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = u), (t.deletions = null))
        : ((r = gn(o, u)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = gn(a, i)) : ((i = Un(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? dl(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = cl),
      r
    )
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = gn(i, {
      mode: 'visible',
      children: r.children,
    })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  )
}
function Rc(e, t) {
  return (
    (t = ha(
      {
        mode: 'visible',
        children: t,
      },
      e.mode,
      0,
      null,
    )),
    (t.return = e),
    (e.child = t)
  )
}
function Fi(e, t, n, r) {
  return (
    r !== null && fc(r),
    Ur(t, e.child, null, n),
    (e = Rc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function y0(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ou(Error(x(422)))), Fi(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = ha(
            {
              mode: 'visible',
              children: r.children,
            },
            o,
            0,
            null,
          )),
          (i = Un(i, o, s, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && Ur(t, e.child, null, s),
          (t.child.memoizedState = dl(s)),
          (t.memoizedState = cl),
          i)
  if (!(t.mode & 1)) return Fi(e, t, s, null)
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst
    return (r = a), (i = Error(x(419))), (r = ou(i, r, void 0)), Fi(e, t, s, r)
  }
  if (((a = (s & e.childLanes) !== 0), Ve || a)) {
    if (((r = _e), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2
          break
        case 16:
          o = 8
          break
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32
          break
        case 536870912:
          o = 268435456
          break
        default:
          o = 0
      }
      ;(o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 && o !== i.retryLane && ((i.retryLane = o), Yt(e, o), wt(r, e, o, -1))
    }
    return Nc(), (r = ou(Error(x(421)))), Fi(e, t, s, r)
  }
  return o.data === '$?'
    ? ((t.flags |= 128), (t.child = e.child), (t = L0.bind(null, e)), (o._reactRetry = t), null)
    : ((e = i.treeContext),
      (Je = fn(o.nextSibling)),
      (Ze = t),
      (ie = !0),
      (St = null),
      e !== null &&
        ((at[ut++] = Ut),
        (at[ut++] = Bt),
        (at[ut++] = Yn),
        (Ut = e.id),
        (Bt = e.overflow),
        (Yn = t)),
      (t = Rc(t, r.children)),
      (t.flags |= 4096),
      t)
}
function hf(e, t, n) {
  e.lanes |= t
  var r = e.alternate
  r !== null && (r.lanes |= t), ol(e.return, t, n)
}
function iu(e, t, n, r, o) {
  var i = e.memoizedState
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o))
}
function Om(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail
  if ((Ne(e, t, r.children, n), (r = se.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && hf(e, n, t)
        else if (e.tag === 19) hf(e, n, t)
        else if (e.child !== null) {
          ;(e.child.return = e), (e = e.child)
          continue
        }
        if (e === t) break e
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e
          e = e.return
        }
        ;(e.sibling.return = e.return), (e = e.sibling)
      }
    r &= 1
  }
  if ((ee(se, r), !(t.mode & 1))) t.memoizedState = null
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate), e !== null && Fs(e) === null && (o = n), (n = n.sibling)
        ;(n = o),
          n === null ? ((o = t.child), (t.child = null)) : ((o = n.sibling), (n.sibling = null)),
          iu(t, !1, o, n, i)
        break
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Fs(e) === null)) {
            t.child = o
            break
          }
          ;(e = o.sibling), (o.sibling = n), (n = o), (o = e)
        }
        iu(t, !0, n, null, i)
        break
      case 'together':
        iu(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function is(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function qt(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (Qn |= t.lanes), !(n & t.childLanes)))
    return null
  if (e !== null && t.child !== e.child) throw Error(x(153))
  if (t.child !== null) {
    for (e = t.child, n = gn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      (e = e.sibling), (n = n.sibling = gn(e, e.pendingProps)), (n.return = t)
    n.sibling = null
  }
  return t.child
}
function v0(e, t, n) {
  switch (t.tag) {
    case 3:
      Im(t), zr()
      break
    case 5:
      rm(t)
      break
    case 1:
      Ke(t.type) && Os(t)
      break
    case 4:
      vc(t, t.stateNode.containerInfo)
      break
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value
      ee(Ds, r._currentValue), (r._currentValue = o)
      break
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ee(se, se.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Lm(e, t, n)
            : (ee(se, se.current & 1), (e = qt(e, t, n)), e !== null ? e.sibling : null)
      ee(se, se.current & 1)
      break
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Om(e, t, n)
        t.flags |= 128
      }
      if (
        ((o = t.memoizedState),
        o !== null && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ee(se, se.current),
        r)
      )
        break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), Pm(e, t, n)
  }
  return qt(e, t, n)
}
var Nm, fl, Am, Dm
Nm = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
    else if (n.tag !== 4 && n.child !== null) {
      ;(n.child.return = n), (n = n.child)
      continue
    }
    if (n === t) break
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return
      n = n.return
    }
    ;(n.sibling.return = n.return), (n = n.sibling)
  }
}
fl = function () {}
Am = function (e, t, n, r) {
  var o = e.memoizedProps
  if (o !== r) {
    ;(e = t.stateNode), $n(Dt.current)
    var i = null
    switch (n) {
      case 'input':
        ;(o = Du(e, o)), (r = Du(e, r)), (i = [])
        break
      case 'select':
        ;(o = ue({}, o, {
          value: void 0,
        })),
          (r = ue({}, r, {
            value: void 0,
          })),
          (i = [])
        break
      case 'textarea':
        ;(o = Fu(e, o)), (r = Fu(e, r)), (i = [])
        break
      default:
        typeof o.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = Is)
    }
    ju(n, r)
    var s
    n = null
    for (l in o)
      if (!r.hasOwnProperty(l) && o.hasOwnProperty(l) && o[l] != null)
        if (l === 'style') {
          var a = o[l]
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ''))
        } else
          l !== 'dangerouslySetInnerHTML' &&
            l !== 'children' &&
            l !== 'suppressContentEditableWarning' &&
            l !== 'suppressHydrationWarning' &&
            l !== 'autoFocus' &&
            (Fo.hasOwnProperty(l) ? i || (i = []) : (i = i || []).push(l, null))
    for (l in r) {
      var u = r[l]
      if (
        ((a = o != null ? o[l] : void 0),
        r.hasOwnProperty(l) && u !== a && (u != null || a != null))
      )
        if (l === 'style')
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) || (u && u.hasOwnProperty(s)) || (n || (n = {}), (n[s] = ''))
            for (s in u) u.hasOwnProperty(s) && a[s] !== u[s] && (n || (n = {}), (n[s] = u[s]))
          } else n || (i || (i = []), i.push(l, n)), (n = u)
        else
          l === 'dangerouslySetInnerHTML'
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (i = i || []).push(l, u))
            : l === 'children'
              ? (typeof u != 'string' && typeof u != 'number') || (i = i || []).push(l, '' + u)
              : l !== 'suppressContentEditableWarning' &&
                l !== 'suppressHydrationWarning' &&
                (Fo.hasOwnProperty(l)
                  ? (u != null && l === 'onScroll' && ne('scroll', e), i || a === u || (i = []))
                  : (i = i || []).push(l, u))
    }
    n && (i = i || []).push('style', n)
    var l = i
    ;(t.updateQueue = l) && (t.flags |= 4)
  }
}
Dm = function (e, t, n, r) {
  n !== r && (t.flags |= 4)
}
function go(e, t) {
  if (!ie)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling)
        n === null ? (e.tail = null) : (n.sibling = null)
        break
      case 'collapsed':
        n = e.tail
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling)
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null)
    }
}
function Pe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling)
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling)
  return (e.subtreeFlags |= r), (e.childLanes = n), t
}
function _0(e, t, n) {
  var r = t.pendingProps
  switch ((dc(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Pe(t), null
    case 1:
      return Ke(t.type) && Ls(), Pe(t), null
    case 3:
      return (
        (r = t.stateNode),
        Br(),
        re(We),
        re(Ie),
        Sc(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Mi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), St !== null && (Sl(St), (St = null)))),
        fl(e, t),
        Pe(t),
        null
      )
    case 5:
      _c(t)
      var o = $n(qo.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        Am(e, t, n, r, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(x(166))
          return Pe(t), null
        }
        if (((e = $n(Dt.current)), Mi(t))) {
          ;(r = t.stateNode), (n = t.type)
          var i = t.memoizedProps
          switch (((r[Ot] = t), (r[Go] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              ne('cancel', r), ne('close', r)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              ne('load', r)
              break
            case 'video':
            case 'audio':
              for (o = 0; o < Eo.length; o++) ne(Eo[o], r)
              break
            case 'source':
              ne('error', r)
              break
            case 'img':
            case 'image':
            case 'link':
              ne('error', r), ne('load', r)
              break
            case 'details':
              ne('toggle', r)
              break
            case 'input':
              wd(r, i), ne('invalid', r)
              break
            case 'select':
              ;(r._wrapperState = {
                wasMultiple: !!i.multiple,
              }),
                ne('invalid', r)
              break
            case 'textarea':
              kd(r, i), ne('invalid', r)
          }
          ju(n, i), (o = null)
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s]
              s === 'children'
                ? typeof a == 'string'
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 && Di(r.textContent, a, e),
                    (o = ['children', a]))
                  : typeof a == 'number' &&
                    r.textContent !== '' + a &&
                    (i.suppressHydrationWarning !== !0 && Di(r.textContent, a, e),
                    (o = ['children', '' + a]))
                : Fo.hasOwnProperty(s) && a != null && s === 'onScroll' && ne('scroll', r)
            }
          switch (n) {
            case 'input':
              Ri(r), Td(r, i, !0)
              break
            case 'textarea':
              Ri(r), xd(r)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof i.onClick == 'function' && (r.onclick = Is)
          }
          ;(r = o), (t.updateQueue = r), r !== null && (t.flags |= 4)
        } else {
          ;(s = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = uh(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = s.createElement('div')),
                  (e.innerHTML = '<script><\/script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = s.createElement(n, {
                      is: r.is,
                    }))
                  : ((e = s.createElement(n)),
                    n === 'select' &&
                      ((s = e), r.multiple ? (s.multiple = !0) : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Ot] = t),
            (e[Go] = r),
            Nm(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((s = zu(n, r)), n)) {
              case 'dialog':
                ne('cancel', e), ne('close', e), (o = r)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                ne('load', e), (o = r)
                break
              case 'video':
              case 'audio':
                for (o = 0; o < Eo.length; o++) ne(Eo[o], e)
                o = r
                break
              case 'source':
                ne('error', e), (o = r)
                break
              case 'img':
              case 'image':
              case 'link':
                ne('error', e), ne('load', e), (o = r)
                break
              case 'details':
                ne('toggle', e), (o = r)
                break
              case 'input':
                wd(e, r), (o = Du(e, r)), ne('invalid', e)
                break
              case 'option':
                o = r
                break
              case 'select':
                ;(e._wrapperState = {
                  wasMultiple: !!r.multiple,
                }),
                  (o = ue({}, r, {
                    value: void 0,
                  })),
                  ne('invalid', e)
                break
              case 'textarea':
                kd(e, r), (o = Fu(e, r)), ne('invalid', e)
                break
              default:
                o = r
            }
            ju(n, o), (a = o)
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var u = a[i]
                i === 'style'
                  ? dh(e, u)
                  : i === 'dangerouslySetInnerHTML'
                    ? ((u = u ? u.__html : void 0), u != null && lh(e, u))
                    : i === 'children'
                      ? typeof u == 'string'
                        ? (n !== 'textarea' || u !== '') && $o(e, u)
                        : typeof u == 'number' && $o(e, '' + u)
                      : i !== 'suppressContentEditableWarning' &&
                        i !== 'suppressHydrationWarning' &&
                        i !== 'autoFocus' &&
                        (Fo.hasOwnProperty(i)
                          ? u != null && i === 'onScroll' && ne('scroll', e)
                          : u != null && Ql(e, i, u, s))
              }
            switch (n) {
              case 'input':
                Ri(e), Td(e, r, !1)
                break
              case 'textarea':
                Ri(e), xd(e)
                break
              case 'option':
                r.value != null && e.setAttribute('value', '' + vn(r.value))
                break
              case 'select':
                ;(e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Or(e, !!r.multiple, i, !1)
                    : r.defaultValue != null && Or(e, !!r.multiple, r.defaultValue, !0)
                break
              default:
                typeof o.onClick == 'function' && (e.onclick = Is)
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus
                break e
              case 'img':
                r = !0
                break e
              default:
                r = !1
            }
          }
          r && (t.flags |= 4)
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
      }
      return Pe(t), null
    case 6:
      if (e && t.stateNode != null) Dm(e, t, e.memoizedProps, r)
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(x(166))
        if (((n = $n(qo.current)), $n(Dt.current), Mi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ot] = t),
            (i = r.nodeValue !== n) && ((e = Ze), e !== null))
          )
            switch (e.tag) {
              case 3:
                Di(r.nodeValue, n, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Di(r.nodeValue, n, (e.mode & 1) !== 0)
            }
          i && (t.flags |= 4)
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ot] = t),
            (t.stateNode = r)
      }
      return Pe(t), null
    case 13:
      if (
        (re(se),
        (r = t.memoizedState),
        e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ie && Je !== null && t.mode & 1 && !(t.flags & 128))
          Xh(), zr(), (t.flags |= 98560), (i = !1)
        else if (((i = Mi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(x(318))
            if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i))
              throw Error(x(317))
            i[Ot] = t
          } else zr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          Pe(t), (i = !1)
        } else St !== null && (Sl(St), (St = null)), (i = !0)
        if (!i) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 && (e === null || se.current & 1 ? ge === 0 && (ge = 3) : Nc())),
          t.updateQueue !== null && (t.flags |= 4),
          Pe(t),
          null)
    case 4:
      return Br(), fl(e, t), e === null && Wo(t.stateNode.containerInfo), Pe(t), null
    case 10:
      return mc(t.type._context), Pe(t), null
    case 17:
      return Ke(t.type) && Ls(), Pe(t), null
    case 19:
      if ((re(se), (i = t.memoizedState), i === null)) return Pe(t), null
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) go(i, !1)
        else {
          if (ge !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Fs(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    go(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling)
                return ee(se, (se.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          i.tail !== null &&
            ce() > Vr &&
            ((t.flags |= 128), (r = !0), go(i, !1), (t.lanes = 4194304))
        }
      else {
        if (!r)
          if (((e = Fs(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              go(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !s.alternate && !ie)
            )
              return Pe(t), null
          } else
            2 * ce() - i.renderingStartTime > Vr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), go(i, !1), (t.lanes = 4194304))
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last), n !== null ? (n.sibling = s) : (t.child = s), (i.last = s))
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ce()),
          (t.sibling = null),
          (n = se.current),
          ee(se, r ? (n & 1) | 2 : n & 1),
          t)
        : (Pe(t), null)
    case 22:
    case 23:
      return (
        Oc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? qe & 1073741824 && (Pe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Pe(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(x(156, t.tag))
}
function S0(e, t) {
  switch ((dc(t), t.tag)) {
    case 1:
      return (
        Ke(t.type) && Ls(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        Br(),
        re(We),
        re(Ie),
        Sc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return _c(t), null
    case 13:
      if ((re(se), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(x(340))
        zr()
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
    case 19:
      return re(se), null
    case 4:
      return Br(), null
    case 10:
      return mc(t.type._context), null
    case 22:
    case 23:
      return Oc(), null
    case 24:
      return null
    default:
      return null
  }
}
var $i = !1,
  Ce = !1,
  E0 = typeof WeakSet == 'function' ? WeakSet : Set,
  N = null
function Rr(e, t) {
  var n = e.ref
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null)
      } catch (r) {
        le(e, t, r)
      }
    else n.current = null
}
function pl(e, t, n) {
  try {
    n()
  } catch (r) {
    le(e, t, r)
  }
}
var mf = !1
function w0(e, t) {
  if (((Qu = Rs), (e = jh()), lc(e))) {
    if ('selectionStart' in e)
      var n = {
        start: e.selectionStart,
        end: e.selectionEnd,
      }
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window
        var r = n.getSelection && n.getSelection()
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode
          var o = r.anchorOffset,
            i = r.focusNode
          r = r.focusOffset
          try {
            n.nodeType, i.nodeType
          } catch {
            n = null
            break e
          }
          var s = 0,
            a = -1,
            u = -1,
            l = 0,
            d = 0,
            f = e,
            c = null
          t: for (;;) {
            for (
              var p;
              f !== n || (o !== 0 && f.nodeType !== 3) || (a = s + o),
                f !== i || (r !== 0 && f.nodeType !== 3) || (u = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (p = f.firstChild) !== null;

            )
              (c = f), (f = p)
            for (;;) {
              if (f === e) break t
              if (
                (c === n && ++l === o && (a = s),
                c === i && ++d === r && (u = s),
                (p = f.nextSibling) !== null)
              )
                break
              ;(f = c), (c = f.parentNode)
            }
            f = p
          }
          n =
            a === -1 || u === -1
              ? null
              : {
                  start: a,
                  end: u,
                }
        } else n = null
      }
    n = n || {
      start: 0,
      end: 0,
    }
  } else n = null
  for (
    Ju = {
      focusedElem: e,
      selectionRange: n,
    },
      Rs = !1,
      N = t;
    N !== null;

  )
    if (((t = N), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (N = e)
    else
      for (; N !== null; ) {
        t = N
        try {
          var g = t.alternate
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (g !== null) {
                  var v = g.memoizedProps,
                    S = g.memoizedState,
                    m = t.stateNode,
                    h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? v : vt(t.type, v), S)
                  m.__reactInternalSnapshotBeforeUpdate = h
                }
                break
              case 3:
                var y = t.stateNode.containerInfo
                y.nodeType === 1
                  ? (y.textContent = '')
                  : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(x(163))
            }
        } catch (_) {
          le(t, t.return, _)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (N = e)
          break
        }
        N = t.return
      }
  return (g = mf), (mf = !1), g
}
function Io(e, t, n) {
  var r = t.updateQueue
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next)
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy
        ;(o.destroy = void 0), i !== void 0 && pl(t, n, i)
      }
      o = o.next
    } while (o !== r)
  }
}
function fa(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next)
    do {
      if ((n.tag & e) === e) {
        var r = n.create
        n.destroy = r()
      }
      n = n.next
    } while (n !== t)
  }
}
function hl(e) {
  var t = e.ref
  if (t !== null) {
    var n = e.stateNode
    switch (e.tag) {
      case 5:
        e = n
        break
      default:
        e = n
    }
    typeof t == 'function' ? t(e) : (t.current = e)
  }
}
function Mm(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), Mm(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null && (delete t[Ot], delete t[Go], delete t[el], delete t[o0], delete t[i0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function bm(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function gf(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || bm(e.return)) return null
      e = e.return
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e
      ;(e.child.return = e), (e = e.child)
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}
function ml(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Is))
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ml(e, t, n), e = e.sibling; e !== null; ) ml(e, t, n), (e = e.sibling)
}
function gl(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (r !== 4 && ((e = e.child), e !== null))
    for (gl(e, t, n), e = e.sibling; e !== null; ) gl(e, t, n), (e = e.sibling)
}
var Ee = null,
  _t = !1
function tn(e, t, n) {
  for (n = n.child; n !== null; ) Fm(e, t, n), (n = n.sibling)
}
function Fm(e, t, n) {
  if (At && typeof At.onCommitFiberUnmount == 'function')
    try {
      At.onCommitFiberUnmount(oa, n)
    } catch {}
  switch (n.tag) {
    case 5:
      Ce || Rr(n, t)
    case 6:
      var r = Ee,
        o = _t
      ;(Ee = null),
        tn(e, t, n),
        (Ee = r),
        (_t = o),
        Ee !== null &&
          (_t
            ? ((e = Ee),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ee.removeChild(n.stateNode))
      break
    case 18:
      Ee !== null &&
        (_t
          ? ((e = Ee),
            (n = n.stateNode),
            e.nodeType === 8 ? Xa(e.parentNode, n) : e.nodeType === 1 && Xa(e, n),
            Bo(e))
          : Xa(Ee, n.stateNode))
      break
    case 4:
      ;(r = Ee),
        (o = _t),
        (Ee = n.stateNode.containerInfo),
        (_t = !0),
        tn(e, t, n),
        (Ee = r),
        (_t = o)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ce && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        o = r = r.next
        do {
          var i = o,
            s = i.destroy
          ;(i = i.tag), s !== void 0 && (i & 2 || i & 4) && pl(n, t, s), (o = o.next)
        } while (o !== r)
      }
      tn(e, t, n)
      break
    case 1:
      if (!Ce && (Rr(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
        try {
          ;(r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount()
        } catch (a) {
          le(n, t, a)
        }
      tn(e, t, n)
      break
    case 21:
      tn(e, t, n)
      break
    case 22:
      n.mode & 1
        ? ((Ce = (r = Ce) || n.memoizedState !== null), tn(e, t, n), (Ce = r))
        : tn(e, t, n)
      break
    default:
      tn(e, t, n)
  }
}
function yf(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new E0()),
      t.forEach(function (r) {
        var o = O0.bind(null, e, r)
        n.has(r) || (n.add(r), r.then(o, o))
      })
  }
}
function yt(e, t) {
  var n = t.deletions
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r]
      try {
        var i = e,
          s = t,
          a = s
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ;(Ee = a.stateNode), (_t = !1)
              break e
            case 3:
              ;(Ee = a.stateNode.containerInfo), (_t = !0)
              break e
            case 4:
              ;(Ee = a.stateNode.containerInfo), (_t = !0)
              break e
          }
          a = a.return
        }
        if (Ee === null) throw Error(x(160))
        Fm(i, s, o), (Ee = null), (_t = !1)
        var u = o.alternate
        u !== null && (u.return = null), (o.return = null)
      } catch (l) {
        le(o, t, l)
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) $m(t, e), (t = t.sibling)
}
function $m(e, t) {
  var n = e.alternate,
    r = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((yt(t, e), Pt(e), r & 4)) {
        try {
          Io(3, e, e.return), fa(3, e)
        } catch (v) {
          le(e, e.return, v)
        }
        try {
          Io(5, e, e.return)
        } catch (v) {
          le(e, e.return, v)
        }
      }
      break
    case 1:
      yt(t, e), Pt(e), r & 512 && n !== null && Rr(n, n.return)
      break
    case 5:
      if ((yt(t, e), Pt(e), r & 512 && n !== null && Rr(n, n.return), e.flags & 32)) {
        var o = e.stateNode
        try {
          $o(o, '')
        } catch (v) {
          le(e, e.return, v)
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          a = e.type,
          u = e.updateQueue
        if (((e.updateQueue = null), u !== null))
          try {
            a === 'input' && i.type === 'radio' && i.name != null && sh(o, i), zu(a, s)
            var l = zu(a, i)
            for (s = 0; s < u.length; s += 2) {
              var d = u[s],
                f = u[s + 1]
              d === 'style'
                ? dh(o, f)
                : d === 'dangerouslySetInnerHTML'
                  ? lh(o, f)
                  : d === 'children'
                    ? $o(o, f)
                    : Ql(o, d, f, l)
            }
            switch (a) {
              case 'input':
                Mu(o, i)
                break
              case 'textarea':
                ah(o, i)
                break
              case 'select':
                var c = o._wrapperState.wasMultiple
                o._wrapperState.wasMultiple = !!i.multiple
                var p = i.value
                p != null
                  ? Or(o, !!i.multiple, p, !1)
                  : c !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Or(o, !!i.multiple, i.defaultValue, !0)
                      : Or(o, !!i.multiple, i.multiple ? [] : '', !1))
            }
            o[Go] = i
          } catch (v) {
            le(e, e.return, v)
          }
      }
      break
    case 6:
      if ((yt(t, e), Pt(e), r & 4)) {
        if (e.stateNode === null) throw Error(x(162))
        ;(o = e.stateNode), (i = e.memoizedProps)
        try {
          o.nodeValue = i
        } catch (v) {
          le(e, e.return, v)
        }
      }
      break
    case 3:
      if ((yt(t, e), Pt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          Bo(t.containerInfo)
        } catch (v) {
          le(e, e.return, v)
        }
      break
    case 4:
      yt(t, e), Pt(e)
      break
    case 13:
      yt(t, e),
        Pt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i || (o.alternate !== null && o.alternate.memoizedState !== null) || (Ic = ce())),
        r & 4 && yf(e)
      break
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ce = (l = Ce) || d), yt(t, e), (Ce = l)) : yt(t, e),
        Pt(e),
        r & 8192)
      ) {
        if (((l = e.memoizedState !== null), (e.stateNode.isHidden = l) && !d && e.mode & 1))
          for (N = e, d = e.child; d !== null; ) {
            for (f = N = d; N !== null; ) {
              switch (((c = N), (p = c.child), c.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Io(4, c, c.return)
                  break
                case 1:
                  Rr(c, c.return)
                  var g = c.stateNode
                  if (typeof g.componentWillUnmount == 'function') {
                    ;(r = c), (n = c.return)
                    try {
                      ;(t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount()
                    } catch (v) {
                      le(r, n, v)
                    }
                  }
                  break
                case 5:
                  Rr(c, c.return)
                  break
                case 22:
                  if (c.memoizedState !== null) {
                    _f(f)
                    continue
                  }
              }
              p !== null ? ((p.return = c), (N = p)) : _f(f)
            }
            d = d.sibling
          }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f
              try {
                ;(o = f.stateNode),
                  l
                    ? ((i = o.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((a = f.stateNode),
                      (u = f.memoizedProps.style),
                      (s = u != null && u.hasOwnProperty('display') ? u.display : null),
                      (a.style.display = ch('display', s)))
              } catch (v) {
                le(e, e.return, v)
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = l ? '' : f.memoizedProps
              } catch (v) {
                le(e, e.return, v)
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) || f.memoizedState === null || f === e) &&
            f.child !== null
          ) {
            ;(f.child.return = f), (f = f.child)
            continue
          }
          if (f === e) break e
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e
            d === f && (d = null), (f = f.return)
          }
          d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling)
        }
      }
      break
    case 19:
      yt(t, e), Pt(e), r & 4 && yf(e)
      break
    case 21:
      break
    default:
      yt(t, e), Pt(e)
  }
}
function Pt(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (bm(n)) {
            var r = n
            break e
          }
          n = n.return
        }
        throw Error(x(160))
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode
          r.flags & 32 && ($o(o, ''), (r.flags &= -33))
          var i = gf(e)
          gl(e, i, o)
          break
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = gf(e)
          ml(e, a, s)
          break
        default:
          throw Error(x(161))
      }
    } catch (u) {
      le(e, e.return, u)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function T0(e, t, n) {
  ;(N = e), jm(e)
}
function jm(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var o = N,
      i = o.child
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || $i
      if (!s) {
        var a = o.alternate,
          u = (a !== null && a.memoizedState !== null) || Ce
        a = $i
        var l = Ce
        if ((($i = s), (Ce = u) && !l))
          for (N = o; N !== null; )
            (s = N),
              (u = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Sf(o)
                : u !== null
                  ? ((u.return = s), (N = u))
                  : Sf(o)
        for (; i !== null; ) (N = i), jm(i), (i = i.sibling)
        ;(N = o), ($i = a), (Ce = l)
      }
      vf(e)
    } else o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (N = i)) : vf(e)
  }
}
function vf(e) {
  for (; N !== null; ) {
    var t = N
    if (t.flags & 8772) {
      var n = t.alternate
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ce || fa(5, t)
              break
            case 1:
              var r = t.stateNode
              if (t.flags & 4 && !Ce)
                if (n === null) r.componentDidMount()
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : vt(t.type, n.memoizedProps)
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                }
              var i = t.updateQueue
              i !== null && tf(t, i, r)
              break
            case 3:
              var s = t.updateQueue
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode
                      break
                    case 1:
                      n = t.child.stateNode
                  }
                tf(t, s, n)
              }
              break
            case 5:
              var a = t.stateNode
              if (n === null && t.flags & 4) {
                n = a
                var u = t.memoizedProps
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    u.autoFocus && n.focus()
                    break
                  case 'img':
                    u.src && (n.src = u.src)
                }
              }
              break
            case 6:
              break
            case 4:
              break
            case 12:
              break
            case 13:
              if (t.memoizedState === null) {
                var l = t.alternate
                if (l !== null) {
                  var d = l.memoizedState
                  if (d !== null) {
                    var f = d.dehydrated
                    f !== null && Bo(f)
                  }
                }
              }
              break
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break
            default:
              throw Error(x(163))
          }
        Ce || (t.flags & 512 && hl(t))
      } catch (c) {
        le(t, t.return, c)
      }
    }
    if (t === e) {
      N = null
      break
    }
    if (((n = t.sibling), n !== null)) {
      ;(n.return = t.return), (N = n)
      break
    }
    N = t.return
  }
}
function _f(e) {
  for (; N !== null; ) {
    var t = N
    if (t === e) {
      N = null
      break
    }
    var n = t.sibling
    if (n !== null) {
      ;(n.return = t.return), (N = n)
      break
    }
    N = t.return
  }
}
function Sf(e) {
  for (; N !== null; ) {
    var t = N
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return
          try {
            fa(4, t)
          } catch (u) {
            le(t, n, u)
          }
          break
        case 1:
          var r = t.stateNode
          if (typeof r.componentDidMount == 'function') {
            var o = t.return
            try {
              r.componentDidMount()
            } catch (u) {
              le(t, o, u)
            }
          }
          var i = t.return
          try {
            hl(t)
          } catch (u) {
            le(t, i, u)
          }
          break
        case 5:
          var s = t.return
          try {
            hl(t)
          } catch (u) {
            le(t, s, u)
          }
      }
    } catch (u) {
      le(t, t.return, u)
    }
    if (t === e) {
      N = null
      break
    }
    var a = t.sibling
    if (a !== null) {
      ;(a.return = t.return), (N = a)
      break
    }
    N = t.return
  }
}
var k0 = Math.ceil,
  zs = en.ReactCurrentDispatcher,
  Pc = en.ReactCurrentOwner,
  ct = en.ReactCurrentBatchConfig,
  G = 0,
  _e = null,
  pe = null,
  Te = 0,
  qe = 0,
  Pr = Rn(0),
  ge = 0,
  Zo = null,
  Qn = 0,
  pa = 0,
  Cc = 0,
  Lo = null,
  He = null,
  Ic = 0,
  Vr = 1 / 0,
  bt = null,
  Us = !1,
  yl = null,
  hn = null,
  ji = !1,
  un = null,
  Bs = 0,
  Oo = 0,
  vl = null,
  ss = -1,
  as = 0
function Ae() {
  return G & 6 ? ce() : ss !== -1 ? ss : (ss = ce())
}
function mn(e) {
  return e.mode & 1
    ? G & 2 && Te !== 0
      ? Te & -Te
      : a0.transition !== null
        ? (as === 0 && (as = Th()), as)
        : ((e = J), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Lh(e.type))), e)
    : 1
}
function wt(e, t, n, r) {
  if (50 < Oo) throw ((Oo = 0), (vl = null), Error(x(185)))
  ai(e, n, r),
    (!(G & 2) || e !== _e) &&
      (e === _e && (!(G & 2) && (pa |= n), ge === 4 && sn(e, Te)),
      Ge(e, r),
      n === 1 && G === 0 && !(t.mode & 1) && ((Vr = ce() + 500), la && Pn()))
}
function Ge(e, t) {
  var n = e.callbackNode
  a_(e, t)
  var r = xs(e, e === _e ? Te : 0)
  if (r === 0) n !== null && Cd(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Cd(n), t === 1))
      e.tag === 0 ? s0(Ef.bind(null, e)) : qh(Ef.bind(null, e)),
        n0(function () {
          !(G & 6) && Pn()
        }),
        (n = null)
    else {
      switch (kh(r)) {
        case 1:
          n = tc
          break
        case 4:
          n = Eh
          break
        case 16:
          n = ks
          break
        case 536870912:
          n = wh
          break
        default:
          n = ks
      }
      n = Gm(n, zm.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function zm(e, t) {
  if (((ss = -1), (as = 0), G & 6)) throw Error(x(327))
  var n = e.callbackNode
  if (br() && e.callbackNode !== n) return null
  var r = xs(e, e === _e ? Te : 0)
  if (r === 0) return null
  if (r & 30 || r & e.expiredLanes || t) t = Hs(e, r)
  else {
    t = r
    var o = G
    G |= 2
    var i = Bm()
    ;(_e !== e || Te !== t) && ((bt = null), (Vr = ce() + 500), zn(e, t))
    do
      try {
        P0()
        break
      } catch (a) {
        Um(e, a)
      }
    while (!0)
    hc(), (zs.current = i), (G = o), pe !== null ? (t = 0) : ((_e = null), (Te = 0), (t = ge))
  }
  if (t !== 0) {
    if ((t === 2 && ((o = Wu(e)), o !== 0 && ((r = o), (t = _l(e, o)))), t === 1))
      throw ((n = Zo), zn(e, 0), sn(e, r), Ge(e, ce()), n)
    if (t === 6) sn(e, r)
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !x0(o) &&
          ((t = Hs(e, r)), t === 2 && ((i = Wu(e)), i !== 0 && ((r = i), (t = _l(e, i)))), t === 1))
      )
        throw ((n = Zo), zn(e, 0), sn(e, r), Ge(e, ce()), n)
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(x(345))
        case 2:
          An(e, He, bt)
          break
        case 3:
          if ((sn(e, r), (r & 130023424) === r && ((t = Ic + 500 - ce()), 10 < t))) {
            if (xs(e, 0) !== 0) break
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Ae(), (e.pingedLanes |= e.suspendedLanes & o)
              break
            }
            e.timeoutHandle = Zu(An.bind(null, e, He, bt), t)
            break
          }
          An(e, He, bt)
          break
        case 4:
          if ((sn(e, r), (r & 4194240) === r)) break
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Et(r)
            ;(i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i)
          }
          if (
            ((r = o),
            (r = ce() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * k0(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Zu(An.bind(null, e, He, bt), r)
            break
          }
          An(e, He, bt)
          break
        case 5:
          An(e, He, bt)
          break
        default:
          throw Error(x(329))
      }
    }
  }
  return Ge(e, ce()), e.callbackNode === n ? zm.bind(null, e) : null
}
function _l(e, t) {
  var n = Lo
  return (
    e.current.memoizedState.isDehydrated && (zn(e, t).flags |= 256),
    (e = Hs(e, t)),
    e !== 2 && ((t = He), (He = n), t !== null && Sl(t)),
    e
  )
}
function Sl(e) {
  He === null ? (He = e) : He.push.apply(He, e)
}
function x0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot
          o = o.value
          try {
            if (!Tt(i(), o)) return !1
          } catch {
            return !1
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n)
    else {
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
  }
  return !0
}
function sn(e, t) {
  for (
    t &= ~Cc, t &= ~pa, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Et(t),
      r = 1 << n
    ;(e[n] = -1), (t &= ~r)
  }
}
function Ef(e) {
  if (G & 6) throw Error(x(327))
  br()
  var t = xs(e, 0)
  if (!(t & 1)) return Ge(e, ce()), null
  var n = Hs(e, t)
  if (e.tag !== 0 && n === 2) {
    var r = Wu(e)
    r !== 0 && ((t = r), (n = _l(e, r)))
  }
  if (n === 1) throw ((n = Zo), zn(e, 0), sn(e, t), Ge(e, ce()), n)
  if (n === 6) throw Error(x(345))
  return (
    (e.finishedWork = e.current.alternate), (e.finishedLanes = t), An(e, He, bt), Ge(e, ce()), null
  )
}
function Lc(e, t) {
  var n = G
  G |= 1
  try {
    return e(t)
  } finally {
    ;(G = n), G === 0 && ((Vr = ce() + 500), la && Pn())
  }
}
function Jn(e) {
  un !== null && un.tag === 0 && !(G & 6) && br()
  var t = G
  G |= 1
  var n = ct.transition,
    r = J
  try {
    if (((ct.transition = null), (J = 1), e)) return e()
  } finally {
    ;(J = r), (ct.transition = n), (G = t), !(G & 6) && Pn()
  }
}
function Oc() {
  ;(qe = Pr.current), re(Pr)
}
function zn(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), t0(n)), pe !== null))
    for (n = pe.return; n !== null; ) {
      var r = n
      switch ((dc(r), r.tag)) {
        case 1:
          ;(r = r.type.childContextTypes), r != null && Ls()
          break
        case 3:
          Br(), re(We), re(Ie), Sc()
          break
        case 5:
          _c(r)
          break
        case 4:
          Br()
          break
        case 13:
          re(se)
          break
        case 19:
          re(se)
          break
        case 10:
          mc(r.type._context)
          break
        case 22:
        case 23:
          Oc()
      }
      n = n.return
    }
  if (
    ((_e = e),
    (pe = e = gn(e.current, null)),
    (Te = qe = t),
    (ge = 0),
    (Zo = null),
    (Cc = pa = Qn = 0),
    (He = Lo = null),
    Fn !== null)
  ) {
    for (t = 0; t < Fn.length; t++)
      if (((n = Fn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null
        var o = r.next,
          i = n.pending
        if (i !== null) {
          var s = i.next
          ;(i.next = o), (r.next = s)
        }
        n.pending = r
      }
    Fn = null
  }
  return e
}
function Um(e, t) {
  do {
    var n = pe
    try {
      if ((hc(), (rs.current = js), $s)) {
        for (var r = ae.memoizedState; r !== null; ) {
          var o = r.queue
          o !== null && (o.pending = null), (r = r.next)
        }
        $s = !1
      }
      if (
        ((qn = 0),
        (ve = me = ae = null),
        (Co = !1),
        (Qo = 0),
        (Pc.current = null),
        n === null || n.return === null)
      ) {
        ;(ge = 1), (Zo = t), (pe = null)
        break
      }
      e: {
        var i = e,
          s = n.return,
          a = n,
          u = t
        if (
          ((t = Te),
          (a.flags |= 32768),
          u !== null && typeof u == 'object' && typeof u.then == 'function')
        ) {
          var l = u,
            d = a,
            f = d.tag
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var c = d.alternate
            c
              ? ((d.updateQueue = c.updateQueue),
                (d.memoizedState = c.memoizedState),
                (d.lanes = c.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null))
          }
          var p = uf(s)
          if (p !== null) {
            ;(p.flags &= -257), lf(p, s, a, i, t), p.mode & 1 && af(i, l, t), (t = p), (u = l)
            var g = t.updateQueue
            if (g === null) {
              var v = new Set()
              v.add(u), (t.updateQueue = v)
            } else g.add(u)
            break e
          } else {
            if (!(t & 1)) {
              af(i, l, t), Nc()
              break e
            }
            u = Error(x(426))
          }
        } else if (ie && a.mode & 1) {
          var S = uf(s)
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), lf(S, s, a, i, t), fc(Hr(u, a))
            break e
          }
        }
        ;(i = u = Hr(u, a)), ge !== 4 && (ge = 2), Lo === null ? (Lo = [i]) : Lo.push(i), (i = s)
        do {
          switch (i.tag) {
            case 3:
              ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
              var m = km(i, u, t)
              ef(i, m)
              break e
            case 1:
              a = u
              var h = i.type,
                y = i.stateNode
              if (
                !(i.flags & 128) &&
                (typeof h.getDerivedStateFromError == 'function' ||
                  (y !== null &&
                    typeof y.componentDidCatch == 'function' &&
                    (hn === null || !hn.has(y))))
              ) {
                ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
                var _ = xm(i, a, t)
                ef(i, _)
                break e
              }
          }
          i = i.return
        } while (i !== null)
      }
      Vm(n)
    } catch (k) {
      ;(t = k), pe === n && n !== null && (pe = n = n.return)
      continue
    }
    break
  } while (!0)
}
function Bm() {
  var e = zs.current
  return (zs.current = js), e === null ? js : e
}
function Nc() {
  ;(ge === 0 || ge === 3 || ge === 2) && (ge = 4),
    _e === null || (!(Qn & 268435455) && !(pa & 268435455)) || sn(_e, Te)
}
function Hs(e, t) {
  var n = G
  G |= 2
  var r = Bm()
  ;(_e !== e || Te !== t) && ((bt = null), zn(e, t))
  do
    try {
      R0()
      break
    } catch (o) {
      Um(e, o)
    }
  while (!0)
  if ((hc(), (G = n), (zs.current = r), pe !== null)) throw Error(x(261))
  return (_e = null), (Te = 0), ge
}
function R0() {
  for (; pe !== null; ) Hm(pe)
}
function P0() {
  for (; pe !== null && !Xv(); ) Hm(pe)
}
function Hm(e) {
  var t = Km(e.alternate, e, qe)
  ;(e.memoizedProps = e.pendingProps), t === null ? Vm(e) : (pe = t), (Pc.current = null)
}
function Vm(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = S0(n, t)), n !== null)) {
        ;(n.flags &= 32767), (pe = n)
        return
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(ge = 6), (pe = null)
        return
      }
    } else if (((n = _0(n, t, qe)), n !== null)) {
      pe = n
      return
    }
    if (((t = t.sibling), t !== null)) {
      pe = t
      return
    }
    pe = t = e
  } while (t !== null)
  ge === 0 && (ge = 5)
}
function An(e, t, n) {
  var r = J,
    o = ct.transition
  try {
    ;(ct.transition = null), (J = 1), C0(e, t, n, r)
  } finally {
    ;(ct.transition = o), (J = r)
  }
  return null
}
function C0(e, t, n, r) {
  do br()
  while (un !== null)
  if (G & 6) throw Error(x(327))
  n = e.finishedWork
  var o = e.finishedLanes
  if (n === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(x(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var i = n.lanes | n.childLanes
  if (
    (u_(e, i),
    e === _e && ((pe = _e = null), (Te = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ji ||
      ((ji = !0),
      Gm(ks, function () {
        return br(), null
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    ;(i = ct.transition), (ct.transition = null)
    var s = J
    J = 1
    var a = G
    ;(G |= 4),
      (Pc.current = null),
      w0(e, n),
      $m(n, e),
      Y_(Ju),
      (Rs = !!Qu),
      (Ju = Qu = null),
      (e.current = n),
      T0(n),
      Zv(),
      (G = a),
      (J = s),
      (ct.transition = i)
  } else e.current = n
  if (
    (ji && ((ji = !1), (un = e), (Bs = o)),
    (i = e.pendingLanes),
    i === 0 && (hn = null),
    n_(n.stateNode),
    Ge(e, ce()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]),
        r(o.value, {
          componentStack: o.stack,
          digest: o.digest,
        })
  if (Us) throw ((Us = !1), (e = yl), (yl = null), e)
  return (
    Bs & 1 && e.tag !== 0 && br(),
    (i = e.pendingLanes),
    i & 1 ? (e === vl ? Oo++ : ((Oo = 0), (vl = e))) : (Oo = 0),
    Pn(),
    null
  )
}
function br() {
  if (un !== null) {
    var e = kh(Bs),
      t = ct.transition,
      n = J
    try {
      if (((ct.transition = null), (J = 16 > e ? 16 : e), un === null)) var r = !1
      else {
        if (((e = un), (un = null), (Bs = 0), G & 6)) throw Error(x(331))
        var o = G
        for (G |= 4, N = e.current; N !== null; ) {
          var i = N,
            s = i.child
          if (N.flags & 16) {
            var a = i.deletions
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var l = a[u]
                for (N = l; N !== null; ) {
                  var d = N
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Io(8, d, i)
                  }
                  var f = d.child
                  if (f !== null) (f.return = d), (N = f)
                  else
                    for (; N !== null; ) {
                      d = N
                      var c = d.sibling,
                        p = d.return
                      if ((Mm(d), d === l)) {
                        N = null
                        break
                      }
                      if (c !== null) {
                        ;(c.return = p), (N = c)
                        break
                      }
                      N = p
                    }
                }
              }
              var g = i.alternate
              if (g !== null) {
                var v = g.child
                if (v !== null) {
                  g.child = null
                  do {
                    var S = v.sibling
                    ;(v.sibling = null), (v = S)
                  } while (v !== null)
                }
              }
              N = i
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (N = s)
          else
            e: for (; N !== null; ) {
              if (((i = N), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Io(9, i, i.return)
                }
              var m = i.sibling
              if (m !== null) {
                ;(m.return = i.return), (N = m)
                break e
              }
              N = i.return
            }
        }
        var h = e.current
        for (N = h; N !== null; ) {
          s = N
          var y = s.child
          if (s.subtreeFlags & 2064 && y !== null) (y.return = s), (N = y)
          else
            e: for (s = h; N !== null; ) {
              if (((a = N), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      fa(9, a)
                  }
                } catch (k) {
                  le(a, a.return, k)
                }
              if (a === s) {
                N = null
                break e
              }
              var _ = a.sibling
              if (_ !== null) {
                ;(_.return = a.return), (N = _)
                break e
              }
              N = a.return
            }
        }
        if (((G = o), Pn(), At && typeof At.onPostCommitFiberRoot == 'function'))
          try {
            At.onPostCommitFiberRoot(oa, e)
          } catch {}
        r = !0
      }
      return r
    } finally {
      ;(J = n), (ct.transition = t)
    }
  }
  return !1
}
function wf(e, t, n) {
  ;(t = Hr(n, t)),
    (t = km(e, t, 1)),
    (e = pn(e, t, 1)),
    (t = Ae()),
    e !== null && (ai(e, 1, t), Ge(e, t))
}
function le(e, t, n) {
  if (e.tag === 3) wf(e, e, n)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        wf(t, e, n)
        break
      } else if (t.tag === 1) {
        var r = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' && (hn === null || !hn.has(r)))
        ) {
          ;(e = Hr(n, e)),
            (e = xm(t, e, 1)),
            (t = pn(t, e, 1)),
            (e = Ae()),
            t !== null && (ai(t, 1, e), Ge(t, e))
          break
        }
      }
      t = t.return
    }
}
function I0(e, t, n) {
  var r = e.pingCache
  r !== null && r.delete(t),
    (t = Ae()),
    (e.pingedLanes |= e.suspendedLanes & n),
    _e === e &&
      (Te & n) === n &&
      (ge === 4 || (ge === 3 && (Te & 130023424) === Te && 500 > ce() - Ic) ? zn(e, 0) : (Cc |= n)),
    Ge(e, t)
}
function Wm(e, t) {
  t === 0 && (e.mode & 1 ? ((t = Ii), (Ii <<= 1), !(Ii & 130023424) && (Ii = 4194304)) : (t = 1))
  var n = Ae()
  ;(e = Yt(e, t)), e !== null && (ai(e, t, n), Ge(e, n))
}
function L0(e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), Wm(e, n)
}
function O0(e, t) {
  var n = 0
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState
      o !== null && (n = o.retryLane)
      break
    case 19:
      r = e.stateNode
      break
    default:
      throw Error(x(314))
  }
  r !== null && r.delete(t), Wm(e, n)
}
var Km
Km = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || We.current) Ve = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ve = !1), v0(e, t, n)
      Ve = !!(e.flags & 131072)
    }
  else (Ve = !1), ie && t.flags & 1048576 && Qh(t, As, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type
      is(e, t), (e = t.pendingProps)
      var o = jr(t, Ie.current)
      Mr(t, n), (o = wc(null, t, r, e, o, n))
      var i = Tc()
      return (
        (t.flags |= 1),
        typeof o == 'object' && o !== null && typeof o.render == 'function' && o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ke(r) ? ((i = !0), Os(t)) : (i = !1),
            (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
            yc(t),
            (o.updater = da),
            (t.stateNode = o),
            (o._reactInternals = t),
            sl(t, r, e, n),
            (t = ll(null, t, r, !0, i, n)))
          : ((t.tag = 0), ie && i && cc(t), Ne(null, t, o, n), (t = t.child)),
        t
      )
    case 16:
      r = t.elementType
      e: {
        switch (
          (is(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = A0(r)),
          (e = vt(r, e)),
          o)
        ) {
          case 0:
            t = ul(null, t, r, e, n)
            break e
          case 1:
            t = ff(null, t, r, e, n)
            break e
          case 11:
            t = cf(null, t, r, e, n)
            break e
          case 14:
            t = df(null, t, r, vt(r.type, e), n)
            break e
        }
        throw Error(x(306, r, ''))
      }
      return t
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : vt(r, o)),
        ul(e, t, r, o, n)
      )
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : vt(r, o)),
        ff(e, t, r, o, n)
      )
    case 3:
      e: {
        if ((Im(t), e === null)) throw Error(x(387))
        ;(r = t.pendingProps), (i = t.memoizedState), (o = i.element), nm(e, t), bs(t, r, null, n)
        var s = t.memoizedState
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            ;(o = Hr(Error(x(423)), t)), (t = pf(e, t, r, n, o))
            break e
          } else if (r !== o) {
            ;(o = Hr(Error(x(424)), t)), (t = pf(e, t, r, n, o))
            break e
          } else
            for (
              Je = fn(t.stateNode.containerInfo.firstChild),
                Ze = t,
                ie = !0,
                St = null,
                n = em(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((zr(), r === o)) {
            t = qt(e, t, n)
            break e
          }
          Ne(e, t, r, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        rm(t),
        e === null && rl(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        Xu(r, o) ? (s = null) : i !== null && Xu(r, i) && (t.flags |= 32),
        Cm(e, t),
        Ne(e, t, s, n),
        t.child
      )
    case 6:
      return e === null && rl(t), null
    case 13:
      return Lm(e, t, n)
    case 4:
      return (
        vc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Ur(t, null, r, n)) : Ne(e, t, r, n),
        t.child
      )
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : vt(r, o)),
        cf(e, t, r, o, n)
      )
    case 7:
      return Ne(e, t, t.pendingProps, n), t.child
    case 8:
      return Ne(e, t, t.pendingProps.children, n), t.child
    case 12:
      return Ne(e, t, t.pendingProps.children, n), t.child
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          ee(Ds, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (Tt(i.value, s)) {
            if (i.children === o.children && !We.current) {
              t = qt(e, t, n)
              break e
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies
              if (a !== null) {
                s = i.child
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (i.tag === 1) {
                      ;(u = Vt(-1, n & -n)), (u.tag = 2)
                      var l = i.updateQueue
                      if (l !== null) {
                        l = l.shared
                        var d = l.pending
                        d === null ? (u.next = u) : ((u.next = d.next), (d.next = u)),
                          (l.pending = u)
                      }
                    }
                    ;(i.lanes |= n),
                      (u = i.alternate),
                      u !== null && (u.lanes |= n),
                      ol(i.return, n, t),
                      (a.lanes |= n)
                    break
                  }
                  u = u.next
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(x(341))
                ;(s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  ol(s, n, t),
                  (s = i.sibling)
              } else s = i.child
              if (s !== null) s.return = i
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null
                    break
                  }
                  if (((i = s.sibling), i !== null)) {
                    ;(i.return = s.return), (s = i)
                    break
                  }
                  s = s.return
                }
              i = s
            }
        Ne(e, t, o.children, n), (t = t.child)
      }
      return t
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Mr(t, n),
        (o = pt(o)),
        (r = r(o)),
        (t.flags |= 1),
        Ne(e, t, r, n),
        t.child
      )
    case 14:
      return (r = t.type), (o = vt(r, t.pendingProps)), (o = vt(r.type, o)), df(e, t, r, o, n)
    case 15:
      return Rm(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : vt(r, o)),
        is(e, t),
        (t.tag = 1),
        Ke(r) ? ((e = !0), Os(t)) : (e = !1),
        Mr(t, n),
        Tm(t, r, o),
        sl(t, r, o, n),
        ll(null, t, r, !0, e, n)
      )
    case 19:
      return Om(e, t, n)
    case 22:
      return Pm(e, t, n)
  }
  throw Error(x(156, t.tag))
}
function Gm(e, t) {
  return Sh(e, t)
}
function N0(e, t, n, r) {
  ;(this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null)
}
function lt(e, t, n, r) {
  return new N0(e, t, n, r)
}
function Ac(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function A0(e) {
  if (typeof e == 'function') return Ac(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === Xl)) return 11
    if (e === Zl) return 14
  }
  return 2
}
function gn(e, t) {
  var n = e.alternate
  return (
    n === null
      ? ((n = lt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null
        ? null
        : {
            lanes: t.lanes,
            firstContext: t.firstContext,
          }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  )
}
function us(e, t, n, r, o, i) {
  var s = 2
  if (((r = e), typeof e == 'function')) Ac(e) && (s = 1)
  else if (typeof e == 'string') s = 5
  else
    e: switch (e) {
      case yr:
        return Un(n.children, o, i, t)
      case Jl:
        ;(s = 8), (o |= 8)
        break
      case Lu:
        return (e = lt(12, n, t, o | 2)), (e.elementType = Lu), (e.lanes = i), e
      case Ou:
        return (e = lt(13, n, t, o)), (e.elementType = Ou), (e.lanes = i), e
      case Nu:
        return (e = lt(19, n, t, o)), (e.elementType = Nu), (e.lanes = i), e
      case rh:
        return ha(n, o, i, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case th:
              s = 10
              break e
            case nh:
              s = 9
              break e
            case Xl:
              s = 11
              break e
            case Zl:
              s = 14
              break e
            case nn:
              ;(s = 16), (r = null)
              break e
          }
        throw Error(x(130, e == null ? e : typeof e, ''))
    }
  return (t = lt(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
}
function Un(e, t, n, r) {
  return (e = lt(7, e, r, t)), (e.lanes = n), e
}
function ha(e, t, n, r) {
  return (
    (e = lt(22, e, r, t)),
    (e.elementType = rh),
    (e.lanes = n),
    (e.stateNode = {
      isHidden: !1,
    }),
    e
  )
}
function su(e, t, n) {
  return (e = lt(6, e, null, t)), (e.lanes = n), e
}
function au(e, t, n) {
  return (
    (t = lt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  )
}
function D0(e, t, n, r, o) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ua(0)),
    (this.expirationTimes = Ua(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ua(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null)
}
function Dc(e, t, n, r, o, i, s, a, u) {
  return (
    (e = new D0(e, t, n, a, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = lt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    yc(i),
    e
  )
}
function M0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: gr,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  }
}
function Ym(e) {
  if (!e) return _n
  e = e._reactInternals
  e: {
    if (ir(e) !== e || e.tag !== 1) throw Error(x(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (Ke(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error(x(171))
  }
  if (e.tag === 1) {
    var n = e.type
    if (Ke(n)) return Yh(e, n, t)
  }
  return t
}
function qm(e, t, n, r, o, i, s, a, u) {
  return (
    (e = Dc(n, r, !0, e, o, i, s, a, u)),
    (e.context = Ym(null)),
    (n = e.current),
    (r = Ae()),
    (o = mn(n)),
    (i = Vt(r, o)),
    (i.callback = t ?? null),
    pn(n, i, o),
    (e.current.lanes = o),
    ai(e, o, r),
    Ge(e, r),
    e
  )
}
function ma(e, t, n, r) {
  var o = t.current,
    i = Ae(),
    s = mn(o)
  return (
    (n = Ym(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Vt(i, s)),
    (t.payload = {
      element: e,
    }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = pn(o, t, s)),
    e !== null && (wt(e, o, s, i), ns(e, o, s)),
    s
  )
}
function Vs(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function Tf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function Mc(e, t) {
  Tf(e, t), (e = e.alternate) && Tf(e, t)
}
function b0() {
  return null
}
var Qm =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function bc(e) {
  this._internalRoot = e
}
ga.prototype.render = bc.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(x(409))
  ma(e, t, null, null)
}
ga.prototype.unmount = bc.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    Jn(function () {
      ma(null, e, null, null)
    }),
      (t[Gt] = null)
  }
}
function ga(e) {
  this._internalRoot = e
}
ga.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ph()
    e = {
      blockedOn: null,
      target: e,
      priority: t,
    }
    for (var n = 0; n < on.length && t !== 0 && t < on[n].priority; n++);
    on.splice(n, 0, e), n === 0 && Ih(e)
  }
}
function Fc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function ya(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function kf() {}
function F0(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var i = r
      r = function () {
        var l = Vs(s)
        i.call(l)
      }
    }
    var s = qm(t, r, e, 0, null, !1, !1, '', kf)
    return (
      (e._reactRootContainer = s),
      (e[Gt] = s.current),
      Wo(e.nodeType === 8 ? e.parentNode : e),
      Jn(),
      s
    )
  }
  for (; (o = e.lastChild); ) e.removeChild(o)
  if (typeof r == 'function') {
    var a = r
    r = function () {
      var l = Vs(u)
      a.call(l)
    }
  }
  var u = Dc(e, 0, !1, null, null, !1, !1, '', kf)
  return (
    (e._reactRootContainer = u),
    (e[Gt] = u.current),
    Wo(e.nodeType === 8 ? e.parentNode : e),
    Jn(function () {
      ma(t, u, n, r)
    }),
    u
  )
}
function va(e, t, n, r, o) {
  var i = n._reactRootContainer
  if (i) {
    var s = i
    if (typeof o == 'function') {
      var a = o
      o = function () {
        var u = Vs(s)
        a.call(u)
      }
    }
    ma(t, s, e, o)
  } else s = F0(n, t, e, o, r)
  return Vs(s)
}
xh = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = So(t.pendingLanes)
        n !== 0 && (nc(t, n | 1), Ge(t, ce()), !(G & 6) && ((Vr = ce() + 500), Pn()))
      }
      break
    case 13:
      Jn(function () {
        var r = Yt(e, 1)
        if (r !== null) {
          var o = Ae()
          wt(r, e, 1, o)
        }
      }),
        Mc(e, 1)
  }
}
rc = function (e) {
  if (e.tag === 13) {
    var t = Yt(e, 134217728)
    if (t !== null) {
      var n = Ae()
      wt(t, e, 134217728, n)
    }
    Mc(e, 134217728)
  }
}
Rh = function (e) {
  if (e.tag === 13) {
    var t = mn(e),
      n = Yt(e, t)
    if (n !== null) {
      var r = Ae()
      wt(n, e, t, r)
    }
    Mc(e, t)
  }
}
Ph = function () {
  return J
}
Ch = function (e, t) {
  var n = J
  try {
    return (J = e), t()
  } finally {
    J = n
  }
}
Bu = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Mu(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode
        for (
          n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t]
          if (r !== e && r.form === e.form) {
            var o = ua(r)
            if (!o) throw Error(x(90))
            ih(r), Mu(r, o)
          }
        }
      }
      break
    case 'textarea':
      ah(e, n)
      break
    case 'select':
      ;(t = n.value), t != null && Or(e, !!n.multiple, t, !1)
  }
}
hh = Lc
mh = Jn
var $0 = {
    usingClientEntryPoint: !1,
    Events: [li, Er, ua, fh, ph, Lc],
  },
  yo = {
    findFiberByHostInstance: bn,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  j0 = {
    bundleType: yo.bundleType,
    version: yo.version,
    rendererPackageName: yo.rendererPackageName,
    rendererConfig: yo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: en.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = vh(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: yo.findFiberByHostInstance || b0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var zi = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!zi.isDisabled && zi.supportsFiber)
    try {
      ;(oa = zi.inject(j0)), (At = zi)
    } catch {}
}
rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $0
rt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!Fc(t)) throw Error(x(200))
  return M0(e, t, null, n)
}
rt.createRoot = function (e, t) {
  if (!Fc(e)) throw Error(x(299))
  var n = !1,
    r = '',
    o = Qm
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Dc(e, 1, !1, null, null, n, !1, r, o)),
    (e[Gt] = t.current),
    Wo(e.nodeType === 8 ? e.parentNode : e),
    new bc(t)
  )
}
rt.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(x(188))
      : ((e = Object.keys(e).join(',')), Error(x(268, e)))
  return (e = vh(t)), (e = e === null ? null : e.stateNode), e
}
rt.flushSync = function (e) {
  return Jn(e)
}
rt.hydrate = function (e, t, n) {
  if (!ya(t)) throw Error(x(200))
  return va(null, e, t, !0, n)
}
rt.hydrateRoot = function (e, t, n) {
  if (!Fc(e)) throw Error(x(405))
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = '',
    s = Qm
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = qm(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[Gt] = t.current),
    Wo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o)
  return new ga(t)
}
rt.render = function (e, t, n) {
  if (!ya(t)) throw Error(x(200))
  return va(null, e, t, !1, n)
}
rt.unmountComponentAtNode = function (e) {
  if (!ya(e)) throw Error(x(40))
  return e._reactRootContainer
    ? (Jn(function () {
        va(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[Gt] = null)
        })
      }),
      !0)
    : !1
}
rt.unstable_batchedUpdates = Lc
rt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ya(n)) throw Error(x(200))
  if (e == null || e._reactInternals === void 0) throw Error(x(38))
  return va(e, t, n, !1, r)
}
rt.version = '18.3.1-next-f1338f8080-20240426'
function Jm() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jm)
    } catch (e) {
      console.error(e)
    }
}
Jm(), (Jp.exports = rt)
var Xm = Jp.exports,
  xf = Xm
;(Cu.createRoot = xf.createRoot), (Cu.hydrateRoot = xf.hydrateRoot)
const z0 =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  U0 = {
    '&amp;': '&',
    '&#38;': '&',
    '&lt;': '<',
    '&#60;': '<',
    '&gt;': '>',
    '&#62;': '>',
    '&apos;': "'",
    '&#39;': "'",
    '&quot;': '"',
    '&#34;': '"',
    '&nbsp;': ' ',
    '&#160;': ' ',
    '&copy;': '©',
    '&#169;': '©',
    '&reg;': '®',
    '&#174;': '®',
    '&hellip;': '…',
    '&#8230;': '…',
    '&#x2F;': '/',
    '&#47;': '/',
  },
  B0 = (e) => U0[e],
  H0 = (e) => e.replace(z0, B0)
let El = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: !0,
  unescape: H0,
}
const V0 = (e = {}) => {
    El = {
      ...El,
      ...e,
    }
  },
  XR = () => El
let Zm
const W0 = (e) => {
    Zm = e
  },
  ZR = () => Zm,
  K0 = {
    type: '3rdParty',
    init(e) {
      V0(e.options.react), W0(e)
    },
  },
  j = typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__,
  Bn = '9.22.0',
  q = globalThis
function sr() {
  return _a(q), q
}
function _a(e) {
  const t = (e.__SENTRY__ = e.__SENTRY__ || {})
  return (t.version = t.version || Bn), (t[Bn] = t[Bn] || {})
}
function Sa(e, t, n = q) {
  const r = (n.__SENTRY__ = n.__SENTRY__ || {}),
    o = (r[Bn] = r[Bn] || {})
  return o[e] || (o[e] = t())
}
const eg = Object.prototype.toString
function $c(e) {
  switch (eg.call(e)) {
    case '[object Error]':
    case '[object Exception]':
    case '[object DOMException]':
    case '[object WebAssembly.Exception]':
      return !0
    default:
      return Qt(e, Error)
  }
}
function to(e, t) {
  return eg.call(e) === `[object ${t}]`
}
function tg(e) {
  return to(e, 'ErrorEvent')
}
function Rf(e) {
  return to(e, 'DOMError')
}
function G0(e) {
  return to(e, 'DOMException')
}
function Wt(e) {
  return to(e, 'String')
}
function jc(e) {
  return (
    typeof e == 'object' &&
    e !== null &&
    '__sentry_template_string__' in e &&
    '__sentry_template_values__' in e
  )
}
function zc(e) {
  return e === null || jc(e) || (typeof e != 'object' && typeof e != 'function')
}
function ei(e) {
  return to(e, 'Object')
}
function Ea(e) {
  return typeof Event < 'u' && Qt(e, Event)
}
function Y0(e) {
  return typeof Element < 'u' && Qt(e, Element)
}
function q0(e) {
  return to(e, 'RegExp')
}
function wa(e) {
  return !!(e != null && e.then && typeof e.then == 'function')
}
function Q0(e) {
  return ei(e) && 'nativeEvent' in e && 'preventDefault' in e && 'stopPropagation' in e
}
function Qt(e, t) {
  try {
    return e instanceof t
  } catch {
    return !1
  }
}
function ng(e) {
  return !!(typeof e == 'object' && e !== null && (e.__isVue || e._isVue))
}
function rg(e) {
  return typeof Request < 'u' && Qt(e, Request)
}
const Uc = q,
  J0 = 80
function Xn(e, t = {}) {
  if (!e) return '<unknown>'
  try {
    let n = e
    const r = 5,
      o = []
    let i = 0,
      s = 0
    const a = ' > ',
      u = a.length
    let l
    const d = Array.isArray(t) ? t : t.keyAttrs,
      f = (!Array.isArray(t) && t.maxStringLength) || J0
    for (
      ;
      n &&
      i++ < r &&
      ((l = X0(n, d)), !(l === 'html' || (i > 1 && s + o.length * u + l.length >= f)));

    )
      o.push(l), (s += l.length), (n = n.parentNode)
    return o.reverse().join(a)
  } catch {
    return '<unknown>'
  }
}
function X0(e, t) {
  const n = e,
    r = []
  if (!(n != null && n.tagName)) return ''
  if (Uc.HTMLElement && n instanceof HTMLElement && n.dataset) {
    if (n.dataset.sentryComponent) return n.dataset.sentryComponent
    if (n.dataset.sentryElement) return n.dataset.sentryElement
  }
  r.push(n.tagName.toLowerCase())
  const o =
    t != null && t.length
      ? t.filter((s) => n.getAttribute(s)).map((s) => [s, n.getAttribute(s)])
      : null
  if (o != null && o.length)
    o.forEach((s) => {
      r.push(`[${s[0]}="${s[1]}"]`)
    })
  else {
    n.id && r.push(`#${n.id}`)
    const s = n.className
    if (s && Wt(s)) {
      const a = s.split(/\s+/)
      for (const u of a) r.push(`.${u}`)
    }
  }
  const i = ['aria-label', 'type', 'name', 'title', 'alt']
  for (const s of i) {
    const a = n.getAttribute(s)
    a && r.push(`[${s}="${a}"]`)
  }
  return r.join('')
}
function di() {
  try {
    return Uc.document.location.href
  } catch {
    return ''
  }
}
function og(e) {
  if (!Uc.HTMLElement) return null
  let t = e
  const n = 5
  for (let r = 0; r < n; r++) {
    if (!t) return null
    if (t instanceof HTMLElement) {
      if (t.dataset.sentryComponent) return t.dataset.sentryComponent
      if (t.dataset.sentryElement) return t.dataset.sentryElement
    }
    t = t.parentNode
  }
  return null
}
const Z0 = 'Sentry Logger ',
  wl = ['debug', 'info', 'warn', 'error', 'log', 'assert', 'trace'],
  Ws = {}
function ar(e) {
  if (!('console' in q)) return e()
  const t = q.console,
    n = {},
    r = Object.keys(Ws)
  r.forEach((o) => {
    const i = Ws[o]
    ;(n[o] = t[o]), (t[o] = i)
  })
  try {
    return e()
  } finally {
    r.forEach((o) => {
      t[o] = n[o]
    })
  }
}
function eS() {
  let e = !1
  const t = {
    enable: () => {
      e = !0
    },
    disable: () => {
      e = !1
    },
    isEnabled: () => e,
  }
  return (
    j
      ? wl.forEach((n) => {
          t[n] = (...r) => {
            e &&
              ar(() => {
                q.console[n](`${Z0}[${n}]:`, ...r)
              })
          }
        })
      : wl.forEach((n) => {
          t[n] = () => {}
        }),
    t
  )
}
const C = Sa('logger', eS)
function Ks(e, t = 0) {
  return typeof e != 'string' || t === 0 || e.length <= t ? e : `${e.slice(0, t)}...`
}
function Pf(e, t) {
  if (!Array.isArray(e)) return ''
  const n = []
  for (let r = 0; r < e.length; r++) {
    const o = e[r]
    try {
      ng(o) ? n.push('[VueViewModel]') : n.push(String(o))
    } catch {
      n.push('[value cannot be serialized]')
    }
  }
  return n.join(t)
}
function tS(e, t, n = !1) {
  return Wt(e) ? (q0(t) ? t.test(e) : Wt(t) ? (n ? e === t : e.includes(t)) : !1) : !1
}
function Hn(e, t = [], n = !1) {
  return t.some((r) => tS(e, r, n))
}
function Xe(e, t, n) {
  if (!(t in e)) return
  const r = e[t]
  if (typeof r != 'function') return
  const o = n(r)
  typeof o == 'function' && ig(o, r)
  try {
    e[t] = o
  } catch {
    j && C.log(`Failed to replace method "${t}" in object`, e)
  }
}
function nt(e, t, n) {
  try {
    Object.defineProperty(e, t, {
      value: n,
      writable: !0,
      configurable: !0,
    })
  } catch {
    j && C.log(`Failed to add non-enumerable property "${t}" to object`, e)
  }
}
function ig(e, t) {
  try {
    const n = t.prototype || {}
    ;(e.prototype = t.prototype = n), nt(e, '__sentry_original__', t)
  } catch {}
}
function Bc(e) {
  return e.__sentry_original__
}
function sg(e) {
  if ($c(e))
    return {
      message: e.message,
      name: e.name,
      stack: e.stack,
      ...If(e),
    }
  if (Ea(e)) {
    const t = {
      type: e.type,
      target: Cf(e.target),
      currentTarget: Cf(e.currentTarget),
      ...If(e),
    }
    return typeof CustomEvent < 'u' && Qt(e, CustomEvent) && (t.detail = e.detail), t
  } else return e
}
function Cf(e) {
  try {
    return Y0(e) ? Xn(e) : Object.prototype.toString.call(e)
  } catch {
    return '<unknown>'
  }
}
function If(e) {
  if (typeof e == 'object' && e !== null) {
    const t = {}
    for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
    return t
  } else return {}
}
function nS(e, t = 40) {
  const n = Object.keys(sg(e))
  n.sort()
  const r = n[0]
  if (!r) return '[object has no keys]'
  if (r.length >= t) return Ks(r, t)
  for (let o = n.length; o > 0; o--) {
    const i = n.slice(0, o).join(', ')
    if (!(i.length > t)) return o === n.length ? i : Ks(i, t)
  }
  return ''
}
function rS() {
  const e = q
  return e.crypto || e.msCrypto
}
function dt(e = rS()) {
  let t = () => Math.random() * 16
  try {
    if (e != null && e.randomUUID) return e.randomUUID().replace(/-/g, '')
    e != null &&
      e.getRandomValues &&
      (t = () => {
        const n = new Uint8Array(1)
        return e.getRandomValues(n), n[0]
      })
  } catch {}
  return ('10000000100040008000' + 1e11).replace(/[018]/g, (n) =>
    (n ^ ((t() & 15) >> (n / 4))).toString(16),
  )
}
function ag(e) {
  var t, n
  return (n = (t = e.exception) == null ? void 0 : t.values) == null ? void 0 : n[0]
}
function Mn(e) {
  const { message: t, event_id: n } = e
  if (t) return t
  const r = ag(e)
  return r
    ? r.type && r.value
      ? `${r.type}: ${r.value}`
      : r.type || r.value || n || '<unknown>'
    : n || '<unknown>'
}
function Tl(e, t, n) {
  const r = (e.exception = e.exception || {}),
    o = (r.values = r.values || []),
    i = (o[0] = o[0] || {})
  i.value || (i.value = t || ''), i.type || (i.type = 'Error')
}
function Wr(e, t) {
  const n = ag(e)
  if (!n) return
  const r = {
      type: 'generic',
      handled: !0,
    },
    o = n.mechanism
  if (
    ((n.mechanism = {
      ...r,
      ...o,
      ...t,
    }),
    t && 'data' in t)
  ) {
    const i = {
      ...(o == null ? void 0 : o.data),
      ...t.data,
    }
    n.mechanism.data = i
  }
}
function Lf(e) {
  if (oS(e)) return !0
  try {
    nt(e, '__sentry_captured__', !0)
  } catch {}
  return !1
}
function oS(e) {
  try {
    return e.__sentry_captured__
  } catch {}
}
const ug = 1e3
function fi() {
  return Date.now() / ug
}
function iS() {
  const { performance: e } = q
  if (!(e != null && e.now)) return fi
  const t = Date.now() - e.now(),
    n = e.timeOrigin == null ? t : e.timeOrigin
  return () => (n + e.now()) / ug
}
const De = iS()
let uu
function sS() {
  var d
  const { performance: e } = q
  if (!(e != null && e.now)) return [void 0, 'none']
  const t = 3600 * 1e3,
    n = e.now(),
    r = Date.now(),
    o = e.timeOrigin ? Math.abs(e.timeOrigin + n - r) : t,
    i = o < t,
    s = (d = e.timing) == null ? void 0 : d.navigationStart,
    u = typeof s == 'number' ? Math.abs(s + n - r) : t,
    l = u < t
  return i || l ? (o <= u ? [e.timeOrigin, 'timeOrigin'] : [s, 'navigationStart']) : [r, 'dateNow']
}
function mt() {
  return uu || (uu = sS()), uu[0]
}
function aS(e) {
  const t = De(),
    n = {
      sid: dt(),
      init: !0,
      timestamp: t,
      started: t,
      duration: 0,
      status: 'ok',
      errors: 0,
      ignoreDuration: !1,
      toJSON: () => lS(n),
    }
  return e && Kr(n, e), n
}
function Kr(e, t = {}) {
  if (
    (t.user &&
      (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address),
      !e.did && !t.did && (e.did = t.user.id || t.user.email || t.user.username)),
    (e.timestamp = t.timestamp || De()),
    t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism),
    t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
    t.sid && (e.sid = t.sid.length === 32 ? t.sid : dt()),
    t.init !== void 0 && (e.init = t.init),
    !e.did && t.did && (e.did = `${t.did}`),
    typeof t.started == 'number' && (e.started = t.started),
    e.ignoreDuration)
  )
    e.duration = void 0
  else if (typeof t.duration == 'number') e.duration = t.duration
  else {
    const n = e.timestamp - e.started
    e.duration = n >= 0 ? n : 0
  }
  t.release && (e.release = t.release),
    t.environment && (e.environment = t.environment),
    !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress),
    !e.userAgent && t.userAgent && (e.userAgent = t.userAgent),
    typeof t.errors == 'number' && (e.errors = t.errors),
    t.status && (e.status = t.status)
}
function uS(e, t) {
  let n = {}
  e.status === 'ok' &&
    (n = {
      status: 'exited',
    }),
    Kr(e, n)
}
function lS(e) {
  return {
    sid: `${e.sid}`,
    init: e.init,
    started: new Date(e.started * 1e3).toISOString(),
    timestamp: new Date(e.timestamp * 1e3).toISOString(),
    status: e.status,
    errors: e.errors,
    did: typeof e.did == 'number' || typeof e.did == 'string' ? `${e.did}` : void 0,
    duration: e.duration,
    abnormal_mechanism: e.abnormal_mechanism,
    attrs: {
      release: e.release,
      environment: e.environment,
      ip_address: e.ipAddress,
      user_agent: e.userAgent,
    },
  }
}
function pi(e, t, n = 2) {
  if (!t || typeof t != 'object' || n <= 0) return t
  if (e && Object.keys(t).length === 0) return e
  const r = {
    ...e,
  }
  for (const o in t) Object.prototype.hasOwnProperty.call(t, o) && (r[o] = pi(r[o], t[o], n - 1))
  return r
}
const kl = '_sentrySpan'
function ti(e, t) {
  t ? nt(e, kl, t) : delete e[kl]
}
function Gs(e) {
  return e[kl]
}
function Sn() {
  return dt()
}
function hi() {
  return dt().substring(16)
}
const cS = 100
class Jt {
  constructor() {
    ;(this._notifyingListeners = !1),
      (this._scopeListeners = []),
      (this._eventProcessors = []),
      (this._breadcrumbs = []),
      (this._attachments = []),
      (this._user = {}),
      (this._tags = {}),
      (this._extra = {}),
      (this._contexts = {}),
      (this._sdkProcessingMetadata = {}),
      (this._propagationContext = {
        traceId: Sn(),
        sampleRand: Math.random(),
      })
  }
  clone() {
    const t = new Jt()
    return (
      (t._breadcrumbs = [...this._breadcrumbs]),
      (t._tags = {
        ...this._tags,
      }),
      (t._extra = {
        ...this._extra,
      }),
      (t._contexts = {
        ...this._contexts,
      }),
      this._contexts.flags &&
        (t._contexts.flags = {
          values: [...this._contexts.flags.values],
        }),
      (t._user = this._user),
      (t._level = this._level),
      (t._session = this._session),
      (t._transactionName = this._transactionName),
      (t._fingerprint = this._fingerprint),
      (t._eventProcessors = [...this._eventProcessors]),
      (t._attachments = [...this._attachments]),
      (t._sdkProcessingMetadata = {
        ...this._sdkProcessingMetadata,
      }),
      (t._propagationContext = {
        ...this._propagationContext,
      }),
      (t._client = this._client),
      (t._lastEventId = this._lastEventId),
      ti(t, Gs(this)),
      t
    )
  }
  setClient(t) {
    this._client = t
  }
  setLastEventId(t) {
    this._lastEventId = t
  }
  getClient() {
    return this._client
  }
  lastEventId() {
    return this._lastEventId
  }
  addScopeListener(t) {
    this._scopeListeners.push(t)
  }
  addEventProcessor(t) {
    return this._eventProcessors.push(t), this
  }
  setUser(t) {
    return (
      (this._user = t || {
        email: void 0,
        id: void 0,
        ip_address: void 0,
        username: void 0,
      }),
      this._session &&
        Kr(this._session, {
          user: t,
        }),
      this._notifyScopeListeners(),
      this
    )
  }
  getUser() {
    return this._user
  }
  setTags(t) {
    return (
      (this._tags = {
        ...this._tags,
        ...t,
      }),
      this._notifyScopeListeners(),
      this
    )
  }
  setTag(t, n) {
    return (
      (this._tags = {
        ...this._tags,
        [t]: n,
      }),
      this._notifyScopeListeners(),
      this
    )
  }
  setExtras(t) {
    return (
      (this._extra = {
        ...this._extra,
        ...t,
      }),
      this._notifyScopeListeners(),
      this
    )
  }
  setExtra(t, n) {
    return (
      (this._extra = {
        ...this._extra,
        [t]: n,
      }),
      this._notifyScopeListeners(),
      this
    )
  }
  setFingerprint(t) {
    return (this._fingerprint = t), this._notifyScopeListeners(), this
  }
  setLevel(t) {
    return (this._level = t), this._notifyScopeListeners(), this
  }
  setTransactionName(t) {
    return (this._transactionName = t), this._notifyScopeListeners(), this
  }
  setContext(t, n) {
    return (
      n === null ? delete this._contexts[t] : (this._contexts[t] = n),
      this._notifyScopeListeners(),
      this
    )
  }
  setSession(t) {
    return t ? (this._session = t) : delete this._session, this._notifyScopeListeners(), this
  }
  getSession() {
    return this._session
  }
  update(t) {
    if (!t) return this
    const n = typeof t == 'function' ? t(this) : t,
      r = n instanceof Jt ? n.getScopeData() : ei(n) ? t : void 0,
      {
        tags: o,
        extra: i,
        user: s,
        contexts: a,
        level: u,
        fingerprint: l = [],
        propagationContext: d,
      } = r || {}
    return (
      (this._tags = {
        ...this._tags,
        ...o,
      }),
      (this._extra = {
        ...this._extra,
        ...i,
      }),
      (this._contexts = {
        ...this._contexts,
        ...a,
      }),
      s && Object.keys(s).length && (this._user = s),
      u && (this._level = u),
      l.length && (this._fingerprint = l),
      d && (this._propagationContext = d),
      this
    )
  }
  clear() {
    return (
      (this._breadcrumbs = []),
      (this._tags = {}),
      (this._extra = {}),
      (this._user = {}),
      (this._contexts = {}),
      (this._level = void 0),
      (this._transactionName = void 0),
      (this._fingerprint = void 0),
      (this._session = void 0),
      ti(this, void 0),
      (this._attachments = []),
      this.setPropagationContext({
        traceId: Sn(),
        sampleRand: Math.random(),
      }),
      this._notifyScopeListeners(),
      this
    )
  }
  addBreadcrumb(t, n) {
    var i
    const r = typeof n == 'number' ? n : cS
    if (r <= 0) return this
    const o = {
      timestamp: fi(),
      ...t,
      message: t.message ? Ks(t.message, 2048) : t.message,
    }
    return (
      this._breadcrumbs.push(o),
      this._breadcrumbs.length > r &&
        ((this._breadcrumbs = this._breadcrumbs.slice(-r)),
        (i = this._client) == null || i.recordDroppedEvent('buffer_overflow', 'log_item')),
      this._notifyScopeListeners(),
      this
    )
  }
  getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1]
  }
  clearBreadcrumbs() {
    return (this._breadcrumbs = []), this._notifyScopeListeners(), this
  }
  addAttachment(t) {
    return this._attachments.push(t), this
  }
  clearAttachments() {
    return (this._attachments = []), this
  }
  getScopeData() {
    return {
      breadcrumbs: this._breadcrumbs,
      attachments: this._attachments,
      contexts: this._contexts,
      tags: this._tags,
      extra: this._extra,
      user: this._user,
      level: this._level,
      fingerprint: this._fingerprint || [],
      eventProcessors: this._eventProcessors,
      propagationContext: this._propagationContext,
      sdkProcessingMetadata: this._sdkProcessingMetadata,
      transactionName: this._transactionName,
      span: Gs(this),
    }
  }
  setSDKProcessingMetadata(t) {
    return (this._sdkProcessingMetadata = pi(this._sdkProcessingMetadata, t, 2)), this
  }
  setPropagationContext(t) {
    return (this._propagationContext = t), this
  }
  getPropagationContext() {
    return this._propagationContext
  }
  captureException(t, n) {
    const r = (n == null ? void 0 : n.event_id) || dt()
    if (!this._client)
      return C.warn('No client configured on scope - will not capture exception!'), r
    const o = new Error('Sentry syntheticException')
    return (
      this._client.captureException(
        t,
        {
          originalException: t,
          syntheticException: o,
          ...n,
          event_id: r,
        },
        this,
      ),
      r
    )
  }
  captureMessage(t, n, r) {
    const o = (r == null ? void 0 : r.event_id) || dt()
    if (!this._client) return C.warn('No client configured on scope - will not capture message!'), o
    const i = new Error(t)
    return (
      this._client.captureMessage(
        t,
        n,
        {
          originalException: t,
          syntheticException: i,
          ...r,
          event_id: o,
        },
        this,
      ),
      o
    )
  }
  captureEvent(t, n) {
    const r = (n == null ? void 0 : n.event_id) || dt()
    return this._client
      ? (this._client.captureEvent(
          t,
          {
            ...n,
            event_id: r,
          },
          this,
        ),
        r)
      : (C.warn('No client configured on scope - will not capture event!'), r)
  }
  _notifyScopeListeners() {
    this._notifyingListeners ||
      ((this._notifyingListeners = !0),
      this._scopeListeners.forEach((t) => {
        t(this)
      }),
      (this._notifyingListeners = !1))
  }
}
function dS() {
  return Sa('defaultCurrentScope', () => new Jt())
}
function fS() {
  return Sa('defaultIsolationScope', () => new Jt())
}
class pS {
  constructor(t, n) {
    let r
    t ? (r = t) : (r = new Jt())
    let o
    n ? (o = n) : (o = new Jt()),
      (this._stack = [
        {
          scope: r,
        },
      ]),
      (this._isolationScope = o)
  }
  withScope(t) {
    const n = this._pushScope()
    let r
    try {
      r = t(n)
    } catch (o) {
      throw (this._popScope(), o)
    }
    return wa(r)
      ? r.then(
          (o) => (this._popScope(), o),
          (o) => {
            throw (this._popScope(), o)
          },
        )
      : (this._popScope(), r)
  }
  getClient() {
    return this.getStackTop().client
  }
  getScope() {
    return this.getStackTop().scope
  }
  getIsolationScope() {
    return this._isolationScope
  }
  getStackTop() {
    return this._stack[this._stack.length - 1]
  }
  _pushScope() {
    const t = this.getScope().clone()
    return (
      this._stack.push({
        client: this.getClient(),
        scope: t,
      }),
      t
    )
  }
  _popScope() {
    return this._stack.length <= 1 ? !1 : !!this._stack.pop()
  }
}
function Gr() {
  const e = sr(),
    t = _a(e)
  return (t.stack = t.stack || new pS(dS(), fS()))
}
function hS(e) {
  return Gr().withScope(e)
}
function mS(e, t) {
  const n = Gr()
  return n.withScope(() => ((n.getStackTop().scope = e), t(e)))
}
function Of(e) {
  return Gr().withScope(() => e(Gr().getIsolationScope()))
}
function gS() {
  return {
    withIsolationScope: Of,
    withScope: hS,
    withSetScope: mS,
    withSetIsolationScope: (e, t) => Of(t),
    getCurrentScope: () => Gr().getScope(),
    getIsolationScope: () => Gr().getIsolationScope(),
  }
}
function no(e) {
  const t = _a(e)
  return t.acs ? t.acs : gS()
}
function oe() {
  const e = sr()
  return no(e).getCurrentScope()
}
function Cn() {
  const e = sr()
  return no(e).getIsolationScope()
}
function yS() {
  return Sa('globalScope', () => new Jt())
}
function Hc(...e) {
  const t = sr(),
    n = no(t)
  if (e.length === 2) {
    const [r, o] = e
    return r ? n.withSetScope(r, o) : n.withScope(o)
  }
  return n.withScope(e[0])
}
function X() {
  return oe().getClient()
}
function vS(e) {
  const t = e.getPropagationContext(),
    { traceId: n, parentSpanId: r, propagationSpanId: o } = t,
    i = {
      trace_id: n,
      span_id: o || hi(),
    }
  return r && (i.parent_span_id = r), i
}
const Ht = 'sentry.source',
  Vc = 'sentry.sample_rate',
  lg = 'sentry.previous_trace_sample_rate',
  Zn = 'sentry.op',
  Se = 'sentry.origin',
  Ys = 'sentry.idle_span_finish_reason',
  Ta = 'sentry.measurement_unit',
  ka = 'sentry.measurement_value',
  Nf = 'sentry.custom_span_name',
  Wc = 'sentry.profile_id',
  mi = 'sentry.exclusive_time',
  _S = 'sentry.link.type',
  SS = 0,
  cg = 1,
  ye = 2
function ES(e) {
  if (e < 400 && e >= 100)
    return {
      code: cg,
    }
  if (e >= 400 && e < 500)
    switch (e) {
      case 401:
        return {
          code: ye,
          message: 'unauthenticated',
        }
      case 403:
        return {
          code: ye,
          message: 'permission_denied',
        }
      case 404:
        return {
          code: ye,
          message: 'not_found',
        }
      case 409:
        return {
          code: ye,
          message: 'already_exists',
        }
      case 413:
        return {
          code: ye,
          message: 'failed_precondition',
        }
      case 429:
        return {
          code: ye,
          message: 'resource_exhausted',
        }
      case 499:
        return {
          code: ye,
          message: 'cancelled',
        }
      default:
        return {
          code: ye,
          message: 'invalid_argument',
        }
    }
  if (e >= 500 && e < 600)
    switch (e) {
      case 501:
        return {
          code: ye,
          message: 'unimplemented',
        }
      case 503:
        return {
          code: ye,
          message: 'unavailable',
        }
      case 504:
        return {
          code: ye,
          message: 'deadline_exceeded',
        }
      default:
        return {
          code: ye,
          message: 'internal_error',
        }
    }
  return {
    code: ye,
    message: 'unknown_error',
  }
}
function dg(e, t) {
  e.setAttribute('http.response.status_code', t)
  const n = ES(t)
  n.message !== 'unknown_error' && e.setStatus(n)
}
const fg = '_sentryScope',
  pg = '_sentryIsolationScope'
function wS(e, t, n) {
  e && (nt(e, pg, n), nt(e, fg, t))
}
function qs(e) {
  return {
    scope: e[fg],
    isolationScope: e[pg],
  }
}
function ni(e) {
  if (typeof e == 'boolean') return Number(e)
  const t = typeof e == 'string' ? parseFloat(e) : e
  if (!(typeof t != 'number' || isNaN(t) || t < 0 || t > 1)) return t
}
const Kc = 'sentry-',
  TS = /^sentry-/,
  kS = 8192
function hg(e) {
  const t = RS(e)
  if (!t) return
  const n = Object.entries(t).reduce((r, [o, i]) => {
    if (o.match(TS)) {
      const s = o.slice(Kc.length)
      r[s] = i
    }
    return r
  }, {})
  if (Object.keys(n).length > 0) return n
}
function xS(e) {
  if (!e) return
  const t = Object.entries(e).reduce((n, [r, o]) => (o && (n[`${Kc}${r}`] = o), n), {})
  return PS(t)
}
function RS(e) {
  if (!(!e || (!Wt(e) && !Array.isArray(e))))
    return Array.isArray(e)
      ? e.reduce((t, n) => {
          const r = Af(n)
          return (
            Object.entries(r).forEach(([o, i]) => {
              t[o] = i
            }),
            t
          )
        }, {})
      : Af(e)
}
function Af(e) {
  return e
    .split(',')
    .map((t) =>
      t.split('=').map((n) => {
        try {
          return decodeURIComponent(n.trim())
        } catch {
          return
        }
      }),
    )
    .reduce((t, [n, r]) => (n && r && (t[n] = r), t), {})
}
function PS(e) {
  if (Object.keys(e).length !== 0)
    return Object.entries(e).reduce((t, [n, r], o) => {
      const i = `${encodeURIComponent(n)}=${encodeURIComponent(r)}`,
        s = o === 0 ? i : `${t},${i}`
      return s.length > kS
        ? (j &&
            C.warn(
              `Not adding key: ${n} with val: ${r} to baggage header due to exceeding baggage size limits.`,
            ),
          t)
        : s
    }, '')
}
const mg = new RegExp('^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$')
function CS(e) {
  if (!e) return
  const t = e.match(mg)
  if (!t) return
  let n
  return (
    t[3] === '1' ? (n = !0) : t[3] === '0' && (n = !1),
    {
      traceId: t[1],
      parentSampled: n,
      parentSpanId: t[2],
    }
  )
}
function IS(e, t) {
  const n = CS(e),
    r = hg(t)
  if (!(n != null && n.traceId))
    return {
      traceId: Sn(),
      sampleRand: Math.random(),
    }
  const o = LS(n, r)
  r && (r.sample_rand = o.toString())
  const { traceId: i, parentSpanId: s, parentSampled: a } = n
  return {
    traceId: i,
    parentSpanId: s,
    sampled: a,
    dsc: r || {},
    sampleRand: o,
  }
}
function gg(e = Sn(), t = hi(), n) {
  let r = ''
  return n !== void 0 && (r = n ? '-1' : '-0'), `${e}-${t}${r}`
}
function LS(e, t) {
  const n = ni(t == null ? void 0 : t.sample_rand)
  if (n !== void 0) return n
  const r = ni(t == null ? void 0 : t.sample_rate)
  return r && (e == null ? void 0 : e.parentSampled) !== void 0
    ? e.parentSampled
      ? Math.random() * r
      : r + Math.random() * (1 - r)
    : Math.random()
}
const yg = 0,
  Gc = 1
let Df = !1
function OS(e) {
  const { spanId: t, traceId: n } = e.spanContext(),
    { data: r, op: o, parent_span_id: i, status: s, origin: a, links: u } = Z(e)
  return {
    parent_span_id: i,
    span_id: t,
    trace_id: n,
    data: r,
    op: o,
    status: s,
    origin: a,
    links: u,
  }
}
function NS(e) {
  const { spanId: t, traceId: n, isRemote: r } = e.spanContext(),
    o = r ? t : Z(e).parent_span_id,
    i = qs(e).scope,
    s = r ? (i == null ? void 0 : i.getPropagationContext().propagationSpanId) || hi() : t
  return {
    parent_span_id: o,
    span_id: s,
    trace_id: n,
  }
}
function AS(e) {
  const { traceId: t, spanId: n } = e.spanContext(),
    r = ur(e)
  return gg(t, n, r)
}
function vg(e) {
  if (e && e.length > 0)
    return e.map(({ context: { spanId: t, traceId: n, traceFlags: r, ...o }, attributes: i }) => ({
      span_id: t,
      trace_id: n,
      sampled: r === Gc,
      attributes: i,
      ...o,
    }))
}
function Vn(e) {
  return typeof e == 'number'
    ? Mf(e)
    : Array.isArray(e)
      ? e[0] + e[1] / 1e9
      : e instanceof Date
        ? Mf(e.getTime())
        : De()
}
function Mf(e) {
  return e > 9999999999 ? e / 1e3 : e
}
function Z(e) {
  var r
  if (MS(e)) return e.getSpanJSON()
  const { spanId: t, traceId: n } = e.spanContext()
  if (DS(e)) {
    const { attributes: o, startTime: i, name: s, endTime: a, status: u, links: l } = e,
      d =
        'parentSpanId' in e
          ? e.parentSpanId
          : 'parentSpanContext' in e
            ? (r = e.parentSpanContext) == null
              ? void 0
              : r.spanId
            : void 0
    return {
      span_id: t,
      trace_id: n,
      data: o,
      description: s,
      parent_span_id: d,
      start_timestamp: Vn(i),
      timestamp: Vn(a) || void 0,
      status: _g(u),
      op: o[Zn],
      origin: o[Se],
      links: vg(l),
    }
  }
  return {
    span_id: t,
    trace_id: n,
    start_timestamp: 0,
    data: {},
  }
}
function DS(e) {
  const t = e
  return !!t.attributes && !!t.startTime && !!t.name && !!t.endTime && !!t.status
}
function MS(e) {
  return typeof e.getSpanJSON == 'function'
}
function ur(e) {
  const { traceFlags: t } = e.spanContext()
  return t === Gc
}
function _g(e) {
  if (!(!e || e.code === SS)) return e.code === cg ? 'ok' : e.message || 'unknown_error'
}
const Wn = '_sentryChildSpans',
  xl = '_sentryRootSpan'
function Sg(e, t) {
  const n = e[xl] || e
  nt(t, xl, n), e[Wn] ? e[Wn].add(t) : nt(e, Wn, new Set([t]))
}
function bS(e, t) {
  e[Wn] && e[Wn].delete(t)
}
function ls(e) {
  const t = new Set()
  function n(r) {
    if (!t.has(r) && ur(r)) {
      t.add(r)
      const o = r[Wn] ? Array.from(r[Wn]) : []
      for (const i of o) n(i)
    }
  }
  return n(e), Array.from(t)
}
function Me(e) {
  return e[xl] || e
}
function it() {
  const e = sr(),
    t = no(e)
  return t.getActiveSpan ? t.getActiveSpan() : Gs(oe())
}
function Rl() {
  Df ||
    (ar(() => {
      console.warn(
        '[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly.',
      )
    }),
    (Df = !0))
}
const Eg = 50,
  er = '?',
  bf = /\(error: (.*)\)/,
  Ff = /captureMessage|captureException/
function wg(...e) {
  const t = e.sort((n, r) => n[0] - r[0]).map((n) => n[1])
  return (n, r = 0, o = 0) => {
    const i = [],
      s = n.split(`
`)
    for (let a = r; a < s.length; a++) {
      const u = s[a]
      if (u.length > 1024) continue
      const l = bf.test(u) ? u.replace(bf, '$1') : u
      if (!l.match(/\S*Error: /)) {
        for (const d of t) {
          const f = d(l)
          if (f) {
            i.push(f)
            break
          }
        }
        if (i.length >= Eg + o) break
      }
    }
    return $S(i.slice(o))
  }
}
function FS(e) {
  return Array.isArray(e) ? wg(...e) : e
}
function $S(e) {
  if (!e.length) return []
  const t = Array.from(e)
  return (
    /sentryWrapped/.test(Ui(t).function || '') && t.pop(),
    t.reverse(),
    Ff.test(Ui(t).function || '') && (t.pop(), Ff.test(Ui(t).function || '') && t.pop()),
    t.slice(0, Eg).map((n) => ({
      ...n,
      filename: n.filename || Ui(t).filename,
      function: n.function || er,
    }))
  )
}
function Ui(e) {
  return e[e.length - 1] || {}
}
const lu = '<anonymous>'
function Xt(e) {
  try {
    return !e || typeof e != 'function' ? lu : e.name || lu
  } catch {
    return lu
  }
}
function $f(e) {
  const t = e.exception
  if (t) {
    const n = []
    try {
      return (
        t.values.forEach((r) => {
          r.stacktrace.frames && n.push(...r.stacktrace.frames)
        }),
        n
      )
    } catch {
      return
    }
  }
}
const cs = {},
  jf = {}
function In(e, t) {
  ;(cs[e] = cs[e] || []), cs[e].push(t)
}
function Ln(e, t) {
  if (!jf[e]) {
    jf[e] = !0
    try {
      t()
    } catch (n) {
      j && C.error(`Error while instrumenting ${e}`, n)
    }
  }
}
function ft(e, t) {
  const n = e && cs[e]
  if (n)
    for (const r of n)
      try {
        r(t)
      } catch (o) {
        j &&
          C.error(
            `Error while triggering instrumentation handler.
Type: ${e}
Name: ${Xt(r)}
Error:`,
            o,
          )
      }
}
let cu = null
function Tg(e) {
  const t = 'error'
  In(t, e), Ln(t, jS)
}
function jS() {
  ;(cu = q.onerror),
    (q.onerror = function (e, t, n, r, o) {
      return (
        ft('error', {
          column: r,
          error: o,
          line: n,
          msg: e,
          url: t,
        }),
        cu ? cu.apply(this, arguments) : !1
      )
    }),
    (q.onerror.__SENTRY_INSTRUMENTED__ = !0)
}
let du = null
function kg(e) {
  const t = 'unhandledrejection'
  In(t, e), Ln(t, zS)
}
function zS() {
  ;(du = q.onunhandledrejection),
    (q.onunhandledrejection = function (e) {
      return ft('unhandledrejection', e), du ? du.apply(this, arguments) : !0
    }),
    (q.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0)
}
let zf = !1
function US() {
  zf || ((zf = !0), Tg(Pl), kg(Pl))
}
function Pl() {
  const e = it(),
    t = e && Me(e)
  if (t) {
    const n = 'internal_error'
    j && C.log(`[Tracing] Root span: ${n} -> Global error occurred`),
      t.setStatus({
        code: ye,
        message: n,
      })
  }
}
Pl.tag = 'sentry_tracingErrorCallback'
function En(e) {
  var n
  if (typeof __SENTRY_TRACING__ == 'boolean' && !__SENTRY_TRACING__) return !1
  const t = e || ((n = X()) == null ? void 0 : n.getOptions())
  return !!t && (t.tracesSampleRate != null || !!t.tracesSampler)
}
const Yc = 'production',
  BS = /^o(\d+)\./,
  HS = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/
function VS(e) {
  return e === 'http' || e === 'https'
}
function gi(e, t = !1) {
  const { host: n, path: r, pass: o, port: i, projectId: s, protocol: a, publicKey: u } = e
  return `${a}://${u}${t && o ? `:${o}` : ''}@${n}${i ? `:${i}` : ''}/${r && `${r}/`}${s}`
}
function WS(e) {
  const t = HS.exec(e)
  if (!t) {
    ar(() => {
      console.error(`Invalid Sentry Dsn: ${e}`)
    })
    return
  }
  const [n, r, o = '', i = '', s = '', a = ''] = t.slice(1)
  let u = '',
    l = a
  const d = l.split('/')
  if ((d.length > 1 && ((u = d.slice(0, -1).join('/')), (l = d.pop())), l)) {
    const f = l.match(/^\d+/)
    f && (l = f[0])
  }
  return xg({
    host: i,
    pass: o,
    path: u,
    projectId: l,
    port: s,
    protocol: n,
    publicKey: r,
  })
}
function xg(e) {
  return {
    protocol: e.protocol,
    publicKey: e.publicKey || '',
    pass: e.pass || '',
    host: e.host,
    port: e.port || '',
    path: e.path || '',
    projectId: e.projectId,
  }
}
function KS(e) {
  if (!j) return !0
  const { port: t, projectId: n, protocol: r } = e
  return ['protocol', 'publicKey', 'host', 'projectId'].find((s) =>
    e[s] ? !1 : (C.error(`Invalid Sentry Dsn: ${s} missing`), !0),
  )
    ? !1
    : n.match(/^\d+$/)
      ? VS(r)
        ? t && isNaN(parseInt(t, 10))
          ? (C.error(`Invalid Sentry Dsn: Invalid port ${t}`), !1)
          : !0
        : (C.error(`Invalid Sentry Dsn: Invalid protocol ${r}`), !1)
      : (C.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1)
}
function GS(e) {
  const t = e.match(BS)
  return t == null ? void 0 : t[1]
}
function YS(e) {
  const t = typeof e == 'string' ? WS(e) : xg(e)
  if (!(!t || !KS(t))) return t
}
const Rg = '_frozenDsc'
function ds(e, t) {
  nt(e, Rg, t)
}
function Pg(e, t) {
  const n = t.getOptions(),
    { publicKey: r, host: o } = t.getDsn() || {}
  let i
  n.orgId ? (i = String(n.orgId)) : o && (i = GS(o))
  const s = {
    environment: n.environment || Yc,
    release: n.release,
    public_key: r,
    trace_id: e,
    org_id: i,
  }
  return t.emit('createDsc', s), s
}
function Cg(e, t) {
  const n = t.getPropagationContext()
  return n.dsc || Pg(n.traceId, e)
}
function wn(e) {
  var g
  const t = X()
  if (!t) return {}
  const n = Me(e),
    r = Z(n),
    o = r.data,
    i = n.spanContext().traceState,
    s = (i == null ? void 0 : i.get('sentry.sample_rate')) ?? o[Vc] ?? o[lg]
  function a(v) {
    return (typeof s == 'number' || typeof s == 'string') && (v.sample_rate = `${s}`), v
  }
  const u = n[Rg]
  if (u) return a(u)
  const l = i == null ? void 0 : i.get('sentry.dsc'),
    d = l && hg(l)
  if (d) return a(d)
  const f = Pg(e.spanContext().traceId, t),
    c = o[Ht],
    p = r.description
  return (
    c !== 'url' && p && (f.transaction = p),
    En() &&
      ((f.sampled = String(ur(n))),
      (f.sample_rand =
        (i == null ? void 0 : i.get('sentry.sample_rand')) ??
        ((g = qs(n).scope) == null ? void 0 : g.getPropagationContext().sampleRand.toString()))),
    a(f),
    t.emit('createDsc', f, n),
    f
  )
}
class tr {
  constructor(t = {}) {
    ;(this._traceId = t.traceId || Sn()), (this._spanId = t.spanId || hi())
  }
  spanContext() {
    return {
      spanId: this._spanId,
      traceId: this._traceId,
      traceFlags: yg,
    }
  }
  end(t) {}
  setAttribute(t, n) {
    return this
  }
  setAttributes(t) {
    return this
  }
  setStatus(t) {
    return this
  }
  updateName(t) {
    return this
  }
  isRecording() {
    return !1
  }
  addEvent(t, n, r) {
    return this
  }
  addLink(t) {
    return this
  }
  addLinks(t) {
    return this
  }
  recordException(t, n) {}
}
function qS(e) {
  if (!j) return
  const { description: t = '< unknown name >', op: n = '< unknown op >', parent_span_id: r } = Z(e),
    { spanId: o } = e.spanContext(),
    i = ur(e),
    s = Me(e),
    a = s === e,
    u = `[Tracing] Starting ${i ? 'sampled' : 'unsampled'} ${a ? 'root ' : ''}span`,
    l = [`op: ${n}`, `name: ${t}`, `ID: ${o}`]
  if ((r && l.push(`parent ID: ${r}`), !a)) {
    const { op: d, description: f } = Z(s)
    l.push(`root ID: ${s.spanContext().spanId}`),
      d && l.push(`root op: ${d}`),
      f && l.push(`root description: ${f}`)
  }
  C.log(`${u}
  ${l.join(`
  `)}`)
}
function QS(e) {
  if (!j) return
  const { description: t = '< unknown name >', op: n = '< unknown op >' } = Z(e),
    { spanId: r } = e.spanContext(),
    i = Me(e) === e,
    s = `[Tracing] Finishing "${n}" ${i ? 'root ' : ''}span "${t}" with ID ${r}`
  C.log(s)
}
function JS(e, t, n) {
  if (!En(e)) return [!1]
  let r, o
  typeof e.tracesSampler == 'function'
    ? ((o = e.tracesSampler({
        ...t,
        inheritOrSampleWith: (a) =>
          typeof t.parentSampleRate == 'number'
            ? t.parentSampleRate
            : typeof t.parentSampled == 'boolean'
              ? Number(t.parentSampled)
              : a,
      })),
      (r = !0))
    : t.parentSampled !== void 0
      ? (o = t.parentSampled)
      : typeof e.tracesSampleRate < 'u' && ((o = e.tracesSampleRate), (r = !0))
  const i = ni(o)
  if (i === void 0)
    return (
      j &&
        C.warn(
          `[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(o)} of type ${JSON.stringify(typeof o)}.`,
        ),
      [!1]
    )
  if (!i)
    return (
      j &&
        C.log(
          `[Tracing] Discarding transaction because ${typeof e.tracesSampler == 'function' ? 'tracesSampler returned 0 or false' : 'a negative sampling decision was inherited or tracesSampleRate is set to 0'}`,
        ),
      [!1, i, r]
    )
  const s = n < i
  return (
    s ||
      (j &&
        C.log(
          `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(o)})`,
        )),
    [s, i, r]
  )
}
function Ft(e, t = 100, n = 1 / 0) {
  try {
    return Cl('', e, t, n)
  } catch (r) {
    return {
      ERROR: `**non-serializable** (${r})`,
    }
  }
}
function Ig(e, t = 3, n = 100 * 1024) {
  const r = Ft(e, t)
  return t1(r) > n ? Ig(e, t - 1, n) : r
}
function Cl(e, t, n = 1 / 0, r = 1 / 0, o = n1()) {
  const [i, s] = o
  if (
    t == null ||
    ['boolean', 'string'].includes(typeof t) ||
    (typeof t == 'number' && Number.isFinite(t))
  )
    return t
  const a = XS(e, t)
  if (!a.startsWith('[object ')) return a
  if (t.__sentry_skip_normalization__) return t
  const u =
    typeof t.__sentry_override_normalization_depth__ == 'number'
      ? t.__sentry_override_normalization_depth__
      : n
  if (u === 0) return a.replace('object ', '')
  if (i(t)) return '[Circular ~]'
  const l = t
  if (l && typeof l.toJSON == 'function')
    try {
      const p = l.toJSON()
      return Cl('', p, u - 1, r, o)
    } catch {}
  const d = Array.isArray(t) ? [] : {}
  let f = 0
  const c = sg(t)
  for (const p in c) {
    if (!Object.prototype.hasOwnProperty.call(c, p)) continue
    if (f >= r) {
      d[p] = '[MaxProperties ~]'
      break
    }
    const g = c[p]
    ;(d[p] = Cl(p, g, u - 1, r, o)), f++
  }
  return s(t), d
}
function XS(e, t) {
  try {
    if (e === 'domain' && t && typeof t == 'object' && t._events) return '[Domain]'
    if (e === 'domainEmitter') return '[DomainEmitter]'
    if (typeof global < 'u' && t === global) return '[Global]'
    if (typeof window < 'u' && t === window) return '[Window]'
    if (typeof document < 'u' && t === document) return '[Document]'
    if (ng(t)) return '[VueViewModel]'
    if (Q0(t)) return '[SyntheticEvent]'
    if (typeof t == 'number' && !Number.isFinite(t)) return `[${t}]`
    if (typeof t == 'function') return `[Function: ${Xt(t)}]`
    if (typeof t == 'symbol') return `[${String(t)}]`
    if (typeof t == 'bigint') return `[BigInt: ${String(t)}]`
    const n = ZS(t)
    return /^HTML(\w*)Element$/.test(n) ? `[HTMLElement: ${n}]` : `[object ${n}]`
  } catch (n) {
    return `**non-serializable** (${n})`
  }
}
function ZS(e) {
  const t = Object.getPrototypeOf(e)
  return t != null && t.constructor ? t.constructor.name : 'null prototype'
}
function e1(e) {
  return ~-encodeURI(e).split(/%..|./).length
}
function t1(e) {
  return e1(JSON.stringify(e))
}
function n1() {
  const e = new WeakSet()
  function t(r) {
    return e.has(r) ? !0 : (e.add(r), !1)
  }
  function n(r) {
    e.delete(r)
  }
  return [t, n]
}
function ro(e, t = []) {
  return [e, t]
}
function r1(e, t) {
  const [n, r] = e
  return [n, [...r, t]]
}
function Uf(e, t) {
  const n = e[1]
  for (const r of n) {
    const o = r[0].type
    if (t(r, o)) return !0
  }
  return !1
}
function Il(e) {
  const t = _a(q)
  return t.encodePolyfill ? t.encodePolyfill(e) : new TextEncoder().encode(e)
}
function o1(e) {
  const [t, n] = e
  let r = JSON.stringify(t)
  function o(i) {
    typeof r == 'string'
      ? (r = typeof i == 'string' ? r + i : [Il(r), i])
      : r.push(typeof i == 'string' ? Il(i) : i)
  }
  for (const i of n) {
    const [s, a] = i
    if (
      (o(`
${JSON.stringify(s)}
`),
      typeof a == 'string' || a instanceof Uint8Array)
    )
      o(a)
    else {
      let u
      try {
        u = JSON.stringify(a)
      } catch {
        u = JSON.stringify(Ft(a))
      }
      o(u)
    }
  }
  return typeof r == 'string' ? r : i1(r)
}
function i1(e) {
  const t = e.reduce((o, i) => o + i.length, 0),
    n = new Uint8Array(t)
  let r = 0
  for (const o of e) n.set(o, r), (r += o.length)
  return n
}
function s1(e) {
  return [
    {
      type: 'span',
    },
    e,
  ]
}
function a1(e) {
  const t = typeof e.data == 'string' ? Il(e.data) : e.data
  return [
    {
      type: 'attachment',
      length: t.length,
      filename: e.filename,
      content_type: e.contentType,
      attachment_type: e.attachmentType,
    },
    t,
  ]
}
const u1 = {
  session: 'session',
  sessions: 'session',
  attachment: 'attachment',
  transaction: 'transaction',
  event: 'error',
  client_report: 'internal',
  user_report: 'default',
  profile: 'profile',
  profile_chunk: 'profile',
  replay_event: 'replay',
  replay_recording: 'replay',
  check_in: 'monitor',
  feedback: 'feedback',
  span: 'span',
  raw_security: 'security',
  log: 'log_item',
}
function Bf(e) {
  return u1[e]
}
function Lg(e) {
  if (!(e != null && e.sdk)) return
  const { name: t, version: n } = e.sdk
  return {
    name: t,
    version: n,
  }
}
function l1(e, t, n, r) {
  var i
  const o = (i = e.sdkProcessingMetadata) == null ? void 0 : i.dynamicSamplingContext
  return {
    event_id: e.event_id,
    sent_at: new Date().toISOString(),
    ...(t && {
      sdk: t,
    }),
    ...(!!n &&
      r && {
        dsn: gi(r),
      }),
    ...(o && {
      trace: o,
    }),
  }
}
function c1(e, t) {
  return (
    t &&
      ((e.sdk = e.sdk || {}),
      (e.sdk.name = e.sdk.name || t.name),
      (e.sdk.version = e.sdk.version || t.version),
      (e.sdk.integrations = [...(e.sdk.integrations || []), ...(t.integrations || [])]),
      (e.sdk.packages = [...(e.sdk.packages || []), ...(t.packages || [])])),
    e
  )
}
function d1(e, t, n, r) {
  const o = Lg(n),
    i = {
      sent_at: new Date().toISOString(),
      ...(o && {
        sdk: o,
      }),
      ...(!!r &&
        t && {
          dsn: gi(t),
        }),
    },
    s =
      'aggregates' in e
        ? [
            {
              type: 'sessions',
            },
            e,
          ]
        : [
            {
              type: 'session',
            },
            e.toJSON(),
          ]
  return ro(i, [s])
}
function f1(e, t, n, r) {
  const o = Lg(n),
    i = e.type && e.type !== 'replay_event' ? e.type : 'event'
  c1(e, n == null ? void 0 : n.sdk)
  const s = l1(e, o, r, t)
  return (
    delete e.sdkProcessingMetadata,
    ro(s, [
      [
        {
          type: i,
        },
        e,
      ],
    ])
  )
}
function p1(e, t) {
  function n(d) {
    return !!d.trace_id && !!d.public_key
  }
  const r = wn(e[0]),
    o = t == null ? void 0 : t.getDsn(),
    i = t == null ? void 0 : t.getOptions().tunnel,
    s = {
      sent_at: new Date().toISOString(),
      ...(n(r) && {
        trace: r,
      }),
      ...(!!i &&
        o && {
          dsn: gi(o),
        }),
    },
    a = t == null ? void 0 : t.getOptions().beforeSendSpan,
    u = a
      ? (d) => {
          const f = Z(d),
            c = a(f)
          return c || (Rl(), f)
        }
      : Z,
    l = []
  for (const d of e) {
    const f = u(d)
    f && l.push(s1(f))
  }
  return ro(s, l)
}
function h1(e, t, n, r = it()) {
  const o = r && Me(r)
  o &&
    (j && C.log(`[Measurement] Setting measurement on root span: ${e} = ${t} ${n}`),
    o.addEvent(e, {
      [ka]: t,
      [Ta]: n,
    }))
}
function Hf(e) {
  if (!e || e.length === 0) return
  const t = {}
  return (
    e.forEach((n) => {
      const r = n.attributes || {},
        o = r[Ta],
        i = r[ka]
      typeof o == 'string' &&
        typeof i == 'number' &&
        (t[n.name] = {
          value: i,
          unit: o,
        })
    }),
    t
  )
}
const Vf = 1e3
class qc {
  constructor(t = {}) {
    ;(this._traceId = t.traceId || Sn()),
      (this._spanId = t.spanId || hi()),
      (this._startTime = t.startTimestamp || De()),
      (this._links = t.links),
      (this._attributes = {}),
      this.setAttributes({
        [Se]: 'manual',
        [Zn]: t.op,
        ...t.attributes,
      }),
      (this._name = t.name),
      t.parentSpanId && (this._parentSpanId = t.parentSpanId),
      'sampled' in t && (this._sampled = t.sampled),
      t.endTimestamp && (this._endTime = t.endTimestamp),
      (this._events = []),
      (this._isStandaloneSpan = t.isStandalone),
      this._endTime && this._onSpanEnded()
  }
  addLink(t) {
    return this._links ? this._links.push(t) : (this._links = [t]), this
  }
  addLinks(t) {
    return this._links ? this._links.push(...t) : (this._links = t), this
  }
  recordException(t, n) {}
  spanContext() {
    const { _spanId: t, _traceId: n, _sampled: r } = this
    return {
      spanId: t,
      traceId: n,
      traceFlags: r ? Gc : yg,
    }
  }
  setAttribute(t, n) {
    return n === void 0 ? delete this._attributes[t] : (this._attributes[t] = n), this
  }
  setAttributes(t) {
    return Object.keys(t).forEach((n) => this.setAttribute(n, t[n])), this
  }
  updateStartTime(t) {
    this._startTime = Vn(t)
  }
  setStatus(t) {
    return (this._status = t), this
  }
  updateName(t) {
    return (this._name = t), this.setAttribute(Ht, 'custom'), this
  }
  end(t) {
    this._endTime || ((this._endTime = Vn(t)), QS(this), this._onSpanEnded())
  }
  getSpanJSON() {
    return {
      data: this._attributes,
      description: this._name,
      op: this._attributes[Zn],
      parent_span_id: this._parentSpanId,
      span_id: this._spanId,
      start_timestamp: this._startTime,
      status: _g(this._status),
      timestamp: this._endTime,
      trace_id: this._traceId,
      origin: this._attributes[Se],
      profile_id: this._attributes[Wc],
      exclusive_time: this._attributes[mi],
      measurements: Hf(this._events),
      is_segment: (this._isStandaloneSpan && Me(this) === this) || void 0,
      segment_id: this._isStandaloneSpan ? Me(this).spanContext().spanId : void 0,
      links: vg(this._links),
    }
  }
  isRecording() {
    return !this._endTime && !!this._sampled
  }
  addEvent(t, n, r) {
    j && C.log('[Tracing] Adding an event to span:', t)
    const o = Wf(n) ? n : r || De(),
      i = Wf(n) ? {} : n || {},
      s = {
        name: t,
        time: Vn(o),
        attributes: i,
      }
    return this._events.push(s), this
  }
  isStandaloneSpan() {
    return !!this._isStandaloneSpan
  }
  _onSpanEnded() {
    const t = X()
    if ((t && t.emit('spanEnd', this), !(this._isStandaloneSpan || this === Me(this)))) return
    if (this._isStandaloneSpan) {
      this._sampled
        ? g1(p1([this], t))
        : (j &&
            C.log(
              '[Tracing] Discarding standalone span because its trace was not chosen to be sampled.',
            ),
          t && t.recordDroppedEvent('sample_rate', 'span'))
      return
    }
    const r = this._convertSpanToTransaction()
    r && (qs(this).scope || oe()).captureEvent(r)
  }
  _convertSpanToTransaction() {
    var d
    if (!Kf(Z(this))) return
    this._name ||
      (j && C.warn('Transaction has no name, falling back to `<unlabeled transaction>`.'),
      (this._name = '<unlabeled transaction>'))
    const { scope: t, isolationScope: n } = qs(this),
      r =
        (d = t == null ? void 0 : t.getScopeData().sdkProcessingMetadata) == null
          ? void 0
          : d.normalizedRequest
    if (this._sampled !== !0) return
    const i = ls(this)
        .filter((f) => f !== this && !m1(f))
        .map((f) => Z(f))
        .filter(Kf),
      s = this._attributes[Ht]
    delete this._attributes[Nf],
      i.forEach((f) => {
        delete f.data[Nf]
      })
    const a = {
        contexts: {
          trace: OS(this),
        },
        spans:
          i.length > Vf ? i.sort((f, c) => f.start_timestamp - c.start_timestamp).slice(0, Vf) : i,
        start_timestamp: this._startTime,
        timestamp: this._endTime,
        transaction: this._name,
        type: 'transaction',
        sdkProcessingMetadata: {
          capturedSpanScope: t,
          capturedSpanIsolationScope: n,
          dynamicSamplingContext: wn(this),
        },
        request: r,
        ...(s && {
          transaction_info: {
            source: s,
          },
        }),
      },
      u = Hf(this._events)
    return (
      u &&
        Object.keys(u).length &&
        (j &&
          C.log(
            '[Measurements] Adding measurements to transaction event',
            JSON.stringify(u, void 0, 2),
          ),
        (a.measurements = u)),
      a
    )
  }
}
function Wf(e) {
  return (e && typeof e == 'number') || e instanceof Date || Array.isArray(e)
}
function Kf(e) {
  return !!e.start_timestamp && !!e.timestamp && !!e.span_id && !!e.trace_id
}
function m1(e) {
  return e instanceof qc && e.isStandaloneSpan()
}
function g1(e) {
  const t = X()
  if (!t) return
  const n = e[1]
  if (!n || n.length === 0) {
    t.recordDroppedEvent('before_send', 'span')
    return
  }
  t.sendEnvelope(e)
}
const Og = '__SENTRY_SUPPRESS_TRACING__'
function yi(e) {
  const t = Ag()
  if (t.startInactiveSpan) return t.startInactiveSpan(e)
  const n = v1(e),
    { forceTransaction: r, parentSpan: o } = e
  return (e.scope ? (s) => Hc(e.scope, s) : o !== void 0 ? (s) => Ng(o, s) : (s) => s())(() => {
    const s = oe(),
      a = S1(s)
    return e.onlyIfParent && !a
      ? new tr()
      : y1({
          parentSpan: a,
          spanArguments: n,
          forceTransaction: r,
          scope: s,
        })
  })
}
function Ng(e, t) {
  const n = Ag()
  return n.withActiveSpan ? n.withActiveSpan(e, t) : Hc((r) => (ti(r, e || void 0), t(r)))
}
function y1({ parentSpan: e, spanArguments: t, forceTransaction: n, scope: r }) {
  if (!En()) {
    const s = new tr()
    if (n || !e) {
      const a = {
        sampled: 'false',
        sample_rate: '0',
        transaction: t.name,
        ...wn(s),
      }
      ds(s, a)
    }
    return s
  }
  const o = Cn()
  let i
  if (e && !n) (i = _1(e, r, t)), Sg(e, i)
  else if (e) {
    const s = wn(e),
      { traceId: a, spanId: u } = e.spanContext(),
      l = ur(e)
    ;(i = Gf(
      {
        traceId: a,
        parentSpanId: u,
        ...t,
      },
      r,
      l,
    )),
      ds(i, s)
  } else {
    const {
      traceId: s,
      dsc: a,
      parentSpanId: u,
      sampled: l,
    } = {
      ...o.getPropagationContext(),
      ...r.getPropagationContext(),
    }
    ;(i = Gf(
      {
        traceId: s,
        parentSpanId: u,
        ...t,
      },
      r,
      l,
    )),
      a && ds(i, a)
  }
  return qS(i), wS(i, r, o), i
}
function v1(e) {
  const n = {
    isStandalone: (e.experimental || {}).standalone,
    ...e,
  }
  if (e.startTime) {
    const r = {
      ...n,
    }
    return (r.startTimestamp = Vn(e.startTime)), delete r.startTime, r
  }
  return n
}
function Ag() {
  const e = sr()
  return no(e)
}
function Gf(e, t, n) {
  var g
  const r = X(),
    o = (r == null ? void 0 : r.getOptions()) || {},
    { name: i = '' } = e,
    s = {
      spanAttributes: {
        ...e.attributes,
      },
      spanName: i,
      parentSampled: n,
    }
  r == null ||
    r.emit('beforeSampling', s, {
      decision: !1,
    })
  const a = s.parentSampled ?? n,
    u = s.spanAttributes,
    l = t.getPropagationContext(),
    [d, f, c] = t.getScopeData().sdkProcessingMetadata[Og]
      ? [!1]
      : JS(
          o,
          {
            name: i,
            parentSampled: a,
            attributes: u,
            parentSampleRate: ni((g = l.dsc) == null ? void 0 : g.sample_rate),
          },
          l.sampleRand,
        ),
    p = new qc({
      ...e,
      attributes: {
        [Ht]: 'custom',
        [Vc]: f !== void 0 && c ? f : void 0,
        ...u,
      },
      sampled: d,
    })
  return (
    !d &&
      r &&
      (j && C.log('[Tracing] Discarding root span because its trace was not chosen to be sampled.'),
      r.recordDroppedEvent('sample_rate', 'transaction')),
    r && r.emit('spanStart', p),
    p
  )
}
function _1(e, t, n) {
  const { spanId: r, traceId: o } = e.spanContext(),
    i = t.getScopeData().sdkProcessingMetadata[Og] ? !1 : ur(e),
    s = i
      ? new qc({
          ...n,
          parentSpanId: r,
          traceId: o,
          sampled: i,
        })
      : new tr({
          traceId: o,
        })
  Sg(e, s)
  const a = X()
  return a && (a.emit('spanStart', s), n.endTimestamp && a.emit('spanEnd', s)), s
}
function S1(e) {
  const t = Gs(e)
  if (!t) return
  const n = X()
  return (n ? n.getOptions() : {}).parentSpanIsAlwaysRootSpan ? Me(t) : t
}
const fs = {
    idleTimeout: 1e3,
    finalTimeout: 3e4,
    childSpanTimeout: 15e3,
  },
  E1 = 'heartbeatFailed',
  w1 = 'idleTimeout',
  T1 = 'finalTimeout',
  k1 = 'externalFinish'
function Dg(e, t = {}) {
  const n = new Map()
  let r = !1,
    o,
    i = k1,
    s = !t.disableAutoFinish
  const a = [],
    {
      idleTimeout: u = fs.idleTimeout,
      finalTimeout: l = fs.finalTimeout,
      childSpanTimeout: d = fs.childSpanTimeout,
      beforeSpanEnd: f,
    } = t,
    c = X()
  if (!c || !En()) {
    const w = new tr(),
      T = {
        sample_rate: '0',
        sampled: 'false',
        ...wn(w),
      }
    return ds(w, T), w
  }
  const p = oe(),
    g = it(),
    v = x1(e)
  v.end = new Proxy(v.end, {
    apply(w, T, R) {
      if ((f && f(v), T instanceof tr)) return
      const [P, ...I] = R,
        b = P || De(),
        O = Vn(b),
        H = ls(v).filter((E) => E !== v)
      if (!H.length) return k(O), Reflect.apply(w, T, [O, ...I])
      const V = H.map((E) => Z(E).timestamp).filter((E) => !!E),
        z = V.length ? Math.max(...V) : void 0,
        B = Z(v).start_timestamp,
        Q = Math.min(B ? B + l / 1e3 : 1 / 0, Math.max(B || -1 / 0, Math.min(O, z || 1 / 0)))
      return k(Q), Reflect.apply(w, T, [Q, ...I])
    },
  })
  function S() {
    o && (clearTimeout(o), (o = void 0))
  }
  function m(w) {
    S(),
      (o = setTimeout(() => {
        !r && n.size === 0 && s && ((i = w1), v.end(w))
      }, u))
  }
  function h(w) {
    o = setTimeout(() => {
      !r && s && ((i = E1), v.end(w))
    }, d)
  }
  function y(w) {
    S(), n.set(w, !0)
    const T = De()
    h(T + d / 1e3)
  }
  function _(w) {
    if ((n.has(w) && n.delete(w), n.size === 0)) {
      const T = De()
      m(T + u / 1e3)
    }
  }
  function k(w) {
    ;(r = !0), n.clear(), a.forEach((O) => O()), ti(p, g)
    const T = Z(v),
      { start_timestamp: R } = T
    if (!R) return
    T.data[Ys] || v.setAttribute(Ys, i), C.log(`[Tracing] Idle span "${T.op}" finished`)
    const I = ls(v).filter((O) => O !== v)
    let b = 0
    I.forEach((O) => {
      O.isRecording() &&
        (O.setStatus({
          code: ye,
          message: 'cancelled',
        }),
        O.end(w),
        j &&
          C.log('[Tracing] Cancelling span since span ended early', JSON.stringify(O, void 0, 2)))
      const H = Z(O),
        { timestamp: V = 0, start_timestamp: z = 0 } = H,
        B = z <= w,
        Q = (l + u) / 1e3,
        E = V - z <= Q
      if (j) {
        const A = JSON.stringify(O, void 0, 2)
        B
          ? E ||
            C.log('[Tracing] Discarding span since it finished after idle span final timeout', A)
          : C.log('[Tracing] Discarding span since it happened after idle span was finished', A)
      }
      ;(!E || !B) && (bS(v, O), b++)
    }),
      b > 0 && v.setAttribute('sentry.idle_span_discarded_spans', b)
  }
  return (
    a.push(
      c.on('spanStart', (w) => {
        if (r || w === v || Z(w).timestamp) return
        ls(v).includes(w) && y(w.spanContext().spanId)
      }),
    ),
    a.push(
      c.on('spanEnd', (w) => {
        r || _(w.spanContext().spanId)
      }),
    ),
    a.push(
      c.on('idleSpanEnableAutoFinish', (w) => {
        w === v && ((s = !0), m(), n.size && h())
      }),
    ),
    t.disableAutoFinish || m(),
    setTimeout(() => {
      r ||
        (v.setStatus({
          code: ye,
          message: 'deadline_exceeded',
        }),
        (i = T1),
        v.end())
    }, l),
    v
  )
}
function x1(e) {
  const t = yi(e)
  return ti(oe(), t), j && C.log('[Tracing] Started span is an idle span'), t
}
var $t
;(function (e) {
  e[(e.PENDING = 0)] = 'PENDING'
  const n = 1
  e[(e.RESOLVED = n)] = 'RESOLVED'
  const r = 2
  e[(e.REJECTED = r)] = 'REJECTED'
})($t || ($t = {}))
function nr(e) {
  return new Tn((t) => {
    t(e)
  })
}
function Qs(e) {
  return new Tn((t, n) => {
    n(e)
  })
}
class Tn {
  constructor(t) {
    ;(this._state = $t.PENDING), (this._handlers = []), this._runExecutor(t)
  }
  then(t, n) {
    return new Tn((r, o) => {
      this._handlers.push([
        !1,
        (i) => {
          if (!t) r(i)
          else
            try {
              r(t(i))
            } catch (s) {
              o(s)
            }
        },
        (i) => {
          if (!n) o(i)
          else
            try {
              r(n(i))
            } catch (s) {
              o(s)
            }
        },
      ]),
        this._executeHandlers()
    })
  }
  catch(t) {
    return this.then((n) => n, t)
  }
  finally(t) {
    return new Tn((n, r) => {
      let o, i
      return this.then(
        (s) => {
          ;(i = !1), (o = s), t && t()
        },
        (s) => {
          ;(i = !0), (o = s), t && t()
        },
      ).then(() => {
        if (i) {
          r(o)
          return
        }
        n(o)
      })
    })
  }
  _executeHandlers() {
    if (this._state === $t.PENDING) return
    const t = this._handlers.slice()
    ;(this._handlers = []),
      t.forEach((n) => {
        n[0] ||
          (this._state === $t.RESOLVED && n[1](this._value),
          this._state === $t.REJECTED && n[2](this._value),
          (n[0] = !0))
      })
  }
  _runExecutor(t) {
    const n = (i, s) => {
        if (this._state === $t.PENDING) {
          if (wa(s)) {
            s.then(r, o)
            return
          }
          ;(this._state = i), (this._value = s), this._executeHandlers()
        }
      },
      r = (i) => {
        n($t.RESOLVED, i)
      },
      o = (i) => {
        n($t.REJECTED, i)
      }
    try {
      t(r, o)
    } catch (i) {
      o(i)
    }
  }
}
function Ll(e, t, n, r = 0) {
  return new Tn((o, i) => {
    const s = e[r]
    if (t === null || typeof s != 'function') o(t)
    else {
      const a = s(
        {
          ...t,
        },
        n,
      )
      j && s.id && a === null && C.log(`Event processor "${s.id}" dropped event`),
        wa(a)
          ? a.then((u) => Ll(e, u, n, r + 1).then(o)).then(null, i)
          : Ll(e, a, n, r + 1)
              .then(o)
              .then(null, i)
    }
  })
}
let Bi, Yf, Hi
function R1(e) {
  const t = q._sentryDebugIds
  if (!t) return {}
  const n = Object.keys(t)
  return (
    (Hi && n.length === Yf) ||
      ((Yf = n.length),
      (Hi = n.reduce((r, o) => {
        Bi || (Bi = {})
        const i = Bi[o]
        if (i) r[i[0]] = i[1]
        else {
          const s = e(o)
          for (let a = s.length - 1; a >= 0; a--) {
            const u = s[a],
              l = u == null ? void 0 : u.filename,
              d = t[o]
            if (l && d) {
              ;(r[l] = d), (Bi[o] = [l, d])
              break
            }
          }
        }
        return r
      }, {}))),
    Hi
  )
}
function P1(e, t) {
  const { fingerprint: n, span: r, breadcrumbs: o, sdkProcessingMetadata: i } = t
  C1(e, t), r && O1(e, r), N1(e, n), I1(e, o), L1(e, i)
}
function qf(e, t) {
  const {
    extra: n,
    tags: r,
    user: o,
    contexts: i,
    level: s,
    sdkProcessingMetadata: a,
    breadcrumbs: u,
    fingerprint: l,
    eventProcessors: d,
    attachments: f,
    propagationContext: c,
    transactionName: p,
    span: g,
  } = t
  Vi(e, 'extra', n),
    Vi(e, 'tags', r),
    Vi(e, 'user', o),
    Vi(e, 'contexts', i),
    (e.sdkProcessingMetadata = pi(e.sdkProcessingMetadata, a, 2)),
    s && (e.level = s),
    p && (e.transactionName = p),
    g && (e.span = g),
    u.length && (e.breadcrumbs = [...e.breadcrumbs, ...u]),
    l.length && (e.fingerprint = [...e.fingerprint, ...l]),
    d.length && (e.eventProcessors = [...e.eventProcessors, ...d]),
    f.length && (e.attachments = [...e.attachments, ...f]),
    (e.propagationContext = {
      ...e.propagationContext,
      ...c,
    })
}
function Vi(e, t, n) {
  e[t] = pi(e[t], n, 1)
}
function C1(e, t) {
  const { extra: n, tags: r, user: o, contexts: i, level: s, transactionName: a } = t
  Object.keys(n).length &&
    (e.extra = {
      ...n,
      ...e.extra,
    }),
    Object.keys(r).length &&
      (e.tags = {
        ...r,
        ...e.tags,
      }),
    Object.keys(o).length &&
      (e.user = {
        ...o,
        ...e.user,
      }),
    Object.keys(i).length &&
      (e.contexts = {
        ...i,
        ...e.contexts,
      }),
    s && (e.level = s),
    a && e.type !== 'transaction' && (e.transaction = a)
}
function I1(e, t) {
  const n = [...(e.breadcrumbs || []), ...t]
  e.breadcrumbs = n.length ? n : void 0
}
function L1(e, t) {
  e.sdkProcessingMetadata = {
    ...e.sdkProcessingMetadata,
    ...t,
  }
}
function O1(e, t) {
  ;(e.contexts = {
    trace: NS(t),
    ...e.contexts,
  }),
    (e.sdkProcessingMetadata = {
      dynamicSamplingContext: wn(t),
      ...e.sdkProcessingMetadata,
    })
  const n = Me(t),
    r = Z(n).description
  r && !e.transaction && e.type === 'transaction' && (e.transaction = r)
}
function N1(e, t) {
  ;(e.fingerprint = e.fingerprint
    ? Array.isArray(e.fingerprint)
      ? e.fingerprint
      : [e.fingerprint]
    : []),
    t && (e.fingerprint = e.fingerprint.concat(t)),
    e.fingerprint.length || delete e.fingerprint
}
function A1(e, t, n, r, o, i) {
  const { normalizeDepth: s = 3, normalizeMaxBreadth: a = 1e3 } = e,
    u = {
      ...t,
      event_id: t.event_id || n.event_id || dt(),
      timestamp: t.timestamp || fi(),
    },
    l = n.integrations || e.integrations.map((S) => S.name)
  D1(u, e),
    F1(u, l),
    o && o.emit('applyFrameMetadata', t),
    t.type === void 0 && M1(u, e.stackParser)
  const d = j1(r, n.captureContext)
  n.mechanism && Wr(u, n.mechanism)
  const f = o ? o.getEventProcessors() : [],
    c = yS().getScopeData()
  if (i) {
    const S = i.getScopeData()
    qf(c, S)
  }
  if (d) {
    const S = d.getScopeData()
    qf(c, S)
  }
  const p = [...(n.attachments || []), ...c.attachments]
  p.length && (n.attachments = p), P1(u, c)
  const g = [...f, ...c.eventProcessors]
  return Ll(g, u, n).then((S) => (S && b1(S), typeof s == 'number' && s > 0 ? $1(S, s, a) : S))
}
function D1(e, t) {
  const { environment: n, release: r, dist: o, maxValueLength: i = 250 } = t
  ;(e.environment = e.environment || n || Yc),
    !e.release && r && (e.release = r),
    !e.dist && o && (e.dist = o)
  const s = e.request
  s != null && s.url && (s.url = Ks(s.url, i))
}
function M1(e, t) {
  var r, o
  const n = R1(t)
  ;(o = (r = e.exception) == null ? void 0 : r.values) == null ||
    o.forEach((i) => {
      var s, a
      ;(a = (s = i.stacktrace) == null ? void 0 : s.frames) == null ||
        a.forEach((u) => {
          u.filename && (u.debug_id = n[u.filename])
        })
    })
}
function b1(e) {
  var r, o
  const t = {}
  if (
    ((o = (r = e.exception) == null ? void 0 : r.values) == null ||
      o.forEach((i) => {
        var s, a
        ;(a = (s = i.stacktrace) == null ? void 0 : s.frames) == null ||
          a.forEach((u) => {
            u.debug_id &&
              (u.abs_path
                ? (t[u.abs_path] = u.debug_id)
                : u.filename && (t[u.filename] = u.debug_id),
              delete u.debug_id)
          })
      }),
    Object.keys(t).length === 0)
  )
    return
  ;(e.debug_meta = e.debug_meta || {}), (e.debug_meta.images = e.debug_meta.images || [])
  const n = e.debug_meta.images
  Object.entries(t).forEach(([i, s]) => {
    n.push({
      type: 'sourcemap',
      code_file: i,
      debug_id: s,
    })
  })
}
function F1(e, t) {
  t.length > 0 &&
    ((e.sdk = e.sdk || {}), (e.sdk.integrations = [...(e.sdk.integrations || []), ...t]))
}
function $1(e, t, n) {
  var o, i
  if (!e) return null
  const r = {
    ...e,
    ...(e.breadcrumbs && {
      breadcrumbs: e.breadcrumbs.map((s) => ({
        ...s,
        ...(s.data && {
          data: Ft(s.data, t, n),
        }),
      })),
    }),
    ...(e.user && {
      user: Ft(e.user, t, n),
    }),
    ...(e.contexts && {
      contexts: Ft(e.contexts, t, n),
    }),
    ...(e.extra && {
      extra: Ft(e.extra, t, n),
    }),
  }
  return (
    (o = e.contexts) != null &&
      o.trace &&
      r.contexts &&
      ((r.contexts.trace = e.contexts.trace),
      e.contexts.trace.data && (r.contexts.trace.data = Ft(e.contexts.trace.data, t, n))),
    e.spans &&
      (r.spans = e.spans.map((s) => ({
        ...s,
        ...(s.data && {
          data: Ft(s.data, t, n),
        }),
      }))),
    (i = e.contexts) != null &&
      i.flags &&
      r.contexts &&
      (r.contexts.flags = Ft(e.contexts.flags, 3, n)),
    r
  )
}
function j1(e, t) {
  if (!t) return e
  const n = e ? e.clone() : new Jt()
  return n.update(t), n
}
function z1(e, t) {
  return oe().captureException(e, void 0)
}
function Mg(e, t) {
  return oe().captureEvent(e, t)
}
function U1(e, t) {
  Cn().setContext(e, t)
}
function B1() {
  const e = X()
  return (e == null ? void 0 : e.getOptions().enabled) !== !1 && !!(e != null && e.getTransport())
}
function Qf(e) {
  const t = Cn(),
    n = oe(),
    { userAgent: r } = q.navigator || {},
    o = aS({
      user: n.getUser() || t.getUser(),
      ...(r && {
        userAgent: r,
      }),
      ...e,
    }),
    i = t.getSession()
  return (
    (i == null ? void 0 : i.status) === 'ok' &&
      Kr(i, {
        status: 'exited',
      }),
    bg(),
    t.setSession(o),
    o
  )
}
function bg() {
  const e = Cn(),
    n = oe().getSession() || e.getSession()
  n && uS(n), Fg(), e.setSession()
}
function Fg() {
  const e = Cn(),
    t = X(),
    n = e.getSession()
  n && t && t.captureSession(n)
}
function Jf(e = !1) {
  if (e) {
    bg()
    return
  }
  Fg()
}
const H1 = '7'
function V1(e) {
  const t = e.protocol ? `${e.protocol}:` : '',
    n = e.port ? `:${e.port}` : ''
  return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ''}/api/`
}
function W1(e) {
  return `${V1(e)}${e.projectId}/envelope/`
}
function K1(e, t) {
  const n = {
    sentry_version: H1,
  }
  return (
    e.publicKey && (n.sentry_key = e.publicKey),
    t && (n.sentry_client = `${t.name}/${t.version}`),
    new URLSearchParams(n).toString()
  )
}
function G1(e, t, n) {
  return t || `${W1(e)}?${K1(e, n)}`
}
const Xf = []
function Y1(e) {
  const t = {}
  return (
    e.forEach((n) => {
      const { name: r } = n,
        o = t[r]
      ;(o && !o.isDefaultInstance && n.isDefaultInstance) || (t[r] = n)
    }),
    Object.values(t)
  )
}
function q1(e) {
  const t = e.defaultIntegrations || [],
    n = e.integrations
  t.forEach((o) => {
    o.isDefaultInstance = !0
  })
  let r
  if (Array.isArray(n)) r = [...t, ...n]
  else if (typeof n == 'function') {
    const o = n(t)
    r = Array.isArray(o) ? o : [o]
  } else r = t
  return Y1(r)
}
function Q1(e, t) {
  const n = {}
  return (
    t.forEach((r) => {
      r && $g(e, r, n)
    }),
    n
  )
}
function Zf(e, t) {
  for (const n of t) n != null && n.afterAllSetup && n.afterAllSetup(e)
}
function $g(e, t, n) {
  if (n[t.name]) {
    j && C.log(`Integration skipped because it was already installed: ${t.name}`)
    return
  }
  if (
    ((n[t.name] = t),
    Xf.indexOf(t.name) === -1 &&
      typeof t.setupOnce == 'function' &&
      (t.setupOnce(), Xf.push(t.name)),
    t.setup && typeof t.setup == 'function' && t.setup(e),
    typeof t.preprocessEvent == 'function')
  ) {
    const r = t.preprocessEvent.bind(t)
    e.on('preprocessEvent', (o, i) => r(o, i, e))
  }
  if (typeof t.processEvent == 'function') {
    const r = t.processEvent.bind(t),
      o = Object.assign((i, s) => r(i, s, e), {
        id: t.name,
      })
    e.addEventProcessor(o)
  }
  j && C.log(`Integration installed: ${t.name}`)
}
function jg(e) {
  const t = []
  e.message && t.push(e.message)
  try {
    const n = e.exception.values[e.exception.values.length - 1]
    n != null && n.value && (t.push(n.value), n.type && t.push(`${n.type}: ${n.value}`))
  } catch {}
  return t
}
function J1(e) {
  var u
  const {
    trace_id: t,
    parent_span_id: n,
    span_id: r,
    status: o,
    origin: i,
    data: s,
    op: a,
  } = ((u = e.contexts) == null ? void 0 : u.trace) ?? {}
  return {
    data: s ?? {},
    description: e.transaction,
    op: a,
    parent_span_id: n,
    span_id: r ?? '',
    start_timestamp: e.start_timestamp ?? 0,
    status: o,
    timestamp: e.timestamp,
    trace_id: t ?? '',
    origin: i,
    profile_id: s == null ? void 0 : s[Wc],
    exclusive_time: s == null ? void 0 : s[mi],
    measurements: e.measurements,
    is_segment: !0,
  }
}
function X1(e) {
  return {
    type: 'transaction',
    timestamp: e.timestamp,
    start_timestamp: e.start_timestamp,
    transaction: e.description,
    contexts: {
      trace: {
        trace_id: e.trace_id,
        span_id: e.span_id,
        parent_span_id: e.parent_span_id,
        op: e.op,
        status: e.status,
        origin: e.origin,
        data: {
          ...e.data,
          ...(e.profile_id && {
            [Wc]: e.profile_id,
          }),
          ...(e.exclusive_time && {
            [mi]: e.exclusive_time,
          }),
        },
      },
    },
    measurements: e.measurements,
  }
}
function Z1(e, t, n) {
  const r = [
    {
      type: 'client_report',
    },
    {
      timestamp: fi(),
      discarded_events: e,
    },
  ]
  return ro(
    t
      ? {
          dsn: t,
        }
      : {},
    [r],
  )
}
const ep = "Not capturing exception because it's already been captured.",
  tp = 'Discarded session because of missing or non-string release',
  zg = Symbol.for('SentryInternalError'),
  Ug = Symbol.for('SentryDoNotSendEventError')
function ps(e) {
  return {
    message: e,
    [zg]: !0,
  }
}
function fu(e) {
  return {
    message: e,
    [Ug]: !0,
  }
}
function np(e) {
  return !!e && typeof e == 'object' && zg in e
}
function rp(e) {
  return !!e && typeof e == 'object' && Ug in e
}
class eE {
  constructor(t) {
    if (
      ((this._options = t),
      (this._integrations = {}),
      (this._numProcessing = 0),
      (this._outcomes = {}),
      (this._hooks = {}),
      (this._eventProcessors = []),
      t.dsn
        ? (this._dsn = YS(t.dsn))
        : j && C.warn('No DSN provided, client will not send events.'),
      this._dsn)
    ) {
      const n = G1(this._dsn, t.tunnel, t._metadata ? t._metadata.sdk : void 0)
      this._transport = t.transport({
        tunnel: this._options.tunnel,
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...t.transportOptions,
        url: n,
      })
    }
  }
  captureException(t, n, r) {
    const o = dt()
    if (Lf(t)) return j && C.log(ep), o
    const i = {
      event_id: o,
      ...n,
    }
    return (
      this._process(this.eventFromException(t, i).then((s) => this._captureEvent(s, i, r))),
      i.event_id
    )
  }
  captureMessage(t, n, r, o) {
    const i = {
        event_id: dt(),
        ...r,
      },
      s = jc(t) ? t : String(t),
      a = zc(t) ? this.eventFromMessage(s, n, i) : this.eventFromException(t, i)
    return this._process(a.then((u) => this._captureEvent(u, i, o))), i.event_id
  }
  captureEvent(t, n, r) {
    const o = dt()
    if (n != null && n.originalException && Lf(n.originalException)) return j && C.log(ep), o
    const i = {
        event_id: o,
        ...n,
      },
      s = t.sdkProcessingMetadata || {},
      a = s.capturedSpanScope,
      u = s.capturedSpanIsolationScope
    return this._process(this._captureEvent(t, i, a || r, u)), i.event_id
  }
  captureSession(t) {
    this.sendSession(t),
      Kr(t, {
        init: !1,
      })
  }
  getDsn() {
    return this._dsn
  }
  getOptions() {
    return this._options
  }
  getSdkMetadata() {
    return this._options._metadata
  }
  getTransport() {
    return this._transport
  }
  flush(t) {
    const n = this._transport
    return n
      ? (this.emit('flush'),
        this._isClientDoneProcessing(t).then((r) => n.flush(t).then((o) => r && o)))
      : nr(!0)
  }
  close(t) {
    return this.flush(t).then((n) => ((this.getOptions().enabled = !1), this.emit('close'), n))
  }
  getEventProcessors() {
    return this._eventProcessors
  }
  addEventProcessor(t) {
    this._eventProcessors.push(t)
  }
  init() {
    ;(this._isEnabled() ||
      this._options.integrations.some(({ name: t }) => t.startsWith('Spotlight'))) &&
      this._setupIntegrations()
  }
  getIntegrationByName(t) {
    return this._integrations[t]
  }
  addIntegration(t) {
    const n = this._integrations[t.name]
    $g(this, t, this._integrations), n || Zf(this, [t])
  }
  sendEvent(t, n = {}) {
    this.emit('beforeSendEvent', t, n)
    let r = f1(t, this._dsn, this._options._metadata, this._options.tunnel)
    for (const i of n.attachments || []) r = r1(r, a1(i))
    const o = this.sendEnvelope(r)
    o && o.then((i) => this.emit('afterSendEvent', t, i), null)
  }
  sendSession(t) {
    const { release: n, environment: r = Yc } = this._options
    if ('aggregates' in t) {
      const i = t.attrs || {}
      if (!i.release && !n) {
        j && C.warn(tp)
        return
      }
      ;(i.release = i.release || n), (i.environment = i.environment || r), (t.attrs = i)
    } else {
      if (!t.release && !n) {
        j && C.warn(tp)
        return
      }
      ;(t.release = t.release || n), (t.environment = t.environment || r)
    }
    this.emit('beforeSendSession', t)
    const o = d1(t, this._dsn, this._options._metadata, this._options.tunnel)
    this.sendEnvelope(o)
  }
  recordDroppedEvent(t, n, r = 1) {
    if (this._options.sendClientReports) {
      const o = `${t}:${n}`
      j && C.log(`Recording outcome: "${o}"${r > 1 ? ` (${r} times)` : ''}`),
        (this._outcomes[o] = (this._outcomes[o] || 0) + r)
    }
  }
  on(t, n) {
    const r = (this._hooks[t] = this._hooks[t] || [])
    return (
      r.push(n),
      () => {
        const o = r.indexOf(n)
        o > -1 && r.splice(o, 1)
      }
    )
  }
  emit(t, ...n) {
    const r = this._hooks[t]
    r && r.forEach((o) => o(...n))
  }
  sendEnvelope(t) {
    return (
      this.emit('beforeEnvelope', t),
      this._isEnabled() && this._transport
        ? this._transport
            .send(t)
            .then(null, (n) => (j && C.error('Error while sending envelope:', n), n))
        : (j && C.error('Transport disabled'), nr({}))
    )
  }
  _setupIntegrations() {
    const { integrations: t } = this._options
    ;(this._integrations = Q1(this, t)), Zf(this, t)
  }
  _updateSessionFromEvent(t, n) {
    var u
    let r = n.level === 'fatal',
      o = !1
    const i = (u = n.exception) == null ? void 0 : u.values
    if (i) {
      o = !0
      for (const l of i) {
        const d = l.mechanism
        if ((d == null ? void 0 : d.handled) === !1) {
          r = !0
          break
        }
      }
    }
    const s = t.status === 'ok'
    ;((s && t.errors === 0) || (s && r)) &&
      (Kr(t, {
        ...(r && {
          status: 'crashed',
        }),
        errors: t.errors || Number(o || r),
      }),
      this.captureSession(t))
  }
  _isClientDoneProcessing(t) {
    return new Tn((n) => {
      let r = 0
      const o = 1,
        i = setInterval(() => {
          this._numProcessing == 0
            ? (clearInterval(i), n(!0))
            : ((r += o), t && r >= t && (clearInterval(i), n(!1)))
        }, o)
    })
  }
  _isEnabled() {
    return this.getOptions().enabled !== !1 && this._transport !== void 0
  }
  _prepareEvent(t, n, r, o) {
    const i = this.getOptions(),
      s = Object.keys(this._integrations)
    return (
      !n.integrations && s != null && s.length && (n.integrations = s),
      this.emit('preprocessEvent', t, n),
      t.type || o.setLastEventId(t.event_id || n.event_id),
      A1(i, t, n, r, this, o).then((a) => {
        if (a === null) return a
        this.emit('postprocessEvent', a, n),
          (a.contexts = {
            trace: vS(r),
            ...a.contexts,
          })
        const u = Cg(this, r)
        return (
          (a.sdkProcessingMetadata = {
            dynamicSamplingContext: u,
            ...a.sdkProcessingMetadata,
          }),
          a
        )
      })
    )
  }
  _captureEvent(t, n = {}, r = oe(), o = Cn()) {
    return (
      j && Ol(t) && C.log(`Captured error event \`${jg(t)[0] || '<unknown>'}\``),
      this._processEvent(t, n, r, o).then(
        (i) => i.event_id,
        (i) => {
          j && (rp(i) ? C.log(i.message) : np(i) ? C.warn(i.message) : C.warn(i))
        },
      )
    )
  }
  _processEvent(t, n, r, o) {
    const i = this.getOptions(),
      { sampleRate: s } = i,
      a = Bg(t),
      u = Ol(t),
      l = t.type || 'error',
      d = `before send for type \`${l}\``,
      f = typeof s > 'u' ? void 0 : ni(s)
    if (u && typeof f == 'number' && Math.random() > f)
      return (
        this.recordDroppedEvent('sample_rate', 'error'),
        Qs(
          fu(
            `Discarding event because it's not included in the random sample (sampling rate = ${s})`,
          ),
        )
      )
    const c = l === 'replay_event' ? 'replay' : l
    return this._prepareEvent(t, n, r, o)
      .then((p) => {
        if (p === null)
          throw (
            (this.recordDroppedEvent('event_processor', c),
            fu('An event processor returned `null`, will not send event.'))
          )
        if (n.data && n.data.__sentry__ === !0) return p
        const v = nE(this, i, p, n)
        return tE(v, d)
      })
      .then((p) => {
        var S
        if (p === null) {
          if ((this.recordDroppedEvent('before_send', c), a)) {
            const h = 1 + (t.spans || []).length
            this.recordDroppedEvent('before_send', 'span', h)
          }
          throw fu(`${d} returned \`null\`, will not send event.`)
        }
        const g = r.getSession() || o.getSession()
        if ((u && g && this._updateSessionFromEvent(g, p), a)) {
          const m =
              ((S = p.sdkProcessingMetadata) == null ? void 0 : S.spanCountBeforeProcessing) || 0,
            h = p.spans ? p.spans.length : 0,
            y = m - h
          y > 0 && this.recordDroppedEvent('before_send', 'span', y)
        }
        const v = p.transaction_info
        if (a && v && p.transaction !== t.transaction) {
          const m = 'custom'
          p.transaction_info = {
            ...v,
            source: m,
          }
        }
        return this.sendEvent(p, n), p
      })
      .then(null, (p) => {
        throw rp(p) || np(p)
          ? p
          : (this.captureException(p, {
              data: {
                __sentry__: !0,
              },
              originalException: p,
            }),
            ps(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${p}`))
      })
  }
  _process(t) {
    this._numProcessing++,
      t.then(
        (n) => (this._numProcessing--, n),
        (n) => (this._numProcessing--, n),
      )
  }
  _clearOutcomes() {
    const t = this._outcomes
    return (
      (this._outcomes = {}),
      Object.entries(t).map(([n, r]) => {
        const [o, i] = n.split(':')
        return {
          reason: o,
          category: i,
          quantity: r,
        }
      })
    )
  }
  _flushOutcomes() {
    j && C.log('Flushing outcomes...')
    const t = this._clearOutcomes()
    if (t.length === 0) {
      j && C.log('No outcomes to send')
      return
    }
    if (!this._dsn) {
      j && C.log('No dsn provided, will not send outcomes')
      return
    }
    j && C.log('Sending outcomes:', t)
    const n = Z1(t, this._options.tunnel && gi(this._dsn))
    this.sendEnvelope(n)
  }
}
function tE(e, t) {
  const n = `${t} must return \`null\` or a valid event.`
  if (wa(e))
    return e.then(
      (r) => {
        if (!ei(r) && r !== null) throw ps(n)
        return r
      },
      (r) => {
        throw ps(`${t} rejected with ${r}`)
      },
    )
  if (!ei(e) && e !== null) throw ps(n)
  return e
}
function nE(e, t, n, r) {
  const { beforeSend: o, beforeSendTransaction: i, beforeSendSpan: s } = t
  let a = n
  if (Ol(a) && o) return o(a, r)
  if (Bg(a)) {
    if (s) {
      const u = s(J1(a))
      if ((u ? (a = pi(n, X1(u))) : Rl(), a.spans)) {
        const l = []
        for (const d of a.spans) {
          const f = s(d)
          f ? l.push(f) : (Rl(), l.push(d))
        }
        a.spans = l
      }
    }
    if (i) {
      if (a.spans) {
        const u = a.spans.length
        a.sdkProcessingMetadata = {
          ...n.sdkProcessingMetadata,
          spanCountBeforeProcessing: u,
        }
      }
      return i(a, r)
    }
  }
  return a
}
function Ol(e) {
  return e.type === void 0
}
function Bg(e) {
  return e.type === 'transaction'
}
function rE(e) {
  return [
    {
      type: 'log',
      item_count: e.length,
      content_type: 'application/vnd.sentry.items.log+json',
    },
    {
      items: e,
    },
  ]
}
function oE(e, t, n, r) {
  const o = {}
  return (
    t != null &&
      t.sdk &&
      (o.sdk = {
        name: t.sdk.name,
        version: t.sdk.version,
      }),
    n && r && (o.dsn = gi(r)),
    ro(o, [rE(e)])
  )
}
q._sentryClientToLogBufferMap = new WeakMap()
function pu(e, t) {
  var i
  const n = iE(e) ?? []
  if (n.length === 0) return
  const r = e.getOptions(),
    o = oE(n, r._metadata, r.tunnel, e.getDsn())
  ;(i = q._sentryClientToLogBufferMap) == null || i.set(e, []),
    e.emit('flushLogs'),
    e.sendEnvelope(o)
}
function iE(e) {
  var t
  return (t = q._sentryClientToLogBufferMap) == null ? void 0 : t.get(e)
}
function sE(e, t) {
  t.debug === !0 &&
    (j
      ? C.enable()
      : ar(() => {
          console.warn(
            '[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.',
          )
        })),
    oe().update(t.initialScope)
  const r = new e(t)
  return aE(r), r.init(), r
}
function aE(e) {
  oe().setClient(e)
}
const Hg = Symbol.for('SentryBufferFullError')
function uE(e) {
  const t = []
  function n() {
    return e === void 0 || t.length < e
  }
  function r(s) {
    return t.splice(t.indexOf(s), 1)[0] || Promise.resolve(void 0)
  }
  function o(s) {
    if (!n()) return Qs(Hg)
    const a = s()
    return (
      t.indexOf(a) === -1 && t.push(a),
      a.then(() => r(a)).then(null, () => r(a).then(null, () => {})),
      a
    )
  }
  function i(s) {
    return new Tn((a, u) => {
      let l = t.length
      if (!l) return a(!0)
      const d = setTimeout(() => {
        s && s > 0 && a(!1)
      }, s)
      t.forEach((f) => {
        nr(f).then(() => {
          --l || (clearTimeout(d), a(!0))
        }, u)
      })
    })
  }
  return {
    $: t,
    add: o,
    drain: i,
  }
}
const lE = 60 * 1e3
function cE(e, t = Date.now()) {
  const n = parseInt(`${e}`, 10)
  if (!isNaN(n)) return n * 1e3
  const r = Date.parse(`${e}`)
  return isNaN(r) ? lE : r - t
}
function dE(e, t) {
  return e[t] || e.all || 0
}
function fE(e, t, n = Date.now()) {
  return dE(e, t) > n
}
function pE(e, { statusCode: t, headers: n }, r = Date.now()) {
  const o = {
      ...e,
    },
    i = n == null ? void 0 : n['x-sentry-rate-limits'],
    s = n == null ? void 0 : n['retry-after']
  if (i)
    for (const a of i.trim().split(',')) {
      const [u, l, , , d] = a.split(':', 5),
        f = parseInt(u, 10),
        c = (isNaN(f) ? 60 : f) * 1e3
      if (!l) o.all = r + c
      else
        for (const p of l.split(';'))
          p === 'metric_bucket'
            ? (!d || d.split(';').includes('custom')) && (o[p] = r + c)
            : (o[p] = r + c)
    }
  else s ? (o.all = r + cE(s, r)) : t === 429 && (o.all = r + 60 * 1e3)
  return o
}
const hE = 64
function mE(e, t, n = uE(e.bufferSize || hE)) {
  let r = {}
  const o = (s) => n.drain(s)
  function i(s) {
    const a = []
    if (
      (Uf(s, (f, c) => {
        const p = Bf(c)
        fE(r, p) ? e.recordDroppedEvent('ratelimit_backoff', p) : a.push(f)
      }),
      a.length === 0)
    )
      return nr({})
    const u = ro(s[0], a),
      l = (f) => {
        Uf(u, (c, p) => {
          e.recordDroppedEvent(f, Bf(p))
        })
      },
      d = () =>
        t({
          body: o1(u),
        }).then(
          (f) => (
            f.statusCode !== void 0 &&
              (f.statusCode < 200 || f.statusCode >= 300) &&
              j &&
              C.warn(`Sentry responded with status code ${f.statusCode} to sent event.`),
            (r = pE(r, f)),
            f
          ),
          (f) => {
            throw (
              (l('network_error'),
              j && C.error('Encountered error running transport request:', f),
              f)
            )
          },
        )
    return n.add(d).then(
      (f) => f,
      (f) => {
        if (f === Hg)
          return (
            j && C.error('Skipped sending event because buffer is full.'),
            l('queue_overflow'),
            nr({})
          )
        throw f
      },
    )
  }
  return {
    send: i,
    flush: o,
  }
}
function gE(e) {
  var t
  ;((t = e.user) == null ? void 0 : t.ip_address) === void 0 &&
    (e.user = {
      ...e.user,
      ip_address: '{{auto}}',
    })
}
function yE(e) {
  var t
  'aggregates' in e
    ? ((t = e.attrs) == null ? void 0 : t.ip_address) === void 0 &&
      (e.attrs = {
        ...e.attrs,
        ip_address: '{{auto}}',
      })
    : e.ipAddress === void 0 && (e.ipAddress = '{{auto}}')
}
function Vg(e, t, n = [t], r = 'npm') {
  const o = e._metadata || {}
  o.sdk ||
    (o.sdk = {
      name: `sentry.javascript.${t}`,
      packages: n.map((i) => ({
        name: `${r}:@sentry/${i}`,
        version: Bn,
      })),
      version: Bn,
    }),
    (e._metadata = o)
}
function Wg(e = {}) {
  const t = X()
  if (!B1() || !t) return {}
  const n = sr(),
    r = no(n)
  if (r.getTraceData) return r.getTraceData(e)
  const o = oe(),
    i = e.span || it(),
    s = i ? AS(i) : vE(o),
    a = i ? wn(i) : Cg(t, o),
    u = xS(a)
  return mg.test(s)
    ? {
        'sentry-trace': s,
        baggage: u,
      }
    : (C.warn('Invalid sentry-trace data. Cannot generate trace data'), {})
}
function vE(e) {
  const { traceId: t, sampled: n, propagationSpanId: r } = e.getPropagationContext()
  return gg(t, r, n)
}
const _E = 100
function rr(e, t) {
  const n = X(),
    r = Cn()
  if (!n) return
  const { beforeBreadcrumb: o = null, maxBreadcrumbs: i = _E } = n.getOptions()
  if (i <= 0) return
  const a = {
      timestamp: fi(),
      ...e,
    },
    u = o ? ar(() => o(a, t)) : a
  u !== null && (n.emit && n.emit('beforeAddBreadcrumb', u, t), r.addBreadcrumb(u, i))
}
let op
const SE = 'FunctionToString',
  ip = new WeakMap(),
  EE = () => ({
    name: SE,
    setupOnce() {
      op = Function.prototype.toString
      try {
        Function.prototype.toString = function (...e) {
          const t = Bc(this),
            n = ip.has(X()) && t !== void 0 ? t : this
          return op.apply(n, e)
        }
      } catch {}
    },
    setup(e) {
      ip.set(e, !0)
    },
  }),
  wE = EE,
  TE = [
    /^Script error\.?$/,
    /^Javascript error: Script error\.? on line 0$/,
    /^ResizeObserver loop completed with undelivered notifications.$/,
    /^Cannot redefine property: googletag$/,
    /^Can't find variable: gmo$/,
    /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/,
    `can't redefine non-configurable property "solana"`,
    "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)",
    "Can't find variable: _AutofillCallbackHandler",
    /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/,
    /^Java exception was raised during method invocation$/,
  ],
  kE = 'EventFilters',
  xE = (e = {}) => {
    let t
    return {
      name: kE,
      setup(n) {
        const r = n.getOptions()
        t = sp(e, r)
      },
      processEvent(n, r, o) {
        if (!t) {
          const i = o.getOptions()
          t = sp(e, i)
        }
        return PE(n, t) ? null : n
      },
    }
  },
  RE = (e = {}) => ({
    ...xE(e),
    name: 'InboundFilters',
  })
function sp(e = {}, t = {}) {
  return {
    allowUrls: [...(e.allowUrls || []), ...(t.allowUrls || [])],
    denyUrls: [...(e.denyUrls || []), ...(t.denyUrls || [])],
    ignoreErrors: [
      ...(e.ignoreErrors || []),
      ...(t.ignoreErrors || []),
      ...(e.disableErrorDefaults ? [] : TE),
    ],
    ignoreTransactions: [...(e.ignoreTransactions || []), ...(t.ignoreTransactions || [])],
  }
}
function PE(e, t) {
  if (e.type) {
    if (e.type === 'transaction' && IE(e, t.ignoreTransactions))
      return (
        j &&
          C.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${Mn(e)}`),
        !0
      )
  } else {
    if (CE(e, t.ignoreErrors))
      return (
        j &&
          C.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Mn(e)}`),
        !0
      )
    if (AE(e))
      return (
        j &&
          C.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${Mn(e)}`),
        !0
      )
    if (LE(e, t.denyUrls))
      return (
        j &&
          C.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Mn(e)}.
Url: ${Js(e)}`),
        !0
      )
    if (!OE(e, t.allowUrls))
      return (
        j &&
          C.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Mn(e)}.
Url: ${Js(e)}`),
        !0
      )
  }
  return !1
}
function CE(e, t) {
  return t != null && t.length ? jg(e).some((n) => Hn(n, t)) : !1
}
function IE(e, t) {
  if (!(t != null && t.length)) return !1
  const n = e.transaction
  return n ? Hn(n, t) : !1
}
function LE(e, t) {
  if (!(t != null && t.length)) return !1
  const n = Js(e)
  return n ? Hn(n, t) : !1
}
function OE(e, t) {
  if (!(t != null && t.length)) return !0
  const n = Js(e)
  return n ? Hn(n, t) : !0
}
function NE(e = []) {
  for (let t = e.length - 1; t >= 0; t--) {
    const n = e[t]
    if (n && n.filename !== '<anonymous>' && n.filename !== '[native code]')
      return n.filename || null
  }
  return null
}
function Js(e) {
  var t, n
  try {
    const r = [...(((t = e.exception) == null ? void 0 : t.values) ?? [])].reverse().find((i) => {
        var s, a, u
        return (
          ((s = i.mechanism) == null ? void 0 : s.parent_id) === void 0 &&
          ((u = (a = i.stacktrace) == null ? void 0 : a.frames) == null ? void 0 : u.length)
        )
      }),
      o = (n = r == null ? void 0 : r.stacktrace) == null ? void 0 : n.frames
    return o ? NE(o) : null
  } catch {
    return j && C.error(`Cannot extract url for event ${Mn(e)}`), null
  }
}
function AE(e) {
  var t, n
  return (n = (t = e.exception) == null ? void 0 : t.values) != null && n.length
    ? !e.message &&
        !e.exception.values.some((r) => r.stacktrace || (r.type && r.type !== 'Error') || r.value)
    : !1
}
function DE(e, t, n, r, o, i) {
  var a
  if (!((a = o.exception) != null && a.values) || !i || !Qt(i.originalException, Error)) return
  const s =
    o.exception.values.length > 0 ? o.exception.values[o.exception.values.length - 1] : void 0
  s && (o.exception.values = Nl(e, t, r, i.originalException, n, o.exception.values, s, 0))
}
function Nl(e, t, n, r, o, i, s, a) {
  if (i.length >= n + 1) return i
  let u = [...i]
  if (Qt(r[o], Error)) {
    ap(s, a)
    const l = e(t, r[o]),
      d = u.length
    up(l, o, d, a), (u = Nl(e, t, n, r[o], o, [l, ...u], l, d))
  }
  return (
    Array.isArray(r.errors) &&
      r.errors.forEach((l, d) => {
        if (Qt(l, Error)) {
          ap(s, a)
          const f = e(t, l),
            c = u.length
          up(f, `errors[${d}]`, c, a), (u = Nl(e, t, n, l, o, [f, ...u], f, c))
        }
      }),
    u
  )
}
function ap(e, t) {
  ;(e.mechanism = e.mechanism || {
    type: 'generic',
    handled: !0,
  }),
    (e.mechanism = {
      ...e.mechanism,
      ...(e.type === 'AggregateError' && {
        is_exception_group: !0,
      }),
      exception_id: t,
    })
}
function up(e, t, n, r) {
  ;(e.mechanism = e.mechanism || {
    type: 'generic',
    handled: !0,
  }),
    (e.mechanism = {
      ...e.mechanism,
      type: 'chained',
      source: t,
      exception_id: n,
      parent_id: r,
    })
}
function ME(e) {
  const t = 'console'
  In(t, e), Ln(t, bE)
}
function bE() {
  'console' in q &&
    wl.forEach(function (e) {
      e in q.console &&
        Xe(q.console, e, function (t) {
          return (
            (Ws[e] = t),
            function (...n) {
              ft('console', {
                args: n,
                level: e,
              })
              const o = Ws[e]
              o == null || o.apply(q.console, n)
            }
          )
        })
    })
}
function FE(e) {
  return e === 'warn'
    ? 'warning'
    : ['fatal', 'error', 'warning', 'log', 'info', 'debug'].includes(e)
      ? e
      : 'log'
}
const $E = 'Dedupe',
  jE = () => {
    let e
    return {
      name: $E,
      processEvent(t) {
        if (t.type) return t
        try {
          if (UE(t, e))
            return (
              j && C.warn('Event dropped due to being a duplicate of previously captured event.'),
              null
            )
        } catch {}
        return (e = t)
      },
    }
  },
  zE = jE
function UE(e, t) {
  return t ? !!(BE(e, t) || HE(e, t)) : !1
}
function BE(e, t) {
  const n = e.message,
    r = t.message
  return !((!n && !r) || (n && !r) || (!n && r) || n !== r || !Gg(e, t) || !Kg(e, t))
}
function HE(e, t) {
  const n = lp(t),
    r = lp(e)
  return !(!n || !r || n.type !== r.type || n.value !== r.value || !Gg(e, t) || !Kg(e, t))
}
function Kg(e, t) {
  let n = $f(e),
    r = $f(t)
  if (!n && !r) return !0
  if ((n && !r) || (!n && r) || ((n = n), (r = r), r.length !== n.length)) return !1
  for (let o = 0; o < r.length; o++) {
    const i = r[o],
      s = n[o]
    if (
      i.filename !== s.filename ||
      i.lineno !== s.lineno ||
      i.colno !== s.colno ||
      i.function !== s.function
    )
      return !1
  }
  return !0
}
function Gg(e, t) {
  let n = e.fingerprint,
    r = t.fingerprint
  if (!n && !r) return !0
  if ((n && !r) || (!n && r)) return !1
  ;(n = n), (r = r)
  try {
    return n.join('') === r.join('')
  } catch {
    return !1
  }
}
function lp(e) {
  var t
  return ((t = e.exception) == null ? void 0 : t.values) && e.exception.values[0]
}
const VE = 'thismessage:/'
function Yg(e) {
  return 'isRelative' in e
}
function qg(e, t) {
  const n = e.indexOf('://') <= 0 && e.indexOf('//') !== 0,
    r = n ? VE : void 0
  try {
    if ('canParse' in URL && !URL.canParse(e, r)) return
    const o = new URL(e, r)
    return n
      ? {
          isRelative: n,
          pathname: o.pathname,
          search: o.search,
          hash: o.hash,
        }
      : o
  } catch {}
}
function WE(e) {
  if (Yg(e)) return e.pathname
  const t = new URL(e)
  return (
    (t.search = ''),
    (t.hash = ''),
    ['80', '443'].includes(t.port) && (t.port = ''),
    t.password && (t.password = '%filtered%'),
    t.username && (t.username = '%filtered%'),
    t.toString()
  )
}
function Kn(e) {
  if (!e) return {}
  const t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/)
  if (!t) return {}
  const n = t[6] || '',
    r = t[8] || ''
  return {
    host: t[4],
    path: t[5],
    protocol: t[2],
    search: n,
    hash: r,
    relative: t[5] + n + r,
  }
}
function KE(e) {
  return e.split(/[?#]/, 1)[0]
}
function GE(e, t, n, r, o = 'auto.http.browser') {
  if (!e.fetchData) return
  const { method: i, url: s } = e.fetchData,
    a = En() && t(s)
  if (e.endTimestamp && a) {
    const f = e.fetchData.__span
    if (!f) return
    const c = r[f]
    c && (qE(c, e), delete r[f])
    return
  }
  const u = !!it(),
    l = a && u ? yi(JE(s, i, o)) : new tr()
  if (
    ((e.fetchData.__span = l.spanContext().spanId),
    (r[l.spanContext().spanId] = l),
    n(e.fetchData.url))
  ) {
    const f = e.args[0],
      c = e.args[1] || {},
      p = YE(f, c, En() && u ? l : void 0)
    p && ((e.args[1] = c), (c.headers = p))
  }
  const d = X()
  if (d) {
    const f = {
      input: e.args,
      response: e.response,
      startTimestamp: e.startTimestamp,
      endTimestamp: e.endTimestamp,
    }
    d.emit('beforeOutgoingRequestSpan', l, f)
  }
  return l
}
function YE(e, t, n) {
  const r = Wg({
      span: n,
    }),
    o = r['sentry-trace'],
    i = r.baggage
  if (!o) return
  const s = t.headers || (rg(e) ? e.headers : void 0)
  if (s)
    if (QE(s)) {
      const a = new Headers(s)
      if ((a.get('sentry-trace') || a.set('sentry-trace', o), i)) {
        const u = a.get('baggage')
        u ? Wi(u) || a.set('baggage', `${u},${i}`) : a.set('baggage', i)
      }
      return a
    } else if (Array.isArray(s)) {
      const a = [...s]
      s.find((l) => l[0] === 'sentry-trace') || a.push(['sentry-trace', o])
      const u = s.find((l) => l[0] === 'baggage' && Wi(l[1]))
      return i && !u && a.push(['baggage', i]), a
    } else {
      const a = 'sentry-trace' in s ? s['sentry-trace'] : void 0,
        u = 'baggage' in s ? s.baggage : void 0,
        l = u ? (Array.isArray(u) ? [...u] : [u]) : [],
        d = u && (Array.isArray(u) ? u.find((f) => Wi(f)) : Wi(u))
      return (
        i && !d && l.push(i),
        {
          ...s,
          'sentry-trace': a ?? o,
          baggage: l.length > 0 ? l.join(',') : void 0,
        }
      )
    }
  else
    return {
      ...r,
    }
}
function qE(e, t) {
  var n
  if (t.response) {
    dg(e, t.response.status)
    const r =
      ((n = t.response) == null ? void 0 : n.headers) && t.response.headers.get('content-length')
    if (r) {
      const o = parseInt(r)
      o > 0 && e.setAttribute('http.response_content_length', o)
    }
  } else
    t.error &&
      e.setStatus({
        code: ye,
        message: 'internal_error',
      })
  e.end()
}
function Wi(e) {
  return e.split(',').some((t) => t.trim().startsWith(Kc))
}
function QE(e) {
  return typeof Headers < 'u' && Qt(e, Headers)
}
function JE(e, t, n) {
  const r = qg(e)
  return {
    name: r ? `${t} ${WE(r)}` : t,
    attributes: XE(e, r, t, n),
  }
}
function XE(e, t, n, r) {
  const o = {
    url: e,
    type: 'fetch',
    'http.method': n,
    [Se]: r,
    [Zn]: 'http.client',
  }
  return (
    t &&
      (Yg(t) || ((o['http.url'] = t.href), (o['server.address'] = t.host)),
      t.search && (o['http.query'] = t.search),
      t.hash && (o['http.fragment'] = t.hash)),
    o
  )
}
function Qg(e) {
  if (e !== void 0) return e >= 400 && e < 500 ? 'warning' : e >= 500 ? 'error' : void 0
}
const ri = q
function ZE() {
  return 'history' in ri && !!ri.history
}
function ew() {
  if (!('fetch' in ri)) return !1
  try {
    return new Headers(), new Request('http://www.example.com'), new Response(), !0
  } catch {
    return !1
  }
}
function Al(e) {
  return e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
}
function tw() {
  var n
  if (typeof EdgeRuntime == 'string') return !0
  if (!ew()) return !1
  if (Al(ri.fetch)) return !0
  let e = !1
  const t = ri.document
  if (t && typeof t.createElement == 'function')
    try {
      const r = t.createElement('iframe')
      ;(r.hidden = !0),
        t.head.appendChild(r),
        (n = r.contentWindow) != null && n.fetch && (e = Al(r.contentWindow.fetch)),
        t.head.removeChild(r)
    } catch (r) {
      j &&
        C.warn('Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ', r)
    }
  return e
}
function Jg(e, t) {
  const n = 'fetch'
  In(n, e), Ln(n, () => Xg(void 0, t))
}
function nw(e) {
  const t = 'fetch-body-resolved'
  In(t, e), Ln(t, () => Xg(ow))
}
function Xg(e, t = !1) {
  ;(t && !tw()) ||
    Xe(q, 'fetch', function (n) {
      return function (...r) {
        const o = new Error(),
          { method: i, url: s } = iw(r),
          a = {
            args: r,
            fetchData: {
              method: i,
              url: s,
            },
            startTimestamp: De() * 1e3,
            virtualError: o,
            headers: sw(r),
          }
        return (
          e ||
            ft('fetch', {
              ...a,
            }),
          n.apply(q, r).then(
            async (u) => (
              e
                ? e(u)
                : ft('fetch', {
                    ...a,
                    endTimestamp: De() * 1e3,
                    response: u,
                  }),
              u
            ),
            (u) => {
              if (
                (ft('fetch', {
                  ...a,
                  endTimestamp: De() * 1e3,
                  error: u,
                }),
                $c(u) && u.stack === void 0 && ((u.stack = o.stack), nt(u, 'framesToPop', 1)),
                u instanceof TypeError &&
                  (u.message === 'Failed to fetch' ||
                    u.message === 'Load failed' ||
                    u.message === 'NetworkError when attempting to fetch resource.'))
              )
                try {
                  const l = new URL(a.fetchData.url)
                  u.message = `${u.message} (${l.host})`
                } catch {}
              throw u
            },
          )
        )
      }
    })
}
async function rw(e, t) {
  if (e != null && e.body) {
    const n = e.body,
      r = n.getReader(),
      o = setTimeout(() => {
        n.cancel().then(null, () => {})
      }, 90 * 1e3)
    let i = !0
    for (; i; ) {
      let s
      try {
        s = setTimeout(() => {
          n.cancel().then(null, () => {})
        }, 5e3)
        const { done: a } = await r.read()
        clearTimeout(s), a && (t(), (i = !1))
      } catch {
        i = !1
      } finally {
        clearTimeout(s)
      }
    }
    clearTimeout(o), r.releaseLock(), n.cancel().then(null, () => {})
  }
}
function ow(e) {
  let t
  try {
    t = e.clone()
  } catch {
    return
  }
  rw(t, () => {
    ft('fetch-body-resolved', {
      endTimestamp: De() * 1e3,
      response: e,
    })
  })
}
function Dl(e, t) {
  return !!e && typeof e == 'object' && !!e[t]
}
function cp(e) {
  return typeof e == 'string' ? e : e ? (Dl(e, 'url') ? e.url : e.toString ? e.toString() : '') : ''
}
function iw(e) {
  if (e.length === 0)
    return {
      method: 'GET',
      url: '',
    }
  if (e.length === 2) {
    const [n, r] = e
    return {
      url: cp(n),
      method: Dl(r, 'method') ? String(r.method).toUpperCase() : 'GET',
    }
  }
  const t = e[0]
  return {
    url: cp(t),
    method: Dl(t, 'method') ? String(t.method).toUpperCase() : 'GET',
  }
}
function sw(e) {
  const [t, n] = e
  try {
    if (typeof n == 'object' && n !== null && 'headers' in n && n.headers)
      return new Headers(n.headers)
    if (rg(t)) return new Headers(t.headers)
  } catch {}
}
function aw() {
  return 'npm'
}
const Y = q
let Ml = 0
function Zg() {
  return Ml > 0
}
function uw() {
  Ml++,
    setTimeout(() => {
      Ml--
    })
}
function Yr(e, t = {}) {
  function n(o) {
    return typeof o == 'function'
  }
  if (!n(e)) return e
  try {
    const o = e.__sentry_wrapped__
    if (o) return typeof o == 'function' ? o : e
    if (Bc(e)) return e
  } catch {
    return e
  }
  const r = function (...o) {
    try {
      const i = o.map((s) => Yr(s, t))
      return e.apply(this, i)
    } catch (i) {
      throw (
        (uw(),
        Hc((s) => {
          s.addEventProcessor(
            (a) => (
              t.mechanism && (Tl(a, void 0), Wr(a, t.mechanism)),
              (a.extra = {
                ...a.extra,
                arguments: o,
              }),
              a
            ),
          ),
            z1(i)
        }),
        i)
      )
    }
  }
  try {
    for (const o in e) Object.prototype.hasOwnProperty.call(e, o) && (r[o] = e[o])
  } catch {}
  ig(r, e), nt(e, '__sentry_wrapped__', r)
  try {
    Object.getOwnPropertyDescriptor(r, 'name').configurable &&
      Object.defineProperty(r, 'name', {
        get() {
          return e.name
        },
      })
  } catch {}
  return r
}
function bl() {
  const e = di(),
    { referrer: t } = Y.document || {},
    { userAgent: n } = Y.navigator || {},
    r = {
      ...(t && {
        Referer: t,
      }),
      ...(n && {
        'User-Agent': n,
      }),
    }
  return {
    url: e,
    headers: r,
  }
}
function Qc(e, t) {
  const n = Jc(e, t),
    r = {
      type: pw(t),
      value: hw(t),
    }
  return (
    n.length &&
      (r.stacktrace = {
        frames: n,
      }),
    r.type === void 0 && r.value === '' && (r.value = 'Unrecoverable error caught'),
    r
  )
}
function lw(e, t, n, r) {
  const o = X(),
    i = o == null ? void 0 : o.getOptions().normalizeDepth,
    s = _w(t),
    a = {
      __serialized__: Ig(t, i),
    }
  if (s)
    return {
      exception: {
        values: [Qc(e, s)],
      },
      extra: a,
    }
  const u = {
    exception: {
      values: [
        {
          type: Ea(t) ? t.constructor.name : r ? 'UnhandledRejection' : 'Error',
          value: yw(t, {
            isUnhandledRejection: r,
          }),
        },
      ],
    },
    extra: a,
  }
  if (n) {
    const l = Jc(e, n)
    l.length &&
      (u.exception.values[0].stacktrace = {
        frames: l,
      })
  }
  return u
}
function hu(e, t) {
  return {
    exception: {
      values: [Qc(e, t)],
    },
  }
}
function Jc(e, t) {
  const n = t.stacktrace || t.stack || '',
    r = dw(t),
    o = fw(t)
  try {
    return e(n, r, o)
  } catch {}
  return []
}
const cw = /Minified React error #\d+;/i
function dw(e) {
  return e && cw.test(e.message) ? 1 : 0
}
function fw(e) {
  return typeof e.framesToPop == 'number' ? e.framesToPop : 0
}
function ey(e) {
  return typeof WebAssembly < 'u' && typeof WebAssembly.Exception < 'u'
    ? e instanceof WebAssembly.Exception
    : !1
}
function pw(e) {
  const t = e == null ? void 0 : e.name
  return !t && ey(e)
    ? e.message && Array.isArray(e.message) && e.message.length == 2
      ? e.message[0]
      : 'WebAssembly.Exception'
    : t
}
function hw(e) {
  const t = e == null ? void 0 : e.message
  return ey(e)
    ? Array.isArray(e.message) && e.message.length == 2
      ? e.message[1]
      : 'wasm exception'
    : t
      ? t.error && typeof t.error.message == 'string'
        ? t.error.message
        : t
      : 'No error message'
}
function mw(e, t, n, r) {
  const o = (n == null ? void 0 : n.syntheticException) || void 0,
    i = Xc(e, t, o, r)
  return Wr(i), (i.level = 'error'), n != null && n.event_id && (i.event_id = n.event_id), nr(i)
}
function gw(e, t, n = 'info', r, o) {
  const i = (r == null ? void 0 : r.syntheticException) || void 0,
    s = Fl(e, t, i, o)
  return (s.level = n), r != null && r.event_id && (s.event_id = r.event_id), nr(s)
}
function Xc(e, t, n, r, o) {
  let i
  if (tg(t) && t.error) return hu(e, t.error)
  if (Rf(t) || G0(t)) {
    const s = t
    if ('stack' in t) i = hu(e, t)
    else {
      const a = s.name || (Rf(s) ? 'DOMError' : 'DOMException'),
        u = s.message ? `${a}: ${s.message}` : a
      ;(i = Fl(e, u, n, r)), Tl(i, u)
    }
    return (
      'code' in s &&
        (i.tags = {
          ...i.tags,
          'DOMException.code': `${s.code}`,
        }),
      i
    )
  }
  return $c(t)
    ? hu(e, t)
    : ei(t) || Ea(t)
      ? ((i = lw(e, t, n, o)),
        Wr(i, {
          synthetic: !0,
        }),
        i)
      : ((i = Fl(e, t, n, r)),
        Tl(i, `${t}`),
        Wr(i, {
          synthetic: !0,
        }),
        i)
}
function Fl(e, t, n, r) {
  const o = {}
  if (r && n) {
    const i = Jc(e, n)
    i.length &&
      (o.exception = {
        values: [
          {
            value: t,
            stacktrace: {
              frames: i,
            },
          },
        ],
      }),
      Wr(o, {
        synthetic: !0,
      })
  }
  if (jc(t)) {
    const { __sentry_template_string__: i, __sentry_template_values__: s } = t
    return (
      (o.logentry = {
        message: i,
        params: s,
      }),
      o
    )
  }
  return (o.message = t), o
}
function yw(e, { isUnhandledRejection: t }) {
  const n = nS(e),
    r = t ? 'promise rejection' : 'exception'
  return tg(e)
    ? `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\``
    : Ea(e)
      ? `Event \`${vw(e)}\` (type=${e.type}) captured as ${r}`
      : `Object captured as ${r} with keys: ${n}`
}
function vw(e) {
  try {
    const t = Object.getPrototypeOf(e)
    return t ? t.constructor.name : void 0
  } catch {}
}
function _w(e) {
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t)) {
      const n = e[t]
      if (n instanceof Error) return n
    }
}
const Sw = 5e3
class Ew extends eE {
  constructor(t) {
    const n = {
        parentSpanIsAlwaysRootSpan: !0,
        ...t,
      },
      r = Y.SENTRY_SDK_SOURCE || aw()
    Vg(n, 'browser', ['browser'], r), super(n)
    const o = this,
      { sendDefaultPii: i, _experiments: s } = o._options,
      a = s == null ? void 0 : s.enableLogs
    n.sendClientReports &&
      Y.document &&
      Y.document.addEventListener('visibilitychange', () => {
        Y.document.visibilityState === 'hidden' && (this._flushOutcomes(), a && pu(o))
      }),
      a &&
        (o.on('flush', () => {
          pu(o)
        }),
        o.on('afterCaptureLog', () => {
          o._logFlushIdleTimeout && clearTimeout(o._logFlushIdleTimeout),
            (o._logFlushIdleTimeout = setTimeout(() => {
              pu(o)
            }, Sw))
        })),
      i && (o.on('postprocessEvent', gE), o.on('beforeSendSession', yE))
  }
  eventFromException(t, n) {
    return mw(this._options.stackParser, t, n, this._options.attachStacktrace)
  }
  eventFromMessage(t, n = 'info', r) {
    return gw(this._options.stackParser, t, n, r, this._options.attachStacktrace)
  }
  _prepareEvent(t, n, r, o) {
    return (t.platform = t.platform || 'javascript'), super._prepareEvent(t, n, r, o)
  }
}
const Zc = typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__,
  ww = (e, t) => (e > t[1] ? 'poor' : e > t[0] ? 'needs-improvement' : 'good'),
  oo = (e, t, n, r) => {
    let o, i
    return (s) => {
      t.value >= 0 &&
        (s || r) &&
        ((i = t.value - (o || 0)),
        (i || o === void 0) && ((o = t.value), (t.delta = i), (t.rating = ww(t.value, n)), e(t)))
    }
  },
  W = q,
  Tw = () => `v4-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`,
  vi = (e = !0) => {
    var n, r
    const t =
      (r = (n = W.performance) == null ? void 0 : n.getEntriesByType) == null
        ? void 0
        : r.call(n, 'navigation')[0]
    if (!e || (t && t.responseStart > 0 && t.responseStart < performance.now())) return t
  },
  _i = () => {
    const e = vi()
    return (e == null ? void 0 : e.activationStart) || 0
  },
  io = (e, t) => {
    var i, s
    const n = vi()
    let r = 'navigate'
    return (
      n &&
        (((i = W.document) != null && i.prerendering) || _i() > 0
          ? (r = 'prerender')
          : (s = W.document) != null && s.wasDiscarded
            ? (r = 'restore')
            : n.type && (r = n.type.replace(/_/g, '-'))),
      {
        name: e,
        value: typeof t > 'u' ? -1 : t,
        rating: 'good',
        delta: 0,
        entries: [],
        id: Tw(),
        navigationType: r,
      }
    )
  },
  lr = (e, t, n) => {
    try {
      if (PerformanceObserver.supportedEntryTypes.includes(e)) {
        const r = new PerformanceObserver((o) => {
          Promise.resolve().then(() => {
            t(o.getEntries())
          })
        })
        return (
          r.observe(
            Object.assign(
              {
                type: e,
                buffered: !0,
              },
              n || {},
            ),
          ),
          r
        )
      }
    } catch {}
  },
  so = (e) => {
    const t = (n) => {
      var r
      ;(n.type === 'pagehide' ||
        ((r = W.document) == null ? void 0 : r.visibilityState) === 'hidden') &&
        e(n)
    }
    W.document && (addEventListener('visibilitychange', t, !0), addEventListener('pagehide', t, !0))
  },
  xa = (e) => {
    let t = !1
    return () => {
      t || (e(), (t = !0))
    }
  }
let No = -1
const kw = () => (W.document.visibilityState === 'hidden' && !W.document.prerendering ? 0 : 1 / 0),
  Xs = (e) => {
    W.document.visibilityState === 'hidden' &&
      No > -1 &&
      ((No = e.type === 'visibilitychange' ? e.timeStamp : 0), Rw())
  },
  xw = () => {
    addEventListener('visibilitychange', Xs, !0), addEventListener('prerenderingchange', Xs, !0)
  },
  Rw = () => {
    removeEventListener('visibilitychange', Xs, !0),
      removeEventListener('prerenderingchange', Xs, !0)
  },
  Ra = () => (
    W.document && No < 0 && ((No = kw()), xw()),
    {
      get firstHiddenTime() {
        return No
      },
    }
  ),
  Si = (e) => {
    var t
    ;(t = W.document) != null && t.prerendering
      ? addEventListener('prerenderingchange', () => e(), !0)
      : e()
  },
  Pw = [1800, 3e3],
  Cw = (e, t = {}) => {
    Si(() => {
      const n = Ra(),
        r = io('FCP')
      let o
      const s = lr('paint', (a) => {
        a.forEach((u) => {
          u.name === 'first-contentful-paint' &&
            (s.disconnect(),
            u.startTime < n.firstHiddenTime &&
              ((r.value = Math.max(u.startTime - _i(), 0)), r.entries.push(u), o(!0)))
        })
      })
      s && (o = oo(e, r, Pw, t.reportAllChanges))
    })
  },
  Iw = [0.1, 0.25],
  Lw = (e, t = {}) => {
    Cw(
      xa(() => {
        const n = io('CLS', 0)
        let r,
          o = 0,
          i = []
        const s = (u) => {
            u.forEach((l) => {
              if (!l.hadRecentInput) {
                const d = i[0],
                  f = i[i.length - 1]
                o && d && f && l.startTime - f.startTime < 1e3 && l.startTime - d.startTime < 5e3
                  ? ((o += l.value), i.push(l))
                  : ((o = l.value), (i = [l]))
              }
            }),
              o > n.value && ((n.value = o), (n.entries = i), r())
          },
          a = lr('layout-shift', s)
        a &&
          ((r = oo(e, n, Iw, t.reportAllChanges)),
          so(() => {
            s(a.takeRecords()), r(!0)
          }),
          setTimeout(r, 0))
      }),
    )
  },
  Ow = [100, 300],
  Nw = (e, t = {}) => {
    Si(() => {
      const n = Ra(),
        r = io('FID')
      let o
      const i = (u) => {
          u.startTime < n.firstHiddenTime &&
            ((r.value = u.processingStart - u.startTime), r.entries.push(u), o(!0))
        },
        s = (u) => {
          u.forEach(i)
        },
        a = lr('first-input', s)
      ;(o = oo(e, r, Ow, t.reportAllChanges)),
        a &&
          so(
            xa(() => {
              s(a.takeRecords()), a.disconnect()
            }),
          )
    })
  }
let ty = 0,
  mu = 1 / 0,
  Ki = 0
const Aw = (e) => {
  e.forEach((t) => {
    t.interactionId &&
      ((mu = Math.min(mu, t.interactionId)),
      (Ki = Math.max(Ki, t.interactionId)),
      (ty = Ki ? (Ki - mu) / 7 + 1 : 0))
  })
}
let $l
const Dw = () => ($l ? ty : performance.interactionCount || 0),
  Mw = () => {
    'interactionCount' in performance ||
      $l ||
      ($l = lr('event', Aw, {
        type: 'event',
        buffered: !0,
        durationThreshold: 0,
      }))
  },
  jt = [],
  gu = new Map(),
  bw = 40
let Fw = 0
const $w = () => Dw() - Fw,
  jw = () => {
    const e = Math.min(jt.length - 1, Math.floor($w() / 50))
    return jt[e]
  },
  yu = 10,
  zw = [],
  Uw = (e) => {
    var r
    if ((zw.forEach((o) => o(e)), !(e.interactionId || e.entryType === 'first-input'))) return
    const t = jt[jt.length - 1],
      n = gu.get(e.interactionId)
    if (n || jt.length < yu || (t && e.duration > t.latency)) {
      if (n)
        e.duration > n.latency
          ? ((n.entries = [e]), (n.latency = e.duration))
          : e.duration === n.latency &&
            e.startTime === ((r = n.entries[0]) == null ? void 0 : r.startTime) &&
            n.entries.push(e)
      else {
        const o = {
          id: e.interactionId,
          latency: e.duration,
          entries: [e],
        }
        gu.set(o.id, o), jt.push(o)
      }
      jt.sort((o, i) => i.latency - o.latency),
        jt.length > yu && jt.splice(yu).forEach((o) => gu.delete(o.id))
    }
  },
  ny = (e) => {
    var r
    const t = W.requestIdleCallback || W.setTimeout
    let n = -1
    return (
      (e = xa(e)),
      ((r = W.document) == null ? void 0 : r.visibilityState) === 'hidden'
        ? e()
        : ((n = t(e)), so(e)),
      n
    )
  },
  Bw = [200, 500],
  Hw = (e, t = {}) => {
    'PerformanceEventTiming' in W &&
      'interactionId' in PerformanceEventTiming.prototype &&
      Si(() => {
        Mw()
        const n = io('INP')
        let r
        const o = (s) => {
            ny(() => {
              s.forEach(Uw)
              const a = jw()
              a && a.latency !== n.value && ((n.value = a.latency), (n.entries = a.entries), r())
            })
          },
          i = lr('event', o, {
            durationThreshold: t.durationThreshold != null ? t.durationThreshold : bw,
          })
        ;(r = oo(e, n, Bw, t.reportAllChanges)),
          i &&
            (i.observe({
              type: 'first-input',
              buffered: !0,
            }),
            so(() => {
              o(i.takeRecords()), r(!0)
            }))
      })
  },
  Vw = [2500, 4e3],
  dp = {},
  Ww = (e, t = {}) => {
    Si(() => {
      const n = Ra(),
        r = io('LCP')
      let o
      const i = (a) => {
          t.reportAllChanges || (a = a.slice(-1)),
            a.forEach((u) => {
              u.startTime < n.firstHiddenTime &&
                ((r.value = Math.max(u.startTime - _i(), 0)), (r.entries = [u]), o())
            })
        },
        s = lr('largest-contentful-paint', i)
      if (s) {
        o = oo(e, r, Vw, t.reportAllChanges)
        const a = xa(() => {
          dp[r.id] || (i(s.takeRecords()), s.disconnect(), (dp[r.id] = !0), o(!0))
        })
        ;['keydown', 'click'].forEach((u) => {
          W.document &&
            addEventListener(u, () => ny(a), {
              once: !0,
              capture: !0,
            })
        }),
          so(a)
      }
    })
  },
  Kw = [800, 1800],
  jl = (e) => {
    var t, n
    ;(t = W.document) != null && t.prerendering
      ? Si(() => jl(e))
      : ((n = W.document) == null ? void 0 : n.readyState) !== 'complete'
        ? addEventListener('load', () => jl(e), !0)
        : setTimeout(e, 0)
  },
  Gw = (e, t = {}) => {
    const n = io('TTFB'),
      r = oo(e, n, Kw, t.reportAllChanges)
    jl(() => {
      const o = vi()
      o && ((n.value = Math.max(o.responseStart - _i(), 0)), (n.entries = [o]), r(!0))
    })
  },
  Ao = {},
  Zs = {}
let ry, oy, iy, sy, ay
function uy(e, t = !1) {
  return Ei('cls', e, Xw, ry, t)
}
function Yw(e, t = !1) {
  return Ei('lcp', e, eT, iy, t)
}
function qw(e) {
  return Ei('fid', e, Zw, oy)
}
function Qw(e) {
  return Ei('ttfb', e, tT, sy)
}
function Jw(e) {
  return Ei('inp', e, nT, ay)
}
function oi(e, t) {
  return ly(e, t), Zs[e] || (rT(e), (Zs[e] = !0)), cy(e, t)
}
function ao(e, t) {
  const n = Ao[e]
  if (n != null && n.length)
    for (const r of n)
      try {
        r(t)
      } catch (o) {
        Zc &&
          C.error(
            `Error while triggering instrumentation handler.
Type: ${e}
Name: ${Xt(r)}
Error:`,
            o,
          )
      }
}
function Xw() {
  return Lw(
    (e) => {
      ao('cls', {
        metric: e,
      }),
        (ry = e)
    },
    {
      reportAllChanges: !0,
    },
  )
}
function Zw() {
  return Nw((e) => {
    ao('fid', {
      metric: e,
    }),
      (oy = e)
  })
}
function eT() {
  return Ww(
    (e) => {
      ao('lcp', {
        metric: e,
      }),
        (iy = e)
    },
    {
      reportAllChanges: !0,
    },
  )
}
function tT() {
  return Gw((e) => {
    ao('ttfb', {
      metric: e,
    }),
      (sy = e)
  })
}
function nT() {
  return Hw((e) => {
    ao('inp', {
      metric: e,
    }),
      (ay = e)
  })
}
function Ei(e, t, n, r, o = !1) {
  ly(e, t)
  let i
  return (
    Zs[e] || ((i = n()), (Zs[e] = !0)),
    r &&
      t({
        metric: r,
      }),
    cy(e, t, o ? i : void 0)
  )
}
function rT(e) {
  const t = {}
  e === 'event' && (t.durationThreshold = 0),
    lr(
      e,
      (n) => {
        ao(e, {
          entries: n,
        })
      },
      t,
    )
}
function ly(e, t) {
  ;(Ao[e] = Ao[e] || []), Ao[e].push(t)
}
function cy(e, t, n) {
  return () => {
    n && n()
    const r = Ao[e]
    if (!r) return
    const o = r.indexOf(t)
    o !== -1 && r.splice(o, 1)
  }
}
function oT(e) {
  return 'duration' in e
}
function vu(e) {
  return typeof e == 'number' && isFinite(e)
}
function Zt(e, t, n, { ...r }) {
  const o = Z(e).start_timestamp
  return (
    o && o > t && typeof e.updateStartTime == 'function' && e.updateStartTime(t),
    Ng(e, () => {
      const i = yi({
        startTime: t,
        ...r,
      })
      return i && i.end(n), i
    })
  )
}
function dy(e) {
  var S
  const t = X()
  if (!t) return
  const { name: n, transaction: r, attributes: o, startTime: i } = e,
    { release: s, environment: a, sendDefaultPii: u } = t.getOptions(),
    l = t.getIntegrationByName('Replay'),
    d = l == null ? void 0 : l.getReplayId(),
    f = oe(),
    c = f.getUser(),
    p = c !== void 0 ? c.email || c.id || c.ip_address : void 0
  let g
  try {
    g = f.getScopeData().contexts.profile.profile_id
  } catch {}
  const v = {
    release: s,
    environment: a,
    user: p || void 0,
    profile_id: g || void 0,
    replay_id: d || void 0,
    transaction: r,
    'user_agent.original': (S = W.navigator) == null ? void 0 : S.userAgent,
    'client.address': u ? '{{auto}}' : void 0,
    ...o,
  }
  return yi({
    name: n,
    attributes: v,
    startTime: i,
    experimental: {
      standalone: !0,
    },
  })
}
function ed() {
  return W.addEventListener && W.performance
}
function de(e) {
  return e / 1e3
}
function fy(e) {
  let t = 'unknown',
    n = 'unknown',
    r = ''
  for (const o of e) {
    if (o === '/') {
      ;[t, n] = e.split('/')
      break
    }
    if (!isNaN(Number(o))) {
      ;(t = r === 'h' ? 'http' : r), (n = e.split(r)[1])
      break
    }
    r += o
  }
  return (
    r === e && (t = r),
    {
      name: t,
      version: n,
    }
  )
}
function iT() {
  let e = 0,
    t,
    n
  if (!aT()) return
  let r = !1
  function o() {
    r || ((r = !0), n && sT(e, t, n), i())
  }
  const i = uy(({ metric: s }) => {
    const a = s.entries[s.entries.length - 1]
    a && ((e = s.value), (t = a))
  }, !0)
  so(() => {
    o()
  }),
    setTimeout(() => {
      const s = X()
      if (!s) return
      const a = s.on('startNavigationSpan', () => {
          o(), a == null || a()
        }),
        u = it()
      if (u) {
        const l = Me(u)
        Z(l).op === 'pageload' && (n = l.spanContext().spanId)
      }
    }, 0)
}
function sT(e, t, n) {
  var u
  Zc && C.log(`Sending CLS span (${e})`)
  const r = de((mt() || 0) + ((t == null ? void 0 : t.startTime) || 0)),
    o = oe().getScopeData().transactionName,
    i = t ? Xn((u = t.sources[0]) == null ? void 0 : u.node) : 'Layout shift',
    s = {
      [Se]: 'auto.http.browser.cls',
      [Zn]: 'ui.webvital.cls',
      [mi]: (t == null ? void 0 : t.duration) || 0,
      'sentry.pageload.span_id': n,
    },
    a = dy({
      name: i,
      transaction: o,
      attributes: s,
      startTime: r,
    })
  a &&
    (a.addEvent('cls', {
      [Ta]: '',
      [ka]: e,
    }),
    a.end(r))
}
function aT() {
  try {
    return PerformanceObserver.supportedEntryTypes.includes('layout-shift')
  } catch {
    return !1
  }
}
const uT = 2147483647
let fp = 0,
  we = {},
  Ue,
  Cr
function lT({ recordClsStandaloneSpans: e }) {
  const t = ed()
  if (t && mt()) {
    t.mark && W.performance.mark('sentry-tracing-init')
    const n = mT(),
      r = hT(),
      o = gT(),
      i = e ? iT() : pT()
    return () => {
      n(), r(), o(), i == null || i()
    }
  }
  return () => {}
}
function cT() {
  oi('longtask', ({ entries: e }) => {
    const t = it()
    if (!t) return
    const { op: n, start_timestamp: r } = Z(t)
    for (const o of e) {
      const i = de(mt() + o.startTime),
        s = de(o.duration)
      ;(n === 'navigation' && r && i < r) ||
        Zt(t, i, i + s, {
          name: 'Main UI thread blocked',
          op: 'ui.long-task',
          attributes: {
            [Se]: 'auto.ui.browser.metrics',
          },
        })
    }
  })
}
function dT() {
  new PerformanceObserver((t) => {
    const n = it()
    if (n)
      for (const r of t.getEntries()) {
        if (!r.scripts[0]) continue
        const o = de(mt() + r.startTime),
          { start_timestamp: i, op: s } = Z(n)
        if (s === 'navigation' && i && o < i) continue
        const a = de(r.duration),
          u = {
            [Se]: 'auto.ui.browser.metrics',
          },
          l = r.scripts[0],
          {
            invoker: d,
            invokerType: f,
            sourceURL: c,
            sourceFunctionName: p,
            sourceCharPosition: g,
          } = l
        ;(u['browser.script.invoker'] = d),
          (u['browser.script.invoker_type'] = f),
          c && (u['code.filepath'] = c),
          p && (u['code.function'] = p),
          g !== -1 && (u['browser.script.source_char_position'] = g),
          Zt(n, o, o + a, {
            name: 'Main UI thread blocked',
            op: 'ui.long-animation-frame',
            attributes: u,
          })
      }
  }).observe({
    type: 'long-animation-frame',
    buffered: !0,
  })
}
function fT() {
  oi('event', ({ entries: e }) => {
    const t = it()
    if (t) {
      for (const n of e)
        if (n.name === 'click') {
          const r = de(mt() + n.startTime),
            o = de(n.duration),
            i = {
              name: Xn(n.target),
              op: `ui.interaction.${n.name}`,
              startTime: r,
              attributes: {
                [Se]: 'auto.ui.browser.metrics',
              },
            },
            s = og(n.target)
          s && (i.attributes['ui.component_name'] = s), Zt(t, r, r + o, i)
        }
    }
  })
}
function pT() {
  return uy(({ metric: e }) => {
    const t = e.entries[e.entries.length - 1]
    t &&
      ((we.cls = {
        value: e.value,
        unit: '',
      }),
      (Cr = t))
  }, !0)
}
function hT() {
  return Yw(({ metric: e }) => {
    const t = e.entries[e.entries.length - 1]
    t &&
      ((we.lcp = {
        value: e.value,
        unit: 'millisecond',
      }),
      (Ue = t))
  }, !0)
}
function mT() {
  return qw(({ metric: e }) => {
    const t = e.entries[e.entries.length - 1]
    if (!t) return
    const n = de(mt()),
      r = de(t.startTime)
    ;(we.fid = {
      value: e.value,
      unit: 'millisecond',
    }),
      (we['mark.fid'] = {
        value: n + r,
        unit: 'second',
      })
  })
}
function gT() {
  return Qw(({ metric: e }) => {
    e.entries[e.entries.length - 1] &&
      (we.ttfb = {
        value: e.value,
        unit: 'millisecond',
      })
  })
}
function yT(e, t) {
  const n = ed(),
    r = mt()
  if (!(n != null && n.getEntries) || !r) return
  const o = de(r),
    i = n.getEntries(),
    { op: s, start_timestamp: a } = Z(e)
  if (
    (i.slice(fp).forEach((u) => {
      const l = de(u.startTime),
        d = de(Math.max(0, u.duration))
      if (!(s === 'navigation' && a && o + l < a))
        switch (u.entryType) {
          case 'navigation': {
            _T(e, u, o)
            break
          }
          case 'mark':
          case 'paint':
          case 'measure': {
            vT(e, u, l, d, o)
            const f = Ra(),
              c = u.startTime < f.firstHiddenTime
            u.name === 'first-paint' &&
              c &&
              (we.fp = {
                value: u.startTime,
                unit: 'millisecond',
              }),
              u.name === 'first-contentful-paint' &&
                c &&
                (we.fcp = {
                  value: u.startTime,
                  unit: 'millisecond',
                })
            break
          }
          case 'resource': {
            wT(e, u, u.name, l, d, o)
            break
          }
        }
    }),
    (fp = Math.max(i.length - 1, 0)),
    TT(e),
    s === 'pageload')
  ) {
    xT(we)
    const u = we['mark.fid']
    u &&
      we.fid &&
      (Zt(e, u.value, u.value + de(we.fid.value), {
        name: 'first input delay',
        op: 'ui.action',
        attributes: {
          [Se]: 'auto.ui.browser.metrics',
        },
      }),
      delete we['mark.fid']),
      (!('fcp' in we) || !t.recordClsOnPageloadSpan) && delete we.cls,
      Object.entries(we).forEach(([l, d]) => {
        h1(l, d.value, d.unit)
      }),
      e.setAttribute('performance.timeOrigin', o),
      e.setAttribute('performance.activationStart', _i()),
      kT(e)
  }
  ;(Ue = void 0), (Cr = void 0), (we = {})
}
function vT(e, t, n, r, o) {
  const i = vi(!1),
    s = de(i ? i.requestStart : 0),
    a = o + Math.max(n, s),
    u = o + n,
    l = u + r,
    d = {
      [Se]: 'auto.resource.browser.metrics',
    }
  a !== u &&
    ((d['sentry.browser.measure_happened_before_request'] = !0),
    (d['sentry.browser.measure_start_time'] = a)),
    a <= l &&
      Zt(e, a, l, {
        name: t.name,
        op: t.entryType,
        attributes: d,
      })
}
function _T(e, t, n) {
  ;['unloadEvent', 'redirect', 'domContentLoadedEvent', 'loadEvent', 'connect'].forEach((r) => {
    Gi(e, t, r, n)
  }),
    Gi(e, t, 'secureConnection', n, 'TLS/SSL'),
    Gi(e, t, 'fetch', n, 'cache'),
    Gi(e, t, 'domainLookup', n, 'DNS'),
    ET(e, t, n)
}
function Gi(e, t, n, r, o = n) {
  const i = ST(n),
    s = t[i],
    a = t[`${n}Start`]
  !a ||
    !s ||
    Zt(e, r + de(a), r + de(s), {
      op: `browser.${o}`,
      name: t.name,
      attributes: {
        [Se]: 'auto.ui.browser.metrics',
        ...(n === 'redirect' && t.redirectCount != null
          ? {
              'http.redirect_count': t.redirectCount,
            }
          : {}),
      },
    })
}
function ST(e) {
  return e === 'secureConnection' ? 'connectEnd' : e === 'fetch' ? 'domainLookupStart' : `${e}End`
}
function ET(e, t, n) {
  const r = n + de(t.requestStart),
    o = n + de(t.responseEnd),
    i = n + de(t.responseStart)
  t.responseEnd &&
    (Zt(e, r, o, {
      op: 'browser.request',
      name: t.name,
      attributes: {
        [Se]: 'auto.ui.browser.metrics',
      },
    }),
    Zt(e, i, o, {
      op: 'browser.response',
      name: t.name,
      attributes: {
        [Se]: 'auto.ui.browser.metrics',
      },
    }))
}
function wT(e, t, n, r, o, i) {
  if (t.initiatorType === 'xmlhttprequest' || t.initiatorType === 'fetch') return
  const s = Kn(n),
    a = {
      [Se]: 'auto.resource.browser.metrics',
    }
  _u(a, t, 'transferSize', 'http.response_transfer_size'),
    _u(a, t, 'encodedBodySize', 'http.response_content_length'),
    _u(a, t, 'decodedBodySize', 'http.decoded_response_content_length')
  const u = t.deliveryType
  u != null && (a['http.response_delivery_type'] = u)
  const l = t.renderBlockingStatus
  l && (a['resource.render_blocking_status'] = l),
    s.protocol && (a['url.scheme'] = s.protocol.split(':').pop()),
    s.host && (a['server.address'] = s.host),
    (a['url.same_origin'] = n.includes(W.location.origin))
  const { name: d, version: f } = fy(t.nextHopProtocol)
  ;(a['network.protocol.name'] = d), (a['network.protocol.version'] = f)
  const c = i + r,
    p = c + o
  Zt(e, c, p, {
    name: n.replace(W.location.origin, ''),
    op: t.initiatorType ? `resource.${t.initiatorType}` : 'resource.other',
    attributes: a,
  })
}
function TT(e) {
  const t = W.navigator
  if (!t) return
  const n = t.connection
  n &&
    (n.effectiveType && e.setAttribute('effectiveConnectionType', n.effectiveType),
    n.type && e.setAttribute('connectionType', n.type),
    vu(n.rtt) &&
      (we['connection.rtt'] = {
        value: n.rtt,
        unit: 'millisecond',
      })),
    vu(t.deviceMemory) && e.setAttribute('deviceMemory', `${t.deviceMemory} GB`),
    vu(t.hardwareConcurrency) &&
      e.setAttribute('hardwareConcurrency', String(t.hardwareConcurrency))
}
function kT(e) {
  Ue &&
    (Ue.element && e.setAttribute('lcp.element', Xn(Ue.element)),
    Ue.id && e.setAttribute('lcp.id', Ue.id),
    Ue.url && e.setAttribute('lcp.url', Ue.url.trim().slice(0, 200)),
    Ue.loadTime != null && e.setAttribute('lcp.loadTime', Ue.loadTime),
    Ue.renderTime != null && e.setAttribute('lcp.renderTime', Ue.renderTime),
    e.setAttribute('lcp.size', Ue.size)),
    Cr != null &&
      Cr.sources &&
      Cr.sources.forEach((t, n) => e.setAttribute(`cls.source.${n + 1}`, Xn(t.node)))
}
function _u(e, t, n, r) {
  const o = t[n]
  o != null && o < uT && (e[r] = o)
}
function xT(e) {
  const t = vi(!1)
  if (!t) return
  const { responseStart: n, requestStart: r } = t
  r <= n &&
    (e['ttfb.requestTime'] = {
      value: n - r,
      unit: 'millisecond',
    })
}
const RT = 1e3
let pp, zl, Ul
function PT(e) {
  const t = 'dom'
  In(t, e), Ln(t, CT)
}
function CT() {
  if (!W.document) return
  const e = ft.bind(null, 'dom'),
    t = hp(e, !0)
  W.document.addEventListener('click', t, !1),
    W.document.addEventListener('keypress', t, !1),
    ['EventTarget', 'Node'].forEach((n) => {
      var i, s
      const o = (i = W[n]) == null ? void 0 : i.prototype
      ;(s = o == null ? void 0 : o.hasOwnProperty) != null &&
        s.call(o, 'addEventListener') &&
        (Xe(o, 'addEventListener', function (a) {
          return function (u, l, d) {
            if (u === 'click' || u == 'keypress')
              try {
                const f = (this.__sentry_instrumentation_handlers__ =
                    this.__sentry_instrumentation_handlers__ || {}),
                  c = (f[u] = f[u] || {
                    refCount: 0,
                  })
                if (!c.handler) {
                  const p = hp(e)
                  ;(c.handler = p), a.call(this, u, p, d)
                }
                c.refCount++
              } catch {}
            return a.call(this, u, l, d)
          }
        }),
        Xe(o, 'removeEventListener', function (a) {
          return function (u, l, d) {
            if (u === 'click' || u == 'keypress')
              try {
                const f = this.__sentry_instrumentation_handlers__ || {},
                  c = f[u]
                c &&
                  (c.refCount--,
                  c.refCount <= 0 &&
                    (a.call(this, u, c.handler, d), (c.handler = void 0), delete f[u]),
                  Object.keys(f).length === 0 && delete this.__sentry_instrumentation_handlers__)
              } catch {}
            return a.call(this, u, l, d)
          }
        }))
    })
}
function IT(e) {
  if (e.type !== zl) return !1
  try {
    if (!e.target || e.target._sentryId !== Ul) return !1
  } catch {}
  return !0
}
function LT(e, t) {
  return e !== 'keypress'
    ? !1
    : t != null && t.tagName
      ? !(t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)
      : !0
}
function hp(e, t = !1) {
  return (n) => {
    if (!n || n._sentryCaptured) return
    const r = OT(n)
    if (LT(n.type, r)) return
    nt(n, '_sentryCaptured', !0), r && !r._sentryId && nt(r, '_sentryId', dt())
    const o = n.type === 'keypress' ? 'input' : n.type
    IT(n) ||
      (e({
        event: n,
        name: o,
        global: t,
      }),
      (zl = n.type),
      (Ul = r ? r._sentryId : void 0)),
      clearTimeout(pp),
      (pp = W.setTimeout(() => {
        ;(Ul = void 0), (zl = void 0)
      }, RT))
  }
}
function OT(e) {
  try {
    return e.target
  } catch {
    return null
  }
}
let Yi
function td(e) {
  const t = 'history'
  In(t, e), Ln(t, NT)
}
function NT() {
  if (
    (W.addEventListener('popstate', () => {
      const t = W.location.href,
        n = Yi
      if (((Yi = t), n === t)) return
      ft('history', {
        from: n,
        to: t,
      })
    }),
    !ZE())
  )
    return
  function e(t) {
    return function (...n) {
      const r = n.length > 2 ? n[2] : void 0
      if (r) {
        const o = Yi,
          i = AT(String(r))
        if (((Yi = i), o === i)) return t.apply(this, n)
        ft('history', {
          from: o,
          to: i,
        })
      }
      return t.apply(this, n)
    }
  }
  Xe(W.history, 'pushState', e), Xe(W.history, 'replaceState', e)
}
function AT(e) {
  try {
    return new URL(e, W.location.origin).toString()
  } catch {
    return e
  }
}
const hs = {}
function DT(e) {
  const t = hs[e]
  if (t) return t
  let n = W[e]
  if (Al(n)) return (hs[e] = n.bind(W))
  const r = W.document
  if (r && typeof r.createElement == 'function')
    try {
      const o = r.createElement('iframe')
      ;(o.hidden = !0), r.head.appendChild(o)
      const i = o.contentWindow
      i != null && i[e] && (n = i[e]), r.head.removeChild(o)
    } catch (o) {
      Zc && C.warn(`Could not create sandbox iframe for ${e} check, bailing to window.${e}: `, o)
    }
  return n && (hs[e] = n.bind(W))
}
function mp(e) {
  hs[e] = void 0
}
const Ir = '__sentry_xhr_v3__'
function py(e) {
  const t = 'xhr'
  In(t, e), Ln(t, MT)
}
function MT() {
  if (!W.XMLHttpRequest) return
  const e = XMLHttpRequest.prototype
  ;(e.open = new Proxy(e.open, {
    apply(t, n, r) {
      const o = new Error(),
        i = De() * 1e3,
        s = Wt(r[0]) ? r[0].toUpperCase() : void 0,
        a = bT(r[1])
      if (!s || !a) return t.apply(n, r)
      ;(n[Ir] = {
        method: s,
        url: a,
        request_headers: {},
      }),
        s === 'POST' && a.match(/sentry_key/) && (n.__sentry_own_request__ = !0)
      const u = () => {
        const l = n[Ir]
        if (l && n.readyState === 4) {
          try {
            l.status_code = n.status
          } catch {}
          const d = {
            endTimestamp: De() * 1e3,
            startTimestamp: i,
            xhr: n,
            virtualError: o,
          }
          ft('xhr', d)
        }
      }
      return (
        'onreadystatechange' in n && typeof n.onreadystatechange == 'function'
          ? (n.onreadystatechange = new Proxy(n.onreadystatechange, {
              apply(l, d, f) {
                return u(), l.apply(d, f)
              },
            }))
          : n.addEventListener('readystatechange', u),
        (n.setRequestHeader = new Proxy(n.setRequestHeader, {
          apply(l, d, f) {
            const [c, p] = f,
              g = d[Ir]
            return g && Wt(c) && Wt(p) && (g.request_headers[c.toLowerCase()] = p), l.apply(d, f)
          },
        })),
        t.apply(n, r)
      )
    },
  })),
    (e.send = new Proxy(e.send, {
      apply(t, n, r) {
        const o = n[Ir]
        if (!o) return t.apply(n, r)
        r[0] !== void 0 && (o.body = r[0])
        const i = {
          startTimestamp: De() * 1e3,
          xhr: n,
        }
        return ft('xhr', i), t.apply(n, r)
      },
    }))
}
function bT(e) {
  if (Wt(e)) return e
  try {
    return e.toString()
  } catch {}
}
const Su = [],
  ms = new Map()
function FT() {
  if (ed() && mt()) {
    const t = $T()
    return () => {
      t()
    }
  }
  return () => {}
}
const gp = {
  click: 'click',
  pointerdown: 'click',
  pointerup: 'click',
  mousedown: 'click',
  mouseup: 'click',
  touchstart: 'click',
  touchend: 'click',
  mouseover: 'hover',
  mouseout: 'hover',
  mouseenter: 'hover',
  mouseleave: 'hover',
  pointerover: 'hover',
  pointerout: 'hover',
  pointerenter: 'hover',
  pointerleave: 'hover',
  dragstart: 'drag',
  dragend: 'drag',
  drag: 'drag',
  dragenter: 'drag',
  dragleave: 'drag',
  dragover: 'drag',
  drop: 'drag',
  keydown: 'press',
  keyup: 'press',
  keypress: 'press',
  input: 'press',
}
function $T() {
  return Jw(({ metric: e }) => {
    if (e.value == null) return
    const t = e.entries.find((g) => g.duration === e.value && gp[g.name])
    if (!t) return
    const { interactionId: n } = t,
      r = gp[t.name],
      o = de(mt() + t.startTime),
      i = de(e.value),
      s = it(),
      a = s ? Me(s) : void 0,
      l = (n != null ? ms.get(n) : void 0) || a,
      d = l ? Z(l).description : oe().getScopeData().transactionName,
      f = Xn(t.target),
      c = {
        [Se]: 'auto.http.browser.inp',
        [Zn]: `ui.interaction.${r}`,
        [mi]: t.duration,
      },
      p = dy({
        name: f,
        transaction: d,
        attributes: c,
        startTime: o,
      })
    p &&
      (p.addEvent('inp', {
        [Ta]: 'millisecond',
        [ka]: e.value,
      }),
      p.end(o + i))
  })
}
function jT() {
  const e = ({ entries: t }) => {
    const n = it(),
      r = n && Me(n)
    t.forEach((o) => {
      if (!oT(o) || !r) return
      const i = o.interactionId
      if (i != null && !ms.has(i)) {
        if (Su.length > 10) {
          const s = Su.shift()
          ms.delete(s)
        }
        Su.push(i), ms.set(i, r)
      }
    })
  }
  oi('event', e), oi('first-input', e)
}
function zT(e, t = DT('fetch')) {
  let n = 0,
    r = 0
  function o(i) {
    const s = i.body.length
    ;(n += s), r++
    const a = {
      body: i.body,
      method: 'POST',
      referrerPolicy: 'strict-origin',
      headers: e.headers,
      keepalive: n <= 6e4 && r < 15,
      ...e.fetchOptions,
    }
    if (!t) return mp('fetch'), Qs('No fetch implementation available')
    try {
      return t(e.url, a).then(
        (u) => (
          (n -= s),
          r--,
          {
            statusCode: u.status,
            headers: {
              'x-sentry-rate-limits': u.headers.get('X-Sentry-Rate-Limits'),
              'retry-after': u.headers.get('Retry-After'),
            },
          }
        ),
      )
    } catch (u) {
      return mp('fetch'), (n -= s), r--, Qs(u)
    }
  }
  return mE(e, o)
}
const UT = 30,
  BT = 50
function Bl(e, t, n, r) {
  const o = {
    filename: e,
    function: t === '<anonymous>' ? er : t,
    in_app: !0,
  }
  return n !== void 0 && (o.lineno = n), r !== void 0 && (o.colno = r), o
}
const HT = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
  VT =
    /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
  WT = /\((\S*)(?::(\d+))(?::(\d+))\)/,
  KT = (e) => {
    const t = HT.exec(e)
    if (t) {
      const [, r, o, i] = t
      return Bl(r, er, +o, +i)
    }
    const n = VT.exec(e)
    if (n) {
      if (n[2] && n[2].indexOf('eval') === 0) {
        const s = WT.exec(n[2])
        s && ((n[2] = s[1]), (n[3] = s[2]), (n[4] = s[3]))
      }
      const [o, i] = hy(n[1] || er, n[2])
      return Bl(i, o, n[3] ? +n[3] : void 0, n[4] ? +n[4] : void 0)
    }
  },
  GT = [UT, KT],
  YT =
    /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
  qT = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
  QT = (e) => {
    const t = YT.exec(e)
    if (t) {
      if (t[3] && t[3].indexOf(' > eval') > -1) {
        const i = qT.exec(t[3])
        i && ((t[1] = t[1] || 'eval'), (t[3] = i[1]), (t[4] = i[2]), (t[5] = ''))
      }
      let r = t[3],
        o = t[1] || er
      return ([o, r] = hy(o, r)), Bl(r, o, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
    }
  },
  JT = [BT, QT],
  XT = [GT, JT],
  ZT = wg(...XT),
  hy = (e, t) => {
    const n = e.indexOf('safari-extension') !== -1,
      r = e.indexOf('safari-web-extension') !== -1
    return n || r
      ? [
          e.indexOf('@') !== -1 ? e.split('@')[0] : er,
          n ? `safari-extension:${t}` : `safari-web-extension:${t}`,
        ]
      : [e, t]
  },
  kt = typeof __SENTRY_DEBUG__ > 'u' || __SENTRY_DEBUG__,
  qi = 1024,
  ek = 'Breadcrumbs',
  tk = (e = {}) => {
    const t = {
      console: !0,
      dom: !0,
      fetch: !0,
      history: !0,
      sentry: !0,
      xhr: !0,
      ...e,
    }
    return {
      name: ek,
      setup(n) {
        t.console && ME(ik(n)),
          t.dom && PT(ok(n, t.dom)),
          t.xhr && py(sk(n)),
          t.fetch && Jg(ak(n)),
          t.history && td(uk(n)),
          t.sentry && n.on('beforeSendEvent', rk(n))
      },
    }
  },
  nk = tk
function rk(e) {
  return function (n) {
    X() === e &&
      rr(
        {
          category: `sentry.${n.type === 'transaction' ? 'transaction' : 'event'}`,
          event_id: n.event_id,
          level: n.level,
          message: Mn(n),
        },
        {
          event: n,
        },
      )
  }
}
function ok(e, t) {
  return function (r) {
    if (X() !== e) return
    let o,
      i,
      s = typeof t == 'object' ? t.serializeAttribute : void 0,
      a = typeof t == 'object' && typeof t.maxStringLength == 'number' ? t.maxStringLength : void 0
    a &&
      a > qi &&
      (kt &&
        C.warn(
          `\`dom.maxStringLength\` cannot exceed ${qi}, but a value of ${a} was configured. Sentry will use ${qi} instead.`,
        ),
      (a = qi)),
      typeof s == 'string' && (s = [s])
    try {
      const l = r.event,
        d = lk(l) ? l.target : l
      ;(o = Xn(d, {
        keyAttrs: s,
        maxStringLength: a,
      })),
        (i = og(d))
    } catch {
      o = '<unknown>'
    }
    if (o.length === 0) return
    const u = {
      category: `ui.${r.name}`,
      message: o,
    }
    i &&
      (u.data = {
        'ui.component_name': i,
      }),
      rr(u, {
        event: r.event,
        name: r.name,
        global: r.global,
      })
  }
}
function ik(e) {
  return function (n) {
    if (X() !== e) return
    const r = {
      category: 'console',
      data: {
        arguments: n.args,
        logger: 'console',
      },
      level: FE(n.level),
      message: Pf(n.args, ' '),
    }
    if (n.level === 'assert')
      if (n.args[0] === !1)
        (r.message = `Assertion failed: ${Pf(n.args.slice(1), ' ') || 'console.assert'}`),
          (r.data.arguments = n.args.slice(1))
      else return
    rr(r, {
      input: n.args,
      level: n.level,
    })
  }
}
function sk(e) {
  return function (n) {
    if (X() !== e) return
    const { startTimestamp: r, endTimestamp: o } = n,
      i = n.xhr[Ir]
    if (!r || !o || !i) return
    const { method: s, url: a, status_code: u, body: l } = i,
      d = {
        method: s,
        url: a,
        status_code: u,
      },
      f = {
        xhr: n.xhr,
        input: l,
        startTimestamp: r,
        endTimestamp: o,
      },
      c = {
        category: 'xhr',
        data: d,
        type: 'http',
        level: Qg(u),
      }
    e.emit('beforeOutgoingRequestBreadcrumb', c, f), rr(c, f)
  }
}
function ak(e) {
  return function (n) {
    if (X() !== e) return
    const { startTimestamp: r, endTimestamp: o } = n
    if (o && !(n.fetchData.url.match(/sentry_key/) && n.fetchData.method === 'POST'))
      if ((n.fetchData.method, n.fetchData.url, n.error)) {
        const i = n.fetchData,
          s = {
            data: n.error,
            input: n.args,
            startTimestamp: r,
            endTimestamp: o,
          },
          a = {
            category: 'fetch',
            data: i,
            level: 'error',
            type: 'http',
          }
        e.emit('beforeOutgoingRequestBreadcrumb', a, s), rr(a, s)
      } else {
        const i = n.response,
          s = {
            ...n.fetchData,
            status_code: i == null ? void 0 : i.status,
          }
        n.fetchData.request_body_size, n.fetchData.response_body_size, i == null || i.status
        const a = {
            input: n.args,
            response: i,
            startTimestamp: r,
            endTimestamp: o,
          },
          u = {
            category: 'fetch',
            data: s,
            type: 'http',
            level: Qg(s.status_code),
          }
        e.emit('beforeOutgoingRequestBreadcrumb', u, a), rr(u, a)
      }
  }
}
function uk(e) {
  return function (n) {
    if (X() !== e) return
    let r = n.from,
      o = n.to
    const i = Kn(Y.location.href)
    let s = r ? Kn(r) : void 0
    const a = Kn(o)
    ;(s != null && s.path) || (s = i),
      i.protocol === a.protocol && i.host === a.host && (o = a.relative),
      i.protocol === s.protocol && i.host === s.host && (r = s.relative),
      rr({
        category: 'navigation',
        data: {
          from: r,
          to: o,
        },
      })
  }
}
function lk(e) {
  return !!e && !!e.target
}
const ck = [
    'EventTarget',
    'Window',
    'Node',
    'ApplicationCache',
    'AudioTrackList',
    'BroadcastChannel',
    'ChannelMergerNode',
    'CryptoOperation',
    'EventSource',
    'FileReader',
    'HTMLUnknownElement',
    'IDBDatabase',
    'IDBRequest',
    'IDBTransaction',
    'KeyOperation',
    'MediaController',
    'MessagePort',
    'ModalWindow',
    'Notification',
    'SVGElementInstance',
    'Screen',
    'SharedWorker',
    'TextTrack',
    'TextTrackCue',
    'TextTrackList',
    'WebSocket',
    'WebSocketWorker',
    'Worker',
    'XMLHttpRequest',
    'XMLHttpRequestEventTarget',
    'XMLHttpRequestUpload',
  ],
  dk = 'BrowserApiErrors',
  fk = (e = {}) => {
    const t = {
      XMLHttpRequest: !0,
      eventTarget: !0,
      requestAnimationFrame: !0,
      setInterval: !0,
      setTimeout: !0,
      ...e,
    }
    return {
      name: dk,
      setupOnce() {
        t.setTimeout && Xe(Y, 'setTimeout', yp),
          t.setInterval && Xe(Y, 'setInterval', yp),
          t.requestAnimationFrame && Xe(Y, 'requestAnimationFrame', hk),
          t.XMLHttpRequest && 'XMLHttpRequest' in Y && Xe(XMLHttpRequest.prototype, 'send', mk)
        const n = t.eventTarget
        n && (Array.isArray(n) ? n : ck).forEach(gk)
      },
    }
  },
  pk = fk
function yp(e) {
  return function (...t) {
    const n = t[0]
    return (
      (t[0] = Yr(n, {
        mechanism: {
          data: {
            function: Xt(e),
          },
          handled: !1,
          type: 'instrument',
        },
      })),
      e.apply(this, t)
    )
  }
}
function hk(e) {
  return function (t) {
    return e.apply(this, [
      Yr(t, {
        mechanism: {
          data: {
            function: 'requestAnimationFrame',
            handler: Xt(e),
          },
          handled: !1,
          type: 'instrument',
        },
      }),
    ])
  }
}
function mk(e) {
  return function (...t) {
    const n = this
    return (
      ['onload', 'onerror', 'onprogress', 'onreadystatechange'].forEach((o) => {
        o in n &&
          typeof n[o] == 'function' &&
          Xe(n, o, function (i) {
            const s = {
                mechanism: {
                  data: {
                    function: o,
                    handler: Xt(i),
                  },
                  handled: !1,
                  type: 'instrument',
                },
              },
              a = Bc(i)
            return a && (s.mechanism.data.handler = Xt(a)), Yr(i, s)
          })
      }),
      e.apply(this, t)
    )
  }
}
function gk(e) {
  var r, o
  const n = (r = Y[e]) == null ? void 0 : r.prototype
  ;(o = n == null ? void 0 : n.hasOwnProperty) != null &&
    o.call(n, 'addEventListener') &&
    (Xe(n, 'addEventListener', function (i) {
      return function (s, a, u) {
        try {
          yk(a) &&
            (a.handleEvent = Yr(a.handleEvent, {
              mechanism: {
                data: {
                  function: 'handleEvent',
                  handler: Xt(a),
                  target: e,
                },
                handled: !1,
                type: 'instrument',
              },
            }))
        } catch {}
        return i.apply(this, [
          s,
          Yr(a, {
            mechanism: {
              data: {
                function: 'addEventListener',
                handler: Xt(a),
                target: e,
              },
              handled: !1,
              type: 'instrument',
            },
          }),
          u,
        ])
      }
    }),
    Xe(n, 'removeEventListener', function (i) {
      return function (s, a, u) {
        try {
          const l = a.__sentry_wrapped__
          l && i.call(this, s, l, u)
        } catch {}
        return i.call(this, s, a, u)
      }
    }))
}
function yk(e) {
  return typeof e.handleEvent == 'function'
}
const vk = () => ({
    name: 'BrowserSession',
    setupOnce() {
      if (typeof Y.document > 'u') {
        kt &&
          C.warn(
            'Using the `browserSessionIntegration` in non-browser environments is not supported.',
          )
        return
      }
      Qf({
        ignoreDuration: !0,
      }),
        Jf(),
        td(({ from: e, to: t }) => {
          e !== void 0 &&
            e !== t &&
            (Qf({
              ignoreDuration: !0,
            }),
            Jf())
        })
    },
  }),
  _k = 'GlobalHandlers',
  Sk = (e = {}) => {
    const t = {
      onerror: !0,
      onunhandledrejection: !0,
      ...e,
    }
    return {
      name: _k,
      setupOnce() {
        Error.stackTraceLimit = 50
      },
      setup(n) {
        t.onerror && (wk(n), vp('onerror')),
          t.onunhandledrejection && (Tk(n), vp('onunhandledrejection'))
      },
    }
  },
  Ek = Sk
function wk(e) {
  Tg((t) => {
    const { stackParser: n, attachStacktrace: r } = my()
    if (X() !== e || Zg()) return
    const { msg: o, url: i, line: s, column: a, error: u } = t,
      l = Rk(Xc(n, u || o, void 0, r, !1), i, s, a)
    ;(l.level = 'error'),
      Mg(l, {
        originalException: u,
        mechanism: {
          handled: !1,
          type: 'onerror',
        },
      })
  })
}
function Tk(e) {
  kg((t) => {
    const { stackParser: n, attachStacktrace: r } = my()
    if (X() !== e || Zg()) return
    const o = kk(t),
      i = zc(o) ? xk(o) : Xc(n, o, void 0, r, !0)
    ;(i.level = 'error'),
      Mg(i, {
        originalException: o,
        mechanism: {
          handled: !1,
          type: 'onunhandledrejection',
        },
      })
  })
}
function kk(e) {
  if (zc(e)) return e
  try {
    if ('reason' in e) return e.reason
    if ('detail' in e && 'reason' in e.detail) return e.detail.reason
  } catch {}
  return e
}
function xk(e) {
  return {
    exception: {
      values: [
        {
          type: 'UnhandledRejection',
          value: `Non-Error promise rejection captured with value: ${String(e)}`,
        },
      ],
    },
  }
}
function Rk(e, t, n, r) {
  const o = (e.exception = e.exception || {}),
    i = (o.values = o.values || []),
    s = (i[0] = i[0] || {}),
    a = (s.stacktrace = s.stacktrace || {}),
    u = (a.frames = a.frames || []),
    l = r,
    d = n,
    f = Wt(t) && t.length > 0 ? t : di()
  return (
    u.length === 0 &&
      u.push({
        colno: l,
        filename: f,
        function: er,
        in_app: !0,
        lineno: d,
      }),
    e
  )
}
function vp(e) {
  kt && C.log(`Global Handler attached: ${e}`)
}
function my() {
  const e = X()
  return (
    (e == null ? void 0 : e.getOptions()) || {
      stackParser: () => [],
      attachStacktrace: !1,
    }
  )
}
const Pk = () => ({
    name: 'HttpContext',
    preprocessEvent(e) {
      var r
      if (!Y.navigator && !Y.location && !Y.document) return
      const t = bl(),
        n = {
          ...t.headers,
          ...((r = e.request) == null ? void 0 : r.headers),
        }
      e.request = {
        ...t,
        ...e.request,
        headers: n,
      }
    },
  }),
  Ck = 'cause',
  Ik = 5,
  Lk = 'LinkedErrors',
  Ok = (e = {}) => {
    const t = e.limit || Ik,
      n = e.key || Ck
    return {
      name: Lk,
      preprocessEvent(r, o, i) {
        const s = i.getOptions()
        DE(Qc, s.stackParser, n, t, r, o)
      },
    }
  },
  Nk = Ok
function Ak(e) {
  return [RE(), wE(), pk(), nk(), Ek(), Nk(), zE(), Pk(), vk()]
}
function Dk(e = {}) {
  var n
  return {
    ...{
      defaultIntegrations: Ak(),
      release:
        typeof __SENTRY_RELEASE__ == 'string'
          ? __SENTRY_RELEASE__
          : (n = Y.SENTRY_RELEASE) == null
            ? void 0
            : n.id,
      sendClientReports: !0,
    },
    ...Mk(e),
  }
}
function Mk(e) {
  const t = {}
  for (const n of Object.getOwnPropertyNames(e)) {
    const r = n
    e[r] !== void 0 && (t[r] = e[r])
  }
  return t
}
function bk(e = {}) {
  if (!e.skipBrowserExtensionCheck && $k()) return
  const t = Dk(e),
    n = {
      ...t,
      stackParser: FS(t.stackParser || ZT),
      integrations: q1(t),
      transport: t.transport || zT,
    }
  return sE(Ew, n)
}
function Fk() {
  var i
  if (typeof Y.window > 'u') return !1
  const e = Y
  if (e.nw) return !1
  const t = e.chrome || e.browser
  if (!((i = t == null ? void 0 : t.runtime) != null && i.id)) return !1
  const n = di(),
    r = ['chrome-extension', 'moz-extension', 'ms-browser-extension', 'safari-web-extension']
  return !(Y === Y.top && r.some((s) => n.startsWith(`${s}://`)))
}
function $k() {
  if (Fk())
    return (
      kt &&
        ar(() => {
          console.error(
            '[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/',
          )
        }),
      !0
    )
}
const _p = new WeakMap(),
  Eu = new Map(),
  gy = {
    traceFetch: !0,
    traceXHR: !0,
    enableHTTPTimings: !0,
    trackFetchStreamPerformance: !1,
  }
function jk(e, t) {
  const {
      traceFetch: n,
      traceXHR: r,
      trackFetchStreamPerformance: o,
      shouldCreateSpanForRequest: i,
      enableHTTPTimings: s,
      tracePropagationTargets: a,
      onRequestSpanStart: u,
    } = {
      ...gy,
      ...t,
    },
    l = typeof i == 'function' ? i : (c) => !0,
    d = (c) => Bk(c, a),
    f = {}
  n &&
    (e.addEventProcessor(
      (c) => (
        c.type === 'transaction' &&
          c.spans &&
          c.spans.forEach((p) => {
            if (p.op === 'http.client') {
              const g = Eu.get(p.span_id)
              g && ((p.timestamp = g / 1e3), Eu.delete(p.span_id))
            }
          }),
        c
      ),
    ),
    o &&
      nw((c) => {
        if (c.response) {
          const p = _p.get(c.response)
          p && c.endTimestamp && Eu.set(p, c.endTimestamp)
        }
      }),
    Jg((c) => {
      const p = GE(c, l, d, f)
      if ((c.response && c.fetchData.__span && _p.set(c.response, c.fetchData.__span), p)) {
        const g = yy(c.fetchData.url),
          v = g ? Kn(g).host : void 0
        p.setAttributes({
          'http.url': g,
          'server.address': v,
        }),
          s && Sp(p),
          u == null ||
            u(p, {
              headers: c.headers,
            })
      }
    })),
    r &&
      py((c) => {
        var g
        const p = Hk(c, l, d, f)
        if (p) {
          s && Sp(p)
          let v
          try {
            v = new Headers((g = c.xhr.__sentry_xhr_v3__) == null ? void 0 : g.request_headers)
          } catch {}
          u == null ||
            u(p, {
              headers: v,
            })
        }
      })
}
function zk(e) {
  return (
    e.entryType === 'resource' &&
    'initiatorType' in e &&
    typeof e.nextHopProtocol == 'string' &&
    (e.initiatorType === 'fetch' || e.initiatorType === 'xmlhttprequest')
  )
}
function Sp(e) {
  const { url: t } = Z(e).data
  if (!t || typeof t != 'string') return
  const n = oi('resource', ({ entries: r }) => {
    r.forEach((o) => {
      zk(o) && o.name.endsWith(t) && (Uk(o).forEach((s) => e.setAttribute(...s)), setTimeout(n))
    })
  })
}
function Ct(e = 0) {
  return ((mt() || performance.timeOrigin) + e) / 1e3
}
function Uk(e) {
  const { name: t, version: n } = fy(e.nextHopProtocol),
    r = []
  return (
    r.push(['network.protocol.version', n], ['network.protocol.name', t]),
    mt()
      ? [
          ...r,
          ['http.request.redirect_start', Ct(e.redirectStart)],
          ['http.request.fetch_start', Ct(e.fetchStart)],
          ['http.request.domain_lookup_start', Ct(e.domainLookupStart)],
          ['http.request.domain_lookup_end', Ct(e.domainLookupEnd)],
          ['http.request.connect_start', Ct(e.connectStart)],
          ['http.request.secure_connection_start', Ct(e.secureConnectionStart)],
          ['http.request.connection_end', Ct(e.connectEnd)],
          ['http.request.request_start', Ct(e.requestStart)],
          ['http.request.response_start', Ct(e.responseStart)],
          ['http.request.response_end', Ct(e.responseEnd)],
        ]
      : r
  )
}
function Bk(e, t) {
  const n = di()
  if (n) {
    let r, o
    try {
      ;(r = new URL(e, n)), (o = new URL(n).origin)
    } catch {
      return !1
    }
    const i = r.origin === o
    return t ? Hn(r.toString(), t) || (i && Hn(r.pathname, t)) : i
  } else {
    const r = !!e.match(/^\/(?!\/)/)
    return t ? Hn(e, t) : r
  }
}
function Hk(e, t, n, r) {
  const o = e.xhr,
    i = o == null ? void 0 : o[Ir]
  if (!o || o.__sentry_own_request__ || !i) return
  const { url: s, method: a } = i,
    u = En() && t(s)
  if (e.endTimestamp && u) {
    const v = o.__sentry_xhr_span_id__
    if (!v) return
    const S = r[v]
    S && i.status_code !== void 0 && (dg(S, i.status_code), S.end(), delete r[v])
    return
  }
  const l = yy(s),
    d = Kn(l || s),
    f = KE(s),
    c = !!it(),
    p =
      u && c
        ? yi({
            name: `${a} ${f}`,
            attributes: {
              url: s,
              type: 'xhr',
              'http.method': a,
              'http.url': l,
              'server.address': d == null ? void 0 : d.host,
              [Se]: 'auto.http.browser',
              [Zn]: 'http.client',
              ...((d == null ? void 0 : d.search) && {
                'http.query': d == null ? void 0 : d.search,
              }),
              ...((d == null ? void 0 : d.hash) && {
                'http.fragment': d == null ? void 0 : d.hash,
              }),
            },
          })
        : new tr()
  ;(o.__sentry_xhr_span_id__ = p.spanContext().spanId),
    (r[o.__sentry_xhr_span_id__] = p),
    n(s) && Vk(o, En() && c ? p : void 0)
  const g = X()
  return g && g.emit('beforeOutgoingRequestSpan', p, e), p
}
function Vk(e, t) {
  const { 'sentry-trace': n, baggage: r } = Wg({
    span: t,
  })
  n && Wk(e, n, r)
}
function Wk(e, t, n) {
  var o
  const r = (o = e.__sentry_xhr_v3__) == null ? void 0 : o.request_headers
  if (!(r != null && r['sentry-trace']))
    try {
      if ((e.setRequestHeader('sentry-trace', t), n)) {
        const i = r == null ? void 0 : r.baggage
        ;(!i || !Kk(i)) && e.setRequestHeader('baggage', n)
      }
    } catch {}
}
function Kk(e) {
  return e.split(',').some((t) => t.trim().startsWith('sentry-'))
}
function yy(e) {
  try {
    return new URL(e, Y.location.origin).href
  } catch {
    return
  }
}
function Gk() {
  Y.document
    ? Y.document.addEventListener('visibilitychange', () => {
        const e = it()
        if (!e) return
        const t = Me(e)
        if (Y.document.hidden && t) {
          const n = 'cancelled',
            { op: r, status: o } = Z(t)
          kt && C.log(`[Tracing] Transaction: ${n} -> since tab moved to the background, op: ${r}`),
            o ||
              t.setStatus({
                code: ye,
                message: n,
              }),
            t.setAttribute('sentry.cancellation_reason', 'document.hidden'),
            t.end()
        }
      })
    : kt &&
      C.warn('[Tracing] Could not set up background tab detection due to lack of global document')
}
const Yk = 3600,
  vy = 'sentry_previous_trace',
  qk = 'sentry.previous_trace'
function Qk(e, { linkPreviousTrace: t, consistentTraceSampling: n }) {
  const r = t === 'session-storage'
  let o = r ? Zk() : void 0
  e.on('spanStart', (s) => {
    if (Me(s) !== s) return
    const a = oe().getPropagationContext()
    ;(o = Jk(o, s, a)), r && Xk(o)
  })
  let i = !0
  n &&
    e.on('beforeSampling', (s) => {
      if (!o) return
      const a = oe(),
        u = a.getPropagationContext()
      if (i && u.parentSpanId) {
        i = !1
        return
      }
      a.setPropagationContext({
        ...u,
        dsc: {
          ...u.dsc,
          sample_rate: String(o.sampleRate),
          sampled: String(Hl(o.spanContext)),
        },
        sampleRand: o.sampleRand,
      }),
        (s.parentSampled = Hl(o.spanContext)),
        (s.parentSampleRate = o.sampleRate),
        (s.spanAttributes = {
          ...s.spanAttributes,
          [lg]: o.sampleRate,
        })
    })
}
function Jk(e, t, n) {
  const r = Z(t)
  function o() {
    var a, u
    try {
      return (
        Number((a = n.dsc) == null ? void 0 : a.sample_rate) ??
        Number((u = r.data) == null ? void 0 : u[Vc])
      )
    } catch {
      return 0
    }
  }
  const i = {
    spanContext: t.spanContext(),
    startTimestamp: r.start_timestamp,
    sampleRate: o(),
    sampleRand: n.sampleRand,
  }
  if (!e) return i
  const s = e.spanContext
  return s.traceId === r.trace_id
    ? e
    : (Date.now() / 1e3 - e.startTimestamp <= Yk &&
        (kt &&
          C.info(
            `Adding previous_trace ${s} link to span ${{
              op: r.op,
              ...t.spanContext(),
            }}`,
          ),
        t.addLink({
          context: s,
          attributes: {
            [_S]: 'previous_trace',
          },
        }),
        t.setAttribute(qk, `${s.traceId}-${s.spanId}-${Hl(s) ? 1 : 0}`)),
      i)
}
function Xk(e) {
  try {
    Y.sessionStorage.setItem(vy, JSON.stringify(e))
  } catch (t) {
    kt && C.warn('Could not store previous trace in sessionStorage', t)
  }
}
function Zk() {
  var e
  try {
    const t = (e = Y.sessionStorage) == null ? void 0 : e.getItem(vy)
    return JSON.parse(t)
  } catch {
    return
  }
}
function Hl(e) {
  return e.traceFlags === 1
}
const ex = 'BrowserTracing',
  tx = {
    ...fs,
    instrumentNavigation: !0,
    instrumentPageLoad: !0,
    markBackgroundSpan: !0,
    enableLongTask: !0,
    enableLongAnimationFrame: !0,
    enableInp: !0,
    linkPreviousTrace: 'in-memory',
    consistentTraceSampling: !1,
    _experiments: {},
    ...gy,
  }
let Ep = !1
const nx = (e = {}) => {
  Ep &&
    ar(() => {
      console.warn('Multiple browserTracingIntegration instances are not supported.')
    }),
    (Ep = !0)
  const t = Y.document
  US()
  const {
      enableInp: n,
      enableLongTask: r,
      enableLongAnimationFrame: o,
      _experiments: { enableInteractions: i, enableStandaloneClsSpans: s },
      beforeStartSpan: a,
      idleTimeout: u,
      finalTimeout: l,
      childSpanTimeout: d,
      markBackgroundSpan: f,
      traceFetch: c,
      traceXHR: p,
      trackFetchStreamPerformance: g,
      shouldCreateSpanForRequest: v,
      enableHTTPTimings: S,
      instrumentPageLoad: m,
      instrumentNavigation: h,
      linkPreviousTrace: y,
      consistentTraceSampling: _,
      onRequestSpanStart: k,
    } = {
      ...tx,
      ...e,
    },
    w = lT({
      recordClsStandaloneSpans: s || !1,
    })
  n && FT(),
    o &&
    q.PerformanceObserver &&
    PerformanceObserver.supportedEntryTypes &&
    PerformanceObserver.supportedEntryTypes.includes('long-animation-frame')
      ? dT()
      : r && cT(),
    i && fT()
  const T = {
    name: void 0,
    source: void 0,
  }
  function R(P, I) {
    const b = I.op === 'pageload',
      O = a ? a(I) : I,
      H = O.attributes || {}
    I.name !== O.name && ((H[Ht] = 'custom'), (O.attributes = H)),
      (T.name = O.name),
      (T.source = H[Ht])
    const V = Dg(O, {
      idleTimeout: u,
      finalTimeout: l,
      childSpanTimeout: d,
      disableAutoFinish: b,
      beforeSpanEnd: (B) => {
        w(),
          yT(B, {
            recordClsOnPageloadSpan: !s,
          }),
          Tp(P, void 0)
        const Q = oe(),
          E = Q.getPropagationContext()
        Q.setPropagationContext({
          ...E,
          traceId: V.spanContext().traceId,
          sampled: ur(V),
          dsc: wn(B),
        })
      },
    })
    Tp(P, V)
    function z() {
      t &&
        ['interactive', 'complete'].includes(t.readyState) &&
        P.emit('idleSpanEnableAutoFinish', V)
    }
    b &&
      t &&
      (t.addEventListener('readystatechange', () => {
        z()
      }),
      z())
  }
  return {
    name: ex,
    afterAllSetup(P) {
      let I = di()
      function b() {
        const O = Pa(P)
        O &&
          !Z(O).timestamp &&
          (kt && C.log(`[Tracing] Finishing current active span with op: ${Z(O).op}`),
          O.setAttribute(Ys, 'cancelled'),
          O.end())
      }
      if (
        (P.on('startNavigationSpan', (O) => {
          if (X() !== P) return
          b(),
            Cn().setPropagationContext({
              traceId: Sn(),
              sampleRand: Math.random(),
            })
          const H = oe()
          H.setPropagationContext({
            traceId: Sn(),
            sampleRand: Math.random(),
          }),
            H.setSDKProcessingMetadata({
              normalizedRequest: void 0,
            }),
            R(P, {
              op: 'navigation',
              ...O,
            })
        }),
        P.on('startPageLoadSpan', (O, H = {}) => {
          if (X() !== P) return
          b()
          const V = H.sentryTrace || wp('sentry-trace'),
            z = H.baggage || wp('baggage'),
            B = IS(V, z),
            Q = oe()
          Q.setPropagationContext(B),
            Q.setSDKProcessingMetadata({
              normalizedRequest: bl(),
            }),
            R(P, {
              op: 'pageload',
              ...O,
            })
        }),
        y !== 'off' &&
          Qk(P, {
            linkPreviousTrace: y,
            consistentTraceSampling: _,
          }),
        Y.location)
      ) {
        if (m) {
          const O = mt()
          rx(P, {
            name: Y.location.pathname,
            startTime: O ? O / 1e3 : void 0,
            attributes: {
              [Ht]: 'url',
              [Se]: 'auto.pageload.browser',
            },
          })
        }
        h &&
          td(({ to: O, from: H }) => {
            if (H === void 0 && (I == null ? void 0 : I.indexOf(O)) !== -1) {
              I = void 0
              return
            }
            I = void 0
            const V = qg(O)
            ox(P, {
              name: (V == null ? void 0 : V.pathname) || Y.location.pathname,
              attributes: {
                [Ht]: 'url',
                [Se]: 'auto.navigation.browser',
              },
            }),
              oe().setSDKProcessingMetadata({
                normalizedRequest: {
                  ...bl(),
                  url: O,
                },
              })
          })
      }
      f && Gk(),
        i && ix(P, u, l, d, T),
        n && jT(),
        jk(P, {
          traceFetch: c,
          traceXHR: p,
          trackFetchStreamPerformance: g,
          tracePropagationTargets: P.getOptions().tracePropagationTargets,
          shouldCreateSpanForRequest: v,
          enableHTTPTimings: S,
          onRequestSpanStart: k,
        })
    },
  }
}
function rx(e, t, n) {
  return e.emit('startPageLoadSpan', t, n), oe().setTransactionName(t.name), Pa(e)
}
function ox(e, t) {
  return e.emit('startNavigationSpan', t), oe().setTransactionName(t.name), Pa(e)
}
function wp(e) {
  const t = Y.document,
    n = t == null ? void 0 : t.querySelector(`meta[name=${e}]`)
  return (n == null ? void 0 : n.getAttribute('content')) || void 0
}
function ix(e, t, n, r, o) {
  const i = Y.document
  let s
  const a = () => {
    const u = 'ui.action.click',
      l = Pa(e)
    if (l) {
      const d = Z(l).op
      if (['navigation', 'pageload'].includes(d)) {
        kt &&
          C.warn(
            `[Tracing] Did not create ${u} span because a pageload or navigation span is in progress.`,
          )
        return
      }
    }
    if ((s && (s.setAttribute(Ys, 'interactionInterrupted'), s.end(), (s = void 0)), !o.name)) {
      kt && C.warn(`[Tracing] Did not create ${u} transaction because _latestRouteName is missing.`)
      return
    }
    s = Dg(
      {
        name: o.name,
        op: u,
        attributes: {
          [Ht]: o.source || 'url',
        },
      },
      {
        idleTimeout: t,
        finalTimeout: n,
        childSpanTimeout: r,
      },
    )
  }
  i &&
    addEventListener('click', a, {
      once: !1,
      capture: !0,
    })
}
const _y = '_sentry_idleSpan'
function Pa(e) {
  return e[_y]
}
function Tp(e, t) {
  nt(e, _y, t)
}
function sx(e) {
  const t = {
    ...e,
  }
  return (
    Vg(t, 'react'),
    U1('react', {
      version: F.version,
    }),
    bk(t)
  )
}
const kp = 'pushstate',
  xp = 'popstate',
  Sy = 'beforeunload',
  Ey = (e) => (e.preventDefault(), (e.returnValue = '')),
  ax = () => {
    removeEventListener(Sy, Ey, {
      capture: !0,
    })
  }
function wy(e) {
  let t = e.getLocation()
  const n = new Set()
  let r = []
  const o = () => {
      ;(t = e.getLocation()), n.forEach((s) => s())
    },
    i = async (s, a) => {
      var u
      if (!((a == null ? void 0 : a.ignoreBlocker) ?? !1) && typeof document < 'u' && r.length) {
        for (const d of r)
          if (!(await d())) {
            ;(u = e.onBlocked) == null || u.call(e, o)
            return
          }
      }
      s()
    }
  return {
    get location() {
      return t
    },
    get length() {
      return e.getLength()
    },
    subscribers: n,
    subscribe: (s) => (
      n.add(s),
      () => {
        n.delete(s)
      }
    ),
    push: (s, a, u) => {
      ;(a = Rp(a)),
        i(() => {
          e.pushState(s, a), o()
        }, u)
    },
    replace: (s, a, u) => {
      ;(a = Rp(a)),
        i(() => {
          e.replaceState(s, a), o()
        }, u)
    },
    go: (s, a) => {
      i(() => {
        e.go(s), o()
      }, a)
    },
    back: (s) => {
      i(() => {
        e.back(), o()
      }, s)
    },
    forward: (s) => {
      i(() => {
        e.forward(), o()
      }, s)
    },
    createHref: (s) => e.createHref(s),
    block: (s) => (
      r.push(s),
      r.length === 1 &&
        addEventListener(Sy, Ey, {
          capture: !0,
        }),
      () => {
        ;(r = r.filter((a) => a !== s)), r.length || ax()
      }
    ),
    flush: () => {
      var s
      return (s = e.flush) == null ? void 0 : s.call(e)
    },
    destroy: () => {
      var s
      return (s = e.destroy) == null ? void 0 : s.call(e)
    },
    notify: o,
  }
}
function Rp(e) {
  return (
    e || (e = {}),
    {
      ...e,
      key: cx(),
    }
  )
}
function Ty(e) {
  const t = (e == null ? void 0 : e.window) ?? (typeof document < 'u' ? window : void 0),
    n = t.history.pushState,
    r = t.history.replaceState,
    o = (e == null ? void 0 : e.createHref) ?? ((v) => v),
    i =
      (e == null ? void 0 : e.parseLocation) ??
      (() => ii(`${t.location.pathname}${t.location.search}${t.location.hash}`, t.history.state))
  let s = i(),
    a
  const u = () => s
  let l, d
  const f = () => {
      l &&
        ((g._ignoreSubscribers = !0),
        (l.isPush ? t.history.pushState : t.history.replaceState)(l.state, '', l.href),
        (g._ignoreSubscribers = !1),
        (l = void 0),
        (d = void 0),
        (a = void 0))
    },
    c = (v, S, m) => {
      const h = o(S)
      d || (a = s),
        (s = ii(S, m)),
        (l = {
          href: h,
          state: m,
          isPush: (l == null ? void 0 : l.isPush) || v === 'push',
        }),
        d || (d = Promise.resolve().then(() => f()))
    },
    p = () => {
      ;(s = i()), g.notify()
    },
    g = wy({
      getLocation: u,
      getLength: () => t.history.length,
      pushState: (v, S) => c('push', v, S),
      replaceState: (v, S) => c('replace', v, S),
      back: () => t.history.back(),
      forward: () => t.history.forward(),
      go: (v) => t.history.go(v),
      createHref: (v) => o(v),
      flush: f,
      destroy: () => {
        ;(t.history.pushState = n),
          (t.history.replaceState = r),
          t.removeEventListener(kp, p),
          t.removeEventListener(xp, p)
      },
      onBlocked: (v) => {
        a && s !== a && ((s = a), v())
      },
    })
  return (
    t.addEventListener(kp, p),
    t.addEventListener(xp, p),
    (t.history.pushState = function (...v) {
      const S = n.apply(t.history, v)
      return g._ignoreSubscribers || p(), S
    }),
    (t.history.replaceState = function (...v) {
      const S = r.apply(t.history, v)
      return g._ignoreSubscribers || p(), S
    }),
    g
  )
}
function ux(e) {
  const t = typeof document < 'u' ? window : void 0
  return Ty({
    window: t,
    parseLocation: () => {
      const n = t.location.hash.split('#').slice(1).join('#') ?? '/'
      return ii(n, t.history.state)
    },
    createHref: (n) => `${t.location.pathname}${t.location.search}#${n}`,
  })
}
function lx(
  e = {
    initialEntries: ['/'],
  },
) {
  const t = e.initialEntries
  let n = e.initialIndex ?? t.length - 1
  const r = t.map(() => ({}))
  return wy({
    getLocation: () => ii(t[n], r[n]),
    getLength: () => t.length,
    pushState: (i, s) => {
      n < t.length - 1 && (t.splice(n + 1), r.splice(n + 1)),
        r.push(s),
        t.push(i),
        (n = Math.max(t.length - 1, 0))
    },
    replaceState: (i, s) => {
      ;(r[n] = s), (t[n] = i)
    },
    back: () => {
      n = Math.max(n - 1, 0)
    },
    forward: () => {
      n = Math.min(n + 1, t.length - 1)
    },
    go: (i) => {
      n = Math.min(Math.max(n + i, 0), t.length - 1)
    },
    createHref: (i) => i,
  })
}
function ii(e, t) {
  const n = e.indexOf('#'),
    r = e.indexOf('?')
  return {
    href: e,
    pathname: e.substring(0, n > 0 ? (r > 0 ? Math.min(n, r) : n) : r > 0 ? r : e.length),
    hash: n > -1 ? e.substring(n) : '',
    search: r > -1 ? e.slice(r, n === -1 ? void 0 : n) : '',
    state: t || {},
  }
}
function cx() {
  return (Math.random() + 1).toString(36).substring(7)
}
var dx = 'Invariant failed'
function Be(e, t) {
  if (!e) throw new Error(dx)
}
const wu = F.createContext(null)
function ky() {
  return typeof document > 'u'
    ? wu
    : window.__TSR_ROUTER_CONTEXT__
      ? window.__TSR_ROUTER_CONTEXT__
      : ((window.__TSR_ROUTER_CONTEXT__ = wu), wu)
}
function On(e) {
  const t = F.useContext(ky())
  return e == null || e.warn, t
}
var xy = {
    exports: {},
  },
  Ry = {},
  Py = {
    exports: {},
  },
  Cy = {}
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qr = F
function fx(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var px = typeof Object.is == 'function' ? Object.is : fx,
  hx = qr.useState,
  mx = qr.useEffect,
  gx = qr.useLayoutEffect,
  yx = qr.useDebugValue
function vx(e, t) {
  var n = t(),
    r = hx({
      inst: {
        value: n,
        getSnapshot: t,
      },
    }),
    o = r[0].inst,
    i = r[1]
  return (
    gx(
      function () {
        ;(o.value = n),
          (o.getSnapshot = t),
          Tu(o) &&
            i({
              inst: o,
            })
      },
      [e, n, t],
    ),
    mx(
      function () {
        return (
          Tu(o) &&
            i({
              inst: o,
            }),
          e(function () {
            Tu(o) &&
              i({
                inst: o,
              })
          })
        )
      },
      [e],
    ),
    yx(n),
    n
  )
}
function Tu(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !px(e, n)
  } catch {
    return !0
  }
}
function _x(e, t) {
  return t()
}
var Sx =
  typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'
    ? _x
    : vx
Cy.useSyncExternalStore = qr.useSyncExternalStore !== void 0 ? qr.useSyncExternalStore : Sx
Py.exports = Cy
var Ex = Py.exports
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ca = F,
  wx = Ex
function Tx(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var kx = typeof Object.is == 'function' ? Object.is : Tx,
  xx = wx.useSyncExternalStore,
  Rx = Ca.useRef,
  Px = Ca.useEffect,
  Cx = Ca.useMemo,
  Ix = Ca.useDebugValue
Ry.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
  var i = Rx(null)
  if (i.current === null) {
    var s = {
      hasValue: !1,
      value: null,
    }
    i.current = s
  } else s = i.current
  i = Cx(
    function () {
      function u(p) {
        if (!l) {
          if (((l = !0), (d = p), (p = r(p)), o !== void 0 && s.hasValue)) {
            var g = s.value
            if (o(g, p)) return (f = g)
          }
          return (f = p)
        }
        if (((g = f), kx(d, p))) return g
        var v = r(p)
        return o !== void 0 && o(g, v) ? g : ((d = p), (f = v))
      }
      var l = !1,
        d,
        f,
        c = n === void 0 ? null : n
      return [
        function () {
          return u(t())
        },
        c === null
          ? void 0
          : function () {
              return u(c())
            },
      ]
    },
    [t, n, r, o],
  )
  var a = xx(e, i[0], i[1])
  return (
    Px(
      function () {
        ;(s.hasValue = !0), (s.value = a)
      },
      [a],
    ),
    Ix(a),
    a
  )
}
xy.exports = Ry
var Lx = xy.exports
class Ox {
  constructor(t, n) {
    ;(this.listeners = new Set()),
      (this._batching = !1),
      (this._flushing = 0),
      (this.subscribe = (r) => {
        var o, i
        this.listeners.add(r)
        const s =
          (i = (o = this.options) == null ? void 0 : o.onSubscribe) == null
            ? void 0
            : i.call(o, r, this)
        return () => {
          this.listeners.delete(r), s == null || s()
        }
      }),
      (this.setState = (r) => {
        var o, i, s
        const a = this.state
        ;(this.state =
          (o = this.options) != null && o.updateFn ? this.options.updateFn(a)(r) : r(a)),
          (s = (i = this.options) == null ? void 0 : i.onUpdate) == null || s.call(i),
          this._flush()
      }),
      (this._flush = () => {
        if (this._batching) return
        const r = ++this._flushing
        this.listeners.forEach((o) => {
          this._flushing === r && o()
        })
      }),
      (this.batch = (r) => {
        if (this._batching) return r()
        ;(this._batching = !0), r(), (this._batching = !1), this._flush()
      }),
      (this.state = t),
      (this.options = n)
  }
}
function Nx(e, t = (n) => n) {
  return Lx.useSyncExternalStoreWithSelector(
    e.subscribe,
    () => e.state,
    () => e.state,
    t,
    Ax,
  )
}
function Ax(e, t) {
  if (Object.is(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1
  const n = Object.keys(e)
  if (n.length !== Object.keys(t).length) return !1
  for (let r = 0; r < n.length; r++)
    if (!Object.prototype.hasOwnProperty.call(t, n[r]) || !Object.is(e[n[r]], t[n[r]])) return !1
  return !0
}
const Qe = '__root__'
function Dx(e, t) {
  let n,
    r,
    o,
    i = ''
  for (n in e)
    if ((o = e[n]) !== void 0)
      if (Array.isArray(o))
        for (r = 0; r < o.length; r++)
          i && (i += '&'), (i += encodeURIComponent(n) + '=' + encodeURIComponent(o[r]))
      else i && (i += '&'), (i += encodeURIComponent(n) + '=' + encodeURIComponent(o))
  return '' + i
}
function Pp(e) {
  if (!e) return ''
  const t = decodeURIComponent(e)
  return t === 'false' ? !1 : t === 'true' ? !0 : +t * 0 === 0 && +t + '' === t ? +t : t
}
function Mx(e, t) {
  let n, r
  const o = {},
    i = e.split('&')
  for (; (n = i.shift()); ) {
    const s = n.indexOf('=')
    if (s !== -1) {
      ;(r = n.slice(0, s)), (r = decodeURIComponent(r))
      const a = n.slice(s + 1)
      o[r] !== void 0 ? (o[r] = [].concat(o[r], Pp(a))) : (o[r] = Pp(a))
    } else (r = n), (r = decodeURIComponent(r)), (o[r] = '')
  }
  return o
}
const bx = $x(JSON.parse),
  Fx = jx(JSON.stringify, JSON.parse)
function $x(e) {
  return (t) => {
    t.substring(0, 1) === '?' && (t = t.substring(1))
    const n = Mx(t)
    for (const r in n) {
      const o = n[r]
      if (typeof o == 'string')
        try {
          n[r] = e(o)
        } catch {}
    }
    return n
  }
}
function jx(e, t) {
  function n(r) {
    if (typeof r == 'object' && r !== null)
      try {
        return e(r)
      } catch {}
    else if (typeof r == 'string' && typeof t == 'function')
      try {
        return t(r), e(r)
      } catch {}
    return r
  }
  return (r) => {
    ;(r = {
      ...r,
    }),
      Object.keys(r).forEach((i) => {
        const s = r[i]
        typeof s > 'u' || s === void 0 ? delete r[i] : (r[i] = n(s))
      })
    const o = Dx(r).toString()
    return o ? `?${o}` : ''
  }
}
function Do(e) {
  return e[e.length - 1]
}
function zx(e) {
  return typeof e == 'function'
}
function Lr(e, t) {
  return zx(e) ? e(t) : e
}
function Mo(e, t) {
  return t.reduce((n, r) => ((n[r] = e[r]), n), {})
}
function hr(e, t) {
  if (e === t) return e
  const n = t,
    r = Ip(e) && Ip(n)
  if (r || (Qr(e) && Qr(n))) {
    const o = r ? e : Object.keys(e),
      i = o.length,
      s = r ? n : Object.keys(n),
      a = s.length,
      u = r ? [] : {}
    let l = 0
    for (let d = 0; d < a; d++) {
      const f = r ? d : s[d]
      ;((!r && o.includes(f)) || r) && e[f] === void 0 && n[f] === void 0
        ? ((u[f] = void 0), l++)
        : ((u[f] = hr(e[f], n[f])), u[f] === e[f] && e[f] !== void 0 && l++)
    }
    return i === a && l === i ? e : u
  }
  return n
}
function Qr(e) {
  if (!Cp(e)) return !1
  const t = e.constructor
  if (typeof t > 'u') return !0
  const n = t.prototype
  return !(!Cp(n) || !n.hasOwnProperty('isPrototypeOf'))
}
function Cp(e) {
  return Object.prototype.toString.call(e) === '[object Object]'
}
function Ip(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length
}
function Fr(e, t, n = !1) {
  if (e === t) return !0
  if (typeof e != typeof t) return !1
  if (Qr(e) && Qr(t)) {
    const r = Object.keys(e).filter((i) => e[i] !== void 0),
      o = Object.keys(t).filter((i) => t[i] !== void 0)
    return !n && r.length !== o.length ? !1 : !o.some((i) => !(i in e) || !Fr(e[i], t[i], n))
  }
  return Array.isArray(e) && Array.isArray(t)
    ? e.length !== t.length
      ? !1
      : !e.some((r, o) => !Fr(r, t[o], n))
    : !1
}
const ku = typeof window < 'u' ? F.useLayoutEffect : F.useEffect
function mr(e) {
  let t, n
  const r = new Promise((o, i) => {
    ;(t = o), (n = i)
  })
  return (
    (r.status = 'pending'),
    (r.resolve = (o) => {
      ;(r.status = 'resolved'), (r.value = o), t(o), e == null || e(o)
    }),
    (r.reject = (o) => {
      ;(r.status = 'rejected'), n(o)
    }),
    r
  )
}
function Lp(e) {
  const t = F.useRef({
      value: e,
      prev: null,
    }),
    n = t.current.value
  return (
    e !== n &&
      (t.current = {
        value: e,
        prev: n,
      }),
    t.current.prev
  )
}
function Ux(e, t, n = {}, r = {}) {
  const o = F.useRef(typeof IntersectionObserver == 'function'),
    i = F.useRef(null)
  return (
    F.useEffect(() => {
      if (!(!e.current || !o.current || r.disabled))
        return (
          (i.current = new IntersectionObserver(([s]) => {
            t(s)
          }, n)),
          i.current.observe(e.current),
          () => {
            var s
            ;(s = i.current) == null || s.disconnect()
          }
        )
    }, [t, n, r.disabled, e]),
    i.current
  )
}
function Bx(e) {
  const t = F.useRef(null)
  return (
    F.useEffect(() => {
      e && (typeof e == 'function' ? e(t.current) : (e.current = t.current))
    }),
    t
  )
}
function yn(e) {
  return Ia(e.filter((t) => t !== void 0).join('/'))
}
function Ia(e) {
  return e.replace(/\/{2,}/g, '/')
}
function nd(e) {
  return e === '/' ? e : e.replace(/^\/{1,}/, '')
}
function jn(e) {
  return e === '/' ? e : e.replace(/\/{1,}$/, '')
}
function Hx(e) {
  return jn(nd(e))
}
function ea(e, t) {
  return e.endsWith('/') && e !== '/' && e !== `${t}/` ? e.slice(0, -1) : e
}
function Vx(e, t, n) {
  return ea(e, n) === ea(t, n)
}
function Wx({ basepath: e, base: t, to: n, trailingSlash: r = 'never' }) {
  var o, i
  ;(t = ta(e, t)), (n = ta(e, n))
  let s = kn(t)
  const a = kn(n)
  s.length > 1 && ((o = Do(s)) == null ? void 0 : o.value) === '/' && s.pop(),
    a.forEach((l, d) => {
      l.value === '/'
        ? d
          ? d === a.length - 1 && s.push(l)
          : (s = [l])
        : l.value === '..'
          ? s.pop()
          : l.value === '.' || s.push(l)
    }),
    s.length > 1 &&
      (((i = Do(s)) == null ? void 0 : i.value) === '/'
        ? r === 'never' && s.pop()
        : r === 'always' &&
          s.push({
            type: 'pathname',
            value: '/',
          }))
  const u = yn([e, ...s.map((l) => l.value)])
  return Ia(u)
}
function kn(e) {
  if (!e) return []
  e = Ia(e)
  const t = []
  if (
    (e.slice(0, 1) === '/' &&
      ((e = e.substring(1)),
      t.push({
        type: 'pathname',
        value: '/',
      })),
    !e)
  )
    return t
  const n = e.split('/').filter(Boolean)
  return (
    t.push(
      ...n.map((r) =>
        r === '$' || r === '*'
          ? {
              type: 'wildcard',
              value: r,
            }
          : r.charAt(0) === '$'
            ? {
                type: 'param',
                value: r,
              }
            : {
                type: 'pathname',
                value: decodeURI(r),
              },
      ),
    ),
    e.slice(-1) === '/' &&
      ((e = e.substring(1)),
      t.push({
        type: 'pathname',
        value: '/',
      })),
    t
  )
}
function xu({ path: e, params: t, leaveWildcards: n, leaveParams: r }) {
  const o = kn(e),
    i = {}
  for (const [s, a] of Object.entries(t)) {
    const u = typeof a == 'string'
    ;['*', '_splat'].includes(s)
      ? (i[s] = u ? encodeURI(a) : a)
      : (i[s] = u ? encodeURIComponent(a) : a)
  }
  return yn(
    o.map((s) => {
      if (s.type === 'wildcard') {
        const a = i._splat
        return n ? `${s.value}${a ?? ''}` : a
      }
      if (s.type === 'param') {
        if (r) {
          const a = i[s.value]
          return `${s.value}${a ?? ''}`
        }
        return i[s.value.substring(1)] ?? 'undefined'
      }
      return s.value
    }),
  )
}
function Qi(e, t, n) {
  const r = Kx(e, t, n)
  if (!(n.to && !r)) return r ?? {}
}
function ta(e, t) {
  switch (!0) {
    case e === '/':
      return t
    case t === e:
      return ''
    case t.length < e.length:
      return t
    case t[e.length] !== '/':
      return t
    case t.startsWith(e):
      return t.slice(e.length)
    default:
      return t
  }
}
function Kx(e, t, n) {
  t = ta(e, t)
  const r = ta(e, `${n.to ?? '$'}`),
    o = kn(t),
    i = kn(r)
  t.startsWith('/') ||
    o.unshift({
      type: 'pathname',
      value: '/',
    }),
    r.startsWith('/') ||
      i.unshift({
        type: 'pathname',
        value: '/',
      })
  const s = {}
  return (() => {
    for (let u = 0; u < Math.max(o.length, i.length); u++) {
      const l = o[u],
        d = i[u],
        f = u >= o.length - 1,
        c = u >= i.length - 1
      if (d) {
        if (d.type === 'wildcard') {
          const p = decodeURI(yn(o.slice(u).map((g) => g.value)))
          return (s['*'] = p), (s._splat = p), !0
        }
        if (d.type === 'pathname') {
          if (d.value === '/' && !(l != null && l.value)) return !0
          if (l) {
            if (n.caseSensitive) {
              if (d.value !== l.value) return !1
            } else if (d.value.toLowerCase() !== l.value.toLowerCase()) return !1
          }
        }
        if (!l) return !1
        if (d.type === 'param') {
          if (l.value === '/') return !1
          l.value.charAt(0) !== '$' && (s[d.value.substring(1)] = decodeURIComponent(l.value))
        }
      }
      if (!f && c)
        return (
          (s['**'] = yn(o.slice(u + 1).map((p) => p.value))),
          !!n.fuzzy && (d == null ? void 0 : d.value) !== '/'
        )
    }
    return !0
  })()
    ? s
    : void 0
}
function Dn(e) {
  return !!(e != null && e.isRedirect)
}
function Op(e) {
  return !!(e != null && e.isRedirect) && e.href
}
function rd(e) {
  const t = e.errorComponent ?? La
  return D.jsx(Gx, {
    getResetKey: e.getResetKey,
    onCatch: e.onCatch,
    children: ({ error: n, reset: r }) =>
      n
        ? F.createElement(t, {
            error: n,
            reset: r,
          })
        : e.children,
  })
}
class Gx extends F.Component {
  constructor() {
    super(...arguments),
      (this.state = {
        error: null,
      })
  }
  static getDerivedStateFromProps(t) {
    return {
      resetKey: t.getResetKey(),
    }
  }
  static getDerivedStateFromError(t) {
    return {
      error: t,
    }
  }
  reset() {
    this.setState({
      error: null,
    })
  }
  componentDidUpdate(t, n) {
    n.error && n.resetKey !== this.state.resetKey && this.reset()
  }
  componentDidCatch(t, n) {
    this.props.onCatch && this.props.onCatch(t, n)
  }
  render() {
    return this.props.children({
      error: this.state.resetKey !== this.props.getResetKey() ? null : this.state.error,
      reset: () => {
        this.reset()
      },
    })
  }
}
function La({ error: e }) {
  const [t, n] = F.useState(!1)
  return D.jsxs('div', {
    style: {
      padding: '.5rem',
      maxWidth: '100%',
    },
    children: [
      D.jsxs('div', {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: '.5rem',
        },
        children: [
          D.jsx('strong', {
            style: {
              fontSize: '1rem',
            },
            children: 'Something went wrong!',
          }),
          D.jsx('button', {
            style: {
              appearance: 'none',
              fontSize: '.6em',
              border: '1px solid currentColor',
              padding: '.1rem .2rem',
              fontWeight: 'bold',
              borderRadius: '.25rem',
            },
            onClick: () => n((r) => !r),
            children: t ? 'Hide Error' : 'Show Error',
          }),
        ],
      }),
      D.jsx('div', {
        style: {
          height: '.25rem',
        },
      }),
      t
        ? D.jsx('div', {
            children: D.jsx('pre', {
              style: {
                fontSize: '.7em',
                border: '1px solid red',
                borderRadius: '.25rem',
                padding: '.3rem',
                color: 'red',
                overflow: 'auto',
              },
              children: e.message
                ? D.jsx('code', {
                    children: e.message,
                  })
                : null,
            }),
          })
        : null,
    ],
  })
}
function et(e) {
  const t = On({
    warn: (e == null ? void 0 : e.router) === void 0,
  })
  return Nx(((e == null ? void 0 : e.router) || t).__store, e == null ? void 0 : e.select)
}
function Lt(e) {
  return !!(e != null && e.isNotFound)
}
function Yx(e) {
  const t = et({
    select: (n) => `not-found-${n.location.pathname}-${n.status}`,
  })
  return D.jsx(rd, {
    getResetKey: () => t,
    onCatch: (n, r) => {
      var o
      if (Lt(n)) (o = e.onCatch) == null || o.call(e, n, r)
      else throw n
    },
    errorComponent: ({ error: n }) => {
      var r
      return (r = e.fallback) == null ? void 0 : r.call(e, n)
    },
    children: e.children,
  })
}
function qx() {
  return D.jsx('p', {
    children: 'Not Found',
  })
}
const Qx = {
    stringify: (e) =>
      JSON.stringify(e, function (n, r) {
        const o = this[n],
          i = Np.find((s) => s.stringifyCondition(o))
        return i ? i.stringify(o) : r
      }),
    parse: (e) =>
      JSON.parse(e, function (n, r) {
        const o = this[n],
          i = Np.find((s) => s.parseCondition(o))
        return i ? i.parse(o) : r
      }),
  },
  Np = [
    {
      stringifyCondition: (e) => e instanceof Date,
      stringify: (e) => ({
        $date: e.toISOString(),
      }),
      parseCondition: (e) => Qr(e) && e.$date,
      parse: (e) => new Date(e.$date),
    },
    {
      stringifyCondition: (e) => e === void 0,
      stringify: () => ({
        $undefined: '',
      }),
      parseCondition: (e) => Qr(e) && e.$undefined === '',
      parse: () => {},
    },
  ],
  Iy = ['component', 'errorComponent', 'pendingComponent', 'notFoundComponent']
function Jx(e) {
  var t
  for (const n of Iy) if ((t = e.options[n]) != null && t.preload) return !0
  return !1
}
function Xx(e) {
  return new Zx(e)
}
class Zx {
  constructor(t) {
    ;(this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`),
      (this.resetNextScroll = !0),
      (this.shouldViewTransition = void 0),
      (this.subscribers = new Set()),
      (this.startReactTransition = (n) => n()),
      (this.update = (n) => {
        n.notFoundRoute &&
          console.warn(
            'The notFoundRoute API is deprecated and will be removed in the next major version. See https://tanstack.com/router/v1/docs/guide/not-found-errors#migrating-from-notfoundroute for more info.',
          )
        const r = this.options
        ;(this.options = {
          ...this.options,
          ...n,
        }),
          (this.isServer = this.options.isServer ?? typeof document > 'u'),
          (!this.basepath || (n.basepath && n.basepath !== r.basepath)) &&
            (n.basepath === void 0 || n.basepath === '' || n.basepath === '/'
              ? (this.basepath = '/')
              : (this.basepath = `/${Hx(n.basepath)}`)),
          (!this.history || (this.options.history && this.options.history !== this.history)) &&
            ((this.history =
              this.options.history ??
              (this.isServer
                ? lx({
                    initialEntries: [this.basepath || '/'],
                  })
                : Ty())),
            (this.latestLocation = this.parseLocation())),
          this.options.routeTree !== this.routeTree &&
            ((this.routeTree = this.options.routeTree), this.buildRouteTree()),
          this.__store ||
            (this.__store = new Ox(nR(this.latestLocation), {
              onUpdate: () => {
                this.__store.state = {
                  ...this.state,
                  cachedMatches: this.state.cachedMatches.filter(
                    (o) => !['redirected'].includes(o.status),
                  ),
                }
              },
            }))
      }),
      (this.buildRouteTree = () => {
        ;(this.routesById = {}), (this.routesByPath = {})
        const n = this.options.notFoundRoute
        n &&
          (n.init({
            originalIndex: 99999999999,
            defaultSsr: this.options.defaultSsr,
          }),
          (this.routesById[n.id] = n))
        const r = (s) => {
          s.forEach((a, u) => {
            a.init({
              originalIndex: u,
              defaultSsr: this.options.defaultSsr,
            })
            const l = this.routesById[a.id]
            if (
              (Be(!l, `Duplicate routes found with id: ${String(a.id)}`),
              (this.routesById[a.id] = a),
              !a.isRoot && a.path)
            ) {
              const f = jn(a.fullPath)
              ;(!this.routesByPath[f] || a.fullPath.endsWith('/')) && (this.routesByPath[f] = a)
            }
            const d = a.children
            d != null && d.length && r(d)
          })
        }
        r([this.routeTree])
        const o = []
        Object.values(this.routesById).forEach((s, a) => {
          var u
          if (s.isRoot || !s.path) return
          const l = nd(s.fullPath),
            d = kn(l)
          for (; d.length > 1 && ((u = d[0]) == null ? void 0 : u.value) === '/'; ) d.shift()
          const f = d.map((c) =>
            c.value === '/' ? 0.75 : c.type === 'param' ? 0.5 : c.type === 'wildcard' ? 0.25 : 1,
          )
          o.push({
            child: s,
            trimmed: l,
            parsed: d,
            index: a,
            scores: f,
          })
        }),
          (this.flatRoutes = o
            .sort((s, a) => {
              const u = Math.min(s.scores.length, a.scores.length)
              for (let l = 0; l < u; l++)
                if (s.scores[l] !== a.scores[l]) return a.scores[l] - s.scores[l]
              if (s.scores.length !== a.scores.length) return a.scores.length - s.scores.length
              for (let l = 0; l < u; l++)
                if (s.parsed[l].value !== a.parsed[l].value)
                  return s.parsed[l].value > a.parsed[l].value ? 1 : -1
              return s.index - a.index
            })
            .map((s, a) => ((s.child.rank = a), s.child)))
      }),
      (this.subscribe = (n, r) => {
        const o = {
          eventType: n,
          fn: r,
        }
        return (
          this.subscribers.add(o),
          () => {
            this.subscribers.delete(o)
          }
        )
      }),
      (this.emit = (n) => {
        this.subscribers.forEach((r) => {
          r.eventType === n.type && r.fn(n)
        })
      }),
      (this.parseLocation = (n) => {
        const r = ({ pathname: a, search: u, hash: l, state: d }) => {
            const f = this.options.parseSearch(u),
              c = this.options.stringifySearch(f)
            return {
              pathname: a,
              searchStr: c,
              search: hr(n == null ? void 0 : n.search, f),
              hash: l.split('#').reverse()[0] ?? '',
              href: `${a}${c}${l}`,
              state: hr(n == null ? void 0 : n.state, d),
            }
          },
          o = r(this.history.location),
          { __tempLocation: i, __tempKey: s } = o.state
        if (i && (!s || s === this.tempLocationKey)) {
          const a = r(i)
          return (
            (a.state.key = o.state.key),
            delete a.state.__tempLocation,
            {
              ...a,
              maskedLocation: o,
            }
          )
        }
        return o
      }),
      (this.resolvePathWithBase = (n, r) =>
        Wx({
          basepath: this.basepath,
          base: n,
          to: Ia(r),
          trailingSlash: this.options.trailingSlash,
        })),
      (this.cancelMatch = (n) => {
        const r = this.getMatch(n)
        r && (r.abortController.abort(), clearTimeout(r.pendingTimeout))
      }),
      (this.cancelMatches = () => {
        var n
        ;(n = this.state.pendingMatches) == null ||
          n.forEach((r) => {
            this.cancelMatch(r.id)
          })
      }),
      (this.buildLocation = (n) => {
        const r = (i = {}, s) => {
            var a, u, l, d, f
            const c = i._fromLocation ? this.matchRoutes(i._fromLocation) : this.state.matches,
              p =
                i.from != null
                  ? c.find((z) =>
                      Qi(this.basepath, jn(z.pathname), {
                        to: i.from,
                        caseSensitive: !1,
                        fuzzy: !1,
                      }),
                    )
                  : void 0,
              g = (p == null ? void 0 : p.pathname) || this.latestLocation.pathname
            Be(i.from == null || p != null, 'Could not find match for from: ' + i.from)
            const v =
                (a = this.state.pendingMatches) != null && a.length
                  ? (u = Do(this.state.pendingMatches)) == null
                    ? void 0
                    : u.search
                  : ((l = Do(c)) == null ? void 0 : l.search) || this.latestLocation.search,
              S = s == null ? void 0 : s.filter((z) => c.find((B) => B.routeId === z.routeId)),
              m =
                this.routesById[
                  (d = S == null ? void 0 : S.find((z) => z.pathname === g)) == null
                    ? void 0
                    : d.routeId
                ]
            let h = i.to
              ? this.resolvePathWithBase(g, `${i.to}`)
              : this.resolvePathWithBase(g, (m == null ? void 0 : m.to) ?? g)
            const y = {
              ...((f = Do(c)) == null ? void 0 : f.params),
            }
            let _ =
              (i.params ?? !0) === !0
                ? y
                : {
                    ...y,
                    ...Lr(i.params, y),
                  }
            Object.keys(_).length > 0 &&
              (s == null ||
                s
                  .map((z) => {
                    var B
                    const Q = this.looseRoutesById[z.routeId]
                    return (
                      ((B = Q == null ? void 0 : Q.options.params) == null
                        ? void 0
                        : B.stringify) ?? Q.options.stringifyParams
                    )
                  })
                  .filter(Boolean)
                  .forEach((z) => {
                    _ = {
                      ..._,
                      ...z(_),
                    }
                  })),
              (h = xu({
                path: h,
                params: _ ?? {},
                leaveWildcards: !1,
                leaveParams: n.leaveParams,
              }))
            const k =
                (S == null
                  ? void 0
                  : S.map((z) => this.looseRoutesById[z.routeId].options.preSearchFilters ?? [])
                      .flat()
                      .filter(Boolean)) ?? [],
              w =
                (S == null
                  ? void 0
                  : S.map((z) => this.looseRoutesById[z.routeId].options.postSearchFilters ?? [])
                      .flat()
                      .filter(Boolean)) ?? [],
              T = k.length ? k.reduce((z, B) => B(z), v) : v,
              R = i.search === !0 ? T : i.search ? Lr(i.search, T) : k.length ? T : {},
              P = w.length ? w.reduce((z, B) => B(z), R) : R,
              I = hr(v, P),
              b = this.options.stringifySearch(I),
              O =
                i.hash === !0
                  ? this.latestLocation.hash
                  : i.hash
                    ? Lr(i.hash, this.latestLocation.hash)
                    : void 0,
              H = O ? `#${O}` : ''
            let V =
              i.state === !0
                ? this.latestLocation.state
                : i.state
                  ? Lr(i.state, this.latestLocation.state)
                  : {}
            return (
              (V = hr(this.latestLocation.state, V)),
              {
                pathname: h,
                search: I,
                searchStr: b,
                state: V,
                hash: O ?? '',
                href: `${h}${b}${H}`,
                unmaskOnReload: i.unmaskOnReload,
              }
            )
          },
          o = (i = {}, s) => {
            var a
            const u = r(i)
            let l = s ? r(s) : void 0
            if (!l) {
              let g = {}
              const v =
                (a = this.options.routeMasks) == null
                  ? void 0
                  : a.find((S) => {
                      const m = Qi(this.basepath, u.pathname, {
                        to: S.from,
                        caseSensitive: !1,
                        fuzzy: !1,
                      })
                      return m ? ((g = m), !0) : !1
                    })
              if (v) {
                const { from: S, ...m } = v
                ;(s = {
                  ...Mo(n, ['from']),
                  ...m,
                  params: g,
                }),
                  (l = r(s))
              }
            }
            const d = this.matchRoutes(u),
              f = l ? this.matchRoutes(l) : void 0,
              c = l ? r(s, f) : void 0,
              p = r(i, d)
            return c && (p.maskedLocation = c), p
          }
        return n.mask
          ? o(n, {
              ...Mo(n, ['from']),
              ...n.mask,
            })
          : o(n)
      }),
      (this.commitLocation = ({ viewTransition: n, ignoreBlocker: r, ...o }) => {
        const i = () => {
            o.state.key = this.latestLocation.state.key
            const u = Fr(o.state, this.latestLocation.state)
            return delete o.state.key, u
          },
          s = this.latestLocation.href === o.href,
          a = this.commitLocationPromise
        if (
          ((this.commitLocationPromise = mr(() => {
            a == null || a.resolve()
          })),
          s && i())
        )
          this.load()
        else {
          let { maskedLocation: u, ...l } = o
          u &&
            ((l = {
              ...u,
              state: {
                ...u.state,
                __tempKey: void 0,
                __tempLocation: {
                  ...l,
                  search: l.searchStr,
                  state: {
                    ...l.state,
                    __tempKey: void 0,
                    __tempLocation: void 0,
                    key: void 0,
                  },
                },
              },
            }),
            (l.unmaskOnReload ?? this.options.unmaskOnReload ?? !1) &&
              (l.state.__tempKey = this.tempLocationKey)),
            (this.shouldViewTransition = n),
            this.history[o.replace ? 'replace' : 'push'](l.href, l.state, {
              ignoreBlocker: r,
            })
        }
        return (
          (this.resetNextScroll = o.resetScroll ?? !0),
          this.history.subscribers.size || this.load(),
          this.commitLocationPromise
        )
      }),
      (this.buildAndCommitLocation = ({
        replace: n,
        resetScroll: r,
        viewTransition: o,
        ignoreBlocker: i,
        ...s
      } = {}) => {
        const a = s.href
        if (a) {
          const l = ii(a, {})
          ;(s.to = l.pathname), (s.search = this.options.parseSearch(l.search)), (s.hash = l.hash)
        }
        const u = this.buildLocation(s)
        return this.commitLocation({
          ...u,
          viewTransition: o,
          replace: n,
          resetScroll: r,
          ignoreBlocker: i,
        })
      }),
      (this.navigate = ({ to: n, ...r }) => {
        const o = String(n)
        let i
        try {
          new URL(`${o}`), (i = !0)
        } catch {}
        return (
          Be(!i),
          this.buildAndCommitLocation({
            ...r,
            to: n,
          })
        )
      }),
      (this.load = async () => {
        this.latestLocation = this.parseLocation(this.latestLocation)
        let n, r, o
        for (
          o = new Promise((i) => {
            this.startReactTransition(async () => {
              var s
              try {
                const a = this.latestLocation,
                  u = this.state.resolvedLocation,
                  l = u.href !== a.href
                this.cancelMatches()
                let d
                this.__store.batch(() => {
                  ;(d = this.matchRoutes(a)),
                    this.__store.setState((f) => ({
                      ...f,
                      status: 'pending',
                      isLoading: !0,
                      location: a,
                      pendingMatches: d,
                      cachedMatches: f.cachedMatches.filter((c) => !d.find((p) => p.id === c.id)),
                    }))
                }),
                  this.state.redirect ||
                    this.emit({
                      type: 'onBeforeNavigate',
                      fromLocation: u,
                      toLocation: a,
                      pathChanged: l,
                    }),
                  this.emit({
                    type: 'onBeforeLoad',
                    fromLocation: u,
                    toLocation: a,
                    pathChanged: l,
                  }),
                  await this.loadMatches({
                    matches: d,
                    location: a,
                    onReady: async () => {
                      this.startViewTransition(async () => {
                        let f, c, p
                        this.__store.batch(() => {
                          this.__store.setState((g) => {
                            const v = g.matches,
                              S = g.pendingMatches || g.matches
                            return (
                              (f = v.filter((m) => !S.find((h) => h.id === m.id))),
                              (c = S.filter((m) => !v.find((h) => h.id === m.id))),
                              (p = v.filter((m) => S.find((h) => h.id === m.id))),
                              {
                                ...g,
                                isLoading: !1,
                                loadedAt: Date.now(),
                                matches: S,
                                pendingMatches: void 0,
                                cachedMatches: [
                                  ...g.cachedMatches,
                                  ...f.filter((m) => m.status !== 'error'),
                                ],
                              }
                            )
                          }),
                            this.cleanCache()
                        }),
                          [
                            [f, 'onLeave'],
                            [c, 'onEnter'],
                            [p, 'onStay'],
                          ].forEach(([g, v]) => {
                            g.forEach((S) => {
                              var m, h
                              ;(h = (m = this.looseRoutesById[S.routeId].options)[v]) == null ||
                                h.call(m, S)
                            })
                          })
                      })
                    },
                  })
              } catch (a) {
                Op(a)
                  ? ((n = a),
                    this.isServer ||
                      this.navigate({
                        ...a,
                        replace: !0,
                        ignoreBlocker: !0,
                      }))
                  : Lt(a) && (r = a),
                  this.__store.setState((u) => ({
                    ...u,
                    statusCode: n
                      ? n.statusCode
                      : r
                        ? 404
                        : u.matches.some((l) => l.status === 'error')
                          ? 500
                          : 200,
                    redirect: n,
                  }))
              }
              this.latestLoadPromise === o &&
                ((s = this.commitLocationPromise) == null || s.resolve(),
                (this.latestLoadPromise = void 0),
                (this.commitLocationPromise = void 0)),
                i()
            })
          }),
            this.latestLoadPromise = o,
            await o;
          this.latestLoadPromise && o !== this.latestLoadPromise;

        )
          await this.latestLoadPromise
      }),
      (this.startViewTransition = (n) => {
        const r = this.shouldViewTransition ?? this.options.defaultViewTransition
        delete this.shouldViewTransition,
          r &&
          typeof document < 'u' &&
          'startViewTransition' in document &&
          typeof document.startViewTransition == 'function'
            ? document.startViewTransition(n)
            : n()
      }),
      (this.updateMatch = (n, r) => {
        var o
        let i
        const s = (o = this.state.pendingMatches) == null ? void 0 : o.find((l) => l.id === n),
          a = this.state.matches.find((l) => l.id === n),
          u = s ? 'pendingMatches' : a ? 'matches' : 'cachedMatches'
        return (
          this.__store.setState((l) => {
            var d
            return {
              ...l,
              [u]: (d = l[u]) == null ? void 0 : d.map((f) => (f.id === n ? (i = r(f)) : f)),
            }
          }),
          i
        )
      }),
      (this.getMatch = (n) =>
        [
          ...this.state.cachedMatches,
          ...(this.state.pendingMatches ?? []),
          ...this.state.matches,
        ].find((r) => r.id === n)),
      (this.loadMatches = async ({
        location: n,
        matches: r,
        preload: o,
        onReady: i,
        updateMatch: s = this.updateMatch,
      }) => {
        let a,
          u = !1
        const l = async () => {
          u || ((u = !0), await (i == null ? void 0 : i()))
        }
        !this.isServer && !this.state.matches.length && l()
        const d = (f, c) => {
          var p, g, v
          if (Op(c)) throw c
          if (Dn(c) || Lt(c)) {
            if (
              (s(f.id, (S) => ({
                ...S,
                status: Dn(c) ? 'redirected' : Lt(c) ? 'notFound' : 'error',
                isFetching: !1,
                error: c,
                beforeLoadPromise: void 0,
                loaderPromise: void 0,
              })),
              c.routeId || (c.routeId = f.routeId),
              (p = f.beforeLoadPromise) == null || p.resolve(),
              (g = f.loaderPromise) == null || g.resolve(),
              (v = f.loadPromise) == null || v.resolve(),
              Dn(c))
            )
              throw (
                ((u = !0),
                (c = this.resolveRedirect({
                  ...c,
                  _fromLocation: n,
                })),
                c)
              )
            if (Lt(c))
              throw (
                (this._handleNotFound(r, c, {
                  updateMatch: s,
                }),
                c)
              )
          }
        }
        try {
          await new Promise((f, c) => {
            ;(async () => {
              var p, g, v
              try {
                const S = (y, _, k) => {
                  var w, T
                  const { id: R, routeId: P } = r[y],
                    I = this.looseRoutesById[P]
                  if (_ instanceof Promise) throw _
                  ;(_.routerCode = k), (a = a ?? y), d(this.getMatch(R), _)
                  try {
                    ;(T = (w = I.options).onError) == null || T.call(w, _)
                  } catch (b) {
                    ;(_ = b), d(this.getMatch(R), _)
                  }
                  s(R, (b) => {
                    var O
                    return (
                      (O = b.beforeLoadPromise) == null || O.resolve(),
                      {
                        ...b,
                        error: _,
                        status: 'error',
                        isFetching: !1,
                        updatedAt: Date.now(),
                        abortController: new AbortController(),
                        beforeLoadPromise: void 0,
                      }
                    )
                  })
                }
                for (const [y, { id: _, routeId: k }] of r.entries()) {
                  const w = this.getMatch(_),
                    T = (p = r[y - 1]) == null ? void 0 : p.id,
                    R = this.looseRoutesById[k],
                    P = R.options.pendingMs ?? this.options.defaultPendingMs,
                    I = !!(
                      i &&
                      !this.isServer &&
                      !o &&
                      (R.options.loader || R.options.beforeLoad) &&
                      typeof P == 'number' &&
                      P !== 1 / 0 &&
                      (R.options.pendingComponent ?? this.options.defaultPendingComponent)
                    )
                  if (w.beforeLoadPromise || w.loaderPromise)
                    I &&
                      setTimeout(() => {
                        try {
                          l()
                        } catch {}
                      }, P),
                      await w.beforeLoadPromise
                  else {
                    try {
                      s(_, ($) => ({
                        ...$,
                        loadPromise: mr(() => {
                          var fe
                          ;(fe = $.loadPromise) == null || fe.resolve()
                        }),
                        beforeLoadPromise: mr(),
                      }))
                      const b = new AbortController()
                      let O
                      I &&
                        (O = setTimeout(() => {
                          try {
                            l()
                          } catch {}
                        }, P))
                      const { paramsError: H, searchError: V } = this.getMatch(_)
                      H && S(y, H, 'PARSE_PARAMS'), V && S(y, V, 'VALIDATE_SEARCH')
                      const z = () => (T ? this.getMatch(T).context : (this.options.context ?? {}))
                      s(_, ($) => ({
                        ...$,
                        isFetching: 'beforeLoad',
                        fetchCount: $.fetchCount + 1,
                        abortController: b,
                        pendingTimeout: O,
                        context: {
                          ...z(),
                          ...$.__routeContext,
                          ...$.__beforeLoadContext,
                        },
                      }))
                      const { search: B, params: Q, context: E, cause: A } = this.getMatch(_),
                        M = {
                          search: B,
                          abortController: b,
                          params: Q,
                          preload: !!o,
                          context: E,
                          location: n,
                          navigate: ($) =>
                            this.navigate({
                              ...$,
                              _fromLocation: n,
                            }),
                          buildLocation: this.buildLocation,
                          cause: o ? 'preload' : A,
                          matches: r,
                        }
                      let U =
                        (await ((v = (g = R.options).beforeLoad) == null
                          ? void 0
                          : v.call(g, M))) ?? {}
                      this.serializeLoaderData &&
                        (U = this.serializeLoaderData('__beforeLoadContext', U, {
                          router: this,
                          match: this.getMatch(_),
                        })),
                        (Dn(U) || Lt(U)) && S(y, U, 'BEFORE_LOAD'),
                        s(_, ($) => ({
                          ...$,
                          __beforeLoadContext: U,
                          context: {
                            ...z(),
                            ...$.__routeContext,
                            ...U,
                          },
                          abortController: b,
                        }))
                    } catch (b) {
                      S(y, b, 'BEFORE_LOAD')
                    }
                    s(_, (b) => {
                      var O
                      return (
                        (O = b.beforeLoadPromise) == null || O.resolve(),
                        {
                          ...b,
                          beforeLoadPromise: void 0,
                          isFetching: !1,
                        }
                      )
                    })
                  }
                }
                const m = r.slice(0, a),
                  h = []
                m.forEach(({ id: y, routeId: _ }, k) => {
                  h.push(
                    (async () => {
                      const { loaderPromise: w } = this.getMatch(y)
                      let T = !1
                      if (w) await w
                      else {
                        const R = h[k - 1],
                          P = this.looseRoutesById[_],
                          I = () => {
                            const {
                              params: M,
                              loaderDeps: U,
                              abortController: $,
                              context: fe,
                              cause: he,
                            } = this.getMatch(y)
                            return {
                              params: M,
                              deps: U,
                              preload: !!o,
                              parentMatchPromise: R,
                              abortController: $,
                              context: fe,
                              location: n,
                              navigate: (gt) =>
                                this.navigate({
                                  ...gt,
                                  _fromLocation: n,
                                }),
                              cause: o ? 'preload' : he,
                              route: P,
                            }
                          },
                          b = Date.now() - this.getMatch(y).updatedAt,
                          O = o
                            ? (P.options.preloadStaleTime ??
                              this.options.defaultPreloadStaleTime ??
                              3e4)
                            : (P.options.staleTime ?? this.options.defaultStaleTime ?? 0),
                          H = P.options.shouldReload,
                          V = typeof H == 'function' ? H(I()) : H
                        s(y, (M) => ({
                          ...M,
                          loaderPromise: mr(),
                          preload: !!o && !this.state.matches.find((U) => U.id === y),
                        }))
                        const z = async () => {
                            var M, U, $, fe, he, gt, st, Mt
                            try {
                              const cr = async () => {
                                const ze = this.getMatch(y)
                                ze.minPendingPromise && (await ze.minPendingPromise)
                              }
                              try {
                                P._lazyPromise =
                                  P._lazyPromise ||
                                  (P.lazyFn
                                    ? P.lazyFn().then((Rt) => {
                                        Object.assign(P.options, Rt.options)
                                      })
                                    : Promise.resolve())
                                const ze =
                                  this.getMatch(y).componentsPromise ||
                                  P._lazyPromise.then(() =>
                                    Promise.all(
                                      Iy.map(async (Rt) => {
                                        const te = P.options[Rt]
                                        te != null && te.preload && (await te.preload())
                                      }),
                                    ),
                                  )
                                s(y, (Rt) => ({
                                  ...Rt,
                                  isFetching: 'loader',
                                  componentsPromise: ze,
                                }))
                                let Ye = await ((U = (M = P.options).loader) == null
                                  ? void 0
                                  : U.call(M, I()))
                                this.serializeLoaderData &&
                                  (Ye = this.serializeLoaderData('loaderData', Ye, {
                                    router: this,
                                    match: this.getMatch(y),
                                  })),
                                  d(this.getMatch(y), Ye),
                                  await P._lazyPromise,
                                  await cr()
                                const xt =
                                    (fe = ($ = P.options).meta) == null
                                      ? void 0
                                      : fe.call($, {
                                          matches: r,
                                          match: this.getMatch(y),
                                          params: this.getMatch(y).params,
                                          loaderData: Ye,
                                        }),
                                  wi =
                                    (gt = (he = P.options).headers) == null
                                      ? void 0
                                      : gt.call(he, {
                                          loaderData: Ye,
                                        })
                                s(y, (Rt) => ({
                                  ...Rt,
                                  error: void 0,
                                  status: 'success',
                                  isFetching: !1,
                                  updatedAt: Date.now(),
                                  loaderData: Ye,
                                  meta: xt,
                                  headers: wi,
                                }))
                              } catch (ze) {
                                let Ye = ze
                                await cr(), d(this.getMatch(y), ze)
                                try {
                                  ;(Mt = (st = P.options).onError) == null || Mt.call(st, ze)
                                } catch (xt) {
                                  ;(Ye = xt), d(this.getMatch(y), xt)
                                }
                                s(y, (xt) => ({
                                  ...xt,
                                  error: Ye,
                                  status: 'error',
                                  isFetching: !1,
                                }))
                              }
                              await this.getMatch(y).componentsPromise
                            } catch (cr) {
                              d(this.getMatch(y), cr)
                            }
                          },
                          { status: B, invalid: Q } = this.getMatch(y)
                        ;(T = B === 'success' && (Q || (V ?? b > O))),
                          (o && P.options.preload === !1) ||
                            (T
                              ? (async () => {
                                  try {
                                    await z()
                                  } catch {}
                                })()
                              : B !== 'success' && (await z()))
                        const { loaderPromise: E, loadPromise: A } = this.getMatch(y)
                        E == null || E.resolve(), A == null || A.resolve()
                      }
                      s(y, (R) => ({
                        ...R,
                        isFetching: T ? R.isFetching : !1,
                        loaderPromise: void 0,
                      }))
                    })(),
                  )
                }),
                  await Promise.all(h),
                  f()
              } catch (S) {
                c(S)
              }
            })()
          }),
            await l()
        } catch (f) {
          if (Dn(f) || Lt(f)) throw (Lt(f) && !o && (await l()), f)
        }
        return r
      }),
      (this.invalidate = () => {
        const n = (r) => ({
          ...r,
          invalid: !0,
          ...(r.status === 'error'
            ? {
                status: 'pending',
                error: void 0,
              }
            : {}),
        })
        return (
          this.__store.setState((r) => {
            var o
            return {
              ...r,
              matches: r.matches.map(n),
              cachedMatches: r.cachedMatches.map(n),
              pendingMatches: (o = r.pendingMatches) == null ? void 0 : o.map(n),
            }
          }),
          this.load()
        )
      }),
      (this.resolveRedirect = (n) => {
        const r = n
        return r.href || (r.href = this.buildLocation(r).href), r
      }),
      (this.cleanCache = () => {
        this.__store.setState((n) => ({
          ...n,
          cachedMatches: n.cachedMatches.filter((r) => {
            const o = this.looseRoutesById[r.routeId]
            if (!o.options.loader) return !1
            const i =
              (r.preload
                ? (o.options.preloadGcTime ?? this.options.defaultPreloadGcTime)
                : (o.options.gcTime ?? this.options.defaultGcTime)) ?? 5 * 60 * 1e3
            return r.status !== 'error' && Date.now() - r.updatedAt < i
          }),
        }))
      }),
      (this.preloadRoute = async (n) => {
        const r = this.buildLocation(n)
        let o = this.matchRoutes(r, {
          throwOnError: !0,
          preload: !0,
        })
        const i = Object.fromEntries(
          [
            ...this.state.matches,
            ...(this.state.pendingMatches ?? []),
            ...this.state.cachedMatches,
          ].map((a) => [a.id, !0]),
        )
        this.__store.batch(() => {
          o.forEach((a) => {
            i[a.id] ||
              this.__store.setState((u) => ({
                ...u,
                cachedMatches: [...u.cachedMatches, a],
              }))
          })
        })
        const s = new Set(
          [...this.state.matches, ...(this.state.pendingMatches ?? [])].map((a) => a.id),
        )
        try {
          return (
            (o = await this.loadMatches({
              matches: o,
              location: r,
              preload: !0,
              updateMatch: (a, u) => {
                s.has(a) ? (o = o.map((l) => (l.id === a ? u(l) : l))) : this.updateMatch(a, u)
              },
            })),
            o
          )
        } catch (a) {
          if (Dn(a))
            return await this.preloadRoute({
              ...a,
              _fromLocation: r,
            })
          console.error(a)
          return
        }
      }),
      (this.matchRoute = (n, r) => {
        const o = {
            ...n,
            to: n.to ? this.resolvePathWithBase(n.from || '', n.to) : void 0,
            params: n.params || {},
            leaveParams: !0,
          },
          i = this.buildLocation(o)
        if (r != null && r.pending && this.state.status !== 'pending') return !1
        const a = ((r == null ? void 0 : r.pending) === void 0 ? !this.state.isLoading : r.pending)
            ? this.latestLocation
            : this.state.resolvedLocation,
          u = Qi(this.basepath, a.pathname, {
            ...r,
            to: i.pathname,
          })
        return !u || (n.params && !Fr(u, n.params, !0))
          ? !1
          : u && ((r == null ? void 0 : r.includeSearch) ?? !0)
            ? Fr(a.search, i.search, !0)
              ? u
              : !1
            : u
      }),
      (this.dehydrate = () => {
        var n
        const r = ((n = this.options.errorSerializer) == null ? void 0 : n.serialize) ?? rR
        return {
          state: {
            dehydratedMatches: this.state.matches.map((o) => ({
              ...Mo(o, ['id', 'status', 'updatedAt']),
              error: o.error
                ? {
                    data: r(o.error),
                    __isServerError: !0,
                  }
                : void 0,
            })),
          },
          manifest: this.manifest,
        }
      }),
      (this.hydrate = () => {
        var n, r, o
        let i
        typeof document < 'u' &&
          (i = this.options.transformer.parse(
            (n = window.__TSR__) == null ? void 0 : n.dehydrated,
          )),
          Be(i),
          (this.dehydratedData = i.payload),
          (o = (r = this.options).hydrate) == null || o.call(r, i.payload)
        const s = i.router.state,
          a = this.matchRoutes(this.state.location).map((u) => {
            const l = s.dehydratedMatches.find((d) => d.id === u.id)
            return (
              Be(l, `Could not find a client-side match for dehydrated match with id: ${u.id}!`),
              {
                ...u,
                ...l,
              }
            )
          })
        this.__store.setState((u) => ({
          ...u,
          matches: a,
        })),
          (this.manifest = i.router.manifest)
      }),
      (this.injectedHtml = []),
      (this.injectHtml = (n) => {
        const r = () => ((this.injectedHtml = this.injectedHtml.filter((o) => o !== r)), n)
        this.injectedHtml.push(r)
      }),
      (this.streamedKeys = new Set()),
      (this.getStreamedValue = (n) => {
        var r
        if (this.isServer) return
        const o = (r = window.__TSR__) == null ? void 0 : r.streamedValues[n]
        if (o) return o.parsed || (o.parsed = this.options.transformer.parse(o.value)), o.parsed
      }),
      (this.streamValue = (n, r) => {
        var o
        this.streamedKeys.has(n), this.streamedKeys.add(n)
        const i = `__TSR__.streamedValues['${n}'] = { value: ${(o = this.serializer) == null ? void 0 : o.call(this, this.options.transformer.stringify(r))}}`
        this.injectHtml(`<script class='tsr-once'>${i}; __TSR__.cleanScripts()<\/script>`)
      }),
      (this._handleNotFound = (n, r, { updateMatch: o = this.updateMatch } = {}) => {
        const i = Object.fromEntries(n.map((u) => [u.routeId, u]))
        let s =
          (r.global ? this.looseRoutesById[Qe] : this.looseRoutesById[r.routeId]) ||
          this.looseRoutesById[Qe]
        for (
          ;
          !s.options.notFoundComponent && !this.options.defaultNotFoundComponent && s.id !== Qe;

        )
          (s = s.parentRoute), Be(s)
        const a = i[s.id]
        Be(a, 'Could not find match for route: ' + s.id),
          o(a.id, (u) => ({
            ...u,
            status: 'notFound',
            error: r,
            isFetching: !1,
          })),
          r.routerCode === 'BEFORE_LOAD' &&
            s.parentRoute &&
            ((r.routeId = s.parentRoute.id),
            this._handleNotFound(n, r, {
              updateMatch: o,
            }))
      }),
      (this.hasNotFoundMatch = () =>
        this.__store.state.matches.some((n) => n.status === 'notFound' || n.globalNotFound)),
      this.update({
        defaultPreloadDelay: 50,
        defaultPendingMs: 1e3,
        defaultPendingMinMs: 500,
        context: void 0,
        ...t,
        notFoundMode: t.notFoundMode ?? 'fuzzy',
        stringifySearch: t.stringifySearch ?? Fx,
        parseSearch: t.parseSearch ?? bx,
        transformer: t.transformer ?? Qx,
      }),
      typeof document < 'u' && (window.__TSR__ROUTER__ = this)
  }
  get state() {
    return this.__store.state
  }
  get looseRoutesById() {
    return this.routesById
  }
  matchRoutes(t, n, r) {
    return typeof t == 'string'
      ? this.matchRoutesInternal(
          {
            pathname: t,
            search: n,
          },
          r,
        )
      : this.matchRoutesInternal(t, n)
  }
  matchRoutesInternal(t, n) {
    let r = {}
    const o = this.flatRoutes.find((f) => {
      const c = Qi(this.basepath, jn(t.pathname), {
        to: f.fullPath,
        caseSensitive: f.options.caseSensitive ?? this.options.caseSensitive,
        fuzzy: !0,
      })
      return c ? ((r = c), !0) : !1
    })
    let i = o || this.routesById[Qe]
    const s = [i]
    let a = !1
    for (
      (o ? o.path !== '/' && r['**'] : jn(t.pathname)) &&
      (this.options.notFoundRoute ? s.push(this.options.notFoundRoute) : (a = !0));
      i.parentRoute;

    )
      (i = i.parentRoute), s.unshift(i)
    const u = (() => {
        if (a) {
          if (this.options.notFoundMode !== 'root')
            for (let f = s.length - 1; f >= 0; f--) {
              const c = s[f]
              if (c.children) return c.id
            }
          return Qe
        }
      })(),
      l = s.map((f) => {
        var c
        let p
        const g = ((c = f.options.params) == null ? void 0 : c.parse) ?? f.options.parseParams
        if (g)
          try {
            const v = g(r)
            Object.assign(r, v)
          } catch (v) {
            if (
              ((p = new tR(v.message, {
                cause: v,
              })),
              n != null && n.throwOnError)
            )
              throw p
            return p
          }
      }),
      d = []
    return (
      s.forEach((f, c) => {
        var p, g, v, S, m, h, y, _, k, w, T, R
        const P = d[c - 1],
          [I, b] = (() => {
            const $ = (P == null ? void 0 : P.search) ?? t.search
            try {
              const fe =
                  typeof f.options.validateSearch == 'object'
                    ? f.options.validateSearch.parse
                    : f.options.validateSearch,
                he = (fe == null ? void 0 : fe($)) ?? {}
              return [
                {
                  ...$,
                  ...he,
                },
                void 0,
              ]
            } catch (fe) {
              const he = new eR(fe.message, {
                cause: fe,
              })
              if (n != null && n.throwOnError) throw he
              return [$, he]
            }
          })(),
          O =
            ((g = (p = f.options).loaderDeps) == null
              ? void 0
              : g.call(p, {
                  search: I,
                })) ?? '',
          H = O ? JSON.stringify(O) : '',
          V = xu({
            path: f.fullPath,
            params: r,
          }),
          z =
            xu({
              path: f.id,
              params: r,
              leaveWildcards: !0,
            }) + H,
          B = this.getMatch(z),
          Q = this.state.matches.find(($) => $.id === z) ? 'stay' : 'enter'
        let E
        if (B)
          E = {
            ...B,
            cause: Q,
            params: r,
          }
        else {
          const $ =
            f.options.loader || f.options.beforeLoad || f.lazyFn || Jx(f) ? 'pending' : 'success'
          E = {
            id: z,
            index: c,
            routeId: f.id,
            params: r,
            pathname: yn([this.basepath, V]),
            updatedAt: Date.now(),
            search: {},
            searchError: void 0,
            status: $,
            isFetching: !1,
            error: void 0,
            paramsError: l[c],
            __routeContext: {},
            __beforeLoadContext: {},
            context: {},
            abortController: new AbortController(),
            fetchCount: 0,
            cause: Q,
            loaderDeps: O,
            invalid: !1,
            preload: !1,
            links: (S = (v = f.options).links) == null ? void 0 : S.call(v),
            scripts: (h = (m = f.options).scripts) == null ? void 0 : h.call(m),
            staticData: f.options.staticData || {},
            loadPromise: mr(),
            fullPath: f.fullPath,
          }
        }
        E.status === 'success' &&
          ((E.meta =
            (_ = (y = f.options).meta) == null
              ? void 0
              : _.call(y, {
                  matches: d,
                  match: E,
                  params: E.params,
                  loaderData: E.loaderData,
                })),
          (E.headers =
            (w = (k = f.options).headers) == null
              ? void 0
              : w.call(k, {
                  loaderData: E.loaderData,
                }))),
          (n != null && n.preload) || (E.globalNotFound = u === f.id),
          (E.search = hr(E.search, I)),
          (E.searchError = b)
        const M = (P == null ? void 0 : P.id)
          ? (P.context ?? this.options.context ?? {})
          : (this.options.context ?? {})
        E.context = {
          ...M,
          ...E.__routeContext,
          ...E.__beforeLoadContext,
        }
        const U = {
          search: E.search,
          params: E.params,
          context: E.context,
          location: t,
          navigate: ($) =>
            this.navigate({
              ...$,
              _fromLocation: t,
            }),
          buildLocation: this.buildLocation,
          cause: E.cause,
          abortController: E.abortController,
          preload: !!E.preload,
          matches: d,
        }
        ;(E.__routeContext = ((R = (T = f.options).context) == null ? void 0 : R.call(T, U)) ?? {}),
          (E.context = {
            ...M,
            ...E.__routeContext,
            ...E.__beforeLoadContext,
          }),
          d.push(E)
      }),
      d
    )
  }
}
class eR extends Error {}
class tR extends Error {}
function nR(e) {
  return {
    loadedAt: 0,
    isLoading: !1,
    isTransitioning: !1,
    status: 'idle',
    resolvedLocation: {
      ...e,
    },
    location: e,
    matches: [],
    pendingMatches: [],
    cachedMatches: [],
    statusCode: 200,
  }
}
function rR(e) {
  return e instanceof Error
    ? {
        name: e.name,
        message: e.message,
      }
    : {
        data: e,
      }
}
function Ap(e) {
  return !(typeof e == 'object' && e && 'data' in e) ||
    !('__isServerError' in e && e.__isServerError) ||
    !(typeof e.data == 'object' && e.data)
    ? !1
    : e.__isServerError === !0
}
function Dp(e) {
  if ('name' in e && 'message' in e) {
    const t = new Error(e.message)
    return (t.name = e.name), t
  }
  return e.data
}
const Oa = F.createContext(void 0)
function Jr(e) {
  const t = F.useContext(Oa)
  return et({
    select: (r) => {
      const o = r.matches.find((i) => (e.from ? e.from === i.routeId : i.id === t))
      if (
        (Be(
          !((e.shouldThrow ?? !0) && !o),
          `Could not find ${e.from ? `an active match from "${e.from}"` : 'a nearest match!'}`,
        ),
        o !== void 0)
      )
        return e.select ? e.select(o) : o
    },
  })
}
function oR(e) {
  return Jr({
    ...e,
    select: (t) => (typeof e.select == 'function' ? e.select(t.loaderDeps) : t.loaderDeps),
  })
}
function iR(e) {
  return Jr({
    ...e,
    select: (t) => (typeof e.select == 'function' ? e.select(t.loaderData) : t.loaderData),
  })
}
function sR(e) {
  return Jr({
    ...e,
    select: (t) => (e.select ? e.select(t.params) : t.params),
  })
}
function aR(e) {
  return Jr({
    ...e,
    select: (t) => (e.select ? e.select(t.search) : t.search),
  })
}
function uR(e) {
  const { navigate: t } = On()
  return F.useCallback(
    (n) =>
      t({
        ...n,
      }),
    [t],
  )
}
class Ly {
  constructor(t) {
    ;(this.init = (n) => {
      var r, o
      this.originalIndex = n.originalIndex
      const i = this.options,
        s = !(i != null && i.path) && !(i != null && i.id)
      ;(this.parentRoute = (o = (r = this.options).getParentRoute) == null ? void 0 : o.call(r)),
        s ? (this._path = Qe) : Be(this.parentRoute)
      let a = s ? Qe : i.path
      a && a !== '/' && (a = nd(a))
      const u = (i == null ? void 0 : i.id) || a
      let l = s ? Qe : yn([this.parentRoute.id === Qe ? '' : this.parentRoute.id, u])
      a === Qe && (a = '/'), l !== Qe && (l = yn(['/', l]))
      const d = l === Qe ? '/' : yn([this.parentRoute.fullPath, a])
      ;(this._path = a),
        (this._id = l),
        (this._fullPath = d),
        (this._to = d),
        (this._ssr = (i == null ? void 0 : i.ssr) ?? n.defaultSsr ?? !0)
    }),
      (this.updateLoader = (n) => (Object.assign(this.options, n), this)),
      (this.update = (n) => (Object.assign(this.options, n), this)),
      (this.lazy = (n) => ((this.lazyFn = n), this)),
      (this.useMatch = (n) =>
        Jr({
          ...n,
          from: this.id,
        })),
      (this.useRouteContext = (n) =>
        Jr({
          ...n,
          from: this.id,
          select: (r) => (n != null && n.select ? n.select(r.context) : r.context),
        })),
      (this.useSearch = (n) =>
        aR({
          ...n,
          from: this.id,
        })),
      (this.useParams = (n) =>
        sR({
          ...n,
          from: this.id,
        })),
      (this.useLoaderDeps = (n) =>
        oR({
          ...n,
          from: this.id,
        })),
      (this.useLoaderData = (n) =>
        iR({
          ...n,
          from: this.id,
        })),
      (this.useNavigate = () =>
        uR({
          from: this.id,
        })),
      (this.options = t || {}),
      (this.isRoot = !(t != null && t.getParentRoute)),
      Be(!(t != null && t.id && t != null && t.path)),
      (this.$$typeof = Symbol.for('react.memo'))
  }
  get to() {
    return this._to
  }
  get id() {
    return this._id
  }
  get path() {
    return this._path
  }
  get fullPath() {
    return this._fullPath
  }
  get ssr() {
    return this._ssr
  }
  addChildren(t) {
    return this._addFileChildren(t)
  }
  _addFileChildren(t) {
    return (
      Array.isArray(t) && (this.children = t),
      typeof t == 'object' && t !== null && (this.children = Object.values(t)),
      this
    )
  }
}
function $e(e) {
  return new Ly(e)
}
class lR extends Ly {
  constructor(t) {
    super(t)
  }
  addChildren(t) {
    return super.addChildren(t), this
  }
  _addFileChildren(t) {
    return super._addFileChildren(t), this
  }
  _addFileTypes() {
    return this
  }
}
function cR(e) {
  return new lR(e)
}
function gs(e) {
  return D.jsx(D.Fragment, {
    children: e.children,
  })
}
function Oy(e, t, n) {
  return t.options.notFoundComponent
    ? D.jsx(t.options.notFoundComponent, {
        data: n,
      })
    : e.options.defaultNotFoundComponent
      ? D.jsx(e.options.defaultNotFoundComponent, {
          data: n,
        })
      : D.jsx(qx, {})
}
const Ny = F.memo(function ({ matchId: t }) {
    var n, r
    const o = On(),
      i = et({
        select: (S) => {
          var m
          return (m = S.matches.find((h) => h.id === t)) == null ? void 0 : m.routeId
        },
      })
    Be(i)
    const s = o.routesById[i],
      a = s.options.pendingComponent ?? o.options.defaultPendingComponent,
      u = a ? D.jsx(a, {}) : null,
      l = s.options.errorComponent ?? o.options.defaultErrorComponent,
      d = s.options.onCatch ?? o.options.defaultOnCatch,
      f = s.isRoot
        ? (s.options.notFoundComponent ??
          ((n = o.options.notFoundRoute) == null ? void 0 : n.options.component))
        : s.options.notFoundComponent,
      c =
        (!s.isRoot || s.options.wrapInSuspense) &&
        (s.options.wrapInSuspense ??
          a ??
          ((r = s.options.errorComponent) == null ? void 0 : r.preload))
          ? F.Suspense
          : gs,
      p = l ? rd : gs,
      g = f ? Yx : gs,
      v = et({
        select: (S) => S.loadedAt,
      })
    return D.jsx(Oa.Provider, {
      value: t,
      children: D.jsx(c, {
        fallback: u,
        children: D.jsx(p, {
          getResetKey: () => v,
          errorComponent: l || La,
          onCatch: (S, m) => {
            if (Lt(S)) throw S
            d == null || d(S, m)
          },
          children: D.jsx(g, {
            fallback: (S) => {
              if (!f || (S.routeId && S.routeId !== i) || (!S.routeId && !s.isRoot)) throw S
              return F.createElement(f, S)
            },
            children: D.jsx(dR, {
              matchId: t,
            }),
          }),
        }),
      }),
    })
  }),
  dR = F.memo(function ({ matchId: t }) {
    var n, r, o
    const i = On(),
      {
        match: s,
        matchIndex: a,
        routeId: u,
      } = et({
        select: (c) => {
          const p = c.matches.findIndex((S) => S.id === t),
            g = c.matches[p]
          return {
            routeId: g.routeId,
            matchIndex: p,
            match: Mo(g, ['id', 'status', 'error', 'loadPromise']),
          }
        },
      }),
      l = i.routesById[u],
      d = F.useMemo(() => {
        const c = l.options.component ?? i.options.defaultComponent
        return c ? D.jsx(c, {}) : D.jsx(Ay, {})
      }, [l.options.component, i.options.defaultComponent]),
      f = (l.options.errorComponent ?? i.options.defaultErrorComponent) || La
    if (s.status === 'notFound') {
      let c
      return (
        Ap(s.error)
          ? (c = (((n = i.options.errorSerializer) == null ? void 0 : n.deserialize) ?? Dp)(
              s.error.data,
            ))
          : (c = s.error),
        Be(Lt(c)),
        Oy(i, l, c)
      )
    }
    if (s.status === 'redirected') throw (Be(Dn(s.error)), s.loadPromise)
    if (s.status === 'error') {
      if (i.isServer)
        return D.jsx(f, {
          error: s.error,
          info: {
            componentStack: '',
          },
        })
      throw Ap(s.error)
        ? (((r = i.options.errorSerializer) == null ? void 0 : r.deserialize) ?? Dp)(s.error.data)
        : s.error
    }
    if (s.status === 'pending') {
      const c = l.options.pendingMinMs ?? i.options.defaultPendingMinMs
      if (c && !((o = i.getMatch(s.id)) != null && o.minPendingPromise) && !i.isServer) {
        const p = mr()
        Promise.resolve().then(() => {
          i.updateMatch(s.id, (g) => ({
            ...g,
            minPendingPromise: p,
          }))
        }),
          setTimeout(() => {
            p.resolve(),
              i.updateMatch(s.id, (g) => ({
                ...g,
                minPendingPromise: void 0,
              }))
          }, c)
      }
      throw s.loadPromise
    }
    return D.jsxs(D.Fragment, {
      children: [
        d,
        i.AfterEachMatch
          ? D.jsx(i.AfterEachMatch, {
              match: s,
              matchIndex: a,
            })
          : null,
      ],
    })
  }),
  Ay = F.memo(function () {
    const t = On(),
      n = F.useContext(Oa),
      r = et({
        select: (l) => {
          var d
          return (d = l.matches.find((f) => f.id === n)) == null ? void 0 : d.routeId
        },
      }),
      o = t.routesById[r],
      { parentGlobalNotFound: i } = et({
        select: (l) => {
          const f = l.matches.find((c) => c.id === n)
          return (
            Be(f),
            {
              parentGlobalNotFound: f.globalNotFound,
            }
          )
        },
      }),
      s = et({
        select: (l) => {
          var d
          const f = l.matches,
            c = f.findIndex((p) => p.id === n)
          return (d = f[c + 1]) == null ? void 0 : d.id
        },
      })
    if (i) return Oy(t, o, void 0)
    if (!s) return null
    const a = D.jsx(Ny, {
        matchId: s,
      }),
      u = t.options.defaultPendingComponent ? D.jsx(t.options.defaultPendingComponent, {}) : null
    return n === Qe
      ? D.jsx(F.Suspense, {
          fallback: u,
          children: a,
        })
      : a
  })
function fR(e) {
  return (
    typeof (e == null ? void 0 : e.message) == 'string' &&
    /Failed to fetch dynamically imported module/.test(e.message)
  )
}
function je(e, t, n) {
  let r, o, i
  const s = () => (
      typeof document > 'u',
      r ||
        (r = e()
          .then((u) => {
            ;(r = void 0), (o = u.default)
          })
          .catch((u) => {
            i = u
          })),
      r
    ),
    a = function (l) {
      if (i) {
        if (fR(i) && i instanceof Error && typeof window < 'u' && typeof sessionStorage < 'u') {
          const d = `tanstack_router_reload:${i.message}`
          if (!sessionStorage.getItem(d))
            return (
              sessionStorage.setItem(d, '1'),
              window.location.reload(),
              {
                default: () => null,
              }
            )
        }
        throw i
      }
      if (!o) throw s()
      return F.createElement(o, l)
    }
  return (a.preload = s), a
}
const pR = 'Error preloading route! ☝️'
function hR(e, t) {
  const n = On(),
    [r, o] = F.useState(!1),
    i = Bx(t),
    {
      activeProps: s = () => ({
        className: 'active',
      }),
      inactiveProps: a = () => ({}),
      activeOptions: u,
      hash: l,
      search: d,
      params: f,
      to: c,
      state: p,
      mask: g,
      preload: v,
      preloadDelay: S,
      replace: m,
      startTransition: h,
      resetScroll: y,
      viewTransition: _,
      children: k,
      target: w,
      disabled: T,
      style: R,
      className: P,
      onClick: I,
      onFocus: b,
      onMouseEnter: O,
      onMouseLeave: H,
      onTouchStart: V,
      ignoreBlocker: z,
      ...B
    } = e,
    Q = F.useMemo(() => {
      try {
        return new URL(`${c}`), 'external'
      } catch {}
      return 'internal'
    }, [c]),
    E = F.useMemo(() => n.buildLocation(e), [n, e]),
    A = F.useMemo(() => v ?? n.options.defaultPreload, [n.options.defaultPreload, v]),
    M = S ?? n.options.defaultPreloadDelay ?? 0,
    U = et({
      select: (te) => {
        const xe = ea(te.location.pathname, n.basepath).split('/'),
          Aa = ea(E.pathname, n.basepath)
            .split('/')
            .every(($y, jy) => $y === xe[jy]),
          My = u != null && u.exact ? Vx(te.location.pathname, E.pathname, n.basepath) : Aa,
          by = u != null && u.includeHash ? te.location.hash === E.hash : !0,
          Fy =
            ((u == null ? void 0 : u.includeSearch) ?? !0)
              ? Fr(te.location.search, E.search, !(u != null && u.exact))
              : !0
        return My && by && Fy
      },
    }),
    $ = F.useCallback(() => {
      n.preloadRoute(e).catch((te) => {
        console.warn(te), console.warn(pR)
      })
    }, [e, n]),
    fe = F.useCallback(
      (te) => {
        te != null && te.isIntersecting && $()
      },
      [$],
    )
  if (
    (Ux(
      i,
      fe,
      {
        rootMargin: '100px',
      },
      {
        disabled: !!T || A !== 'viewport',
      },
    ),
    Q === 'external')
  )
    return {
      ...B,
      ref: i,
      type: Q,
      href: c,
      ...(k && {
        children: k,
      }),
      ...(w && {
        target: w,
      }),
      ...(T && {
        disabled: T,
      }),
      ...(R && {
        style: R,
      }),
      ...(P && {
        className: P,
      }),
      ...(I && {
        onClick: I,
      }),
      ...(b && {
        onFocus: b,
      }),
      ...(O && {
        onMouseEnter: O,
      }),
      ...(H && {
        onMouseLeave: H,
      }),
      ...(V && {
        onTouchStart: V,
      }),
    }
  const he = (te) => {
      if (!T && !gR(te) && !te.defaultPrevented && (!w || w === '_self') && te.button === 0) {
        te.preventDefault(),
          Xm.flushSync(() => {
            o(!0)
          })
        const xe = n.subscribe('onResolved', () => {
          xe(), o(!1)
        })
        n.commitLocation({
          ...E,
          replace: m,
          resetScroll: y,
          startTransition: h,
          viewTransition: _,
          ignoreBlocker: z,
        })
      }
    },
    gt = (te) => {
      T || (A && $())
    },
    st = gt,
    Mt = (te) => {
      if (T) return
      const xe = te.target || {}
      if (A) {
        if (xe.preloadTimeout) return
        xe.preloadTimeout = setTimeout(() => {
          ;(xe.preloadTimeout = null), $()
        }, M)
      }
    },
    cr = (te) => {
      if (T) return
      const xe = te.target || {}
      xe.preloadTimeout && (clearTimeout(xe.preloadTimeout), (xe.preloadTimeout = null))
    },
    ze = (te) => (xe) => {
      var Na
      ;(Na = xe.persist) == null || Na.call(xe),
        te.filter(Boolean).forEach((Aa) => {
          xe.defaultPrevented || Aa(xe)
        })
    },
    Ye = U ? (Lr(s, {}) ?? {}) : {},
    xt = U ? {} : Lr(a, {}),
    wi = [P, Ye.className, xt.className].filter(Boolean).join(' '),
    Rt = {
      ...R,
      ...Ye.style,
      ...xt.style,
    }
  return {
    ...B,
    ...Ye,
    ...xt,
    href: T
      ? void 0
      : E.maskedLocation
        ? n.history.createHref(E.maskedLocation.href)
        : n.history.createHref(E.href),
    ref: i,
    onClick: ze([I, he]),
    onFocus: ze([b, gt]),
    onMouseEnter: ze([O, Mt]),
    onMouseLeave: ze([H, cr]),
    onTouchStart: ze([V, st]),
    disabled: !!T,
    target: w,
    ...(Object.keys(Rt).length && {
      style: Rt,
    }),
    ...(wi && {
      className: wi,
    }),
    ...(T && {
      role: 'link',
      'aria-disabled': !0,
    }),
    ...(U && {
      'data-status': 'active',
      'aria-current': 'page',
    }),
    ...(r && {
      'data-transitioning': 'transitioning',
    }),
  }
}
const mR = F.forwardRef((e, t) => {
  const { _asChild: n, ...r } = e,
    { type: o, ref: i, ...s } = hR(r, t),
    a =
      typeof r.children == 'function'
        ? r.children({
            isActive: s['data-status'] === 'active',
          })
        : r.children
  return (
    typeof n > 'u' && delete s.disabled,
    F.createElement(
      n || 'a',
      {
        ...s,
        ref: i,
      },
      a,
    )
  )
})
function gR(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function yR() {
  const e = On(),
    t = F.useRef({
      router: e,
      mounted: !1,
    }),
    n = et({
      select: (l) => Mo(l, ['isLoading', 'location', 'resolvedLocation', 'isTransitioning']),
    }),
    [r, o] = F.useTransition(),
    i = et({
      select: (l) => l.matches.some((d) => d.status === 'pending'),
    }),
    s = Lp(n.isLoading),
    a = n.isLoading || r || i,
    u = Lp(a)
  return (
    e.isServer || (e.startReactTransition = o),
    F.useEffect(() => {
      const l = e.history.subscribe(e.load),
        d = e.buildLocation({
          to: e.latestLocation.pathname,
          search: !0,
          params: !0,
          hash: !0,
          state: !0,
        })
      return (
        jn(e.latestLocation.href) !== jn(d.href) &&
          e.commitLocation({
            ...d,
            replace: !0,
          }),
        () => {
          l()
        }
      )
    }, [e, e.history]),
    ku(() => {
      var l
      if (
        (typeof window < 'u' && (l = window.__TSR__) != null && l.dehydrated) ||
        (t.current.router === e && t.current.mounted)
      )
        return
      ;(t.current = {
        router: e,
        mounted: !0,
      }),
        (async () => {
          try {
            await e.load()
          } catch (f) {
            console.error(f)
          }
        })()
    }, [e]),
    ku(() => {
      if (s && !n.isLoading) {
        const l = e.state.location,
          d = e.state.resolvedLocation,
          f = d.href !== l.href
        e.emit({
          type: 'onLoad',
          fromLocation: d,
          toLocation: l,
          pathChanged: f,
        })
      }
    }, [s, e, n.isLoading]),
    ku(() => {
      if (u && !a) {
        const l = e.state.location,
          d = e.state.resolvedLocation,
          f = d.href !== l.href
        if (
          (e.emit({
            type: 'onResolved',
            fromLocation: d,
            toLocation: l,
            pathChanged: f,
          }),
          e.__store.setState((c) => ({
            ...c,
            status: 'idle',
            resolvedLocation: c.location,
          })),
          typeof document < 'u' && document.querySelector && e.state.location.hash !== '')
        ) {
          const c = document.getElementById(e.state.location.hash)
          c && c.scrollIntoView()
        }
      }
    }, [a, u, e]),
    null
  )
}
function vR() {
  const e = On(),
    t = e.options.defaultPendingComponent ? D.jsx(e.options.defaultPendingComponent, {}) : null,
    n = e.isServer || (typeof document < 'u' && window.__TSR__) ? gs : F.Suspense,
    r = D.jsxs(n, {
      fallback: t,
      children: [D.jsx(yR, {}), D.jsx(_R, {})],
    })
  return e.options.InnerWrap
    ? D.jsx(e.options.InnerWrap, {
        children: r,
      })
    : r
}
function _R() {
  const e = et({
      select: (n) => {
        var r
        return (r = n.matches[0]) == null ? void 0 : r.id
      },
    }),
    t = et({
      select: (n) => n.loadedAt,
    })
  return D.jsx(Oa.Provider, {
    value: e,
    children: D.jsx(rd, {
      getResetKey: () => t,
      errorComponent: La,
      onCatch: (n) => {
        n.message || n.toString()
      },
      children: e
        ? D.jsx(Ny, {
            matchId: e,
          })
        : null,
    }),
  })
}
function SR({ router: e, children: t, ...n }) {
  e.update({
    ...e.options,
    ...n,
    context: {
      ...e.options.context,
      ...n.context,
    },
  })
  const r = ky(),
    o = D.jsx(r.Provider, {
      value: e,
      children: t,
    })
  return e.options.Wrap
    ? D.jsx(e.options.Wrap, {
        children: o,
      })
    : o
}
function ER({ router: e, ...t }) {
  return D.jsx(SR, {
    router: e,
    ...t,
    children: D.jsx(vR, {}),
  })
}
const wR = (e) => getComputedStyle(document.body).getPropertyValue(e).trim(),
  eP = (e, t) => {
    document.body.style.setProperty(e, t)
  },
  tP = (e) => {
    document.body.style.removeProperty(e)
  },
  nP = (e, t) => {
    switch (e) {
      case 'show':
        return !0
      case 'hide':
        return !1
      case 'mobile':
        return t
      case 'desktop':
        return !t
      default:
        return !0
    }
  },
  TR = () => {
    const e = wR('--spinner-image')
    return D.jsx('div', {
      className: 'spinner-wrapper',
      'data-testid': 'spinner-wrapper',
      children: e
        ? D.jsx('div', {
            className: 'spinner-image',
          })
        : D.jsx('div', {
            className: 'spinner',
          }),
    })
  },
  Mp = 'tequity',
  kR = ({ children: e, theme: t, defaultTheme: n }) => {
    const [r, o] = F.useState(!0),
      [i, s] = F.useState(t),
      a = F.useRef(window.location.hash),
      u = F.useCallback(() => {
        let f = 3
        const c = () => {
          L(() => Promise.resolve({}), __vite__mapDeps([0]), import.meta.url)
            .then(() => {
              document.fonts.ready.then(() => {
                var p
                ;(p = document.querySelector('#forceFontLoad')) == null || p.remove(), o(!1)
              })
            })
            .catch(() => {
              if (--f >= 0) setTimeout(c, 100)
              else throw new Error('Failed to load index.css after 3 attempts')
            })
        }
        c()
      }, []),
      l = F.useCallback((f) => {
        const c = Object.assign({}, ...Object.values(f)),
          p = Object.entries(c).reduce((g, [v, S]) => `${g && `${g};`}${v}:${S}`, '')
        document.body.style.cssText = p
      }, []),
      d = F.useCallback(() => {
        const f = `/games/themes/${Mp}.json`
        fetch(f)
          .then((c) => {
            if (!c.ok) throw new Error(c.status.toString())
            return c.json()
          })
          .then((c) => {
            l(c), u()
          })
          .catch((c) => {
            if ((console.error('Error loading default theme:', c), c.message === '404')) u()
            else throw new Error(`Cannot load default theme ${Mp}`)
          })
      }, [u, l])
    return (
      F.useEffect(() => {
        if (i) {
          const f = `/games/themes/${i}.json`
          fetch(f)
            .then((c) => {
              if (!c.ok) throw new Error(c.status.toString())
              return c.json()
            })
            .then((c) => {
              l(c), u()
            })
            .catch((c) => {
              if ((console.error(`Error loading ${i} theme:`, c), c.message === '404'))
                n ? u() : d()
              else throw new Error(`Cannot load theme ${i}`)
            })
        } else n ? u() : d()
      }, [i]),
      F.useEffect(() => {
        const f = (c) => {
          if (!c.target) return
          const p = c.target,
            g = kn(p.location.hash),
            v = kn(a.current)
          if (g[2].value.split('?')[0] !== v[2].value.split('?')[0]) {
            a.current = p.location.hash
            return
          }
          const m = new URLSearchParams(p.location.hash).get('theme')
          m && s(m), o(!0), setTimeout(() => o(!1), 0)
        }
        return (
          window.addEventListener('hashchange', f),
          () => window.removeEventListener('hashchange', f)
        )
      }, []),
      r ? null : e
    )
  },
  bp = {
    nb: 'no',
    cz: 'cs',
    'nl-be': 'nl',
    'zh-tw': 'zh-hant',
  },
  rP = 0.6,
  oP = 999999999,
  iP = {
    'mines-wanted-slots': 'mines',
  },
  xR = () => null,
  Fp = () =>
    D.jsxs('div', {
      id: 'error',
      children: [
        D.jsx('h1', {
          children: 'Something went wrong!',
        }),
        D.jsxs('p', {
          children: [
            'Oppsss.. try to refresh the page or ',
            D.jsx(mR, {
              to: '/',
              children: 'go back to home',
            }),
            '.',
          ],
        }),
      ],
    }),
  Oe = cR({
    component: () =>
      D.jsxs(D.Fragment, {
        children: [D.jsx(Ay, {}), D.jsx(xR, {})],
      }),
    errorComponent: Fp,
    notFoundComponent: Fp,
  }),
  RR = $e({
    getParentRoute: () => Oe,
    path: '/game/dice',
    component: je(() =>
      L(
        () => import('./index-BxAtJ5g_.js'),
        __vite__mapDeps([
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
        ]),
        import.meta.url,
      ),
    ),
    loader: () =>
      L(
        () => import('./index-BxAtJ5g_.js'),
        __vite__mapDeps([
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
        ]),
        import.meta.url,
      ),
  }),
  PR = $e({
    getParentRoute: () => Oe,
    path: '/game/diamonds',
    component: je(() =>
      L(
        () => import('./index-DlaZadYj.js'),
        __vite__mapDeps([
          24, 3, 4, 25, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 26, 27,
        ]),
        import.meta.url,
      ),
    ),
    loader: () =>
      L(
        () => import('./index-DlaZadYj.js'),
        __vite__mapDeps([
          24, 3, 4, 25, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 26, 27,
        ]),
        import.meta.url,
      ),
  }),
  CR = $e({
    getParentRoute: () => Oe,
    path: '/game/plinko',
    component: je(() =>
      L(
        () => import('./index-BMHjkmIT.js'),
        __vite__mapDeps([
          28, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 29, 30, 31, 32, 20, 21, 33, 34,
          35,
        ]),
        import.meta.url,
      ),
    ),
    loader: () =>
      L(
        () => import('./index-BMHjkmIT.js'),
        __vite__mapDeps([
          28, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 29, 30, 31, 32, 20, 21, 33, 34,
          35,
        ]),
        import.meta.url,
      ),
  }),
  IR = $e({
    getParentRoute: () => Oe,
    path: '/game/mines',
    component: je(() =>
      L(
        () => import('./index-C_pR3XR0.js'),
        __vite__mapDeps([
          36, 3, 4, 37, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 38, 39, 40, 41, 31,
          32, 20, 21, 42, 43,
        ]),
        import.meta.url,
      ),
    ),
    loader: () =>
      L(
        () => import('./index-C_pR3XR0.js'),
        __vite__mapDeps([
          36, 3, 4, 37, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 38, 39, 40, 41, 31,
          32, 20, 21, 42, 43,
        ]),
        import.meta.url,
      ),
  }),
  LR = $e({
    getParentRoute: () => Oe,
    path: '/game/mines-wanted-slots',
    component: je(() =>
      L(
        () => import('./index-C_pR3XR0.js'),
        __vite__mapDeps([
          36, 3, 4, 37, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 38, 39, 40, 41, 31,
          32, 20, 21, 42, 43,
        ]),
        import.meta.url,
      ),
    ),
    loader: () =>
      L(
        () => import('./index-C_pR3XR0.js'),
        __vite__mapDeps([
          36, 3, 4, 37, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 38, 39, 40, 41, 31,
          32, 20, 21, 42, 43,
        ]),
        import.meta.url,
      ),
  }),
  OR = $e({
    getParentRoute: () => Oe,
    path: '/game/limbo',
    component: je(() =>
      L(
        () => import('./index-Dp7dWiJu.js'),
        __vite__mapDeps([
          44, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 45,
        ]),
        import.meta.url,
      ),
    ),
    loader: () =>
      L(
        () => import('./index-Dp7dWiJu.js'),
        __vite__mapDeps([
          44, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 45,
        ]),
        import.meta.url,
      ),
  }),
  NR = $e({
    getParentRoute: () => Oe,
    path: '/game/keno',
    component: je(() =>
      L(
        () => import('./index-DYMaS5DS.js'),
        __vite__mapDeps([
          46, 3, 4, 25, 37, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 40, 41, 29, 30,
          31, 32, 20, 21, 47, 48,
        ]),
        import.meta.url,
      ),
    ),
    loader: () =>
      L(
        () => import('./index-DYMaS5DS.js'),
        __vite__mapDeps([
          46, 3, 4, 25, 37, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 40, 41, 29, 30,
          31, 32, 20, 21, 47, 48,
        ]),
        import.meta.url,
      ),
  }),
  AR = $e({
    getParentRoute: () => Oe,
    path: '/game/wheel',
    component: je(() =>
      L(
        () => import('./index-t61uh--1.js'),
        __vite__mapDeps([
          49, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 31, 32, 20, 21, 50, 29,
          30, 51,
        ]),
        import.meta.url,
      ),
    ),
    loader: () =>
      L(
        () => import('./index-t61uh--1.js'),
        __vite__mapDeps([
          49, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 31, 32, 20, 21, 50, 29,
          30, 51,
        ]),
        import.meta.url,
      ),
  }),
  DR = $e({
    getParentRoute: () => Oe,
    path: '/game/hilo',
    component: je(() =>
      L(
        () => import('./index-BpnWrJhR.js'),
        __vite__mapDeps([
          52, 53, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 38, 39, 40, 41, 54, 55,
        ]),
        import.meta.url,
      ),
    ),
    loader: () =>
      L(
        () => import('./index-BpnWrJhR.js'),
        __vite__mapDeps([
          52, 53, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 38, 39, 40, 41, 54, 55,
        ]),
        import.meta.url,
      ),
  }),
  MR = $e({
    getParentRoute: () => Oe,
    path: '/game/videopoker',
    component: je(() =>
      L(
        () => import('./index-BQrTwpTh.js'),
        __vite__mapDeps([
          56, 53, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 40, 41, 57, 58,
        ]),
        import.meta.url,
      ),
    ),
    loader: () =>
      L(
        () => import('./index-BQrTwpTh.js'),
        __vite__mapDeps([
          56, 53, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 40, 41, 57, 58,
        ]),
        import.meta.url,
      ),
  }),
  bR = $e({
    getParentRoute: () => Oe,
    path: '/game/blackjack',
    component: je(() =>
      L(
        () => import('./index-mT5JgMFI.js'),
        __vite__mapDeps([59, 60, 53, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 61, 62]),
        import.meta.url,
      ),
    ),
    loader: () =>
      L(
        () => import('./index-mT5JgMFI.js'),
        __vite__mapDeps([59, 60, 53, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 61, 62]),
        import.meta.url,
      ),
  }),
  FR = $e({
    getParentRoute: () => Oe,
    path: '/game/baccarat',
    component: je(() =>
      L(
        () => import('./index-Dvjt1iDO.js'),
        __vite__mapDeps([
          63, 16, 3, 4, 60, 53, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 40, 41, 20, 21,
          64, 65,
        ]),
        import.meta.url,
      ),
    ),
    loader: () =>
      L(
        () => import('./index-Dvjt1iDO.js'),
        __vite__mapDeps([
          63, 16, 3, 4, 60, 53, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 40, 41, 20, 21,
          64, 65,
        ]),
        import.meta.url,
      ),
  }),
  $R = $e({
    getParentRoute: () => Oe,
    path: '/game/crash',
    component: je(() =>
      L(
        () => import('./index-ENP86-XV.js'),
        __vite__mapDeps([
          66, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 38, 39, 20, 21, 33, 67, 68, 69,
          70, 71, 72, 73, 74,
        ]),
        import.meta.url,
      ),
    ),
    loader: () =>
      L(
        () => import('./index-ENP86-XV.js'),
        __vite__mapDeps([
          66, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 38, 39, 20, 21, 33, 67, 68, 69,
          70, 71, 72, 73, 74,
        ]),
        import.meta.url,
      ),
  }),
  jR = $e({
    getParentRoute: () => Oe,
    path: '/game/dragonstower',
    component: je(() =>
      L(
        () => import('./index-BbnGYZnK.js'),
        __vite__mapDeps([
          75, 3, 4, 37, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 38, 39, 40, 41, 31, 32,
          20, 21, 33, 67, 68, 69, 70, 76, 77,
        ]),
        import.meta.url,
      ),
    ),
    loader: () =>
      L(
        () => import('./index-BbnGYZnK.js'),
        __vite__mapDeps([
          75, 3, 4, 37, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 38, 39, 40, 41, 31, 32,
          20, 21, 33, 67, 68, 69, 70, 76, 77,
        ]),
        import.meta.url,
      ),
  }),
  zR = $e({
    getParentRoute: () => Oe,
    path: '/replay',
    component: je(() =>
      L(() => import('./replay-D7adj5m_.js'), __vite__mapDeps([78, 10]), import.meta.url),
    ),
    loader: () =>
      L(() => import('./replay-D7adj5m_.js'), __vite__mapDeps([78, 10]), import.meta.url),
  }),
  UR = Oe.addChildren([RR, PR, CR, IR, LR, OR, NR, AR, DR, MR, bR, FR, $R, jR, zR]),
  BR = [
    'bg',
    'bn',
    'cs',
    'da',
    'de',
    'el',
    'en-sc',
    'en',
    'es',
    'et',
    'fi',
    'fr',
    'hr',
    'hu',
    'id',
    'it',
    'ja',
    'ka',
    'km',
    'ko',
    'lt',
    'lv',
    'ms',
    'nl',
    'no',
    'pl',
    'pt-br',
    'pt',
    'ro',
    'ru',
    'sk',
    'sv',
    'th',
    'tr',
    'uk',
    'vi',
    'zh-hant',
    'zh',
  ]
sx({
  dsn: 'https://03695b63be919e60f0d16ef57e5e1c90@o4509366023159808.ingest.de.sentry.io/4509366025650256',
  integrations: [nx()],
  sendDefaultPii: !0,
  tracesSampleRate: 0.1,
  environment: 'production',
})
function HR(e) {
  const t = new URLSearchParams(e),
    n = {}
  for (const [r, o] of t.entries()) n[r] = o
  return n
}
function VR(e) {
  const t = new URLSearchParams()
  for (const n in e) {
    const r = e[n]
    r !== void 0 && t.set(n, String(r))
  }
  return t.toString()
}
const WR = ux(),
  Dy = Xx({
    routeTree: UR,
    history: WR,
    parseSearch: HR,
    stringifySearch: VR,
    defaultPreload: 'intent',
  }),
  { theme: KR, language: Ru, view: GR, defaultTheme: YR } = Dy.latestLocation.search,
  qR = GR === 'desktop'
Le.use(K0)
  .use(
    Mv((e) =>
      By(
        Object.assign({
          './locales/bg.json': () => L(() => import('./bg-hdBJHii8.js'), [], import.meta.url),
          './locales/bn.json': () => L(() => import('./bn-B2WQ_Q5y.js'), [], import.meta.url),
          './locales/cs.json': () => L(() => import('./cs-BpQIdnJr.js'), [], import.meta.url),
          './locales/da.json': () => L(() => import('./da-RY31moM1.js'), [], import.meta.url),
          './locales/de.json': () => L(() => import('./de-DYbG6FfF.js'), [], import.meta.url),
          './locales/el.json': () => L(() => import('./el-DClOglCQ.js'), [], import.meta.url),
          './locales/en-sc.json': () => L(() => import('./en-sc-DVKNXXsN.js'), [], import.meta.url),
          './locales/en.json': () => L(() => import('./en-DOBTPJKx.js'), [], import.meta.url),
          './locales/es.json': () => L(() => import('./es-CISxr0vG.js'), [], import.meta.url),
          './locales/et.json': () => L(() => import('./et-13o_qC3f.js'), [], import.meta.url),
          './locales/fi.json': () => L(() => import('./fi-cnmLTZDH.js'), [], import.meta.url),
          './locales/fr.json': () => L(() => import('./fr-DMIlObfk.js'), [], import.meta.url),
          './locales/hr.json': () => L(() => import('./hr-DWcQ3-bl.js'), [], import.meta.url),
          './locales/hu.json': () => L(() => import('./hu-DYeTuecI.js'), [], import.meta.url),
          './locales/id.json': () => L(() => import('./id-CHT9-xlV.js'), [], import.meta.url),
          './locales/it.json': () => L(() => import('./it-zg_1MAc9.js'), [], import.meta.url),
          './locales/ja.json': () => L(() => import('./ja-BqOpbItY.js'), [], import.meta.url),
          './locales/ka.json': () => L(() => import('./ka-CWPWKcLb.js'), [], import.meta.url),
          './locales/km.json': () => L(() => import('./km-DkIzcjpZ.js'), [], import.meta.url),
          './locales/ko.json': () => L(() => import('./ko-DgwlYWZ_.js'), [], import.meta.url),
          './locales/lt.json': () => L(() => import('./lt-GyEOVGyx.js'), [], import.meta.url),
          './locales/lv.json': () => L(() => import('./lv-CuYRhMtw.js'), [], import.meta.url),
          './locales/ms.json': () => L(() => import('./ms-BCXBicN1.js'), [], import.meta.url),
          './locales/nl.json': () => L(() => import('./nl-DgVlpSFs.js'), [], import.meta.url),
          './locales/no.json': () => L(() => import('./no-B2HVja1i.js'), [], import.meta.url),
          './locales/pl.json': () => L(() => import('./pl-Y-kuKiyo.js'), [], import.meta.url),
          './locales/pt-br.json': () => L(() => import('./pt-br-BtIoyp8W.js'), [], import.meta.url),
          './locales/pt.json': () => L(() => import('./pt-DzyTHtEP.js'), [], import.meta.url),
          './locales/ro.json': () => L(() => import('./ro-bIIUXaT-.js'), [], import.meta.url),
          './locales/ru.json': () => L(() => import('./ru-ZNTIEfpg.js'), [], import.meta.url),
          './locales/sk.json': () => L(() => import('./sk-njQMxIUt.js'), [], import.meta.url),
          './locales/sv.json': () => L(() => import('./sv-EG36_JC6.js'), [], import.meta.url),
          './locales/th.json': () => L(() => import('./th-D9M5Sa3c.js'), [], import.meta.url),
          './locales/tr.json': () => L(() => import('./tr-CUgdg29A.js'), [], import.meta.url),
          './locales/uk.json': () => L(() => import('./uk-B57_wH73.js'), [], import.meta.url),
          './locales/vi.json': () => L(() => import('./vi-CYHbGaPR.js'), [], import.meta.url),
          './locales/zh-hant.json': () =>
            L(() => import('./zh-hant-ZnYi1e0J.js'), [], import.meta.url),
          './locales/zh.json': () => L(() => import('./zh-DRc1FSnX.js'), [], import.meta.url),
        }),
        `./locales/${e}.json`,
        3,
      ),
    ),
  )
  .init({
    lng: Ru === 'pl' || (!Ru && navigator.language === 'pl') ? 'en' : Ru || navigator.language,
    fallbackLng: (e) => {
      const t = e.replace('_', '-').toLocaleLowerCase()
      return t === 'pl' || t.startsWith('pl-')
        ? 'en'
        : bp[t]
          ? bp[t]
          : BR.includes(t)
            ? t
            : t.indexOf('-') === 2
              ? t.substring(0, t.indexOf('-'))
              : 'en'
    },
    lowerCaseLng: !0,
    load: 'currentOnly',
    interpolation: {
      escapeValue: !1,
    },
    react: {
      useSuspense: !0,
    },
  })
qR && document.body.classList.add('force-desktop')
Cu.createRoot(document.getElementById('root')).render(
  D.jsx('div', {
    id: 'game-container',
    children: D.jsx(iv.StrictMode, {
      children: D.jsxs(F.Suspense, {
        fallback: D.jsx(TR, {}),
        children: [
          D.jsx('div', {
            id: 'forceFontLoad',
            style: {
              fontFamily: 'Nunito',
              fontSize: 0,
            },
            children: '.',
          }),
          D.jsx(kR, {
            theme: KR,
            defaultTheme: YR === 'true',
            children: D.jsx(ER, {
              router: Dy,
            }),
          }),
        ],
      }),
    }),
  }),
)
export {
  iP as G,
  oP as M,
  iv as R,
  TR as S,
  By as _,
  Hy as a,
  L as b,
  QR as c,
  tP as d,
  Xm as e,
  aR as f,
  wR as g,
  Ox as h,
  Nx as i,
  D as j,
  nP as k,
  rP as l,
  Le as m,
  XR as n,
  ZR as o,
  F as r,
  eP as s,
  JR as t,
  et as u,
}
