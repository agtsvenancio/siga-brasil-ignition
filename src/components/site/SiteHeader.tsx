import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { contact, logo, mainNav, solutions, SOLUTIONS_MENU } from "@/lib/site";
import { btn } from "./Primitives";

const navLinkClass =
  "relative whitespace-nowrap px-3 py-2 text-sm font-medium text-muted-foreground transition-colors after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-primary after:transition-transform hover:text-graphite hover:after:scale-x-100";

function SolutionsDropdown() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const active = pathname.startsWith("/solucoes");

  // Fecha ao trocar de página
  useEffect(() => setOpen(false), [pathname]);

  // Fecha com Esc ou clique fora
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const show = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const hide = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div ref={wrapRef} className="group/sol relative" onMouseEnter={show} onMouseLeave={hide}>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls="menu-solucoes"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          navLinkClass,
          "inline-flex items-center gap-1",
          (active || open) && "text-graphite after:scale-x-100",
        )}
      >
        Soluções
        <ChevronDown
          className={cn("size-3.5 transition-transform", open && "rotate-180")}
          aria-hidden="true"
        />
      </button>

      <div
        id="menu-solucoes"
        className={cn(
          "absolute left-1/2 top-full z-50 w-[22rem] -translate-x-1/2 pt-3 transition-all duration-150",
          // CSS hover/foco garante abertura mesmo antes do JS carregar
          "group-hover/sol:visible group-hover/sol:translate-y-0 group-hover/sol:opacity-100 group-focus-within/sol:visible group-focus-within/sol:translate-y-0 group-focus-within/sol:opacity-100",
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0",
        )}
      >
        <ul className="overflow-hidden rounded-2xl border border-border bg-background p-2 shadow-lift">
          {solutions.map((s) => (
            <li key={s.slug}>
              <Link
                to="/solucoes/$slug"
                params={{ slug: s.slug }}
                activeProps={{ className: "bg-surface" }}
                className="group flex gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-surface focus-visible:bg-surface"
              >
                <span className="mt-0.5 text-xs font-bold text-primary">{s.number}</span>
                <span>
                  <span className="block text-sm font-bold text-graphite">{s.title}</span>
                  <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">
                    {s.short}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [solOpen, setSolOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
    setSolOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur">
      <div className="container-site flex h-24 items-center justify-between gap-4 py-3">
        <Link to="/" className="flex items-center" aria-label="Siga Brasil Transportes — página inicial">
          <img src={logo} alt="Siga Brasil Transportes" className="h-14 w-auto md:h-16 2xl:h-[4.5rem]" />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-1 xl:flex">
          {mainNav.map((item) =>
            item.to === SOLUTIONS_MENU ? (
              <SolutionsDropdown key={item.to} />
            ) : (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-graphite after:scale-x-100" }}
                className={navLinkClass}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/orcamento" className={cn(btn.primary, "hidden whitespace-nowrap md:inline-flex")}>
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
        <div className="max-h-[calc(100dvh-6rem)] overflow-y-auto border-t border-border bg-background xl:hidden">
          <nav aria-label="Principal (móvel)" className="container-site grid gap-1 pt-4 pb-24 md:pb-6">
            {mainNav.map((item) =>
              item.to === SOLUTIONS_MENU ? (
                <div key={item.to}>
                  <button
                    type="button"
                    onClick={() => setSolOpen((v) => !v)}
                    aria-expanded={solOpen}
                    aria-controls="menu-solucoes-mobile"
                    className={cn(
                      "flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base font-medium hover:bg-surface hover:text-graphite",
                      pathname.startsWith("/solucoes") || solOpen
                        ? "bg-surface text-graphite"
                        : "text-muted-foreground",
                    )}
                  >
                    Soluções
                    <ChevronDown
                      className={cn("size-4 transition-transform", solOpen && "rotate-180")}
                      aria-hidden="true"
                    />
                  </button>
                  {solOpen ? (
                    <ul id="menu-solucoes-mobile" className="mt-1 grid gap-1 border-l-2 border-primary pl-3 ml-4">
                      {solutions.map((s) => (
                        <li key={s.slug}>
                          <Link
                            to="/solucoes/$slug"
                            params={{ slug: s.slug }}
                            activeProps={{ className: "bg-surface text-graphite font-semibold" }}
                            className="block rounded-lg px-4 py-2.5 text-sm text-muted-foreground hover:bg-surface hover:text-graphite"
                          >
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "bg-surface text-graphite" }}
                  className="rounded-xl px-4 py-3 text-base font-medium text-muted-foreground hover:bg-surface hover:text-graphite"
                >
                  {item.label}
                </Link>
              ),
            )}
            <Link to="/orcamento" className={cn(btn.primary, "mt-3 w-full")}>
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
  );
}
