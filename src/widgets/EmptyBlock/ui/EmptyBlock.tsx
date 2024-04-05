import { FC } from 'react'
import { Typography } from '@/shared/ui'
import { contentTypeMapper } from '../lib/contentTypeMapper'
import { EmptyContentType } from '../model/types'
import styles from './styles.module.css'

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
