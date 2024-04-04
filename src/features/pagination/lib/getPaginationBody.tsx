import { Button } from '@/shared/ui'

export const getPaginationBody = (
  maxCount: number,
  currentItem: number,
  onClick: (pageNumber: number) => () => void,
) => {
  const body = []

  for (let pageNumber = 1; pageNumber <= maxCount; pageNumber++) {
    if (
      pageNumber === 1 ||
      pageNumber === maxCount ||
      Math.abs(pageNumber - currentItem) <= 1
    ) {
      body.push(
        <Button
          key={pageNumber}
          onClick={onClick(pageNumber)}
          selected={currentItem === pageNumber}
        >
          {pageNumber}
        </Button>,
      )
    }

    if (pageNumber === 2 && currentItem > 3) {
      body.push(<span key='start-ellipsis'>...</span>)
    }

    if (pageNumber === maxCount - 1 && currentItem < maxCount - 2) {
      body.push(<span key='end-ellipsis'>...</span>)
    }
  }
  return body
}
