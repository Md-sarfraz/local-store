import React from 'react'
import CartProduct from '../components/CartProduct'

const Cart = () => {
    return (
        <div className='' >
           <div className='d-flex flex-column justify-conten-center align-items-center'>
           <div className="prodcuct-heading d-flex justify-content-center align-items-center col-10">
                <div className='col-3 d-flex justify-content-center align-items-center'>
                    <p className='fw-bold'>Product</p>
                </div>
                <div className='col-3 d-flex justify-content-center align-items-center'>
                    <p className='fw-bold'>Price</p>
                </div >
                <div className='col-3 d-flex justify-content-center align-items-center'>
                    <p className='fw-bold'>Quantity</p>
                </div>
                <div className='col-3 d-flex justify-content-center align-items-center'>
                    <p className='fw-bold'>Subtotal</p>
                </div>
            </div>
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <div>
                <div className="return-to-shop d-flex col-10" style={{gap:"500px"}}>
                    <button className='bg-transparent border-0' style={{width:"200px",height:"50px"}}>Return To Shop</button>
                    <button className='bg-transparent border-0' style={{width:"200px",height:"50px"}}>Upadte Cart</button>
                </div>
            </div>
            

           </div>
           <div className="coupon d-flex pt-4 "style={{gap:"20px",paddingLeft:"260px" }}>
                <input type="text"placeholder='Coupen Code' style={{width:"300px",height:"50px"}}/>
                <button className=' bg-danger text-white border-0 ' style={{width:"200px",height:"50px"}}>Apply coupon</button>
            </div>
  <div className='row d-flex flex-column align-items-end col-11 pb-5'>
  <div className="cart-total row col-3 border">
    <div className="subtotal d-flex justify-content-between border-bottom">
        <p className='fw-bold'>Subtotal</p>
        <p className='fw-bold'>$1299</p>
    </div>
    <div className="d-flex shipping justify-content-between border-bottom">
        <p className='fw-bold'>Shipping</p>
        <p className='fw-bold'>free</p>
    </div>
    <div className="d-flex Total justify-content-between">
        <p className='fw-bold'>Total</p>
        <p className='fw-bold'>$1299</p>
    </div>
    <div className="proceed-to-pay d-flex justify-content-center align-itmes-center">
        <button className='bg-danger text-light border-0 rounded-2' style={{width:"200px",height:"45px"}}>Proceed to Pay</button>
    </div>
</div>
  </div>

        </div>
    )
}

export default Cart