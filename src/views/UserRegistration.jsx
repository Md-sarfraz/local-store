import React from 'react'
import UserSignUp from '../components/UserSignUp'
const UserRegistration = () => {
  return (

    <div className='row user-sign-up-container d-flex flex-row '>
      <div className='user-sign-up col-6 d-flex justify-content-center align-items-center'>
        <img src="./images/form1.png" alt="" />
      </div>
      <div className='col-6 d-flex justify-content-center align-items-center'>
        <UserSignUp />
      </div>
    </div>
  )
}

export default UserRegistration