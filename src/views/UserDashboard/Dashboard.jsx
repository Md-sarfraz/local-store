import React from 'react'
import UserSidebar from '../../components/UserSidebar'
import { Routes, Route } from 'react-router-dom'
import Profile from './Profile'
const Dashboard = () => {
    return (
        <div className=" row justify-content-center m-0"style={{padding:"60px"}}>

            <div className='col-10 d-lg-flex m-0 p-0  justify-content-ceneter align-items-center'>
                <UserSidebar />
                <Routes>

                    <Route path='/profile' element={<Profile />} />
                    <Route path='/' element={<Profile />} />

                </Routes>
            </div>
        </div>
    )
}

export default Dashboard