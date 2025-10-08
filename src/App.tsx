import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function App() {
  useEffect(() => {
    console.log("Aplicação inicializada!");
  }, []);

  return (
    <div className="min-h-dvh flex flex-col">
      <Header title="CuidaBot" />
      <main id="conteudo" className="flex-1 px-4 md:px-10">
        <Outlet />
      </main>
      <footer className="mt-12 border-t bg-sky-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm">
          © 2025 – CuidaBot | Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
