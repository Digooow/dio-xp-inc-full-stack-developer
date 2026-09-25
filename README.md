.
<div align="center">

# DIO XP Inc. — Full Stack Developer

### Repositório principal de estudos, exercícios e desafios desenvolvidos durante a formação da [Digital Innovation One](https://www.dio.me/)

<p>
  <a href="https://github.com/Digooow/dio-xp-inc-full-stack-developer">
    <img src="https://img.shields.io/badge/status-em%20desenvolvimento-2ea44f?style=for-the-badge" alt="Status: em desenvolvimento">
  </a>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white" alt=".NET">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
</p>

</div>

> Este é o **hub central** da minha jornada no curso DIO XP Inc. Full Stack Developer. Cada diretório representa uma aula prática, laboratório ou desafio de projeto, reunindo a evolução desde os fundamentos de lógica e programação até a construção de aplicações web, APIs, persistência de dados, testes e práticas de colaboração.

## Índice

- [Sobre o repositório](#sobre-o-repositório)
- [O que foi desenvolvido](#o-que-foi-desenvolvido)
- [Mapa de projetos](#mapa-de-projetos)
- [Habilidades construídas](#habilidades-construídas)
- [Tecnologias e ferramentas](#tecnologias-e-ferramentas)
- [Como utilizar](#como-utilizar)
- [Organização do repositório](#organização-do-repositório)
- [Próximos passos](#próximos-passos)
- [Créditos](#créditos)

## Sobre o repositório

Este repositório funciona como um portfólio prático da formação. Em vez de concentrar tudo em uma única aplicação, ele preserva os diferentes contextos e objetivos de cada etapa do curso:

- fundamentos de C# e orientação a objetos;
- desenvolvimento de aplicações de console;
- criação de APIs REST com Node.js, NestJS e ASP.NET Core;
- modelagem, consultas e persistência em bancos de dados;
- desenvolvimento de interfaces com React;
- consumo de APIs externas e simuladas;
- validação de formulários e tipagem com TypeScript;
- testes unitários, testes de componentes e TDD;
- Git, GitHub, Markdown e colaboração em projetos open source.

Os projetos são independentes. Assim, cada pasta possui seu próprio `README.md`, manifesto de dependências e instruções específicas quando necessário.

## O que foi desenvolvido

Ao longo do curso, foram construídas soluções de diferentes níveis de complexidade:

- **Aplicações de console em C#**, como um sistema de estacionamento, uma hospedagem com regras de negócio e uma simulação de smartphones.
- **Exercícios de fundamentos do .NET**, explorando classes, propriedades, coleções, condicionais, loops, exceções, abstração, herança, encapsulamento e polimorfismo.
- **APIs REST**, incluindo uma API de tarefas com CRUD, filtros, Entity Framework Core, migrations, SQLite e Swagger.
- **Uma Minimal API**, com projeto dedicado e testes automatizados em .NET.
- **Consultas SQL**, com criação e carga de banco relacional de filmes, relacionamentos entre tabelas, filtros, agregações e `JOINs`.
- **Uma API de calculadora em Node.js e Express**, praticando servidor HTTP, JSON, rotas e operações matemáticas.
- **Um blog pessoal**, com NestJS, TypeScript, autenticação via Supabase, Prisma, PostgreSQL, DTOs, guards e documentação Swagger.
- **Interfaces React**, como uma calculadora, uma reprodução de interface da plataforma DIO, um feed social e um formulário de cadastro tipado.
- **Integrações com APIs**, incluindo a busca de repositórios públicos do GitHub com tratamento de carregamento, erros e estados vazios.
- **Testes automatizados**, com Vitest, React Testing Library, JSDOM e cenários de TDD para funções e componentes.
- **Contribuição open source**, com documentação, perfil, Markdown, estrutura de projeto e práticas de colaboração no GitHub.

## Mapa de projetos

### Front-end, React e JavaScript

| Projeto | O que foi praticado |
| --- | --- |
| [Calculadora em React](https://github.com/Digooow/dio-xp-inc-full-stack-developer/tree/main/trilha-react-desafio01-calculadora) | Componentes funcionais, `useState`, eventos, operações matemáticas e `styled-components`. |
| [DIO.me — interface e feed](https://github.com/Digooow/dio-xp-inc-full-stack-developer/tree/main/trilha-react-desafio-3) | React Router, formulários com React Hook Form, Axios, JSON Server, autenticação simulada e feed responsivo. |
| [Formulário React + TypeScript](https://github.com/Digooow/dio-xp-inc-full-stack-developer/tree/main/trilha-react-desafio-4) | Tipagem, React Hook Form, Zod, validação de idade e termos, componentes reutilizáveis e Vite. |
| [GitHub Wiki](https://github.com/Digooow/dio-xp-inc-full-stack-developer/tree/main/desafio-02-githubwiki) | React com Vite, Axios, styled-components, API pública do GitHub, busca, estados de erro e responsividade. |
| [Test-Driven Development](https://github.com/Digooow/dio-xp-inc-full-stack-developer/tree/main/test-driven-development-desafio) | Vitest, React Testing Library, User Event, JSDOM, testes unitários e testes de interação. |
| [API Calculadora](https://github.com/Digooow/dio-xp-inc-full-stack-developer/tree/main/APICalculadora) | Node.js, JavaScript com módulos ES, Express, endpoints HTTP e payloads JSON. |

### Backend, .NET e C#

| Projeto | O que foi praticado |
| --- | --- |
| [Fundamentos de C# — estacionamento](https://github.com/Digooow/dio-xp-inc-full-stack-developer/tree/main/trilha-net-fundamentos-desafio) | Console, coleções, métodos, menu interativo, validação e cálculo de valores. |
| [Explorando C# — hospedagem](https://github.com/Digooow/dio-xp-inc-full-stack-developer/tree/main/trilha-net-explorando-desafio) | Classes, construtores, relacionamentos, listas, exceções e regras de negócio. |
| [POO com C# — smartphones](https://github.com/Digooow/dio-xp-inc-full-stack-developer/tree/main/trilha-net-poo-desafio) | Abstração, herança, encapsulamento, polimorfismo e sobrescrita de métodos. |
| [Testes unitários em .NET](https://github.com/Digooow/dio-xp-inc-full-stack-developer/tree/main/trilha-net-testes-unitarios-desafio) | Estrutura de testes, projeto de console, projeto de testes e validação automatizada. |
| [API de tarefas](https://github.com/Digooow/dio-xp-inc-full-stack-developer/tree/main/trilha-net-api-desafio) | ASP.NET Core Web API, CRUD, Entity Framework Core, SQLite, migrations e Swagger/OpenAPI. |
| [Minimal API](https://github.com/Digooow/dio-xp-inc-full-stack-developer/tree/main/minimal-api) | Construção de endpoints com Minimal API, persistência local e projeto de testes em .NET. |

### Dados, autenticação e colaboração

| Projeto | O que foi praticado |
| --- | --- |
| [Banco de dados — fundamentos](https://github.com/Digooow/dio-xp-inc-full-stack-developer/tree/main/trilha-net-banco-de-dados) | Scripts SQL, criação de tabelas e primeiros comandos de manipulação de dados. |
| [Desafio de banco de dados — filmes](https://github.com/Digooow/dio-xp-inc-full-stack-developer/tree/main/trilha-net-banco-de-dados-desafio) | SQL Server/T-SQL, `WHERE`, `ORDER BY`, `GROUP BY`, `COUNT`, `INNER JOIN` e modelo relacional. |
| [Blog pessoal](https://github.com/Digooow/dio-xp-inc-full-stack-developer/tree/main/desafio-blog-pessoal) | NestJS, TypeScript, Supabase Auth, Prisma ORM, PostgreSQL, DTOs, guards e Swagger. |
| [DIO Lab Open Source](https://github.com/Digooow/dio-xp-inc-full-stack-developer/tree/main/dio-lab-open-source) | Git, GitHub, Markdown, contribuição open source, organização de documentação e perfil. |

> Para detalhes de endpoints, regras, scripts e comandos de cada entrega, consulte o `README.md` dentro da pasta correspondente.

## Habilidades construídas

### Desenvolvimento front-end

- Composição de interfaces com componentes funcionais e reutilizáveis.
- Gerenciamento de estado, eventos, formulários controlados e renderização condicional.
- Navegação entre telas com React Router.
- Consumo de APIs REST com Axios e tratamento de loading, erro e ausência de resultados.
- Estilização com CSS, `styled-components`, temas e layouts responsivos.
- Validação declarativa com Zod e integração com React Hook Form.
- Tipagem de componentes e dados de formulário com TypeScript.

### Desenvolvimento back-end

- Criação de servidores HTTP e APIs REST.
- Definição de rotas, métodos HTTP, payloads JSON e códigos de status.
- Separação por módulos, controllers, services, DTOs e regras de negócio.
- Autenticação e proteção de rotas com Supabase e guards do NestJS.
- Documentação e exploração de APIs com Swagger/OpenAPI.
- Construção de aplicações de console e APIs com C# e .NET.

### Dados e persistência

- Modelagem de entidades e relacionamentos.
- Consultas relacionais com filtros, ordenação, agrupamento, agregações e junções.
- Persistência com SQLite, PostgreSQL e SQL Server.
- Uso de Entity Framework Core, migrations e Prisma ORM.
- Integração com banco local, banco remoto e serviços gerenciados como Supabase.

### Qualidade e engenharia de software

- Escrita de testes unitários e testes de componentes.
- Testes de interação simulando ações reais do usuário.
- Princípios de TDD: definir o comportamento esperado e validar a implementação por cenários.
- Validação de entradas e tratamento explícito de erros.
- Organização de código por responsabilidades e evolução incremental das soluções.

### Ferramentas e colaboração

- Git para versionamento, histórico e trabalho incremental.
- GitHub para repositórios, documentação e colaboração.
- Markdown para READMEs, guias, diagramas e apresentação de projetos.
- npm e os SDKs do .NET para instalação, restauração, execução e build.
- Vite, Create React App e ferramentas de desenvolvimento locais.

## Tecnologias e ferramentas

<div align="center">

| Categoria | Tecnologias |
| --- | --- |
| Linguagens | C#, JavaScript, TypeScript, SQL, HTML e CSS |
| Front-end | React, React Router, Vite, Create React App, styled-components, React Hook Form e Zod |
| Back-end | Node.js, Express, NestJS, ASP.NET Core Web API e Minimal API |
| Dados | SQL Server, T-SQL, SQLite, PostgreSQL, Entity Framework Core, Prisma e JSON Server |
| Testes | Vitest, React Testing Library, User Event, JSDOM e testes em .NET |
| APIs e documentação | Axios, Swagger/OpenAPI, GitHub REST API e Supabase Auth |
| Ecossistema | Git, GitHub, npm, .NET SDK, Visual Studio/VS Code e Markdown |

</div>

## Como utilizar

### Pré-requisitos

Instale as ferramentas de acordo com o projeto que deseja executar:

- [Git](https://git-scm.com/);
- [Node.js](https://nodejs.org/) e npm para os projetos JavaScript/React;
- [.NET SDK](https://dotnet.microsoft.com/download) para os projetos C#;
- SQL Server e uma ferramenta como SSMS para os desafios de banco de dados;
- uma conta/projeto no [Supabase](https://supabase.com/) para o blog pessoal.

### Clonar o repositório

```bash
git clone https://github.com/Digooow/dio-xp-inc-full-stack-developer.git
cd dio-xp-inc-full-stack-developer
```

### Executar um projeto Node.js ou React

Entre na pasta desejada, instale as dependências e utilize o script indicado no README local:

```bash
cd desafio-02-githubwiki
npm install
npm run dev
```

Outros exemplos:

```bash
# React com Create React App
cd trilha-react-desafio01-calculadora
npm install
npm start

# Testes com Vitest
cd test-driven-development-desafio
npm install
npx vitest run
```

### Executar um projeto .NET

```bash
cd trilha-net-api-desafio
dotnet restore
dotnet run
```

Para projetos de console, use `dotnet run` na pasta que contém o arquivo `.csproj`. Cada desafio informa no README local a versão recomendada do SDK, as portas utilizadas e eventuais comandos de migrations.

### Executar os scripts SQL

1. Abra o SQL Server Management Studio ou outra ferramenta compatível.
2. Execute primeiro o script de criação e carga do banco, quando aplicável.
3. Abra o script de consultas da atividade.
4. Execute as consultas individualmente e compare os resultados com a documentação do desafio.

### Configuração de ambiente

Projetos que dependem de serviços externos podem exigir variáveis de ambiente. No [blog pessoal](https://github.com/Digooow/dio-xp-inc-full-stack-developer/tree/main/desafio-blog-pessoal), por exemplo, configure as credenciais do Supabase e a URL do PostgreSQL em um arquivo local `.env.local`.

> Nunca versionar chaves, tokens, senhas ou arquivos `.env` com credenciais reais.

## Organização do repositório

```text
.
├── APICalculadora/                       # API HTTP com Node.js e Express
├── desafio-02-githubwiki/                # Busca de repositórios no GitHub
├── desafio-blog-pessoal/                 # API NestJS com autenticação e Prisma
├── dio-lab-open-source/                  # Laboratório de GitHub e open source
├── minimal-api/                           # Minimal API e testes em .NET
├── test-driven-development-desafio/      # TDD e testes de componentes React
├── trilha-net-*/                          # Fundamentos, POO, APIs, dados e testes
├── trilha-react-*/                        # Desafios de interfaces com React
└── README.md                              # Índice geral da formação
```

Cada desafio mantém sua própria implementação para tornar a evolução rastreável e permitir executar as atividades de forma isolada.

## Próximos passos

As atividades também deixam espaço para evolução contínua. Entre as melhorias naturais estão:

- completar e ampliar as operações da API de calculadora;
- adicionar testes automatizados às APIs e interfaces que ainda não possuem cobertura;
- evoluir validações, tratamento de erros e respostas padronizadas;
- adicionar paginação, filtros e novos recursos ao blog e às aplicações React;
- configurar deploy, integração contínua e observabilidade;
- aprofundar acessibilidade, segurança e performance.

## Créditos

Este repositório foi desenvolvido por [Digooow](https://github.com/Digooow) durante a formação **DIO XP Inc. Full Stack Developer**, com conteúdo e desafios disponibilizados pela [Digital Innovation One](https://www.dio.me/).

O material tem finalidade educacional e serve como registro da evolução prática em desenvolvimento full stack.
