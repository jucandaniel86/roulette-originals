export const useWheelRotation = () => {
  const positions = [
    0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14,
    31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26,
  ]
  const calcBallRotations = ({ ballRotation, number }: any) => {
    const ballPosition = positions.findIndex((o) => o === number)
    const totalPositions = positions.length
    return (ballPosition / totalPositions) * 360 - ballRotation
  }

  return {
    calcBallRotations,
  }
}
