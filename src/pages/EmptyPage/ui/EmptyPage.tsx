import { FC } from 'react'
import { EmptyBlock } from '@/widgets/EmptyBlock'
import { getContentType } from '../lib/getContentType'

type EmptyPageProps = {
  error?: Nullable<string>
}

export const EmptyPage: FC<EmptyPageProps> = ({ error }) => {
  const contentType = getContentType(error)

  return <EmptyBlock contentType={contentType} />
}
