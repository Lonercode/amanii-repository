import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import AddResource from './pages/addResources';
import Nav from './pages/navbar';
import Resources from './pages/resources';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './pages/footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ToastContainer />
     <BrowserRouter>
     <Nav/>
     <div className="allContent">
          <Routes>
          <Route path='/' element={<Home/>} />
            <Route path='/resources' element={<Resources/>} />
            <Route path='/addResource' element={<AddResource />} />
            </Routes>
            </div>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
