import { Link, useNavigate } from "react-router-dom";
import BotaoPrimario from "../components/BotaoPrimario"; 

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-14">
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_0%_0%,#e0f2fe_0%,transparent_60%),radial-gradient(50%_50%_at_100%_0%,#dbeafe_0%,transparent_55%)]"
        />
        <div className="relative p-8 md:p-12">
          <div className="max-w-3xl space-y-5">
            <p className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50/70 px-3 py-1 text-sm font-medium text-sky-900">
              🎯 Foco no paciente <span className="text-slate-400">•</span> Inclusão digital
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              CuidaBot - Assistente digital do Hospital das Clínicas
            </h1>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
              Orientação clara para consultas, exames e dúvidas. Uma experiência
              simples, acessível e segura para quem precisa de autonomia no uso de serviços
              de saúde.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* ✅ Botão com navegação programática via componente */}
              <BotaoPrimario texto="Conhecer a solução" onClick={() => navigate("/solucao")} />

              <Link
                to="/contato"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-slate-50"
              >
                Falar com a equipe
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { n: "100%", l: "Sem dependência de frameworks externos" },
              { n: "A11y", l: "Alto contraste, fonte legível e leitura por voz" },
              { n: "SPA", l: "Navegação fluida (React + Vite + TypeScript)" },
            ].map((k) => (
              <div
                key={k.n}
                className="rounded-2xl border border-slate-200 bg-white/70 p-5 text-center shadow-sm"
              >
                <div className="text-2xl font-extrabold text-slate-900">{k.n}</div>
                <p className="mt-1 text-slate-600 text-sm">{k.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
          O que o CuidaBot entrega
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              icon: "🧭",
              title: "Navegação guiada",
              desc:
                "Fluxos passo a passo, linguagem clara e ícones objetivos para reduzir atrito e dúvidas.",
            },
            {
              icon: "📅",
              title: "Agendamentos descomplicados",
              desc:
                "Orientação prática para consultas e exames, com checagens e lembretes pós-alta.",
            },
            {
              icon: "♿",
              title: "Acessibilidade de ponta",
              desc:
                "Alto contraste, tipografia legível, elementos maiores e suporte à leitura por voz.",
            },
            {
              icon: "🔒",
              title: "Confiança e foco",
              desc:
                "Conteúdo direto, sem distrações. Tudo pensado para a jornada do paciente.",
            },
          ].map((f) => (
            <article
              key={f.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="text-2xl">{f.icon}</div>
              <h3 className="mt-2 text-xl font-bold text-slate-900">{f.title}</h3>
              <p className="mt-1 text-slate-700 leading-relaxed">{f.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
          Como funciona
        </h2>
        <ol className="grid gap-4 md:grid-cols-4">
          {[
            { t: "Entenda o caminho", d: "O que fazer para marcar, consultar e acompanhar." },
            { t: "Siga as etapas", d: "Passos curtos, feedbacks claros, menos erros." },
            { t: "Tire dúvidas", d: "FAQ objetivo e acessível, sempre à mão." },
            { t: "Receba lembretes", d: "Boas práticas e orientações pós-atendimento." },
          ].map((s, i) => (
            <li
              key={s.t}
              className="rounded-xl border border-slate-200 bg-sky-50/50 p-5 shadow-sm"
            >
              <p className="text-sm font-semibold text-sky-900">Passo {i + 1}</p>
              <h3 className="mt-1 font-semibold text-slate-900">{s.t}</h3>
              <p className="mt-1 text-slate-700">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Para quem é</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { t: "Pacientes", d: "Precisam de orientação simples e inclusiva." },
            { t: "Acompanhantes", d: "Querem ajudar em agendamentos e lembretes." },
            { t: "Equipe clínica", d: "Busca reduzir ruídos na comunicação diária." },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="font-semibold text-slate-900">{c.t}</p>
              <p className="mt-1 text-slate-700">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <blockquote className="space-y-3">
          <p className="text-lg text-slate-800 leading-relaxed">
            “O CuidaBot reduz as incertezas do paciente e organiza a jornada de forma clara,
            especialmente para quem tem pouca familiaridade com tecnologia.”
          </p>
          <footer className="text-sm text-slate-600">
            — Equipe de Desenvolvimento • Projeto acadêmico com rigor de produto
          </footer>
        </blockquote>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-sky-50/60 p-6 shadow-sm">
          <h3 className="text-xl font-extrabold text-slate-900">Dúvidas frequentes</h3>
          <p className="mt-1 text-slate-700">
            Como agendar? Onde acompanho? Preciso de preparo? Acesse respostas
            rápidas e objetivas.
          </p>
          <Link
            to="/faq"
            className="mt-4 inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 font-semibold text-slate-900 hover:bg-slate-50"
          >
            Abrir FAQ
          </Link>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-extrabold text-slate-900">Conheça os integrantes</h3>
          <p className="mt-1 text-slate-700">
            Veja quem criou o projeto, funções e contatos profissionais.
          </p>
          <Link
            to="/integrantes"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-sky-900 px-4 py-2 text-white font-semibold hover:bg-sky-800"
          >
            Ver time
          </Link>
        </article>
      </section>
    </main>
  );
}
