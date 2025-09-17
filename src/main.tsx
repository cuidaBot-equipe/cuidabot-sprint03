import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import Home from "./pages/Home";
import Integrantes from "./pages/Integrantes";
import IntegranteDetalhe from "./pages/IntegranteDetalhe";
import FAQ from "./pages/FAQ";
import Contato from "./pages/Contato";
import Solucao from "./pages/Solucoes";
import App from "./App"; 

const router = createBrowserRouter([
  {
    element: <App />, 
    children: [
      { path: "/", element: <Home /> },
      { path: "/integrantes", element: <Integrantes /> },
      { path: "/integrantes/:rm", element: <IntegranteDetalhe /> },
      { path: "/faq", element: <FAQ /> },
      { path: "/contato", element: <Contato /> },
      { path: "/solucao", element: <Solucao /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
