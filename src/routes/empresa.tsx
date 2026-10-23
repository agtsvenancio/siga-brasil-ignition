import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, Section, SectionHeading } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { contact, differentials, institutional, photos, stats } from "@/lib/site";

const title = "A Empresa | Siga Brasil Transportes";
const description =
  "Conheça a Siga Brasil Transportes: estrutura, missão, visão e valores de uma operação de transporte e movimentação de cargas com base em Guarulhos/SP.";

export const Route = createFileRoute("/empresa")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/empresa" },
    ],
    links: [{ rel: "canonical", href: "/empresa" }],
  }),
  component: Empresa,
});

function Empresa() {
  return (
    <>
      <PageHero
        eyebrow="A empresa"
        title="Precisão técnica para"
        highlight="operações complexas"
        description="Transporte rodoviário, remoção técnica, içamento, movimentação de cargas e armazenagem — com equipe qualificada, equipamentos adequados e planejamento."
        image={photos.munckDupla}
        imageAlt="Dois caminhões Munck da Siga Brasil içando equipamento industrial"
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Quem somos"
              title="Estrutura própria, equipe treinada e"
              highlight="análise antes da execução"
              description="A Siga Brasil Transportes atua em transporte rodoviário, remoção técnica, içamento, movimentação de cargas e armazenagem. Equipe qualificada, equipamentos adequados e planejamento para demandas de pequeno, médio e grande porte."
            />
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                Nossa operação começa antes do caminhão sair: entender a carga, o local, o
                acesso e o prazo é o que define o veículo, a equipe e o método de
                movimentação.
              </p>
              <p>
                Do 3/4 à carreta prancha rebaixada, dos Muncks de 10t aos de 14t, a estrutura
                é dimensionada para operações do pequeno ao grande porte — inclusive as que
                precisam acontecer com a planta do cliente em funcionamento.
              </p>
            </div>
          </div>
          <Reveal delay={100} className="grid gap-4 sm:grid-cols-2">
            <img
              src={photos.seguranca}
              alt="Operador com EPI acompanhando içamento com caminhão Munck da Siga Brasil"
              loading="lazy"
              className="aspect-3/4 w-full rounded-3xl object-cover shadow-card sm:mt-10"
            />
            <img
              src={photos.equipeMaquina}
              alt="Equipe da Siga Brasil realizando remoção técnica de máquina industrial"
              loading="lazy"
              className="aspect-3/4 w-full rounded-3xl object-cover shadow-card"
            />
          </Reveal>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading eyebrow="Missão, visão e valores" title="O que orienta" highlight="cada operação" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {institutional.map((i, idx) => (
            <Reveal key={i.title} delay={idx * 70} as="article">
              <div className="h-full rounded-2xl border-t-4 border-primary bg-card p-7 shadow-card">
                <h2 className="text-xl font-bold">{i.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{i.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120} className="mt-10">
          <div className="rounded-xl bg-primary px-6 py-5 text-primary-foreground">
            <p className="text-base font-bold uppercase md:text-lg">
              Base em Guarulhos/SP. Atuação nacional.
            </p>
            <p className="mt-1 text-sm md:text-base">{contact.coverageDetail}</p>
          </div>
        </Reveal>
      </Section>

      <Section tone="dark">
        <SectionHeading
          dark
          eyebrow="Siga Brasil em números"
          title="Estrutura que transmite"
          highlight="capacidade"
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 50} as="li">
              <div className="h-full rounded-2xl bg-ink-card p-6">
                <p className="text-2xl font-bold text-primary md:text-3xl">{s.value}</p>
                <p className="mt-1.5 text-sm text-background/75">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading eyebrow="O que nos diferencia" title="Diferenciais aplicados em" highlight="cada operação" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {differentials.map((d, i) => (
            <Reveal key={d.title} delay={i * 60} as="article">
              <div className="h-full rounded-3xl border border-border p-7">
                <span className="text-xs font-bold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
