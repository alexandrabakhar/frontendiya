import { useMutation } from '@tanstack/react-query'
import { FormEventHandler } from 'react'
import { useUserContext } from '@/entities/user'
import { baseQuery } from '@/shared/api'
import { SearchIcon } from '@/shared/lib'
import { Input } from '@/shared/ui'

type SearchFormValues = {
  search: HTMLInputElement
}

export const SearchForm = () => {
  const { onSuccess } = useUserContext()

  const fetchUser = (username: string) => baseQuery(`users/${username}`)

  const { mutate } = useMutation({
    mutationFn: fetchUser,

    onSuccess: data => {
      const {
        login,
        avatar_url,
        followers,
        following,
        name,
        html_url,
        public_repos,
      } = data
      const userData = {
        login,
        avatar_url,
        followers,
        following,
        name,
        account_url: html_url,
        repos_count: public_repos,
      }
      onSuccess(userData)
    },
  })

  const handleOnSubmit: FormEventHandler<
    HTMLFormElement & SearchFormValues
  > = event => {
    event.preventDefault()

    const form = event.currentTarget
    const searchInputValue = form.search.value

    if (!searchInputValue) return

    mutate(searchInputValue)
  }
  return (
    <form onSubmit={handleOnSubmit}>
      <Input
        labelContent={<SearchIcon />}
        id='search'
        name='search'
        placeholder='Enter GitHub username'
      />
    </form>
  )
}
