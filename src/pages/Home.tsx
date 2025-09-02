import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [ready, setReady] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="space-y-8">
      <div
        className="rounded-2xl p-8 border mx-auto max-w-5xl"
        style={{ backgroundColor: "var(--brand-200)", borderColor: "rgba(10,58,130,.15)" }}
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center">
          Seja bem-vindo ao CuidaBot
        </h1>
        <p className="mt-4 text-center max-w-4xl mx-auto text-slate-800">
          O CuidaBot é um assistente digital acessível e inteligente, desenvolvido para ampliar a
          autonomia de pacientes no uso do aplicativo do Hospital das Clínicas. Com uma interface
          intuitiva e recursos de acessibilidade, o CuidaBot simplifica a jornada do paciente,
          oferecendo uma experiência digital segura, acolhedora e eficiente.
        </p>
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => nav("/solucoes")}
            className="rounded-md px-5 py-2.5 text-white font-semibold shadow"
            style={{ backgroundColor: "var(--brand)" }}
          >
            Conheça a Solução
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-bold">Por que escolher o CuidaBot?</h2>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>🧩 Design responsivo, adaptado para todos os dispositivos.</li>
          <li>✨ Interações intuitivas, com foco na usabilidade e autonomia do usuário.</li>
          <li>🧑‍🦽 Acessibilidade aprimorada para públicos com necessidades específicas.</li>
        </ul>

        <h3 className="mt-5 text-lg font-bold">Nossa Missão</h3>
        <p className="mt-2 text-slate-700">
          Oferecer uma solução digital inclusiva e de fácil utilização, integrada ao aplicativo do
          Hospital das Clínicas, com foco em pacientes com limitações de leitura, navegação ou
          compreensão tecnológica. O CuidaBot atua como um guia humanizado para marcação de consultas,
          orientações pós-atendimento e suporte remoto, promovendo inclusão, independência e
          bem-estar digital.
        </p>

        {ready && (
          <p className="mt-3 text-sm text-emerald-700">
            ✔ Conteúdo carregado (useEffect + useState).
          </p>
        )}
      </div>
    </section>
  );
}
