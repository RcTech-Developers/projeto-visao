import { Reveal } from "./Reveal";

export function Stats() {
  return (
    <section className="px-4 pb-24 md:px-6">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-brand-dark px-6 py-16 text-white md:px-14 md:py-20">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
            O problema que queremos resolver
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-3xl text-3xl font-bold leading-tight text-brand-gold md:text-4xl">
            A maior parte dos casos de perda visual no Brasil é evitável ou tratável. Falta é acesso.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 border-t border-white/15 pt-10 md:grid-cols-3">
          {[
            { n: "49%", d: "dos casos de cegueira são causados por erros refrativos não corrigidos" },
            { n: "26%", d: "dos casos de cegueira são causados por catarata não tratada" },
            { n: "26 mil", d: "crianças cegas no Brasil por causas evitáveis, segundo estimativas nacionais" },
          ].map((s, i) => (
            <Reveal key={s.n} delay={0.15 + i * 0.1}>
              <div>
                <div className="text-5xl font-bold text-white md:text-6xl">{s.n}</div>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/75">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
