import React, { FC } from "react";
import { IArticuloManufacturado } from "../../../types/ArticuloManufacturado";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CardArticulo: FC<IArticuloManufacturado> = ({
  id,
  denominacion,
  imagenes,
  precioVenta,
  tiempoEstimadoMinutos,
  descripcion,
  preparacion
}) => {
  return (
    <div className="card w-[192px] bg-base-100 h-min rounded border-gray-200 border-[1px] hover:border-black hover:scale-105 cursor-pointer transition-all m-5">
      {imagenes !== undefined && imagenes.length >= 1 && (
        <figure>
          <img
            src={imagenes[0].url}
            alt={`Foto de ${denominacion}`}
            className="w-full"
          />
        </figure>
      )}
      <div>
        <div className="flex flex-col space-y-1 mt-2 px-1 justify-start items-start">
          <h2 className="card-title text-1xl ">{denominacion}</h2>
          <p className="text-sm font-josefinSerif">{preparacion}</p>
          <div className="flex flex-row justify-between items-center p-1 w-full">
            <p className="text-red-600 text-lg font-bold font-josefinSerif ">
              ${precioVenta}
            </p>
            <div
              className="btn-link text-sm text-red-600 rounded-md cursor-pointer hover:bg-opacity-90 transition-all"
              onClick={() =>
                //@ts-expect-error El modal siempre va a tirar error
                document.getElementById(`my_modal_${id}`).showModal()
              }
            >
              Ver detalle
            </div>
          </div>
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
              <div className="flex justify-center text-lg font-semibold pt-2">
                <p>{descripcion}</p>
              </div>
              <div className="flex flex-col font-bold w-full mt-3 space-y-3">
                <p className="flex justify-between w-full">
                  Precio: <span className="text-red-600">$ {precioVenta}</span>
                </p>
                <p className="flex justify-between w-full">
                  Tiempo de espera aproximado:{" "}
                  <span className="text-red-600">
                    {" "}
                    {tiempoEstimadoMinutos} min.
                  </span>
                </p>
                <div className="flex w-full justify-center flex-col pt-3">
                  <p className="text-center">Preparación</p>
                  <p className="text-center text-red-600">{preparacion}</p>
                </div>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default CardArticulo;
