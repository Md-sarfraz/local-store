import React from 'react'
import StoreRegistrationForm from '../components/Form1'
const StoreRegistration = () => {
    return (
        <div className='form1-container d-flex flex-row justify-content-center align-items-center'>
            <div className='col-6 d-flex justify-content-center'>
                <img src="./images/form1.png" alt="" />
            </div>
            <div className="form1 col-6 d-flex justify-content-center align-items-center">
                <StoreRegistrationForm />
            </div>
        </div>
    )
}

export default StoreRegistration