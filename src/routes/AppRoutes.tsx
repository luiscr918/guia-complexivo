import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { GuiaSpring } from "../pages/GuiaSpring";
import { GuiaKaty } from "../pages/GuiaKaty";
import { GuiaReact } from "../pages/Guiareact";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/guia" element={<GuiaSpring />} />
        <Route path="/guiaKaty" element={<GuiaKaty />} />
        <Route path="/react-spring" element={<GuiaReact />} />
      </Routes>
    </>
  );
};
