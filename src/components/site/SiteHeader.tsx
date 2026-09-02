import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { contact, logo, mainNav } from "@/lib/site";
import { btn, WhatsappLink } from "./Primitives";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>

      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur">
        <div className="container-site flex h-18 items-center justify-between gap-4 py-3">
          <Link to="/" className="flex items-center" aria-label="Siga Brasil Transportes — página inicial">
            <img src={logo} alt="Siga Brasil Transportes" className="h-11 w-auto md:h-12" />
          </Link>

          <nav aria-label="Principal" className="hidden items-center gap-1 xl:flex">
            {mainNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-graphite after:scale-x-100" }}
                className="relative whitespace-nowrap px-3 py-2 text-sm font-medium text-muted-foreground transition-colors after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-primary after:transition-transform hover:text-graphite hover:after:scale-x-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <WhatsappLink className="hidden md:inline-flex" variant="dark">
              WhatsApp
            </WhatsappLink>
            <Link to="/orcamento" className={cn(btn.primary, "hidden lg:inline-flex")}>
              Solicitar orçamento
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              className="inline-flex size-11 items-center justify-center rounded-full border border-border text-graphite xl:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open ? (
          <div className="border-t border-border bg-background xl:hidden">
            <nav aria-label="Principal (móvel)" className="container-site grid gap-1 py-4">
              {mainNav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "bg-surface text-graphite" }}
                  className="rounded-xl px-4 py-3 text-base font-medium text-muted-foreground hover:bg-surface hover:text-graphite"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/orcamento"
                onClick={() => setOpen(false)}
                className={cn(btn.primary, "mt-3 w-full")}
              >
                Solicitar orçamento
              </Link>
              <a href={`tel:+${contact.phoneRaw}`} className={cn(btn.outline, "w-full")}>
                <Phone className="size-4" aria-hidden="true" />
                {contact.phoneLabel}
              </a>
            </nav>
          </div>
        ) : null}
      </header>
    </>
  );
}
