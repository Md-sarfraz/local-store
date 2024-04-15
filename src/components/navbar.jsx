import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="navbar-container row m-0 p-0 ">
            <div className="navbar-logo col-4 d-flex justify-content-center align-items-center">
                <img src="./images/logo.png" alt="" />
            </div>

            <div className="col-4 d-flex justify-content-center align-items-center">
                <ul className="navbar-list row m-0 p-0 justify-content-center list-unstyled ">
                    <Link to='/' className="text-decoration-none text-black w-auto">
                        <li className="w-auto">Home</li>
                    </Link>
                    <li className="w-auto">contact</li>
                    <Link to='/about' className="text-decoration-none text-black w-auto">

                        <li className="w-auto">About</li>
                    </Link>
                    <Link to='/signUp' className="text-decoration-none text-black w-auto">

                        <li className="w-auto signUp-dropdown">Sign Up</li>
                    </Link>

                </ul>
                <div className="dropdown">
                    <ul className="">
                        <Link to='/StoreRegistration' className="text-decoration-none text-black w-auto">

                            <li className="list-unstyled">Store Registration</li>
                        </Link>

                        <Link to='/UserRegistration' className="text-decoration-none text-black w-auto">

                        <li className="list-unstyled">User Registration</li>
                        </Link>

                       
                    </ul>
                </div>
            </div>
            <div className="left-navbar col-4 d-flex justify-content-center align-items-center  ">
                <div className="search-input">
                    < input type="text" placeholder="what are you looking for?" />
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <i class="fa-regular fa-heart"></i>
                <i class="fa-solid fa-cart-shopping"></i>
            </div>
        </div>
    )
}

export default Navbar;