import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./src/pages/Home";
import CriarVideo from "./src/Componentes/CriarVideo";


function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/criarvideo" element={<CriarVideo />} />
      </Routes>

    </BrowserRouter>
  )
}

export default AppRoutes;
