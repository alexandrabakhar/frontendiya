import { FC } from 'react'
import { Button, Typography } from '@/shared/ui'
import ArrowIcon from '../lib/arrow.svg?react'
import { getPaginationBody } from '../lib/getPaginationBody'
import styles from './styles.module.css'

type PaginationProps = {
  currentPageNumber: number
  pagesCount: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  countPerPage: number
  totalRepoCount: number
}

export const Pagination: FC<PaginationProps> = ({
  currentPageNumber,
  setPage,
  pagesCount,
  countPerPage,
  totalRepoCount,
}) => {
  const handleGoBack = () => setPage(prev => prev - 1)
  const handleGoNext = () => setPage(prev => prev + 1)
  const handleSetPage = (pageNumber: number) => () => setPage(pageNumber)

  const paginationBody = getPaginationBody(
    pagesCount,
    currentPageNumber,
    handleSetPage,
  )

  const firstItem = countPerPage * currentPageNumber - countPerPage + 1
  const lastItem = countPerPage * currentPageNumber

  return (
    <div className={styles.container}>
      <Typography tagType='p' colorType='secondary'>
        {firstItem}-{lastItem} of {totalRepoCount} items
      </Typography>
      <Button
        btnType='svgBox'
        disabled={currentPageNumber <= 1}
        onClick={handleGoBack}
      >
        <ArrowIcon />
      </Button>
      <div className={styles.bodyBox}>{paginationBody}</div>
      <Button
        btnType='svgBox'
        disabled={currentPageNumber >= pagesCount}
        onClick={handleGoNext}
        className={styles.rightArrow}
      >
        <ArrowIcon />
      </Button>
    </div>
  )
}
