import React from "react";
import { ContainerArticulos } from "../../ui/Containers/ContainerArticulos";
import { useSucursalContext } from "../../../hooks/useContext";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IEmpresaShort } from "../../../types/ShortDtos/EmpresaShort";
import { ISucursal } from "../../../types/Sucursal";
import { IoSearchOutline } from "react-icons/io5";


const Articulos = () => {
  const { categoria, busqueda, cambiarBusqueda } = useSucursalContext();

  const storedSucursal = sessionStorage.getItem("sucursal");
  let sucursal: ISucursal | null = null;

  if (storedSucursal) {
    sucursal = JSON.parse(storedSucursal) as ISucursal;
  }

  const storedEmpresa = sessionStorage.getItem("empresa");
  let empresa: IEmpresaShort | null = null;

  if (storedEmpresa) {
    empresa = JSON.parse(storedEmpresa) as IEmpresaShort;
  }

  const handleChange = (event) => {
    cambiarBusqueda(event.target.value)
  }

  return (
    <div className="pt-20 flex flex-col">
      <div className="w-full flex justify-center">
        <Link
          to={`/${empresa?.id}/sucursales/categorias/${sucursal?.id}`}
          className="shadow-md rounded-md w-32 md:w-48 cursor-pointer text-sm md:text-base p-1 m-2 md:m-3 md:p-2 bg-red-600 border-red-950 border-[2px] text-white transition-all flex flex-row space-x-3 items-center justify-center hover:bg-slate-100 hover:text-red-500"
        >
          <FaChevronLeft />
          <p className="font-semibold">Atrás</p>
        </Link>
      </div>
      <div className="flex justify-center w-full pt-10">
        <div className="flex text-center items-center justify-center w-[400px]">
          <p className="h-1 bg-red-500 w-full"></p>
          <p className="text-2xl bg-white py-[1px] font-semibold flex p-5 text-black">
            {categoria}
          </p>
          <p className="items-center flex h-1 w-full bg-red-500"> </p>
        </div>
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
  );
};

export default Articulos;
