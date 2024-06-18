import React from 'react'
import { ContainerArticulos } from '../../ui/Containers/ContainerArticulos'


const Articulos = () => {
    return (
        <div className='pt-14 flex flex-col'>
            <div className='flex justify-center'>
            <p className="text-3xl text-center font-semibold flex p-5 text-red-500">Artículos</p>
            </div>
            <ContainerArticulos />
        </div>
    )
}

export default Articulos