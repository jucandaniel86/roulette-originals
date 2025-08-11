import { j as t, r as i, t as r, s as et, d as tt, S as st, M as nt } from './index-BkaOEVGW.js'
import { S as at } from './infinite-DqTlBojW.js'
import { S as Ne } from './percentage-CY_Bys6N.js'
import { m as it } from './match-DyCz8JLu.js'
import { s as lt } from './selected-D8h1kXPh.js'
import { w as rt } from './win-X_j1HVa_.js'
import { G as ot, S as ct, B as Ae, a as ut, A as dt, P as mt } from './GameWrapper-CJe-t3YE.js'
import { B as ft } from './BetButton-Bv-0h7w8.js'
import { G as pt } from './GameResult-BVY0rwvU.js'
import { L as y, I as w, a as re } from './LabelWrapper-Fu7cROeV.js'
import { g as ht, O as bt } from './OddsTable-MkCN57OT.js'
import { S as xt } from './Select-Bn2Q0h4R.js'
import { T as Bt } from './Tabs-s1nvgXtL.js'
import { g as vt, b as gt, a as Z, S as Fe, c as Ot, u as Tt } from './useConnector-hGUUV_WK.js'
import { u as It } from './usePrevious-9g4wALNj.js'
import { r as oe } from './math-DkEfAmwS.js'
import { T as ce } from './Keno-DT35olCW.js'
import './index-BTWbeoXe.js'
/* empty css              */
import './useCssVariables-Ba7gGP9f.js'
import './validation-Bf662osL.js'
import './string-aT7bg8eq.js'
const yt = '' + new URL('revealed-C1PxcmBa.mp3', import.meta.url).href,
  jt = '' + new URL('gem-6rGjxKoc.svg', import.meta.url).href,
  Ct = ({
    selectedTiles: x,
    matchedTiles: B,
    revealedTiles: v,
    multipliers: e,
    setHoveredTileData: c,
    oddsTableArrowPositionRef: g,
    multipliersProbabilities: V,
    betAmount: M,
    isMobile: S,
    freeBet: j,
  }) => {
    const A = []
    if (e && x > 0) {
      const O = e[x].findIndex((p) => p > 0)
      for (let p = 0; p < x + 1; p++) {
        let a = 'negative',
          N
        p >= O && (a = 'positive'), p === B && v > 0 && ((a += ' selected'), (N = 'selected'))
        const m = e[x][p],
          n = V[x][p] * 100,
          T = j ? m * M : m * M - M
        A.push(
          t.jsxs(
            'div',
            {
              className: `hit ${a}`,
              onMouseOver: S
                ? void 0
                : (F) => {
                    c({
                      multiplier: m,
                      winChance: n,
                      profitOnWin: T,
                      position: p,
                    }),
                      (g.current = ht(F))
                  },
              onMouseOut: S
                ? void 0
                : () => {
                    c(void 0), (g.current = void 0)
                  },
              children: [
                t.jsxs('span', {
                  children: [p, '×'],
                }),
                t.jsx('img', {
                  className: N,
                  src: jt,
                  alt: 'gem',
                }),
              ],
            },
            `hit_${p}`,
          ),
        )
      }
    }
    return A
  },
  Rt = ({ pastResultsLimit: x, sounds: B }) => {
    var ge, Oe, Te, Ie, ye, je, Ce, Re
    const v = vt(),
      {
        sessionData: e,
        connector: c,
        handleGameInfo: g,
        handleExit: V,
      } = gt('keno', {
        callbacks: {
          balanceChanged: (l) => {
            Be.current === 'ready' && $(l)
          },
          popupOpened: () => {
            s.stopBetting(), s.setDisableInteraction(!1), s.clearAutoPlayValues()
          },
        },
      }),
      [M] = Z(B.winSoundFx, {
        volume: v,
      }),
      [S] = Z(B.revealedSoundFx, {
        volume: v,
      }),
      [j] = Z(B.matchSoundFx, {
        volume: v,
      }),
      [A] = Z(B.selectedSoundFx, {
        volume: v,
      }),
      [GameMode, setGameMode] = i.useState('manual'),
      [betData, setBetData] = i.useState(),
      [UnknowSymbol, setUnknowSymbol] = i.useState(''),
      T = It(UnknowSymbol),
      [F, $] = i.useState(0),
      [ee, te] = i.useState(),
      [selectedNumber, setSelectedNumber] = i.useState([]),
      [se, P] = i.useState([]),
      [H, C] = i.useState([]),
      [_, W] = i.useState(!0),
      [K, I] = i.useState(!1),
      [ue, Le] = i.useState([]),
      [We, Ge] = i.useState(0),
      [G, Ee] = i.useState('medium'),
      [Ve, $e] = i.useState(null),
      de = i.useRef(new Map()),
      De = i.useRef(),
      z = i.useRef(''),
      D = i.useRef(),
      me = i.useRef([]),
      E = i.useRef([]),
      ne = e == null ? void 0 : e.authenticate.currency,
      R = (e == null ? void 0 : e.authenticate.currencyDecimals) ?? 2,
      Ue = c == null ? void 0 : c.formatCurrency(F, ne),
      X =
        (Oe = (ge = e == null ? void 0 : e.info) == null ? void 0 : ge.betLimits) == null
          ? void 0
          : Oe.maxExposure,
      ae = e == null ? void 0 : e.info.config.numberOfTiles,
      q = e == null ? void 0 : e.info.config.numberOfGems,
      J = e == null ? void 0 : e.info.config.multipliers,
      fe =
        selectedNumber.length > 0 && X
          ? c.floor(X / J[G][selectedNumber.length][selectedNumber.length], R)
          : void 0,
      He = e == null ? void 0 : e.info.config.multipliersProbabilities,
      pe = ['instant-bet', 'animations', 'max-bet']
    c && c.showLobbyButton() && pe.push('exit')
    const { settings: _e } = i.useContext(Fe),
      [he, Ke] = i.useState(_e),
      { instantBet: be, animations: ie } = he,
      ze = [
        {
          content: r('manual'),
          className: 'manual',
          testid: 'manual',
          handleOnClick: () => setGameMode('manual'),
          isActive: GameMode === 'manual',
        },
        {
          content: r('auto'),
          className: 'auto',
          testid: 'auto',
          handleOnClick: () => setGameMode('auto'),
          isActive: GameMode === 'auto',
        },
      ],
      Xe = [
        {
          value: 'classic',
          label: r('classic'),
        },
        {
          value: 'low',
          label: r('low'),
        },
        {
          value: 'medium',
          label: r('medium'),
        },
        {
          value: 'high',
          label: r('high'),
        },
      ],
      PlaceBetAction = async (l) => {
        I(!1), s.setDisableInteraction(!0), P([]), C([])
        const {
          complete: u,
          wager: d,
          roundId: h,
          balance: o,
        } = await c.play(
          'main',
          l,
          {
            pickedNumbers: selectedNumber,
            risk: G,
          },
          void 0,
          !0,
          !0,
        )
        ;(z.current = h), setBetData(d), (D.current = u), $(o)
      },
      s = Ot({
        connector: c,
        placeBet: PlaceBetAction,
        sessionData: e,
        balance: F,
        setBalance: $,
        validationErrorsRef: de,
        calculatedMaxBet: fe,
        currency: ne,
        refreshCampaign: We,
        handleFreeBetsLimitReached: () => {
          GameMode === 'auto' &&
            (s.stopBetting(), s.setDisableInteraction(!1), s.clearAutoPlayValues()),
            Ge((l) => l + 1)
        },
      }),
      Be = i.useRef()
    i.useEffect(() => {
      Be.current = s.status
    }, [s.status])
    const qe = (l) => {
      const u = selectedNumber.includes(l)
      if (!(selectedNumber.length >= q && !u)) {
        if ((P([]), C([]), I(!1), u)) {
          setSelectedNumber((d) => d.filter((h) => h !== l))
          return
        }
        A(), setSelectedNumber((d) => [...d, l])
      }
    }
    i.useEffect(() => {
      const l =
        selectedNumber.length > 0 && X
          ? c.floor(X / J[G][selectedNumber.length][selectedNumber.length], R)
          : void 0
      s.validateBetAmount(+s.betAmount, l)
    }, [selectedNumber, G])
    const Je = (l) => {
        Ee(l.target.value)
      },
      Qe = () => {
        const l = new Array(ae).fill(0).map((o, b) => b)
        P([]), C([]), I(!1)
        let u
        selectedNumber.length === 10
          ? ((E.current = l), (u = 10))
          : ((E.current = l.filter((o) => !selectedNumber.includes(o))),
            (u = 10 - selectedNumber.length)),
          s.setDisableInteraction(!0)
        let d = 0
        const h = () => {
          setTimeout(
            () => {
              const o = Math.floor(Math.random() * E.current.length),
                b = E.current[o]
              if (
                (setSelectedNumber(u === 10 && d === 0 ? [b] : (k) => [...k, b]),
                A(),
                (E.current = E.current.filter((k, le, Y) => k !== Y[o])),
                d++,
                d >= u)
              ) {
                s.setDisableInteraction(!1), (E.current = [])
                return
              }
              h()
            },
            d === 0 ? 0 : 150,
          )
        }
        h()
      },
      Ye = () => {
        P([]), C([]), setSelectedNumber([]), I(!1)
      },
      ve = () => {
        const l = s.autoplaySessionDetails.current.nextBet,
          u = l !== null ? +l : +s.betAmount,
          d = betData == null ? void 0 : betData.data.gems,
          h = betData == null ? void 0 : betData.data.gemsIntersection,
          o = d.filter((b) => !h.includes(b))
        Le(
          [
            {
              id: crypto.randomUUID(),
              result: (betData == null ? void 0 : betData.data.wonMultiplier) > 1 ? 'win' : 'lose',
              value: `${betData == null ? void 0 : betData.data.wonMultiplier.toFixed(2)}×`,
              multiplier: betData == null ? void 0 : betData.data.wonMultiplier.toFixed(2),
              betAmount: u.toFixed(R),
              payout:
                betData != null && betData.win && betData.win > 0 ? betData.win.toFixed(2) : '0.00',
              data: {
                selectedTiles: selectedNumber,
                revealedTiles: o,
                matchedTiles: h,
                numberOfGems: q,
                numberOfTiles: ae,
                risk: G,
              },
              roundId: z.current,
              betDate: new Date(),
              nickname: e == null ? void 0 : e.authenticate.nickname,
            },
            ...ue,
          ].slice(0, x),
        )
      }
    i.useEffect(() => {
      if (!betData) return
      let l = 0
      if (be) {
        const u = betData.data.gems,
          d = betData.data.gemsIntersection,
          h = u.filter((o) => !d.includes(o))
        P(d),
          C(h),
          setTimeout(() => {
            GameMode === 'manual' &&
              (s.setDisableInteraction(!1), s.stopBetting(), s.clearAutoPlayValues()),
              s.freeBetsHandler(),
              setUnknowSymbol(z.current),
              s.setBalanceFromComplete(D.current),
              betData.data.wonMultiplier > 1 && (I(!0), M()),
              ve()
          }, 150)
      } else {
        const u = () => {
          const d = setTimeout(
            () => {
              const h = betData.data.gems,
                o = betData.data.gemsIntersection,
                b = h[l]
              if (
                (o.includes(b) ? (P((k) => [...k, b]), j()) : (C((k) => [...k, b]), S()),
                (l += 1),
                l >= q)
              ) {
                setTimeout(() => {
                  GameMode === 'manual' &&
                    (s.setDisableInteraction(!1), s.stopBetting(), s.clearAutoPlayValues()),
                    s.freeBetsHandler(),
                    setUnknowSymbol(z.current),
                    s.setBalanceFromComplete(D.current),
                    betData.data.wonMultiplier > 1 && (I(!0), M()),
                    ve()
                }, 150)
                return
              }
              u()
            },
            l === 0 ? 0 : 150,
          )
          me.current.push(d)
        }
        u()
      }
      return () => me.current.forEach((u) => clearTimeout(u))
    }, [betData]),
      i.useEffect(() => {
        ie ? tt('--keno-animation-duration') : et('--keno-animation-duration', '0s')
      }, [ie]),
      i.useEffect(() => {
        selectedNumber.length === 0 ? W(!0) : W(!1)
      }, [selectedNumber])
    const AutoplayAction = () => {
      var k, le, Y, ke, we, Se, Pe, Me
      if (!betData) return
      const NumberOfBets = --s.numberOfBets,
        u = R,
        d =
          (ke =
            (Y =
              (le = (k = e == null ? void 0 : e.info) == null ? void 0 : k.bets) == null
                ? void 0
                : le.main) == null
              ? void 0
              : Y.available) == null
            ? void 0
            : ke.max,
        h =
          ((Se = (we = e == null ? void 0 : e.info) == null ? void 0 : we.betLimits) == null
            ? void 0
            : Se.maxBet) !== void 0
            ? Math.min(
                (Me = (Pe = e == null ? void 0 : e.info) == null ? void 0 : Pe.betLimits) == null
                  ? void 0
                  : Me.maxBet,
                d,
              )
            : d,
        autoplaySessionDetails = s.autoplaySessionDetails.current
      if (
        (autoplaySessionDetails.nextBet === null && (autoplaySessionDetails.nextBet = +s.betAmount),
        s.numberOfBets === 0 || F - autoplaySessionDetails.nextBet < 0)
      )
        return s.setDisableInteraction(!1), s.clearAutoPlayValues(), s.stopBetting()
      s.setNumberOfBets(NumberOfBets)
      const b = betData.data.wonMultiplier > 1 ? 'increaseByOnWin' : 'increaseByOnLoss'
      if (
        (s[b].state === 'increase'
          ? (autoplaySessionDetails.nextBet = Math.min(
              fe ?? h,
              h,
              oe(autoplaySessionDetails.nextBet * (1 + s[b].value / 100), u),
            ))
          : (autoplaySessionDetails.nextBet = +s.betAmount),
        (betData.data.wonMultiplier > 1 &&
          s.stopOnProfit > 0 &&
          s.stopOnProfit <= autoplaySessionDetails.netAmount) ||
          (betData.data.wonMultiplier <= 1 &&
            s.stopOnLoss > 0 &&
            s.stopOnLoss <= Math.abs(autoplaySessionDetails.netAmount)))
      )
        return s.setDisableInteraction(!1), s.clearAutoPlayValues(), s.stopBetting()
      PlaceBetAction(autoplaySessionDetails.nextBet)
    }
    i.useEffect(() => {
      s.status === 'ready' && s.prevStatus === 'init' && s.setDisableInteraction(!1)
    }, [s.status, s.prevStatus]),
      i.useEffect(() => {
        if (!betData || UnknowSymbol === T) return
        const AutoplaySessionDetails = s.autoplaySessionDetails.current
        setTimeout(() => {
          s.statusRef.current === 'betting' && GameMode === 'auto'
            ? (I(!1),
              C([]),
              P([]),
              (AutoplaySessionDetails.netAmount = oe(
                AutoplaySessionDetails.netAmount +
                  oe(betData.win - (AutoplaySessionDetails.nextBet ?? s.betAmount), R),
                R,
              )),
              AutoplayAction())
            : GameMode === 'auto' &&
              (s.setDisableInteraction(!1), s.stopBetting(), s.clearAutoPlayValues())
        }, 1e3)
      }, [betData, UnknowSymbol, T])
    const U =
        ((ye =
          (Ie = (Te = e == null ? void 0 : e.info) == null ? void 0 : Te.bets) == null
            ? void 0
            : Ie.main) == null
          ? void 0
          : ye.available) || {},
      Q = ((je = e == null ? void 0 : e.info) == null ? void 0 : je.betLimits) || {}
    return {
      sideBar: s,
      currency: ne,
      balanceFormatted: Ue,
      handleGameInfo: g,
      handleExit: V,
      currencyDecimals: R,
      bet: {
        min: Q.minBet !== void 0 ? Math.max(Q.minBet, U.min) : U.min,
        max: Q.maxBet !== void 0 ? Math.min(Q.maxBet, U.max) : U.max,
        step: U.step,
        value: s.formatNonEditNumber(
          'betAmount',
          s.autoplaySessionDetails.current.nextBet ?? s.betAmount,
          R,
        ),
      },
      activePlayMode: GameMode,
      wager: betData,
      enabledSettings: pe,
      setSettings: Ke,
      settings: he,
      tabs: ze,
      connector: c,
      data: {
        numberOfTiles: ae,
        selectedTiles: selectedNumber,
        numberOfGems: q,
        matchedTiles: se,
        revealedTiles: H,
        multipliers: J ? J[G] : void 0,
        multipliersProbabilities: He,
        hoveredTileData: ee,
        oddsTableArrowPositionRef: De,
        risk: G,
        riskSelectOptions: Xe,
        disableBetButton: _,
        finalWin:
          ((Ce = D.current) == null ? void 0 : Ce.finalWin) !== void 0 &&
          c.floor((Re = D.current) == null ? void 0 : Re.finalWin, R).toFixed(R),
        showGameResult: K,
      },
      handlers: {
        handleTileOnClick: qe,
        setHoveredTileData: te,
        handleOnChangeRisk: Je,
        handleAutoPickOnClick: Qe,
        handleClearTableOnClick: Ye,
      },
      refs: {
        validationErrorsRef: de,
      },
      wagerData: {
        wonMultiplier:
          c == null
            ? void 0
            : c.floor((betData == null ? void 0 : betData.data.wonMultiplier) ?? 0, 2).toFixed(2),
      },
      pastResultsData: {
        results: [...ue].slice(0, x),
        currentResult: Ve,
        setCurrentResult: $e,
      },
      instantBet: be,
      animations: ie,
    }
  },
  kt = ({ multipliers: x, selectedTilesNumber: B }) => {
    const v = []
    return (
      x &&
        B > 0 &&
        x[B].forEach((e, c) => {
          let g = `${e.toFixed(2).replace('.', ',')}×`
          e >= 1e3
            ? (g = `${e.toFixed(0).replace('.', ',')}×`)
            : e >= 100 && (g = `${e.toFixed(1).replace('.', ',')}×`),
            v.push(
              t.jsx(
                'div',
                {
                  className: 'payout',
                  children: t.jsx('span', {
                    children: g,
                  }),
                },
                `payout_${c}`,
              ),
            )
        }),
      v
    )
  },
  Yt = () => {
    var H, C, _
    const { isMobile: B } = Tt(),
      v = B ? 4 : 6,
      {
        sideBar: SidebarActions,
        balanceFormatted: c,
        currency: g,
        handleGameInfo: V,
        handleExit: M,
        bet: S,
        activePlayMode: j,
        enabledSettings: A,
        setSettings: O,
        settings: p,
        tabs: a,
        connector: N,
        pastResultsData: m,
        data: n,
        handlers: T,
        currencyDecimals: F,
        wagerData: $,
        refs: ee,
      } = Rt({
        pastResultsLimit: v,
        sounds: {
          winSoundFx: rt,
          matchSoundFx: it,
          revealedSoundFx: yt,
          selectedSoundFx: lt,
        },
      }),
      te = i.useMemo(
        () =>
          t.jsx(ce, {
            matchedTiles: n.matchedTiles,
            revealedTiles: n.revealedTiles,
            handleOnClick: T.handleTileOnClick,
            numberOfGems: n.numberOfGems,
            numberOfTiles: n.numberOfTiles,
            selectedTiles: n.selectedTiles,
            disabled: SidebarActions.disableInteraction,
          }),
        [
          n.matchedTiles,
          n.revealedTiles,
          T.handleTileOnClick,
          n.numberOfGems,
          n.numberOfTiles,
          n.selectedTiles,
          SidebarActions.disableInteraction,
        ],
      ),
      f = i.useMemo(() => {
        var W
        return ((W = m.currentResult) == null ? void 0 : W.data) === void 0
          ? t.jsx(t.Fragment, {})
          : t.jsxs('div', {
              className: 'preview-wrap',
              children: [
                t.jsx('div', {
                  className: 'wrap',
                  children: t.jsx('div', {
                    className: 'keno-tiles-wrap',
                    children: t.jsx(ce, {
                      matchedTiles: m.currentResult.data.matchedTiles,
                      revealedTiles: m.currentResult.data.revealedTiles,
                      numberOfGems: m.currentResult.data.numberOfGems,
                      numberOfTiles: m.currentResult.data.numberOfTiles,
                      selectedTiles: m.currentResult.data.selectedTiles,
                      disabled: !0,
                    }),
                  }),
                }),
                t.jsx('div', {
                  className: 'modal-wrap',
                  style: {
                    marginTop: '1rem',
                  },
                  children: t.jsxs(y, {
                    children: [
                      t.jsx('span', {
                        children: r('risk'),
                      }),
                      t.jsx(w, {
                        type: 'text',
                        readOnly: !0,
                        defaultValue: r(m.currentResult.data.risk),
                      }),
                    ],
                  }),
                }),
              ],
            })
      }, [m.currentResult]),
      L = i.useCallback(
        (W) => {
          const { fairnessProof: K } = W,
            I = K.randomizations[K.randomizations.length - 1].gameEvent.gems
          return t.jsx('div', {
            className: 'keno-tiles-wrap',
            children: t.jsx(ce, {
              matchedTiles: I,
              revealedTiles: I,
              numberOfGems: n.numberOfGems,
              numberOfTiles: n.numberOfTiles,
              selectedTiles: I,
              disabled: !0,
            }),
          })
        },
        [n.numberOfGems, n.numberOfTiles],
      ),
      se = i.useMemo(
        () =>
          t.jsx(kt, {
            selectedTilesNumber: n.selectedTiles.length,
            multipliers: n.multipliers,
          }),
        [n.selectedTiles, n.multipliers],
      ),
      P = i.useMemo(
        () =>
          t.jsx(Ct, {
            selectedTiles: n.selectedTiles.length,
            matchedTiles: n.matchedTiles.length,
            multipliers: n.multipliers,
            revealedTiles: n.revealedTiles.length,
            setHoveredTileData: T.setHoveredTileData,
            oddsTableArrowPositionRef: n.oddsTableArrowPositionRef,
            multipliersProbabilities: n.multipliersProbabilities,
            betAmount: SidebarActions.betAmount,
            isMobile: B,
            freeBet: SidebarActions.freeBet,
          }),
        [
          n.selectedTiles,
          n.revealedTiles,
          n.matchedTiles,
          n.multipliers,
          n.multipliersProbabilities,
          SidebarActions.betAmount,
          SidebarActions.freeBet,
        ],
      )
    return SidebarActions.status === 'init'
      ? t.jsx(st, {})
      : t.jsx(Fe.Provider, {
          value: {
            settings: p,
            setSettings: O,
          },
          children: t.jsxs(ot, {
            settings: {
              enabled: A,
              handleGameInfoOnClick: V,
              handleExitOnClick: M,
            },
            game: 'keno',
            fairness: {
              connector: N,
              preview: L,
            },
            freeBets: {
              show: SidebarActions.showFreeBetsModal,
              freeBetsConfig: SidebarActions.campaignInfo,
              handleOpt: SidebarActions.handleOpt,
              type: SidebarActions.freeBetsModalType,
              handleAcknowledge: SidebarActions.handleAcknowledgeFreeBets,
            },
            children: [
              t.jsxs(ct, {
                children: [
                  t.jsx(Bt, {
                    tabs: a,
                    className: 'play-mode-order',
                    disabled: SidebarActions.disableInteraction,
                  }),
                  t.jsxs(y, {
                    ref: SidebarActions.betAmountLabelWrapperRef,
                    'data-testid': 'betAmount',
                    children: [
                      t.jsx('span', {
                        children: r('betAmount'),
                      }),
                      t.jsxs(re, {
                        children: [
                          t.jsx(w, {
                            ref: SidebarActions.betInputWrapperRef,
                            type: 'number',
                            step: S.step,
                            value: S.value,
                            onChange: SidebarActions.handleBetChange,
                            onBlur: SidebarActions.handleInputBlur,
                            disabled: SidebarActions.disableInteraction || SidebarActions.freeBet,
                            onMouseOver: () => {
                              SidebarActions.showInputTooltip(
                                SidebarActions.betAmountLabelWrapperRef.current,
                                'bet',
                              )
                            },
                            onMouseOut: () => SidebarActions.hideInputTooltip(500),
                            rightIcon: g.toUpperCase(),
                          }),
                          t.jsxs('div', {
                            className: 'input-buttons-wrap shadow-none',
                            children: [
                              t.jsx('button', {
                                className: 'default transition',
                                onClick: SidebarActions.handleHalfBetClick,
                                disabled:
                                  SidebarActions.disableInteraction || SidebarActions.freeBet,
                                children: '½',
                              }),
                              t.jsx('button', {
                                className: 'default transition',
                                onClick: SidebarActions.handleDoubleBetClick,
                                disabled:
                                  SidebarActions.disableInteraction || SidebarActions.freeBet,
                                children: '2×',
                              }),
                              p.maxBet &&
                                t.jsx('button', {
                                  className: 'default transition',
                                  onClick: SidebarActions.handleMaxBetClick,
                                  disabled:
                                    SidebarActions.disableInteraction || SidebarActions.freeBet,
                                  children: r('betMax'),
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  t.jsxs(y, {
                    children: [
                      t.jsx('span', {
                        children: r('risk'),
                      }),
                      t.jsx(xt, {
                        disabled: SidebarActions.disableInteraction,
                        value: n.risk,
                        onChange: T.handleOnChangeRisk,
                        options: n.riskSelectOptions,
                      }),
                    ],
                  }),
                  j === 'manual' &&
                    t.jsxs(t.Fragment, {
                      children: [
                        t.jsx(Ae, {
                          className: 'classic transition',
                          'data-testid': 'autoPickButton',
                          onClick: T.handleAutoPickOnClick,
                          disabled: SidebarActions.disableInteraction,
                          children: r('autoPick'),
                        }),
                        t.jsx(Ae, {
                          className: 'classic transition',
                          'data-testid': 'clearTableButton',
                          onClick: T.handleClearTableOnClick,
                          disabled: SidebarActions.disableInteraction,
                          children: r('clearTable'),
                        }),
                      ],
                    }),
                  j === 'auto' &&
                    t.jsxs(t.Fragment, {
                      children: [
                        t.jsxs(y, {
                          'data-testid': 'numberOfBets',
                          ref: SidebarActions.numberOfBetsLabelRef,
                          children: [
                            r('numberOfBets'),
                            t.jsx(w, {
                              type: 'number',
                              min: 0,
                              max: nt,
                              value: SidebarActions.numberOfBets,
                              onChange: SidebarActions.handleNumberOfBetsChange,
                              disabled: SidebarActions.disableInteraction,
                              rightIcon: SidebarActions.numberOfBets === 0 ? t.jsx(at, {}) : null,
                              onMouseOver: () => {
                                SidebarActions.showInputTooltip(
                                  SidebarActions.numberOfBetsLabelRef.current,
                                  'numberOfBets',
                                )
                              },
                              onMouseOut: () => SidebarActions.hideInputTooltip(500),
                            }),
                          ],
                        }),
                        t.jsxs(y, {
                          'data-testid': 'onWin',
                          children: [
                            t.jsx('span', {
                              children: r('onWin'),
                            }),
                            t.jsxs(re, {
                              children: [
                                t.jsxs('div', {
                                  className: 'switch-input-buttons-wrap shadow-none',
                                  children: [
                                    t.jsx('button', {
                                      className: `reset transition ${SidebarActions.increaseByOnWin.state === 'reset' ? 'active' : ''}`,
                                      disabled:
                                        SidebarActions.disableInteraction || SidebarActions.freeBet,
                                      onClick: () =>
                                        SidebarActions.handleIncreaseByWinClick('reset'),
                                      children: r('reset'),
                                    }),
                                    t.jsxs('button', {
                                      className: `increase transition ${SidebarActions.increaseByOnWin.state === 'increase' ? 'active' : ''}`,
                                      disabled:
                                        SidebarActions.disableInteraction || SidebarActions.freeBet,
                                      onClick: () =>
                                        SidebarActions.handleIncreaseByWinClick('increase'),
                                      children: [r('increaseBy'), ':'],
                                    }),
                                  ],
                                }),
                                t.jsx(w, {
                                  className: 'with-left-buttons',
                                  type: 'number',
                                  min: 0,
                                  value:
                                    SidebarActions.increaseByOnWin.state === 'reset'
                                      ? 0
                                      : SidebarActions.increaseByOnWin.value,
                                  onChange: SidebarActions.handleIncreaseByWinChange,
                                  onBlur: SidebarActions.handleInputBlur,
                                  disabled:
                                    SidebarActions.increaseByOnWin.state === 'reset' ||
                                    SidebarActions.disableInteraction ||
                                    SidebarActions.freeBet,
                                  rightIcon: t.jsx(Ne, {}),
                                }),
                              ],
                            }),
                          ],
                        }),
                        t.jsxs(y, {
                          'data-testid': 'onLoss',
                          children: [
                            t.jsx('span', {
                              children: r('onLoss'),
                            }),
                            t.jsxs(re, {
                              children: [
                                t.jsxs('div', {
                                  className: 'switch-input-buttons-wrap shadow-none',
                                  children: [
                                    t.jsx('button', {
                                      className: `reset transition ${SidebarActions.increaseByOnLoss.state === 'reset' ? 'active' : ''}`,
                                      disabled:
                                        SidebarActions.disableInteraction || SidebarActions.freeBet,
                                      onClick: () =>
                                        SidebarActions.handleIncreaseByLossClick('reset'),
                                      children: r('reset'),
                                    }),
                                    t.jsxs('button', {
                                      className: `increase transition ${SidebarActions.increaseByOnLoss.state === 'increase' ? 'active' : ''}`,
                                      disabled:
                                        SidebarActions.disableInteraction || SidebarActions.freeBet,
                                      onClick: () =>
                                        SidebarActions.handleIncreaseByLossClick('increase'),
                                      children: [r('increaseBy'), ':'],
                                    }),
                                  ],
                                }),
                                t.jsx(w, {
                                  className: 'with-left-buttons',
                                  type: 'number',
                                  min: 0,
                                  value:
                                    SidebarActions.increaseByOnLoss.state === 'reset'
                                      ? 0
                                      : SidebarActions.increaseByOnLoss.value,
                                  onChange: SidebarActions.handleIncreaseByLossChange,
                                  onBlur: SidebarActions.handleInputBlur,
                                  disabled:
                                    SidebarActions.increaseByOnLoss.state === 'reset' ||
                                    SidebarActions.disableInteraction ||
                                    SidebarActions.freeBet,
                                  rightIcon: t.jsx(Ne, {}),
                                }),
                              ],
                            }),
                          ],
                        }),
                        t.jsxs(y, {
                          'data-testid': 'stopOnProfit',
                          ref: SidebarActions.stopOnProfitRef,
                          children: [
                            r('stopOnProfit'),
                            t.jsx(w, {
                              type: 'number',
                              min: 0,
                              step: S.step,
                              value: SidebarActions.stopOnProfit,
                              onChange: SidebarActions.handleStopOnProfitChange,
                              disabled: SidebarActions.disableInteraction || SidebarActions.freeBet,
                              onBlur: SidebarActions.handleInputBlur,
                              onMouseOver: () => {
                                SidebarActions.showInputTooltip(
                                  SidebarActions.stopOnProfitRef.current,
                                  'stopOnProfit',
                                )
                              },
                              onMouseOut: () => SidebarActions.hideInputTooltip(500),
                            }),
                          ],
                        }),
                        t.jsxs(y, {
                          'data-testid': 'stopOnLoss',
                          ref: SidebarActions.stopOnLossRef,
                          children: [
                            r('stopOnLoss'),
                            t.jsx(w, {
                              type: 'number',
                              min: 0,
                              step: S.step,
                              value: SidebarActions.stopOnLoss,
                              onChange: SidebarActions.handleStopOnLossChange,
                              onBlur: SidebarActions.handleInputBlur,
                              disabled: SidebarActions.disableInteraction || SidebarActions.freeBet,
                              onMouseOver: () => {
                                SidebarActions.showInputTooltip(
                                  SidebarActions.stopOnLossRef.current,
                                  'stopOnLoss',
                                )
                              },
                              onMouseOut: () => SidebarActions.hideInputTooltip(500),
                            }),
                          ],
                        }),
                      ],
                    }),
                  t.jsx(ft, {
                    activePlayMode: j,
                    disabled:
                      SidebarActions.disableBetButton ||
                      n.disableBetButton ||
                      (SidebarActions.disableInteraction && j === 'manual') ||
                      (SidebarActions.disableInteraction &&
                        j === 'auto' &&
                        SidebarActions.status === 'ready') ||
                      SidebarActions.freeBetsLimitReachedRef.current,
                    onClick: SidebarActions.handleBetButtonClick,
                    status: SidebarActions.status,
                    icon: t.jsx('div', {
                      className: 'keno-wobble',
                    }),
                    finishingBet:
                      SidebarActions.disableInteraction &&
                      j === 'auto' &&
                      SidebarActions.status === 'ready',
                    campaignInfo: SidebarActions.freeBet ? SidebarActions.campaignInfo : void 0,
                  }),
                ],
              }),
              t.jsxs(ut, {
                children: [
                  t.jsx(dt, {
                    balance: c,
                    hideBalance: SidebarActions.hideBalance,
                    results: m.results,
                    currentResult: m.currentResult,
                    setCurrentResult: m.setCurrentResult,
                    limit: v,
                    connector: N,
                    preview: f,
                    game: 'keno',
                  }),
                  t.jsxs('div', {
                    className: 'keno-main-wrapper',
                    children: [
                      t.jsxs('div', {
                        className: 'content',
                        'data-testid': 'kenoContent',
                        children: [
                          te,
                          n.showGameResult &&
                            t.jsx(pt, {
                              header: `${$.wonMultiplier}×`,
                              footer: N.formatCurrency(+n.finalWin, g),
                            }),
                        ],
                      }),
                      t.jsxs('div', {
                        className: 'footer',
                        children: [
                          t.jsx('div', {
                            className: 'payouts',
                            style: {
                              '--column-count':
                                n.selectedTiles.length === 0 ? 0 : n.selectedTiles.length + 1,
                            },
                            children: se,
                          }),
                          t.jsxs('div', {
                            className: 'hit-odds',
                            style: {
                              '--column-count':
                                n.selectedTiles.length === 0 ? 0 : n.selectedTiles.length + 1,
                            },
                            children: [
                              n.selectedTiles.length === 0
                                ? t.jsx('div', {
                                    className: 'explanation',
                                    children: r('selectNumbersToPlay'),
                                  })
                                : P,
                              t.jsxs(bt, {
                                arrowPosition: n.oddsTableArrowPositionRef.current,
                                children: [
                                  t.jsxs(y, {
                                    children: [
                                      r('payout'),
                                      t.jsx(w, {
                                        type: 'text',
                                        readOnly: !0,
                                        defaultValue:
                                          (H = n.hoveredTileData) == null ? void 0 : H.multiplier,
                                      }),
                                    ],
                                  }),
                                  t.jsxs(y, {
                                    children: [
                                      r('profitOnWin'),
                                      t.jsx(w, {
                                        type: 'text',
                                        readOnly: !0,
                                        defaultValue:
                                          (C = n.hoveredTileData) == null
                                            ? void 0
                                            : C.profitOnWin.toFixed(F),
                                        rightIcon: g.toUpperCase(),
                                      }),
                                    ],
                                  }),
                                  t.jsxs(y, {
                                    children: [
                                      r('winChance'),
                                      t.jsx(w, {
                                        type: 'text',
                                        readOnly: !0,
                                        defaultValue:
                                          (_ = n.hoveredTileData) == null
                                            ? void 0
                                            : _.winChance.toFixed(9),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              t.jsx(mt, {
                placement: 'top',
                show: SidebarActions.tooltip.state.show,
                target: SidebarActions.currentTooltipTargetRef.current,
                tooltipRef: SidebarActions.tooltipRef,
                children: t.jsx('div', {
                  className: 'tooltip-content-wrapper',
                  children: ee.validationErrorsRef.current.get(SidebarActions.inputNameRef.current),
                }),
              }),
            ],
          }),
        })
  }
export { Yt as default }
