import React from "react";
import { useParams } from "react-router-dom";
import ContainerSubCategoria from "../../ui/Containers/ContainerSubCategoria";
import { ContainerArticulos } from "../../ui/Containers/ContainerArticulos";
import { useSucursalContext } from "../../../hooks/useContext";

const SubTienda = () => {
  const { idCategoria } = useParams();
  const { categoria,cambiarBusqueda } = useSucursalContext();

  const handleChange = (event) => {
    cambiarBusqueda(event.target.value)
  }

  return (
    <div className="flex h-auto justify-center w-full pt-24">
      <div className="flex flex-col">
        <div className="flex flex-col space-y-10 justify-center items-center w-full">
          <div>
            <p className="text-2xl text-center justify-center font-semibold flex p-2 text-black">
              Sub-Categorías
            </p>
            {/* <p className="text-3xl font-semibold flex p-5">Sucursales de {nombreEmpresa}</p> */}
            <div className="flex flex-row flex-wrap justify-center">
              <ContainerSubCategoria idCategoriaPadre={Number(idCategoria)} />
            </div>
          </div>
          <div className="flex text-center items-center justify-center w-full">
            <p className="h-1 bg-red-500 w-full"></p>
            <p className="text-2xl bg-white py-[1px] font-semibold flex p-5 text-black">
              {categoria}
            </p>
            <p className="items-center flex h-1 w-full bg-red-500"> </p>
          </div>
          <div className="flex justify-center mt-10">
        <div className="form-control w-[500px]">
          <input
            type="text"
            placeholder={`Buscar ${categoria}...`}
            className="input input-bordered rounded w-40 md:w-auto border-red-600 focus:border-red-600"
            defaultValue={""}
            onChange={handleChange}
          />
        </div>
      </div>
          <ContainerArticulos />
        </div>
      </div>
    </div>
  );
};

export default SubTienda;
