import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, Section, SectionHeading } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { photos, processSteps } from "@/lib/site";

const title = "Como Trabalhamos | Siga Brasil Transportes";
const description =
  "Recebimento, análise, planejamento, execução, monitoramento e entrega: o processo operacional aplicado em cada operação da Siga Brasil.";

export const Route = createFileRoute("/processo")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/processo" },
    ],
    links: [{ rel: "canonical", href: "/processo" }],
  }),
  component: Processo,
});

function Processo() {
  return (
    <>
      <PageHero
        eyebrow="Como trabalhamos"
        title="Um método antes de qualquer movimento"
        description="Seis etapas que transformam um pedido em uma operação previsível, do primeiro contato à entrega."
        image={photos.gerador}
        imageAlt="Equipe da Siga Brasil posicionando gerador com caminhão Munck"
      />

      <Section>
        <SectionHeading eyebrow="Processo operacional" title="As seis etapas" />
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((s, i) => (
            <Reveal key={s.number} delay={i * 70} as="li">
              <div className="relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card">
                <span className="absolute -right-2 -top-4 text-7xl font-bold text-surface-strong">
                  {s.number}
                </span>
                <div className="relative">
                  <span className="inline-flex size-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <h2 className="mt-4 text-xl">{s.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section tone="surface">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src={photos.remocao}
              alt="Remoção técnica de equipamento com apoio de paleteira"
              loading="lazy"
              className="aspect-4/3 w-full rounded-3xl object-cover shadow-card"
            />
          </Reveal>
          <SectionHeading
            eyebrow="Segurança"
            title="Planejamento é a principal medida de segurança"
            description="Antes da execução, avaliamos acessos, peso, dimensões e riscos. Durante a operação, o controle é mantido em cada fase — com equipe treinada, equipamentos adequados e comunicação constante."
          />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
