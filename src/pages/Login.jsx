import React from 'react'
import MyInput from '../components/UI/input/MyInput'
import MyButton from '../components/UI/button/MyButton'

const Login = () => {
  return (
    <div>
        <h1>Sign in to Site</h1>
        <form>
            <MyInput type="text" placeholder='Email'/>
            <MyInput type="password" placeholder='Password'/>
            <MyButton>Sign in</MyButton>
        </form>
    </div>
  )
}

export default Login