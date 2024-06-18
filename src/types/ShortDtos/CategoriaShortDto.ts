
export interface ICategoriaShortDto {
  id: number;
  denominacion: string;
  subCategorias: ICategoriaShortDto[]
  eliminado: boolean;
  esInsumo: boolean;
  esPadre: boolean;
}