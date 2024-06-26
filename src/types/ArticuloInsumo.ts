import { ICategoria } from "./Categoria";
import { IImagen } from "./Imagen";
import { IUnidadMedida } from "./UnidadMedida";

export interface IArticuloInsumo {
  id: number;
  denominacion: string;
  precioVenta: number;
  imagenes: IImagen[];
  unidadMedida: IUnidadMedida;
  precioCompra: number;
  stockActual: number;
  stockMaximo: number;
  stockMinimo: number;
  esParaElaborar: boolean;
  eliminado: boolean;
  categoria: ICategoria;
}
