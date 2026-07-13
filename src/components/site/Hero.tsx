import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import heroImg from "@/assets/hero-exam.jpg";

function Counter({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => `${prefix}${Math.round(v).toLocaleString("pt-BR")}${suffix}`);
  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 1.6, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, mv]);
  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen w-full overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Paciente realizando exame de vista"
          className="h-full w-full object-cover object-[center_25%] scale-100 md:scale-95"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/85 via-brand-dark/50 to-brand-dark/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/30 via-transparent to-brand-dark/20" />
        {/* Soft fade into next section */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background md:h-56" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-brand-dark/40 px-5 py-2 backdrop-blur-md"
        >
          <span className="h-2 w-2 rounded-full bg-brand-gold" />
          <span className="text-sm font-medium text-white">Atendimento 100% gratuito e humanizado</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="max-w-4xl text-5xl font-bold leading-[1.02] text-white md:text-7xl lg:text-[5.5rem]"
        >
          Enxergar bem
          <br />
          <span className="font-bold text-brand-accent">é um direito,</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-6 max-w-2xl text-lg text-white/85 md:text-xl"
        >
          não um privilégio. Levamos exame de vista gratuito para quem mais precisa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contato"
            className="rounded-full bg-brand px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-brand-dark/40 transition hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-xl"
          >
            Agendar meu exame
          </a>
          <a
            href="#sobre"
            className="rounded-full border border-white/40 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            Conhecer o instituto
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 w-full max-w-4xl border-t border-white/25 pt-8"
        >
          <div className="grid grid-cols-1 gap-6 text-left md:grid-cols-3">
            {[
              { v: <><Counter to={60} />{" "}mil+</>, l: "atendimentos realizados" },
              { v: <><Counter to={5} /> anos+</>, l: "experiência mínima da equipe" },
              { v: "2 a 100", l: "idades atendidas (anos)" },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-white md:text-4xl">{s.v}</div>
                <div className="mt-1 text-sm text-white/75">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
