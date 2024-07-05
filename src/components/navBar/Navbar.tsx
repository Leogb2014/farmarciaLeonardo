import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-full bg-gradient-to-r from-black to to-violet-900 text-white flex justify-center py-4'>
    <div className="container flex justify-between text-lg ">
    <div className='text-2xl font-extrabold uppercase'>Farmacia</div>
      <div className='flex gap-8'>
        <Link to={'/home'} className='hover:underline'>Home</Link>
        <Link to={'/categorias'} className='hover:underline'>Todas as Categorias</Link>
        <Link to={'/cadastrarCategoria'} className='hover:underline'>Cadastrar Categoria</Link>
      </div>
    </div>
  </div>

  )
}

export default Navbar