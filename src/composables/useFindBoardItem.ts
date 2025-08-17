import { BOARD_CONFIG, BoardConfigButtonEnum } from '@/config/board.config'

export const useFindBoardItem = () => {
  const find = (label: string | number) => {
    const { row1, row2, row3, row4, row5 } = BOARD_CONFIG
    const numbers = [
      ...row1.filter((row) => row.type === BoardConfigButtonEnum.NUMBER),
      ...row2.filter((row) => row.type === BoardConfigButtonEnum.NUMBER),
      ...row3.filter((row) => row.type === BoardConfigButtonEnum.NUMBER),
      ...row4.filter((row) => row.type === BoardConfigButtonEnum.NUMBER),
      ...row5.filter((row) => row.type === BoardConfigButtonEnum.NUMBER),
    ]

    return numbers.find((number) => number.label === label)
  }

  return {
    find,
  }
}
