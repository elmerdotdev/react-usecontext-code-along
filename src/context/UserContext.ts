import { createContext } from 'react'

type UserContextType = {
  firstname: string,
  setFirstname: (firstname: string) => void,
  email: string,
  setEmail: (email: string) => void,
  age: number,
  setAge: (age: number) => void,
  isDarkMode: boolean,
  setIsDarkMode: (isDarkMode: boolean) => void
}

const UserContext = createContext<UserContextType>({
  firstname: '',
  setFirstname: () => {},
  email: '',
  setEmail: () => {},
  age: 0,
  setAge: () => {},
  isDarkMode: false,
  setIsDarkMode: () => {}
})

export default UserContext