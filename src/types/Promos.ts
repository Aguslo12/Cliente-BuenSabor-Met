import { IDetallePromo } from "./DetallePromo";

export interface IPromos {
  id: number;
  eliminado: boolean;
  denominacion: string;
  fechaDesde: string;
  fechaHasta: string;
  horaDesde: string;
  horaHasta: string;
  descripcionDescuento: string;
  precioPromocional: number;
  tipoPromocion: string;
  detalles: IDetallePromo[];
  imagenes: [];
  sucursales: [];
}
