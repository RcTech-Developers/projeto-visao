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
  { q: "O paciente fica com a receita?", a: "Não existe nenhuma obrigatoriedade de aquisição de lentes ou medicamentos indicados com nenhum fornecedor específico." },
];

export function Faq() {
  return (
    <section id="duvidas" className="px-4 py-24 md:px-6">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.30em] text-brand">
            Perguntas frequentes
          </span>
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
