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
  detail: CaseDetail;
};

export const workItems: PortfolioCase[] = [
  {
    slug: "extensao-mobile-redes-neurais",
    year: "Em andamento",
    title: "Aplicações mobile e redes neurais",
    description:
      "Desenvolvimento mobile e treinamento de redes neurais em um projeto de extensão voltado ao processamento e à análise de dados.",
    category: "Projeto de extensão • IA",
    detail: {
      summary:
        "Atuação em projeto de extensão que combina desenvolvimento de aplicativo mobile com treinamento e aplicação de redes neurais.",
      meta: [
        { label: "Papel", value: "Desenvolvedor mobile" },
        {
          label: "Tecnologias",
          value: "React Native, JavaScript, Node.js e Python",
        },
        { label: "Pesquisa", value: "Redes neurais e análise de dados" },
      ],
      blocks: [
        {
          heading: "Contexto",
          text: "O projeto integra uma solução mobile a técnicas de redes neurais para processamento e análise de dados.",
          aside: "Projeto de extensão em andamento.",
        },
        {
          heading: "Atuação",
          text: "Implemento funcionalidades para o aplicativo mobile e trabalho no desenvolvimento e treinamento de redes neurais aplicadas ao projeto.",
          aside: "A experiência une desenvolvimento de software e pesquisa aplicada em IA.",
        },
        {
          heading: "Pesquisa",
          text: "Um artigo científico sobre uma solução mobile e o uso de redes neurais para processamento e análise de dados foi aprovado e apresentado no CSBC 2026.",
          aside: "Artigo científico — CSBC 2026.",
        },
      ],
    },
  },
];

export const projectItems: PortfolioCase[] = [
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
  {
    slug: "sistema-financeiro",
    year: "2026",
    title: "Sistema Financeiro",
    description:
      "MVP web para registrar receitas e despesas, acompanhar saldo, filtrar movimentações e visualizar gráficos, com persistência local.",
    category: "Projeto acadêmico • JavaScript",
    repositoryUrl: "https://github.com/alessandromionb/Sistema-Financeiro",
    detail: {
      summary:
        "Aplicação web de controle financeiro pessoal desenvolvida em equipe como MVP acadêmico.",
      meta: [
        {
          label: "Contribuição",
          value: "Organização, estrutura, versionamento e integração",
        },
        { label: "Stack", value: "HTML, CSS, JavaScript e Docker" },
        { label: "Persistência", value: "localStorage no navegador" },
      ],
      blocks: [
        {
          heading: "Contexto",
          text: "O MVP ajuda a registrar receitas e despesas e acompanhar o saldo e o histórico de movimentações em uma interface web.",
          aside: "Projeto acadêmico desenvolvido em equipe.",
        },
        {
          heading: "Implementação",
          text: "A aplicação usa JavaScript no navegador, organiza as movimentações por módulos e persiste os dados localmente com localStorage.",
          aside: "Não requer backend ou banco de dados externo.",
        },
        {
          heading: "Contribuição",
          text: "Minha participação incluiu organização geral do projeto, estrutura dos arquivos, versionamento no GitHub e apoio à integração das partes do MVP.",
          aside: "O repositório inclui instruções para execução local e com Docker.",
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
