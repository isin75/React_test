import React, { useContext } from 'react'
import MyInput from '../components/UI/input/MyInput'
import MyButton from '../components/UI/button/MyButton'
import { AuthContext } from '../context'

const Login = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)

  const submit = event => {
    event.preventDefault()
    setIsAuth(true)
    localStorage.setItem('auth', 'true')
  }

  return (
    <div>
        <h1>Sign in to Site</h1>
        <form onSubmit={submit}>
            <MyInput type="text" placeholder='Email'/>
            <MyInput type="password" placeholder='Password'/>
            <MyButton>Sign in</MyButton>
        </form>
    </div>
  )
}

export default Login