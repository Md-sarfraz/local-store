import React from 'react'

const Aside = () => {
  return (
    <div className='area'>

        <div className='city-heading d-flex justify-content-center align-items-center pt-3'>
            <h3><i class="bi bi-geo-alt-fill"></i> Select Area</h3>
        </div> 

       <div className='city d-flex justify-content-center align-items-center rounded-2'>
        <p className='m-0 p-0' >Assam</p>
       </div>
       <div className='city d-flex justify-content-center align-items-center rounded-2'>
        <p className='m-0 p-0' >Maharashtra</p>
       </div>
       <div className='city d-flex justify-content-center align-items-center rounded-2'>
        <p className='m-0 p-0' >Punjab</p>
       </div>
       <div className='city d-flex justify-content-center align-items-center rounded-2'>
        <p className='m-0 p-0'>Gujrat</p>
       </div>
       <div className='city d-flex justify-content-center align-items-center rounded-2'>
        <p className='m-0 p-0' >Karnataka</p>
       </div>
       <div className='city d-flex justify-content-center align-items-center rounded-2'>
        <p className='m-0 p-0' >Odisha</p>
       </div>
      
    </div>
  )
}

export default Aside