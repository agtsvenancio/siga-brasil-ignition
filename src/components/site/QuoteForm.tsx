import { useRef, useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { btn } from "./Primitives";
import { solutions, whatsappUrl } from "@/lib/site";

const field =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";
const fieldError = "border-destructive focus:border-destructive";
const labelCls = "text-sm font-semibold text-graphite";

const serviceOptions = [
  ...solutions.map((s) => s.title),
  "Operação combinada",
  "Não sei / preciso de orientação",
];

const short = (max: number) =>
  z
    .string()
    .trim()
    .max(max, { message: `Máximo de ${max} caracteres.` })
    .optional()
    .default("");

const schema = z.object({
  nome: z
    .string()
    .trim()
    .min(2, { message: "Informe seu nome (mínimo 2 caracteres)." })
    .max(80, { message: "Máximo de 80 caracteres." }),
  empresa: short(80),
  telefone: z
    .string()
    .trim()
    .min(8, { message: "Informe um telefone válido." })
    .max(20, { message: "Máximo de 20 caracteres." })
    .regex(/^[0-9()+\-.\s]+$/, {
      message: "Use apenas números e os caracteres ( ) + - . e espaço.",
    }),
  email: z
    .string()
    .trim()
    .max(120, { message: "Máximo de 120 caracteres." })
    .email({ message: "E-mail inválido." })
    .optional()
    .or(z.literal("")),
  servico: z.enum(serviceOptions as [string, ...string[]], {
    errorMap: () => ({ message: "Selecione um serviço da lista." }),
  }),
  carga: short(80),
  medidas: short(80),
  data: z
    .string()
    .trim()
    .regex(/^\d{4}-\d{2}-\d{2}$/, { message: "Data inválida." })
    .optional()
    .or(z.literal("")),
  origem: short(80),
  destino: short(80),
  detalhes: z
    .string()
    .trim()
    .max(800, { message: "Máximo de 800 caracteres." })
    .optional()
    .default(""),
});

type FieldName = keyof z.infer<typeof schema>;

/**
 * Neutraliza conteúdo hostil antes de montar a mensagem do WhatsApp:
 * remove caracteres de controle, colapsa quebras de linha (impede forjar
 * novos campos) e desarma marcadores de formatação/instrução no início.
 */
function sanitize(value: string, max: number) {
  const flat = value
    // eslint-disable-next-line no-control-regex
    .replace(/[\u0000-\u001F\u007F-\u009F\u200B-\u200F\u2028\u2029]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const disarmed = flat.replace(/^[*_~`#>\-[\]{}/\\|@]+\s*/, "");
  const clipped = disarmed.slice(0, max);
  return clipped.length > 0 ? clipped : "-";
}

const MAX_MESSAGE = 1500;

export function QuoteForm() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(false);

    const data = new FormData(e.currentTarget);
    const raw = Object.fromEntries(
      (
        [
          "nome",
          "empresa",
          "telefone",
          "email",
          "servico",
          "carga",
          "medidas",
          "data",
          "origem",
          "destino",
          "detalhes",
        ] as FieldName[]
      ).map((k) => [k, String(data.get(k) ?? "")]),
    );

    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      const next: Partial<Record<FieldName, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as FieldName | undefined;
        if (key && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      const first = Object.keys(next)[0];
      if (first) {
        formRef.current
          ?.querySelector<HTMLElement>(`[name="${first}"]`)
          ?.focus();
      }
      return;
    }

    setErrors({});
    const v = parsed.data;
    const message = [
      "Solicitação de orçamento — Siga Brasil",
      `Nome: ${sanitize(v.nome, 80)}`,
      `Empresa: ${sanitize(v.empresa ?? "", 80)}`,
      `Telefone: ${sanitize(v.telefone, 20)}`,
      `E-mail: ${sanitize(v.email ?? "", 120)}`,
      `Serviço: ${sanitize(v.servico, 60)}`,
      `Tipo de carga: ${sanitize(v.carga ?? "", 80)}`,
      `Peso/dimensões: ${sanitize(v.medidas ?? "", 80)}`,
      `Origem: ${sanitize(v.origem ?? "", 80)}`,
      `Destino: ${sanitize(v.destino ?? "", 80)}`,
      `Data desejada: ${sanitize(v.data ?? "", 10)}`,
      `Detalhes: ${sanitize(v.detalhes ?? "", 800)}`,
    ]
      .join("\n")
      .slice(0, MAX_MESSAGE);

    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  const errProps = (name: FieldName) =>
    errors[name]
      ? { "aria-invalid": true, "aria-describedby": `${name}-erro` }
      : {};

  const Err = ({ name }: { name: FieldName }) =>
    errors[name] ? (
      <p id={`${name}-erro`} className="text-xs font-medium text-destructive">
        {errors[name]}
      </p>
    ) : null;

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <label className={labelCls} htmlFor="nome">Nome*</label>
          <input
            id="nome"
            name="nome"
            maxLength={80}
            autoComplete="name"
            className={cn(field, errors.nome && fieldError)}
            placeholder="Seu nome"
            {...errProps("nome")}
          />
          <Err name="nome" />
        </div>
        <div className="grid gap-2">
          <label className={labelCls} htmlFor="empresa">Empresa</label>
          <input
            id="empresa"
            name="empresa"
            maxLength={80}
            autoComplete="organization"
            className={cn(field, errors.empresa && fieldError)}
            placeholder="Nome da empresa"
            {...errProps("empresa")}
          />
          <Err name="empresa" />
        </div>
        <div className="grid gap-2">
          <label className={labelCls} htmlFor="telefone">Telefone / WhatsApp*</label>
          <input
            id="telefone"
            name="telefone"
            inputMode="tel"
            maxLength={20}
            autoComplete="tel"
            className={cn(field, errors.telefone && fieldError)}
            placeholder="(11) 90000-0000"
            {...errProps("telefone")}
          />
          <Err name="telefone" />
        </div>
        <div className="grid gap-2">
          <label className={labelCls} htmlFor="email">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            maxLength={120}
            autoComplete="email"
            className={cn(field, errors.email && fieldError)}
            placeholder="voce@empresa.com.br"
            {...errProps("email")}
          />
          <Err name="email" />
        </div>
        <div className="grid gap-2">
          <label className={labelCls} htmlFor="servico">Serviço desejado*</label>
          <select
            id="servico"
            name="servico"
            defaultValue=""
            className={cn(field, "appearance-none", errors.servico && fieldError)}
            {...errProps("servico")}
          >
            <option value="" disabled>Selecione</option>
            {serviceOptions.map((title) => (
              <option key={title} value={title}>{title}</option>
            ))}
          </select>
          <Err name="servico" />
        </div>
        <div className="grid gap-2">
          <label className={labelCls} htmlFor="carga">Tipo de carga</label>
          <input
            id="carga"
            name="carga"
            maxLength={80}
            className={cn(field, errors.carga && fieldError)}
            placeholder="Gerador, container, máquina..."
            {...errProps("carga")}
          />
          <Err name="carga" />
        </div>
        <div className="grid gap-2">
          <label className={labelCls} htmlFor="medidas">Peso e dimensões aproximados</label>
          <input
            id="medidas"
            name="medidas"
            maxLength={80}
            className={cn(field, errors.medidas && fieldError)}
            placeholder="Ex.: 3.000 kg / 2,5 x 1,8 x 2,0 m"
            {...errProps("medidas")}
          />
          <Err name="medidas" />
        </div>
        <div className="grid gap-2">
          <label className={labelCls} htmlFor="data">Data desejada</label>
          <input
            id="data"
            name="data"
            type="date"
            className={cn(field, errors.data && fieldError)}
            {...errProps("data")}
          />
          <Err name="data" />
        </div>
        <div className="grid gap-2">
          <label className={labelCls} htmlFor="origem">Origem</label>
          <input
            id="origem"
            name="origem"
            maxLength={80}
            className={cn(field, errors.origem && fieldError)}
            placeholder="Cidade / UF"
            {...errProps("origem")}
          />
          <Err name="origem" />
        </div>
        <div className="grid gap-2">
          <label className={labelCls} htmlFor="destino">Destino</label>
          <input
            id="destino"
            name="destino"
            maxLength={80}
            className={cn(field, errors.destino && fieldError)}
            placeholder="Cidade / UF"
            {...errProps("destino")}
          />
          <Err name="destino" />
        </div>
      </div>

      <div className="grid gap-2">
        <label className={labelCls} htmlFor="detalhes">Detalhes da operação</label>
        <textarea
          id="detalhes"
          name="detalhes"
          rows={5}
          maxLength={800}
          className={cn(field, "resize-y", errors.detalhes && fieldError)}
          placeholder="Acessos, altura livre, necessidade de içamento, restrições de horário..."
          {...errProps("detalhes")}
        />
        <Err name="detalhes" />
      </div>

      <button type="submit" className={cn(btn.primary, "w-full sm:w-auto")}>
        <Send className="size-4" aria-hidden="true" />
        Enviar solicitação
      </button>

      {sent ? (
        <p role="status" className="rounded-xl bg-surface px-4 py-3 text-sm text-graphite">
          Solicitação preparada no WhatsApp. Se a janela não abrir, verifique o bloqueio de
          pop-ups do navegador.
        </p>
      ) : null}
    </form>
  );
}
