import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/navBar/Navbar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormularioCategoria from './components/categoria/formularioCategoria/FormularioCategoria';
import ListaCategorias from './components/categoria/listaCategorias/ListaCategorias';
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
    <ToastContainer />
    <BrowserRouter>
        <Navbar/>
        <div className='min-h-[80vh]'>
          <Routes> 
            <Route path='/home' element={<Home/>}/>
            <Route path='/categorias' element={<ListaCategorias/>}/>
            <Route path='/cadastrarCategoria' element={<FormularioCategoria/>}/>
            <Route path='editarCategoria/:id' element={<FormularioCategoria/>}/>
            <Route path='deletarCategoria/:id' element={<DeletarCategoria/>}/>
          </Routes>
          </div>
        <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
