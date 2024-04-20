import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <div className="navbar-container row m-0 p-0 d-none d-lg-flex ">
                <div className="navbar-logo col-4 d-flex justify-content-center align-items-center">
                    <img src="./images/logo.png" alt="" />
                </div>

                <div className="col-4 d-flex justify-content-center align-items-center">
                    <ul className="navbar-list row m-0 p-0 justify-content-center list-unstyled ">
                        <Link to='/' className="text-decoration-none text-black w-auto">
                            <li className="w-auto">Home</li>
                        </Link>

                        <Link to='/Contact' className="text-decoration-none text-black w-auto">
                            <li className="w-auto">Contact</li>
                        </Link>
                        <Link to='/About' className="text-decoration-none text-black w-auto">

                            <li className="w-auto">About</li>
                        </Link>
                        <Link to='/signUp' className="text-decoration-none text-black w-auto" data-bs-toggle="dropdown" aria-expanded="false">

                            <li className="w-auto signUp-dropdown">Sign Up</li>
                        </Link>
                        <div class="dropdown">


                            {/* <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown button
                        </button> */}
                            <ul className="dropdown-menu">
                                <Link to='/StoreRegistration' className="text-decoration-none text-black w-auto dropdown-item">

                                    <li className="list-unstyled">Store Registration</li>
                                </Link>

                                <Link to='/UserRegistration' className="text-decoration-none text-black w-auto dropdown-item">

                                    <li className="list-unstyled">User Registration</li>
                                </Link>


                            </ul>
                            {/* 
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul> */}
                        </div>

                    </ul>

                </div>
                <div className="left-navbar col-4 d-flex justify-content-center align-items-center  ">
                    <div className="search-input">
                        < input type="text" placeholder="what are you looking for?" />
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <i class="fa-regular fa-heart"></i>
                    <Link to='/Cart' className=" text-black w-auto">
                    <i class="fa-solid fa-cart-shopping"></i>
                        </Link>
                   
                </div>

            </div>

            <div className="row m-0 p-0 d-flex d-lg-none ">
                <a class="" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                <i className="bi bi-list"></i>
                </a>
                
            </div>


            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div>
                        Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                    </div>
                    <div class="dropdown mt-3">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                            Dropdown button
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;