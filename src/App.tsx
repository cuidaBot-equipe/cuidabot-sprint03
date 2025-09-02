import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layout/MainLayoyt";
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import Contato from "./pages/Contato";
import Integrantes from "./pages/Integrantes";
import IntegranteDetalhe from "./pages/IntegranteDetalhe";
import Solucoes from "./pages/Solucoes";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="contato" element={<Contato />} />
        <Route path="integrantes">
          <Route index element={<Integrantes />} />
          <Route path=":rm" element={<IntegranteDetalhe />} />
        </Route>
        <Route path="solucoes" element={<Solucoes />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
