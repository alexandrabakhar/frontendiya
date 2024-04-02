import { SearchInput } from '@/features/search-user'
import styles from './styles.module.css'
import Logo from '@/widgets/Header/lib/github.svg?react'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <SearchInput />
    </header>
  )
}
