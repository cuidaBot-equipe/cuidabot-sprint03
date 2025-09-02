import { useParams, useNavigate } from "react-router-dom";
import { TEAM } from "../data/team";

export default function IntegranteDetalhe() {
  const { rm } = useParams();
  const nav = useNavigate();
  const p = TEAM.find((x) => x.rm === rm);

  if (!p) {
    return (
      <div className="space-y-4">
        <p>Integrante não encontrado.</p>
        <button onClick={() => nav(-1)} className="underline" style={{ color: "var(--brand)" }}>
          Voltar
        </button>
      </div>
    );
  }

  return (
    <section className="grid gap-6 md:grid-cols-[320px,1fr]">
      <img src={p.foto} alt={`Foto de ${p.nome}`} className="w-full h-80 object-cover rounded-2xl border" />
      <div className="space-y-3">
        <h1 className="text-3xl font-extrabold" style={{ color: "var(--brand)" }}>{p.nome}</h1>
        <p className="text-slate-600">RM: {p.rm} | Turma: 1TDSR</p>
        <p className="text-slate-800">{p.bio}</p>
        <div className="flex gap-4">
          <a href={p.gh} target="_blank" rel="noopener noreferrer" aria-label={`GitHub de ${p.nome}`}>
            <img src="/img/icone-github.png" alt="" className="h-7 w-7" />
          </a>
          <a href={p.li} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn de ${p.nome}`}>
            <img src="/img/icone-linkedin.jpg" alt="" className="h-7 w-7 rounded" />
          </a>
        </div>
        <button
          onClick={() => nav("/integrantes")}
          className="mt-4 rounded-md px-4 py-2 text-white font-semibold"
          style={{ backgroundColor: "var(--brand)" }}
        >
          Voltar para Integrantes
        </button>
      </div>
    </section>
  );
}
