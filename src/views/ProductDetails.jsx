import React from 'react'

const ProductDetails = () => {
  return (
    <div className='produdt-details-container d-flex flex-row justify-content-center align-items-center'>
      <div className="product-view d-flex flex-row justify-content-center align-items-center  col-6 ">
        <div className="allside-view d-flex flex-column">
          <div className="view">
            <img src="./images/Gamepad-image-view1.png" alt="" />
          </div>
          <div className="view">
            <img src="./images/Gamepad-image-view2.png" alt="" />
          </div>
          <div className="view">
            <img src="./images/Gamepad-image-view3.png" alt="" />
          </div>
          <div className="view">
            <img src="./images/Gamepad-image-view4.png" alt="" />
          </div>
        </div>
        <div className="front-view d-flex flex-row justify-content-center align-items-center ">
          <img src="./images/Gamepad-image.png" alt="" />
        </div>
      </div>

      <div className="about-product col-4">
        <div className="rating-and-price">
          <h2>Havic HV G-92 Gamepad</h2>
          <div className="rating d-flex flex-row">
            <div className="rating-icon">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
            </div>
            <div className="reviews">
              <p>(150 Reviews)</p>
            </div>
            <div className="stock">
              <span className='fw-bold'>In Stock</span>
            </div>
          </div>
          <span className='fs-4 fw-bold'>$192.00</span>
          <p>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
        </div>
        <div className="color-size-rating d-flex flex-column ">

          <div className="colors d-flex flex-row  align-items-center">
           <div>
           <h4 className='m-0 p-0' >Colors :</h4>
           </div>
            <div className='color1 d-flex justify-content-center align-items-center'></div>
            <div className='color2 justify-content-center align-items-center '></div>
          </div>
          <div className="size-box d-flex  align-items-center ">
            <h4>Size :</h4>
            <div className="d-flex  size justify-content-center align-items-center "> <p className='m-0'>XS</p> </div>
            <div className="d-flex  size justify-content-center align-items-center "> <p className='m-0'>S</p> </div>
            <div className="d-flex  size justify-content-center align-items-center "> <p className='m-0'>M</p> </div>
            <div className="d-flex  size justify-content-center align-items-center"> <p className='m-0'>L</p> </div>
            <div className="d-flex  size justify-content-center align-items-center"> <p className='m-0'>XL</p> </div>
            
          </div>
          <div className='quantity d-flex' >
            <div className="title"><h4>Qty :</h4></div>
            <div className="quantity-box d-flex justify-content-center align-items-center">
            <i class="bi bi-plus-lg"></i>
            <p className='m-0'>1</p>
            <i class="bi bi-dash-lg"></i>
            </div>
          </div>
          
          <div className="row m-0 p-0">
            <button className='btn btn-danger border border-1 w-auto me-2'>BUY NOW</button>
            <button className='btn btn-transparent border border-1 w-auto ms-2'>ADD TO CART</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProductDetails