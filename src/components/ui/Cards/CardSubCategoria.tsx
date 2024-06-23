import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { setCategory } from "../../../redux/slices/globalCategory";
import { Link } from "react-router-dom";
import { ICategoriaShortDto } from "../../../types/ShortDtos/CategoriaShortDto";
import { FaChevronRight } from "react-icons/fa";

const CardSubCategoria: FC<ICategoriaShortDto> = ({
  denominacion,
  eliminado,
  esPadre,
  id,
  subCategorias,
}) => {
  const dispatch = useAppDispatch();

  const idCategoria = useAppSelector((state) => state.GlobalCategory.selected);

  const seleccionarCategoria = () => {
    dispatch(setCategory(id));
  };

  return esPadre === false && eliminado === false ? (
    subCategorias.length <= 0 ? (
      <Link
        to={"/articulos"}
        className={`shadow-md rounded-md cursor-pointer text-sm md:text-base p-1 m-2 md:m-3 md:p-2 bg-red-600 border-red-950 border-[2px] text-white transition-all flex flex-col items-center justify-center hover:bg-slate-100 hover:text-red-500 ${idCategoria === id && 'bg-white text-red-600'}`}
        onClick={seleccionarCategoria}
      >
        <span className="flex flex-row items-center justify-center text-center px-4">
          <h1 className="font-semibold ">{denominacion}</h1>
        </span>
      </Link>
    ) : (
      <Link
        to={`/subCategorias/${id}`}
        className={`shadow-md rounded-md cursor-pointer text-sm md:text-base p-1 m-2 md:m-3 md:p-2 bg-red-600 border-red-950 border-[2px] text-white transition-all flex flex-col items-center justify-center hover:bg-slate-100 hover:text-red-500 ${idCategoria === id && 'bg-white text-red-600'}`}
        onClick={seleccionarCategoria}
      >
        <span className="flex flex-row items-center justify-center text-center px-4">
          <h1 className="font-semibold ">{denominacion}</h1>
          <FaChevronRight />
        </span>
      </Link>
    )
  ) : (
    <div></div>
  );
};

export default CardSubCategoria;
