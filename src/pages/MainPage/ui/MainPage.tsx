import { Repositories } from '@/widgets/Repositories'
import styles from './styles.module.css'
import { Card } from '@/entities'

export const MainPage = () => {
  return (
    <main className={styles.main}>
      <Card />
      <Repositories />
    </main>
  )
}
