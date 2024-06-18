import { ToastContainer } from "react-toastify";
import { CarritoContextProvider } from "../../context/CarritoContext";
import { SucursalContextProvider } from "../../context/SucursalContext";
import { Carrito } from "../pages/Carrito/Carrito";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import MiPerfil from "../pages/MiPerfil/MiPerfil";
import { MisPedidos } from "../pages/MisPedidos/MisPedidos";
import { Register } from "../pages/Register/Register";
import SucursalInicio from "../pages/Sucursal/SucursalInicio";
import Tienda from "../pages/Tienda/Tienda";
import { Navbar } from "../ui/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css'; // No olvides importar el CSS
import SubTienda from "../pages/SubTienda/SubTienda";
import Articulos from "../pages/Articulos/Articulos";
import { EleccionInicio } from "../pages/EleccionInicio/EleccionInicio";

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
            <Route path="/carrito" element={<Carrito />}></Route>
            <Route path="/misPedidos" element={<MisPedidos/>}/>
            <Route path="/miPerfil" element={<MiPerfil/>}></Route>
            <Route
              path="/:idEmpresa/sucursales"
              element={<SucursalInicio />}
            ></Route>
            <Route path="/PromoOCategoria" element={<EleccionInicio/>}></Route>
            <Route
              path="/:idEmpresa/sucursales/categorias/:idSucursal"
              element={<Tienda />}
            />
            <Route path="/subCategorias/:idCategoria" element={<SubTienda/>}></Route>
            <Route path="/articulos" element={<Articulos/>}></Route>
            <Route path="/registrarse" element={<Register/>}></Route>
            <Route path="/iniciarSesion" element={<Login/>}></Route>
          </Routes>
        </CarritoContextProvider>
        </SucursalContextProvider>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
