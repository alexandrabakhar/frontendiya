import { useCallback, useContext } from 'react'
import { User } from '../model/types'
import { UserContext } from '../model/UserContext'

export const useUserContext = () => {
  const context = useContext(UserContext)
  if (context === null) {
    throw new Error('useUser must be used within a UserProvider')
  }

  const { user, setUser, setErrorStatus, errorStatus } = context

  const onError = useCallback(
    (error: string) => {
      setUser(null)
      setErrorStatus(error)
    },
    [setErrorStatus, setUser],
  )
  const onSuccess = useCallback(
    (userData: User) => {
      setUser(userData)
      setErrorStatus(null)
    },
    [setErrorStatus, setUser],
  )

  return {
    onError,
    setUser,
    user,
    onSuccess,
    errorStatus,
  }
}
