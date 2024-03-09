import { useContext } from 'react'
import UserContext from './context/UserContext'
import Welcome from './components/Welcome'
import EmailDisplay from "./components/EmailDisplay"
import Buttons from './components/Buttons'

const App = () => {
  const { isDarkMode } = useContext(UserContext)

  return (
      <div style={{ 'backgroundColor': isDarkMode ? 'black' : 'white', 'color': isDarkMode ? 'white' : 'black' }}>
        <Welcome />
        <EmailDisplay />
        <Buttons />
      </div>
  )
}

export default App