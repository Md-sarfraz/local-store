import React from 'react'

const CategoriesBox = (props) => {
  return (
    <div className='category-box d-flex flex-column justify-content-center align-items-center rounded-2 animate__animated animate__fadeInDown animate__delay-1s'>
       <i className={`${props.icon}  fs-1`}></i>
       <p className='p-0 m-0'>{props.title}</p>
    </div>
  )
}

export default CategoriesBox