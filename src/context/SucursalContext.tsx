import { ReactNode, createContext, useState } from "react";
import { ISucursalShort } from "../types/ShortDtos/SucursalShort";
import { ICliente } from "../types/Cliente";

interface SucursalContextType {
  suc: ISucursalShort | null;
  updateSucursal: (sucursal: ISucursalShort) => void;
  str: number;
  cliente: ICliente | undefined;
  getCliente: (cliente: ICliente | undefined) => void;
  pedidoEnviado: (estado: number) => void;
  categoria: string;
  elegirCategoria: (categoria: string) => void;
  busqueda: string;
  cambiarBusqueda: (busqueda: string) => void;
}

export const SucursalContext = createContext<SucursalContextType | undefined>(
  undefined
);

export function SucursalContextProvider({ children }: { children: ReactNode }) {
  const [suc, setSuc] = useState<ISucursalShort | null>(null);
  const [str, setStr] = useState<number>(0);
  const [cliente, setCliente] = useState<ICliente | undefined>()
  const [ categoria, setCategoria ] = useState<string>("")
  const [ busqueda, setBusqueda ] = useState<string>("")
 
  const getCliente = (cliente: ICliente | undefined) => {
    setCliente(cliente)
  }

  const updateSucursal = (sucursal: ISucursalShort) => {

    setSuc(sucursal);
  };

  const cambiarBusqueda = (busqueda: string) => {
    setBusqueda(busqueda)
  }

  const pedidoEnviado = (estado: number) => {
    setStr(estado);
  }

  const elegirCategoria = (categoria: string) => {
    setCategoria(categoria)
  }

  return (
    <SucursalContext.Provider value={{ suc, updateSucursal, pedidoEnviado, str, cliente, getCliente, categoria, elegirCategoria, busqueda,cambiarBusqueda }}>
      {children}
    </SucursalContext.Provider>
  );
}


