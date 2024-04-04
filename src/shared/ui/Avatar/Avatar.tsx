import { ComponentProps, FC } from 'react'
import styles from './styles.module.css'
type AvatarProps = Omit<ComponentProps<'img'>, 'className'>

export const Avatar: FC<AvatarProps> = ({ ...props }) => {
  return <img {...props} className={styles.avatar} />
}
