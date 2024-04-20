import React from 'react'

const OurTeam = (props) => {
  return (
    <div>
        <div className="team-photo">
        <img src={`./images/${props.image}`} alt="" />
        </div>
        <div className="about-team pt-4">
            <h2 className='m-0'>{props.name}</h2>
            <p className='m-0'>{props.post}</p>
            <div className="socialmedia d-flex flex-row align-items-center">
            <i class="bi bi-twitter "></i>
            <i class="bi bi-instagram "></i>
            <i class="fa-brands fa-linkedin-in "></i>
            </div>
        </div>
    </div>
  )
}

export default OurTeam