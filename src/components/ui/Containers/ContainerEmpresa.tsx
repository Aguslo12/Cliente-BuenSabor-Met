import React, { useEffect, useState } from "react";
import { BackendMethods } from "../../../services/BackendClient";
import { IEmpresaShort } from "../../../types/ShortDtos/EmpresaShort";
import { CardEmpresa } from "../Cards/CardEmpresa";

const ContainerEmpresa = () => {
  const backend = new BackendMethods();

  const [empresas, SetEmpresas] = useState<IEmpresaShort[]>([]);

  useEffect(() => {
    const traerEmpresas = async () => {
      const res: IEmpresaShort[] = (await backend.getAll(
        `https://back-cliente.onrender.com/empresa/noEliminados/empresa/noEliminados`
      )) as IEmpresaShort[];
      SetEmpresas(res);
    };
    traerEmpresas();
  }, []);

  return (
    <div className="flex flex-row justify-center flex-wrap mt-4">
      {empresas.length <= 0 ? (
        <div className="bg-red-600 p-5 rounded">
          <p className="text-white text-3xl">No hay empresas disponibles</p>
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
      )}
    </div>
  );
};

export default ContainerEmpresa;
