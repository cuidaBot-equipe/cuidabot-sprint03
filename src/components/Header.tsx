import { Link } from "react-router-dom";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className="bg-sky-900 py-4 text-white shadow">
      <div className="mx-auto max-w-6xl px-4 flex justify-between items-center">
        <h1 className="text-lg font-bold">{title}</h1>
<nav className="flex gap-4 text-sm font-medium">
  <Link to="/" className="hover:underline">Início</Link>
  <Link to="/integrantes" className="hover:underline">Integrantes</Link>
  <Link to="/faq" className="hover:underline">FAQ</Link>
  <Link to="/contato" className="hover:underline">Contato</Link>
  <Link to="/solucao" className="hover:underline">Solução</Link>
</nav>

      </div>
    </header>
  );
}
