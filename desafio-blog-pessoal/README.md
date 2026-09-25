# Blog Pessoal API

Projeto desenvolvido como atividade prática do curso de Desenvolvimento Full Stack da DIO. A proposta da atividade foi criar uma API REST para um blog pessoal usando NestJS, Supabase e Prisma, permitindo autenticação, gerenciamento de usuários e publicação de posts.

## Visão geral

Este projeto implementa um backend para um blog pessoal com:

- cadastro e login de usuários
- autenticação com Supabase
- proteção de rotas autenticadas
- CRUD completo de posts
- integração com PostgreSQL via Prisma
- documentação da API com Swagger
- validação de payloads com DTOs e decorators do NestJS

A aplicação foi estruturada em módulos para separar responsabilidades de autenticação, usuários, posts e acesso ao banco de dados.

## Contexto da atividade no curso DIO

Este repositório faz parte de uma atividade de formação prática da DIO, onde o objetivo é aplicar conceitos de:

- Node.js e TypeScript
- NestJS como framework backend
- autenticação e autorização
- persistência com Prisma ORM
- integração com serviços externos como Supabase
- desenvolvimento de APIs REST seguindo boas práticas

## Stack tecnológica

- Node.js
- NestJS
- TypeScript
- Prisma ORM
- PostgreSQL
- Supabase Auth
- Swagger
- class-validator / class-transformer

## Funcionalidades

### Autenticação
- registro de usuário
- login com email e senha
- geração de token de acesso via Supabase
- uso de guard para proteger rotas sensíveis

### Posts
- criação de posts
- listagem de posts públicos
- consulta por ID
- atualização de post do autor
- exclusão de post do autor

### Validação e documentação
- DTOs para entrada de dados
- validação automática com `ValidationPipe`
- documentação interativa em Swagger

## Estrutura do projeto

```text
src/
├── app.module.ts
├── main.ts
├── auth/
│   ├── dto/
│   ├── guards/
│   ├── auth.controller.ts
│   ├── auth.module.ts
│   └── auth.service.ts
├── common/
│   └── decorators/
├── posts/
│   ├── dto/
│   ├── posts.controller.ts
│   ├── posts.module.ts
│   └── posts.service.ts
├── prisma/
│   ├── prisma.module.ts
│   └── prisma.service.ts
├── users/
│   ├── users.module.ts
│   └── users.service.ts
└── ...
```

## Requisitos

Antes de executar o projeto, você precisa ter instalado:

- Node.js 18+
- npm ou yarn
- uma conta no Supabase
- um projeto PostgreSQL configurado no Supabase

## Configuração

1. Clone o repositório
2. Acesse a pasta do projeto
3. Crie um arquivo `.env.local` com as variáveis abaixo:

```env
DATABASE_URL="postgresql://usuario:senha@host:6543/postgres?pgbouncer=true&sslmode=no-verify"
SUPABASE_URL="https://seu-projeto.supabase.co"
SUPABASE_ANON_KEY="sua-chave-anon"
JWT_SECRET="sua-chave-jwt"
PORT=3000
```

> A variável `DATABASE_URL` deve apontar para o banco PostgreSQL do Supabase ou outro banco PostgreSQL configurado para o projeto.

## Instalação

```bash
npm install
```

## Execução

### Ambiente de desenvolvimento

```bash
npm run start:dev
```

A API ficará disponível em:

```text
http://localhost:3000
```

A documentação Swagger estará acessível em:

```text
http://localhost:3000/api/docs
```

## Endpoints principais

| Método | Rota | Descrição |
|---|---|---|
| POST | `/auth/register` | Cadastro de usuário |
| POST | `/auth/login` | Login e autenticação |
| POST | `/posts` | Criação de post |
| GET | `/posts` | Listagem de posts |
| GET | `/posts/:id` | Busca de um post específico |
| PUT | `/posts/:id` | Atualização de post |
| DELETE | `/posts/:id` | Exclusão de post |

### Observação
- Rotas de criação, atualização e exclusão de posts exigem autenticação.
- Rotas de consulta pública podem ser acessadas sem token.

## Banco de dados

O projeto utiliza Prisma para modelagem e acesso ao banco de dados. A estrutura principal contém os modelos:

- `User`
- `Post`

Esses modelos representam o relacionamento entre usuários e publicações do blog.

## Como o projeto funciona

1. O usuário se cadastra ou realiza login na rota de autenticação.
2. O backend valida as credenciais e autentica o usuário por meio do Supabase.
3. Ao acessar endpoints protegidos, o guard valida o token do usuário.
4. O sistema persiste os dados no PostgreSQL utilizando Prisma.
5. Os posts ficam vinculados ao autor por meio do relacionamento `authorId`.

## Boas práticas aplicadas

- modularização por domínio
- uso de DTOs para validação de dados
- uso de guard para autenticação
- uso de decoradores e interceptadores
- uso de ambiente via variáveis de configuração
- integração com documentação automática da API

## Possíveis melhorias

- paginação na listagem de posts
- upload de imagens para capa dos posts
- comentários e categorias
- filtros por autor, data e título
- testes automatizados com Jest
- deploy em plataforma de produção

## Licença

Este projeto foi desenvolvido como atividade educacional dentro do curso DIO e é destinado a fins de aprendizado.

## Créditos

Desenvolvido com foco em prática profissional e aplicada para o estudo de backend com NestJS, Prisma e Supabase.