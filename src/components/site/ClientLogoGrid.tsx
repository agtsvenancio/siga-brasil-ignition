import { cn } from "@/lib/utils";
import { clients } from "@/lib/site";
import { Reveal } from "./Reveal";

/** Grade de logos de clientes e parceiros, no padrão da Apresentação Institucional. */
export function ClientLogoGrid({ className }: { className?: string }) {
  return (
    <ul
      className={cn(
        "grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6",
        className,
      )}
    >
      {clients.map((c, i) => (
        <Reveal key={c.name} delay={Math.min(i * 25, 400)} as="li">
          <div
            className={cn(
              "flex h-24 items-center justify-center rounded-lg px-4 py-3",
              c.dark ? "bg-graphite" : "bg-white",
            )}
          >
            <img
              src={c.logo}
              alt={c.name}
              title={c.name}
              loading="lazy"
              className="max-h-16 w-auto max-w-full object-contain"
            />
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
