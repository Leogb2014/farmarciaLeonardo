import './App.css'
import Navbar from './components/navBar/Navbar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
    <Navbar/>
    <div className='min-h-[80vh]'>
    <Home/>
    </div>
   <Footer/>
    </>
  )
}

export default App
