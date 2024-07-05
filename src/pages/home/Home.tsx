import React from 'react'
import { Car, Gift, House} from '@phosphor-icons/react';

function Home() {
  return (
    <>
    <div className="bg-gradient-to-r from-black to to-violet-900 flex justify-center ">
      <div className='container text-white'>
        <div className="flex flex-col gap-4 items-center justify-center py-4 my-20">
          <h2 className='text-5xl font-bold'>Farmacia compre já!</h2>
          <p className='text-xl'>Qualidade e variedade em produtos </p>
          <div className='flex '>
          <Gift size={48}/> <House  size={48}/>
          </div>
        </div>
       </div>
    </div>

    <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between border-x-4 border-black'>
         <h3 className='py-2 px-6 bg-violet-950 text-white font-bold text-2xl'>Poque comprar conosco?</h3>
         <div>
         <p className=' bg-gray-700 p-8 text-3xl text-white font-bold  h-full'>Oferecemos 10 <span className='text-4xl font-extrabold text-green-400'>%</span> de desconto na primeira compra</p>
         </div>
         <div>
         <p className='p-8 text-3xl bg-slate-200 h-full'>Frete gratis <Car/> </p>
        
         </div>
        

   </div>
   </div>
   </div>
   </div>



    </>
    
  )
}

export default Home