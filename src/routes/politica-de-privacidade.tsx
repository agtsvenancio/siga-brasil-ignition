import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PageHero, Section } from "@/components/site/Primitives";
import { brand, contact, photos } from "@/lib/site";

const title = "Política de Privacidade | Siga Brasil Transportes";
const description =
  "Como a Siga Brasil Transportes coleta, usa e protege os dados pessoais enviados pelo site, em conformidade com a LGPD (Lei nº 13.709/2018).";

const UPDATED_AT = "23 de outubro de 2026";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/politica-de-privacidade" },
    ],
    links: [{ rel: "canonical", href: "/politica-de-privacidade" }],
  }),
  component: PoliticaDePrivacidade,
});

const sections: { id: string; title: string; body: ReactNode }[] = [
  {
    id: "quem-somos",
    title: "1. Quem é o responsável pelos seus dados",
    body: (
      <>
        <p>
          Esta Política de Privacidade explica como a <strong>{brand.name}</strong>, inscrita no CNPJ
          sob o nº <strong>{contact.cnpj}</strong>, com sede na {contact.addressLine1},{" "}
          {contact.addressLine2}, trata os dados pessoais de quem acessa o site{" "}
          {contact.site} e entra em contato conosco.
        </p>
        <p>
          Para os fins da Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 — LGPD), a
          Siga Brasil é a <strong>controladora</strong> desses dados.
        </p>
      </>
    ),
  },
  {
    id: "dados-coletados",
    title: "2. Quais dados coletamos",
    body: (
      <>
        <p>Coletamos apenas os dados que você mesmo nos envia, por exemplo:</p>
        <ul>
          <li>
            <strong>Formulário de orçamento:</strong> nome, empresa, telefone/WhatsApp, e-mail,
            tipo de serviço, locais de origem e destino, data e as informações da carga que você
            descrever.
          </li>
          <li>
            <strong>Contato direto:</strong> os dados que você informar ao nos chamar por WhatsApp,
            telefone ou e-mail.
          </li>
          <li>
            <strong>Dados técnicos de navegação:</strong> informações básicas registradas
            automaticamente pelo servidor de hospedagem (como endereço IP, tipo de navegador e
            páginas acessadas), necessárias para o funcionamento e a segurança do site.
          </li>
        </ul>
        <p>
          Não solicitamos dados sensíveis (como origem racial, saúde, religião ou opinião política)
          e pedimos que você não os inclua nas mensagens.
        </p>
      </>
    ),
  },
  {
    id: "finalidades",
    title: "3. Para que usamos seus dados",
    body: (
      <>
        <ul>
          <li>Responder à sua solicitação e elaborar orçamentos;</li>
          <li>Planejar e executar o serviço contratado (transporte, remoção, içamento ou armazenagem);</li>
          <li>Manter contato sobre a operação, prazos, documentação e pós-atendimento;</li>
          <li>Cumprir obrigações legais, fiscais e regulatórias;</li>
          <li>Garantir a segurança e o bom funcionamento do site.</li>
        </ul>
        <p>
          As bases legais utilizadas são, conforme o caso: procedimentos preliminares e execução de
          contrato (art. 7º, V), cumprimento de obrigação legal (art. 7º, II), legítimo interesse
          (art. 7º, IX) e, quando necessário, o seu consentimento (art. 7º, I).
        </p>
      </>
    ),
  },
  {
    id: "whatsapp",
    title: "4. Envio pelo WhatsApp",
    body: (
      <p>
        Ao enviar o formulário de orçamento, as informações preenchidas são organizadas em uma
        mensagem e abertas no WhatsApp para que você mesmo conclua o envio. O site não armazena essas
        informações em banco de dados. A partir desse momento, a conversa também está sujeita aos
        termos e à política de privacidade do WhatsApp (Meta).
      </p>
    ),
  },
  {
    id: "cookies",
    title: "5. Cookies e ferramentas de medição",
    body: (
      <>
        <p>
          Cookies são pequenos arquivos salvos no seu navegador. O site pode utilizar cookies
          essenciais, necessários para o funcionamento das páginas.
        </p>
        <p>
          Caso passemos a utilizar ferramentas de medição de audiência ou de publicidade (como Google
          Analytics, Google Ads ou Pixel da Meta), elas serão usadas para entender como os visitantes
          utilizam o site e para melhorar nossas campanhas, de forma agregada. Nesses casos, sempre que
          exigido, pediremos o seu consentimento antes de ativá-las.
        </p>
        <p>
          Você pode bloquear ou apagar cookies a qualquer momento nas configurações do seu navegador.
        </p>
      </>
    ),
  },
  {
    id: "compartilhamento",
    title: "6. Com quem compartilhamos",
    body: (
      <>
        <p>Não vendemos nem alugamos seus dados. Eles podem ser compartilhados somente com:</p>
        <ul>
          <li>
            Prestadores de serviço que nos apoiam (hospedagem do site, e-mail, WhatsApp, seguradoras
            e parceiros operacionais), apenas no necessário para a prestação do serviço;
          </li>
          <li>Autoridades públicas, quando houver obrigação legal ou ordem judicial.</li>
        </ul>
      </>
    ),
  },
  {
    id: "armazenamento",
    title: "7. Por quanto tempo guardamos",
    body: (
      <p>
        Mantemos os dados pelo tempo necessário para atender à sua solicitação e executar o serviço,
        ou pelo prazo exigido por lei (por exemplo, para fins fiscais e contábeis). Depois disso, os
        dados são excluídos ou anonimizados.
      </p>
    ),
  },
  {
    id: "seguranca",
    title: "8. Segurança",
    body: (
      <p>
        Adotamos medidas técnicas e administrativas razoáveis para proteger seus dados contra acessos
        não autorizados, perda ou uso indevido, como conexão segura (HTTPS) e acesso restrito às
        informações dentro da empresa.
      </p>
    ),
  },
  {
    id: "direitos",
    title: "9. Seus direitos",
    body: (
      <>
        <p>Conforme a LGPD, você pode, a qualquer momento:</p>
        <ul>
          <li>Confirmar se tratamos seus dados e ter acesso a eles;</li>
          <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
          <li>Solicitar a anonimização, o bloqueio ou a eliminação de dados desnecessários;</li>
          <li>Solicitar a portabilidade dos dados;</li>
          <li>Revogar o consentimento, quando o tratamento se basear nele;</li>
          <li>Obter informações sobre com quem seus dados foram compartilhados.</li>
        </ul>
        <p>
          Para exercer qualquer desses direitos, escreva para{" "}
          <a href={`mailto:${contact.email}`}>{contact.email}</a>. Você também pode apresentar
          reclamação à Autoridade Nacional de Proteção de Dados (ANPD).
        </p>
      </>
    ),
  },
  {
    id: "contato",
    title: "10. Contato",
    body: (
      <p>
        Dúvidas sobre esta política ou sobre o tratamento dos seus dados podem ser enviadas para{" "}
        <a href={`mailto:${contact.email}`}>{contact.email}</a> ou pelo telefone{" "}
        <a href={`tel:+${contact.phoneRaw}`}>{contact.phoneLabel}</a>.
      </p>
    ),
  },
  {
    id: "atualizacoes",
    title: "11. Atualizações desta política",
    body: (
      <p>
        Esta política pode ser atualizada para refletir mudanças no site, nos serviços ou na
        legislação. A versão vigente estará sempre disponível nesta página, com a data da última
        atualização.
      </p>
    ),
  },
];

function PoliticaDePrivacidade() {
  return (
    <>
      <PageHero
        eyebrow="Privacidade"
        title="Política de"
        highlight="Privacidade"
        description="Como coletamos, usamos e protegemos os dados enviados pelo site, em conformidade com a LGPD."
        image={photos.frota}
        imageAlt="Frota da Siga Brasil estacionada no pátio"
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <nav aria-label="Índice da política" className="hidden lg:col-span-4 lg:block">
            <div className="sticky top-32 rounded-2xl border border-border bg-card p-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Nesta página</p>
              <ul className="mt-4 grid gap-2 text-sm">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="text-muted-foreground hover:text-graphite">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <article className="lg:col-span-8">
            <p className="text-sm text-muted-foreground">Última atualização: {UPDATED_AT}</p>
            <div className="mt-8 grid gap-10">
              {sections.map((s) => (
                <section key={s.id} id={s.id} className="scroll-mt-32">
                  <h2 className="text-xl font-bold text-graphite md:text-2xl">{s.title}</h2>
                  <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground [&_a]:font-medium [&_a]:text-graphite [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-primary [&_li]:pl-1 [&_strong]:text-graphite [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
                    {s.body}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </div>
      </Section>
    </>
  );
}
