const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      './index-FF3pWCV9.js',
      './index-BkaOEVGW.js',
      './index-BGLCchs9.css',
      './LabelWrapper-Fu7cROeV.js',
      './validation-Bf662osL.js',
      './LabelWrapper-CrSoh1FP.css',
      './useCssVariables-Ba7gGP9f.js',
      './useConnector-hGUUV_WK.js',
      './usePrevious-9g4wALNj.js',
      './string-aT7bg8eq.js',
      './math-DkEfAmwS.js',
      './useConnector-C7hDfQzC.css',
      './index-BTWbeoXe.js',
      './index-BJC9E5SE.css',
      './BetModal-CE_jFSZU.css',
      './Modal-Cvh_NgI4.css',
      './index-DFZVlSN4.js',
      './Tabs-s1nvgXtL.js',
      './Tabs-BORqqS2r.css',
      './Select-Bn2Q0h4R.js',
      './Select-CHDeuRAy.css',
      './index-CeMeQlZl.css',
    ]),
) => i.map((i) => d[i])
import {
  r as p,
  n as Lt,
  o as Wt,
  j as s,
  l as Vt,
  a as zt,
  e as Ne,
  t as P,
  b as ht,
  S as gt,
  k as Ht,
} from './index-BkaOEVGW.js'
import { e as yt, S as xt, u as Ut } from './useConnector-hGUUV_WK.js'
import { L as Qe, a as Ze, I as et } from './LabelWrapper-Fu7cROeV.js'
import { c as qt } from './index-BTWbeoXe.js'
/* empty css              */
import { u as Yt } from './useCssVariables-Ba7gGP9f.js'
const Xt = (...e) => {
    console != null &&
      console.warn &&
      (Q(e[0]) && (e[0] = `react-i18next:: ${e[0]}`), console.warn(...e))
  },
  tt = {},
  Be = (...e) => {
    ;(Q(e[0]) && tt[e[0]]) || (Q(e[0]) && (tt[e[0]] = new Date()), Xt(...e))
  },
  wt = (e, t) => () => {
    if (e.isInitialized) t()
    else {
      const r = () => {
        setTimeout(() => {
          e.off('initialized', r)
        }, 0),
          t()
      }
      e.on('initialized', r)
    }
  },
  rt = (e, t, r) => {
    e.loadNamespaces(t, wt(e, r))
  },
  nt = (e, t, r, n) => {
    Q(r) && (r = [r]),
      r.forEach((o) => {
        e.options.ns.indexOf(o) < 0 && e.options.ns.push(o)
      }),
      e.loadLanguages(t, wt(e, n))
  },
  _t = (e, t, r = {}) =>
    !t.languages || !t.languages.length
      ? (Be('i18n.languages were undefined or empty', t.languages), !0)
      : t.hasLoadedNamespace(e, {
          lng: r.lng,
          precheck: (n, o) => {
            var a
            if (
              ((a = r.bindI18n) == null ? void 0 : a.indexOf('languageChanging')) > -1 &&
              n.services.backendConnector.backend &&
              n.isLanguageChangingTo &&
              !o(n.isLanguageChangingTo, e)
            )
              return !1
          },
        }),
  Q = (e) => typeof e == 'string',
  Gt = (e) => typeof e == 'object' && e !== null,
  Jt = p.createContext()
class Kt {
  constructor() {
    this.usedNamespaces = {}
  }
  addUsedNamespaces(t) {
    t.forEach((r) => {
      var n
      ;(n = this.usedNamespaces)[r] ?? (n[r] = !0)
    })
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces)
  }
}
const Qt = (e, t) => {
    const r = p.useRef()
    return (
      p.useEffect(() => {
        r.current = e
      }, [e, t]),
      r.current
    )
  },
  bt = (e, t, r, n) => e.getFixedT(t, r, n),
  Zt = (e, t, r, n) => p.useCallback(bt(e, t, r, n), [e, t, r, n]),
  er = (e, t = {}) => {
    var w, S, E, O
    const { i18n: r } = t,
      { i18n: n, defaultNS: o } = p.useContext(Jt) || {},
      a = r || n || Wt()
    if ((a && !a.reportNamespaces && (a.reportNamespaces = new Kt()), !a)) {
      Be('You will need to pass in an i18next instance by using initReactI18next')
      const b = (C, A) =>
          Q(A)
            ? A
            : Gt(A) && Q(A.defaultValue)
              ? A.defaultValue
              : Array.isArray(C)
                ? C[C.length - 1]
                : C,
        R = [b, {}, !1]
      return (R.t = b), (R.i18n = {}), (R.ready = !1), R
    }
    ;(w = a.options.react) != null &&
      w.wait &&
      Be(
        'It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.',
      )
    const u = {
        ...Lt(),
        ...a.options.react,
        ...t,
      },
      { useSuspense: i, keyPrefix: c } = u
    let f = o || ((S = a.options) == null ? void 0 : S.defaultNS)
    ;(f = Q(f) ? [f] : f || ['translation']),
      (O = (E = a.reportNamespaces).addUsedNamespaces) == null || O.call(E, f)
    const l = (a.isInitialized || a.initializedStoreOnce) && f.every((b) => _t(b, a, u)),
      d = Zt(a, t.lng || null, u.nsMode === 'fallback' ? f : f[0], c),
      x = () => d,
      v = () => bt(a, t.lng || null, u.nsMode === 'fallback' ? f : f[0], c),
      [m, y] = p.useState(x)
    let g = f.join()
    t.lng && (g = `${t.lng}${g}`)
    const j = Qt(g),
      h = p.useRef(!0)
    p.useEffect(() => {
      const { bindI18n: b, bindI18nStore: R } = u
      ;(h.current = !0),
        !l &&
          !i &&
          (t.lng
            ? nt(a, t.lng, f, () => {
                h.current && y(v)
              })
            : rt(a, f, () => {
                h.current && y(v)
              })),
        l && j && j !== g && h.current && y(v)
      const C = () => {
        h.current && y(v)
      }
      return (
        b && (a == null || a.on(b, C)),
        R && (a == null || a.store.on(R, C)),
        () => {
          ;(h.current = !1),
            a && (b == null || b.split(' ').forEach((A) => a.off(A, C))),
            R && a && R.split(' ').forEach((A) => a.store.off(A, C))
        }
      )
    }, [a, g]),
      p.useEffect(() => {
        h.current && l && y(x)
      }, [a, c, l])
    const N = [m, a, l]
    if (((N.t = m), (N.i18n = a), (N.ready = l), l || (!l && !i))) return N
    throw new Promise((b) => {
      t.lng ? nt(a, t.lng, f, () => b()) : rt(a, f, () => b())
    })
  },
  tr = ({ className: e, children: t }) =>
    s.jsx('span', {
      className: `pill ${e ?? ''}`,
      children: t,
    }),
  re = (e) => {
    const { className: t, ...r } = e
    return s.jsx('div', {
      style: r,
      className: t,
    })
  },
  Te = p.forwardRef(({ onClose: e, children: t, wrapperClassName: r, ...n }, o) => {
    const [a, u] = p.useState({
        opacity: 0,
      }),
      [transform, setTransform] = p.useState({
        transform: 'translateY(20px)',
      })
    return (
      p.useEffect(() => {
        u({
          opacity: Vt,
        }),
          setTransform({
            transform: 'translateY(0px)',
          })
      }, []),
      s.jsxs('div', {
        className: 'game-modal',
        ref: o,
        ...n,
        children: [
          s.jsx('div', {
            style: a,
            className: 'game-modal-overlay overlay-transition',
            onClick: e,
          }),
          s.jsx('div', {
            style: transform,
            className: qt('wrapper wrapper-transition scrollX scrollY', {
              [`${r}`]: r,
            }),
            children: t,
          }),
        ],
      })
    )
  }),
  jt = p.createContext({
    showFairnessModal: !1,
    setShowFairnessModal: () => {},
  })
var at = function (t) {
    return t.reduce(function (r, n) {
      var o = n[0],
        a = n[1]
      return (r[o] = a), r
    }, {})
  },
  ot =
    typeof window < 'u' && window.document && window.document.createElement
      ? p.useLayoutEffect
      : p.useEffect,
  D = 'top',
  L = 'bottom',
  W = 'right',
  T = 'left',
  $e = 'auto',
  ve = [D, L, W, T],
  ne = 'start',
  de = 'end',
  rr = 'clippingParents',
  Ot = 'viewport',
  le = 'popper',
  nr = 'reference',
  st = ve.reduce(function (e, t) {
    return e.concat([t + '-' + ne, t + '-' + de])
  }, []),
  St = [].concat(ve, [$e]).reduce(function (e, t) {
    return e.concat([t, t + '-' + ne, t + '-' + de])
  }, []),
  ar = 'beforeRead',
  or = 'read',
  sr = 'afterRead',
  ir = 'beforeMain',
  cr = 'main',
  lr = 'afterMain',
  ur = 'beforeWrite',
  fr = 'write',
  dr = 'afterWrite',
  pr = [ar, or, sr, ir, cr, lr, ur, fr, dr]
function U(e) {
  return e ? (e.nodeName || '').toLowerCase() : null
}
function F(e) {
  if (e == null) return window
  if (e.toString() !== '[object Window]') {
    var t = e.ownerDocument
    return (t && t.defaultView) || window
  }
  return e
}
function ee(e) {
  var t = F(e).Element
  return e instanceof t || e instanceof Element
}
function I(e) {
  var t = F(e).HTMLElement
  return e instanceof t || e instanceof HTMLElement
}
function Fe(e) {
  if (typeof ShadowRoot > 'u') return !1
  var t = F(e).ShadowRoot
  return e instanceof t || e instanceof ShadowRoot
}
function vr(e) {
  var t = e.state
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      o = t.attributes[r] || {},
      a = t.elements[r]
    !I(a) ||
      !U(a) ||
      (Object.assign(a.style, n),
      Object.keys(o).forEach(function (u) {
        var i = o[u]
        i === !1 ? a.removeAttribute(u) : a.setAttribute(u, i === !0 ? '' : i)
      }))
  })
}
function mr(e) {
  var t = e.state,
    r = {
      popper: {
        position: t.options.strategy,
        left: '0',
        top: '0',
        margin: '0',
      },
      arrow: {
        position: 'absolute',
      },
      reference: {},
    }
  return (
    Object.assign(t.elements.popper.style, r.popper),
    (t.styles = r),
    t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow),
    function () {
      Object.keys(t.elements).forEach(function (n) {
        var o = t.elements[n],
          a = t.attributes[n] || {},
          u = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]),
          i = u.reduce(function (c, f) {
            return (c[f] = ''), c
          }, {})
        !I(o) ||
          !U(o) ||
          (Object.assign(o.style, i),
          Object.keys(a).forEach(function (c) {
            o.removeAttribute(c)
          }))
      })
    }
  )
}
const hr = {
  name: 'applyStyles',
  enabled: !0,
  phase: 'write',
  fn: vr,
  effect: mr,
  requires: ['computeStyles'],
}
function H(e) {
  return e.split('-')[0]
}
var Z = Math.max,
  Se = Math.min,
  ae = Math.round
function ke() {
  var e = navigator.userAgentData
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + '/' + t.version
        })
        .join(' ')
    : navigator.userAgent
}
function Nt() {
  return !/^((?!chrome|android).)*safari/i.test(ke())
}
function oe(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1)
  var n = e.getBoundingClientRect(),
    o = 1,
    a = 1
  t &&
    I(e) &&
    ((o = (e.offsetWidth > 0 && ae(n.width) / e.offsetWidth) || 1),
    (a = (e.offsetHeight > 0 && ae(n.height) / e.offsetHeight) || 1))
  var u = ee(e) ? F(e) : window,
    i = u.visualViewport,
    c = !Nt() && r,
    f = (n.left + (c && i ? i.offsetLeft : 0)) / o,
    l = (n.top + (c && i ? i.offsetTop : 0)) / a,
    d = n.width / o,
    x = n.height / a
  return {
    width: d,
    height: x,
    top: l,
    right: f + d,
    bottom: l + x,
    left: f,
    x: f,
    y: l,
  }
}
function Ie(e) {
  var t = oe(e),
    r = e.offsetWidth,
    n = e.offsetHeight
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    {
      x: e.offsetLeft,
      y: e.offsetTop,
      width: r,
      height: n,
    }
  )
}
function Et(e, t) {
  var r = t.getRootNode && t.getRootNode()
  if (e.contains(t)) return !0
  if (r && Fe(r)) {
    var n = t
    do {
      if (n && e.isSameNode(n)) return !0
      n = n.parentNode || n.host
    } while (n)
  }
  return !1
}
function q(e) {
  return F(e).getComputedStyle(e)
}
function gr(e) {
  return ['table', 'td', 'th'].indexOf(U(e)) >= 0
}
function X(e) {
  return ((ee(e) ? e.ownerDocument : e.document) || window.document).documentElement
}
function Ee(e) {
  return U(e) === 'html' ? e : e.assignedSlot || e.parentNode || (Fe(e) ? e.host : null) || X(e)
}
function it(e) {
  return !I(e) || q(e).position === 'fixed' ? null : e.offsetParent
}
function yr(e) {
  var t = /firefox/i.test(ke()),
    r = /Trident/i.test(ke())
  if (r && I(e)) {
    var n = q(e)
    if (n.position === 'fixed') return null
  }
  var o = Ee(e)
  for (Fe(o) && (o = o.host); I(o) && ['html', 'body'].indexOf(U(o)) < 0; ) {
    var a = q(o)
    if (
      a.transform !== 'none' ||
      a.perspective !== 'none' ||
      a.contain === 'paint' ||
      ['transform', 'perspective'].indexOf(a.willChange) !== -1 ||
      (t && a.willChange === 'filter') ||
      (t && a.filter && a.filter !== 'none')
    )
      return o
    o = o.parentNode
  }
  return null
}
function me(e) {
  for (var t = F(e), r = it(e); r && gr(r) && q(r).position === 'static'; ) r = it(r)
  return r && (U(r) === 'html' || (U(r) === 'body' && q(r).position === 'static'))
    ? t
    : r || yr(e) || t
}
function Le(e) {
  return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y'
}
function ue(e, t, r) {
  return Z(e, Se(t, r))
}
function xr(e, t, r) {
  var n = ue(e, t, r)
  return n > r ? r : n
}
function Ct() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  }
}
function Rt(e) {
  return Object.assign({}, Ct(), e)
}
function At(e, t) {
  return t.reduce(function (r, n) {
    return (r[n] = e), r
  }, {})
}
var wr = function (t, r) {
  return (
    (t =
      typeof t == 'function'
        ? t(
            Object.assign({}, r.rects, {
              placement: r.placement,
            }),
          )
        : t),
    Rt(typeof t != 'number' ? t : At(t, ve))
  )
}
function br(e) {
  var t,
    r = e.state,
    n = e.name,
    o = e.options,
    a = r.elements.arrow,
    u = r.modifiersData.popperOffsets,
    i = H(r.placement),
    c = Le(i),
    f = [T, W].indexOf(i) >= 0,
    l = f ? 'height' : 'width'
  if (!(!a || !u)) {
    var d = wr(o.padding, r),
      x = Ie(a),
      v = c === 'y' ? D : T,
      m = c === 'y' ? L : W,
      y = r.rects.reference[l] + r.rects.reference[c] - u[c] - r.rects.popper[l],
      g = u[c] - r.rects.reference[c],
      j = me(a),
      h = j ? (c === 'y' ? j.clientHeight || 0 : j.clientWidth || 0) : 0,
      N = y / 2 - g / 2,
      w = d[v],
      S = h - x[l] - d[m],
      E = h / 2 - x[l] / 2 + N,
      O = ue(w, E, S),
      b = c
    r.modifiersData[n] = ((t = {}), (t[b] = O), (t.centerOffset = O - E), t)
  }
}
function jr(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    o = n === void 0 ? '[data-popper-arrow]' : n
  o != null &&
    ((typeof o == 'string' && ((o = t.elements.popper.querySelector(o)), !o)) ||
      (Et(t.elements.popper, o) && (t.elements.arrow = o)))
}
const Or = {
  name: 'arrow',
  enabled: !0,
  phase: 'main',
  fn: br,
  effect: jr,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow'],
}
function se(e) {
  return e.split('-')[1]
}
var Sr = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto',
}
function Nr(e, t) {
  var r = e.x,
    n = e.y,
    o = t.devicePixelRatio || 1
  return {
    x: ae(r * o) / o || 0,
    y: ae(n * o) / o || 0,
  }
}
function ct(e) {
  var t,
    r = e.popper,
    n = e.popperRect,
    o = e.placement,
    a = e.variation,
    u = e.offsets,
    i = e.position,
    c = e.gpuAcceleration,
    f = e.adaptive,
    l = e.roundOffsets,
    d = e.isFixed,
    x = u.x,
    v = x === void 0 ? 0 : x,
    m = u.y,
    y = m === void 0 ? 0 : m,
    g =
      typeof l == 'function'
        ? l({
            x: v,
            y,
          })
        : {
            x: v,
            y,
          }
  ;(v = g.x), (y = g.y)
  var j = u.hasOwnProperty('x'),
    h = u.hasOwnProperty('y'),
    N = T,
    w = D,
    S = window
  if (f) {
    var E = me(r),
      O = 'clientHeight',
      b = 'clientWidth'
    if (
      (E === F(r) &&
        ((E = X(r)),
        q(E).position !== 'static' &&
          i === 'absolute' &&
          ((O = 'scrollHeight'), (b = 'scrollWidth'))),
      (E = E),
      o === D || ((o === T || o === W) && a === de))
    ) {
      w = L
      var R = d && E === S && S.visualViewport ? S.visualViewport.height : E[O]
      ;(y -= R - n.height), (y *= c ? 1 : -1)
    }
    if (o === T || ((o === D || o === L) && a === de)) {
      N = W
      var C = d && E === S && S.visualViewport ? S.visualViewport.width : E[b]
      ;(v -= C - n.width), (v *= c ? 1 : -1)
    }
  }
  var A = Object.assign(
      {
        position: i,
      },
      f && Sr,
    ),
    B =
      l === !0
        ? Nr(
            {
              x: v,
              y,
            },
            F(r),
          )
        : {
            x: v,
            y,
          }
  if (((v = B.x), (y = B.y), c)) {
    var M
    return Object.assign(
      {},
      A,
      ((M = {}),
      (M[w] = h ? '0' : ''),
      (M[N] = j ? '0' : ''),
      (M.transform =
        (S.devicePixelRatio || 1) <= 1
          ? 'translate(' + v + 'px, ' + y + 'px)'
          : 'translate3d(' + v + 'px, ' + y + 'px, 0)'),
      M),
    )
  }
  return Object.assign(
    {},
    A,
    ((t = {}), (t[w] = h ? y + 'px' : ''), (t[N] = j ? v + 'px' : ''), (t.transform = ''), t),
  )
}
function Er(e) {
  var t = e.state,
    r = e.options,
    n = r.gpuAcceleration,
    o = n === void 0 ? !0 : n,
    a = r.adaptive,
    u = a === void 0 ? !0 : a,
    i = r.roundOffsets,
    c = i === void 0 ? !0 : i,
    f = {
      placement: H(t.placement),
      variation: se(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: o,
      isFixed: t.options.strategy === 'fixed',
    }
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      ct(
        Object.assign({}, f, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: u,
          roundOffsets: c,
        }),
      ),
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        ct(
          Object.assign({}, f, {
            offsets: t.modifiersData.arrow,
            position: 'absolute',
            adaptive: !1,
            roundOffsets: c,
          }),
        ),
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-placement': t.placement,
    }))
}
const Cr = {
  name: 'computeStyles',
  enabled: !0,
  phase: 'beforeWrite',
  fn: Er,
  data: {},
}
var be = {
  passive: !0,
}
function Rr(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    o = n.scroll,
    a = o === void 0 ? !0 : o,
    u = n.resize,
    i = u === void 0 ? !0 : u,
    c = F(t.elements.popper),
    f = [].concat(t.scrollParents.reference, t.scrollParents.popper)
  return (
    a &&
      f.forEach(function (l) {
        l.addEventListener('scroll', r.update, be)
      }),
    i && c.addEventListener('resize', r.update, be),
    function () {
      a &&
        f.forEach(function (l) {
          l.removeEventListener('scroll', r.update, be)
        }),
        i && c.removeEventListener('resize', r.update, be)
    }
  )
}
const Ar = {
  name: 'eventListeners',
  enabled: !0,
  phase: 'write',
  fn: function () {},
  effect: Rr,
  data: {},
}
var Pr = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom',
}
function je(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return Pr[t]
  })
}
var Mr = {
  start: 'end',
  end: 'start',
}
function lt(e) {
  return e.replace(/start|end/g, function (t) {
    return Mr[t]
  })
}
function We(e) {
  var t = F(e),
    r = t.pageXOffset,
    n = t.pageYOffset
  return {
    scrollLeft: r,
    scrollTop: n,
  }
}
function Ve(e) {
  return oe(X(e)).left + We(e).scrollLeft
}
function Br(e, t) {
  var r = F(e),
    n = X(e),
    o = r.visualViewport,
    a = n.clientWidth,
    u = n.clientHeight,
    i = 0,
    c = 0
  if (o) {
    ;(a = o.width), (u = o.height)
    var f = Nt()
    ;(f || (!f && t === 'fixed')) && ((i = o.offsetLeft), (c = o.offsetTop))
  }
  return {
    width: a,
    height: u,
    x: i + Ve(e),
    y: c,
  }
}
function kr(e) {
  var t,
    r = X(e),
    n = We(e),
    o = (t = e.ownerDocument) == null ? void 0 : t.body,
    a = Z(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
    u = Z(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
    i = -n.scrollLeft + Ve(e),
    c = -n.scrollTop
  return (
    q(o || r).direction === 'rtl' && (i += Z(r.clientWidth, o ? o.clientWidth : 0) - a),
    {
      width: a,
      height: u,
      x: i,
      y: c,
    }
  )
}
function ze(e) {
  var t = q(e),
    r = t.overflow,
    n = t.overflowX,
    o = t.overflowY
  return /auto|scroll|overlay|hidden/.test(r + o + n)
}
function Pt(e) {
  return ['html', 'body', '#document'].indexOf(U(e)) >= 0
    ? e.ownerDocument.body
    : I(e) && ze(e)
      ? e
      : Pt(Ee(e))
}
function fe(e, t) {
  var r
  t === void 0 && (t = [])
  var n = Pt(e),
    o = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    a = F(n),
    u = o ? [a].concat(a.visualViewport || [], ze(n) ? n : []) : n,
    i = t.concat(u)
  return o ? i : i.concat(fe(Ee(u)))
}
function De(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  })
}
function Dr(e, t) {
  var r = oe(e, !1, t === 'fixed')
  return (
    (r.top = r.top + e.clientTop),
    (r.left = r.left + e.clientLeft),
    (r.bottom = r.top + e.clientHeight),
    (r.right = r.left + e.clientWidth),
    (r.width = e.clientWidth),
    (r.height = e.clientHeight),
    (r.x = r.left),
    (r.y = r.top),
    r
  )
}
function ut(e, t, r) {
  return t === Ot ? De(Br(e, r)) : ee(t) ? Dr(t, r) : De(kr(X(e)))
}
function Tr(e) {
  var t = fe(Ee(e)),
    r = ['absolute', 'fixed'].indexOf(q(e).position) >= 0,
    n = r && I(e) ? me(e) : e
  return ee(n)
    ? t.filter(function (o) {
        return ee(o) && Et(o, n) && U(o) !== 'body'
      })
    : []
}
function $r(e, t, r, n) {
  var o = t === 'clippingParents' ? Tr(e) : [].concat(t),
    a = [].concat(o, [r]),
    u = a[0],
    i = a.reduce(
      function (c, f) {
        var l = ut(e, f, n)
        return (
          (c.top = Z(l.top, c.top)),
          (c.right = Se(l.right, c.right)),
          (c.bottom = Se(l.bottom, c.bottom)),
          (c.left = Z(l.left, c.left)),
          c
        )
      },
      ut(e, u, n),
    )
  return (
    (i.width = i.right - i.left), (i.height = i.bottom - i.top), (i.x = i.left), (i.y = i.top), i
  )
}
function Mt(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    o = n ? H(n) : null,
    a = n ? se(n) : null,
    u = t.x + t.width / 2 - r.width / 2,
    i = t.y + t.height / 2 - r.height / 2,
    c
  switch (o) {
    case D:
      c = {
        x: u,
        y: t.y - r.height,
      }
      break
    case L:
      c = {
        x: u,
        y: t.y + t.height,
      }
      break
    case W:
      c = {
        x: t.x + t.width,
        y: i,
      }
      break
    case T:
      c = {
        x: t.x - r.width,
        y: i,
      }
      break
    default:
      c = {
        x: t.x,
        y: t.y,
      }
  }
  var f = o ? Le(o) : null
  if (f != null) {
    var l = f === 'y' ? 'height' : 'width'
    switch (a) {
      case ne:
        c[f] = c[f] - (t[l] / 2 - r[l] / 2)
        break
      case de:
        c[f] = c[f] + (t[l] / 2 - r[l] / 2)
        break
    }
  }
  return c
}
function pe(e, t) {
  t === void 0 && (t = {})
  var r = t,
    n = r.placement,
    o = n === void 0 ? e.placement : n,
    a = r.strategy,
    u = a === void 0 ? e.strategy : a,
    i = r.boundary,
    c = i === void 0 ? rr : i,
    f = r.rootBoundary,
    l = f === void 0 ? Ot : f,
    d = r.elementContext,
    x = d === void 0 ? le : d,
    v = r.altBoundary,
    m = v === void 0 ? !1 : v,
    y = r.padding,
    g = y === void 0 ? 0 : y,
    j = Rt(typeof g != 'number' ? g : At(g, ve)),
    h = x === le ? nr : le,
    N = e.rects.popper,
    w = e.elements[m ? h : x],
    S = $r(ee(w) ? w : w.contextElement || X(e.elements.popper), c, l, u),
    E = oe(e.elements.reference),
    O = Mt({
      reference: E,
      element: N,
      strategy: 'absolute',
      placement: o,
    }),
    b = De(Object.assign({}, N, O)),
    R = x === le ? b : E,
    C = {
      top: S.top - R.top + j.top,
      bottom: R.bottom - S.bottom + j.bottom,
      left: S.left - R.left + j.left,
      right: R.right - S.right + j.right,
    },
    A = e.modifiersData.offset
  if (x === le && A) {
    var B = A[o]
    Object.keys(C).forEach(function (M) {
      var V = [W, L].indexOf(M) >= 0 ? 1 : -1,
        z = [D, L].indexOf(M) >= 0 ? 'y' : 'x'
      C[M] += B[z] * V
    })
  }
  return C
}
function Fr(e, t) {
  t === void 0 && (t = {})
  var r = t,
    n = r.placement,
    o = r.boundary,
    a = r.rootBoundary,
    u = r.padding,
    i = r.flipVariations,
    c = r.allowedAutoPlacements,
    f = c === void 0 ? St : c,
    l = se(n),
    d = l
      ? i
        ? st
        : st.filter(function (m) {
            return se(m) === l
          })
      : ve,
    x = d.filter(function (m) {
      return f.indexOf(m) >= 0
    })
  x.length === 0 && (x = d)
  var v = x.reduce(function (m, y) {
    return (
      (m[y] = pe(e, {
        placement: y,
        boundary: o,
        rootBoundary: a,
        padding: u,
      })[H(y)]),
      m
    )
  }, {})
  return Object.keys(v).sort(function (m, y) {
    return v[m] - v[y]
  })
}
function Ir(e) {
  if (H(e) === $e) return []
  var t = je(e)
  return [lt(e), t, lt(t)]
}
function Lr(e) {
  var t = e.state,
    r = e.options,
    n = e.name
  if (!t.modifiersData[n]._skip) {
    for (
      var o = r.mainAxis,
        a = o === void 0 ? !0 : o,
        u = r.altAxis,
        i = u === void 0 ? !0 : u,
        c = r.fallbackPlacements,
        f = r.padding,
        l = r.boundary,
        d = r.rootBoundary,
        x = r.altBoundary,
        v = r.flipVariations,
        m = v === void 0 ? !0 : v,
        y = r.allowedAutoPlacements,
        g = t.options.placement,
        j = H(g),
        h = j === g,
        N = c || (h || !m ? [je(g)] : Ir(g)),
        w = [g].concat(N).reduce(function (te, Y) {
          return te.concat(
            H(Y) === $e
              ? Fr(t, {
                  placement: Y,
                  boundary: l,
                  rootBoundary: d,
                  padding: f,
                  flipVariations: m,
                  allowedAutoPlacements: y,
                })
              : Y,
          )
        }, []),
        S = t.rects.reference,
        E = t.rects.popper,
        O = new Map(),
        b = !0,
        R = w[0],
        C = 0;
      C < w.length;
      C++
    ) {
      var A = w[C],
        B = H(A),
        M = se(A) === ne,
        V = [D, L].indexOf(B) >= 0,
        z = V ? 'width' : 'height',
        k = pe(t, {
          placement: A,
          boundary: l,
          rootBoundary: d,
          altBoundary: x,
          padding: f,
        }),
        $ = V ? (M ? W : T) : M ? L : D
      S[z] > E[z] && ($ = je($))
      var he = je($),
        _ = []
      if (
        (a && _.push(k[B] <= 0),
        i && _.push(k[$] <= 0, k[he] <= 0),
        _.every(function (te) {
          return te
        }))
      ) {
        ;(R = A), (b = !1)
        break
      }
      O.set(A, _)
    }
    if (b)
      for (
        var ge = m ? 3 : 1,
          Ce = function (Y) {
            var ce = w.find(function (xe) {
              var G = O.get(xe)
              if (G)
                return G.slice(0, Y).every(function (Re) {
                  return Re
                })
            })
            if (ce) return (R = ce), 'break'
          },
          ie = ge;
        ie > 0;
        ie--
      ) {
        var ye = Ce(ie)
        if (ye === 'break') break
      }
    t.placement !== R && ((t.modifiersData[n]._skip = !0), (t.placement = R), (t.reset = !0))
  }
}
const Wr = {
  name: 'flip',
  enabled: !0,
  phase: 'main',
  fn: Lr,
  requiresIfExists: ['offset'],
  data: {
    _skip: !1,
  },
}
function ft(e, t, r) {
  return (
    r === void 0 &&
      (r = {
        x: 0,
        y: 0,
      }),
    {
      top: e.top - t.height - r.y,
      right: e.right - t.width + r.x,
      bottom: e.bottom - t.height + r.y,
      left: e.left - t.width - r.x,
    }
  )
}
function dt(e) {
  return [D, W, L, T].some(function (t) {
    return e[t] >= 0
  })
}
function Vr(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    o = t.rects.popper,
    a = t.modifiersData.preventOverflow,
    u = pe(t, {
      elementContext: 'reference',
    }),
    i = pe(t, {
      altBoundary: !0,
    }),
    c = ft(u, n),
    f = ft(i, o, a),
    l = dt(c),
    d = dt(f)
  ;(t.modifiersData[r] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: f,
    isReferenceHidden: l,
    hasPopperEscaped: d,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-reference-hidden': l,
      'data-popper-escaped': d,
    }))
}
const zr = {
  name: 'hide',
  enabled: !0,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: Vr,
}
function Hr(e, t, r) {
  var n = H(e),
    o = [T, D].indexOf(n) >= 0 ? -1 : 1,
    a =
      typeof r == 'function'
        ? r(
            Object.assign({}, t, {
              placement: e,
            }),
          )
        : r,
    u = a[0],
    i = a[1]
  return (
    (u = u || 0),
    (i = (i || 0) * o),
    [T, W].indexOf(n) >= 0
      ? {
          x: i,
          y: u,
        }
      : {
          x: u,
          y: i,
        }
  )
}
function Ur(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    o = r.offset,
    a = o === void 0 ? [0, 0] : o,
    u = St.reduce(function (l, d) {
      return (l[d] = Hr(d, t.rects, a)), l
    }, {}),
    i = u[t.placement],
    c = i.x,
    f = i.y
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += c), (t.modifiersData.popperOffsets.y += f)),
    (t.modifiersData[n] = u)
}
const qr = {
  name: 'offset',
  enabled: !0,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: Ur,
}
function Yr(e) {
  var t = e.state,
    r = e.name
  t.modifiersData[r] = Mt({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: 'absolute',
    placement: t.placement,
  })
}
const Xr = {
  name: 'popperOffsets',
  enabled: !0,
  phase: 'read',
  fn: Yr,
  data: {},
}
function _r(e) {
  return e === 'x' ? 'y' : 'x'
}
function Gr(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    o = r.mainAxis,
    a = o === void 0 ? !0 : o,
    u = r.altAxis,
    i = u === void 0 ? !1 : u,
    c = r.boundary,
    f = r.rootBoundary,
    l = r.altBoundary,
    d = r.padding,
    x = r.tether,
    v = x === void 0 ? !0 : x,
    m = r.tetherOffset,
    y = m === void 0 ? 0 : m,
    g = pe(t, {
      boundary: c,
      rootBoundary: f,
      padding: d,
      altBoundary: l,
    }),
    j = H(t.placement),
    h = se(t.placement),
    N = !h,
    w = Le(j),
    S = _r(w),
    E = t.modifiersData.popperOffsets,
    O = t.rects.reference,
    b = t.rects.popper,
    R =
      typeof y == 'function'
        ? y(
            Object.assign({}, t.rects, {
              placement: t.placement,
            }),
          )
        : y,
    C =
      typeof R == 'number'
        ? {
            mainAxis: R,
            altAxis: R,
          }
        : Object.assign(
            {
              mainAxis: 0,
              altAxis: 0,
            },
            R,
          ),
    A = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    B = {
      x: 0,
      y: 0,
    }
  if (E) {
    if (a) {
      var M,
        V = w === 'y' ? D : T,
        z = w === 'y' ? L : W,
        k = w === 'y' ? 'height' : 'width',
        $ = E[w],
        he = $ + g[V],
        _ = $ - g[z],
        ge = v ? -b[k] / 2 : 0,
        Ce = h === ne ? O[k] : b[k],
        ie = h === ne ? -b[k] : -O[k],
        ye = t.elements.arrow,
        te =
          v && ye
            ? Ie(ye)
            : {
                width: 0,
                height: 0,
              },
        Y = t.modifiersData['arrow#persistent']
          ? t.modifiersData['arrow#persistent'].padding
          : Ct(),
        ce = Y[V],
        xe = Y[z],
        G = ue(0, O[k], te[k]),
        Re = N ? O[k] / 2 - ge - G - ce - C.mainAxis : Ce - G - ce - C.mainAxis,
        kt = N ? -O[k] / 2 + ge + G + xe + C.mainAxis : ie + G + xe + C.mainAxis,
        Ae = t.elements.arrow && me(t.elements.arrow),
        Dt = Ae ? (w === 'y' ? Ae.clientTop || 0 : Ae.clientLeft || 0) : 0,
        He = (M = A == null ? void 0 : A[w]) != null ? M : 0,
        Tt = $ + Re - He - Dt,
        $t = $ + kt - He,
        Ue = ue(v ? Se(he, Tt) : he, $, v ? Z(_, $t) : _)
      ;(E[w] = Ue), (B[w] = Ue - $)
    }
    if (i) {
      var qe,
        Ft = w === 'x' ? D : T,
        It = w === 'x' ? L : W,
        J = E[S],
        we = S === 'y' ? 'height' : 'width',
        Ye = J + g[Ft],
        Xe = J - g[It],
        Pe = [D, T].indexOf(j) !== -1,
        _e = (qe = A == null ? void 0 : A[S]) != null ? qe : 0,
        Ge = Pe ? Ye : J - O[we] - b[we] - _e + C.altAxis,
        Je = Pe ? J + O[we] + b[we] - _e - C.altAxis : Xe,
        Ke = v && Pe ? xr(Ge, J, Je) : ue(v ? Ge : Ye, J, v ? Je : Xe)
      ;(E[S] = Ke), (B[S] = Ke - J)
    }
    t.modifiersData[n] = B
  }
}
const Jr = {
  name: 'preventOverflow',
  enabled: !0,
  phase: 'main',
  fn: Gr,
  requiresIfExists: ['offset'],
}
function Kr(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop,
  }
}
function Qr(e) {
  return e === F(e) || !I(e) ? We(e) : Kr(e)
}
function Zr(e) {
  var t = e.getBoundingClientRect(),
    r = ae(t.width) / e.offsetWidth || 1,
    n = ae(t.height) / e.offsetHeight || 1
  return r !== 1 || n !== 1
}
function en(e, t, r) {
  r === void 0 && (r = !1)
  var n = I(t),
    o = I(t) && Zr(t),
    a = X(t),
    u = oe(e, o, r),
    i = {
      scrollLeft: 0,
      scrollTop: 0,
    },
    c = {
      x: 0,
      y: 0,
    }
  return (
    (n || (!n && !r)) &&
      ((U(t) !== 'body' || ze(a)) && (i = Qr(t)),
      I(t) ? ((c = oe(t, !0)), (c.x += t.clientLeft), (c.y += t.clientTop)) : a && (c.x = Ve(a))),
    {
      x: u.left + i.scrollLeft - c.x,
      y: u.top + i.scrollTop - c.y,
      width: u.width,
      height: u.height,
    }
  )
}
function tn(e) {
  var t = new Map(),
    r = new Set(),
    n = []
  e.forEach(function (a) {
    t.set(a.name, a)
  })
  function o(a) {
    r.add(a.name)
    var u = [].concat(a.requires || [], a.requiresIfExists || [])
    u.forEach(function (i) {
      if (!r.has(i)) {
        var c = t.get(i)
        c && o(c)
      }
    }),
      n.push(a)
  }
  return (
    e.forEach(function (a) {
      r.has(a.name) || o(a)
    }),
    n
  )
}
function rn(e) {
  var t = tn(e)
  return pr.reduce(function (r, n) {
    return r.concat(
      t.filter(function (o) {
        return o.phase === n
      }),
    )
  }, [])
}
function nn(e) {
  var t
  return function () {
    return (
      t ||
        (t = new Promise(function (r) {
          Promise.resolve().then(function () {
            ;(t = void 0), r(e())
          })
        })),
      t
    )
  }
}
function an(e) {
  var t = e.reduce(function (r, n) {
    var o = r[n.name]
    return (
      (r[n.name] = o
        ? Object.assign({}, o, n, {
            options: Object.assign({}, o.options, n.options),
            data: Object.assign({}, o.data, n.data),
          })
        : n),
      r
    )
  }, {})
  return Object.keys(t).map(function (r) {
    return t[r]
  })
}
var pt = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute',
}
function vt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r]
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == 'function')
  })
}
function on(e) {
  e === void 0 && (e = {})
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    o = t.defaultOptions,
    a = o === void 0 ? pt : o
  return function (i, c, f) {
    f === void 0 && (f = a)
    var l = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, pt, a),
        modifiersData: {},
        elements: {
          reference: i,
          popper: c,
        },
        attributes: {},
        styles: {},
      },
      d = [],
      x = !1,
      v = {
        state: l,
        setOptions: function (j) {
          var h = typeof j == 'function' ? j(l.options) : j
          y(),
            (l.options = Object.assign({}, a, l.options, h)),
            (l.scrollParents = {
              reference: ee(i) ? fe(i) : i.contextElement ? fe(i.contextElement) : [],
              popper: fe(c),
            })
          var N = rn(an([].concat(n, l.options.modifiers)))
          return (
            (l.orderedModifiers = N.filter(function (w) {
              return w.enabled
            })),
            m(),
            v.update()
          )
        },
        forceUpdate: function () {
          if (!x) {
            var j = l.elements,
              h = j.reference,
              N = j.popper
            if (vt(h, N)) {
              ;(l.rects = {
                reference: en(h, me(N), l.options.strategy === 'fixed'),
                popper: Ie(N),
              }),
                (l.reset = !1),
                (l.placement = l.options.placement),
                l.orderedModifiers.forEach(function (C) {
                  return (l.modifiersData[C.name] = Object.assign({}, C.data))
                })
              for (var w = 0; w < l.orderedModifiers.length; w++) {
                if (l.reset === !0) {
                  ;(l.reset = !1), (w = -1)
                  continue
                }
                var S = l.orderedModifiers[w],
                  E = S.fn,
                  O = S.options,
                  b = O === void 0 ? {} : O,
                  R = S.name
                typeof E == 'function' &&
                  (l =
                    E({
                      state: l,
                      options: b,
                      name: R,
                      instance: v,
                    }) || l)
              }
            }
          }
        },
        update: nn(function () {
          return new Promise(function (g) {
            v.forceUpdate(), g(l)
          })
        }),
        destroy: function () {
          y(), (x = !0)
        },
      }
    if (!vt(i, c)) return v
    v.setOptions(f).then(function (g) {
      !x && f.onFirstUpdate && f.onFirstUpdate(g)
    })
    function m() {
      l.orderedModifiers.forEach(function (g) {
        var j = g.name,
          h = g.options,
          N = h === void 0 ? {} : h,
          w = g.effect
        if (typeof w == 'function') {
          var S = w({
              state: l,
              name: j,
              instance: v,
              options: N,
            }),
            E = function () {}
          d.push(S || E)
        }
      })
    }
    function y() {
      d.forEach(function (g) {
        return g()
      }),
        (d = [])
    }
    return v
  }
}
var sn = [Ar, Xr, Cr, hr, qr, Wr, Jr, Or, zr],
  cn = on({
    defaultModifiers: sn,
  }),
  ln = typeof Element < 'u',
  un = typeof Map == 'function',
  fn = typeof Set == 'function',
  dn = typeof ArrayBuffer == 'function' && !!ArrayBuffer.isView
function Oe(e, t) {
  if (e === t) return !0
  if (e && t && typeof e == 'object' && typeof t == 'object') {
    if (e.constructor !== t.constructor) return !1
    var r, n, o
    if (Array.isArray(e)) {
      if (((r = e.length), r != t.length)) return !1
      for (n = r; n-- !== 0; ) if (!Oe(e[n], t[n])) return !1
      return !0
    }
    var a
    if (un && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1
      for (a = e.entries(); !(n = a.next()).done; ) if (!t.has(n.value[0])) return !1
      for (a = e.entries(); !(n = a.next()).done; )
        if (!Oe(n.value[1], t.get(n.value[0]))) return !1
      return !0
    }
    if (fn && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1
      for (a = e.entries(); !(n = a.next()).done; ) if (!t.has(n.value[0])) return !1
      return !0
    }
    if (dn && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((r = e.length), r != t.length)) return !1
      for (n = r; n-- !== 0; ) if (e[n] !== t[n]) return !1
      return !0
    }
    if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags
    if (
      e.valueOf !== Object.prototype.valueOf &&
      typeof e.valueOf == 'function' &&
      typeof t.valueOf == 'function'
    )
      return e.valueOf() === t.valueOf()
    if (
      e.toString !== Object.prototype.toString &&
      typeof e.toString == 'function' &&
      typeof t.toString == 'function'
    )
      return e.toString() === t.toString()
    if (((o = Object.keys(e)), (r = o.length), r !== Object.keys(t).length)) return !1
    for (n = r; n-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(t, o[n])) return !1
    if (ln && e instanceof Element) return !1
    for (n = r; n-- !== 0; )
      if (
        !((o[n] === '_owner' || o[n] === '__v' || o[n] === '__o') && e.$$typeof) &&
        !Oe(e[o[n]], t[o[n]])
      )
        return !1
    return !0
  }
  return e !== e && t !== t
}
var pn = function (t, r) {
  try {
    return Oe(t, r)
  } catch (n) {
    if ((n.message || '').match(/stack|recursion/i))
      return console.warn('react-fast-compare cannot handle circular refs'), !1
    throw n
  }
}
const vn = zt(pn)
var mn = [],
  hn = function (t, r, n) {
    n === void 0 && (n = {})
    var o = p.useRef(null),
      a = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || 'bottom',
        strategy: n.strategy || 'absolute',
        modifiers: n.modifiers || mn,
      },
      u = p.useState({
        styles: {
          popper: {
            position: a.strategy,
            left: '0',
            top: '0',
          },
          arrow: {
            position: 'absolute',
          },
        },
        attributes: {},
      }),
      i = u[0],
      c = u[1],
      f = p.useMemo(function () {
        return {
          name: 'updateState',
          enabled: !0,
          phase: 'write',
          fn: function (v) {
            var m = v.state,
              y = Object.keys(m.elements)
            Ne.flushSync(function () {
              c({
                styles: at(
                  y.map(function (g) {
                    return [g, m.styles[g] || {}]
                  }),
                ),
                attributes: at(
                  y.map(function (g) {
                    return [g, m.attributes[g]]
                  }),
                ),
              })
            })
          },
          requires: ['computeStyles'],
        }
      }, []),
      l = p.useMemo(
        function () {
          var x = {
            onFirstUpdate: a.onFirstUpdate,
            placement: a.placement,
            strategy: a.strategy,
            modifiers: [].concat(a.modifiers, [
              f,
              {
                name: 'applyStyles',
                enabled: !1,
              },
            ]),
          }
          return vn(o.current, x) ? o.current || x : ((o.current = x), x)
        },
        [a.onFirstUpdate, a.placement, a.strategy, a.modifiers, f],
      ),
      d = p.useRef()
    return (
      ot(
        function () {
          d.current && d.current.setOptions(l)
        },
        [l],
      ),
      ot(
        function () {
          if (!(t == null || r == null)) {
            var x = n.createPopper || cn,
              v = x(t, r, l)
            return (
              (d.current = v),
              function () {
                v.destroy(), (d.current = null)
              }
            )
          }
        },
        [t, r, n.createPopper],
      ),
      {
        state: d.current ? d.current.state : null,
        styles: i.styles,
        attributes: i.attributes,
        update: d.current ? d.current.update : null,
        forceUpdate: d.current ? d.current.forceUpdate : null,
      }
    )
  }
const Bt = (e) => {
    const { target: t, children: r, show: n, placement: o, tooltipRef: a, ...u } = e,
      i = p.useMemo(
        () => ({
          name: 'adjustPosition',
          enabled: !0,
          phase: 'main',
          fn: ({ state: d }) => {
            var v, m
            const x =
              (m = (v = d.modifiersData) == null ? void 0 : v.popperOffsets) == null ? void 0 : m.x
            x &&
              x < 0 &&
              d.modifiersData &&
              d.modifiersData.popperOffsets &&
              d.modifiersData.arrow &&
              d.modifiersData.arrow.x &&
              ((d.modifiersData.popperOffsets.x = 0), (d.modifiersData.arrow.x += x))
          },
        }),
        [],
      ),
      {
        styles: c,
        attributes: f,
        update: l,
      } = hn(t, a.current, {
        placement: o,
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 8],
            },
          },
          {
            name: 'flip',
            options: {
              fallbackPlacements: ['top', 'bottom'],
            },
          },
          {
            name: 'preventOverflow',
            options: {
              mainAxis: !1,
            },
          },
          i,
        ],
      })
    return (
      p.useEffect(() => {
        var d
        n && a.current && l
          ? (a.current.setAttribute('data-show', ''), l())
          : (d = a.current) == null || d.removeAttribute('data-show')
      }, [n, l]),
      p.useEffect(() => {
        l && l()
      }, [r]),
      s.jsxs('div', {
        ref: a,
        className: 'tooltip-wrapper',
        onMouseOver: (d) => d.stopPropagation(),
        onMouseOut: (d) => d.stopPropagation(),
        onClick: (d) => d.stopPropagation(),
        role: 'tooltip',
        style: c.popper,
        ...u,
        ...f.popper,
        children: [
          r,
          s.jsx('div', {
            className: 'tooltip-arrow',
            'data-popper-arrow': !0,
            style: c.arrow,
            ...f.arrow,
          }),
        ],
      })
    )
  },
  gn = ({ result: e, connector: t }) => {
    const [r, n] = p.useState(),
      o = p.useRef(null),
      a = yt(),
      u = p.useRef(null),
      i = (c, f) => {
        f && navigator.clipboard.writeText(f),
          (o.current = c.target),
          a.show({
            target: c.target,
            hideDelay: 2e3,
          })
      }
    return (
      p.useEffect(() => {
        t == null || t.drawRngState((e == null ? void 0 : e.drawId) ?? '').then((c) => n(c))
      }, []),
      {
        tooltip: a,
        tooltipRef: u,
        copyButtonOnClick: i,
        drawState: r,
        currentTargetRef: o,
      }
    )
  },
  yn = ({ result: e, connector: t, showModal: r, setShowModal: n, preview: o, game: a }) => {
    const u = p.useRef(null),
      {
        copyButtonOnClick: i,
        tooltip: c,
        drawState: f,
        tooltipRef: l,
        currentTargetRef: d,
      } = gn({
        result: e,
        connector: t,
      }),
      { setShowFairnessModal: x } = p.useContext(jt),
      v = document.getElementsByClassName('game-wrapper').item(0)
    return Ne.createPortal(
      s.jsx(Te, {
        onClose: () => n(!1),
        ref: u,
        children: s.jsxs('div', {
          className: 'bet-card',
          children: [
            s.jsxs('div', {
              className: 'modal-header',
              children: [
                s.jsxs('h2', {
                  children: [
                    s.jsx(re, {
                      className: 'bet-icon icon-lg',
                    }),
                    s.jsx('span', {
                      children: P('bet'),
                    }),
                  ],
                }),
                s.jsx('button', {
                  onClick: () => r && n(!1),
                  children: s.jsx(re, {
                    className: 'close-icon icon-md transition',
                  }),
                }),
              ],
            }),
            s.jsxs('div', {
              className: 'modal-content',
              children: [
                s.jsxs('div', {
                  className: 'title-wrap',
                  children: [
                    s.jsx('h2', {
                      children: P(a),
                    }),
                    s.jsxs('div', {
                      className: 'id-wrap',
                      children: [
                        s.jsx('h2', {
                          children: e == null ? void 0 : e.drawId,
                        }),
                        s.jsx('div', {
                          className: 'share-wrap',
                          children: s.jsx('button', {
                            onClick: (m) => {
                              i(m, e == null ? void 0 : e.drawId)
                            },
                            children: s.jsx(re, {
                              className: 'copy-icon transition icon-elg',
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsx('div', {
                  className: 'placed-wrap',
                  children: s.jsx('span', {
                    children: e == null ? void 0 : e.betDate.toLocaleString(),
                  }),
                }),
              ],
            }),
            s.jsx('div', {
              className: 'modal-content',
              children: o,
            }),
            s.jsx('div', {
              className: 'footer',
              children: f
                ? s.jsxs('div', {
                    className: 'modal-content',
                    children: [
                      s.jsx('div', {
                        className: 'modal-wrap',
                        children: s.jsxs(Qe, {
                          children: [
                            s.jsx('span', {
                              children: P('hash'),
                            }),
                            s.jsxs(Ze, {
                              children: [
                                s.jsx(et, {
                                  type: 'text',
                                  readOnly: !0,
                                  defaultValue: f.hash,
                                }),
                                s.jsx('div', {
                                  className: 'input-buttons-wrap shadow-none',
                                  children: s.jsx('button', {
                                    className: 'default transition',
                                    onClick: (m) => {
                                      i(m, f.hash)
                                    },
                                    children: s.jsx(re, {
                                      pointerEvents: 'none',
                                      className: 'copy-icon icon-elg',
                                      backgroundColor: 'var(--text-color)',
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      s.jsx('div', {
                        className: 'modal-wrap',
                        children: s.jsxs(Qe, {
                          children: [
                            s.jsx('span', {
                              children: P('seed'),
                            }),
                            s.jsxs(Ze, {
                              children: [
                                s.jsx(et, {
                                  type: 'text',
                                  readOnly: !0,
                                  defaultValue: f.seed,
                                }),
                                s.jsx('div', {
                                  className: 'input-buttons-wrap shadow-none',
                                  children: s.jsx('button', {
                                    className: 'default transition',
                                    onClick: (m) => {
                                      i(m, f.seed)
                                    },
                                    children: s.jsx(re, {
                                      pointerEvents: 'none',
                                      className: 'copy-icon icon-elg',
                                      backgroundColor: 'var(--text-color)',
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      s.jsx('div', {
                        className: 'bottom-wrap',
                        children: s.jsx('div', {
                          className: 'verify',
                          children: s.jsx('button', {
                            className: 'transition',
                            onClick: () => {
                              n(!1),
                                x(!0, {
                                  tab: 'verify',
                                  verify: {
                                    hash: f.hash,
                                    seed: f.seed,
                                  },
                                })
                            },
                            children: P('verifyBet'),
                          }),
                        }),
                      }),
                    ],
                  })
                : s.jsx('div', {
                    className: 'loader-wrap',
                    children: s.jsx('div', {
                      className: 'content',
                      children: s.jsx('div', {
                        className: 'loader',
                        children: s.jsx('div', {
                          className: 'loader-animation',
                        }),
                      }),
                    }),
                  }),
            }),
            s.jsx(Bt, {
              placement: 'top',
              show: c.state.show,
              target: d.current,
              tooltipRef: l,
              children: s.jsx('div', {
                className: 'tooltip-content-wrapper',
                children: P('copied'),
              }),
            }),
          ],
        }),
      }),
      v,
    )
  },
  xn = p.lazy(() =>
    ht(
      () => import('./index-FF3pWCV9.js'),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
      import.meta.url,
    ),
  ),
  kn = ({
    className: e,
    balance: t,
    hideBalance: r,
    results: n,
    limit: o,
    connector: a,
    preview: u,
    setCurrentResult: i,
    currentResult: c,
    multiplayer: f,
    game: l,
  }) => {
    const d = [e, t ? 'balance' : void 0].join(' '),
      {
        settings: { animations: x },
      } = p.useContext(xt),
      [v, m] = p.useState(!1),
      y = p.useRef(null),
      g = p.useRef(0),
      j = p.useMemo(() => {
        if (n.length === 0) return g.current
        const h = n[0].id
        if (h === y.current) return g.current
        const N = new Set()
        for (const S of n) {
          if (S.id === y.current) break
          N.add(S.id)
        }
        const w = g.current + N.size
        return (y.current = h), (g.current = w), w
      }, [n, y])
    return (
      p.useEffect(() => {
        v || i(null)
      }, [v]),
      s.jsxs('div', {
        className: `account-summary ${d}`,
        'data-testid': 'account-summary',
        'data-total-bets': j,
        ...(x
          ? void 0
          : {
              style: {
                '--past-results-duration': 0,
              },
            }),
        children: [
          !r &&
            t &&
            s.jsx(tr, {
              'data-testid': 'balance',
              children: t,
            }),
          s.jsxs('div', {
            className: `past-results ${n.length === o ? 'full' : ''}`,
            children: [
              n.map((h) =>
                s.jsxs(
                  'button',
                  {
                    className: h.result,
                    'data-testid': 'result',
                    'data-roundid': h.roundId,
                    onClick: () => {
                      i(h), m(!0)
                    },
                    children: [
                      h.value,
                      h.individualResult &&
                        s.jsx('div', {
                          className: 'multiplayer-individual-result',
                          children: h.individualResult,
                        }),
                    ],
                  },
                  h.id,
                ),
              ),
              v &&
                s.jsx(p.Suspense, {
                  children: f
                    ? s.jsx(yn, {
                        result: c,
                        connector: a,
                        setShowModal: m,
                        showModal: v,
                        preview: u,
                        game: l,
                      })
                    : s.jsx(xn, {
                        result: c,
                        connector: a,
                        setShowModal: m,
                        showModal: v,
                        preview: u,
                        game: l,
                      }),
                }),
            ],
          }),
        ],
      })
    )
  },
  wn = ({ onClose: e, children: t, ...r }) =>
    Ne.createPortal(
      s.jsxs(Te, {
        onClose: e,
        ...r,
        children: [
          s.jsxs('div', {
            className: 'modal-header',
            children: [
              s.jsxs('h2', {
                children: [
                  s.jsx('div', {
                    className: 'game-info-icon',
                  }),
                  s.jsx('span', {
                    children: P('gameInfo'),
                  }),
                ],
              }),
              s.jsx('button', {
                onClick: e,
                children: s.jsx(re, {
                  className: 'close-icon icon-md transition',
                }),
              }),
            ],
          }),
          s.jsx('div', {
            className: 'modal-content game-info',
            children: t,
          }),
        ],
      }),
      document.getElementById('root'),
    ),
  K = ({ icon: e, title: t, callback: r, buttonState: n = !1, ...o }) => {
    const [a, u] = p.useState(n),
      i = () => {
        u((c) => !c), r == null || r()
      }
    return s.jsxs('button', {
      className: `settings-button-wrapper ${a ? 'action-on' : 'action-off'}`,
      onClick: i,
      ...o,
      children: [
        s.jsx('div', {
          className: `icon ${e}-icon`,
        }),
        s.jsx('span', {
          children: t,
        }),
      ],
    })
  },
  mt = (e, t) => {
    const r = (o) => {
      try {
        localStorage.setItem(e, JSON.stringify(o))
      } catch (a) {
        console.error(a)
      }
    }
    let n = t
    try {
      const o = localStorage.getItem(e)
      o && (n = JSON.parse(o))
    } catch (o) {
      console.error(o)
    }
    return [n, r]
  },
  bn = ({ callback: e }) => {
    const [t, r] = mt('settings_soundsVolume', 1),
      [n, o] = mt('settings_soundsEnabled', !0),
      [a, u] = p.useState(t),
      [i, c] = p.useState(n)
    p.useEffect(() => {
      r(a)
    }, [a]),
      p.useEffect(() => {
        o(i)
      }, [i])
    const f = (d) => {
      c(!0), u(d.target.valueAsNumber)
    }
    p.useEffect(() => {
      e(a)
    }, [a])
    const l = () => {
      c((d) => (u(d ? 0 : t), !d))
    }
    return s.jsxs('div', {
      className: `settings-volume-wrapper ${i ? 'action-on' : 'action-off'}`,
      children: [
        s.jsx('button', {
          className: 'volume-button transition',
          onClick: l,
          children: s.jsx('div', {
            className: 'icon volume-icon',
          }),
        }),
        s.jsx('div', {
          className: 'volume-input-wrapper',
          style: {
            '--settings-volume-current': `${a * 100}%`,
          },
          children: s.jsx('input', {
            type: 'range',
            min: '0',
            max: '1',
            step: '0.05',
            onChange: f,
            value: a == null ? void 0 : a.toFixed(2),
          }),
        }),
      ],
    })
  },
  jn = ({ enabled: e, showGameInfo: t, exitCallback: r }) => {
    const {
      setSettings: n,
      settings: { instantBet: o, animations: a, maxBet: u },
    } = p.useContext(xt)
    return s.jsxs(s.Fragment, {
      children: [
        s.jsx(bn, {
          callback: (i) =>
            n((c) => ({
              ...c,
              volume: i,
            })),
          'data-testid': 'settings-volume',
        }),
        (e == null ? void 0 : e.includes('instant-bet')) &&
          s.jsx(K, {
            icon: 'instant-bet',
            title: P('instantBet'),
            callback: () =>
              n((i) => ({
                ...i,
                instantBet: !i.instantBet,
              })),
            buttonState: o,
            'data-testid': 'settings-instant-bet',
          }),
        (e == null ? void 0 : e.includes('animations')) &&
          s.jsx(K, {
            icon: 'animations',
            title: P('animations'),
            callback: () =>
              n((i) => ({
                ...i,
                animations: !i.animations,
              })),
            buttonState: a,
            'data-testid': 'settings-animations',
          }),
        (e == null ? void 0 : e.includes('max-bet')) &&
          s.jsx(K, {
            icon: 'max-bet',
            title: P('maxBet'),
            callback: () =>
              n(
                (i) => (
                  localStorage.setItem('settings_maxBetEnabled', i.maxBet ? 'false' : 'true'),
                  {
                    ...i,
                    maxBet: !i.maxBet,
                  }
                ),
              ),
            buttonState: u,
            'data-testid': 'settings-max-bet',
          }),
        (e == null ? void 0 : e.includes('show-player-results')) &&
          s.jsx(K, {
            icon: 'show-player-results',
            title: P('showPlayerReults'),
            'data-testid': 'settings-show-player-results',
          }),
        (e == null ? void 0 : e.includes('hotkeys')) &&
          s.jsx(K, {
            icon: 'hotkeys',
            title: P('hotkeys'),
            'data-testid': 'settings-hotkeys',
          }),
        s.jsx(K, {
          icon: 'game-info',
          title: P('gameInfo'),
          callback: t,
          'data-testid': 'settings-game-info',
        }),
        (e == null ? void 0 : e.includes('exit')) &&
          s.jsx(K, {
            icon: 'exit',
            title: P('exit'),
            callback: r,
            'data-testid': 'settings-exit',
          }),
      ],
    })
  },
  On = ({ enabled: e, handleGameInfoOnClick: t, handleExitOnClick: r }) => {
    const n = p.useRef(null),
      o = p.useRef(null),
      [a, u] = p.useState(!1),
      [i, c] = p.useState(),
      f = p.useRef(!1),
      [l, d] = p.useState(),
      [x, v] = p.useState('top'),
      m = yt(o),
      y = () => {
        m.hide(), u(!0)
      },
      g = () => {
        m.hide(), r && r()
      }
    return (
      p.useEffect(() => {
        a && (t == null || t().then((j) => c(j)))
      }, [a]),
      p.useEffect(() => {
        m.state.attached ? (f.current = !0) : (f.current = !1)
      }, [m.state.attached]),
      s.jsxs(s.Fragment, {
        children: [
          s.jsx('button', {
            ref: n,
            'data-testid': 'settings-button',
            className: 'action-button',
            onMouseOver: () => {
              m.state.show ||
                (m.show({
                  target: n.current,
                  showDelay: 400,
                }),
                d(
                  s.jsx('div', {
                    className: 'tooltip-content-wrapper',
                    children: P('gameSettings'),
                  }),
                ),
                v('top'))
            },
            onMouseOut: () => {
              f.current || m.hide()
            },
            onClick: () => {
              f.current
                ? (m.show({
                    target: n.current,
                    showDelay: 400,
                  }),
                  d(
                    s.jsx('div', {
                      className: 'tooltip-content-wrapper',
                      children: P('gameSettings'),
                    }),
                  ),
                  v('top'),
                  (f.current = !1))
                : (m.show({
                    attached: !0,
                    target: n.current,
                  }),
                  d(
                    s.jsx(jn, {
                      enabled: e,
                      showGameInfo: () => y(),
                      exitCallback: () => g(),
                    }),
                  ),
                  v('top'),
                  (f.current = !0))
            },
            children: s.jsx('div', {
              className: 'gear-icon',
            }),
          }),
          s.jsx(Bt, {
            tooltipRef: o,
            placement: x,
            show: m.state.show,
            target: n.current,
            'data-testid': 'settings-content',
            children: l,
          }),
          a &&
            s.jsx(wn, {
              onClose: () => u(!1),
              'data-testid': 'settings-game-info-content',
              children: i
                ? s.jsx('div', {
                    dangerouslySetInnerHTML: {
                      __html: i,
                    },
                  })
                : s.jsx(gt, {}),
            }),
        ],
      })
    )
  },
  Sn = (e) => {
    const t = new ResizeObserver((r) => {
      for (const n of r) e(n)
    })
    p.useEffect(() => (t.observe(document.body), () => t.disconnect()), [t])
  },
  Me = p.forwardRef(({ children: e, ...t }, r) =>
    s.jsx('button', {
      ref: r,
      ...t,
      children: e,
    }),
  ),
  Nn = (e) => {
    const t = p.useRef(null),
      { bets: r, used: n, betFormatted: o, totalWinFormatted: a, endTime: u } = e.freeBetsConfig,
      i = new Date(u || 0),
      c = () => {
        if (e.type === 'init')
          return P('initMessageFreeBets', {
            bets: r,
            betFormatted: o,
          })
        if (e.type === 'summary' || e.type === 'finished')
          return P('summaryMessageFreeBets', {
            used: n,
            totalWinFormatted: a,
          })
        if (e.type === 'unfinished') return P('unfinishedFreeBet')
      }
    return s.jsxs(Te, {
      ref: t,
      'data-testid': 'freeBetsModal',
      children: [
        s.jsx('div', {
          className: 'modal-header',
          style: {
            justifyContent: 'center',
          },
          children: s.jsx('h1', {
            children: s.jsx('span', {
              children: P('freeBets').toUpperCase(),
            }),
          }),
        }),
        s.jsxs('div', {
          className: 'modal-center',
          style: {
            flexDirection: 'column',
            gap: '5px',
            padding: '10px',
          },
          children: [
            s.jsx('span', {
              style: {
                whiteSpace: 'pre-line',
                textAlign: 'center',
              },
              children: c(),
            }),
            u &&
              e.type !== 'finished' &&
              s.jsx('span', {
                children: P('campaignEnds', {
                  end: i.toLocaleString(),
                }),
              }),
          ],
        }),
        s.jsx('div', {
          className: 'modal-free-bet-footer',
          children:
            e.type === 'init'
              ? s.jsxs(s.Fragment, {
                  children: [
                    s.jsx(Me, {
                      className: 'cancel',
                      onClick: () => e.handleOpt(!1),
                      children: P('optOut'),
                    }),
                    s.jsx(Me, {
                      className: 'confirm',
                      onClick: () => e.handleOpt(!0),
                      children: P('start'),
                    }),
                  ],
                })
              : s.jsx(s.Fragment, {
                  children: s.jsx(Me, {
                    className: 'confirm',
                    onClick: () => e.handleAcknowledge(),
                    children: P('continue'),
                  }),
                }),
        }),
      ],
    })
  },
  En = p.lazy(() =>
    ht(
      () => import('./index-DFZVlSN4.js'),
      __vite__mapDeps([16, 1, 2, 17, 12, 7, 6, 8, 9, 4, 10, 11, 18, 3, 5, 19, 20, 21, 15]),
      import.meta.url,
    ),
  ),
  Dn = ({ children: e, settings: t, game: r, fairness: n, isLoading: o, freeBets: a }) => {
    const { t: u } = er(),
      [i, c] = p.useState(!1),
      [f, l] = p.useState(!1),
      [d, x] = p.useState(),
      [v, m] = p.useState(),
      { isMobile: y } = Ut(),
      g = Yt(['--bottom-logo-true-color', '--botom-logo-visibility']),
      j = p.useRef(null),
      GameContainerDiv = document.getElementById('game-container'),
      N = (O) => {
        const b = {
          width: O.width,
          height: O.height,
        }
        ;(window.parent || window).parent.postMessage(
          {
            message: 'windowResize',
            data: b,
          },
          '*',
        )
      },
      w = () => {
        GameContainerDiv &&
          (GameContainerDiv.style.removeProperty('width'),
          GameContainerDiv.style.removeProperty('transform'),
          GameContainerDiv.style.removeProperty('padding-top'),
          GameContainerDiv.style.removeProperty('margin-left'),
          document.body.classList.remove('landscape'))
      }
    //on Resize
    Sn(() => {
      if (GameContainerDiv) {
        if (y) {
          w(),
            N({
              width: GameContainerDiv.scrollWidth,
              height: GameContainerDiv.scrollHeight,
            }),
            l(!0)
          return
        }
        j.current && clearTimeout(j.current),
          (j.current = window.setTimeout(() => {
            j.current = null
            const InnerWidth = window.innerWidth,
              InnerHeight = window.innerHeight,
              GameRatio = 16 / 9,
              WindowRatio = InnerWidth / InnerHeight,
              PTop =
                GameContainerDiv.scrollHeight -
                (parseFloat(GameContainerDiv.style.paddingTop) || 0),
              GameContainerWidth = PTop * (16 / 9),
              M = WindowRatio < GameRatio ? InnerWidth / GameContainerWidth : InnerHeight / PTop,
              V = GameContainerWidth * M,
              z = PTop * M,
              k = InnerHeight > z ? ((InnerHeight - z) / 2) * (2 - M) : 0,
              $ = InnerWidth > V ? (InnerWidth - V) / 2 : 0
            ;(GameContainerDiv.style.width = `${GameContainerWidth}px`),
              (GameContainerDiv.style.transform = `scale(${M})`),
              (GameContainerDiv.style.paddingTop = `${k.toFixed(2)}px`),
              (GameContainerDiv.style.marginLeft = `${$.toFixed(2)}px`),
              N({
                width: V,
                height: z,
              }),
              l(!0)
          }, 0)),
          document.body.classList.add('landscape')
      }
    }),
      p.useEffect(() => () => w(), []),
      p.useEffect(() => {
        i || m(void 0)
      }, [i]),
      p.useEffect(() => {
        x(a == null ? void 0 : a.show)
      }, [a == null ? void 0 : a.show])
    const S = (O, b) => {
        c(O), m(b)
      },
      E = () => {
        c(!1)
      }
    return s.jsxs(s.Fragment, {
      children: [
        (o || !f) && Ne.createPortal(s.jsx(gt, {}), document.getElementById('root')),
        s.jsx('div', {
          className: `game-wrapper ${r}`,
          ...(o || !f
            ? {
                style: {
                  visibility: 'hidden',
                },
              }
            : void 0),
          children: s.jsxs(jt.Provider, {
            value: {
              showFairnessModal: i,
              setShowFairnessModal: S,
            },
            children: [
              s.jsx('div', {
                className: 'game-content',
                children: e,
              }),
              i &&
                n &&
                s.jsx(p.Suspense, {
                  children: s.jsx(En, {
                    connector: n.connector,
                    initialState: v,
                    onClose: E,
                    game: r,
                    verify: n,
                  }),
                }),
              d &&
                (a == null ? void 0 : a.freeBetsConfig) &&
                s.jsx(p.Suspense, {
                  children: s.jsx(Nn, {
                    handleOpt: a.handleOpt,
                    freeBetsConfig: a.freeBetsConfig,
                    type: a.type,
                    handleAcknowledge: a.handleAcknowledge,
                  }),
                }),
              s.jsxs('div', {
                className: 'game-bottom-interface',
                children: [
                  s.jsx('div', {
                    className: 'actions',
                    children: s.jsx(On, {
                      ...t,
                    }),
                  }),
                  s.jsx('div', {
                    className: [
                      'logo',
                      g['--bottom-logo-true-color'] ? 'color' : '',
                      Ht(g['--botom-logo-visibility'], y) ? '' : 'hide',
                    ]
                      .filter(Boolean)
                      .join(' '),
                  }),
                  s.jsx('div', {
                    className: 'fairness',
                    children: s.jsx('button', {
                      onClick: () => c((O) => !O),
                      'data-testid': 'fairness-button',
                      children: u('fairness'),
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    })
  },
  Tn = ({ children: e, style: t }) =>
    s.jsx('div', {
      className: 'game-sidebar',
      style: t,
      children: e,
    }),
  $n = p.forwardRef(({ children: e, style: t }, r) =>
    s.jsx('div', {
      ref: r,
      className: 'game-ui',
      style: t,
      children: s.jsx('div', {
        className: 'game-ui-wrap',
        children: e,
      }),
    }),
  )
export {
  kn as A,
  Me as B,
  jt as F,
  Dn as G,
  re as I,
  Te as M,
  Bt as P,
  Tn as S,
  $n as a,
  mt as b,
  Sn as c,
  er as u,
}
