# Formulário de orçamento: só WhatsApp, sem anexos e com validação

O formulário continua sem backend: ao enviar, abre o WhatsApp `(11) 99935-2524` com a mensagem já estruturada. O que muda é a remoção do campo de fotos e o endurecimento da validação antes de montar o link.

## O que muda

1. **Remover o envio de arquivos**
   - Tirar o campo "Fotos da carga" e o texto de apoio do formulário de orçamento (usado nas páginas Orçamento e Contato). É o único input de arquivo do site.

2. **Validação forte antes de abrir o WhatsApp**
   - Regras por campo: nome (2–80), empresa (até 80), telefone (8–20, só dígitos e `()+- .`), e-mail válido (até 120, opcional), serviço restrito à lista de soluções do site, carga/medidas/origem/destino (até 80), data em formato válido, detalhes (até 800).
   - Campos inválidos mostram mensagem em português abaixo do campo, com foco no primeiro erro; nada é enviado enquanto houver erro.

3. **Proteção contra injeção de conteúdo na mensagem**
   - Sanitização de cada valor: remoção de caracteres de controle, colapso de quebras de linha e espaços, corte no limite de tamanho, e neutralização de tentativas de forjar cabeçalhos/instruções (linhas iniciadas por `*`, `#`, `>`, ou textos do tipo "ignore as instruções acima" ficam como texto simples, prefixados e sem formatação).
   - Cada campo entra em uma única linha rotulada, de modo que ninguém consiga simular novos campos dentro da mensagem.
   - O link é montado com `encodeURIComponent` (já é o caso) sobre o texto já sanitizado, com limite total da mensagem para não estourar o `wa.me`.

4. **Boas práticas de segurança já aplicadas / mantidas**
   - `window.open` com `noopener,noreferrer`; nenhum dado do formulário no console; nenhum HTML injetado (`dangerouslySetInnerHTML` não é usado); número de destino fixo no código, nunca vindo do formulário.
   - Sem armazenamento, sem cookies e sem envio para terceiros — logo, nada de dado pessoal em trânsito além do próprio WhatsApp.

## Detalhes técnicos

- Alterações apenas em `src/components/site/QuoteForm.tsx`; `whatsappUrl()` em `src/lib/site.ts` permanece igual.
- Validação com `zod` (schema declarativo com `trim`, `max`, `regex`, `enum` do serviço), erros mapeados por campo e renderizados com `aria-invalid` + `aria-describedby`.
- Função de sanitização própria aplicada depois do parse do schema, antes da montagem da mensagem.
- Como não há servidor recebendo dados, não existe superfície de injeção SQL/servidor; a proteção relevante é a de conteúdo da mensagem e a validação de entrada, ambas cobertas acima.
