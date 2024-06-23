import { FaAngleDoubleDown } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-fondo relative flex flex-col justify-center items-center px-10">
      <div className="absolute inset-0 " />
      <div className="hero-content lg:flex-row bg-opacity-90 rounded-xl p-5">
        <div className="p-5 rounded-xl bg-opacity-20 flex flex-col">
          <h1 className="flex justify-center flex-col text-3xl md:text-5xl text-center font-bold text-white">
            ¡Bienvenido al{" "}
            <span className="pl-2 text-red-600">Buen Sabor!</span>
          </h1>
          <p className="py-6 text-white text-xl md:text-2xl text-center">
            Tu comida favorita, a un <span className="text-red-600">click</span>{" "}
            de distancia.
          </p>
        </div>
      </div>
      <div className="absolute animate-bounce bottom-20 flex flex-col items-center justify-center">
        <p className="text-2xl md:text-3xl text-red-700 font-bold p-1 rounded">EMPRESAS</p>
        <FaAngleDoubleDown className="text-5xl md:text-6xl text-red-700" />
      </div>
    </div>
  );
};

export default Hero;
