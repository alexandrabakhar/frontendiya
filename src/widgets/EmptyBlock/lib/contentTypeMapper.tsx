import { ContentTypeMapper } from '@/widgets/EmptyBlock/model/types'

import { EmptyBoxIcon, SearchIcon, UserIcon } from '@/shared/lib'

export const contentTypeMapper: ContentTypeMapper = {
  initial: {
    title: 'Start with searching a GitHub user',
    icon: <SearchIcon />,
  },
  user: {
    title: 'User not found',
    icon: <EmptyBoxIcon />,
  },
  repository: {
    title: 'Repository list is empty',
    icon: <UserIcon />,
  },
}
