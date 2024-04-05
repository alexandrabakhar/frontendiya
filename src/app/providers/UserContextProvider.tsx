import { FC, ReactNode, useState } from 'react'
import { User, UserContext } from '@/entities/user'

type UserContextProviderProps = {
  children?: ReactNode
}

export const UserContextProvider: FC<UserContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<Nullable<User>>(null)

  const [errorStatus, setErrorStatus] = useState<Nullable<string>>(null)

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        errorStatus,
        setErrorStatus,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
