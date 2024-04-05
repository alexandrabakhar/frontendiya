import { useLayoutEffect, useMemo, useRef, useState } from 'react'
import { User, useUserContext } from '@/entities/user'
import { getRepoCountPerPage } from '../lib/getRepoCountPerPage'
import { getTotalPages } from '../lib/getTotalPages'

export const useRepositories = () => {
  const repositoriesRef = useRef<Nullable<HTMLUListElement>>(null)
  const initialRepoCountPerPage = 1
  const [repoCountPerPage, setRepoCountPerPage] = useState(
    initialRepoCountPerPage,
  )
  const { user } = useUserContext()
  const { login: username, repos_count: totalRepoCount } = user as User

  useLayoutEffect(() => {
    if (repositoriesRef.current) {
      const blockHeight = repositoriesRef.current.clientHeight
      const repoPerPage = getRepoCountPerPage(blockHeight)
      setRepoCountPerPage(repoPerPage)
    }
  }, [])
  const totalPages = useMemo(
    () => getTotalPages(totalRepoCount, repoCountPerPage),
    [totalRepoCount, repoCountPerPage],
  )
  return {
    repositoriesRef,
    repoCountPerPage,
    username,
    totalPages,
    totalRepoCount,
  }
}
