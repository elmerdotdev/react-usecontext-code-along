import { useState, ReactNode } from 'react'
import UserContext from './UserContext'

type UserContextProviderProps = {
  children: ReactNode
}

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [firstname, setFirstname] = useState<string>('John')
  const [email, setEmail] = useState<string>('john@website.com')
  const [age, setAge] = useState<number>(25)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  return (
    <UserContext.Provider value={{ firstname, setFirstname, email, setEmail, age, setAge, isDarkMode, setIsDarkMode }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider