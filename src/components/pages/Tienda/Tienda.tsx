import ContainerCategoria from "../../ui/Containers/ContainerCategoria";
import { ContainerPromocion } from "../../ui/Containers/ContainerPromocion";

const Tienda = () => {

  return (
    <div className="flex h-auto justify-center md:w-screen pt-24">
      <div className="flex flex-col">
        <div className="flex flex-col h-min justify-center items-start md:w-full">
        <p className="text-xl md:text-2xl text-start font-semibold flex p-5 text-black">Hola. ¿Qué vas a pedir hoy?</p>
          {/* <p className="text-3xl font-semibold flex p-5">Sucursales de {nombreEmpresa}</p> */}
          <div className="flex flex-row flex-wrap justify-center">
          <ContainerCategoria />
          </div>
        </div>
        <div className="flex flex-col h-min md:w-full">
        <p className="text-xl md:text-2xl text-start font-semibold flex p-5 pb-0 text-black">No te pierdas estas promociones</p>
          <div className="flex flex-row flex-wrap justify-start">
          <ContainerPromocion/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tienda;
