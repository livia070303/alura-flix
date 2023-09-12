import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import CriarVideoPage from "./pages/CriarVideo";
import CriarCategoria from "./Componentes/CriarCategoria";


function App() {
  return (
    <BrowserRouter>

      <Routes>
      <Route path="/">
      <Route index element={<Home />} />
        <Route path="/criarvideo" element={<CriarVideoPage />} />
        <Route path="/criarcategoria" element={<CriarCategoria />} />
      </Route>
       
      </Routes>

    </BrowserRouter>
  )
}

export default App;