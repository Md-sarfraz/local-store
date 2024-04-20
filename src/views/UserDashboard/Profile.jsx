import React from 'react'

const Profile = () => {
    return (
        <div className='col-12 col-lg-9 m-0 p-0'>
            <div className="welcome d-flex ">
                <span className='m-0 fs-3 pb-3'style={{color:"red"}}>Welcome! Sarfraz</span>
            </div>
            <div className="title">
                <h4>Edit your Profile</h4>
            </div>
            <div className="account-info d-flex justify-content-center flex-column">
                <div className="user-name d-lg-flex ">
                    <div className="first-name me-lg-4  ">
                        <p className='m-0 p-0'>First Name</p>
                        <input type="text" className='m-0 p-0' />
                    </div>
                    <div className="last-name ms-lg-4  ">
                        <p className='m-0 p-0'>Last Name</p>
                        <input type="text" className='m-0 p-0' />
                    </div>
                </div>
                <div className="email-address d-lg-flex">
                    <div className="email me-lg-4  ">
                        <p className='m-0 p-0'>Email</p>
                        <input type="text" className='m-0 p-0' />
                    </div>
                    <div className="address ms-lg-4  ">
                        <p className='m-0 p-0'>address</p>
                        <input type="text" className='m-0 p-0' />
                    </div>
                </div>
            </div>
            <div className="password-changes w-auto">
                <p className='m-0 p-0'>Passwor Changes</p>
                <input type="text" className='m-0 p-0 mt-2 mb-3 ' placeholder='Current Password'/>
                <input type="text" className='m-0 p-0 mt-2 mb-3 ' placeholder='New Password'/>
                <input type="text" className='m-0 p-0 mt-2 mb-3 ' placeholder='Confirm new Password'/>
            </div>
            <div className="button">
                <button className='border-0  bg-transparent' style={{width:"100px",height:"45px"}}>Cancel</button>
                <button className=' bg-danger border-0 rounded-2 text-light' style={{width:"150px",height:"45px"}}>Save Changes</button>
            </div>
        </div>
    )
}

export default Profile