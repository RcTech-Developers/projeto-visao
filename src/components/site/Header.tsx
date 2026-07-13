import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "FAQ", href: "#faq" },
  { label: "Parceiros", href: "#parceiros" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-sm" : "bg-background/70 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#inicio" className="flex items-center gap-2">
          <div className="relative">
            <span className="font-display text-2xl font-light tracking-tight text-brand-dark">
              Instituto
            </span>
            <span className="ml-1 rounded-md bg-brand-light/40 px-1.5 py-0.5 text-xs font-bold text-brand-dark">
              Visão Vertz
            </span>
          </div>
        </a>
        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-brand-dark/80 transition-colors hover:text-brand"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contato"
          className="hidden rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-md shadow-brand/20 transition hover:bg-brand-dark hover:shadow-lg md:inline-flex"
        >
          Agendar exame
        </a>
      </div>
    </motion.header>
  );
}
