import { useState } from "react";

export default function Contato() {
  const [msg, setMsg] = useState<string>("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const nome = String(fd.get("nome") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const texto = String(fd.get("mensagem") || "").trim();
    if (!nome || !/\S+@\S+\.\S+/.test(email) || texto.length < 5) {
      setMsg("Preencha os campos corretamente."); return;
    }
    setMsg("Mensagem enviada! (simulação)");
    e.currentTarget.reset();
  }

  return (
    <section className="space-y-6">
      <h1 className="flex items-center gap-2 text-3xl font-extrabold" style={{ color: "var(--brand)" }}>
        <img src="/img/icone-email.jpg" alt="" className="h-7 w-7 rounded" />
        Fale com a Equipe CuidaBot
      </h1>
      <p className="text-slate-700 max-w-3xl">
        Caso tenha dúvidas, sugestões ou precise de mais informações sobre o projeto, envie sua
        mensagem para nós. Teremos o prazer em responder.
      </p>

      <form onSubmit={onSubmit} className="grid gap-4 max-w-4xl">
        <label className="grid gap-1">
          <span>Nome completo:</span>
          <input className="border rounded-md px-3 py-2" name="nome" required placeholder="Digite seu nome" />
        </label>
        <label className="grid gap-1">
          <span>E-mail:</span>
          <input className="border rounded-md px-3 py-2" type="email" name="email" required placeholder="exemplo@email.com" />
        </label>
        <label className="grid gap-1">
          <span>Mensagem:</span>
          <textarea className="border rounded-md px-3 py-2 min-h-40" name="mensagem" required placeholder="Escreva sua mensagem aqui..." />
        </label>
        <button className="rounded-md px-4 py-2 text-white font-semibold" style={{ backgroundColor: "var(--brand)" }}>
          Enviar Mensagem
        </button>
        <p role="status" aria-live="polite" className="text-emerald-700 text-sm">{msg}</p>
      </form>
    </section>
  );
}
