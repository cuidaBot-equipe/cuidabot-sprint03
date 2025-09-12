// src/pages/FAQ.tsx
import { useState, type ReactNode } from "react";

type Item = {
  id: string;
  question: string;
  answer: ReactNode; // <-- trocado de JSX.Element para ReactNode
};

const ITEMS: Item[] = [
  {
    id: "o-que-e",
    question: "O que é o CuidaBot?",
    answer: (
      <>
        O CuidaBot é um assistente digital que orienta pacientes do Hospital das Clínicas
        em tarefas do dia a dia: entendimento da jornada, preparação para consultas e exames,
        pós-alta e dúvidas rápidas. O foco é <strong>clareza, segurança e inclusão</strong>.
      </>
    ),
  },
  {
    id: "tecnologias",
    question: "Quais tecnologias são usadas?",
    answer: (
      <>
        Construído como <strong>SPA</strong> com <strong>React + Vite + TypeScript</strong>, utilizando
        <strong> react-router</strong> para navegação e <strong>TailwindCSS</strong> para estilização. O projeto adota
        componentização, tipagem e boas práticas de acessibilidade.
      </>
    ),
  },
  {
    id: "mobile",
    question: "Funciona bem no celular?",
    answer: (
      <>
        Sim. Toda a interface é <strong>responsiva</strong>, testada para <strong>smartphones, tablets e desktops</strong>,
        mantendo legibilidade, hierarquia visual e áreas de toque adequadas.
      </>
    ),
  },
  {
    id: "acessibilidade",
    question: "Quais recursos de acessibilidade existem?",
    answer: (
      <>
        Paleta com bom contraste, <strong>fontes legíveis</strong>, navegação por teclado,
        estados de foco visíveis e textos claros. Os fluxos evitam sobrecarga
        cognitiva e priorizam passos curtos e objetivos.
      </>
    ),
  },
  {
    id: "quem-mantem",
    question: "Quem mantém o projeto?",
    answer: (
      <>
        O projeto é mantido por <strong>alunas do curso de Análise e Desenvolvimento de Sistemas da FIAP</strong>.
        A equipe atua com foco em usabilidade, inclusão digital e melhoria contínua da experiência do paciente.
      </>
    ),
  },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-5 w-5 transition-transform ${open ? "rotate-180" : "rotate-0"}`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 10.17l3.71-2.94a.75.75 0 111.04 1.08l-4.24 3.36a.75.75 0 01-.94 0L5.21 8.31a.75.75 0 01.02-1.1z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(ITEMS[0].id);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-10">
      {/* HERO */}
      <section className="rounded-3xl bg-gradient-to-b from-sky-50 to-white p-8 md:p-12 ring-1 ring-slate-200 shadow-sm">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm font-semibold text-sky-900 ring-1 ring-slate-200">
          💬 FAQ
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Perguntas Frequentes
        </h1>
        <p className="mt-3 max-w-3xl text-lg leading-relaxed text-slate-700">
          Tudo o que você precisa saber — em linguagem clara e objetiva. Se algo
          ficar faltando, <span className="font-semibold text-sky-900">fale com a equipe</span>.
        </p>
      </section>

      {/* LISTA */}
      <section className="space-y-4">
        {ITEMS.map((item) => {
          const isOpen = openId === item.id;
          return (
            <article
              key={item.id}
              className="rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm"
            >
              <button
                id={`button-${item.id}`}
                type="button"
                onClick={() => toggle(item.id)}
                aria-expanded={isOpen}
                aria-controls={`panel-${item.id}`}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <h2 className="text-lg md:text-xl font-extrabold text-sky-900">
                  {item.question}
                </h2>
                <span className="text-slate-500">
                  <Chevron open={isOpen} />
                </span>
              </button>

              <div
                id={`panel-${item.id}`}
                role="region"
                aria-labelledby={`button-${item.id}`}
                className={`grid overflow-hidden px-5 transition-[grid-template-rows] duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="min-h-0">
                  <div className="pb-5 pt-1 text-slate-700 leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <section className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
        <p className="text-slate-700">
          Ainda com dúvidas? Veja a página{" "}
          <a href="/solucao" className="font-semibold text-sky-900 hover:underline">
            Solução
          </a>{" "}
          ou{" "}
          <a href="/contato" className="font-semibold text-sky-900 hover:underline">
            fale com a equipe
          </a>
          .
        </p>
      </section>
    </main>
  );
}
