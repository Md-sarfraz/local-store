import { Routes, Route } from 'react-router-dom';
import Home from './views/home';
import Navbar from './components/navbar';
import Footer from './components/footer';
import About from './views/about';
import './assets/style.css'
import UserRegistration from './views/UserRegistration';
import SignUp from './views/signUp';
import StoreRegistration from './views/StoreRegistration';
function App() {


  return (
    <div className="row m-0 p-0">
      <Navbar />
      <Routes>
      <Route path='/UserRegistration' element={<UserRegistration/>} />
      <Route path='/StoreRegistration' element={<StoreRegistration />} />
      {/* <Route path='/signUp' element={<SignUp />} /> */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        
      </Routes>
      <Footer />
    </div>
  )
}

export default App
