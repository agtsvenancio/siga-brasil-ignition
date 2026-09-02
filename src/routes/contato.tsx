import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import {
  CtaBand,
  PageHero,
  Section,
  SectionHeading,
  WhatsappLink,
} from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { QuoteForm } from "@/components/site/QuoteForm";
import { contact, faqs, photos } from "@/lib/site";

const title = "Contato | Siga Brasil Transportes — Guarulhos/SP";
const description =
  "Fale com a Siga Brasil Transportes: (11) 99935-2524, tiago@sigabr.com.br. Rua Silvestre Vasconcelos Calmon, 444 — Vila Pedro Moreira, Guarulhos/SP.";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Contato,
});

const mapSrc =
  "https://www.google.com/maps?q=Rua+Silvestre+Vasconcelos+Calmon,+444,+Vila+Pedro+Moreira,+Guarulhos+-+SP&output=embed";

function Contato() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Fale com quem vai planejar a sua operação"
        description="Atendimento em todo o Brasil, com base operacional em Guarulhos/SP."
        image={photos.transporte}
        imageAlt="Caminhão Munck da Siga Brasil em operação"
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Canais diretos" title="Como falar com a Siga Brasil" />
            <ul className="mt-8 grid gap-4">
              {[
                {
                  icon: Phone,
                  label: "Telefone / WhatsApp",
                  value: contact.phoneLabel,
                  href: `tel:+${contact.phoneRaw}`,
                },
                {
                  icon: Mail,
                  label: "E-mail",
                  value: contact.email,
                  href: `mailto:${contact.email}`,
                },
              ].map((c, i) => (
                <Reveal key={c.label} delay={i * 60} as="li">
                  <a
                    href={c.href}
                    className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary"
                  >
                    <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/20">
                      <c.icon className="size-5 text-graphite" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                        {c.label}
                      </span>
                      <span className="block text-base font-bold text-graphite">{c.value}</span>
                    </span>
                  </a>
                </Reveal>
              ))}
              <Reveal delay={120} as="li">
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/20">
                    <MapPin className="size-5 text-graphite" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                      Endereço
                    </span>
                    <span className="block text-sm font-semibold text-graphite">
                      {contact.addressLine1}
                      <br />
                      {contact.addressLine2}
                    </span>
                  </span>
                </div>
              </Reveal>
              <Reveal delay={160} as="li">
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/20">
                    <Clock className="size-5 text-graphite" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                      Cobertura
                    </span>
                    <span className="block text-sm font-semibold text-graphite">
                      {contact.coverage}
                    </span>
                  </span>
                </div>
              </Reveal>
            </ul>
            <Reveal delay={200} className="mt-6">
              <WhatsappLink className="w-full sm:w-auto" />
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <div className="rounded-3xl border border-border bg-card p-7 shadow-card md:p-9">
                <h2 className="text-2xl">Envie os dados da operação</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Quanto mais detalhes, mais precisa é a análise técnica.
                </p>
                <div className="mt-7">
                  <QuoteForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <section aria-label="Localização" className="bg-surface">
        <div className="container-site pb-16 md:pb-24">
          <Reveal>
            <iframe
              title="Mapa da localização da Siga Brasil Transportes em Guarulhos/SP"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-96 w-full rounded-3xl border border-border"
            />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
