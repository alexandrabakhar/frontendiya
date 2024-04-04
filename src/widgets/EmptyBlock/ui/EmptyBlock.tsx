import { contentTypeMapper } from '@/widgets/EmptyBlock/lib/contentTypeMapper'
import { EmptyContentType } from '@/widgets/EmptyBlock/model/types'
import { Typography } from '@/shared/ui'

import styles from './styles.module.css'
import { FC } from 'react'

type EmptyBlockProps = {
  contentType: EmptyContentType
}
export const EmptyBlock: FC<EmptyBlockProps> = ({ contentType }) => {
  const { icon, title } = contentTypeMapper[contentType]
  return (
    <main className={styles.container}>
      <div className={styles.iconBox}>{icon}</div>
      <div className={styles.titleBox}>
        <Typography tagType='h3' colorType='secondary' center>
          {title}
        </Typography>
      </div>
    </main>
  )
}
