import React from 'react'
import { Link } from "react-router-dom";
const UserSignUp = () => {
    return (
        <div>
            <div className="signUp-form">
                <div className="heading">
                    <h2>Create an account</h2>
                    <p className='text-dark'>Enter your details below</p>
                </div>
                <div className="input d-flex flex-column">
                    <div className='name'>
                        <input className='' type="text" placeholder='Name' />
                    </div>
                    <div className="email-phone">
                    <input className='' type="text" placeholder='Email Or Phone Number' />
                    </div>
                    <div className="Password">
                    <input className='' type="text" placeholder='Password' />
                    </div>
                    <div className="Password">
                    <input className='' type="text" placeholder='confirm Password' />
                    </div>
                </div>
                <div className="button position-relative d-flex flex-column pt-5">
                    <button>Create Accont</button>
                    <div>
                        <img src="./images/gooleIcon.png" alt="" />
                        <button>Sign Up With Google </button>
                    </div>
                    <div className='already-account d-flex'>
                        <p>Already have an account? </p>
                        <Link to='/Login' className="text-decoration-none text-black w-auto">
                        <button className='fw-bold'>login</button>
                        </Link>                   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserSignUp