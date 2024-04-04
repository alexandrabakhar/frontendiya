import { ComponentProps } from 'react'
import styles from './styles.module.css'
import { cx } from 'classix'

type LinkOwnProps = {
  size: 'small' | 'large'
}
type LinkProps = LinkOwnProps & ComponentProps<'a'>

export const Link = ({
  size,
  children,
  className,
  ...otherProps
}: LinkProps) => {
  const classNames = cx(styles[size], styles.color, className)
  return (
    <a {...otherProps} className={classNames}>
      {children}
    </a>
  )
}
