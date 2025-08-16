import { l as yt, t as hn } from './DIeogL5L.js'
const kt = !1
var dn = Array.isArray,
  wn = Array.prototype.indexOf,
  re = Array.from,
  ae = Object.defineProperty,
  Z = Object.getOwnPropertyDescriptor,
  yn = Object.getOwnPropertyDescriptors,
  En = Object.prototype,
  gn = Array.prototype,
  Lt = Object.getPrototypeOf,
  Dt = Object.isExtensible
function se(t) {
  return typeof t == 'function'
}
const le = () => {}
function fe(t) {
  return typeof (t == null ? void 0 : t.then) == 'function'
}
function ie(t) {
  return t()
}
function qt(t) {
  for (var n = 0; n < t.length; n++) t[n]()
}
function ue(t, n) {
  if (Array.isArray(t)) return t
  if (n === void 0 || !(Symbol.iterator in t)) return Array.from(t)
  const e = []
  for (const r of t) if ((e.push(r), e.length === n)) break
  return e
}
const O = 2,
  jt = 4,
  it = 8,
  Et = 16,
  k = 32,
  G = 64,
  gt = 128,
  A = 256,
  rt = 512,
  E = 1024,
  N = 2048,
  D = 4096,
  H = 8192,
  mt = 16384,
  Yt = 32768,
  Ht = 65536,
  oe = 1 << 17,
  mn = 1 << 19,
  Bt = 1 << 20,
  ht = 1 << 21,
  F = Symbol('$state'),
  _e = Symbol('legacy props'),
  ce = Symbol('')
function Ut(t) {
  return t === this.v
}
function Tn(t, n) {
  return t != t ? n == n : t !== n || (t !== null && typeof t == 'object') || typeof t == 'function'
}
function ve(t, n) {
  return t !== n
}
function Gt(t) {
  return !Tn(t, this.v)
}
function An(t) {
  throw new Error('https://svelte.dev/e/effect_in_teardown')
}
function bn() {
  throw new Error('https://svelte.dev/e/effect_in_unowned_derived')
}
function xn(t) {
  throw new Error('https://svelte.dev/e/effect_orphan')
}
function In() {
  throw new Error('https://svelte.dev/e/effect_update_depth_exceeded')
}
function pe() {
  throw new Error('https://svelte.dev/e/hydration_failed')
}
function he(t) {
  throw new Error('https://svelte.dev/e/lifecycle_legacy_only')
}
function de(t) {
  throw new Error('https://svelte.dev/e/props_invalid_value')
}
function On() {
  throw new Error('https://svelte.dev/e/state_descriptors_fixed')
}
function Nn() {
  throw new Error('https://svelte.dev/e/state_prototype_fixed')
}
function Rn() {
  throw new Error('https://svelte.dev/e/state_unsafe_mutation')
}
const we = 1,
  ye = 2,
  Ee = 4,
  ge = 8,
  me = 16,
  Te = 1,
  Ae = 2,
  be = 4,
  xe = 8,
  Ie = 16,
  Oe = 1,
  Ne = 2,
  Re = 4,
  Se = 1,
  ke = 2,
  Sn = '[',
  kn = '[!',
  Dn = ']',
  Tt = {},
  m = Symbol(),
  De = 'http://www.w3.org/1999/xhtml',
  Ce = 'http://www.w3.org/2000/svg',
  Pe = '@attach'
function Me() {
  throw new Error('https://svelte.dev/e/invalid_default_snippet')
}
function Cn(t) {
  throw new Error('https://svelte.dev/e/lifecycle_outside_component')
}
let p = null
function Ct(t) {
  p = t
}
function Fe(t) {
  return At().get(t)
}
function Le(t, n) {
  return At().set(t, n), n
}
function qe(t) {
  return At().has(t)
}
function je(t, n = !1, e) {
  var r = (p = {
    p,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: t,
    x: null,
    l: null,
  })
  yt &&
    !n &&
    (p.l = {
      s: null,
      u: null,
      r1: [],
      r2: xt(!1),
    }),
    Yn(() => {
      r.d = !0
    })
}
function Ye(t) {
  const n = p
  if (n !== null) {
    t !== void 0 && (n.x = t)
    const u = n.e
    if (u !== null) {
      var e = h,
        r = v
      n.e = null
      try {
        for (var a = 0; a < u.length; a++) {
          var s = u[a]
          st(s.effect), U(s.reaction), Jt(s.fn)
        }
      } finally {
        st(e), U(r)
      }
    }
    ;(p = n.p), (n.m = !0)
  }
  return t || {}
}
function ut() {
  return !yt || (p !== null && p.l === null)
}
function At(t) {
  return p === null && Cn(), p.c ?? (p.c = new Map(Pn(p) || void 0))
}
function Pn(t) {
  let n = t.p
  for (; n !== null; ) {
    const e = n.c
    if (e !== null) return e
    n = n.p
  }
  return null
}
function $(t) {
  if (typeof t != 'object' || t === null || F in t) return t
  const n = Lt(t)
  if (n !== En && n !== gn) return t
  var e = new Map(),
    r = dn(t),
    a = C(0),
    s = v,
    u = (i) => {
      var l = v
      U(s)
      var f = i()
      return U(l), f
    }
  return (
    r && e.set('length', C(t.length)),
    new Proxy(t, {
      defineProperty(i, l, f) {
        return (
          (!('value' in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) &&
            On(),
          u(() => {
            var c = e.get(l)
            c === void 0 ? ((c = C(f.value)), e.set(l, c)) : I(c, f.value, !0)
          }),
          !0
        )
      },
      deleteProperty(i, l) {
        var f = e.get(l)
        if (f === void 0) {
          if (l in i) {
            const _ = u(() => C(m))
            e.set(l, _), pt(a)
          }
        } else {
          if (r && typeof l == 'string') {
            var c = e.get('length'),
              o = Number(l)
            Number.isInteger(o) && o < c.v && I(c, o)
          }
          I(f, m), pt(a)
        }
        return !0
      },
      get(i, l, f) {
        var g
        if (l === F) return t
        var c = e.get(l),
          o = l in i
        if (
          (c === void 0 &&
            (!o || ((g = Z(i, l)) != null && g.writable)) &&
            ((c = u(() => {
              var R = $(o ? i[l] : m),
                ct = C(R)
              return ct
            })),
            e.set(l, c)),
          c !== void 0)
        ) {
          var _ = M(c)
          return _ === m ? void 0 : _
        }
        return Reflect.get(i, l, f)
      },
      getOwnPropertyDescriptor(i, l) {
        var f = Reflect.getOwnPropertyDescriptor(i, l)
        if (f && 'value' in f) {
          var c = e.get(l)
          c && (f.value = M(c))
        } else if (f === void 0) {
          var o = e.get(l),
            _ = o == null ? void 0 : o.v
          if (o !== void 0 && _ !== m)
            return {
              enumerable: !0,
              configurable: !0,
              value: _,
              writable: !0,
            }
        }
        return f
      },
      has(i, l) {
        var _
        if (l === F) return !0
        var f = e.get(l),
          c = (f !== void 0 && f.v !== m) || Reflect.has(i, l)
        if (f !== void 0 || (h !== null && (!c || ((_ = Z(i, l)) != null && _.writable)))) {
          f === void 0 &&
            ((f = u(() => {
              var g = c ? $(i[l]) : m,
                R = C(g)
              return R
            })),
            e.set(l, f))
          var o = M(f)
          if (o === m) return !1
        }
        return c
      },
      set(i, l, f, c) {
        var Rt
        var o = e.get(l),
          _ = l in i
        if (r && l === 'length')
          for (var g = f; g < o.v; g += 1) {
            var R = e.get(g + '')
            R !== void 0 ? I(R, m) : g in i && ((R = u(() => C(m))), e.set(g + '', R))
          }
        if (o === void 0)
          (!_ || ((Rt = Z(i, l)) != null && Rt.writable)) &&
            ((o = u(() => {
              var St = C(void 0)
              return I(St, $(f)), St
            })),
            e.set(l, o))
        else {
          _ = o.v !== m
          var ct = u(() => $(f))
          I(o, ct)
        }
        var et = Reflect.getOwnPropertyDescriptor(i, l)
        if ((et != null && et.set && et.set.call(c, f), !_)) {
          if (r && typeof l == 'string') {
            var Nt = e.get('length'),
              vt = Number(l)
            Number.isInteger(vt) && vt >= Nt.v && I(Nt, vt + 1)
          }
          pt(a)
        }
        return !0
      },
      ownKeys(i) {
        M(a)
        var l = Reflect.ownKeys(i).filter((o) => {
          var _ = e.get(o)
          return _ === void 0 || _.v !== m
        })
        for (var [f, c] of e) c.v !== m && !(f in i) && l.push(f)
        return l
      },
      setPrototypeOf() {
        Nn()
      },
    })
  )
}
function pt(t, n = 1) {
  I(t, t.v + n)
}
function Pt(t) {
  try {
    if (t !== null && typeof t == 'object' && F in t) return t[F]
  } catch {}
  return t
}
function He(t, n) {
  return Object.is(Pt(t), Pt(n))
}
function bt(t) {
  var n = O | N,
    e = v !== null && v.f & O ? v : null
  return (
    h === null || (e !== null && e.f & A) ? (n |= A) : (h.f |= Bt),
    {
      ctx: p,
      deps: null,
      effects: null,
      equals: Ut,
      f: n,
      fn: t,
      reactions: null,
      rv: 0,
      v: null,
      wv: 0,
      parent: e ?? h,
    }
  )
}
function Be(t) {
  const n = bt(t)
  return fn(n), n
}
function Ue(t) {
  const n = bt(t)
  return (n.equals = Gt), n
}
function Vt(t) {
  var n = t.effects
  if (n !== null) {
    t.effects = null
    for (var e = 0; e < n.length; e += 1) j(n[e])
  }
}
function Mn(t) {
  for (var n = t.parent; n !== null; ) {
    if (!(n.f & O)) return n
    n = n.parent
  }
  return null
}
function Kt(t) {
  var n,
    e = h
  st(Mn(t))
  try {
    Vt(t), (n = cn(t))
  } finally {
    st(e)
  }
  return n
}
function $t(t) {
  var n = Kt(t)
  if ((t.equals(n) || ((t.v = n), (t.wv = on())), !K)) {
    var e = (P || t.f & A) && t.deps !== null ? D : E
    x(t, e)
  }
}
const X = new Map()
function xt(t, n) {
  var e = {
    f: 0,
    v: t,
    reactions: null,
    equals: Ut,
    rv: 0,
    wv: 0,
  }
  return e
}
function C(t, n) {
  const e = xt(t)
  return fn(e), e
}
function Ge(t, n = !1, e = !0) {
  var a
  const r = xt(t)
  return (
    n || (r.equals = Gt),
    yt && e && p !== null && p.l !== null && ((a = p.l).s ?? (a.s = [])).push(r),
    r
  )
}
function Ve(t, n) {
  return (
    I(
      t,
      pn(() => M(t)),
    ),
    n
  )
}
function I(t, n, e = !1) {
  v !== null && !S && ut() && v.f & (O | Et) && !(y != null && y.includes(t)) && Rn()
  let r = e ? $(n) : n
  return Fn(t, r)
}
function Fn(t, n) {
  if (!t.equals(n)) {
    var e = t.v
    K ? X.set(t, n) : X.set(t, e),
      (t.v = n),
      t.f & O && (t.f & N && Kt(t), x(t, t.f & A ? D : E)),
      (t.wv = on()),
      Zt(t, N),
      ut() && h !== null && h.f & E && !(h.f & (k | G)) && (b === null ? Wn([t]) : b.push(t))
  }
  return n
}
function Ke(t, n = 1) {
  var e = M(t),
    r = n === 1 ? e++ : e--
  return I(t, e), r
}
function Zt(t, n) {
  var e = t.reactions
  if (e !== null)
    for (var r = ut(), a = e.length, s = 0; s < a; s++) {
      var u = e[s],
        i = u.f
      i & N || (!r && u === h) || (x(u, n), i & (E | A) && (i & O ? Zt(u, D) : _t(u)))
    }
}
function It(t) {
  console.warn('https://svelte.dev/e/hydration_mismatch')
}
function $e() {
  console.warn('https://svelte.dev/e/select_multiple_invalid_value')
}
let q = !1
function Ze(t) {
  q = t
}
let d
function B(t) {
  if (t === null) throw (It(), Tt)
  return (d = t)
}
function We() {
  return B(Y(d))
}
function Xe(t) {
  if (q) {
    if (Y(d) !== null) throw (It(), Tt)
    d = t
  }
}
function ze(t = 1) {
  if (q) {
    for (var n = t, e = d; n--; ) e = Y(e)
    d = e
  }
}
function Je() {
  for (var t = 0, n = d; ; ) {
    if (n.nodeType === 8) {
      var e = n.data
      if (e === Dn) {
        if (t === 0) return n
        t -= 1
      } else (e === Sn || e === kn) && (t += 1)
    }
    var r = Y(n)
    n.remove(), (n = r)
  }
}
function Qe(t) {
  if (!t || t.nodeType !== 8) throw (It(), Tt)
  return t.data
}
var Mt, Ln, qn, Wt, Xt
function tr() {
  if (Mt === void 0) {
    ;(Mt = window), (Ln = document), (qn = /Firefox/.test(navigator.userAgent))
    var t = Element.prototype,
      n = Node.prototype,
      e = Text.prototype
    ;(Wt = Z(n, 'firstChild').get),
      (Xt = Z(n, 'nextSibling').get),
      Dt(t) &&
        ((t.__click = void 0),
        (t.__className = void 0),
        (t.__attributes = null),
        (t.__style = void 0),
        (t.__e = void 0)),
      Dt(e) && (e.__t = void 0)
  }
}
function at(t = '') {
  return document.createTextNode(t)
}
function dt(t) {
  return Wt.call(t)
}
function Y(t) {
  return Xt.call(t)
}
function nr(t, n) {
  if (!q) return dt(t)
  var e = dt(d)
  if (e === null) e = d.appendChild(at())
  else if (n && e.nodeType !== 3) {
    var r = at()
    return e == null || e.before(r), B(r), r
  }
  return B(e), e
}
function er(t, n) {
  if (!q) {
    var e = dt(t)
    return e instanceof Comment && e.data === '' ? Y(e) : e
  }
  if (n && (d == null ? void 0 : d.nodeType) !== 3) {
    var r = at()
    return d == null || d.before(r), B(r), r
  }
  return d
}
function rr(t, n = 1, e = !1) {
  let r = q ? d : t
  for (var a; n--; ) (a = r), (r = Y(r))
  if (!q) return r
  var s = r == null ? void 0 : r.nodeType
  if (e && s !== 3) {
    var u = at()
    return r === null ? a == null || a.after(u) : r.before(u), B(u), u
  }
  return B(r), r
}
function ar(t) {
  t.textContent = ''
}
function zt(t) {
  h === null && v === null && xn(), v !== null && v.f & A && h === null && bn(), K && An()
}
function jn(t, n) {
  var e = n.last
  e === null ? (n.last = n.first = t) : ((e.next = t), (t.prev = e), (n.last = t))
}
function V(t, n, e, r = !0) {
  var a = h,
    s = {
      ctx: p,
      deps: null,
      nodes_start: null,
      nodes_end: null,
      f: t | N,
      first: null,
      fn: n,
      last: null,
      next: null,
      parent: a,
      prev: null,
      teardown: null,
      transitions: null,
      wv: 0,
    }
  if (e)
    try {
      ot(s), (s.f |= Yt)
    } catch (l) {
      throw (j(s), l)
    }
  else n !== null && _t(s)
  var u =
    e &&
    s.deps === null &&
    s.first === null &&
    s.nodes_start === null &&
    s.teardown === null &&
    (s.f & (Bt | gt)) === 0
  if (!u && r && (a !== null && jn(s, a), v !== null && v.f & O)) {
    var i = v
    ;(i.effects ?? (i.effects = [])).push(s)
  }
  return s
}
function Yn(t) {
  const n = V(it, null, !1)
  return x(n, E), (n.teardown = t), n
}
function sr(t) {
  zt()
  var n = h !== null && (h.f & k) !== 0 && p !== null && !p.m
  if (n) {
    var e = p
    ;(e.e ?? (e.e = [])).push({
      fn: t,
      effect: h,
      reaction: v,
    })
  } else {
    var r = Jt(t)
    return r
  }
}
function lr(t) {
  return zt(), Ot(t)
}
function fr(t) {
  const n = V(G, t, !0)
  return (e = {}) =>
    new Promise((r) => {
      e.outro
        ? Gn(n, () => {
            j(n), r(void 0)
          })
        : (j(n), r(void 0))
    })
}
function Jt(t) {
  return V(jt, t, !1)
}
function ir(t, n) {
  var e = p,
    r = {
      effect: null,
      ran: !1,
    }
  e.l.r1.push(r),
    (r.effect = Ot(() => {
      t(), !r.ran && ((r.ran = !0), I(e.l.r2, !0), pn(n))
    }))
}
function ur() {
  var t = p
  Ot(() => {
    if (M(t.l.r2)) {
      for (var n of t.l.r1) {
        var e = n.effect
        e.f & E && x(e, D), nt(e) && ot(e), (n.ran = !1)
      }
      t.l.r2.v = !1
    }
  })
}
function Ot(t) {
  return V(it, t, !0)
}
function or(t, n = [], e = bt) {
  const r = n.map(e)
  return Hn(() => t(...r.map(M)))
}
function Hn(t, n = 0) {
  return V(it | Et | n, t, !0)
}
function _r(t, n = !0) {
  return V(it | k, t, !0, n)
}
function Qt(t) {
  var n = t.teardown
  if (n !== null) {
    const e = K,
      r = v
    Ft(!0), U(null)
    try {
      n.call(null)
    } finally {
      Ft(e), U(r)
    }
  }
}
function tn(t, n = !1) {
  var e = t.first
  for (t.first = t.last = null; e !== null; ) {
    var r = e.next
    e.f & G ? (e.parent = null) : j(e, n), (e = r)
  }
}
function Bn(t) {
  for (var n = t.first; n !== null; ) {
    var e = n.next
    n.f & k || j(n), (n = e)
  }
}
function j(t, n = !0) {
  var e = !1
  ;(n || t.f & mn) &&
    t.nodes_start !== null &&
    t.nodes_end !== null &&
    (Un(t.nodes_start, t.nodes_end), (e = !0)),
    tn(t, n && !e),
    ft(t, 0),
    x(t, mt)
  var r = t.transitions
  if (r !== null) for (const s of r) s.stop()
  Qt(t)
  var a = t.parent
  a !== null && a.first !== null && nn(t),
    (t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = null)
}
function Un(t, n) {
  for (; t !== null; ) {
    var e = t === n ? null : Y(t)
    t.remove(), (t = e)
  }
}
function nn(t) {
  var n = t.parent,
    e = t.prev,
    r = t.next
  e !== null && (e.next = r),
    r !== null && (r.prev = e),
    n !== null && (n.first === t && (n.first = r), n.last === t && (n.last = e))
}
function Gn(t, n) {
  var e = []
  en(t, e, !0),
    Vn(e, () => {
      j(t), n && n()
    })
}
function Vn(t, n) {
  var e = t.length
  if (e > 0) {
    var r = () => --e || n()
    for (var a of t) a.out(r)
  } else n()
}
function en(t, n, e) {
  if (!(t.f & H)) {
    if (((t.f ^= H), t.transitions !== null))
      for (const u of t.transitions) (u.is_global || e) && n.push(u)
    for (var r = t.first; r !== null; ) {
      var a = r.next,
        s = (r.f & Ht) !== 0 || (r.f & k) !== 0
      en(r, n, s ? e : !1), (r = a)
    }
  }
}
function cr(t) {
  rn(t, !0)
}
function rn(t, n) {
  if (t.f & H) {
    ;(t.f ^= H), t.f & E && (x(t, N), _t(t))
    for (var e = t.first; e !== null; ) {
      var r = e.next,
        a = (e.f & Ht) !== 0 || (e.f & k) !== 0
      rn(e, a ? n : !1), (e = r)
    }
    if (t.transitions !== null) for (const s of t.transitions) (s.is_global || n) && s.in()
  }
}
const Kn = typeof requestIdleCallback > 'u' ? (t) => setTimeout(t, 1) : requestIdleCallback
let z = [],
  J = []
function an() {
  var t = z
  ;(z = []), qt(t)
}
function sn() {
  var t = J
  ;(J = []), qt(t)
}
function vr(t) {
  z.length === 0 && queueMicrotask(an), z.push(t)
}
function pr(t) {
  J.length === 0 && Kn(sn), J.push(t)
}
function $n() {
  z.length > 0 && an(), J.length > 0 && sn()
}
function Zn(t) {
  var n = h
  if (n.f & Yt) ln(t, n)
  else {
    if (!(n.f & gt)) throw t
    n.fn(t)
  }
}
function ln(t, n) {
  for (; n !== null; ) {
    if (n.f & gt)
      try {
        n.fn(t)
        return
      } catch {}
    n = n.parent
  }
  throw t
}
let Q = !1,
  tt = null,
  L = !1,
  K = !1
function Ft(t) {
  K = t
}
let W = []
let v = null,
  S = !1
function U(t) {
  v = t
}
let h = null
function st(t) {
  h = t
}
let y = null
function fn(t) {
  v !== null && v.f & ht && (y === null ? (y = [t]) : y.push(t))
}
let w = null,
  T = 0,
  b = null
function Wn(t) {
  b = t
}
let un = 1,
  lt = 0,
  P = !1
function on() {
  return ++un
}
function nt(t) {
  var o
  var n = t.f
  if (n & N) return !0
  if (n & D) {
    var e = t.deps,
      r = (n & A) !== 0
    if (e !== null) {
      var a,
        s,
        u = (n & rt) !== 0,
        i = r && h !== null && !P,
        l = e.length
      if (u || i) {
        var f = t,
          c = f.parent
        for (a = 0; a < l; a++)
          (s = e[a]),
            (u || !((o = s == null ? void 0 : s.reactions) != null && o.includes(f))) &&
              (s.reactions ?? (s.reactions = [])).push(f)
        u && (f.f ^= rt), i && c !== null && !(c.f & A) && (f.f ^= A)
      }
      for (a = 0; a < l; a++) if (((s = e[a]), nt(s) && $t(s), s.wv > t.wv)) return !0
    }
    ;(!r || (h !== null && !P)) && x(t, E)
  }
  return !1
}
function _n(t, n, e = !0) {
  var r = t.reactions
  if (r !== null)
    for (var a = 0; a < r.length; a++) {
      var s = r[a]
      ;(y != null && y.includes(t)) ||
        (s.f & O ? _n(s, n, !1) : n === s && (e ? x(s, N) : s.f & E && x(s, D), _t(s)))
    }
}
function cn(t) {
  var g
  var n = w,
    e = T,
    r = b,
    a = v,
    s = P,
    u = y,
    i = p,
    l = S,
    f = t.f
  ;(w = null),
    (T = 0),
    (b = null),
    (P = (f & A) !== 0 && (S || !L || v === null)),
    (v = f & (k | G) ? null : t),
    (y = null),
    Ct(t.ctx),
    (S = !1),
    lt++,
    (t.f |= ht)
  try {
    var c = (0, t.fn)(),
      o = t.deps
    if (w !== null) {
      var _
      if ((ft(t, T), o !== null && T > 0))
        for (o.length = T + w.length, _ = 0; _ < w.length; _++) o[T + _] = w[_]
      else t.deps = o = w
      if (!P) for (_ = T; _ < o.length; _++) ((g = o[_]).reactions ?? (g.reactions = [])).push(t)
    } else o !== null && T < o.length && (ft(t, T), (o.length = T))
    if (ut() && b !== null && !S && o !== null && !(t.f & (O | D | N)))
      for (_ = 0; _ < b.length; _++) _n(b[_], t)
    return a !== null && a !== t && (lt++, b !== null && (r === null ? (r = b) : r.push(...b))), c
  } catch (R) {
    Zn(R)
  } finally {
    ;(w = n), (T = e), (b = r), (v = a), (P = s), (y = u), Ct(i), (S = l), (t.f ^= ht)
  }
}
function Xn(t, n) {
  let e = n.reactions
  if (e !== null) {
    var r = wn.call(e, t)
    if (r !== -1) {
      var a = e.length - 1
      a === 0 ? (e = n.reactions = null) : ((e[r] = e[a]), e.pop())
    }
  }
  e === null &&
    n.f & O &&
    (w === null || !w.includes(n)) &&
    (x(n, D), n.f & (A | rt) || (n.f ^= rt), Vt(n), ft(n, 0))
}
function ft(t, n) {
  var e = t.deps
  if (e !== null) for (var r = n; r < e.length; r++) Xn(t, e[r])
}
function ot(t) {
  var n = t.f
  if (!(n & mt)) {
    x(t, E)
    var e = h,
      r = L
    ;(h = t), (L = !0)
    try {
      n & Et ? Bn(t) : tn(t), Qt(t)
      var a = cn(t)
      ;(t.teardown = typeof a == 'function' ? a : null), (t.wv = un)
      var s
      kt && hn && t.f & N && t.deps
    } finally {
      ;(L = r), (h = e)
    }
  }
}
function zn() {
  try {
    In()
  } catch (t) {
    if (tt !== null) ln(t, tt)
    else throw t
  }
}
function vn() {
  var t = L
  try {
    var n = 0
    for (L = !0; W.length > 0; ) {
      n++ > 1e3 && zn()
      var e = W,
        r = e.length
      W = []
      for (var a = 0; a < r; a++) {
        var s = Qn(e[a])
        Jn(s)
      }
      X.clear()
    }
  } finally {
    ;(Q = !1), (L = t), (tt = null)
  }
}
function Jn(t) {
  var n = t.length
  if (n !== 0)
    for (var e = 0; e < n; e++) {
      var r = t[e]
      r.f & (mt | H) ||
        (nt(r) &&
          (ot(r),
          r.deps === null &&
            r.first === null &&
            r.nodes_start === null &&
            (r.teardown === null ? nn(r) : (r.fn = null))))
    }
}
function _t(t) {
  Q || ((Q = !0), queueMicrotask(vn))
  for (var n = (tt = t); n.parent !== null; ) {
    n = n.parent
    var e = n.f
    if (e & (G | k)) {
      if (!(e & E)) return
      n.f ^= E
    }
  }
  W.push(n)
}
function Qn(t) {
  for (var n = [], e = t; e !== null; ) {
    var r = e.f,
      a = (r & (k | G)) !== 0,
      s = a && (r & E) !== 0
    if (!s && !(r & H)) {
      r & jt ? n.push(e) : a ? (e.f ^= E) : nt(e) && ot(e)
      var u = e.first
      if (u !== null) {
        e = u
        continue
      }
    }
    var i = e.parent
    for (e = e.next; e === null && i !== null; ) (e = i.next), (i = i.parent)
  }
  return n
}
function te(t) {
  for (var n; ; ) {
    if (($n(), W.length === 0)) return (Q = !1), (tt = null), n
    ;(Q = !0), vn()
  }
}
async function hr() {
  await Promise.resolve(), te()
}
function M(t) {
  var n = t.f,
    e = (n & O) !== 0
  if (v !== null && !S) {
    if (!(y != null && y.includes(t))) {
      var r = v.deps
      t.rv < lt &&
        ((t.rv = lt),
        w === null && r !== null && r[T] === t
          ? T++
          : w === null
            ? (w = [t])
            : (!P || !w.includes(t)) && w.push(t))
    }
  } else if (e && t.deps === null && t.effects === null) {
    var a = t,
      s = a.parent
    s !== null && !(s.f & A) && (a.f ^= A)
  }
  return e && ((a = t), nt(a) && $t(a)), K && X.has(t) ? X.get(t) : t.v
}
function pn(t) {
  var n = S
  try {
    return (S = !0), t()
  } finally {
    S = n
  }
}
const ne = ~(N | D | E)
function x(t, n) {
  t.f = (t.f & ne) | n
}
function dr(t, n) {
  var e = {}
  for (var r in t) n.includes(r) || (e[r] = t[r])
  return e
}
function wr(t) {
  if (!(typeof t != 'object' || !t || t instanceof EventTarget)) {
    if (F in t) wt(t)
    else if (!Array.isArray(t))
      for (let n in t) {
        const e = t[n]
        typeof e == 'object' && e && F in e && wt(e)
      }
  }
}
function wt(t, n = new Set()) {
  if (typeof t == 'object' && t !== null && !(t instanceof EventTarget) && !n.has(t)) {
    n.add(t), t instanceof Date && t.getTime()
    for (let r in t)
      try {
        wt(t[r], n)
      } catch {}
    const e = Lt(t)
    if (
      e !== Object.prototype &&
      e !== Array.prototype &&
      e !== Map.prototype &&
      e !== Set.prototype &&
      e !== Date.prototype
    ) {
      const r = yn(e)
      for (let a in r) {
        const s = r[a].get
        if (s)
          try {
            s.call(t)
          } catch {}
      }
    }
  }
}
export {
  Mt as $,
  B as A,
  We as B,
  d as C,
  Dn as D,
  It as E,
  pe as F,
  ar as G,
  Sn as H,
  re as I,
  fr as J,
  at as K,
  _r as L,
  q as M,
  h as N,
  Hn as O,
  Ht as P,
  Qe as Q,
  kn as R,
  Je as S,
  cr as T,
  Gn as U,
  m as V,
  Jt as W,
  Ot as X,
  vr as Y,
  F as Z,
  mn as _,
  Ye as a,
  Te as a$,
  lr as a0,
  ie as a1,
  qt as a2,
  bt as a3,
  Le as a4,
  Fe as a5,
  Ee as a6,
  H as a7,
  we as a8,
  Fn as a9,
  Z as aA,
  qn as aB,
  Se as aC,
  ke as aD,
  kt as aE,
  Ln as aF,
  Ve as aG,
  Be as aH,
  ue as aI,
  ae as aJ,
  $e as aK,
  He as aL,
  ce as aM,
  Pe as aN,
  De as aO,
  Lt as aP,
  pr as aQ,
  yn as aR,
  hr as aS,
  C as aT,
  $ as aU,
  de as aV,
  oe as aW,
  be as aX,
  Gt as aY,
  Ke as aZ,
  _e as a_,
  ye as aa,
  en as ab,
  Vn as ac,
  j as ad,
  ge as ae,
  xt as af,
  me as ag,
  Tn as ah,
  Ce as ai,
  Et as aj,
  Yt as ak,
  se as al,
  le as am,
  Oe as an,
  Ne as ao,
  Re as ap,
  U as aq,
  st as ar,
  v as as,
  ut as at,
  fe as au,
  Ct as av,
  te as aw,
  ve as ax,
  Me as ay,
  Yn as az,
  ur as b,
  Ae as b0,
  xe as b1,
  Ie as b2,
  Un as b3,
  dr as b4,
  qe as b5,
  nr as c,
  Ue as d,
  I as e,
  er as f,
  M as g,
  wr as h,
  p as i,
  Cn as j,
  pn as k,
  ir as l,
  Ge as m,
  ze as n,
  dn as o,
  je as p,
  he as q,
  Xe as r,
  rr as s,
  or as t,
  sr as u,
  tr as v,
  dt as w,
  Y as x,
  Tt as y,
  Ze as z,
}
