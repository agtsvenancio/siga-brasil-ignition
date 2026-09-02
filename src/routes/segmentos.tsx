import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, Section, SectionHeading } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { photos, segments } from "@/lib/site";

const title = "Segmentos Atendidos | Siga Brasil Transportes";
const description =
  "Construção civil, indústrias, logística, montagens e desmontagens, empresas e comércios: segmentos atendidos pela Siga Brasil Transportes.";

export const Route = createFileRoute("/segmentos")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/segmentos" },
    ],
    links: [{ rel: "canonical", href: "/segmentos" }],
  }),
  component: Segmentos,
});

function Segmentos() {
  return (
    <>
      <PageHero
        eyebrow="Segmentos"
        title="Setores que dependem de movimentação bem executada"
        description="Da obra à planta industrial, cada segmento tem restrições próprias de acesso, horário e prazo."
        image={photos.icamento}
        imageAlt="Içamento de estrutura metálica em área industrial"
      />

      <Section>
        <SectionHeading eyebrow="Atendimento" title="Onde a Siga Brasil atua" />
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {segments.map((s, i) => (
            <Reveal key={s.number} delay={i * 60} as="li">
              <div className="h-full rounded-3xl border-l-4 border-primary bg-card p-8 shadow-card">
                <span className="text-xs font-bold text-primary">{s.number}</span>
                <h2 className="mt-3 text-xl">{s.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <CtaBand />
    </>
  );
}
