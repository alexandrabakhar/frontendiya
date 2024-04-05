import { API_URL } from '../config'
const GITHUB_TOKEN = import.meta.env.VITE_TOKEN

export const baseQuery = async (queryEndpoint: string) => {
  const response = await fetch(`${API_URL}/${queryEndpoint}`, {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28',
    },
  })

  if (!response.ok) {
    const errorStatus = String(response.status)
    const error = new Error(errorStatus)

    throw error
  }
  return response.json()
}
