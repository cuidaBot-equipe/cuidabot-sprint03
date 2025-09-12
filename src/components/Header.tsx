import { NavLink } from "react-router-dom";

export default function Header() {
  const linkCls =
    "px-3 py-1 rounded-md hover:bg-blue-100 transition-colors aria-[current=page]:bg-white aria-[current=page]:text-blue-900";

  return (
    <header className="bg-blue-900 text-white">
      <nav className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <span className="font-semibold text-xl">CuidaBot</span>
        <div className="flex gap-2">
          <NavLink to="/" className={linkCls} end>Início</NavLink>
          <NavLink to="/integrantes" className={linkCls}>Integrantes</NavLink>
          <NavLink to="/faq" className={linkCls}>FAQ</NavLink>
          <NavLink to="/contato" className={linkCls}>Contato</NavLink>
          {/* IMPORTANTE: sem acento, exatamente /solucao */}
          <NavLink to="/solucao" className={linkCls}>Solução</NavLink>
        </div>
      </nav>
    </header>
  );
}
