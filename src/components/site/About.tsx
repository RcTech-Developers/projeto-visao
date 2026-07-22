import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import logo from "@/assets/virtez2.png";

const cards = [
  { title: "Missão", body: "Promover o acesso gratuito à oftalmologia de qualidade, de maneira responsável e humanizada." },
  { title: "Visão", body: "Diagnosticar, tratar e prevenir doenças oculares, corrigindo a maior causa de baixa visão: os erros refrativos." },
  { title: "Valores", body: "Responsabilidade social, ética profissional, transparência, solidariedade e voluntariado." },
  { title: "Como atuamos", body: "Parceria com lideranças locais, cadastro e agendamento orientado, atendimento humanizado por profissionais graduados." },
];

export function About() {
  return (
    <section id="sobre" className="relative px-4 py-24 md:px-6">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-brand-dark px-6 py-16 text-white md:px-14 md:py-20">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
            Quem somos
          </span>
        </Reveal>

        <div className="mt-6 grid gap-12 lg:grid-cols-2">
          <div>
            <Reveal delay={0.1}>
              <h2 className="text-4xl font-bold leading-tight md:text-5xl">
                Um braço social nascido de<br />30 anos de cuidado
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-white/80">
                Após 30 anos promovendo saúde no subúrbio do Rio de Janeiro, o Centro Médico Odontológico de Inhaúma se expandiu a fim de atender a população mais carente na área da oftalmologia. Com o apoio e experiência de profissionais habilitados em atendimentos oftalmológicos itinerantes pelo Brasil, o CEMOI criou um braço social: o Instituto Visão Vertz.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {cards.map((c, i) => (
                <Reveal key={c.title} delay={0.1 + i * 0.08}>
                  <div className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-brand-light/40 hover:bg-white/[0.08]">
                    <div>
                      <h3 className="text-lg font-bold">{c.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/75">{c.body}</p>
                    </div>
                    <div className="mt-6 grid h-10 w-10 place-items-center rounded-full bg-brand-light text-brand-dark transition group-hover:translate-x-1">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

         <Reveal delay={0.3} className="hidden lg:flex">
  <div className="sticky top-28 flex h-[930px] w-full items-center justify-center overflow-hidden rounded-3xl bg-white shadow-2xl">
    <img
      src={logo}
      alt="Instituto Visão Vertz"
       className="h-full w-full scale-110 object-contain transition-transform duration-700 hover:scale-130"
    />
  </div>
</Reveal>
        </div>
      </div>
    </section>
  );
}
