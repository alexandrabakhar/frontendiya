import { useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { Pagination } from '@/features/pagination'
import { Repository } from '@/entities/user'
import { Typography } from '@/shared/ui'
import { fetchRepositories } from '../api/fetchRepositories'
import { useRepositories } from '../hooks/useRepositories'
import styles from './styles.module.css'

export const Repositories = () => {
  const initialCurrentPage = 1
  const [currentPage, setCurrentPage] = useState(initialCurrentPage)

  const {
    repositoriesRef,
    repoCountPerPage,
    username,
    totalPages,
    totalRepoCount,
  } = useRepositories()

  const { data: repositories, mutate } = useMutation({
    mutationFn: fetchRepositories,
  })

  useEffect(() => {
    mutate({
      username,
      perPage: repoCountPerPage,
      page: currentPage,
    })
  }, [currentPage, mutate, username, repoCountPerPage])

  return (
    <div className={styles.container}>
      <Typography tagType='h1'>Repositories ({totalRepoCount})</Typography>

      <ul ref={repositoriesRef} className={styles.list}>
        {repositories?.map(({ id, full_name, html_url, description }) => (
          <Repository
            key={id}
            fullName={full_name}
            description={description}
            htmlUrl={html_url}
          />
        ))}
      </ul>

      <Pagination
        totalRepoCount={totalRepoCount}
        countPerPage={repoCountPerPage}
        pagesCount={totalPages}
        currentPageNumber={currentPage}
        setPage={setCurrentPage}
      />
    </div>
  )
}
