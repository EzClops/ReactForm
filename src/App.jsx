import { useState } from 'react'
import './App.css'
import SignupForm from './components/SIgnUpForm'
import Authenticate from './components/Authenticate'

function App() {
  const [token, setToken] = useState(null)

  return (
    <>
      <SignupForm token={token} setToken={setToken}/>
      <Authenticate token={token} setToken={setToken}/>
    </>
  )
}

export default App
