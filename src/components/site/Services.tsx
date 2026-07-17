import { Reveal } from "./Reveal";
import examImg from "@/assets/exam-side.jpg";

const items = [
  "Avaliação da Acuidade Visual: Mede a capacidade do olho de distinguir detalhes e formas, sendo essencial para diagnosticar problemas de visão e determinar a necessidade de correção óptica; ",
  "Ceratometria: exame oftalmológico que mede a curvatura da córnea, essencial para diagnóstico, adaptação de lentes de contato e planejamento de cirurgias oculares;",
  "Refração Computadorizada: Utilizada para diagnosticar erros refrativos como miopia, hipermetropia, astigmatismo;",
  "Refração Subjetiva: Responsável por determinar com exatidão o grau de correção visual com base na percepção do paciente sobre qual lente proporciona melhor visão;",
  "Biomicroscopia de Segmento Anterior: Exame oftalmológico que avalia estruturas como a córnea, íris e cristalino, utilizando um biomicroscópio, conhecido como lâmpada de fenda;",
  "Fundoscopia: Exame oftalmológico que permite visualizar as estruturas internas do olho, incluindo a retina, o nervo óptico e os vasos sanguíneos que irrigam essas regiões, especialmente a mácula, responsável pela visão central detalhada; ",
  "Tonometria: Exame oftalmológico que mede a pressão intraocular, essencial para detectar e prevenir o glaucoma;",
  "Motricidade Ocular: Avalia o alinhamento ocular, movimentação dos olhos e da musculatura extra-ocular;",
  "Teste do Olhinho: Exame de triagem neonatal que detecta precocemente alterações oculares, prevenindo cegueira e garantindo o desenvolvimento visual saudável do bebê.",
];

export function Services() {
  return (
    <section id="exames" className="
    bg-gradient-to-b
    from-white
    via-brand-light/5
    to-brand-light/20
    px-4
    py-24
    md:px-6
  ">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-start">
        <Reveal>
          <div className="overflow-hidden rounded-3xl">
            <img
              src={examImg}
              alt="Exame oftalmológico"
              loading="lazy"
              className="h-full min-h-[900px] w-full object-cover rounded-3xl"
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
