
import React from 'react'
import LoginForm from '../components/LoginForm'
import UserSignUp from '../components/UserSignUp'
const Login = () => {
  return (
    <div className="login-container d-flex flex-row ">
      <div className="login-form-image col-6 d-flex justify-content-center align-items-center">
        <img src="./images/form1.png" alt="" />
      </div>

      <div className='login-form d-flex flex-column col-6 justify-content-center align-items-center'>
        <div >
          <h2>Login in to Exclusive</h2>
          <p>Enter your details below</p>
        </div>
        <div className="login-input d-flex flex-column ">
          <input type="text" placeholder='Email or Phone Number' />
          <input type="text" placeholder='password' />
        </div>
        <div className="login-btn">
          <button>log in</button>
        </div>
      </div>

    </div>
  )
}

export default Login