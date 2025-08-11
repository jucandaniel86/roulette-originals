export const useString = () => {
  const isString = (_string: string) => {
    const Match1 = _string.match(/\./g) || [],
      Match2 = _string.match(/,/g) || []
    return Match1.length === 0 || Match2.length === 0
      ? Match1.length === 1 || Match2.length === 1 || (Match1.length === 0 && Match2.length === 0)
      : !1
  }
  return {
    isString,
  }
}
