import './App.css'
import Navbar from './components/navBar/Navbar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormularioCategoria from './components/categoria/formularioCategoria/FormularioCategoria';

function App() {

  return (
    <>
    <BrowserRouter>
        <Navbar/>
        <div className='min-h-[80vh]'>
          <Routes> 
             <Route path='/home' element={<Home/>}/>
              <Route path='editarCategoria/:id' element={<FormularioCategoria/>}/>
          </Routes>
          </div>
        <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
