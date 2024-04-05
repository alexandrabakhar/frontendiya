import { EmptyBoxIcon, SearchIcon, UserIcon } from '@/shared/lib'
import { ContentTypeMapper } from '../model/types'

export const contentTypeMapper: ContentTypeMapper = {
  initial: {
    title: 'Start with searching a GitHub user',
    icon: <SearchIcon />,
  },
  '404': {
    title: 'User not found',
    icon: <UserIcon />,
  },
  defaultError: {
    title: 'Oops... Something went wrong',
    icon: <EmptyBoxIcon />,
  },
  repository: {
    title: 'Repository list is empty',
    icon: <EmptyBoxIcon />,
  },
}
