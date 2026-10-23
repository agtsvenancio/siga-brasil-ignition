import logo_atlas_schindler from "@/assets/clientes/atlas-schindler.webp";
import logo_enmac from "@/assets/clientes/enmac.webp";
import logo_maxmill from "@/assets/clientes/maxmill.webp";
import logo_caldeiras_maringa from "@/assets/clientes/caldeiras-maringa.webp";
import logo_leao from "@/assets/clientes/leao.webp";
import logo_kba from "@/assets/clientes/kba.webp";
import logo_poleoduto from "@/assets/clientes/poleoduto.webp";
import logo_galvabras from "@/assets/clientes/galvabras.webp";
import logo_drv from "@/assets/clientes/drv.webp";
import logo_valo from "@/assets/clientes/valo.webp";
import logo_otis from "@/assets/clientes/otis.webp";
import logo_leybold from "@/assets/clientes/leybold.webp";
import logo_gaviao_metalurgica from "@/assets/clientes/gaviao-metalurgica.webp";
import logo_set_energia from "@/assets/clientes/set-energia.webp";
import logo_okobo from "@/assets/clientes/okobo.webp";
import logo_tecmax from "@/assets/clientes/tecmax.webp";
import logo_montele from "@/assets/clientes/montele.webp";
import logo_prado from "@/assets/clientes/prado.webp";
import logo_thorio from "@/assets/clientes/thorio.webp";
import logo_install from "@/assets/clientes/install.webp";
import logo_cdmc from "@/assets/clientes/cdmc.webp";
import logo_villarta from "@/assets/clientes/villarta.webp";
import logo_eqs from "@/assets/clientes/eqs.webp";
import logo_tecnicargo from "@/assets/clientes/tecnicargo.webp";
import logo_energ from "@/assets/clientes/energ.webp";
import logo_wall_system from "@/assets/clientes/wall-system.webp";
import logo_mwm from "@/assets/clientes/mwm.webp";
import logo_tivea from "@/assets/clientes/tivea.webp";
import logo_deutz from "@/assets/clientes/deutz.webp";
import logo_chicago_pneumatic from "@/assets/clientes/chicago-pneumatic.webp";
import logo_multidiesel from "@/assets/clientes/multidiesel.webp";
import logo_toyama from "@/assets/clientes/toyama.webp";
import logo_sas_noblelift from "@/assets/clientes/sas-noblelift.webp";
import logo_toledo from "@/assets/clientes/toledo.webp";
import logo_andritz from "@/assets/clientes/andritz.webp";
import logo_rematec from "@/assets/clientes/rematec.webp";
import logoImg from "@/assets/logo-navbar.webp";
import logoWhiteImg from "@/assets/logo-branca.webp";
import munck from "@/assets/munck-industrial.webp";
import icamento from "@/assets/icamento-aereo.webp";
import cargaMwm from "@/assets/carga-mwm-galpao.webp";
import gerador from "@/assets/operacao-gerador.webp";
import remocao from "@/assets/remocao-tecnica.webp";
import transporte from "@/assets/transporte-industrial.webp";
import equipeMaquina from "@/assets/equipe-maquina.webp";
import munckDupla from "@/assets/munck-dupla.webp";
import armazem from "@/assets/armazem-galpao.webp";
import frota from "@/assets/frota-patio.webp";
import seguranca from "@/assets/seguranca-icamento.webp";
import apoioObras from "@/assets/apoio-obras.webp";
import movimentacaoIndustrial from "@/assets/movimentacao-industrial.webp";
import operacaoCampo from "@/assets/operacao-campo.webp";
import icamentoRecygases from "@/assets/icamento-recygases.webp";
import transporteEmpilhadeira from "@/assets/transporte-empilhadeira.webp";
import posicionamentoGerador from "@/assets/posicionamento-gerador.webp";
import carretaTubos from "@/assets/carreta-tubos.webp";
import munckPrensa from "@/assets/munck-prensa.webp";
import truckTubosGalpao from "@/assets/truck-tubos-galpao.webp";
import icamentoQuiosque from "@/assets/icamento-quiosque.webp";
import transporteTambores from "@/assets/transporte-tambores.webp";
import truckLonaGalpao from "@/assets/truck-lona-galpao.webp";
import transbordoGalpao from "@/assets/transbordo-galpao.webp";
import deliveryPaletes from "@/assets/delivery-paletes.webp";
import transporteTanque from "@/assets/transporte-tanque.webp";

export const logo = logoImg;
export const logoWhite = logoWhiteImg;

export const photos = {
  munck,
  icamento,
  cargaMwm,
  gerador,
  remocao,
  transporte,
  equipeMaquina,
  munckDupla,
  armazem,
  frota,
  seguranca,
  apoioObras,
  movimentacaoIndustrial,
  operacaoCampo,
  icamentoRecygases,
  transporteEmpilhadeira,
  posicionamentoGerador,
  carretaTubos,
  munckPrensa,
  truckTubosGalpao,
  icamentoQuiosque,
  transporteTambores,
  truckLonaGalpao,
  transbordoGalpao,
  deliveryPaletes,
  transporteTanque,
};

export const brand = {
  name: "Siga Brasil Transportes",
  tagline: "Movendo desafios. Elevando confiança.",
  pillars: ["Transporte rodoviário", "Içamento", "Remoção", "Armazenagem"],
};

export const contact = {
  /** Telefone fixo (Apresentação Institucional 2026) */
  phoneLabel: "(11) 2358-2250",
  phoneRaw: "551123582250",
  /** WhatsApp — mesmo número do fixo (contato único da empresa) */
  whatsappLabel: "(11) 2358-2250",
  whatsappRaw: "551123582250",
  email: "contato@sigabr.com.br",
  cnpj: "21.437.329/0001-94",
  site: "www.sigabr.com.br",
  addressLine1: "Rua Silvestre Vasconcelos Calmon, 444",
  addressLine2: "Vila Pedro Moreira • Guarulhos/SP",
  coverage: "Atendimento em todo o Brasil",
  coverageDetail:
    "Grande São Paulo, interior, litoral, Sul e Sudeste. Operações interestaduais conforme a demanda.",
};

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá, Siga Brasil! Gostaria de solicitar um orçamento para uma operação de transporte/movimentação de carga.";

export function whatsappUrl(message: string = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${contact.whatsappRaw}?text=${encodeURIComponent(message)}`;
}

/** Item "soluções" vira submenu com as páginas de cada solução (sem página índice). */
export const SOLUTIONS_MENU = "solucoes" as const;

export const mainNav = [
  { label: "Início", to: "/" },
  { label: "A Empresa", to: "/empresa" },
  { label: "Soluções", to: SOLUTIONS_MENU },
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
    image: photos.operacaoCampo,
    imageAlt:
      "Carreta Volvo da Siga Brasil com Munck em operação de descarga em campo",
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
      "Toco",
      "3/4",
      "Truck — até 14.000 kg",
      "Carreta — até 25.000 kg",
      "Carreta rebaixada — cargas especiais",
    ],
  },
  {
    slug: "remocao-tecnica",
    number: "02",
    title: "Remoção técnica",
    short:
      "Estudo prévio para preservar a carga, o ambiente e a continuidade da operação.",
    image: photos.equipeMaquina,
    imageAlt:
      "Equipe da Siga Brasil removendo máquina industrial com paleteira em ambiente interno",
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
    image: photos.munckDupla,
    imageAlt:
      "Dois caminhões Munck da Siga Brasil içando equipamento industrial em frente a galpão",
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
    image: photos.armazem,
    imageAlt:
      "Galpão de armazenagem da Siga Brasil com cargas paletizadas, empilhadeira e caminhões",
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
      "2.000 m² de área de armazenagem",
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

export const fleetCategories = [
  { name: "Vans e utilitários", detail: "Fiorino, picapes e vans para coletas ágeis.", accent: false },
  { name: "3/4 e Toco", detail: "Operações de médio porte, aberto, baú ou sider.", accent: true },
  { name: "Truck aberto e fechado", detail: "Cargas maiores com controle e segurança.", accent: false },
  { name: "Carretas abertas e fechadas", detail: "Transporte para volumes e trajetos especiais.", accent: true },
  { name: "Carreta prancha/rebaixada", detail: "Cargas excedentes e de grande porte.", accent: false },
  { name: "Muncks e içamento", detail: "Movimentação, carga, descarga e posicionamento.", accent: true },
];

export const fleet = [
  { name: "Fiorino e picape", detail: "Pequenas cargas e entregas rápidas com utilitários." },
  { name: "Van", detail: "Coletas e entregas urbanas de menor volume." },
  { name: "3/4", detail: "Até 5.000 kg — aberto, baú ou sider." },
  { name: "Toco", detail: "Cargas intermediárias com boa manobrabilidade." },
  { name: "Truck aberto", detail: "Até 14.000 kg — carroceria aberta." },
  { name: "Truck fechado", detail: "Até 14.000 kg — carga protegida." },
  { name: "Carreta aberta", detail: "Até 25.000 kg — carroceria aberta." },
  { name: "Carreta fechada", detail: "Até 25.000 kg — carga protegida." },
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
    title: "Máquinas industriais",
    text: "Máquinas e conjuntos industriais de diferentes portes, com remoção e posicionamento.",
  },
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
    title: "Estruturas metálicas",
    text: "Içamento e transporte de peças longas, pesadas e de montagem.",
  },
  {
    title: "Equipamentos hospitalares",
    text: "Operações sensíveis, com atenção ao ambiente e ao manuseio.",
  },
  {
    title: "Equipamentos de construção civil",
    text: "Apoio a obras e implantações com transporte e içamento.",
  },
];

export const operations = [
  {
    title: "Apoio a obras e projetos",
    text: "Içamento, posicionamento e transporte de cargas em operações de obras e implantações.",
    image: photos.apoioObras,
    alt: "Caminhão Munck da Siga Brasil em operação de apoio a obra com terreno em terraplenagem",
  },
  {
    title: "Movimentação industrial",
    text: "Movimentação de máquinas e equipamentos com planejamento e controle.",
    image: photos.movimentacaoIndustrial,
    alt: "Equipe da Siga Brasil com coletes e capacetes movimentando máquina industrial",
  },
  {
    title: "Operação em campo",
    text: "Transporte e descarga alinhados às condições de acesso e à rotina do cliente.",
    image: photos.operacaoCampo,
    alt: "Carreta da Siga Brasil com Munck descarregando estrutura em canteiro",
  },
];

export const stats = [
  { value: "4", label: "Frentes de atuação integradas" },
  { value: "1.700+", label: "Operações realizadas" },
  { value: "10t | 12t | 14t", label: "Muncks e equipamentos de içamento" },
  { value: "Brasil", label: "Atendimento rodoviário nacional" },
  { value: "Guarulhos/SP", label: "Base operacional" },
  { value: "2.000 m²", label: "Área de armazenagem" },
];

export const institutional = [
  {
    title: "Missão",
    text: "Movimentar e transportar cargas com segurança, planejamento e responsabilidade.",
  },
  {
    title: "Visão",
    text: "Ser referência em soluções integradas de transporte e movimentação de cargas.",
  },
  {
    title: "Valores",
    text: "Segurança, compromisso, confiança e respeito às pessoas e à carga.",
  },
  {
    title: "Sustentabilidade",
    text: "Compromisso com o uso responsável de recursos e o cuidado com o ambiente operacional.",
  },
];

export const safetyItems = [
  { title: "Seguro de carga", text: "Proteção para transporte conforme natureza da operação." },
  { title: "Seguro para içamento", text: "Cobertura e critérios técnicos quando aplicável." },
  { title: "Procedimentos de segurança", text: "Comunicação e controle em cada fase do trabalho." },
  { title: "ART e documentação técnica", text: "Apoio documental quando exigido pela operação." },
  { title: "Treinamentos e certificações", text: "Equipe orientada por práticas de segurança." },
];

export const segments = [
  { number: "01", title: "Construção civil", text: "Movimentação de materiais, estruturas e equipamentos de obra." },
  { number: "02", title: "Indústrias", text: "Transporte e remoção de máquinas e conjuntos industriais." },
  { number: "03", title: "Logística e transporte", text: "Apoio operacional a fluxos de coleta, entrega e armazenagem." },
  { number: "04", title: "Montagens e desmontagens", text: "Içamento e posicionamento em montagens programadas." },
  { number: "05", title: "Empresas e comércios", text: "Operações pontuais com prazo e ambiente definidos." },
  { number: "06", title: "Energia e geradores", text: "Transporte e posicionamento de geradores e transformadores." },
  { number: "07", title: "Elevadores e equipamentos prediais", text: "Movimentação cuidadosa de componentes em áreas urbanas." },
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
  { title: "Seguro e gestão de risco", text: "Seguro de carga e de içamento, ART e procedimentos documentados." },
  { title: "Equipe especializada", text: "Profissionais preparados para operações sensíveis." },
];

export type Client = { name: string; logo: string; dark?: boolean };

export const clients: Client[] = [
  { name: "Atlas Schindler", logo: logo_atlas_schindler },
  { name: "Enmac", logo: logo_enmac },
  { name: "Maxmill", logo: logo_maxmill },
  { name: "Caldeiras Maringá", logo: logo_caldeiras_maringa },
  { name: "Leão", logo: logo_leao },
  { name: "KBA Inspeção e Montagem", logo: logo_kba },
  { name: "Poleoduto", logo: logo_poleoduto },
  { name: "Galvabras", logo: logo_galvabras },
  { name: "DRV", logo: logo_drv },
  { name: "Valo BioMedia", logo: logo_valo },
  { name: "Otis", logo: logo_otis },
  { name: "Leybold", logo: logo_leybold },
  { name: "Gavião Metalúrgica", logo: logo_gaviao_metalurgica },
  { name: "Set Energia", logo: logo_set_energia },
  { name: "Okobo Turbo System", logo: logo_okobo },
  { name: "Tecmax Geradores", logo: logo_tecmax },
  { name: "Montele Elevadores", logo: logo_montele },
  { name: "Pado", logo: logo_prado },
  { name: "Thório Geradores", logo: logo_thorio },
  { name: "Install Automação Industrial", logo: logo_install },
  { name: "CDMC Motores", logo: logo_cdmc },
  { name: "Villarta Elevadores", logo: logo_villarta },
  { name: "EQS Engenharia", logo: logo_eqs },
  { name: "Tecnicargo", logo: logo_tecnicargo },
  { name: "Energ Geradores", logo: logo_energ },
  { name: "Wall System", logo: logo_wall_system },
  { name: "MWM", logo: logo_mwm },
  { name: "Tivea", logo: logo_tivea },
  { name: "Deutz", logo: logo_deutz },
  { name: "Chicago Pneumatic", logo: logo_chicago_pneumatic },
  { name: "Multidiesel Geradores", logo: logo_multidiesel },
  { name: "Toyama", logo: logo_toyama },
  { name: "SAS Empilhadeiras / Noblelift", logo: logo_sas_noblelift, dark: true },
  { name: "Toledo do Brasil", logo: logo_toledo },
  { name: "Andritz", logo: logo_andritz },
  { name: "Rematec", logo: logo_rematec },
];

export const testimonials = [
  {
    company: "Install Automação Ltda",
    name: "Priszelen Lelis",
    quote:
      "Mais de 70 contratações atendidas conforme negociado. São zelosos, têm excelente atendimento, preço justo e nós recomendamos.",
  },
  {
    company: "CDMC Motores",
    name: "Vagner",
    quote:
      "Estamos muito satisfeitos com os serviços prestados: equipe atenciosa, fretes com preço justo, qualidade e prazo conforme combinado.",
  },
  {
    company: "Maxmil",
    name: "Viviane",
    quote:
      "Parceira há mais de um ano. Fretes concluídos com sucesso, atendimento espetacular e negociação perfeita.",
  },
  {
    company: "Wall System",
    name: "Cléo Ávila",
    quote:
      "Material delicado, pesado e complicado de transportar. O serviço é sempre muito bem executado.",
  },
  {
    company: "Rematec",
    name: "Equipe Rematec",
    quote:
      "Fiquei muito satisfeito com a agilidade e comprometimento. Equipe 10! O prazo foi superado.",
  },
];

export const faqs = [
  {
    q: "Vocês atendem fora de São Paulo?",
    a: "Sim. A Siga Brasil realiza atendimento rodoviário em todo o Brasil, com base operacional em Guarulhos/SP — Grande São Paulo, interior, litoral, Sul e Sudeste, além de operações interestaduais conforme a demanda.",
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
    q: "As operações têm seguro?",
    a: "Sim. Trabalhamos com seguro de carga conforme a natureza da operação e seguro para içamento quando aplicável, com ART e documentação técnica quando exigidas.",
  },
  {
    q: "Vocês oferecem armazenagem?",
    a: "Sim. São 2.000 m² de área de armazenagem para guarda, organização e apoio ao fluxo de cargas antes ou depois do transporte.",
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
    image: photos.posicionamentoGerador,
    alt: "Munck da Siga Brasil posicionando gerador MWM com equipe de EPI",
  },
  {
    title: "Carregamento de equipamento industrial",
    challenge: "Carregar e amarrar equipamento de grande volume para transporte.",
    result: "Carga posicionada e liberada para seguir viagem.",
    image: photos.munckPrensa,
    alt: "Caminhão Munck da Siga Brasil com prensa industrial amarrada na carroceria",
  },
];
