const FAQS = [
  {
    q: "O que é o CuidaBot?",
    a: "O CuidaBot é um assistente digital projetado para atuar de forma integrada ao aplicativo do Hospital das Clínicas. Seu objetivo é simplificar o uso da tecnologia por pacientes com dificuldades de navegação, promovendo acessibilidade, autonomia e inclusão digital nos serviços de saúde.",
  },
  {
    q: "Quais tecnologias foram utilizadas no projeto?",
    a: "Na Sprint 3, utilizamos React + Vite + TypeScript, rotas com react-router-dom e estilização com TailwindCSS.",
  },
  {
    q: "O site é compatível com dispositivos móveis?",
    a: "Sim. Toda a estrutura do site foi construída com design responsivo, garantindo uma navegação fluida e acessível em smartphones, tablets e desktops.",
  },
  {
    q: "Quem desenvolveu este projeto?",
    a: "O CuidaBot foi idealizado e desenvolvido por estudantes da turma 1TDSR, combinando inovação, design inclusivo e foco em usabilidade para atender às necessidades de pacientes que enfrentam barreiras tecnológicas no ambiente hospitalar.",
  },
];

export default function FAQ() {
  return (
    <section className="space-y-6">
      <h1 className="flex items-center gap-2 text-3xl font-extrabold" style={{ color: "var(--brand)" }}>
        <img src="/img/icone-faq.png" alt="" className="h-7 w-7" />
        Perguntas Frequentes
      </h1>

      <div className="space-y-4">
        {FAQS.map((f, i) => (
          <details
            key={i}
            className="rounded-xl border p-4"
            style={{ backgroundColor: "var(--brand-200)", borderColor: "rgba(10,58,130,.15)" }}
          >
            <summary className="font-semibold cursor-pointer">{f.q}</summary>
            <p className="mt-2 text-slate-700">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
