const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const useDate = () => {
  const getTimeRemaining = (endtime: number) => {
    const dt = endtime - new Date().getTime()
    const _days = Math.floor(dt / (1000 * 60 * 60 * 24))
    const _hours = Math.floor((dt / (1000 * 60 * 60)) % 24)
    const _minutes = Math.floor((dt / 1000 / 60) % 60)
    const _seconds = Math.floor((dt / 1000) % 60)

    return {
      Total: dt,
      Days: _days <= 0 ? 0 : _days,
      Hours: _hours <= 0 ? 0 : _hours,
      Minutes: _minutes <= 0 ? 0 : _minutes,
      Seconds: _seconds <= 0 ? 0 : _seconds,
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getTime = (_date?: string | boolean | number) => {
    const t = new Date()
    return {
      Total: t.getTime(),
      Hours: t.getHours() % 12,
      Minutes: t.getMinutes(),
      Seconds: t.getSeconds(),
      Days: t.getDay(),
    }
  }

  const convertUnixToDate = (unix_timestamp: number, seconds: boolean = false) => {
    const dt = new Date(unix_timestamp)
    const minutesDisplay =
      dt.getMinutes().toString().length <= 1 ? `0${dt.getMinutes()}` : dt.getMinutes()
    let secondsDisplay = ''
    if (seconds) {
      secondsDisplay =
        dt.getSeconds().toString().length <= 1 ? `:0${dt.getSeconds()}` : `:${dt.getSeconds()}`
    }
    return `${dt.getDate()} ${monthNames[dt.getMonth()]} ${dt.getFullYear()} ${dt.getHours()}:${minutesDisplay}${secondsDisplay}`
  }

  return { getTimeRemaining, getTime, convertUnixToDate }
}
