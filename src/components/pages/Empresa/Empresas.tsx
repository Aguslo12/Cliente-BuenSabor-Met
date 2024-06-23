import React from 'react'
import ContainerEmpresa from '../../ui/Containers/ContainerEmpresa'

export const Empresas = () => {
  return (
    <div className='flex w-full justify-center'>
        <div className='flex justify-center flex-col items-center'>
        <div className='flex bg-red-600 top-36 w-[250px] w-max-[800px] items-center rounded justify-center flex-row p-3 mt-28'>
            <p className='text-white flex text-2xl'>Empresas afiliadas</p>
        </div>
        <ContainerEmpresa/>
        </div>
        
        
    </div>
  )
}
