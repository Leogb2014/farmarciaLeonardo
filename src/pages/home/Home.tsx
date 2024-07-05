import React from 'react'
import ListaCategorias from '../../components/categoria/listaCategorias/ListaCategorias';
import FormularioCategoria from '../../components/categoria/formularioCategoria/FormularioCategoria';

function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-black to to-violet-900 flex justify-center ">
      <div className='container text-white'>
        <div className="flex flex-col gap-4 items-center justify-center py-4 my-20">
          <h2 className='text-5xl font-bold'>Farmacia compre já!</h2>
          <p className='text-xl'>Qualidade e variedade em produtos</p>
        </div>
        </div>
        </div>

    <div>
        <ListaCategorias/>
        
    </div>
    <div>
        <FormularioCategoria/>

    </div>
    </>
    
  )
}

export default Home