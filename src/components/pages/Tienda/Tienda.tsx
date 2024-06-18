import ContainerCategoria from "../../ui/Containers/ContainerCategoria";
import { ContainerArticulos } from "../../ui/Containers/ContainerArticulos";
import { ContainerPromocion } from "../../ui/Containers/ContainerPromocion";

const Tienda = () => {

  return (
    <div className="flex h-auto justify-center md:w-screen pt-24">
      <div className="flex flex-col">
        <div className="flex flex-col h-min justify-center items-center md:w-full">
        <p className="text-3xl text-start font-semibold flex p-5 text-red-500">Categorías</p>
          {/* <p className="text-3xl font-semibold flex p-5">Sucursales de {nombreEmpresa}</p> */}
          <div className="flex flex-row flex-wrap justify-center">
          <ContainerCategoria />
          </div>
        </div>
        <div className="flex flex-col h-min justify-center items-center md:w-full">
        <p className="text-3xl text-start font-semibold flex p-5 text-red-500">Promos</p>
          <div className="flex flex-row flex-wrap justify-center">
          <ContainerPromocion/>
          </div>
        </div>
       
        
      </div>
    </div>
  );
};

export default Tienda;
