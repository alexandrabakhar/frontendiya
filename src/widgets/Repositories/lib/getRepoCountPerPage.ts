export const getRepoCountPerPage = (boxHeight: number) => {
  const repoHeight = 120
  const gap = 24

  return Math.floor(boxHeight / (repoHeight + gap))
}
