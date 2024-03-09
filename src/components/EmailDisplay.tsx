import { useContext } from "react"
import UserContext from "../context/UserContext"

const EmailDisplay = () => {
  const { email } = useContext(UserContext)

  return (
    <div>
      Email: {email}
    </div>
  )
}

export default EmailDisplay