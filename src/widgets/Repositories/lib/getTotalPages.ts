export const getTotalPages = (repoCount: number, repoPerPage: number) => {
  return Math.ceil(repoCount / repoPerPage)
}
