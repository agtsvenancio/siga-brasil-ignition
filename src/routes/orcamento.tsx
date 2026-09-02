import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { PageHero, Section, SectionHeading, WhatsappLink } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { QuoteForm } from "@/components/site/QuoteForm";
import { contact, faqs, photos } from "@/lib/site";

const title = "Solicitar Orçamento | Siga Brasil Transportes";
const description =
  "Solicite um orçamento de transporte, remoção técnica, içamento com Munck ou armazenagem. Envie carga, local e prazo e receba a análise da equipe.";

export const Route = createFileRoute("/orcamento")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/orcamento" },
    ],
    links: [{ rel: "canonical", href: "/orcamento" }],
  }),
  component: Orcamento,
});

function Orcamento() {
  return (
    <>
      <PageHero
        eyebrow="Orçamento"
        title="Descreva a operação e receba uma análise técnica"
        description="Informe carga, local, acesso e prazo. A equipe define veículo, equipamento e cronograma adequados."
        image={photos.gerador}
        imageAlt="Operação de içamento de gerador pela equipe Siga Brasil"
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="rounded-3xl border border-border bg-card p-7 shadow-card md:p-9">
                <h2 className="text-2xl">Formulário de solicitação</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Campos com * são obrigatórios.
                </p>
                <div className="mt-7">
                  <QuoteForm />
                </div>
              </div>
            </Reveal>
          </div>

          <aside className="lg:col-span-5">
            <Reveal delay={100} className="lg:sticky lg:top-28">
              <div className="rounded-3xl bg-graphite p-8 text-background">
                <p className="eyebrow-on-dark">O que agiliza sua resposta</p>
                <ul className="mt-5 grid gap-3">
                  {[
                    "Tipo de carga, peso e dimensões aproximados",
                    "Origem e destino (cidade/UF)",
                    "Condições de acesso: rampa, altura livre, portão, piso",
                    "Necessidade de içamento ou apoio de Munck",
                    "Data e janela de horário desejadas",
                    "Fotos da carga e do local",
                  ].map((t) => (
                    <li key={t} className="flex gap-3 text-sm text-background/75">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 border-t border-background/15 pt-6">
                  <p className="text-sm text-background/70">
                    Prefere falar direto? Chame no WhatsApp {contact.phoneLabel}.
                  </p>
                  <WhatsappLink variant="primary" className="mt-4 w-full" />
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading eyebrow="Dúvidas" title="Antes de solicitar" />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 50}>
              <details className="rounded-2xl border border-border bg-card p-6">
                <summary className="cursor-pointer list-none text-base font-bold text-graphite marker:hidden">
                  {f.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
