import { Avatar, Link, Typography } from '@/shared/ui'
import styles from './styles.module.css'
import FollowersIcon from '@/entities/user-card/lib/followers.svg?react'
import FollowingIcon from '@/entities/user-card/lib/following.svg?react'
import mockAvatarSrc from '@/entities/user-card/lib/mockAvatar.png'

export const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.avatarBox}>
        <Avatar src={mockAvatarSrc} alt='avatar' />
      </div>

      <div className={styles.nameBox}>
        <Typography tagType='h2'>Dan Abramov</Typography>
        <Link size='small'>gaearon</Link>
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.infoBox}>
          <FollowersIcon />
          <Typography tagType='p' color='secondary'>
            65.8k followers
          </Typography>
        </div>
        <div className={styles.infoBox}>
          <FollowingIcon />
          <Typography tagType='p' color='secondary'>
            171 following
          </Typography>
        </div>
      </div>
    </div>
  )
}
