import { ComponentProps } from 'react'
import styles from './styles.module.css'

type DefaultInputProps = ComponentProps<'input'>
type NewProps = { labelContent?: JSX.Element }
type InputProps = NewProps & Omit<DefaultInputProps, 'className'>

export const Input = ({
  labelContent,
  id,
  ...defaultInputProps
}: InputProps) => {
  const inputClasses = labelContent
    ? `${styles.input} ${styles.paddingForLabel}`
    : `${styles.input}`

  return (
    <div className={styles.container}>
      {labelContent && (
        <label htmlFor={id} className={styles.label}>
          {labelContent}
        </label>
      )}

      <input
        id={id}
        name={id}
        type='text'
        className={inputClasses}
        {...defaultInputProps}
      />
    </div>
  )
}
