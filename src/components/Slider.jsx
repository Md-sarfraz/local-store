import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import React from 'react';

const Slider = () => {
    return (
        <div className='row m-0 p-0'>
            <OwlCarousel className='owl-theme' loop margin={10} nav items={1} autoplay loop autoplayTimeout={3000} autoplayHoverPause>
                <div className='item d-flex justify-content-center '>
                    <img src="./images/home-slider-img1.png" style={{ height: '300px', width: '80%' }} />
                </div>
                <div className='item d-flex justify-content-center '>
                    <img src="./images/home-slider-img2.webp" style={{ height: '300px', width: '80%' }} />
                </div>
                <div className='item d-flex justify-content-center '>
                    <img src="./images/home-slider-img3.jpg" style={{ height: '300px', width: '80%' }} />
                </div>
                <div className='item d-flex justify-content-center '>
                    <img src="./images/home-slider-img4.jpeg" style={{ height: '300px', width: '80%' }} />
                </div>
                <div className='item d-flex justify-content-center '>
                    <img src="./images/home-slider-img5.jpeg" style={{ height: '300px', width: '80%' }} />
                </div>
                <div className='item d-flex justify-content-center '>
                    <img src="./images/home-slider-img6.jpeg" style={{ height: '300px', width: '80%' }} />
                </div>
                <div className='item d-flex justify-content-center '>
                    <img src="./images/home-slider-img7.jpeg" style={{ height: '300px', width: '80%' }} />
                </div>
                <div className='item d-flex justify-content-center '>
                    <img src="./images/home-slider-img8.jpeg" style={{ height: '300px', width: '80%' }} />
                </div>
            </OwlCarousel>
        </div>
    );
};

export default Slider;
