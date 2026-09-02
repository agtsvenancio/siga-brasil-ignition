import { createFileRoute } from "@tanstack/react-router";
import { Truck } from "lucide-react";
import { CtaBand, PageHero, Section, SectionHeading } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { fleet, photos } from "@/lib/site";

const title = "Estrutura e Frota | Siga Brasil Transportes";
const description =
  "Frota do 3/4 à carreta prancha rebaixada e Muncks de 10t, 12t e 14t. Conheça a estrutura operacional da Siga Brasil Transportes.";

export const Route = createFileRoute("/estrutura")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/estrutura" },
    ],
    links: [{ rel: "canonical", href: "/estrutura" }],
  }),
  component: Estrutura,
});

const gallery = [
  { src: photos.carregamento, alt: "Carregamento de equipamento industrial em caminhão Munck" },
  { src: photos.icamento, alt: "Içamento de estrutura metálica entre galpões" },
  { src: photos.gerador, alt: "Posicionamento de gerador com caminhão Munck" },
  { src: photos.cargaMwm, alt: "Carga industrial embalada em galpão" },
  { src: photos.transporte, alt: "Caminhão Munck carregando equipamento em galpão" },
  { src: photos.munck, alt: "Caminhão Munck da Siga Brasil em pátio industrial" },
];

function Estrutura() {
  return (
    <>
      <PageHero
        eyebrow="Estrutura"
        title="A frota certa muda o resultado da operação"
        description="Veículos e equipamentos dimensionados por peso, dimensão e acesso — do 3/4 urbano à carreta prancha rebaixada, com Munck de 10t a 14t."
        image={photos.carregamento}
        imageAlt="Carregamento de equipamento industrial por Munck da Siga Brasil"
      />

      <Section>
        <SectionHeading
          eyebrow="Frota e equipamentos"
          title="Do pequeno volume à carga excedente"
          description="A configuração é definida na análise técnica, antes da execução."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {fleet.map((f, i) => (
            <Reveal key={f.name} delay={i * 40} as="article">
              <div className="flex h-full gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary">
                <Truck className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <h3 className="text-base font-bold text-graphite">{f.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="Galeria"
          title="Operações reais da Siga Brasil"
          description="Registros de carregamento, içamento e movimentação executados pela equipe."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g, i) => (
            <Reveal key={g.src + i} delay={i * 60}>
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="aspect-4/3 w-full rounded-2xl object-cover shadow-card"
              />
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Não sabe qual veículo a sua carga exige?"
        text="Envie peso, dimensões e local. A equipe indica a configuração adequada."
      />
    </>
  );
}
