import React, { useEffect, useState } from "react";
import { BackendMethods } from "../../../services/BackendClient";
import { ICategoriaShort } from "../../../types/ShortDtos/CategoriaShort";
import { useAppSelector } from "../../../hooks/redux";
import { ISucursal } from "../../../types/Sucursal";
import CardCategoria from "../Cards/CardCategoria";

const ContainerCategoria = () => {
  const backend = new BackendMethods();
  const [loading, setLoading] = useState<boolean>(false);

  const sucursalSeleccionada = useAppSelector(
    (state) => state.GlobalSucursal.selected
  );

  const storedCliente = sessionStorage.getItem("sucursal");
  let sucursal: ISucursal | undefined = undefined;

  if (storedCliente) {
    sucursal = JSON.parse(storedCliente) as ISucursal;
  }

  const [categorias, setCategorias] = useState<ICategoriaShort[]>([]);

  useEffect(() => {
    const traerCategorias = async () => {
      const res: ICategoriaShort[] = (await backend.getAll(
        `${import.meta.env.VITE_LOCAL}sucursal/getCategorias/${sucursal?.id}`
      )) as ICategoriaShort[];
      setCategorias(res);
    };
    traerCategorias();
    setLoading(true);
  }, [sucursalSeleccionada]);

  return (
          <div className="flex flex-wrap items-start justify-center">
              {categorias.map((categoria) => (
                <CardCategoria 
                denominacion={categoria.denominacion}
                eliminado={categoria.eliminado}
                esInsumo={categoria.esInsumo}
                esPadre={categoria.esPadre}
                id={categoria.id}
                idSucursal={categoria.idSucursal}
                subCategorias={categoria.subCategorias}
                key={categoria.id}
                />
              ))}
          </div>

  );
};

export default ContainerCategoria;
