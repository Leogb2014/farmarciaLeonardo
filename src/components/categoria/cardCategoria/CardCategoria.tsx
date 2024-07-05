import React from 'react'
import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'

interface CardCategoriaProps{
    categoria: Categoria
}

function CardCategoria({categoria}: CardCategoriaProps) {
  return (

    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between border-x-4 border-black'>
         <h3 className='py-2 px-6 bg-violet-950 text-white font-bold text-2xl'>Categoria</h3>
         <div>
         <p className=' bg-gray-700 p-8 text-3xl text-white font-bold  h-full'>{categoria.nome}</p>
         </div>
         <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.descricao}</p>
        <div className='flex'>
        <Link to={`/editarCategoria/${categoria.id}`} className='w-full text-slate-100 bg-blue-900 hover:bg-blue-500 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarCategoria/${categoria.id}`} className='text-slate-100 bg-red-800 hover:bg-red-400 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
        </div>

   </div>
    
  )
}

export default CardCategoria