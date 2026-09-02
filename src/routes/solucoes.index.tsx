import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { CtaBand, PageHero, Section, SectionHeading } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { photos, solutions } from "@/lib/site";

const title = "Soluções | Transporte, Remoção, Içamento e Armazenagem";
const description =
  "Transporte rodoviário, remoção técnica, içamento com Munck e armazenagem. Contrate de forma isolada ou integrada, conforme a sua operação.";

export const Route = createFileRoute("/solucoes/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/solucoes" },
    ],
    links: [{ rel: "canonical", href: "/solucoes" }],
  }),
  component: SolucoesIndex,
});

function SolucoesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Soluções"
        title="Quatro frentes, uma operação coordenada"
        description="Transporte rodoviário, remoção técnica, içamento com Munck e armazenagem — combinados conforme o que a sua carga exige."
        image={photos.icamento}
        imageAlt="Içamento de estrutura metálica por caminhão Munck"
      />

      <Section>
        <SectionHeading
          eyebrow="Escolha a frente"
          title="O que a sua carga precisa hoje?"
          description="Cada solução tem página própria com aplicação, método, diferenciais e equipamentos."
        />
        <div className="mt-12 grid gap-8">
          {solutions.map((s, i) => (
            <Reveal key={s.slug} delay={i * 70} as="article">
              <Link
                to="/solucoes/$slug"
                params={{ slug: s.slug }}
                className="group grid overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-lift lg:grid-cols-2"
              >
                <div className="relative aspect-16/10 overflow-hidden lg:aspect-auto lg:min-h-72">
                  <img
                    src={s.image}
                    alt={s.imageAlt}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-10">
                  <span className="text-sm font-bold text-primary">{s.number}</span>
                  <h2 className="mt-2 text-2xl md:text-3xl">{s.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {s.short}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {s.differentials.map((d) => (
                      <li
                        key={d}
                        className="rounded-full bg-surface px-3.5 py-1.5 text-xs font-semibold text-graphite-soft"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-graphite">
                    Ver detalhes
                    <ArrowUpRight className="size-4 text-primary" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
