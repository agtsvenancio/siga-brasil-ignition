import { createFileRoute, redirect } from "@tanstack/react-router";

// Não há mais página índice de soluções: cada solução tem sua própria página
// (acessadas pelo submenu "Soluções" da navbar). Links antigos para /solucoes
// são redirecionados para a seção de soluções da home.
export const Route = createFileRoute("/solucoes/")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "solucoes", statusCode: 301 });
  },
});
