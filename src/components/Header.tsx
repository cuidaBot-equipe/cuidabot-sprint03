import { useNavigate, useLocation } from "react-router-dom";

const NAV = [
  { to: "/", label: "Início" },
  { to: "/integrantes", label: "Integrantes" },
  { to: "/faq", label: "FAQ" },
  { to: "/contato", label: "Contato" },
  { to: "/solucoes", label: "Solução" },
];

export default function Header() {
  const nav = useNavigate();
  const loc = useLocation();
  return (
    <header className="sticky top-0 z-50 shadow-sm" style={{ backgroundColor: "var(--brand)" }}>
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <span className="text-white text-2xl font-semibold tracking-wide">CuidaBot</span>
        <nav className="flex gap-2">
          {NAV.map((item) => {
            const active =
              loc.pathname === item.to ||
              (item.to !== "/" && loc.pathname.startsWith(item.to));
            return (
              <button
                key={item.to}
                onClick={() => nav(item.to)}
                aria-current={active ? "page" : undefined}
                className={[
                  "px-3 py-1.5 rounded-md text-sm font-semibold transition",
                  active
                    ? "bg-white text-slate-900"
                    : "text-white/90 hover:bg-white/10",
                ].join(" ")}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
