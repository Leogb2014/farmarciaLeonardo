import React, { useState } from 'react'
import Categoria from '../../../models/Categoria'
import { useNavigate, useParams } from 'react-router-dom'
import { buscar, deletar } from '../../../services/Service'

function DeletarCategoria() {

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    const{id} = useParams<{id: string}>()

    const navigate = useNavigate();

    
   async function buscaPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria)
   }

   async function deletarCategoria(){
    try{
        await deletar(`/categorias/${id}`)
    }catch(Error: any){
        alert("Erro ao deletar categoria")
    }
   }

   function retornar() {
    navigate("/temas")
  }



  return (
    <div className='container w-1/3 mx-auto'>
    <h1 className='text-4xl text-center my-4'>Deletar tema</h1>

    <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar o tema a seguir?</p>

    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
    <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>Categoria</header>
    <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.descricao}</p>
    <div className="flex">
      <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>Não</button>
      <button className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center' onClick={deletarCategoria} >
        Sim
      </button>
    </div>
  </div>
  </div>
  )
}

export default DeletarCategoria