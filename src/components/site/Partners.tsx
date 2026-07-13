import { Reveal } from "./Reveal";

const partners = [
  { name: "Ótica Social", role: "Laboratório social parceiro" },
  { name: "Ofta Vision Health", role: "Laboratório farmacêutico parceiro" },
];

export function Partners() {
  return (
    <section id="parceiros" className="px-4 py-24 md:px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
            Parceiros
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 text-4xl font-bold text-brand-dark md:text-5xl">
            Quem torna isso possível
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {partners.map((p, i) => (
            <Reveal key={p.name} delay={0.1 + i * 0.1}>
              <div className="group rounded-2xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg">
                <h3 className="text-2xl font-semibold text-brand-dark">{p.name}</h3>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  {p.role}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
