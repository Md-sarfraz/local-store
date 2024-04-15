// import React, { useState } from 'react';

// function StoreRegistrationForm() {
//   const [formData, setFormData] = useState({
//     fullname: '',
//     email: '',
//     phone: '',
//     storename: '',
//     address: '',
//     city: '',
//     country: '',
//     cardnumber: '',
//     expiry: '',
//     cvv: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can submit the form data to your backend for processing
//     console.log(formData);
//     // Reset the form after submission
//     setFormData({
//       fullname: '',
//       email: '',
//       phone: '',
//       storename: '',
//       address: '',
//       city: '',
//       country: '',
//       cardnumber: '',
//       expiry: '',
//       cvv: ''
//     });
//   };

//   return (
//     <div>
//       <h2>Personal Information</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="fullname">Full Name:</label><br />
//         <input type="text" id="fullname" name="fullname" value={formData.fullname} onChange={handleChange} required /><br /><br />

//         <label htmlFor="email">Email:</label><br />
//         <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required /><br /><br />

//         <label htmlFor="phone">Phone Number:</label><br />
//         <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required /><br /><br />

//         <h2>Business Information</h2>
//         <label htmlFor="storename">Store Name:</label><br />
//         <input type="text" id="storename" name="storename" value={formData.storename} onChange={handleChange} required /><br /><br />

//         <label htmlFor="address">Address:</label><br />
//         <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required /><br /><br />

//         <label htmlFor="city">City:</label><br />
//         <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required /><br /><br />

//         <label htmlFor="country">Country:</label><br />
//         <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} required /><br /><br />

//         <h2>Payment Details</h2>
//         <label htmlFor="cardnumber">Card Number:</label><br />
//         <input type="text" id="cardnumber" name="cardnumber" value={formData.cardnumber} onChange={handleChange} required /><br /><br />

//         <label htmlFor="expiry">Expiry Date:</label><br />
//         <input type="text" id="expiry" name="expiry" value={formData.expiry} onChange={handleChange} placeholder="MM/YY" required /><br /><br />

//         <label htmlFor="cvv">CVV:</label><br />
//         <input type="text" id="cvv" name="cvv" value={formData.cvv} onChange={handleChange} required /><br /><br />

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default StoreRegistrationForm;

import React from 'react'

const Form1 = () => {
  return (
    <div className='store-register-form'>
      <div className='Personal-info '>

        <h3 className='m-0 p-0'>Personal Information</h3>
        <div className='d-flex name'>

          <input type="text" placeholder='First' />
          <input type="text" placeholder='Last' />
        </div>

        <div className='d-flex phone-email'>
          <div className="phone">

            <input type="text" placeholder='phone' />
          </div>
          <div className="email">

            <input type="text" placeholder='Email' />
          </div>

        </div>
      </div>
      <div className="business-info">
        <h3 className='m-0 p-0'>Store Information</h3>
        <div className='d-flex storeName-adress'>
          <div className="store-name">
            <input type="text" placeholder='Store Name' />
          </div>
          <div className="adress">
            <input type="text" placeholder='Address' />
          </div>

        </div>
        <div className='d-flex city-pin'>
          <div className="city">
            <input type="text" placeholder='City' />
          </div>

          <div className="Pin">
            <input type="text" placeholder='Pin Code' />
          </div>

        </div>
      </div>

      <div className="payment-info">
        <h3 className='m-0 p-0'>Payment Details</h3>
        <div className='d-flex holderName-accNo'>
          <div className="AccountHolder-name">
            <input type="text" placeholder='Account Holder Name' />
          </div>

          <div className="Acc-no">
            <input type="text" placeholder='Account Number' />
          </div>

        </div>
        <div className='d-flex ifscCode-branch'>
          <div className="ifsc-code">
            <input type="text" placeholder='Ifsc-Code' />
          </div>

          <div className="branch">
            <input type="text" placeholder='Branch' />
          </div>

        </div>
        <div className="register-btn">
          <button>Register</button>
        </div>
      </div>

    </div>
  )
}

export default Form1