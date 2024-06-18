import React, { FC, useEffect, useState } from "react";
import { BackendMethods } from "../../../services/BackendClient";
import { ICategoriaShort } from "../../../types/ShortDtos/CategoriaShort";
import CardSubCategoria from "../Cards/CardSubCategoria";

interface ContainerSubCategoriaNum {
    idCategoriaPadre: number
}

const ContainerSubCategoria: FC<ContainerSubCategoriaNum> = ({idCategoriaPadre}) => {
  const backend = new BackendMethods();
  const [loading, setLoading] = useState<boolean>(false);

  const [categoria, setCategoria] = useState<ICategoriaShort>();


  useEffect(() => {
    const traerCategorias = async () => {
      const res: ICategoriaShort = (await backend.getById(
        `${import.meta.env.VITE_LOCAL}categoria/${idCategoriaPadre}`
      )) as ICategoriaShort;
      setCategoria(res);
    };
    traerCategorias();
    setLoading(true);
  }, [idCategoriaPadre]);

  return (
          <div className="flex flex-wrap items-start justify-start">
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
