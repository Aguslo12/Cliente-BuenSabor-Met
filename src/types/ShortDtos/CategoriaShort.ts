import { ICategoriaShortDto } from "./CategoriaShortDto";

export interface ICategoriaShort {
  id: number;
  denominacion: string;
  idSucursal: number;
  eliminado: boolean;
  esInsumo: boolean;
  esPadre: boolean;
  subCategorias: ICategoriaShortDto[];
}
