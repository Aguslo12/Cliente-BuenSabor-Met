import React from "react";
import { useParams } from "react-router-dom";
import ContainerSubCategoria from "../../ui/Containers/ContainerSubCategoria";
import { ContainerArticulos } from "../../ui/Containers/ContainerArticulos";

const SubTienda = () => {

    const {idCategoria} = useParams()

  return (
    <div className="flex h-auto justify-center w-screen pt-24">
      <div className="flex flex-col">
        <div className="flex flex-col justify-center items-center w-full">
        <p className="text-3xl text-start font-semibold flex p-5 text-red-500">Categorías</p>
          {/* <p className="text-3xl font-semibold flex p-5">Sucursales de {nombreEmpresa}</p> */}
          <div className="flex flex-row flex-wrap justify-center">
          <ContainerSubCategoria idCategoriaPadre={Number(idCategoria)}/>
          </div>
          <p className="text-3xl text-start font-semibold flex p-5 text-red-500">Artículos</p>
          <ContainerArticulos/>
        
        </div>
      </div>
    </div>
  );
};

export default SubTienda;