import React, { ChangeEvent, useEffect, useState } from 'react'
import Categoria from '../../../models/Categoria'
import { atualizar, buscar, cadastrar } from '../../../services/Service';
import {useNavigate, useParams } from 'react-router-dom';
import { toastAlerta } from '../../../utils/toastAlerta';

function FormularioCategoria() {

   const[categoria, setCategoria] = useState<Categoria>({} as Categoria)

   const navigate = useNavigate()


   const {id} = useParams<{id: string}>()

   async function buscaPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria)
   }

   useEffect(() => {
    if(id !== undefined){
        buscaPorId(id)
    }
   }, [id])

   function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
        ...categoria,
        [e.target.name]: e.target.value
    })}


    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault()

        if (id !== undefined){
            try{
                await atualizar('/categorias', categoria, setCategoria)

                toastAlerta('Categoria Atualizada com sucesso', 'sucesso')
                retornar()

            }catch(error: any){
                toastAlerta("Erro ao atualizar Categoria", 'erro')
            }
        }else{
            try{
                await cadastrar('/categorias', categoria, setCategoria)

                toastAlerta("Categoria cadastrada com sucesso", 'sucesso')
                retornar()
            }catch(error: any){
                toastAlerta("Erro ao cadastrar categoria", 'erro')
            }
        }
    }

    function retornar() {
        navigate("/categorias")
      }

  return (
    <div className='container flex flex-col items-center justify-center mx-auto'>
    <h1 className='text-4xl text-center my-8'> 
        {id === undefined ? 'Cadastrar uma nova Categoria' : 'Editar Categoria'}</h1>

    <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className='flex flex-col gap-2'>
        <label htmlFor="nome">Nome</label>
            <input 
            type="text" 
             className='border-2 border-slate-700 rounded p-2' 
             name="nome"
             value={categoria.nome}
             onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}/>

            <label htmlFor="descricao">Descrição da Categoria</label>
            <input 
            type="text" 
             className='border-2 border-slate-700 rounded p-2' 
             name="descricao"
             value={categoria.descricao}
             onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}/>
        </div>
        <button className='rounded text-slate-100 bg-indigo-400
         hover:bg-indigo-800 w-1/2 py-2 mx-auto block' type='submit'>
            {id === undefined ? 'Cadastrar' : 'Editar' }</button>
    </form>
</div>
  )
}

export default FormularioCategoria