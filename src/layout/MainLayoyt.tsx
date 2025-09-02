import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Header />
      <main className="flex-1">
        <div className="mx-auto w-full max-w-6xl px-4 py-8">
          <Outlet />
        </div>
      </main>
      <footer className="mt-8" style={{ backgroundColor: "var(--brand)" }}>
        <div className="mx-auto max-w-6xl px-4 py-4 text-center text-white text-sm">
          © {new Date().getFullYear()} - CuidaBot | Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
