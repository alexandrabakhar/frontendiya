import { EmptyBlock } from '@/widgets/EmptyBlock'
import { Repositories } from '@/widgets/Repositories'
import { Card, useUserContext } from '@/entities/user'
import styles from './styles.module.css'

export const MainPage = () => {
  const { user } = useUserContext()
  const isRepositories = user?.repos_count === 0

  return (
    <main className={styles.main}>
      <Card />
      {isRepositories ? (
        <EmptyBlock contentType='repository' />
      ) : (
        <Repositories />
      )}
    </main>
  )
}
