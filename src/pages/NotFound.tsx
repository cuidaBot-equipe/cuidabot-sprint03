import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 text-center">
      <h1 className="text-4xl font-bold text-blue-900">404 — Página não encontrada</h1>
      <p className="mt-4 text-blue-900/90">
        O endereço acessado não corresponde a nenhuma página. Verifique o menu
        ou volte para a página inicial.
      </p>
      <Link
        to="/"
        className="inline-block mt-8 bg-blue-800 text-white px-5 py-2 rounded-md hover:bg-blue-700"
      >
        Voltar ao Início
      </Link>
    </main>
  );
}
