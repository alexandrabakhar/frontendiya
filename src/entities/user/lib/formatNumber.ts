export const formatNumber = (initialNumber: number) => {
  if (initialNumber >= 1000 && initialNumber < 1000000) {
    return (
      (initialNumber / 1000).toFixed(initialNumber % 1000 !== 0 ? 1 : 0) + 'k'
    )
  } else {
    return initialNumber.toString()
  }
}
