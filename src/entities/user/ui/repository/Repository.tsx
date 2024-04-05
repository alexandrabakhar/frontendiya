import { FC } from 'react'
import { Link, Typography } from '@/shared/ui'
import styles from './styles.module.css'

type RepositoryProps = {
  fullName: string
  description: string
  htmlUrl: string
}
export const Repository: FC<RepositoryProps> = ({
  fullName,
  description,
  htmlUrl,
}) => {
  return (
    <div className={styles.container}>
      <Link size='large' href={htmlUrl} target='_blank'>
        {fullName}
      </Link>
      <Typography tagType='p'>{description}</Typography>
    </div>
  )
}
