import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import {
  CtaBand,
  PageHero,
  Section,
  SectionHeading,
  btn,
} from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { solutions } from "@/lib/site";

export const Route = createFileRoute("/solucoes/$slug")({
  loader: ({ params }) => {
    const solution = solutions.find((s) => s.slug === params.slug);
    if (!solution) throw notFound();
    return { solution };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Solução indisponível | Siga Brasil Transportes" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const s = loaderData.solution;
    const title = `${s.title} | Siga Brasil Transportes`;
    return {
      meta: [
        { title },
        { name: "description", content: s.short },
        { property: "og:title", content: title },
        { property: "og:description", content: s.short },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `/solucoes/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/solucoes/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.title,
            description: s.short,
            areaServed: "BR",
            provider: { "@type": "Organization", name: "Siga Brasil Transportes" },
          }),
        },
      ],
    };
  },
  component: SolucaoDetalhe,
});

function SolucaoDetalhe() {
  const { solution: s } = Route.useLoaderData();
  const others = solutions.filter((o) => o.slug !== s.slug);

  return (
    <>
      <PageHero
        eyebrow={`Solução ${s.number}`}
        title={s.title}
        description={s.short}
        image={s.image}
        imageAlt={s.imageAlt}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="O problema" title="O que está em jogo" description={s.problem} />

            <Reveal delay={80} className="mt-12">
              <h3 className="text-xl md:text-2xl">Quando contratar</h3>
              <ul className="mt-5 grid gap-3">
                {s.whenToHire.map((w) => (
                  <li key={w} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                    {w}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120} className="mt-12">
              <h3 className="text-xl md:text-2xl">Como executamos</h3>
              <ol className="mt-5 grid gap-px overflow-hidden rounded-3xl bg-border">
                {s.how.map((h, i) => (
                  <li key={h} className="flex gap-5 bg-card p-6">
                    <span className="text-sm font-bold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-relaxed text-graphite-soft">{h}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>

          <aside className="lg:col-span-5">
            <Reveal delay={100} className="lg:sticky lg:top-28">
              <div className="rounded-3xl bg-graphite p-8 text-background">
                <p className="eyebrow-on-dark">Diferenciais</p>
                <ul className="mt-5 grid gap-3">
                  {s.differentials.map((d) => (
                    <li key={d} className="flex gap-3 text-sm text-background/75">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      {d}
                    </li>
                  ))}
                </ul>

                <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  Tipos de carga
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.cargoTypes.map((c) => (
                    <li key={c} className="rounded-full border border-background/15 px-3.5 py-1.5 text-xs text-background/75">
                      {c}
                    </li>
                  ))}
                </ul>

                <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  Equipamentos
                </p>
                <ul className="mt-4 grid gap-2 text-sm text-background/75">
                  {s.equipment.map((e) => (
                    <li key={e} className="border-b border-background/10 pb-2">{e}</li>
                  ))}
                </ul>

                <Link to="/orcamento" className={`${btn.primary} mt-8 w-full`}>
                  Solicitar orçamento
                </Link>
              </div>
            </Reveal>
          </aside>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading eyebrow="Outras soluções" title="Combine com o restante da operação" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {others.map((o, i) => (
            <Reveal key={o.slug} delay={i * 70} as="article">
              <Link
                to="/solucoes/$slug"
                params={{ slug: o.slug }}
                className="group flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-lift"
              >
                <div>
                  <span className="text-xs font-bold text-primary">{o.number}</span>
                  <h3 className="mt-2 text-lg">{o.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{o.short}</p>
                </div>
                <ArrowUpRight className="mt-6 size-5 text-primary" aria-hidden="true" />
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
