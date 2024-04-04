import { ComponentProps, FC } from 'react'
import styles from './styles.module.css'
import { cx } from 'classix'

type LinkOwnProps = {
  size: 'small' | 'large'
}
type LinkProps = LinkOwnProps & ComponentProps<'a'>

export const Link: FC<LinkProps> = ({
  size,
  children,
  className,
  ...otherProps
}) => {
  const classNames = cx(styles[size], styles.color, className)
  return (
    <a {...otherProps} className={classNames}>
      {children}
    </a>
  )
}
