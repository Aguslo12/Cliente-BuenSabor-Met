import ContainerEmpresa from "../../ui/Containers/ContainerEmpresa";


export const EmpresaInicio = () => {
  return (
    <div className="w-full md:p-5 md:pt-0 flex h-2/5 justify-center flex-col space-y-5">
      <div className="text-center flex mt-28 justify-center items-center w-full">
        <h1 className="text-3xl md:text-3xl  font-semibold text-center w-max rounded-xl text-red-600">Nuestras empresas</h1>
      </div>
      <div className="flex justify-center">
      <div className=" flex justify-center items-center bg-red-600 w-[2px] h-[100px]">
      </div>
      </div>
      <div>
        <ContainerEmpresa />
      </div>
    </div>
  );
};
