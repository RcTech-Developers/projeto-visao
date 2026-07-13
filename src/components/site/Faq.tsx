import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

const items = [
  { q: "A consulta é de graça mesmo?", a: "Sim. Todos os exames realizados pelo Instituto Visão Vertz são 100% gratuitos, sem custos ocultos." },
  { q: "São profissionais que fazem o atendimento?", a: "Sim, o atendimento é realizado por médicos oftalmologistas e uma equipe técnica graduada, com experiência clínica comprovada." },
  { q: "Quem pode participar?", a: "Qualquer pessoa em situação de vulnerabilidade, dos 2 aos 100 anos, cadastrada através de nossas lideranças locais parceiras." },
  { q: "Preciso de óculos. E agora?", a: "Após o exame, encaminhamos você aos nossos parceiros para acesso facilitado às lentes corretivas necessárias." },
  { q: "O paciente fica com a receita?", a: "Sim. Toda receita é entregue ao paciente ao final do atendimento, junto com orientações claras sobre os próximos passos." },
];

export function Faq() {
  return (
    <section id="faq" className="px-4 py-24 md:px-6">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
            Perguntas frequentes
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-2xl text-4xl font-bold leading-tight text-brand-dark md:text-5xl">
            Antes de agendar, tire suas dúvidas
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <Accordion type="single" collapsible className="mt-12 w-full">
            {items.map((it, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-border last:border-b-0"
              >
                <AccordionTrigger className="py-6 text-left text-base font-medium text-brand-dark hover:text-brand hover:no-underline md:text-lg">
                  {it.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                  {it.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
