import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, Section, SectionHeading } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { cargoCategories, photos } from "@/lib/site";

const title = "Tipos de Carga | Siga Brasil Transportes";
const description =
  "Geradores, transformadores, containers, empilhadeiras, equipamentos industriais e hospitalares: cargas movimentadas pela Siga Brasil Transportes.";

export const Route = createFileRoute("/cargas")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/cargas" },
    ],
    links: [{ rel: "canonical", href: "/cargas" }],
  }),
  component: Cargas,
});

function Cargas() {
  return (
    <>
      <PageHero
        eyebrow="Tipos de carga"
        title="Cada carga define o método"
        description="Peso, dimensão, fragilidade e acesso determinam o veículo, a amarração e o plano de movimentação."
        image={photos.cargaMwm}
        imageAlt="Carga industrial embalada aguardando movimentação em galpão"
      />

      <Section>
        <SectionHeading
          eyebrow="O que movimentamos"
          title="Cargas atendidas pela Siga Brasil"
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-border sm:grid-cols-2 lg:grid-cols-3">
          {cargoCategories.map((c, i) => (
            <Reveal key={c.title} delay={i * 50} as="article" className="bg-card p-8">
              <span className="text-xs font-bold text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-3 text-xl">{c.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              dark
              eyebrow="Cargas especiais"
              title="Operações que exigem estudo prévio"
              description="Cargas excedentes, ambientes com acesso restrito e equipamentos sensíveis são tratados caso a caso, com definição de rota, apoio e cronograma."
            />
          </div>
          <Reveal delay={100}>
            <img
              src={photos.carregamento}
              alt="Carregamento de equipamento industrial de grande porte"
              loading="lazy"
              className="aspect-4/3 w-full rounded-3xl object-cover"
            />
          </Reveal>
        </div>
      </Section>

      <CtaBand
        title="Sua carga não está na lista?"
        text="Descreva a operação e receba uma análise técnica com a configuração adequada."
      />
    </>
  );
}
