import { Dispatch, SetStateAction, createContext } from 'react'
import { User } from './types'

type UserContext = {
  errorStatus: Nullable<string>
  setErrorStatus: Dispatch<SetStateAction<Nullable<string>>>
  user: Nullable<User>
  setUser: Dispatch<SetStateAction<Nullable<User>>>
}
export const UserContext = createContext<Nullable<UserContext>>(null)
