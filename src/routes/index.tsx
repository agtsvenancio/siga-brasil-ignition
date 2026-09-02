import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Timer, Truck } from "lucide-react";
import {
  CtaBand,
  CtaLink,
  Section,
  SectionHeading,
  WhatsappLink,
  btn,
} from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";
import {
  cargoCategories,
  clients,
  differentials,
  photos,
  processSteps,
  segments,
  solutions,
} from "@/lib/site";

const title = "Siga Brasil Transportes | Transporte, Içamento e Remoção Técnica";
const description =
  "Transporte rodoviário, remoção técnica, içamento com Munck 10t a 14t e armazenagem para operações industriais em todo o Brasil. Base em Guarulhos/SP.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-graphite text-background">
        <img
          src={photos.transporte}
          alt="Caminhão Munck da Siga Brasil carregando equipamento industrial dentro de um galpão"
          className="absolute inset-0 size-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-linear-to-r from-graphite via-graphite/92 to-graphite/35" />
        <div className="container-site relative grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:py-32">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow-on-dark rule-y">Transporte e movimentação de cargas</p>
              <h1 className="mt-5 text-4xl leading-[1.03] md:text-6xl lg:text-7xl">
                Cargas pesadas exigem{" "}
                <span className="text-primary">planejamento</span>, não improviso.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-background/75 md:text-lg">
                Transporte rodoviário, remoção técnica, içamento com Munck e armazenagem
                para operações industriais em todo o Brasil.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <CtaLink to="/orcamento">Solicitar orçamento</CtaLink>
                <WhatsappLink variant="ghostOnDark" />
              </div>
            </Reveal>

            <Reveal delay={120} className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                { icon: Truck, label: "Frota do 3/4 à carreta rebaixada" },
                { icon: ShieldCheck, label: "Munck de 10t, 12t e 14t" },
                { icon: Timer, label: "Atendimento emergencial" },
              ].map((i) => (
                <div key={i.label} className="flex items-start gap-3 border-t border-background/15 pt-4">
                  <i.icon className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <p className="text-sm text-background/75">{i.label}</p>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal delay={160} className="lg:col-span-5 lg:pl-8">
            <div className="rounded-3xl border border-background/15 bg-graphite-deep/70 p-7 backdrop-blur">
              <p className="eyebrow-on-dark">Operação sob medida</p>
              <h2 className="mt-3 text-2xl">O que você precisa mover?</h2>
              <ul className="mt-6 grid gap-2.5">
                {solutions.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to="/solucoes/$slug"
                      params={{ slug: s.slug }}
                      className="group flex items-center justify-between gap-4 rounded-2xl border border-background/10 bg-background/5 px-5 py-4 text-sm font-semibold transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <span>{s.title}</span>
                      <ArrowUpRight className="size-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
        <div className="h-1.5 w-full bg-primary" />
      </section>

      {/* Soluções */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Soluções"
            title="Quatro frentes que se combinam em uma única operação"
            description="Contrate de forma isolada ou integrada, conforme a necessidade da sua carga."
          />
          <Reveal delay={80}>
            <Link to="/solucoes" className={btn.outline}>
              Ver todas as soluções
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {solutions.map((s, idx) => (
            <Reveal key={s.slug} delay={idx * 70} as="article">
              <Link
                to="/solucoes/$slug"
                params={{ slug: s.slug }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="relative aspect-16/10 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.imageAlt}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-5 top-5 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                    {s.number}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-xl md:text-2xl">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.short}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-graphite">
                    Conhecer a solução
                    <ArrowUpRight className="size-4 text-primary" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Sobre */}
      <Section tone="surface">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative">
            <img
              src={photos.munck}
              alt="Caminhão Munck amarelo da Siga Brasil posicionado em pátio industrial"
              loading="lazy"
              className="aspect-4/3 w-full rounded-3xl object-cover shadow-lift"
            />
            <div className="absolute -bottom-6 -right-2 hidden rounded-2xl bg-primary px-6 py-5 shadow-lift md:block">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground/70">
                Base operacional
              </p>
              <p className="mt-1 text-lg font-bold text-primary-foreground">Guarulhos • SP</p>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="A empresa"
              title="Cada carga tem um contexto. Cada operação, um plano."
              description="A Siga Brasil atua no transporte e na movimentação de cargas industriais com estrutura própria, equipe treinada e análise técnica antes da execução — do planejamento à entrega."
            />
            <ul className="mt-8 grid gap-3">
              {[
                "Atendimento rodoviário em todo o Brasil",
                "Frota do 3/4 à carreta prancha rebaixada",
                "Munck de 10t, 12t e 14t para içamento",
                "Transporte, remoção, içamento e armazenagem integrados",
              ].map((t, i) => (
                <Reveal key={t} delay={i * 60} as="li" className="flex gap-3 text-sm text-graphite-soft">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  {t}
                </Reveal>
              ))}
            </ul>
            <Reveal delay={200} className="mt-8">
              <Link to="/empresa" className={btn.dark}>
                Conhecer a empresa
              </Link>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Processo */}
      <Section tone="dark">
        <SectionHeading
          dark
          eyebrow="Como trabalhamos"
          title="Seis etapas entre o seu pedido e a carga no destino"
          description="Um método simples e verificável, aplicado em toda operação."
        />
        <ol className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-background/10 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((s, i) => (
            <Reveal key={s.number} delay={i * 60} as="li" className="bg-graphite p-8">
              <span className="text-3xl font-bold text-primary">{s.number}</span>
              <h3 className="mt-4 text-lg">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-background/65">{s.text}</p>
            </Reveal>
          ))}
        </ol>
        <Reveal delay={200} className="mt-10">
          <Link to="/processo" className={btn.ghostOnDark}>
            Ver o processo completo
          </Link>
        </Reveal>
      </Section>

      {/* Cargas */}
      <Section>
        <SectionHeading
          eyebrow="Tipos de carga"
          title="Do equipamento hospitalar ao transformador"
          description="Cada tipo de carga define o veículo, o método de amarração e o plano de movimentação."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cargoCategories.map((c, i) => (
            <Reveal key={c.title} delay={i * 50} as="article" className="h-full">
              <div className="h-full rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary">
                <h3 className="text-base font-bold text-graphite">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={350} as="article" className="h-full">
            <Link
              to="/cargas"
              className="flex h-full flex-col justify-between rounded-2xl bg-graphite p-6 text-background transition-colors hover:bg-graphite-deep"
            >
              <h3 className="text-base font-bold">Sua carga é diferente?</h3>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Ver todos os tipos
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </span>
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* Diferenciais */}
      <Section tone="surface">
        <SectionHeading
          eyebrow="Diferenciais"
          title="Por que empresas confiam a carga à Siga Brasil"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {differentials.map((d, i) => (
            <Reveal key={d.title} delay={i * 60} as="article">
              <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-card">
                <div className="size-11 rounded-xl bg-primary/20 p-2.5">
                  <ShieldCheck className="size-6 text-graphite" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Segmentos */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Segmentos atendidos"
              title="Setores que dependem de movimentação bem executada"
            />
            <Reveal delay={120} className="mt-8">
              <img
                src={photos.gerador}
                alt="Operação de içamento de gerador com caminhão Munck da Siga Brasil"
                loading="lazy"
                className="aspect-4/3 w-full rounded-3xl object-cover shadow-card"
              />
            </Reveal>
          </div>
          <ul className="grid gap-px self-start overflow-hidden rounded-3xl bg-border">
            {segments.map((s, i) => (
              <Reveal key={s.number} delay={i * 60} as="li" className="bg-card p-7">
                <div className="flex gap-5">
                  <span className="text-sm font-bold text-primary">{s.number}</span>
                  <div>
                    <h3 className="text-lg">{s.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{s.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      {/* Clientes */}
      <Section tone="dark">
        <SectionHeading
          dark
          align="center"
          eyebrow="Clientes e parceiros"
          title="Empresas atendidas pela Siga Brasil"
        />
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {clients.map((c, i) => (
            <Reveal key={c} delay={i * 40}>
              <span className={cn(
                "inline-flex items-center rounded-full border border-background/15 px-5 py-2.5 text-sm font-semibold tracking-wide text-background/80",
              )}>
                {c}
              </span>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200} className="mt-10 text-center">
          <Link to="/clientes" className={btn.ghostOnDark}>
            Ver clientes e depoimentos
          </Link>
        </Reveal>
      </Section>

      <CtaBand />
    </>
  );
}
