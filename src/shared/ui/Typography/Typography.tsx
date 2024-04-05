import { cx } from 'classix'
import { ComponentProps, FC } from 'react'
import styles from './styles.module.css'

type TypographyTagTypes = 'h1' | 'h2' | 'h3' | 'p'

type TypographyOwnProps = {
  tagType: TypographyTagTypes
  colorType?: 'primary' | 'secondary'
  center?: boolean
}
type TypographyProps<E extends TypographyTagTypes> = TypographyOwnProps &
  ComponentProps<E>

export const Typography: FC<TypographyProps<TypographyTagTypes>> = ({
  tagType,
  colorType = 'primary',
  center = false,
  className,
  children,
  ...otherProps
}) => {
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
