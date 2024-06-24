import React, { FC, useEffect, useState } from "react";
import { BackendMethods } from "../../../services/BackendClient";
import { ICategoriaShort } from "../../../types/ShortDtos/CategoriaShort";
import CardSubCategoria from "../Cards/CardSubCategoria";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ISucursal } from "../../../types/Sucursal";
import { IEmpresaShort } from "../../../types/ShortDtos/EmpresaShort";


interface ContainerSubCategoriaNum {
    idCategoriaPadre: number
}

const ContainerSubCategoria: FC<ContainerSubCategoriaNum> = ({idCategoriaPadre}) => {
  const backend = new BackendMethods();
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

  const [categoria, setCategoria] = useState<ICategoriaShort>();


  useEffect(() => {
    const traerCategorias = async () => {
      const res: ICategoriaShort = (await backend.getById(
        `https://back-cliente.onrender.com/empresa/noEliminados/categoria/${idCategoriaPadre}`
      )) as ICategoriaShort;
      setCategoria(res);
    };
    traerCategorias();
  }, [idCategoriaPadre]);

  return (
          <div className="flex flex-wrap items-start justify-start">
            <Link to={`/${empresa?.id}/sucursales/categorias/${sucursal?.id}`} className="shadow-md rounded-md cursor-pointer text-sm md:text-base p-1 px-2 m-2 md:m-3 md:p-2 bg-red-600 border-red-950 border-[2px] text-white transition-all flex flex-row space-x-3 items-center justify-center hover:bg-slate-100 hover:text-red-500">
            <FaChevronLeft /><p className="font-semibold">Atrás</p>
            </Link>
            {categoria?.subCategorias.map((subCategoria) => (
                <CardSubCategoria
                denominacion={subCategoria.denominacion}
                eliminado={subCategoria.eliminado}
                esInsumo={subCategoria.esInsumo}
                esPadre={subCategoria.esPadre}
                id={subCategoria.id}
                subCategorias={subCategoria.subCategorias}
                key={subCategoria.id}
                />
            ))}
            
          </div>
  );
};

export default ContainerSubCategoria;
