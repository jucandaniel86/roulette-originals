import { MAX_RANDOM_BALL, MIN_RANDOM_BALL } from '@/config/app.config'

export const useNumber = () => {
  const convertToInt = (_number: any, _validation = false) => {
    const o = _number.replace(',', '.').replace(/^0+(?=\d)/, '')
    if ((_validation ? /^-?(\d*\.?\d*)$/ : /^\d*$/).test(o)) {
      if (o === '' || o === '.') return 0
      {
        const p = parseFloat(o)
        if (!isNaN(p)) return _validation ? o : Math.floor(p)
      }
    } else return parseInt(o)
  }

  const generateRandomInt = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min) + min)

  const generateRandomNumbers = (total: number = 10) => {
    const numbers = []
    while (numbers.length < total) {
      const RandomNumber = generateRandomInt(MIN_RANDOM_BALL, MAX_RANDOM_BALL)
      if (numbers.indexOf(RandomNumber) === -1) {
        numbers.push(RandomNumber)
      }
    }
    return numbers
  }

  const convertToK = (cash: number) => {
    let cashE: any = cash
    if (cash >= 1e3) {
      cashE = (cash / 1e3).toFixed(1).replace(/\.0$/, '') + 'K'
    }
    if (cash >= 1e6) {
      cashE = (cash / 1e6).toFixed(1).replace(/\.0$/, '') + 'M'
    }
    if (cash >= 1e9) {
      cashE = (cash / 1e9).toFixed(1).replace(/\.0$/, '') + 'B'
    }
    return cashE
  }

  const radians = (r: number) => (r * Math.PI) / 180

  return {
    radians,
    convertToInt,
    generateRandomInt,
    generateRandomNumbers,
    convertToK,
  }
}
