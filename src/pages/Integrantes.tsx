import { Link } from "react-router-dom";
import { TEAM } from "../data/team";

export default function Integrantes() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-10">
      {/* HERO */}
      <section className="rounded-3xl bg-gradient-to-b from-sky-50 to-white p-8 md:p-12 ring-1 ring-slate-200 shadow-sm">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm font-semibold text-sky-900 ring-1 ring-slate-200">
          👥 Equipe 
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Equipe CuidaBot
        </h1>

        <p className="mt-3 max-w-3xl text-lg leading-relaxed text-slate-700">
          Time responsável pelo CuidaBot, com foco em usabilidade, acessibilidade e entrega
          contínua. Construímos interfaces claras e inclusivas, guiadas por dados e boas
          práticas de design.
        </p>
      </section>

      {/* CARDS */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM.map((m) => (
          <article
            key={m.rm}
            className="group overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="aspect-[16/11] w-full overflow-hidden bg-slate-100">
              <img
                src={m.foto}
                alt={`Foto de ${m.nome}`}
                className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>

            <div className="p-5 space-y-2">
              <h2 className="text-xl font-extrabold text-slate-900">{m.nome}</h2>
              <p className="text-sm text-slate-600">RM {m.rm} · 1TDSR</p>
              <p className="text-slate-700 leading-relaxed line-clamp-3">{m.bio}</p>

              <div className="mt-3 flex items-center gap-3">
                {m.gh && (
                  <a
                    href={m.gh}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-slate-200 hover:bg-slate-50"
                    aria-label={`GitHub de ${m.nome}`}
                  >
                    <img src="/img/icone-github.png" alt="" className="h-5 w-5" />
                  </a>
                )}
                {m.li && (
                  <a
                    href={m.li}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-slate-200 hover:bg-slate-50"
                    aria-label={`LinkedIn de ${m.nome}`}
                  >
                    <img src="/img/icone-linkedin.jpg" alt="" className="h-5 w-5 rounded-sm" />
                  </a>
                )}

                <Link
                  to={`/integrantes/${m.rm}`}
                  className="ml-auto inline-flex items-center gap-1 font-semibold text-sky-900 hover:underline"
                  aria-label={`Ver perfil de ${m.nome}`}
                >
                  Ver perfil
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
