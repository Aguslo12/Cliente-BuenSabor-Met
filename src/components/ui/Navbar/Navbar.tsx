import { Link } from "react-router-dom";
import { FaRegBuilding } from "react-icons/fa";


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
        <ul className="hidden navbar-end md:flex space-x-5 font-promptFont items-center text-lg">
          <Link to={"/"}>
            <li className="hover:text-red-700 cursor-pointer">Inicio</li>
          </Link>
          <Link to={"/conocenos"}>
            <li className="hover:text-red-700 cursor-pointer">Conocenos</li>
          </Link>
          <Link to={"/empresas"}>
            <li className="hover:text-red-700 cursor-pointer">Empresas</li>
          </Link>
        </ul>
        {/* BOTON PARA CELULARES */}
        <div className="navbar-end md:hidden">
          <div className=" dropdown dropdown-end ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                ></path>
              </svg>
            </div>
            <ul tabIndex={0} className=" menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <Link to={"/"}>
              <li>
                
                <a className="font-promptFont">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Inicio
                </a>
               
              </li>
              </Link>
              <Link to={"/conocenos"}>
              <li>
                
                <a className="font-promptFont">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Conocenos
                </a>
                
              </li>
              </Link>
              <Link to={"/empresas"}>
              <li>
                
                <a className="font-promptFont" >
                <FaRegBuilding  className="text-lg"/>
                  Empresas
                </a>
                
              </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
