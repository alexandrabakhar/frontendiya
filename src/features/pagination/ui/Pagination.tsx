import styles from './styles.module.css'
import ArrowIcon from '@/features/pagination/lib/arrow.svg?react'
import { Button } from '@/shared/ui'
import { getPaginationBody } from '@/features/pagination/lib/getPaginationBody'

type PaginationProps = {
  currentPageNumber: number
  pagesCount: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}

export const Pagination = ({
  currentPageNumber,
  setPage,
  pagesCount,
}: PaginationProps) => {
  const handleGoBack = () => setPage(prev => prev - 1)
  const handleGoNext = () => setPage(prev => prev + 1)
  const handleSetPage = (pageNumber: number) => () => setPage(pageNumber)

  const paginationBody = getPaginationBody(
    pagesCount,
    currentPageNumber,
    handleSetPage,
  )

  return (
    <div className={styles.container}>
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
