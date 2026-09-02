import logoAsset from "@/assets/logo-navbar.png.asset.json";
import logoWhiteAsset from "@/assets/logo-branca.png.asset.json";
import munck from "@/assets/munck-industrial.webp.asset.json";
import icamento from "@/assets/icamento-aereo.webp.asset.json";
import cargaMwm from "@/assets/carga-mwm-galpao.webp.asset.json";
import gerador from "@/assets/operacao-gerador.webp.asset.json";
import carregamento from "@/assets/carregamento-mwm.webp.asset.json";
import remocao from "@/assets/remocao-tecnica.webp.asset.json";
import transporte from "@/assets/transporte-industrial.webp.asset.json";

export const logo = logoAsset.url;
export const logoWhite = logoWhiteAsset.url;

export const photos = {
  munck: munck.url,
  icamento: icamento.url,
  cargaMwm: cargaMwm.url,
  gerador: gerador.url,
  carregamento: carregamento.url,
  remocao: remocao.url,
  transporte: transporte.url,
};

export const contact = {
  phoneLabel: "(11) 99935-2524",
  phoneRaw: "5511999352524",
  email: "tiago@sigabr.com.br",
  site: "www.sigabr.com.br",
  addressLine1: "Rua Silvestre Vasconcelos Calmon, 444",
  addressLine2: "Vila Pedro Moreira • Guarulhos/SP",
  coverage: "Atendimento em todo o Brasil",
};

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá, Siga Brasil! Gostaria de solicitar um orçamento para uma operação de transporte/movimentação de carga.";

export function whatsappUrl(message: string = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${contact.phoneRaw}?text=${encodeURIComponent(message)}`;
}

export const mainNav = [
  { label: "Início", to: "/" },
  { label: "A Empresa", to: "/empresa" },
  { label: "Soluções", to: "/solucoes" },
  { label: "Estrutura", to: "/estrutura" },
  { label: "Cargas", to: "/cargas" },
  { label: "Segmentos", to: "/segmentos" },
  { label: "Cases", to: "/cases" },
  { label: "Clientes", to: "/clientes" },
  { label: "Contato", to: "/contato" },
] as const;

export type SolutionSlug =
  | "transporte-rodoviario"
  | "remocao-tecnica"
  | "icamento-e-munck"
  | "armazenagem";

export type Solution = {
  slug: SolutionSlug;
  number: string;
  title: string;
  short: string;
  image: string;
  imageAlt: string;
  problem: string;
  whenToHire: string[];
  how: string[];
  differentials: string[];
  cargoTypes: string[];
  equipment: string[];
};

export const solutions: Solution[] = [
  {
    slug: "transporte-rodoviario",
    number: "01",
    title: "Transporte rodoviário",
    short:
      "Coletas, entregas e cargas especiais com atendimento para todo o Brasil.",
    image: photos.transporte,
    imageAlt:
      "Caminhão Munck da Siga Brasil carregando equipamento industrial em galpão",
    problem:
      "Cargas industriais e equipamentos exigem mais do que espaço no caminhão: exigem o veículo certo, amarração adequada e um cronograma que respeite a rotina do cliente.",
    whenToHire: [
      "Coletas e entregas programadas entre unidades, fornecedores e clientes",
      "Transporte de equipamentos e cargas de maior porte",
      "Operações que precisam de acompanhamento do início ao fim",
      "Demandas com prazo definido e janela de recebimento",
    ],
    how: [
      "Recebimento das informações de carga, local e prazo",
      "Definição do veículo e implemento conforme peso, dimensão e acesso",
      "Planejamento de rota, cronograma e medidas de segurança",
      "Execução com equipe treinada e monitoramento durante o percurso",
    ],
    differentials: [
      "Atuação rodoviária em todo o Brasil",
      "Frota dimensionada do pequeno ao grande porte",
      "Planejamento técnico antes de cada saída",
    ],
    cargoTypes: [
      "Equipamentos industriais",
      "Geradores e transformadores",
      "Containers",
      "Cargas paletizadas e volumes especiais",
    ],
    equipment: [
      "Iveco 3/4 — até 4.000 kg",
      "3/4 baú / sider — até 5.000 kg",
      "Truck carroceria aberta — até 14.000 kg",
      "Carreta rebaixada — cargas especiais",
    ],
  },
  {
    slug: "remocao-tecnica",
    number: "02",
    title: "Remoção técnica",
    short:
      "Estudo prévio para preservar a carga, o ambiente e a continuidade da operação.",
    image: photos.remocao,
    imageAlt:
      "Equipe da Siga Brasil removendo equipamento embalado com paleteira em ambiente interno",
    problem:
      "Retirar um equipamento de dentro de uma planta, obra ou prédio envolve acessos estreitos, pisos sensíveis, desníveis e uma operação que não pode parar mais do que o necessário.",
    whenToHire: [
      "Retirada de máquinas e equipamentos instalados",
      "Ambientes com acesso restrito, rampas, elevadores ou pé-direito baixo",
      "Trocas de equipamento com janela curta de parada",
      "Mudanças de setor, planta ou endereço operacional",
    ],
    how: [
      "Levantamento da carga, do ambiente e dos acessos",
      "Análise técnica de peso, dimensões e riscos",
      "Definição de equipe, equipamentos auxiliares e cronograma",
      "Execução com cuidado sobre a carga, o local e as pessoas ao redor",
    ],
    differentials: [
      "Estudo prévio antes de qualquer movimentação",
      "Cuidado com a preservação do ambiente do cliente",
      "Foco em manter a continuidade da operação",
    ],
    cargoTypes: [
      "Máquinas e equipamentos industriais",
      "Equipamentos hospitalares",
      "Empilhadeiras",
      "Equipamentos para operações especiais",
    ],
    equipment: [
      "Munck para apoio de retirada e posicionamento",
      "Equipamentos de movimentação em solo",
      "Veículos dimensionados conforme a carga",
    ],
  },
  {
    slug: "icamento-e-munck",
    number: "03",
    title: "Içamento e Munck",
    short:
      "Carga, descarga, posicionamento e remoção com equipamentos de 10t, 12t e 14t.",
    image: photos.icamento,
    imageAlt:
      "Içamento de estrutura metálica por Munck da Siga Brasil entre galpões industriais",
    problem:
      "Quando a carga precisa subir, descer ou ser posicionada com precisão, o que define o resultado é a escolha do equipamento, o ponto de apoio e a leitura correta do ambiente.",
    whenToHire: [
      "Carga e descarga de equipamentos pesados",
      "Posicionamento preciso de máquinas em base definida",
      "Içamento sobre muros, telhados, lajes ou áreas de difícil acesso",
      "Remoção de equipamentos com apoio de guindaste articulado",
    ],
    how: [
      "Avaliação do peso, do raio de alcance e do ponto de apoio",
      "Escolha do equipamento adequado (10t, 12t ou 14t)",
      "Isolamento e organização da área de operação",
      "Execução com equipe treinada e comunicação em cada fase",
    ],
    differentials: [
      "Munck de 10t, 12t e 14t",
      "Operação combinada de içamento e transporte",
      "Procedimentos claros e equipamentos corretos",
    ],
    cargoTypes: [
      "Geradores",
      "Transformadores",
      "Containers",
      "Estruturas metálicas e equipamentos",
    ],
    equipment: [
      "Munck 10t",
      "Munck 12t",
      "Munck 14t",
      "Acessórios de içamento (cintas, cabos e balancins)",
    ],
  },
  {
    slug: "armazenagem",
    number: "04",
    title: "Armazenagem",
    short:
      "Apoio operacional para guarda, organização e fluxo de cargas antes ou depois do transporte.",
    image: photos.cargaMwm,
    imageAlt:
      "Carga industrial embalada aguardando movimentação em galpão atendido pela Siga Brasil",
    problem:
      "Nem sempre a carga pode seguir direto. Entre a coleta e a entrega existe um intervalo que precisa ser organizado para não gerar risco, atraso ou retrabalho.",
    whenToHire: [
      "Carga pronta antes da janela de recebimento do destino",
      "Operações em etapas, com entregas parceladas",
      "Necessidade de consolidar volumes antes do transporte",
      "Apoio operacional durante remoções e trocas de equipamento",
    ],
    how: [
      "Alinhamento do período e do volume a ser guardado",
      "Organização da carga conforme o fluxo previsto",
      "Integração com o cronograma de transporte e içamento",
      "Liberação da carga na data acordada",
    ],
    differentials: [
      "Integração com transporte, remoção e içamento",
      "Organização voltada ao fluxo da operação",
      "Solução contratável de forma isolada ou combinada",
    ],
    cargoTypes: [
      "Equipamentos",
      "Volumes industriais",
      "Cargas em trânsito entre etapas da operação",
    ],
    equipment: [
      "Apoio de movimentação em solo",
      "Veículos para coleta e redistribuição",
    ],
  },
];

export const fleet = [
  { name: "Van", detail: "Coletas e entregas urbanas de menor volume." },
  { name: "Iveco 3/4", detail: "Até 4.000 kg — baú ou sider." },
  { name: "3/4 baú / sider", detail: "Até 5.000 kg — versatilidade de carga." },
  { name: "Toco", detail: "Cargas intermediárias com boa manobrabilidade." },
  { name: "Truck aberto", detail: "Até 14.000 kg — carroceria aberta." },
  { name: "Truck fechado", detail: "Cargas que exigem proteção fechada." },
  { name: "Carreta aberta", detail: "Volumes maiores em carroceria aberta." },
  { name: "Carreta fechada", detail: "Grande volume com carga protegida." },
  {
    name: "Carreta prancha / rebaixada",
    detail: "Cargas excedentes e de grande porte, com acompanhamento quando necessário.",
  },
  { name: "Munck 10t", detail: "Içamento, carga, descarga e posicionamento." },
  { name: "Munck 12t", detail: "Operações de maior alcance e peso." },
  { name: "Munck 14t", detail: "Equipamento para cargas mais exigentes." },
];

export const cargoCategories = [
  {
    title: "Geradores",
    text: "Movimentação e posicionamento com içamento quando o acesso exige.",
  },
  {
    title: "Transformadores",
    text: "Cargas concentradas que pedem apoio, amarração e plano de descarga.",
  },
  {
    title: "Containers",
    text: "Transporte, içamento e posicionamento em base definida.",
  },
  {
    title: "Empilhadeiras",
    text: "Coleta, transporte e entrega de equipamentos de movimentação.",
  },
  {
    title: "Equipamentos",
    text: "Máquinas e conjuntos industriais de diferentes portes.",
  },
  {
    title: "Equipamentos hospitalares",
    text: "Operações sensíveis, com atenção ao ambiente e ao manuseio.",
  },
  {
    title: "Equipamentos para operações especiais",
    text: "Demandas que exigem estudo prévio e configuração sob medida.",
  },
];

export const segments = [
  { number: "01", title: "Construção civil", text: "Movimentação de materiais, estruturas e equipamentos de obra." },
  { number: "02", title: "Indústrias", text: "Transporte e remoção de máquinas e conjuntos industriais." },
  { number: "03", title: "Logística e transporte", text: "Apoio operacional a fluxos de coleta, entrega e armazenagem." },
  { number: "04", title: "Montagens e desmontagens", text: "Içamento e posicionamento em montagens programadas." },
  { number: "05", title: "Empresas e comércios", text: "Operações pontuais com prazo e ambiente definidos." },
];

export const processSteps = [
  { number: "01", title: "Recebimento", text: "Carga, local e prazo entram no mapa da operação." },
  { number: "02", title: "Análise", text: "Acessos, peso, dimensões e riscos são avaliados." },
  { number: "03", title: "Planejamento", text: "Frota, equipe, cronograma e medidas de segurança." },
  { number: "04", title: "Execução", text: "Profissionais treinados seguem o plano definido." },
  { number: "05", title: "Monitoramento", text: "Controle e precisão durante todo o processo." },
  { number: "06", title: "Entrega", text: "Integridade da carga e conclusão cuidadosa." },
];

export const differentials = [
  { title: "Atendimento emergencial", text: "Resposta rápida para demandas críticas." },
  { title: "Operações programadas e especiais", text: "Planejamento dedicado para cargas complexas." },
  { title: "Solução completa", text: "Transporte + armazenagem + remoção + içamento." },
  { title: "Planejamento operacional", text: "Análise técnica antes da execução." },
  { title: "Seguro e gestão de risco", text: "Processos para reduzir exposição e imprevistos." },
  { title: "Equipe especializada", text: "Profissionais preparados para operações sensíveis." },
];

export const clients = [
  "MWM",
  "TIVEA",
  "DEUTZ",
  "CHICAGO PNEUMATIC",
  "MULTIDIESEL",
  "TOYAMA",
  "SAS EMPILHADEIRAS",
  "ANDRITZ INSTALL",
  "CDMC",
  "MAXMIL",
  "WALL SYSTEM",
];

export const partnersVoices = [
  { name: "Priszelen Lelis", company: "CDMC Motores" },
  { name: "Vagner", company: "" },
  { name: "Viviane", company: "Wall System" },
  { name: "Equipe Rematec", company: "" },
];

export const faqs = [
  {
    q: "Vocês atendem fora de São Paulo?",
    a: "Sim. A Siga Brasil realiza atendimento rodoviário em todo o Brasil, com base operacional em Guarulhos/SP.",
  },
  {
    q: "Vocês trabalham com cargas especiais?",
    a: "Sim. A empresa apresenta experiência e estrutura para operações envolvendo geradores, transformadores, containers, empilhadeiras e equipamentos especiais, entre outros.",
  },
  {
    q: "Vocês possuem estrutura para içamento?",
    a: "Sim. A estrutura apresentada inclui Muncks e equipamentos de 10t, 12t e 14t.",
  },
  {
    q: "Posso contratar apenas o transporte?",
    a: "Sim. A operação pode ser estruturada conforme a necessidade do cliente, incluindo transporte, remoção, içamento e armazenagem.",
  },
  {
    q: "Como vocês planejam uma operação?",
    a: "O processo considera informações como carga, local, prazo, acessos, peso e riscos antes da execução.",
  },
  {
    q: "Qual veículo é usado para cargas de grande porte?",
    a: "A configuração é definida conforme peso, dimensão e acesso. Para cargas excedentes e de grande porte, são utilizadas carretas prancha/rebaixadas, com acompanhamento quando necessário.",
  },
];

export const cases = [
  {
    title: "Retirada de equipamento com operação em andamento",
    challenge: "Retirar equipamento e manter fluxo operacional.",
    result: "Resultados controlados.",
    image: photos.remocao,
    alt: "Remoção técnica de equipamento embalado em ambiente interno",
  },
  {
    title: "Içamento e posicionamento de gerador",
    challenge: "Posicionar gerador em área externa com acesso lateral restrito.",
    result: "Operação planejada e executada com Munck.",
    image: photos.gerador,
    alt: "Içamento de gerador por caminhão Munck ao lado de galpão industrial",
  },
  {
    title: "Carregamento de equipamento industrial",
    challenge: "Carregar e amarrar equipamento de grande volume para transporte.",
    result: "Carga posicionada e liberada para seguir viagem.",
    image: photos.carregamento,
    alt: "Carregamento de equipamento industrial em caminhão Munck",
  },
];
