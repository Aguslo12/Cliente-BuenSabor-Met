import React, { FC, useEffect, useState } from "react";
import { IPromosShort } from "../../../types/ShortDtos/PromoShort";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IDetallePedido } from "../../../types/DetallePedido";
import { BackendMethods } from "../../../services/BackendClient";
import { useCarrito } from "../../../hooks/useContext";
import { IPromos } from "../../../types/Promos";
import { BsFillCartFill } from "react-icons/bs";

export const CardPromocion: FC<IPromosShort> = ({
  denominacion,
  descripcionDescuento,
  detalles,
  eliminado,
  fechaDesde,
  fechaHasta,
  horaDesde,
  horaHasta,
  id,
  imagenes,
  precioPromocional,
  tipoPromocion,
  sucursales,
}) => {
  const { cart, addCarritoPromo, removeItemCarrito } = useCarrito();
  const [cantidad, setCantidad] = useState<number>(0);
  const [data, setData] = useState<IPromos | null>(null);
  const [isAvailable, setIsAvailable] = useState<boolean>(false);
  const backend = new BackendMethods();

  useEffect(() => {
    const traerDatos = async () => {
      const res: IPromos = (await backend.getById(
        `${import.meta.env.VITE_LOCAL}promocion/${id}`
      )) as IPromos;
      setData(res);
    };
    traerDatos();
  }, [id]);

  useEffect(() => {
    const itemInCart = cart.find((item) => item.promocion?.id === id);
    if (itemInCart) {
      setCantidad(itemInCart.cantidad);
    }
  }, [cart, id]);

  useEffect(() => {
    const checkAvailability = () => {
      const currentDate = new Date();
      const currentHour = currentDate.getHours();
      const currentMinute = currentDate.getMinutes();

      const [startHour, startMinute] = horaDesde.split(":").map(Number);
      const [endHour, endMinute] = horaHasta.split(":").map(Number);

      const currentTotalMinutes = currentHour * 60 + currentMinute;
      const startTotalMinutes = startHour * 60 + startMinute;
      const endTotalMinutes = endHour * 60 + endMinute;

      setIsAvailable(
        currentTotalMinutes >= startTotalMinutes &&
          currentTotalMinutes <= endTotalMinutes
      );
    };

    checkAvailability();
    const interval = setInterval(checkAvailability, 60000); // Revisa cada minuto

    return () => clearInterval(interval);
  }, [horaDesde, horaHasta]);

  const agregar = () => {
    if (data) {
      const detalle: IDetallePedido = {
        id: 0,
        eliminado: false,
        cantidad: 1,
        promocion: data,
        articulo: null,
        subTotal: data.precioPromocional,
      };
      addCarritoPromo(detalle);
      setCantidad((prevCantidad) => prevCantidad + 1);
    }
  };

  const eliminar = () => {
    if (data) {
      const detalle: IDetallePedido = {
        id: 0,
        cantidad,
        eliminado: false,
        promocion: data,
        articulo: null,
        subTotal: data.precioPromocional,
      };
      removeItemCarrito(detalle);
      if (cantidad > 0) {
        setCantidad((prevCantidad) => prevCantidad - 1);
      }
    }
  };

  return (
    <div className="card flex flex-col w-[166px] bg-base-100 h-min h-max-[400px] border-gray-300 border-[1px] rounded hover:border-black hover:border-[1px] hover:scale-105 cursor-pointer transition-all m-5">
      {imagenes !== undefined && imagenes.length >= 1 && (
        <figure className="rounded-r-none">
          <img
            src={imagenes[0].url}
            alt="promo"
            className="w-max rounded rounded-b-none h-full"
          />
        </figure>
      )}
      <div className="w-full flex-col">
        <div className="flex flex-col mt-2 justify-center text-balance w-full items-center">
          {detalles.map((detalle) => (
            <div className="text-black">
              {detalle.articulosManufacturados ? (
                <p>
                  {detalle.cantidad}-
                  {detalle.articulosManufacturados?.denominacion}
                </p>
              ) : (
                <p>
                  {detalle.cantidad}-{detalle.insumos?.denominacion}{" "}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="w-full flex-row flex items-center my-2 justify-around">
          <div className="w-full justify-around items-center text-lg flex">
            <p className="text-red-600 font-bold">${precioPromocional}</p>
            <button
              className="btn-link text-xs text-black"
              onClick={() =>
                document.getElementById(`my_modal_${id}`).showModal()
              }
            >
              Ver detalle
            </button>
          </div>
        </div>
        <div>
          <dialog id={`my_modal_${id}`} className="modal">
            <div className="modal-box max-w-[600px] h-min max-h-[680px]">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg card-title pb-5">
                {denominacion}
              </h3>
              <div className="flex flex-col">
                <img
                  src={imagenes[0].url}
                  alt={imagenes[0].name}
                  className="rounded-md max-h-[325px] h-full"
                />
                <div className="flex justify-center text-lg font-semibold pt-5 pb-3">
                  <p>Disponible hasta el día {fechaHasta}</p>
                </div>
                <div className="flex w-full justify-center flex-col">
                  <p className="text-center font-bold">Incluye</p>
                  <div className="flex flex-row justify-center space-x-2">
                    {detalles.map((detalle) => (
                      <div className="font-semibold text-red-600">
                        {detalle.articulosManufacturados ? (
                          <p>
                            {detalle.cantidad}-
                            {detalle.articulosManufacturados?.denominacion}
                          </p>
                        ) : (
                          <p>
                            {detalle.cantidad}-{detalle.insumos?.denominacion}{" "}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col font-bold w-full mt-3 space-y-3">
                  <p className="flex justify-center w-full">
                    {" "}
                    Total: <p className="text-red-600 pl-3">${precioPromocional}</p>
                  </p>
                  <div className="flex w-full justify-center flex-col">
                    <p className="text-center font-bold">
                      Disponible en la/s sucursal/es
                    </p>
                    <div className="flex flex-row justify-center space-x-2">
                      {sucursales.map((sucursal) => (
                        <div className="font-semibold text-red-600">
                          <p>
                            {sucursal.nombre} {sucursal.domicilio.calle}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};
