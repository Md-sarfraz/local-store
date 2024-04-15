
const Footer=()=>{
    return(
        <>
        <div className="footer-container row flex-row justify-content-center">
           <div className="exclusive-part  d-flex  flex-column col-2 justify-content-center">
            <h4>Exclusive</h4>
            <h5>Subscriber</h5>
            <p>Get 10% of your first order</p>
            <div className="footer-email-input">
            <input type="text" placeholder="Enter your email" />
            <i class="bi bi-send"></i>
            </div>
           </div>
          

           <div className="support-part  d-flex  flex-column col-2 justify-content-center">
            <h5>Support</h5>
            <p>111 Bijay sarani,Dhaka</p>
            <p>DH 1515,Bangladesh</p>
            <p>exclusive@gmail.com</p>
            <p>+8015-8888-9999</p>
           </div>

           <div className="Account-part  d-flex  flex-column col-2 justify-content-center">
            <h5>Account</h5>
            <p>MY Account</p>
            <p>Login\Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
           </div>

           <div className="quick-link-part  d-flex  flex-column col-2 justify-content-center">
            <h5>Quick Link</h5>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
           </div>


           <div className="Download-part  d-flex flex-column col-2 justify-content-center">
            <h5>Download App</h5>
            <span>Save $3 With App New User Only</span>
            <div className="qrcode d-flex">
            <img src="./images/qrcode.png" alt="" />
            <div className="googleplay-Appstore">
                <div className="google-play d-flex flex-row align-items-center">
                    <div className="playstore-icon">
                    <i class="fa-brands fa-google-play"></i>
                    </div>
                    <div className="play-store-title">
                        <p className="m-0 p-0">Get It On</p>
                        <h3 className="m-0 p-0">Google Play</h3>
                    </div>
                </div>

                <div className="App-store d-flex flex-row align-items-center">
                    <div className="Appstore-icon">
                    <i class="fa-brands fa-apple"></i>
                    </div>
                    <div className="play-store-title">
                        <p className="m-0 p-0">Download on the</p>
                        <h3 m-0 p-0>App Store</h3>
                    </div>
                </div>
            </div>
            </div>
            <div className="social-media-icon d-flex flex-row ">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin-in"></i>
            </div>
           </div>
           </div>
        </>
    )
}
export default Footer;