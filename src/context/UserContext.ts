import { createContext } from 'react'

export interface UserContextProps {
  user: {
    email: string,
    password: string
  },
  setUser: Function | null
}

export const UserContext = createContext<UserContextProps | null>({
  user: {
    email: '',
    password: ''
  },
  setUser: undefined
})