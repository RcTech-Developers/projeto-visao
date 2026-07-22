import { Reveal } from "./Reveal";
import examImg from "@/assets/exam-side.jpg";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    title: "Avaliação da Acuidade Visual",
    description:
      "Mede a capacidade do olho de distinguir detalhes e formas, sendo essencial para diagnosticar problemas de visão e determinar a necessidade de correção óptica.",
  },
  {
    title: "Ceratometria",
    description:
      "Exame oftalmológico que mede a curvatura da córnea, essencial para diagnóstico, adaptação de lentes de contato e planejamento de cirurgias oculares.",
  },
  {
    title: "Refração Computadorizada",
    description:
      "Utilizada para diagnosticar erros refrativos como miopia, hipermetropia e astigmatismo.",
  },
  {
    title: "Refração Subjetiva",
    description:
      "Responsável por determinar com exatidão o grau de correção visual com base na percepção do paciente sobre qual lente proporciona melhor visão.",
  },
  {
    title: "Biomicroscopia de Segmento Anterior",
    description:
      "Avalia estruturas como córnea, íris e cristalino utilizando um biomicroscópio, conhecido como lâmpada de fenda.",
  },
  {
    title: "Fundoscopia",
    description:
      "Permite visualizar retina, nervo óptico, vasos sanguíneos e a mácula, responsável pela visão central detalhada.",
  },
  {
    title: "Tonometria",
    description:
      "Mede a pressão intraocular, sendo fundamental para detectar e prevenir o glaucoma.",
  },
  {
    title: "Motricidade Ocular",
    description:
      "Avalia o alinhamento ocular, a movimentação dos olhos e o funcionamento da musculatura extraocular.",
  },
  {
    title: "Teste do Olhinho",
    description:
      "Exame de triagem neonatal que detecta precocemente alterações oculares, prevenindo a cegueira e garantindo o desenvolvimento visual saudável do bebê.",
  },
];

export function Services() {
  return (
    <section
      id="exames"
      className="bg-gradient-to-b from-white via-brand-light/5 to-brand-light/20 px-4 py-24 md:px-6"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-start">
        <Reveal>
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img
              src={examImg}
              alt="Exame oftalmológico"
              loading="lazy"
              className="h-full min-h-[900px] w-full rounded-3xl object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.30em] text-brand">
              Exames Realizados
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-6 text-4xl font-bold leading-tight text-brand-dark md:text-5xl">
              Avaliação oftalmológica
              <br />
              completa, sem custo
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <Accordion type="single" collapsible className="mt-12 w-full">
              {items.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-border last:border-b-0"
                >
                  <AccordionTrigger className="py-6 text-left text-base font-medium text-brand-dark hover:text-brand hover:no-underline md:text-lg">
                    {item.title}
                  </AccordionTrigger>

                  <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                    {item.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}