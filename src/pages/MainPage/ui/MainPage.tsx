import { Content, Header } from '@/widgets'
import styles from './styles.module.css'

export const MainPage = () => {
  return (
    <div className={styles.main}>
      <Header />
      {/* <EmptyBlock contentType='initial' /> */}
      <Content />
    </div>
  )
}
