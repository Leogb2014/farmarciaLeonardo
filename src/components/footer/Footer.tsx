import { FacebookLogo, InstagramLogo } from '@phosphor-icons/react'
import React from 'react'

function Footer() {
  return (
        <div className="flex justify-center bg-gradient-to-r from-black to to-violet-900 text-white">
            <div className="container flex flex-col items-center py-4 gap-4">
              <p className='text-xl font-bold'>Todos os direitos reservados:</p>
              <p className='text-lg'>Farmácia Leonardo</p>
              <p className='text-lg'>Acesse as nossa redes sociais</p>
              <div className='flex gap-2'>
              <InstagramLogo size={48} weight='bold' />
              <FacebookLogo size={48} weight='bold' />
              </div>
           </div>
        </div>
  )
}

export default Footer