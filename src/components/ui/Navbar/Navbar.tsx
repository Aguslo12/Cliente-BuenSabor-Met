import { Link } from "react-router-dom";

export const Navbar = () => {

  return (
    <>
      <div className="fixed flex navbar justify-center bg-white border-b-2 text-colorSec z-50 p-4 shadow">
        <div className="navbar-center flex justify-center">
          <Link to={"/"}>
            {" "}
            <button className="text-red-600 font-bold text-xl md:text-3xl">
              {" "}
              El Buen Sabor
            </button>
          </Link>
        </div>

      </div>
    </>
  );
};
