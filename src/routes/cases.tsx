import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, Section, SectionHeading } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { cases, operations, photos } from "@/lib/site";

const title = "Cases e Operações | Siga Brasil Transportes";
const description =
  "Operações reais de remoção técnica, içamento e carregamento executadas pela Siga Brasil Transportes.";

export const Route = createFileRoute("/cases")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/cases" },
    ],
    links: [{ rel: "canonical", href: "/cases" }],
  }),
  component: Cases,
});

function Cases() {
  return (
    <>
      <PageHero
        eyebrow="Cases"
        title="Operações executadas,"
        highlight="resultados controlados"
        description="Registros de operações realizadas pela equipe da Siga Brasil, com desafio e resultado descritos de forma objetiva."
        image={photos.operacaoCampo}
        imageAlt="Carregamento de equipamento industrial pela equipe da Siga Brasil"
      />

      <Section>
        <SectionHeading eyebrow="Cases" title="Desafio e" highlight="resultado" />
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.title} delay={i * 80} as="article">
              <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card">
                <img
                  src={c.image}
                  alt={c.alt}
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-7">
                  <h2 className="text-lg">{c.title}</h2>
                  <dl className="mt-4 grid gap-3 text-sm">
                    <div>
                      <dt className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                        Desafio
                      </dt>
                      <dd className="mt-1 text-muted-foreground">{c.challenge}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                        Resultado
                      </dt>
                      <dd className="mt-1 text-muted-foreground">{c.result}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200} className="mt-10">
          <p className="rounded-2xl bg-surface p-6 text-sm leading-relaxed text-muted-foreground">
            Novos cases são publicados conforme a autorização dos clientes envolvidos. Para
            informações detalhadas sobre operações semelhantes à sua, fale com a equipe.
          </p>
        </Reveal>
      </Section>

      <Section tone="dark">
        <SectionHeading
          dark
          eyebrow="Operações reais"
          title="Diferentes cargas."
          highlight="Operações planejadas."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {operations.map((o, i) => (
            <Reveal key={o.title} delay={i * 80} as="article">
              <img src={o.image} alt={o.alt} loading="lazy" className="aspect-4/3 w-full rounded-xl object-cover" />
              <h2 className="mt-5 text-xl font-semibold text-primary">{o.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-background/80">{o.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
