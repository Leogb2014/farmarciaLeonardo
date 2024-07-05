import React from 'react'

function Navbar() {
  return (
    <div className='w-full bg-gradient-to-r from-black to to-violet-900 text-white flex justify-center py-4'>
    <div className="container flex justify-between text-lg">
    <div className='text-2xl font-extrabold uppercase'>Farmacia</div>
      <div className='flex gap-4'>
        <div className='hover:'>Home</div>
        <div className='hover:underline'>Categorias</div>
        <div className='hover:underline'>Cadastrar Categoria</div>
      </div>
    </div>
  </div>

  )
}

export default Navbar