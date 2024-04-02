import styles from './styles.module.css'
import LabelIcon from '@/shared/lib/search.svg?react'

type InputProps = { inputId: string; placeholder: string }

export const Input = ({ inputId, placeholder }: InputProps) => {
  return (
    <div className={styles['input-box']}>
      <label htmlFor={inputId} className={styles['input-label']}>
        <LabelIcon />
      </label>
      <input
        id={inputId}
        type='text'
        className={styles.input}
        placeholder={placeholder}
      />
    </div>
  )
}
