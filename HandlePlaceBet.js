const Ze = () => {
  var k, le, Y, ke, we, Se, Pe, Me
  if (!a) return
  const l = --s.numberOfBets,
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
    o = s.autoplaySessionDetails.current
  if ((o.nextBet === null && (o.nextBet = +s.betAmount), s.numberOfBets === 0 || F - o.nextBet < 0))
    return s.setDisableInteraction(!1), s.clearAutoPlayValues(), s.stopBetting()
  s.setNumberOfBets(l)
  const b = a.data.wonMultiplier > 1 ? 'increaseByOnWin' : 'increaseByOnLoss'
  if (
    (s[b].state === 'increase'
      ? (o.nextBet = Math.min(fe ?? h, h, oe(o.nextBet * (1 + s[b].value / 100), u)))
      : (o.nextBet = +s.betAmount),
    (a.data.wonMultiplier > 1 && s.stopOnProfit > 0 && s.stopOnProfit <= o.netAmount) ||
      (a.data.wonMultiplier <= 1 && s.stopOnLoss > 0 && s.stopOnLoss <= Math.abs(o.netAmount)))
  )
    return s.setDisableInteraction(!1), s.clearAutoPlayValues(), s.stopBetting()
  PlaceBetAction(o.nextBet)
}
