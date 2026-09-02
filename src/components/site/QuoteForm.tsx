import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { btn } from "./Primitives";
import { solutions, whatsappUrl } from "@/lib/site";

const field =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";
const labelCls = "text-sm font-semibold text-graphite";

export function QuoteForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const message = [
      "*Solicitação de orçamento — Siga Brasil*",
      `Nome: ${get("nome")}`,
      `Empresa: ${get("empresa") || "-"}`,
      `Telefone: ${get("telefone")}`,
      `E-mail: ${get("email") || "-"}`,
      `Serviço: ${get("servico")}`,
      `Tipo de carga: ${get("carga") || "-"}`,
      `Peso/dimensões: ${get("medidas") || "-"}`,
      `Origem: ${get("origem") || "-"}`,
      `Destino: ${get("destino") || "-"}`,
      `Data desejada: ${get("data") || "-"}`,
      `Detalhes: ${get("detalhes") || "-"}`,
    ].join("\n");

    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <label className={labelCls} htmlFor="nome">Nome*</label>
          <input id="nome" name="nome" required className={field} placeholder="Seu nome" />
        </div>
        <div className="grid gap-2">
          <label className={labelCls} htmlFor="empresa">Empresa</label>
          <input id="empresa" name="empresa" className={field} placeholder="Nome da empresa" />
        </div>
        <div className="grid gap-2">
          <label className={labelCls} htmlFor="telefone">Telefone / WhatsApp*</label>
          <input id="telefone" name="telefone" required inputMode="tel" className={field} placeholder="(11) 90000-0000" />
        </div>
        <div className="grid gap-2">
          <label className={labelCls} htmlFor="email">E-mail</label>
          <input id="email" name="email" type="email" className={field} placeholder="voce@empresa.com.br" />
        </div>
        <div className="grid gap-2">
          <label className={labelCls} htmlFor="servico">Serviço desejado*</label>
          <select id="servico" name="servico" required defaultValue="" className={cn(field, "appearance-none")}>
            <option value="" disabled>Selecione</option>
            {solutions.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
            <option value="Operação combinada">Operação combinada</option>
            <option value="Não sei / preciso de orientação">Não sei / preciso de orientação</option>
          </select>
        </div>
        <div className="grid gap-2">
          <label className={labelCls} htmlFor="carga">Tipo de carga</label>
          <input id="carga" name="carga" className={field} placeholder="Gerador, container, máquina..." />
        </div>
        <div className="grid gap-2">
          <label className={labelCls} htmlFor="medidas">Peso e dimensões aproximados</label>
          <input id="medidas" name="medidas" className={field} placeholder="Ex.: 3.000 kg / 2,5 x 1,8 x 2,0 m" />
        </div>
        <div className="grid gap-2">
          <label className={labelCls} htmlFor="data">Data desejada</label>
          <input id="data" name="data" type="date" className={field} />
        </div>
        <div className="grid gap-2">
          <label className={labelCls} htmlFor="origem">Origem</label>
          <input id="origem" name="origem" className={field} placeholder="Cidade / UF" />
        </div>
        <div className="grid gap-2">
          <label className={labelCls} htmlFor="destino">Destino</label>
          <input id="destino" name="destino" className={field} placeholder="Cidade / UF" />
        </div>
      </div>

      <div className="grid gap-2">
        <label className={labelCls} htmlFor="detalhes">Detalhes da operação</label>
        <textarea
          id="detalhes"
          name="detalhes"
          rows={5}
          className={cn(field, "resize-y")}
          placeholder="Acessos, altura livre, necessidade de içamento, restrições de horário..."
        />
      </div>

      <div className="grid gap-2">
        <label className={labelCls} htmlFor="fotos">Fotos da carga (opcional)</label>
        <input id="fotos" name="fotos" type="file" multiple accept="image/*" className={cn(field, "py-2.5")} />
        <p className="text-xs text-muted-foreground">
          As fotos ajudam na análise técnica. Ao enviar, a conversa abre no WhatsApp — anexe as
          imagens diretamente lá.
        </p>
      </div>

      <button type="submit" className={cn(btn.primary, "w-full sm:w-auto")}>
        <Send className="size-4" aria-hidden="true" />
        Enviar solicitação
      </button>

      {sent ? (
        <p role="status" className="rounded-xl bg-surface px-4 py-3 text-sm text-graphite">
          Solicitação preparada. Se a janela do WhatsApp não abrir, verifique o bloqueio de
          pop-ups do navegador.
        </p>
      ) : null}
    </form>
  );
}
