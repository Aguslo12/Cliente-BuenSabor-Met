import { ILocalidad } from "./Localidad";

export interface IDomicilio {
    id: number,
    eliminado: boolean,
    calle: string,
    numero: number,
    cp: number,
    piso: number,
    nroDpto: number,
    localidad: ILocalidad | number,
}