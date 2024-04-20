import React from 'react'

const UserSidebar = () => {
    return (
        <div className='col-12 col-lg-3 m-0 p-0 userSidebar d-flex  flex-column'>
            <div className="manage-my-account ">
                <h5 className='pr-5'>Manage My Account</h5>
                <p>My Profile</p>
                <p>Address Book</p>
                <p>My Payment Options</p>
            </div>
            <div className="my-orders">
                <h5>My Payment Options</h5>
                <p>My Returns</p>
                <p>My Cancellations</p>
            </div>
            <div className="my-wishlist">
                <h5>My WishList</h5>
            </div>
        </div>
    )
}

export default UserSidebar