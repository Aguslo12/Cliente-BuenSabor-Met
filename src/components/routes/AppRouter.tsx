import { ToastContainer } from "react-toastify";
import { CarritoContextProvider } from "../../context/CarritoContext";
import { SucursalContextProvider } from "../../context/SucursalContext";
import { Home } from "../pages/Home/Home";
import SucursalInicio from "../pages/Sucursal/SucursalInicio";
import Tienda from "../pages/Tienda/Tienda";
import { Navbar } from "../ui/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css'; // No olvides importar el CSS
import SubTienda from "../pages/SubTienda/SubTienda";
import Articulos from "../pages/Articulos/Articulos";
import { Empresas } from "../pages/Empresa/Empresas";
import { Conocenos } from "../pages/Conocenos/Conocenos";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <SucursalContextProvider>
        <CarritoContextProvider>
          <Navbar />
          <ToastContainer
          position={"bottom-right"}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/empresas" element={<Empresas/>}></Route>
            <Route path="/conocenos" element={<Conocenos/>}></Route>
            <Route
              path="/:idEmpresa/sucursales"
              element={<SucursalInicio />}
            ></Route>
            <Route
              path="/:idEmpresa/sucursales/categorias/:idSucursal"
              element={<Tienda />}
            />
            <Route path="/subCategorias/:idCategoria" element={<SubTienda/>}></Route>
            <Route path="/articulos" element={<Articulos/>}></Route>
          </Routes>
        </CarritoContextProvider>
        </SucursalContextProvider>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
