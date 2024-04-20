import React from 'react'

const Service = (props) => {
  return (
    <div className='service d-flex flex-column align-items-center'>
      <img src={`./images/${props.image}`} alt="" />
      <h4 className='pt-4'>{props.title}</h4>
        <p>{props.availiable}</p>
    </div>
  )
}

export default Service