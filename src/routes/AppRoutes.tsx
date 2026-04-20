import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { GuiaSpring } from "../pages/GuiaSpring";
import { GuiaKaty } from "../pages/GuiaKaty";
import { GuiaReact } from "../pages/Guiareact";
import GuiaMovil from '../pages/GuiaMovil';
import { GuiaAngular } from "../pages/angular";



export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/guia" element={<GuiaSpring />} />
        <Route path="/guiaKaty" element={<GuiaKaty />} />
        <Route path="/react-spring" element={<GuiaReact />} />
         <Route path="/guiaMovil" element={<GuiaMovil/>} />
         <Route path="/guiaAngular" element={<GuiaAngular/>} />
      </Routes>
    </>
  );
};
