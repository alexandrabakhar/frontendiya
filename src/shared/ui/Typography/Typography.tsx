import { ComponentProps } from 'react'
import styles from './styles.module.css'
import { cx } from 'classix'

type TypographyTagTypes = 'h1' | 'h2' | 'h3' | 'p'

type TypographyOwnProps = {
  tagType: TypographyTagTypes
  colorType?: 'primary' | 'secondary'
  center?: boolean
}
type TypographyProps<E extends TypographyTagTypes> = TypographyOwnProps &
  ComponentProps<E>

export const Typography = <E extends TypographyTagTypes>({
  tagType,
  colorType = 'primary',
  center = false,
  className,
  children,
  ...otherProps
}: TypographyProps<E>) => {
  const TagName = tagType

  const classNames = cx(
    styles[tagType],
    styles[colorType],
    center && styles.center,
    className,
  )

  return (
    <TagName className={classNames} {...otherProps}>
      {children}
    </TagName>
  )
}
