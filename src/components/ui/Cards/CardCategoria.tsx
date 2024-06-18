import React, { FC } from "react";
import { ICategoriaShort } from "../../../types/ShortDtos/CategoriaShort";
import { PiBowlFood } from "react-icons/pi";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { setCategory } from "../../../redux/slices/globalCategory";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const CardCategoria: FC<ICategoriaShort> = ({
  denominacion,
  eliminado,
  esInsumo,
  esPadre,
  id,
  idSucursal,
  subCategorias,
}) => {
  const dispatch = useAppDispatch();

  const idCategoria = useAppSelector((state) => state.GlobalCategory.selected);

  const seleccionarCategoria = () => {
    dispatch(setCategory(id));
  };

  return esPadre === true && eliminado === false ? (
    subCategorias.length <= 0 ? (
      <Link
        to={"/articulos"}
        className={`shadow-md rounded-md cursor-pointer m-5 p-3 bg-red-600 text-white border-red-950 border-[2px]  transition-all flex flex-col items-center justify-center hover:bg-slate-100 hover:text-red-500`}
        onClick={seleccionarCategoria}
      >
        <span className="flex flex-row items-center justify-center text-center px-4">
          <h1 className="font-semibold ">{denominacion}</h1>
        </span>
      </Link>
    ) : (
      <Link
        to={`/subCategorias/${id}`}
        className={`shadow-md rounded-md cursor-pointer m-5 p-3 bg-red-600 text-white border-red-950 border-[2px]  transition-all flex flex-col items-center justify-center hover:bg-slate-100 hover:text-red-500 `}
        onClick={seleccionarCategoria}
      >
        <span className="flex flex-row space-x-3 items-center justify-center text-center px-4">
          <h1 className="font-semibold ">{denominacion} </h1>
          <FaChevronRight />
        </span>
      </Link>
    )
  ) : (
    <div></div>
  );
};

export default CardCategoria;
