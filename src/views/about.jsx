import React from 'react'
import AboutService from '../components/about-service'
import OurTeam from '../components/OurTeam'
import Service from '../components/Service'
const About = () => {
  return (
    <div className='about-section'>
        <div className="our-story d-flex justify-content-center align-items-center pt-5 ">
            <div className="our-story-content col-6  ">
                <h1>Our Story</h1>
                <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active
                     presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions,
                      Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                      <p>
                      Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse 
                      assotment in categories ranging  from consumer.
                      </p>
            </div>
            <div className="our-story-img col-6 d-flex justify-content-left align-items-center">
                <img src="./images/our-story-img.png" alt="" />
            </div>
        </div>
        <div className=" about-service-container d-flex flex-row justify-content-center align-items-center ">
            <AboutService/>
            <AboutService/>
            <AboutService/>
            <AboutService/>
        </div>
        <div className="our-team-container d-flex justify-content-center align-items-center ">
            <OurTeam image="team3.png" name="Tom Cruise" post="Founder & Chairman"/>
            <OurTeam image="team2.png" name="Emma Watson" post="Managing Director"/>
            <OurTeam image="team1.png" name="Will Smith" post="Product Designer"/>
        </div>
        <div className="service-container d-flex flex-row justify-content-center align-items-center">
            <Service image="Services (4).png" title="FREE AND FAST DELIVERY" availiable="Free delivery for all orders over $140"/>
            <Service image="Services (5).png" title="24/7 CUSTOMER SERVICE" availiable="Friendly 24/7 customer support"/>
            <Service image="Services (6).png" title="MONEY BACK GUARANTEE" availiable="We reurn money within 30 days"/>
        </div>
    </div>
  )
}

export default About