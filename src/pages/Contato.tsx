// src/pages/Contato.tsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Contato() {
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [ok, setOk] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErro(null);
    setOk(false);

    const data = new FormData(e.currentTarget);
    const nome = String(data.get("nome") || "").trim();
    const email = String(data.get("email") || "").trim();
    const msg = String(data.get("mensagem") || "").trim();

    if (!nome || !email || !msg) {
      setErro("Preencha todos os campos.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setErro("Informe um e-mail válido.");
      return;
    }

    setEnviando(true);
    setTimeout(() => {
      setEnviando(false);
      setOk(true);
      (e.currentTarget as HTMLFormElement).reset();
    }, 800);
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-10">
      {/* HERO */}
      <section className="rounded-3xl bg-gradient-to-b from-sky-50 to-white p-8 md:p-12 ring-1 ring-slate-200 shadow-sm">
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm font-semibold text-sky-900 ring-1 ring-slate-200">
            ✉️ Suporte ao usuário
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm font-semibold text-sky-900 ring-1 ring-slate-200">
            ⏱️ Resposta rápida
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Fale com a equipe CuidaBot
        </h1>

        <p className="mt-3 max-w-3xl text-lg leading-relaxed text-slate-700">
          Dúvidas, sugestões ou mais informações? Envie sua mensagem, retornamos rapidinho.
        </p>
      </section>

      {/* GRID PRINCIPAL */}
      <section className="grid gap-6 md:grid-cols-3">
        {/* FORMULÁRIO */}
        <div className="md:col-span-2 rounded-3xl bg-white p-6 md:p-8 ring-1 ring-slate-200 shadow-sm">
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div>
              <label
                htmlFor="nome"
                className="block text-sm font-semibold text-slate-800"
              >
                Nome completo
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                placeholder="Digite seu nome"
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-slate-800"
              >
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="exemplo@email.com"
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600"
                required
              />
            </div>

            <div>
              <label
                htmlFor="mensagem"
                className="block text-sm font-semibold text-slate-800"
              >
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={6}
                placeholder="Escreva sua mensagem aqui..."
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600"
                required
              />
            </div>

            {erro && (
              <p role="alert" className="text-sm font-medium text-red-700">
                {erro}
              </p>
            )}
            {ok && (
              <p role="status" className="text-sm font-medium text-emerald-700">
                Mensagem enviada com sucesso! Em breve entraremos em contato.
              </p>
            )}

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                disabled={enviando}
                className="inline-flex w-full items-center justify-center rounded-2xl bg-sky-900 px-6 py-3 font-semibold text-white shadow hover:bg-sky-800 disabled:opacity-60 sm:w-auto"
              >
                {enviando ? "Enviando..." : "Enviar mensagem"}
              </button>

              <Link
                to="/faq"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-white px-6 py-3 font-semibold text-sky-900 ring-1 ring-slate-200 hover:bg-slate-50 sm:w-auto"
              >
                Ver FAQ
              </Link>
            </div>
          </form>
        </div>

      </section>
    </main>
  );
}
