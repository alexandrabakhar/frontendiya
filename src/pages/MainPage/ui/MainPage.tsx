import { EmptyBlock, Header } from '@/widgets'
import styles from './styles.module.css'

export const MainPage = () => {
  return (
    <main className={styles.main}>
      <Header />
      <EmptyBlock contentType='initial' />
    </main>
  )
}
