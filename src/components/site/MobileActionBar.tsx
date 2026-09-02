import { MessageCircle, Phone } from "lucide-react";
import { contact, whatsappUrl } from "@/lib/site";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden">
      <div className="grid grid-cols-2">
        <a
          href={`tel:+${contact.phoneRaw}`}
          className="flex min-h-14 items-center justify-center gap-2 text-sm font-semibold text-graphite"
        >
          <Phone className="size-4" aria-hidden="true" />
          Ligar
        </a>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-14 items-center justify-center gap-2 bg-primary text-sm font-semibold text-primary-foreground"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
