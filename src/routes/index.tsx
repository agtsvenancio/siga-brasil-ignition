import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Quote } from "lucide-react";
import {
  CtaBand,
  CtaLink,
  Section,
  SectionHeading,
  WhatsappLink,
  btn,
} from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { ClientLogoGrid } from "@/components/site/ClientLogoGrid";
import { cn } from "@/lib/utils";
import {
  brand,
  contact,
  fleetCategories,
  institutional,
  operations,
  photos,
  processSteps,
  safetyItems,
  solutions,
  stats,
  testimonials,
} from "@/lib/site";

const title = "Siga Brasil Transportes | Transporte, Içamento, Remoção e Armazenagem";
const description =
  "Transporte rodoviário, remoção técnica, içamento com Munck 10t, 12t e 14t e 2.000 m² de armazenagem. Base em Guarulhos/SP e atendimento em todo o Brasil.";

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
      {/* Hero — capa da apresentação */}
      <section className="relative overflow-hidden bg-ink text-background">
        <img
          src={photos.frota}
          alt="Frota da Siga Brasil: carretas, caminhões Munck e vans identificados no pátio"
          className="absolute inset-0 size-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/90 to-ink/30" />
        <div className="container-site relative py-20 md:py-28 lg:py-32">
          <Reveal className="max-w-3xl">
            <p className="eyebrow-on-dark rule-y">Transporte e movimentação de cargas</p>
            <h1 className="title-sb mt-6 text-4xl leading-[1.05] md:text-6xl lg:text-7xl">
              Movendo desafios. <span className="hl">Elevando confiança.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-background/80 md:text-lg">
              Precisão técnica para operações complexas: transporte rodoviário, remoção
              técnica, içamento com Munck e armazenagem para demandas de pequeno, médio e
              grande porte.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <CtaLink to="/orcamento">Solicitar avaliação da operação</CtaLink>
              <WhatsappLink variant="ghostOnDark" />
            </div>
          </Reveal>

          <Reveal delay={140} className="mt-14">
            <p className="inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-lg bg-background/10 px-5 py-3 text-xs font-bold uppercase tracking-[0.06em] text-background backdrop-blur md:text-sm">
              {brand.pillars.map((p, i) => (
                <span key={p} className="inline-flex items-center gap-3">
                  {i > 0 ? <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" /> : null}
                  {p}
                </span>
              ))}
            </p>
          </Reveal>
        </div>
        <div className="h-1.5 w-full bg-primary" />
      </section>

      {/* Quem somos */}
      <Section tone="surface">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Quem somos"
              title="Precisão técnica para"
              highlight="operações complexas"
              description="A Siga Brasil Transportes atua em transporte rodoviário, remoção técnica, içamento, movimentação de cargas e armazenagem. Equipe qualificada, equipamentos adequados e planejamento para demandas de pequeno, médio e grande porte."
            />
            <dl className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2">
              {institutional.map((item, i) => (
                <Reveal key={item.title} delay={i * 60}>
                  <dt className="text-sm font-bold uppercase tracking-[0.06em] text-graphite">
                    {item.title}
                  </dt>
                  <dd className="mt-2 text-base leading-relaxed text-graphite-soft">{item.text}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
          <Reveal delay={100} className="lg:col-span-5">
            <img
              src={photos.munckDupla}
              alt="Dois caminhões Munck da Siga Brasil içando equipamento em frente a galpão industrial"
              loading="lazy"
              className="aspect-4/3 w-full rounded-2xl object-cover shadow-lift"
            />
          </Reveal>
        </div>
        <Reveal delay={120} className="mt-12">
          <div className="rounded-xl bg-primary px-6 py-5 text-primary-foreground">
            <p className="text-base font-bold uppercase md:text-lg">
              Base em Guarulhos/SP. Atuação nacional.
            </p>
            <p className="mt-1 text-sm md:text-base">{contact.coverageDetail}</p>
          </div>
        </Reveal>
      </Section>

      {/* Nossas soluções — quatro frentes */}
      <Section tone="dark" id="solucoes">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            dark
            eyebrow="Nossas soluções"
            title="Capacidade técnica em"
            highlight="quatro frentes"
            description="Soluções coordenadas para transportar, armazenar, remover e posicionar cargas com segurança."
          />
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s, idx) => {
            const accent = idx === solutions.length - 1;
            return (
              <Reveal key={s.slug} delay={idx * 70} as="article" className="h-full">
                <Link
                  to="/solucoes/$slug"
                  params={{ slug: s.slug }}
                  className={cn(
                    "group flex h-full min-h-60 flex-col rounded-2xl border p-7 transition-colors",
                    accent
                      ? "border-primary bg-primary text-primary-foreground hover:bg-yellow-deep"
                      : "border-background/10 bg-ink-card hover:border-primary",
                  )}
                >
                  <span
                    className={cn(
                      "self-end text-xl font-bold",
                      accent ? "text-primary-foreground" : "text-primary",
                    )}
                  >
                    {s.number}
                  </span>
                  <h3 className="mt-1 text-xl">{s.title}</h3>
                  <p
                    className={cn(
                      "mt-4 flex-1 text-sm leading-relaxed",
                      accent ? "text-primary-foreground/85" : "text-background/75",
                    )}
                  >
                    {s.short}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                    Conhecer
                    <ArrowUpRight
                      className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200} className="mt-12">
          <p className="text-sm font-bold uppercase tracking-[0.06em] text-primary">
            Atendimento emergencial e operações programadas
          </p>
          <p className="mt-2 text-base text-background/80">
            Planejamento dedicado, equipe especializada e soluções integradas para cada demanda.
          </p>
        </Reveal>
      </Section>

      {/* Números */}
      <Section tone="surface">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <SectionHeading
              eyebrow="Siga Brasil em números"
              title="Estrutura que transmite"
              highlight="capacidade"
              description="Indicadores que reforçam porte, organização e prontidão operacional para demandas corporativas."
            />
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 50} as="li">
                  <div className="h-full rounded-2xl border border-border bg-card p-6">
                    <p className="text-2xl font-bold text-primary md:text-[1.7rem]">{s.value}</p>
                    <p className="mt-1.5 text-sm text-graphite-soft">{s.label}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal delay={120} className="lg:col-span-4">
            <figure className="h-full rounded-3xl bg-card p-5 shadow-card">
              <figcaption className="px-1 pb-4 pt-1 text-2xl font-bold text-graphite">
                Nossa estrutura
              </figcaption>
              <img
                src={photos.armazem}
                alt="Galpão de armazenagem da Siga Brasil com cargas paletizadas, empilhadeira e caminhões"
                loading="lazy"
                className="aspect-square w-full rounded-2xl object-cover lg:aspect-auto lg:h-[calc(100%-3.5rem)]"
              />
            </figure>
          </Reveal>
        </div>
      </Section>

      {/* Estrutura operacional */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Estrutura operacional"
              title="A estrutura certa para cada"
              highlight="operação"
              description="Veículos, implementos e equipamentos escolhidos conforme peso, dimensão, acesso e complexidade operacional."
            />
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {fleetCategories.map((f, i) => (
                <Reveal key={f.name} delay={i * 50} as="li">
                  <div className="flex h-full overflow-hidden rounded-xl border border-border bg-card">
                    <span
                      className={cn("w-1.5 shrink-0", f.accent ? "bg-primary" : "bg-graphite")}
                      aria-hidden="true"
                    />
                    <div className="px-5 py-4">
                      <h3 className="text-base font-bold text-graphite">{f.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{f.detail}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={200} className="mt-8">
              <Link to="/estrutura" className={btn.dark}>
                Ver frota e equipamentos
              </Link>
            </Reveal>
          </div>
          <Reveal delay={100} className="lg:col-span-5">
            <img
              src={photos.frota}
              alt="Frota identificada da Siga Brasil estacionada no pátio"
              loading="lazy"
              className="aspect-4/5 w-full rounded-2xl object-cover shadow-lift"
            />
          </Reveal>
        </div>
      </Section>

      {/* Segurança */}
      <Section tone="surface">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="rounded-3xl bg-primary p-3">
              <div className="overflow-hidden rounded-2xl bg-graphite">
                <img
                  src={photos.seguranca}
                  alt="Operador com EPI controlando içamento de equipamento com caminhão Munck da Siga Brasil"
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover"
                />
                <div className="p-6 text-background">
                  <p className="text-xs font-bold uppercase tracking-[0.06em] text-primary">
                    Segurança operacional
                  </p>
                  <p className="mt-2 text-lg font-bold">
                    Planejamento para minimizar riscos em cada operação.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow rule-y">Segurança e responsabilidade</p>
              <h2 className="title-sb mt-5 text-3xl leading-[1.12] md:text-4xl lg:text-5xl">
                Segurança não é detalhe.
                <span className="hl block">É o centro da operação.</span>
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Procedimentos claros, equipamentos corretos e documentação adequada para reduzir
                riscos em operações corporativas e industriais.
              </p>
            </Reveal>
            <ul className="mt-8 grid gap-5">
              {safetyItems.map((s, i) => (
                <Reveal key={s.title} delay={i * 60} as="li" className="flex gap-4">
                  <span className="mt-0.5 size-6 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <div>
                    <h3 className="text-lg font-bold text-graphite">{s.title}</h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Cargas e operações */}
      <Section tone="dark">
        <SectionHeading
          dark
          eyebrow="Cargas movimentadas e operações reais"
          title="Diferentes cargas."
          highlight="Operações planejadas."
          description="Máquinas industriais, geradores, transformadores, containers, empilhadeiras, estruturas metálicas e equipamentos hospitalares e de construção civil."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {operations.map((o, i) => (
            <Reveal key={o.title} delay={i * 80} as="article">
              <img
                src={o.image}
                alt={o.alt}
                loading="lazy"
                className="aspect-4/3 w-full rounded-xl object-cover"
              />
              <h3 className="mt-5 text-xl font-semibold text-primary">{o.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-background/80">{o.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200} className="mt-10">
          <div className="flex flex-col gap-2 rounded-xl bg-primary px-6 py-5 text-primary-foreground md:flex-row md:items-center md:gap-10">
            <p className="text-lg font-bold uppercase md:shrink-0">2.000 m² de armazenagem</p>
            <p className="text-sm md:text-base">
              Guarda, organização e apoio ao fluxo de cargas antes ou depois do transporte.
            </p>
          </div>
        </Reveal>
        <Reveal delay={240} className="mt-8 flex flex-wrap gap-3">
          <Link to="/cargas" className={btn.ghostOnDark}>
            Ver tipos de carga
          </Link>
          <Link to="/cases" className={btn.ghostOnDark}>
            Ver operações
          </Link>
        </Reveal>
      </Section>

      {/* Processo */}
      <Section>
        <SectionHeading
          eyebrow="Como trabalhamos"
          title="Seis etapas entre o pedido e a"
          highlight="carga no destino"
          description="Um método simples e verificável, aplicado em toda operação."
        />
        <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((s, i) => (
            <Reveal key={s.number} delay={i * 50} as="li" className="bg-card p-7">
              <span className="text-2xl font-bold text-primary">{s.number}</span>
              <h3 className="mt-3 text-lg">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Clientes e parceiros */}
      <Section tone="surface">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Clientes e parceiros"
            title="Clientes e parceiros"
            highlight="atendidos"
          />
          <Reveal delay={80}>
            <Link to="/clientes" className={btn.outline}>
              Ver clientes e depoimentos
            </Link>
          </Reveal>
        </div>
        <ClientLogoGrid className="mt-12" />
      </Section>

      {/* Depoimentos */}
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
