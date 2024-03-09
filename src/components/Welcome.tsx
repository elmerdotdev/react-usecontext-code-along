import { useContext } from 'react'
import UserContext from '../context/UserContext'

const Welcome = () => {
  const { firstname, age } = useContext(UserContext)

  return (
    <div>
      Firstname: { firstname }<br />
      Age: {age} years old
    </div>
  )
}

export default Welcome