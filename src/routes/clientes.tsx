import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import { CtaBand, PageHero, Section, SectionHeading } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { clients, partnersVoices, photos } from "@/lib/site";

const title = "Clientes e Parceiros | Siga Brasil Transportes";
const description =
  "Empresas atendidas pela Siga Brasil Transportes em operações de transporte, remoção técnica, içamento e armazenagem.";

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
        eyebrow="Clientes"
        title="Empresas que confiam suas cargas à Siga Brasil"
        description="Indústrias, distribuidores e prestadores de serviço que dependem de operações bem executadas."
        image={photos.cargaMwm}
        imageAlt="Carga industrial de cliente atendido pela Siga Brasil"
      />

      <Section>
        <SectionHeading eyebrow="Parceiros" title="Clientes atendidos" />
        <ul className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-border sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((c, i) => (
            <Reveal key={c} delay={i * 40} as="li" className="bg-card">
              <div className="flex min-h-28 items-center justify-center p-8 text-center text-lg font-bold tracking-wide text-graphite-soft">
                {c}
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="Depoimentos"
          title="Contatos que acompanham nossas operações"
          description="Os depoimentos completos destes parceiros serão publicados aqui após autorização de cada empresa."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {partnersVoices.map((p, i) => (
            <Reveal key={p.name} delay={i * 70} as="article">
              <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-card">
                <Quote className="size-7 text-primary" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  Depoimento em processo de autorização.
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <span className="block text-sm font-bold text-graphite">{p.name}</span>
                  {p.company ? (
                    <span className="block text-xs text-muted-foreground">{p.company}</span>
                  ) : null}
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
