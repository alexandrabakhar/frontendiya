import { ComponentProps } from 'react'
import styles from './styles.module.css'
type AvatarProps = Omit<ComponentProps<'img'>, 'className'>
export const Avatar = ({ ...props }: AvatarProps) => {
  return <img {...props} className={styles.avatar} />
}
