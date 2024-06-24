import { useEffect, useState } from "react";
import { IArticuloManufacturado } from "../../../types/ArticuloManufacturado";
import { BackendMethods } from "../../../services/BackendClient";
import CardArticulo from "../Cards/CardArticulo";
import { useAppSelector } from "../../../hooks/redux";
import { IArticuloInsumo } from "../../../types/ArticuloInsumo";
import CardArticuloInsumo from "../Cards/CardArticuloInsumo";
import { useSucursalContext } from "../../../hooks/useContext";

export const ContainerArticulos = () => {
  const backend = new BackendMethods();

  const { busqueda } = useSucursalContext();

  const [articulosManufacturados, setArticulosManufacturados] = useState<
    IArticuloManufacturado[]
  >([]);
  const [articulosInsumos, setArticulosInsumos] = useState<IArticuloInsumo[]>(
    []
  );
  const [loading, setLoading] = useState<boolean>(false);

  const idCategoria = useAppSelector((state) => state.GlobalCategory.selected);

  useEffect(() => {
    const traerArticulos = async () => {
      setLoading(true);

      const res: IArticuloManufacturado[] = (await backend.getAll(
        `https://back-cliente.onrender.com/empresa/noEliminados/ArticuloManufacturado/noEliminados`
      )) as IArticuloManufacturado[];

      const ress: IArticuloInsumo[] = (await backend.getAll(
        `https://back-cliente.onrender.com/empresa/noEliminados/ArticuloInsumo/noEliminados`
      )) as IArticuloInsumo[];

      const articulosInsFiltrados: IArticuloInsumo[] = ress.filter(
        (articulo) => articulo.categoria.id === idCategoria
      );

      setArticulosInsumos(
        articulosInsFiltrados.filter(
          (articulo) =>
            !articulo.esParaElaborar && articulo.denominacion.toLowerCase().includes(busqueda.toLowerCase())
        )
      );

      const articulosFiltrados: IArticuloManufacturado[] = res.filter(
        (articulo) => articulo.categoria.id === idCategoria
      );

      setArticulosManufacturados(
        articulosFiltrados.filter(
          (articulo) => articulo.denominacion.toLowerCase().includes(busqueda.toLowerCase())
        )
      );
      setLoading(false);
    };
    traerArticulos();
  }, [idCategoria, busqueda]);

  return (
    <div className="pt-2">
      <div className="flex flex-wrap justify-center items-center mt-3 md:p-5 ">
        {loading ? (
          <div className="h-[430px] w-min items-center flex pb-20 justify-center">
            <div className="flex items-center justify-center h-[500px] text-3xl">
              Cargando{" "}
              <span className="ml-5 loading loading-spinner loading-md"></span>
            </div>
          </div>
        ) : (
          <>
            {articulosInsumos.length <= 0 &&
            articulosManufacturados.length <= 0 ? (
              <div className="h-[100px] md:h-[430px] md:w-[450px] items-center flex md:pb-20 justify-center">
                <div className="text-base  md:text-4xl bg-red-600 text-white rounded p-5">
                  No hay productos disponibles
                </div>
              </div>
            ) : (
              <>
                {articulosInsumos.map((articulo: IArticuloInsumo) => (
                  <CardArticuloInsumo
                    key={articulo.id}
                    denominacion={articulo.denominacion}
                    eliminado={articulo.eliminado}
                    esParaElaborar={articulo.esParaElaborar}
                    id={articulo.id}
                    categoria={articulo.categoria}
                    imagenes={articulo.imagenes}
                    precioCompra={articulo.precioCompra}
                    precioVenta={articulo.precioVenta}
                    stockActual={articulo.stockActual}
                    stockMaximo={articulo.stockMaximo}
                    stockMinimo={articulo.stockMinimo}
                    unidadMedida={articulo.unidadMedida}
                  />
                ))}
                {articulosManufacturados.map(
                  (articulo: IArticuloManufacturado) => (
                    <CardArticulo
                      key={articulo.id}
                      articuloManufacturadoDetalles={
                        articulo.articuloManufacturadoDetalles
                      }
                      denominacion={articulo.denominacion}
                      descripcion={articulo.descripcion}
                      eliminado={articulo.eliminado}
                      id={articulo.id}
                      imagenes={articulo.imagenes}
                      precioVenta={articulo.precioVenta}
                      preparacion={articulo.preparacion}
                      stock={articulo.stock}
                      tiempoEstimadoMinutos={articulo.tiempoEstimadoMinutos}
                      unidadMedida={articulo.unidadMedida}
                      categoria={articulo.categoria}
                    />
                  )
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};
