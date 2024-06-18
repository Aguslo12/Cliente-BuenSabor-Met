import { FC, useEffect, useState } from "react";
import { IArticuloInsumo } from "../../../types/ArticuloInsumo";
import { useCarrito } from "../../../hooks/useContext";
import { BackendMethods } from "../../../services/BackendClient";
import { FaMinus, FaPlus } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";
import { IDetallePedido } from "../../../types/DetallePedido";
import { Carousel } from "react-responsive-carousel";

const CardArticuloInsumo: FC<IArticuloInsumo> = ({
  id,
  denominacion,
  imagenes,
  precioVenta,
  esParaElaborar,
  stockActual,
  categoria
}) => {
  return (
    <div>
      {esParaElaborar ? (
        <div></div>
      ) : (
        <div className="card w-80 bg-base-100 h-[330px] rounded-md border shadow hover:scale-105 cursor-pointer transition-all m-5"
        >
          {imagenes !== undefined && imagenes.length >= 1 && (
        <figure>
          <img src={imagenes[0].url} alt={`Foto de ${denominacion}`} className="w-full" />
          <div className="absolute top-0 right-0 bg-red-600 rounded-t-none rounded-r-none text-white p-2 rounded-md cursor-pointer hover:bg-opacity-90 transition-all">
            {categoria.denominacion}
          </div>
        </figure>
      )}
      <div className="">
        <div className="flex flex-col mt-2 justify-center items-center">
          <h2 className="card-title text-3xl">{denominacion}</h2>
          <p className="text-red-600 font-bold">${precioVenta}</p>
        </div>
      </div>
      <div className="flex w-full justify-center p-2">
        <div
          className=" bg-red-600 text-white p-2 rounded-md cursor-pointer hover:bg-opacity-90 transition-all"
          onClick={() => document.getElementById(`my_modal_${id}`).showModal()}
        >
          Ver detalle
        </div>
      </div>
        </div>
      )}
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
            <Carousel showThumbs={false} dynamicHeight={true}>
                {imagenes.map((imagen, index) => (
                  <div key={index}>
                    <img
                      src={imagen.url}
                      alt={imagen.name}
                      className="rounded-md max-h-[500px] h-full"
                    />
                  </div>
                ))}
              </Carousel>
              <div className="flex flex-col font-bold w-full mt-3 space-y-3">
                <p className="flex justify-between w-full">
                  {" "}
                  Precio: <p className="text-red-600">$ {precioVenta}</p>
                </p>
                <p className="flex justify-between w-full">
                  Disponibles:{" "}
                  <p className="text-red-600"> {stockActual}</p>
                </p>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default CardArticuloInsumo;
