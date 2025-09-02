import { TEAM } from "../data/team";
import { Link } from "react-router-dom";

export default function Integrantes() {
  return (
    <section className="space-y-6">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-extrabold" style={{ color: "var(--brand)" }}>
          Nosso Time
        </h1>
        <p className="mt-2 text-slate-700">
          A equipe responsável pelo desenvolvimento do CuidaBot é formada por alunas do curso de
          Análise e Desenvolvimento de Sistemas, com foco em soluções acessíveis, funcionais e
          centradas no usuário. Atuamos de forma colaborativa para criar um assistente digital que
          promova inclusão, autonomia e inovação no ambiente hospitalar.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM.map((p) => (
          <Link
            key={p.rm}
            to={`/integrantes/${p.rm}`}
            className="rounded-2xl border bg-white shadow-sm hover:shadow-md transition"
          >
            <article>
              <img
                src={p.foto}
                alt={`Foto de ${p.nome}`}
                className="w-full h-56 object-cover rounded-t-2xl"
              />
              <div className="p-5 flex flex-col items-center">
                <h3 className="font-extrabold text-slate-900">{p.nome}</h3>
                <p className="text-slate-600 text-sm">RM: {p.rm} | Turma: 1TDSR</p>
                <p className="mt-3 text-sm text-slate-700 leading-relaxed text-justify">{p.bio}</p>

                <div className="mt-4 flex gap-4">
                  <a href={p.gh} target="_blank" rel="noopener noreferrer" aria-label={`GitHub de ${p.nome}`} onClick={(e)=>e.stopPropagation()}>
                    <img src="/img/icone-github.png" alt="" className="h-7 w-7 hover:scale-110 transition" />
                  </a>
                  <a href={p.li} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn de ${p.nome}`} onClick={(e)=>e.stopPropagation()}>
                    <img src="/img/icone-linkedin.jpg" alt="" className="h-7 w-7 hover:scale-110 transition rounded" />
                  </a>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
