import { Link } from "react-router-dom";

export const Navbar = () => {

  return (
    <>
      <div className="fixed flex navbar bg-white border-b-2 text-colorSec z-50 p-4 shadow">
        <div className="navbar-start flex">
          <Link to={"/"}>
            {" "}
            <button className="text-red-600 font-bold text-xl md:text-[27px]">
              {" "}
              El Buen Sabor
            </button>
          </Link>
        </div>
        <ul className="navbar-end flex space-x-5 font-promptFont items-center text-lg">
          <Link to={'/'}>
          <li className="hover:text-red-700 cursor-pointer">Inicio</li>
          </Link>
          <Link to={'/conocenos'}>
          <li className="hover:text-red-700 cursor-pointer">Conocenos</li>
          </Link>
        <Link to={'/empresas'}>
        <li className="hover:text-red-700 cursor-pointer">Empresas</li>
        </Link>
          
        </ul>
      </div>
    </>
  );
};
