import { contentTypeMapper } from '@/widgets/EmptyBlock/lib/contentTypeMapper'
import { ContentType } from '@/widgets/EmptyBlock/model/types'
import { Typography } from '@/shared/ui'

import styles from './styles.module.css'

type EmptyBlockProps = {
  contentType: ContentType
}
export const EmptyBlock = ({ contentType }: EmptyBlockProps) => {
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
