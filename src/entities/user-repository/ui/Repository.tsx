import { Link, Typography } from '@/shared/ui'
import styles from './styles.module.css'

export const Repository = () => {
  return (
    <div className={styles.container}>
      <Link size='large' href='' target='_blank'>
        repository-name
      </Link>
      <Typography tagType='p'>
        Tweak React components in real time. Deprecated: use Fast Refresh
        instead.
      </Typography>
    </div>
  )
}
