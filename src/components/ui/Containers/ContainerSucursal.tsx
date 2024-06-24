import { useEffect, useState } from "react";
import { BackendMethods } from "../../../services/BackendClient";
import { ISucursalShort } from "../../../types/ShortDtos/SucursalShort";
import CardSucursal from "../Cards/CardSucursal";
import { useParams } from "react-router-dom";
import { IEmpresaShort } from "../../../types/ShortDtos/EmpresaShort";

const ContainerSucursal = () => {
  const backend = new BackendMethods();

  const { idEmpresa } = useParams();

  const [sucursales, SetSucursales] = useState<ISucursalShort[]>([]);

  useEffect(() => {
    const traerSucursales = async () => {
      try {
        //@ts-expect-error Da error
        const res: IEmpresaShort = await backend.getById(
          `https://back-cliente.onrender.com/empresa/noEliminados/empresa/sucursales/${idEmpresa}`
        );
        const sucursales: ISucursalShort[] = res.sucursales;
        SetSucursales(sucursales);
      } catch (error) {
        console.log(error);
      }
    };
    traerSucursales();
  }, []);

  return (
    <div className="flex flex-wrap items-start justify-start">
      {sucursales.map((sucursal, index) => (
        <CardSucursal
          domicilio={sucursal.domicilio}
          eliminado={sucursal.eliminado}
          esCasaMatriz={sucursal.esCasaMatriz}
          horarioApertura={sucursal.horarioApertura}
          horarioCierre={sucursal.horarioCierre}
          id={sucursal.id}
          idEmpresa={sucursal.idEmpresa}
          nombre={sucursal.nombre}
          imagenes={sucursal.imagenes}
          key={index}
        />
      ))}
    </div>
  );
};

export default ContainerSucursal;
