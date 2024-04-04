import { Repository } from '@/entities'
import styles from './styles.module.css'
import { Typography } from '@/shared/ui'
import { useEffect, useRef, useState } from 'react'
import { getRepoCountPerPage } from '@/widgets/Repositories/lib/getRepoCountPerPage'
import { Pagination } from '@/features/pagination'

export const Repositories = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [height, setHeight] = useState(0)

  const repositoriesRef = useRef<HTMLUListElement | null>(null)

  useEffect(() => {
    if (repositoriesRef.current) {
      setHeight(repositoriesRef.current.clientHeight)
    }
  }, [])

  const totalRepoCount = 50
  const repoCountPerPage = getRepoCountPerPage(height)
  const totalPages =
    repoCountPerPage && Math.ceil(totalRepoCount / repoCountPerPage)

  return (
    <div className={styles.container}>
      <Typography tagType='h1'>Repositories ({totalRepoCount})</Typography>
      <ul ref={repositoriesRef} className={styles.list}>
        <Repository />
        <Repository />
      </ul>
      <Pagination
        pagesCount={totalPages}
        currentPageNumber={currentPage}
        setPage={setCurrentPage}
      />
    </div>
  )
}
