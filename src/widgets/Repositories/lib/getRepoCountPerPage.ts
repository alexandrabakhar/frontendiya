export const getRepoCountPerPage = (boxHeight: number) => {
  const repoHeight = 120

  return Math.floor(boxHeight / repoHeight)
}
