const AutoplayAction = () => {
  var k, le, Y, ke, we, Se, Pe, Me
  if (!a) return
  const numberOfBets = --s.numberOfBets,
    CurrentDecimals = R,
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
    AutoplaySessionDetails = s.autoplaySessionDetails.current
  if (
    (AutoplaySessionDetails.nextBet === null && (AutoplaySessionDetails.nextBet = +s.betAmount),
    s.numberOfBets === 0 || F - AutoplaySessionDetails.nextBet < 0)
  )
    return s.setDisableInteraction(!1), s.clearAutoPlayValues(), s.stopBetting()
  s.setNumberOfBets(numberOfBets)
  const b = a.data.wonMultiplier > 1 ? 'increaseByOnWin' : 'increaseByOnLoss'
  if (
    (s[b].state === 'increase'
      ? (AutoplaySessionDetails.nextBet = Math.min(
          fe ?? h,
          h,
          oe(AutoplaySessionDetails.nextBet * (1 + s[b].value / 100), CurrentDecimals),
        ))
      : (AutoplaySessionDetails.nextBet = +s.betAmount),
    (a.data.wonMultiplier > 1 &&
      s.stopOnProfit > 0 &&
      s.stopOnProfit <= AutoplaySessionDetails.netAmount) ||
      (a.data.wonMultiplier <= 1 &&
        s.stopOnLoss > 0 &&
        s.stopOnLoss <= Math.abs(AutoplaySessionDetails.netAmount)))
  )
    return s.setDisableInteraction(!1), s.clearAutoPlayValues(), s.stopBetting()
  PlaceBetAction(AutoplaySessionDetails.nextBet)
}
i.useEffect(() => {
  s.status === 'ready' && s.prevStatus === 'init' && s.setDisableInteraction(!1)
}, [s.status, s.prevStatus]),
  i.useEffect(() => {
    if (!a || m === T) return
    const AutoplaySessionDetails = s.autoplaySessionDetails.current
    setTimeout(() => {
      s.statusRef.current === 'betting' && O === 'auto'
        ? (I(!1),
          C([]),
          P([]),
          (AutoplaySessionDetails.netAmount = oe(
            AutoplaySessionDetails.netAmount +
              oe(a.win - (AutoplaySessionDetails.nextBet ?? s.betAmount), R),
            R,
          )),
          AutoplayAction())
        : O === 'auto' && (s.setDisableInteraction(!1), s.stopBetting(), s.clearAutoPlayValues())
    }, 1e3)
  }, [a, m, T])
