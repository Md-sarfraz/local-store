import { Routes, Route } from 'react-router-dom';
import Home from './views/home';
import Navbar from './components/navbar';
import Footer from './components/footer';
import About from './views/about';
import './assets/style.css'
import UserRegistration from './views/UserRegistration';
import SignUp from './views/signUp';
import StoreRegistration from './views/StoreRegistration';
import Login from './views/Login';
import ProductDetails from './views/ProductDetails';
import Contact from './views/contact';

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Dashboard from './views/UserDashboard/Dashboard';
import Cart from './views/Cart';
function App() {


  return (
    <div className="row m-0 p-0">
      <Navbar />
      <Routes>
      <Route path='/ProductDetails' element={<ProductDetails/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/UserRegistration' element={<UserRegistration/>} />
      <Route path='/StoreRegistration' element={<StoreRegistration />} />
      {/* <Route path='/signUp' element={<SignUp />} /> */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/user' element={<Dashboard />} />
        <Route path='/Cart' element={<Cart />} />
        
      </Routes>
      <Footer />
      <ToastContainer/>
    </div>
  )
}

export default App
