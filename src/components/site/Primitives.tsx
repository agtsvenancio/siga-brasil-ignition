import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { whatsappUrl } from "@/lib/site";

export function Section({
  children,
  className,
  tone = "light",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "light" | "surface" | "dark";
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24",
        tone === "surface" && "bg-surface",
        tone === "dark" && "bg-graphite text-background",
        className,
      )}
    >
      <div className="container-site">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow ? (
        <p className={cn("rule-y", dark ? "eyebrow-on-dark" : "eyebrow")}>{eyebrow}</p>
      ) : null}
      <h2 className="mt-4 text-3xl leading-[1.1] md:text-4xl lg:text-5xl">{title}</h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed md:text-lg",
            dark ? "text-background/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-200 disabled:opacity-50 px-6 py-3.5 min-h-12";

export const btn = {
  primary: cn(
    base,
    "bg-primary text-primary-foreground shadow-card hover:bg-yellow-deep hover:shadow-lift active:translate-y-px",
  ),
  dark: cn(base, "bg-graphite text-background hover:bg-graphite-deep"),
  outline: cn(
    base,
    "border border-graphite/25 text-graphite hover:border-graphite hover:bg-graphite hover:text-background",
  ),
  ghostOnDark: cn(
    base,
    "border border-background/25 text-background hover:bg-background/10",
  ),
};

export function CtaLink({
  to,
  children,
  variant = "primary",
  className,
}: {
  to: string;
  children: ReactNode;
  variant?: keyof typeof btn;
  className?: string;
}) {
  return (
    <Link to={to} className={cn(btn[variant], className)}>
      {children}
      <ArrowRight className="size-4" aria-hidden="true" />
    </Link>
  );
}

export function WhatsappLink({
  message,
  children = "Falar no WhatsApp",
  variant = "dark",
  className,
}: {
  message?: string;
  children?: ReactNode;
  variant?: keyof typeof btn;
  className?: string;
}) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(btn[variant], className)}
    >
      <MessageCircle className="size-4" aria-hidden="true" />
      {children}
    </a>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <header className="relative overflow-hidden bg-graphite text-background">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 size-full object-cover opacity-25"
        loading="eager"
      />
      <div className="absolute inset-0 bg-linear-to-r from-graphite via-graphite/90 to-graphite/40" />
      <div className="container-site relative py-20 md:py-28">
        <Reveal className="max-w-3xl">
          <p className="eyebrow-on-dark rule-y">{eyebrow}</p>
          <h1 className="mt-5 text-4xl leading-[1.05] md:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-background/75 md:text-lg">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaLink to="/orcamento">Solicitar orçamento</CtaLink>
            <WhatsappLink variant="ghostOnDark" />
          </div>
        </Reveal>
      </div>
      <div className="h-1.5 w-full bg-primary" />
    </header>
  );
}

export function CtaBand({
  title = "Precisa mover uma carga que não pode dar errado?",
  text = "Envie os dados da operação e receba um plano com veículo, equipe e cronograma adequados.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-primary">
      <div className="container-site flex flex-col gap-6 py-14 md:flex-row md:items-center md:justify-between md:py-16">
        <Reveal className="max-w-2xl">
          <h2 className="text-2xl text-primary-foreground md:text-4xl">{title}</h2>
          <p className="mt-3 text-sm text-primary-foreground/80 md:text-base">{text}</p>
        </Reveal>
        <Reveal delay={80} className="flex flex-wrap gap-3">
          <CtaLink to="/orcamento" variant="dark">
            Solicitar orçamento
          </CtaLink>
          <WhatsappLink
            variant="outline"
            className="border-graphite/40 bg-background/40"
          />
        </Reveal>
      </div>
    </section>
  );
}
