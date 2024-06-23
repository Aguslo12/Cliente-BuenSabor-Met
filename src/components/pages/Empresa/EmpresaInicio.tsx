import ContainerEmpresa from "../../ui/Containers/ContainerEmpresa";


export const EmpresaInicio = () => {
  return (
    <div className="w-full md:p-5 md:pt-0 flex h-2/5 justify-center flex-col space-y-5">
      <div className="text-center flex justify-center items-center w-full">
        <h1 className="text-xl md:text-3xl font-bold text-center w-max p-4 rounded-xl text-white bg-red-600">Nuestras empresas afiliadas:</h1>
      </div>
      <div>
        <ContainerEmpresa />
      </div>
    </div>
  );
};
