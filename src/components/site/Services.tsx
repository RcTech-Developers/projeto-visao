import { Reveal } from "./Reveal";
import examImg from "@/assets/exam-side.jpg";

const items = [
  "Avaliação da Acuidade Visual",
  "Ceratometria",
  "Refração Computadorizada",
  "Refração Subjetiva",
  "Biomicroscopia de Segmento Anterior",
  "Fundoscopia (Fundo de Olho)",
  "Tonometria (Pressão Intraocular)",
  "Motricidade Ocular",
  "Teste do Olhinho (Reflexo Vermelho)",
];

export function Services() {
  return (
    <section className="px-4 py-24 md:px-6">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-start">
        <Reveal>
          <div className="overflow-hidden rounded-3xl">
            <img
              src={examImg}
              alt="Exame oftalmológico"
              loading="lazy"
              className="h-[560px] w-full object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight text-brand-dark md:text-4xl">
              Avaliação oftalmológica<br />completa, sem custo
            </h2>
          </Reveal>
          <ul className="mt-10 divide-y divide-border">
            {items.map((it, i) => (
              <Reveal key={it} delay={i * 0.05}>
                <li className="group flex items-center gap-6 py-5 transition hover:pl-2">
                  <span className="w-6 text-xs font-semibold text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base text-brand-dark/85 group-hover:text-brand-dark">
                    {it}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
