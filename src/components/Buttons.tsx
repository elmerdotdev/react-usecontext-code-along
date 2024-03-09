import { useContext } from 'react'
import UserContext from '../context/UserContext' 

const Buttons = () => {
  const { setEmail, setFirstname, setAge, setIsDarkMode, isDarkMode } = useContext(UserContext)

  const updateFirstname = () => {
    setFirstname('Jenny')
  }

  const updateEmail = () => {
    setEmail('jenny@jennywebsite.com')
  }

  const updateAge = () => {
    setAge(30)
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div>
      <button onClick={updateFirstname}>Update firstname</button>
      <button onClick={updateEmail}>Update email</button>
      <button onClick={updateAge}>Update age</button>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>
  )
}

export default Buttons