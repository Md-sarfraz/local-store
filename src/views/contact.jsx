import React from 'react'

const Contact = () => {
    return (
        <div className='contact-section d-flex align-items-center justify-content-center'>
            <div className="about-contact col-4 d-flex justify-content-center flex-column align-items-center">
                <div className="call-to-us">
                    <div className="title  d-flex  align-items-center pb-3">
                        <div className="call-icon rounded-circle bg-danger d-flex justify-content-center align-items-center me-3  ">
                            <i class="bi bi-telephone"></i>
                        </div>
                        <h4 className='m-0 p-0 fw-bold lh-lg'>Call To Us</h4>

                    </div>
                    <p className='m-0 p-0 lh-lg'>We are available 24/7, 7 days a week.</p>
                    <p className='m-0 p-0 lh-lg'>Phone: +8801611112222</p>
                </div>

                <div className="write-to-us pt-4">
                    <div className="title  d-flex  align-items-center pb-3">
                        <div className="call-icon rounded-circle bg-danger d-flex justify-content-center align-items-center me-3 ">
                        <i class="bi bi-envelope"></i>
                        </div>
                        <h4 className='m-0 p-0 fw-bold lh-lg '>Write To Us</h4>

                    </div>
                    <p className='m-0 p-0 lh-lg'>Fill out our form and we will contact you within 24 hours.</p>
                    <p className='m-0 p-0 lh-lg'>Emails: customer@exclusive.com</p>
                    <p className='m-0 p-0 lh-lg'>Emails: support@exclusive.com</p>
                </div>
            </div>
            <div className="contact-details col-6 justify-content-center flex-column d-flex align-items-center flex-row ">
                <div className="contact-name-email-phone d-flex flex-row">
                    <input type="text" placeholder='Your Name*'/>
                    <input type="text" placeholder='Your Email*'/>
                    <input type="text" placeholder='Your Phone*'/>
                </div>
                <textarea placeholder='Your Messege' name="" id="" cols="100" rows="10"></textarea>
                <div className="send-messege  d-flex">
                    <button className='bg-danger'>Send Messge</button>
                </div>
            </div>
        </div>
    )
}

export default Contact