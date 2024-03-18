import Login from "./components/Login"
import { useState } from "react"

const App = () => {
  const [user, setUser]  = useState([])

  return (
    <>
     <Login
      user={user}
      setUser={setUser}
      apiKey={`${process.env.REACT_APP_API_KEY}`}
     />
    </>
  )
}

export default App