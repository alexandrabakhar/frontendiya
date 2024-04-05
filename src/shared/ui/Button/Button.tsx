import cx from 'classix'
import { ComponentProps, FC } from 'react'
import styles from './styles.module.css'
type ButtonOwnProps = {
  selected?: boolean
  btnType?: 'svgBox' | 'default'
}
type ButtonProps = ComponentProps<'button'> & ButtonOwnProps

export const Button: FC<ButtonProps> = ({
  children,
  className,
  selected,
  btnType = 'default',
  ...otherProps
}) => {
  const classNames = cx(
    styles.btn,
    styles[btnType],
    className,
    selected && styles.selectedBtn,
  )
  return (
    <button className={classNames} {...otherProps}>
      {children}
    </button>
  )
}
