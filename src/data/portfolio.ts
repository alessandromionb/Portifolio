export type CaseDetailBlock = {
  heading: string;
  text: string;
  aside: string;
};

export type CaseDetailMeta = {
  label: string;
  value: string;
};

export type CaseDetail = {
  summary: string;
  meta: CaseDetailMeta[];
  blocks: CaseDetailBlock[];
};

export type PortfolioCase = {
  slug: string;
  year: string;
  title: string;
  description: string;
  category: string;
  repositoryUrl?: string;
  liveUrl?: string;
  detail: CaseDetail;
};

export const workItems: PortfolioCase[] = [
  {
    slug: "extensao-mobile-redes-neurais",
    year: "Em andamento",
    title: "Aplicações mobile e redes neurais",
    description:
      "Desenvolvimento de um aplicativo mobile com integração de soluções e treinamento de redes neurais.",
    category: "Projeto de extensão • IA",
    detail: {
      summary:
        "Projeto de extensão que combina desenvolvimento mobile com redes neurais aplicadas ao processamento e à análise de dados.",
      meta: [
        { label: "Papel", value: "Desenvolvedor mobile" },
        {
          label: "Tecnologias",
          value: "React Native, JavaScript, Node.js, Python, PyTorch e Docker",
        },
        { label: "Pesquisa", value: "Redes neurais e análise de dados" },
      ],
      blocks: [
        {
          heading: "Contexto",
          text: "O projeto integra uma solução mobile a técnicas de redes neurais voltadas ao processamento e à análise de dados.",
          aside: "Projeto de extensão em andamento.",
        },
        {
          heading: "Atuação",
          text: "Implementação de funcionalidades mobile e integração de soluções de IA, além do desenvolvimento e treinamento de redes neurais.",
          aside: "A atuação une desenvolvimento de software e pesquisa aplicada.",
        },
        {
          heading: "Pesquisa",
          text: "A pesquisa resultou em um artigo científico aprovado e apresentado no CSBC 2026 sobre a solução mobile e o uso de redes neurais.",
          aside: "Artigo científico — CSBC 2026.",
        },
      ],
    },
  },
  {
    slug: "seguranca-agentes-autonomos",
    year: "Iniciação científica",
    title: "Segurança de agentes autônomos de IA",
    description:
      "Pesquisa sobre riscos e estratégias defensivas para agentes autônomos baseados em LLMs no ecossistema OpenClaw.",
    category: "Pesquisa • Segurança de IA",
    detail: {
      summary:
        "Participação em pesquisa aplicada sobre segurança de agentes autônomos baseados em modelos de linguagem.",
      meta: [
        { label: "Papel", value: "Pesquisador de iniciação científica" },
        { label: "Tecnologias", value: "Python, Docker, Git, Semgrep e Bandit" },
        { label: "Foco", value: "Riscos e estratégias defensivas" },
      ],
      blocks: [
        {
          heading: "Contexto",
          text: "A pesquisa investigou agentes autônomos de IA e seus riscos em ambiente controlado.",
          aside: "Foco no ecossistema OpenClaw.",
        },
        {
          heading: "Atuação",
          text: "Análise de riscos e colaboração na avaliação de estratégias defensivas para agentes baseados em LLMs.",
          aside: "Uso de ferramentas de segurança e análise de código.",
        },
        {
          heading: "Tecnologias",
          text: "Python e Docker apoiaram o ambiente de pesquisa, com Git para versionamento e Semgrep e Bandit para avaliação de segurança.",
          aside: "Iniciação científica aplicada.",
        },
      ],
    },
  },
];

export const projectItems: PortfolioCase[] = [
  {
    slug: "ctf-jacitec",
    year: "2026",
    title: "JACITEC CTF",
    description:
      "Plataforma web de Capture The Flag para competições de segurança, com laboratórios vulneráveis, pontuação, dicas e ranking ao vivo.",
    category: "Projeto em equipe • Flask / segurança",
    liveUrl: "https://ctf.distrito28.com.br/",
    repositoryUrl: "https://github.com/MiguelPoleto/CTF-Jacitec",
    detail: {
      summary:
        "Desenvolvimento em equipe de uma plataforma web para realizar competições CTF e práticas de segurança da informação.",
      meta: [
        { label: "Participação", value: "Desenvolvedor do projeto" },
        {
          label: "Stack",
          value: "Python, Flask, HTML, CSS, JavaScript, SQLite e Docker",
        },
        { label: "Funcionalidades", value: "Desafios, pontuação, dicas e ranking" },
      ],
      blocks: [
        {
          heading: "Contexto",
          text: "A plataforma JACITEC CTF organiza competições educativas de segurança web, com laboratórios fictícios, envio de flags e acompanhamento da pontuação.",
          aside: "Projeto acadêmico desenvolvido para o IFES.",
        },
        {
          heading: "Implementação",
          text: "A aplicação oferece eventos configuráveis, sorteio de desafios, níveis de dificuldade, dicas progressivas, painel administrativo e ranking em tempo real.",
          aside: "O backend Flask utiliza SQLite e é executado com Docker.",
        },
        {
          heading: "Contribuição",
          text: "Atuei como desenvolvedor no projeto em equipe responsável pela plataforma JACITEC CTF.",
          aside: "O repositório é mantido pelo coautor Miguel Poleto.",
        },
      ],
    },
  },
  {
    slug: "sistema-de-agendamentos",
    year: "2026",
    title: "AgendaPro — sistema de agendamentos",
    description:
      "Aplicação acadêmica em equipe com API em FastAPI, PostgreSQL, NGINX e implantação conteinerizada com Docker e K3s.",
    category: "Projeto acadêmico • Python / infraestrutura",
    repositoryUrl: "https://github.com/alessandromionb/sistema-de-agendamento",
    detail: {
      summary:
        "Sistema web de agendamentos desenvolvido em equipe para a disciplina de Serviços de Redes para Internet.",
      meta: [
        { label: "Participação", value: "Projeto acadêmico em equipe" },
        {
          label: "Stack",
          value: "Python, FastAPI, PostgreSQL, NGINX, Docker e K3s",
        },
        { label: "Operação", value: "Loki e Grafana para observabilidade" },
      ],
      blocks: [
        {
          heading: "Contexto",
          text: "O sistema organiza o cadastro de clientes e agendamentos por meio de uma aplicação web com serviços separados.",
          aside: "Projeto do Grupo 5.",
        },
        {
          heading: "Arquitetura",
          text: "A aplicação combina uma API FastAPI, banco PostgreSQL e NGINX. Docker Compose apoia a execução local e manifests Kubernetes permitem a implantação em K3s.",
          aside: "A infraestrutura também inclui Loki e Grafana.",
        },
        {
          heading: "Aprendizados",
          text: "O projeto explora integração entre aplicação, persistência de dados, containers, orquestração e observabilidade.",
          aside: "O repositório contém instruções de execução local e implantação.",
        },
      ],
    },
  },
];

export function getWorkItem(slug: string) {
  return workItems.find((item) => item.slug === slug);
}

export function getProjectItem(slug: string) {
  return projectItems.find((item) => item.slug === slug);
}
