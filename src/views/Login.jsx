
import React, { useState, useEffect } from 'react'
import LoginForm from '../components/LoginForm'
import UserSignUp from '../components/UserSignUp'
import axios from 'axios'
import { toast } from 'react-toastify'
const Login = () => {
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: ''
  })
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/user-Login', userDetails);
      if (response.status === 200) {
        toast.success("Successfully Login!!");
        setUserDetails({
          email: '',
          password: ''
        })
        setTimeout(() => {
          window.location.href = '#/user'
        })

      }

    } catch (error) {
      toast.error("Failed to login");
      console.log(error);
    }

  }

  const handleInputChange = (e) => {
    setUserDetails({ ...userDetails, [e.currentTarget.name]: e.currentTarget.value });
  }


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
        <form method='post' onSubmit={handleLogin}>

          <div className="login-input d-flex flex-column ">
            <input type="text" placeholder='Email ' name='email' value={userDetails.email} onChange={handleInputChange} />
            <input type="text" placeholder='password' name='password' value={userDetails.password} onChange={handleInputChange} />
          </div>
          <div className="login-btn">
            <button onClick={handleLogin}>log in</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Login