import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Stats } from "@/components/site/Stats";
import { Services } from "@/components/site/Services";
import { Faq } from "@/components/site/Faq";
import { Partners } from "@/components/site/Partners";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsFab } from "@/components/site/WhatsFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Instituto Visão Vertz | Exame de vista gratuito" },
      {
        name: "description",
        content:
          "Instituto Visão Vertz leva exames oftalmológicos completos e gratuitos para quem mais precisa. Atendimento humanizado dos 2 aos 100 anos.",
      },
      { property: "og:title", content: "Instituto Visão Vertz | Exame de vista gratuito" },
      {
        property: "og:description",
        content: "Instituto Visão Vertz leva exames oftalmológicos completos e gratuitos para quem mais precisa. Atendimento humanizado dos 2 aos 100 anos.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <About />
      <Stats />
      <Faq />
      <Partners />
      <Contact />
      <Footer />
      <WhatsFab />
    </div>
  );
}
