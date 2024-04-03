import { contentTypeMapper } from '@/widgets/EmptyBlock/lib/contentTypeMapper'
import { ContentType } from '@/widgets/EmptyBlock/model/types'
import styles from './styles.module.css'

type EmptyBlockProps = {
  contentType: ContentType
}
export const EmptyBlock = ({ contentType }: EmptyBlockProps) => {
  const { icon, title } = contentTypeMapper[contentType]
  return (
    <div className={styles.container}>
      <div className={styles.iconBox}>{icon}</div>
      <h2 className={styles.title}>{title}</h2>
    </div>
  )
}
