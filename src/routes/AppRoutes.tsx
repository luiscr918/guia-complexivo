import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { GuiaSpring } from "../pages/GuiaSpring";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/guia" element={<GuiaSpring />} />
      </Routes>
    </>
  );
};
