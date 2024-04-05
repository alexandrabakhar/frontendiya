export type User = {
  login: string
  avatar_url: string
  repos_count: number
  followers: number
  following: number
  name: Nullable<string>
  account_url: string
}

export type RepositoryData = {
  full_name: string
  description: string
  html_url: string
  id: string
}
