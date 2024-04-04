import { EmptyBlock } from '@/widgets'

import { FC } from 'react'

type EmptyPageProps = {
  contentType: 'initial' | 'user'
}

export const EmptyPage: FC<EmptyPageProps> = ({ contentType }) => {
  return <EmptyBlock contentType={contentType} />
}
