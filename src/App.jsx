import {Routes,Route} from 'react-router-dom';
import Home from './views/home';
import Navbar from './components/navbar';
import Footer from './components/footer';
import About from './views/about';
import './assets/style.css'
function App() {


  return (
    <div className="row m-0 p-0">
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      <Footer/>
    </div>
  )
}

export default App
