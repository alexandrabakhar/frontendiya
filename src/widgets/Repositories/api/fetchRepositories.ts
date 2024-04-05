import { RepositoryData } from '@/entities/user'
import { baseQuery } from '@/shared/api'

type FetchRepositoriesParams = {
  username: string
  perPage: number
  page: number
}
type FetchRepositories = ({
  username,
  perPage,
  page,
}: FetchRepositoriesParams) => Promise<RepositoryData[]>

export const fetchRepositories: FetchRepositories = ({
  username,
  perPage,
  page,
}) => baseQuery(`users/${username}/repos?per_page=${perPage}&page=${page}`)
