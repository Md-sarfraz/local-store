import CountdownTimer from "../components/countdown-timer";
import ProductItmes from "../components/product-itmes";
import Button from "../components/Button";
import CategoriesBox from "../components/categoriesBox";
import Heading from "../components/heading";
import Aside from "../components/Aside";
import Slider from "../components/Slider";
import StoreRegistrationForm from "../components/Form1";
const Home = () => {
    return (
        <>
            <div className="home-container">
                <div className="sidebar-slider row">
                    <div className="sidebar">
                        <Aside/>
                    </div>
                    <div className="owlcrausel-slider row m-0 p-0 overflow-hidden d-flex justify-content-start align-items-center">
                    <Slider/>
                    </div>
                </div>
                <div className="pt-5">
                    <Heading />
                </div>
                {/* <div className="todays-product d-flex  gap-3 justify-content-start align-items-center">
                    <div className="left-border">

                    </div>
                    <div className="heading">
                        <p className="m-0 p-0 ">Today's</p>
                    </div>
                </div> */}

                <div className="title-timer-button d-flex align-items-center ">
                    <div className="title">
                        <h3>Trending Products</h3>
                    </div>
                    <div className="countdown-timer fs-2 fw-bold">
                        <CountdownTimer targetDate="2024-05-01T00:00:00" />
                    </div>
                </div>
                <div className="product-container ">
                    <div className="product-itmes d-flex flex-wrap justify-content-center ">
                        <ProductItmes image='book.png' productName='Breed Dry Dog Food' price='100' />
                        <ProductItmes image='laptop.png' productName='AK-900 Wired Keyboard' price='199' />
                        <ProductItmes image='monitor.png' productName='IPS LCD Gaming Monitor' price='370' />
                        <ProductItmes image='shoes.png' productName='Jr. Zoom Soccer Cleats' price='99' />
                        <ProductItmes image='joystick.png' productName='GP11 Shooter USB Gamepad' price='101' />
                        <ProductItmes image='camera.png' productName='CANON EOS DSLR Camera' price='999' />
                        <ProductItmes image='car.png' productName='Kids Electric Car' price='39' />
                        <ProductItmes image='jacket.png' productName='Quilted Satin Jacket' price='499' />
                        <ProductItmes image='keword.png' productName='AK-900 Wired Keyboard' price='299' />
                        <ProductItmes image='chair.png' productName='S-Series Comfort Chair ' price='599' />
                    </div>
                    <div className="all-Product-btn ">
                        <Button />
                    </div>
                </div>

                <div className="categories-container">
                    <div className="heading2">
                    <Heading />
                    <h2>Browse By Categories</h2>
                    </div>
                    <div className="categories d-flex flex-row justify-content-center">
                        <CategoriesBox icon='bi-phone' title='Phones' />
                        <CategoriesBox icon='bi-laptop' title='Computers'/>
                        <CategoriesBox icon='bi-smartwatch' title='Smartwatches'/>
                        <CategoriesBox icon='bi-camera' title='Camera'/>
                        <CategoriesBox icon='bi-headset' title='Headset'/>
                        <CategoriesBox icon='bi-dice-6' title='Gaming'/>
                        
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Home;