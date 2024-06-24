import React from "react";

export const Conocenos = () => {
  return (
    <div>
      <div className="hero h-[500px] bg-fondoConocenos relative flex flex-col justify-center items-center px-10">
        <div className="absolute inset-0 " />
        <div className="hero-content mb-20 md:mb-14 bg-opacity-90 rounded-xl p-5">
          <div className="p-5 rounded-xl bg-opacity-20 flex flex-col">
            <h1 className="flex justify-center flex-col text-3xl md:text-5xl text-center font-bold text-white">
              SOBRE
              <span className="pl-2 text-red-600">NOSOTROS</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center items-center space-y-10 md:space-x-10 flex-col md:flex-row mb-20">
        <div className="flex flex-col">
            <p className="text-red-600 text-4xl text-center py-5 font-promptFont font-semibold">Nuestra Historia</p>
          <p className="text-lg text-gray-700 mb-6 text-center md:text-left w-[300px]">
            ¡Bienvenidos!
            Ofrecemos los mejores precios del país y una amplia variedad de
            opciones para satisfacer tus antojos. Fundamos este proyecto a
            principios de 2024 con el objetivo de hacer que las deliciosas
            comidas sean accesibles para todos.
          </p>
        </div>

        <img src="/Icono_Hamburguesa.png" alt="icono_buensabor" />
        <div>
        <p className="text-red-600 text-4xl text-center py-5 font-promptFont font-semibold">Nuestra visión</p>
          <p className="text-lg text-gray-700 mb-8 text-center md:text-right w-[300px]">
            Nuestro compromiso es brindar la mejor experiencia de usuario, desde
            la navegación por nuestra plataforma hasta la entrega de tus
            pedidos. Nos apasiona la tecnología y la gastronomía, y trabajamos
            arduamente para combinar ambos mundos y ofrecerte un servicio
            excepcional.
          </p>
        </div>
      </div>
      <h2 className="text-3xl text-center font-bold text-gray-800 mb-6">
        Nuestro Equipo
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-6 text-center shadow-md">
          <img
            src="https://media-eze1-1.cdn.whatsapp.net/v/t61.24694-24/325962799_3705259436359283_3525414304833398_n.jpg?ccb=11-4&oh=01_Q5AaIHk8RSy9GmKc7QZh8m91VWxQTHmmjvyv6DL0UvMbJlax&oe=6685B29E&_nc_sid=e6ed6c&_nc_cat=104"
            alt="Fundador 1"
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <h3 className="text-2xl font-bold text-gray-800">
            Agustin Lobos
          </h3>
          <p className="text-gray-600">Co-fundador</p>
        </div>
        <div className="bg-white rounded-lg p-6 text-center shadow-md">
          <img
            src="https://media.licdn.com/dms/image/D4D35AQGVz9Cat2T61g/profile-framedphoto-shrink_800_800/0/1715959027860?e=1719792000&v=beta&t=OChLXyc-p80p_b4A7EfHMDbEqOSxeynUN3W3HQshztE"
            alt="Fundador 2"
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <h3 className="text-2xl font-bold text-gray-800">
            Bruno Mastropietro
          </h3>
          <p className="text-gray-600">Co-fundador</p>
        </div>
        <div className="bg-white rounded-lg p-6 text-center shadow-md">
          <img
            src="https://media-eze1-1.cdn.whatsapp.net/v/t61.24694-24/56153789_662333187557102_5072476884768391168_n.jpg?ccb=11-4&oh=01_Q5AaIJDsYYlN0scYPABvFjqJFwTsP-wBJzCv4yf8W-hUt4Y3&oe=66858AC4&_nc_sid=e6ed6c&_nc_cat=108"
            alt="Fundador 3"
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <h3 className="text-2xl font-bold text-gray-800">
            Santiago Rojo
          </h3>
          <p className="text-gray-600">Co-fundador</p>
        </div>
      </div>
    </div>
  );
};
