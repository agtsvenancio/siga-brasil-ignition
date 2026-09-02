import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { CtaBand, PageHero, Section, SectionHeading } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { differentials, photos } from "@/lib/site";

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

const values = [
  { title: "Segurança", text: "Procedimentos e equipamentos corretos em cada etapa." },
  { title: "Compromisso", text: "Prazo acordado é prazo planejado." },
  { title: "Transparência", text: "Informação clara antes, durante e depois da operação." },
  { title: "Excelência operacional", text: "Execução técnica, sem improviso." },
  { title: "Respeito ao cliente", text: "Cuidado com a carga, o ambiente e as pessoas." },
];

function Empresa() {
  return (
    <>
      <PageHero
        eyebrow="A empresa"
        title="Movimentar carga pesada é uma decisão técnica"
        description="A Siga Brasil nasceu da rotina de operações que não admitem erro: equipamentos caros, acessos difíceis e prazos que impactam a produção do cliente."
        image={photos.munck}
        imageAlt="Caminhão Munck da Siga Brasil em pátio industrial"
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Quem somos"
              title="Estrutura própria, equipe treinada e análise antes da execução"
              description="Atuamos no transporte rodoviário, na remoção técnica, no içamento com Munck e na armazenagem de cargas industriais, com atendimento em todo o Brasil e base operacional em Guarulhos/SP."
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
              src={photos.carga}
              alt=""
              className="hidden"
              aria-hidden="true"
            />
            <img
              src={photos.icamento}
              alt="Içamento de estrutura metálica entre galpões industriais"
              loading="lazy"
              className="aspect-3/4 w-full rounded-3xl object-cover shadow-card sm:mt-10"
            />
            <img
              src={photos.remocao}
              alt="Equipe realizando remoção técnica de equipamento embalado"
              loading="lazy"
              className="aspect-3/4 w-full rounded-3xl object-cover shadow-card"
            />
          </Reveal>
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              t: "Missão",
              d: "Executar operações de transporte e movimentação de cargas com segurança, planejamento e respeito ao prazo do cliente.",
            },
            {
              t: "Visão",
              d: "Ser referência em operações técnicas de transporte, içamento e remoção para a indústria brasileira.",
            },
            {
              t: "Valores",
              d: "Segurança, compromisso, transparência, excelência operacional e respeito ao cliente.",
            },
          ].map((i, idx) => (
            <Reveal key={i.t} delay={idx * 80} as="article">
              <div className="h-full rounded-3xl border-t-4 border-primary bg-card p-8 shadow-card">
                <h2 className="text-2xl">{i.t}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{i.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 60} as="li">
              <div className="h-full rounded-2xl bg-card p-6">
                <CheckCircle2 className="size-5 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-base font-bold text-graphite">{v.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading eyebrow="O que nos diferencia" title="Diferenciais aplicados em cada operação" />
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
