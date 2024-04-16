import React from 'react'
import { Link } from "react-router-dom";
const ProductItmes = (props) => {
    return (
        <div>
            <div className='d-flex product-box justify-content-center align-items-center rounded-1 '>
                <div className=' product-image'>
                    <Link to='/ProductView' className="text-decoration-none text-black w-auto" data-bs-toggle="dropdown" aria-expanded="false">

                    <img src={`./images/${props.image}`} alt="" />
                    </Link>
                    
                </div>
                <div className='product-views-like d-flex flex-column'>
                    <div className='product-like rounded-5 justify-content-center d-flex align-items-center'>
                        <i class="fa-regular fa-heart"></i>
                    </div >
                    <div className='product-views rounded-5 justify-content-center d-flex align-items-center '>

                        <Link to='/ProductView' className="text-decoration-none text-black w-auto" data-bs-toggle="dropdown" aria-expanded="false">

                            <i class="bi bi-eye"></i>
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <p className='m-0 p-0 fw-bold'>{props.productName}</p>
                <div className="star-icon ">
                    <span>${props.price}</span>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <p>(345)</p>
                </div>
            </div>
        </div>
    )
}

export default ProductItmes