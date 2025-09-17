import { Link, useParams } from "react-router-dom";
import { TEAM } from "../data/team";

export default function IntegranteDetalhe() {
  const { rm } = useParams();
  const member = TEAM.find((m) => m.rm === rm);

  if (!member) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10">
        <section className="rounded-3xl bg-gradient-to-b from-sky-50 to-white p-8 ring-1 ring-slate-200 shadow-sm">
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">Integrante não encontrado</h1>
          <p className="mt-2 text-slate-700">O integrante informado não existe ou foi movido.</p>
          <Link to="/integrantes" className="mt-4 inline-block font-semibold text-sky-900 hover:underline">
            ← Voltar para Integrantes
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 space-y-10">
      <section className="rounded-3xl bg-gradient-to-b from-sky-50 to-white p-8 md:p-12 ring-1 ring-slate-200 shadow-sm">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm font-semibold text-sky-900 ring-1 ring-slate-200">
          Perfil de integrante
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          {member.nome}
        </h1>
        <p className="mt-2 text-slate-700">RM {member.rm} · Turma 1TDSR</p>

        <Link to="/integrantes" className="mt-6 inline-flex items-center gap-1 font-semibold text-sky-900 hover:underline">
          ← Voltar para Integrantes
        </Link>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-white shadow-sm">
          <img
            src={member.foto}
            alt={`Foto de ${member.nome}`}
            className="h-full w-full object-cover"
            style={{ maxHeight: 520 }}
          />
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
            <h2 className="text-xl font-extrabold text-slate-900">Sobre</h2>
            <p className="mt-2 text-slate-700 leading-relaxed">{member.bio}</p>
          </div>

          <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
            <h3 className="text-lg font-extrabold text-slate-900">Links</h3>
            <div className="mt-3 flex items-center gap-3">
              {member.gh && (
                <a
                  href={member.gh}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-slate-200 hover:bg-slate-50"
                  aria-label={`GitHub de ${member.nome}`}
                >
                  <img src="/img/icone-github.png" className="h-5 w-5" alt="" />
                </a>
              )}
              {member.li && (
                <a
                  href={member.li}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-slate-200 hover:bg-slate-50"
                  aria-label={`LinkedIn de ${member.nome}`}
                >
                  <img src="/img/icone-linkedin.jpg" className="h-5 w-5 rounded-sm" alt="" />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
