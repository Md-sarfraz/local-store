import React, { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

const StoreRegistration = () => {
    const [storeDetails, setStoreDetails] = useState({
        firstname: '',
        lastname: '',
        storename: '',
        accountHolderName: '',
        accountNumber: '',
        ifscCode: '',
        branch: '',
        email: '',
        password: '',
        phone: '',
        address: '',
        city: '',
        pincode: '',
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/store-register', storeDetails);
            console.log(response);
            if (response.status === 201) {
                toast.success("successfully registered");
                setStoreDetails({
                    firstname: '',
                    lastname: '',
                    storename: '',
                    accountHolderName: '',
                    accountNumber: '',
                    ifscCode: '',
                    branch: '',
                    email: '',
                    password: '',
                    phone: '',
                    address: '',
                    city: '',
                    pincode: '',
                })
            }
        } catch (error) {
            console.log(error);
            toast.error("failed to register")
        }
    }

    const handleInputChange = (e) => {
        setStoreDetails({ ...storeDetails, [e.currentTarget.name]: e.currentTarget.value });
    }

    return (
        <div className='form1-container d-flex flex-row justify-content-center align-items-center'>
            <div className='col-6 d-flex justify-content-center'>
                <img src="./images/form1.png" alt="" />
            </div>
            <form action='/storeRegistration' method='post' onSubmit={handleSubmit} className='m-0 p-0'>
                <div className="form1 col-6 d-flex justify-content-center align-items-center">

                    <div className='store-register-form'>
                        <div className='Personal-info '>

                            <h3 className='m-0 p-0'>Personal Information</h3>
                            <div className='d-flex name'>

                                <input type="text" placeholder='First' name='firstname' onChange={handleInputChange} value={storeDetails.firstname} />
                                <input type="text" placeholder='Last' name='lastname' onChange={handleInputChange} value={storeDetails.lastname} />
                            </div>

                            <div className='d-flex phone-email'>
                                <div className="phone">

                                    <input type="text" placeholder='phone' name='phone' onChange={handleInputChange} value={storeDetails.phone} />
                                </div>
                                <div className="email">

                                    <input type="text" placeholder='Email' name='email' onChange={handleInputChange} value={storeDetails.email} />
                                </div>

                            </div>

                        </div>
                        <div className="row m-0 p-0">
                            <input type="text" placeholder='password' name='password' onChange={handleInputChange} value={storeDetails.password} />

                        </div>
                        <div className="business-info">
                            <h3 className='m-0 p-0'>Store Information</h3>
                            <div className='d-flex storeName-adress'>
                                <div className="store-name">
                                    <input type="text" placeholder='Store Name' name='storename' onChange={handleInputChange} value={storeDetails.storename} />
                                </div>
                                <div className="adress">
                                    <input type="text" placeholder='Address' name='address' onChange={handleInputChange} value={storeDetails.address} />
                                </div>

                            </div>
                            <div className='d-flex city-pin'>
                                <div className="city">
                                    <input type="text" placeholder='City' name='city' onChange={handleInputChange} value={storeDetails.city} />
                                </div>

                                <div className="Pin">
                                    <input type="text" placeholder='Pin Code' name='pincode' onChange={handleInputChange} value={storeDetails.pincode} />
                                </div>

                            </div>
                        </div>

                        <div className="payment-info">
                            <h3 className='m-0 p-0'>Payment Details</h3>
                            <div className='d-flex holderName-accNo'>
                                <div className="AccountHolder-name">
                                    <input type="text" placeholder='Account Holder Name' name='accountHolderName' onChange={handleInputChange} value={storeDetails.accountHolderName} />
                                </div>

                                <div className="Acc-no">
                                    <input type="text" placeholder='Account Number' name='accountNumber' onChange={handleInputChange} value={storeDetails.accountNumber} />
                                </div>

                            </div>
                            <div className='d-flex ifscCode-branch'>
                                <div className="ifsc-code">
                                    <input type="text" placeholder='Ifsc-Code' name='ifscCode' onChange={handleInputChange} value={storeDetails.ifscCode} />
                                </div>

                                <div className="branch">
                                    <input type="text" placeholder='Branch' name='branch' onChange={handleInputChange} value={storeDetails.branch} />
                                </div>

                            </div>
                            <div className="register-btn">
                                <button onClick={handleSubmit}>Register</button>
                            </div>
                        </div>

                    </div>

                </div>
            </form>

        </div>
    )
}

export default StoreRegistration