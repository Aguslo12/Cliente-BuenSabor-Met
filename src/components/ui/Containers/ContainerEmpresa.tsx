import React, { useEffect, useState } from "react";
import { BackendMethods } from "../../../services/BackendClient";
import { IEmpresaShort } from "../../../types/ShortDtos/EmpresaShort";
import { CardEmpresa } from "../Cards/CardEmpresa";

const ContainerEmpresa = () => {
  const backend = new BackendMethods();

  const [empresas, SetEmpresas] = useState<IEmpresaShort[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const traerEmpresas = async () => {
      setLoading(true)
      const res: IEmpresaShort[] = (await backend.getAll(
        `${import.meta.env.VITE_LOCAL}empresa/noEliminados`
      )) as IEmpresaShort[];
      SetEmpresas(res);
      setLoading(false)
    };
    traerEmpresas();
  }, []);

  return (
    <div className="flex flex-row justify-center flex-wrap mt-4">
      {loading ? (
        <div className="h-[430px] w-min items-center flex pb-20 justify-center">
        <div className="flex items-center justify-center h-[500px] text-3xl">
          Cargando{" "}
          <span className="ml-5 loading loading-spinner loading-md"></span>
        </div>
      </div>
      ) : (
        empresas.length <= 0 ? (
          <div className="bg-red-600 p-2 md:p-5 mb-10 rounded">
            <p className="text-white text-xl md:text-3xl">No hay empresas disponibles</p>
          </div>
        ) : (
          empresas.map((empresa) => (
            <CardEmpresa
              key={empresa.id} // Use empresa.id as the unique key
              cuil={empresa.cuil}
              id={empresa.id}
              nombre={empresa.nombre}
              razonSocial={empresa.razonSocial}
              eliminado={empresa.eliminado}
              imagenes={empresa.imagenes}
              sucursales={empresa.sucursales}
            />
          ))
        )
      )}
    </div>
  );
};

export default ContainerEmpresa;
