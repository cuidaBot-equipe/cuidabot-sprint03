interface BotaoPrimarioProps {
  texto: string;
  onClick: () => void;
}

export default function BotaoPrimario({ texto, onClick }: BotaoPrimarioProps) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-xl bg-sky-900 px-6 py-3 text-white font-semibold shadow hover:bg-sky-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700"
    >
      {texto} <span aria-hidden>→</span>
    </button>
  );
}
