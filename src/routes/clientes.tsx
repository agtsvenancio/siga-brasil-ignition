import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import { CtaBand, PageHero, Section, SectionHeading } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { ClientLogoGrid } from "@/components/site/ClientLogoGrid";
import { cn } from "@/lib/utils";
import { clients, photos, testimonials } from "@/lib/site";

const title = "Clientes e Parceiros | Siga Brasil Transportes";
const description =
  "MWM, Otis, Deutz, Andritz, Atlas Schindler, Chicago Pneumatic e outras empresas atendidas pela Siga Brasil Transportes em transporte, içamento, remoção e armazenagem.";

export const Route = createFileRoute("/clientes")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/clientes" },
    ],
    links: [{ rel: "canonical", href: "/clientes" }],
  }),
  component: Clientes,
});

function Clientes() {
  return (
    <>
      <PageHero
        eyebrow="Clientes e parceiros"
        title="Empresas que confiam suas cargas à"
        highlight="Siga Brasil"
        description={`Indústrias, fabricantes de geradores, elevadores e equipamentos e prestadores de serviço — ${clients.length} clientes e parceiros atendidos.`}
        image={photos.movimentacaoIndustrial}
        imageAlt="Equipe da Siga Brasil movimentando máquina industrial em cliente"
      />

      <Section tone="surface">
        <SectionHeading
          eyebrow="Clientes e parceiros"
          title="Clientes e parceiros"
          highlight="atendidos"
        />
        <ClientLogoGrid className="mt-12" />
      </Section>

      <Section tone="dark">
        <SectionHeading
          dark
          eyebrow="Depoimentos"
          title="O que parceiros dizem"
          highlight="sobre a Siga Brasil"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.company}
              delay={i * 60}
              as="article"
              className={cn("h-full", i < 2 ? "lg:col-span-3" : "lg:col-span-2")}
            >
              <figure className="flex h-full flex-col rounded-2xl bg-ink-card p-7">
                <p className="text-sm font-bold uppercase tracking-[0.04em] text-primary">
                  {t.company}
                </p>
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-background/90 md:text-lg">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-2 text-sm font-bold">
                  <Quote className="size-4 text-primary" aria-hidden="true" />
                  {t.name}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
