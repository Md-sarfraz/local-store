import React from 'react'

const CartProduct = () => {
    return (
        <div className='cart-product d-flex justify-content-center align-items-center shadow-none p-3 mb-5 bg-light rounded col-8' >
            <div className="productname-and-image d-flex col-3 justify-content-center align-items-center">
                <div className="image me-2">
                <img src="./images/Gamepad-image.png" style={{width:"60px",backgroundColor:"#F5F5F5"}}  alt="" />
                </div>
                <div className="product-name ms-2">
                    <p className='m-0 p-0'>MI Gamepad</p>
                </div>
            </div>
            <div className="product-price  col-3 d-flex justify-content-center align-items-center">
                <p className='m-0 p-0'>$999</p>
            </div>
            <div className="quantity col-3 d-flex justify-content-center align-items-center">
                <select name="" id="" style={{width:"60px",height:"40px"}}>
                    <option value="0">1</option>
                    <option value="1">2</option>
                    <option value="2">3</option>
                    <option value="3">4</option>
                    <option value="4">5</option>
                    <option value="5">6</option>
                </select>
            </div>
            <div className="subtotal col-3 d-flex justify-content-center align-items-center">
                <p className='m-0 p-0'>$999</p>
            </div>
        </div>
    )
}

export default CartProduct