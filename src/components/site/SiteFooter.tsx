import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { contact, logoWhite, mainNav, solutions } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-graphite-deep text-background">
      <div className="hairline-grid">
        <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={logoWhite} alt="Siga Brasil Transportes" className="h-12 w-auto" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-background/65">
              Transporte, remoção técnica, içamento e armazenagem para operações
              industriais em todo o Brasil.
            </p>
          </div>

          <nav aria-label="Páginas">
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
              Navegação
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {mainNav.map((i) => (
                <li key={i.to}>
                  <Link to={i.to} className="text-background/70 transition-colors hover:text-primary">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Soluções">
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
              Soluções
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {solutions.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/solucoes/$slug"
                    params={{ slug: s.slug }}
                    className="text-background/70 transition-colors hover:text-primary"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/processo" className="text-background/70 transition-colors hover:text-primary">
                  Como trabalhamos
                </Link>
              </li>
              <li>
                <Link to="/diferenciais" className="text-background/70 transition-colors hover:text-primary">
                  Diferenciais
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
              Contato
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-background/75">
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <a href={`tel:+${contact.phoneRaw}`} className="hover:text-primary">
                  {contact.phoneLabel}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <a href={`mailto:${contact.email}`} className="hover:text-primary">
                  {contact.email}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  {contact.addressLine1}
                  <br />
                  {contact.addressLine2}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container-site flex flex-col gap-2 py-6 text-xs text-background/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Siga Brasil Transportes. Todos os direitos reservados.</p>
          <p>{contact.site} • {contact.coverage}</p>
        </div>
      </div>
    </footer>
  );
}
