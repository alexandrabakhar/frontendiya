import { SearchForm } from '@/features/search-user'
import Logo from '../lib/github.svg?react'
import styles from './styles.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <SearchForm />
    </header>
  )
}
