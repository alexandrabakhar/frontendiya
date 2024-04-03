import { SearchIcon } from '@/shared/lib'
import { Input } from '@/shared/ui'

export const SearchInput = () => {
  return (
    <Input
      labelContent={<SearchIcon />}
      id='search'
      placeholder='Enter GitHub username'
    />
  )
}
