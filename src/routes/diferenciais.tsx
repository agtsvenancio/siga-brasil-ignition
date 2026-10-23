import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { CtaBand, PageHero, Section, SectionHeading } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { differentials, faqs, photos, safetyItems } from "@/lib/site";

const title = "Diferenciais | Siga Brasil Transportes";
const description =
  "Atendimento emergencial, operações programadas e especiais, solução completa, planejamento operacional, gestão de risco e equipe especializada.";

export const Route = createFileRoute("/diferenciais")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/diferenciais" },
    ],
    links: [{ rel: "canonical", href: "/diferenciais" }],
  }),
  component: Diferenciais,
});

function Diferenciais() {
  return (
    <>
      <PageHero
        eyebrow="Diferenciais"
        title="Segurança não é detalhe."
        highlight="É o centro da operação."
        description="Estrutura, método e equipe preparados para o que a carga exige — inclusive quando o prazo é curto."
        image={photos.seguranca}
        imageAlt="Içamento com caminhão Munck da Siga Brasil acompanhado por operador com EPI"
      />

      <Section>
        <SectionHeading eyebrow="Nossos diferenciais" title="Seis compromissos" highlight="operacionais" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {differentials.map((d, i) => (
            <Reveal key={d.title} delay={i * 60} as="article">
              <div className="h-full rounded-3xl border border-border bg-card p-8 shadow-card transition-transform hover:-translate-y-1">
                <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary/20">
                  <ShieldCheck className="size-6 text-graphite" aria-hidden="true" />
                </div>
                <h2 className="mt-5 text-xl">{d.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              dark
              eyebrow="Segurança, seguros e compliance"
              title="Procedimentos, documentação e"
              highlight="cobertura adequada"
              description="Procedimentos claros, equipamentos corretos e documentação adequada para reduzir riscos em operações corporativas e industriais."
            />
            <ul className="mt-8 grid gap-5">
              {safetyItems.map((s, i) => (
                <Reveal key={s.title} delay={i * 60} as="li" className="flex gap-4">
                  <span className="mt-0.5 size-6 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <div>
                    <h3 className="text-lg font-bold">{s.title}</h3>
                    <p className="mt-0.5 text-sm text-background/70">{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal delay={100} className="lg:col-span-5">
            <img
              src={photos.transbordoGalpao}
              alt="Munck da Siga Brasil transferindo equipamento para carreta dentro de galpão"
              loading="lazy"
              className="aspect-4/5 w-full rounded-2xl object-cover"
            />
          </Reveal>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading eyebrow="Dúvidas frequentes" title="Perguntas que recebemos" highlight="com frequência" />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 50}>
              <details className="group rounded-2xl border border-border bg-card p-6 open:shadow-card">
                <summary className="cursor-pointer list-none text-base font-bold text-graphite marker:hidden">
                  {f.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
