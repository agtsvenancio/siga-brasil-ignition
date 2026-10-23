import { whatsappUrl } from "@/lib/site";

/** Botão flutuante de WhatsApp, fixo no canto inferior direito em todas as páginas. */
export function WhatsappFloat() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Siga Brasil no WhatsApp"
      title="Falar no WhatsApp"
      className="group fixed right-4 bottom-[calc(4.5rem+env(safe-area-inset-bottom))] z-50 inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform duration-200 hover:scale-105 focus-visible:scale-105 md:right-6 md:bottom-6 md:size-16"
    >
      <span
        className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30 motion-reduce:hidden"
        aria-hidden="true"
      />
      <svg viewBox="0 0 32 32" className="relative size-7 md:size-8" fill="currentColor" aria-hidden="true">
        <path d="M16.004 3C8.832 3 3 8.83 3 16c0 2.293.6 4.533 1.74 6.51L3 29l6.65-1.71A12.95 12.95 0 0 0 16.004 29C23.17 29 29 23.17 29 16S23.17 3 16.004 3Zm0 23.64c-1.95 0-3.86-.52-5.52-1.51l-.4-.24-3.95 1.02 1.05-3.84-.26-.41A10.6 10.6 0 0 1 5.36 16c0-5.87 4.78-10.64 10.65-10.64 5.86 0 10.63 4.77 10.63 10.64 0 5.86-4.77 10.64-10.64 10.64Zm5.83-7.97c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66 0 1.57 1.14 3.09 1.3 3.3.16.21 2.25 3.43 5.44 4.81.76.33 1.35.52 1.81.67.76.24 1.46.21 2 .13.61-.09 1.89-.77 2.15-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" />
      </svg>
    </a>
  );
}
