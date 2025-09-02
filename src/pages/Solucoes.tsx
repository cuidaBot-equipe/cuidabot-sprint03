export default function Solucoes() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-extrabold" style={{ color: "var(--brand)" }}>
        Solução Proposta
      </h1>

      <p className="max-w-5xl text-slate-800">
        O <strong>CuidaBot</strong> é um assistente digital acessível, integrado ao aplicativo do
        Hospital das Clínicas, desenvolvido para apoiar pacientes com dificuldades tecnológicas.
        Ele atua como um <strong>guia interativo</strong>, promovendo inclusão digital, autonomia e uma
        experiência mais humanizada no acesso a serviços de saúde.
      </p>

      <div className="space-y-3">
        <h2 className="text-xl font-bold">Principais Funcionalidades:</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>🧭 Navegação assistida por interface simples, com ícones intuitivos e linguagem acessível.</li>
          <li>📅 Orientação para agendamento de consultas e exames.</li>
          <li>🔔 Acompanhamento pós-alta com lembretes e orientações.</li>
          <li>🦻 Suporte à acessibilidade digital: alto contraste, ampliação de fontes e leitura por voz.</li>
          <li>💬 Atendimento remoto para dúvidas simples, evitando deslocamentos.</li>
          <li>❤️ Foco na experiência do usuário: sistema funcional, inclusivo e fácil de usar.</li>
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-bold">Recursos Técnicos Aplicados:</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>✅ Layout responsivo, compatível com dispositivos móveis e desktops.</li>
          <li>✅ Estrutura semântica com React + TypeScript e rotas (react-router-dom).</li>
          <li>✅ Estilização moderna com TailwindCSS (v4).</li>
          <li>✅ Validação de formulários com JavaScript/TypeScript puro.</li>
          <li>✅ Navegação fluida com componentes reutilizáveis e padronizados.</li>
        </ul>
      </div>
    </section>
  );
}
