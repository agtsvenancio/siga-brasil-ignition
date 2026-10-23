import { createFileRoute } from "@tanstack/react-router";
import { Truck } from "lucide-react";
import { CtaBand, PageHero, Section, SectionHeading } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";
import { fleet, fleetCategories, photos, safetyItems } from "@/lib/site";

const title = "Estrutura e Frota | Siga Brasil Transportes";
const description =
  "Frota do utilitário à carreta prancha rebaixada e Muncks de 10t, 12t e 14t. Conheça a estrutura operacional da Siga Brasil Transportes.";

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
  { src: photos.frota, alt: "Frota identificada da Siga Brasil no pátio" },
  { src: photos.munckDupla, alt: "Dois caminhões Munck içando equipamento em frente a galpão" },
  { src: photos.seguranca, alt: "Içamento de equipamento com caminhão Munck e operador com EPI" },
  { src: photos.icamentoRecygases, alt: "Munck da Siga Brasil içando rack de cilindros sobre a carroceria" },
  { src: photos.transporteEmpilhadeira, alt: "Caminhão da Siga Brasil recebendo empilhadeira para transporte" },
  { src: photos.posicionamentoGerador, alt: "Munck da Siga Brasil posicionando gerador com equipe de EPI" },
  { src: photos.truckTubosGalpao, alt: "Caminhão da Siga Brasil carregado com tubos metálicos em galpão" },
  { src: photos.apoioObras, alt: "Caminhão Munck em apoio a obra" },
  { src: photos.transporteTanque, alt: "Caminhão da Siga Brasil transportando tanque industrial" },
  { src: photos.carretaTubos, alt: "Carreta Volvo da Siga Brasil carregada com tubos de concreto" },
  { src: photos.icamentoQuiosque, alt: "Munck da Siga Brasil içando quiosque em área pública" },
  { src: photos.transporteTambores, alt: "Caminhão da Siga Brasil com tambores amarrados para transporte" },
]

function Estrutura() {
  return (
    <>
      <PageHero
        eyebrow="Estrutura"
        title="A estrutura certa para cada"
        highlight="operação"
        description="Veículos, implementos e equipamentos escolhidos conforme peso, dimensão, acesso e complexidade operacional — dos utilitários à carreta prancha, com Muncks de 10t, 12t e 14t."
        image={photos.frota}
        imageAlt="Frota da Siga Brasil estacionada no pátio"
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Estrutura operacional"
              title="Do atendimento urbano à"
              highlight="carga excedente"
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
          </div>
          <Reveal delay={100} className="lg:col-span-5">
            <img
              src={photos.truckLonaGalpao}
              alt="Caminhão Ford Cargo da Siga Brasil com carga enlonada em galpão"
              loading="lazy"
              className="aspect-4/5 w-full rounded-2xl object-cover shadow-lift"
            />
          </Reveal>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading
          eyebrow="Frota e equipamentos"
          title="Configurações"
          highlight="disponíveis"
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

      <Section tone="dark">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              dark
              eyebrow="Armazenagem"
              title="2.000 m² de"
              highlight="armazenagem"
              description="Guarda, organização e apoio ao fluxo de cargas antes ou depois do transporte, integrados ao cronograma de içamento e entrega."
            />
            <ul className="mt-8 grid gap-4">
              {safetyItems.slice(0, 3).map((s) => (
                <li key={s.title} className="flex gap-3">
                  <span className="mt-1 size-4 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <span>
                    <span className="block font-bold">{s.title}</span>
                    <span className="block text-sm text-background/70">{s.text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <Reveal delay={100}>
            <img
              src={photos.armazem}
              alt="Galpão de armazenagem da Siga Brasil em Guarulhos"
              loading="lazy"
              className="aspect-4/3 w-full rounded-2xl object-cover"
            />
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Galeria"
          title="Operações reais da"
          highlight="Siga Brasil"
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
