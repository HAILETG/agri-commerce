import React from 'react'
import "./login.css"

function Login() {
  return (
    <div className='container'>
      <form action="" className="login">
        <label htmlFor="username">Username</label>
        <input type="text" name='username'  placeholder='Username' />
        <label htmlFor="password">Password</label>
        <input type="password" name="password"  />
      </form>
      <button className="loginbtn">Login</button>
      <span className="forgetpassword">Forget Password?</span>
      <button className="createbtn">Create account</button>
    </div>
  )
}

export default Login