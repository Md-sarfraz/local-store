import React from 'react'

const UserSignUp = () => {
  return (
    <div>
        <div className="signUp-form">
            <div className="heading">
                <h2>Create an account</h2>
                <p>Enter your details below</p>
            </div>
            <div className="input">
                <div className="name">
                <p>Name</p>
                </div>
                <div className="email-phone">
                <p>Email Or Phone Number</p>
                </div>
                <div className="Password">
                <p>Password</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserSignUp