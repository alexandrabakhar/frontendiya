import { Avatar, Link, Typography } from '@/shared/ui'
import { useUserContext } from '../../hooks/useUserContext'
import FollowersIcon from '../../lib/followers.svg?react'
import FollowingIcon from '../../lib/following.svg?react'
import { formatNumber } from '../../lib/formatNumber'
import { User } from '../../model/types'
import styles from './styles.module.css'

export const Card = () => {
  const { user } = useUserContext()

  const { followers, following, avatar_url, login, name } = user as User

  const formattedFollowers = formatNumber(followers)
  const formattedFollowing = formatNumber(following)

  return (
    <div className={styles.container}>
      <div className={styles.avatarBox}>
        <Avatar src={avatar_url} alt='avatar' />
      </div>

      <div className={styles.nameBox}>
        <Typography tagType='h2'>{name}</Typography>
        <div>
          <Link href={user?.account_url} target='_blank' size='small'>
            {login}
          </Link>
        </div>
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.infoBox}>
          <FollowersIcon />
          <Typography tagType='p' color='secondary'>
            {formattedFollowers} followers
          </Typography>
        </div>
        <div className={styles.infoBox}>
          <FollowingIcon />
          <Typography tagType='p' color='secondary'>
            {formattedFollowing} following
          </Typography>
        </div>
      </div>
    </div>
  )
}
