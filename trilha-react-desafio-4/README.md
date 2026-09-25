# Formulário de cadastro com React e TypeScript

Atividade desenvolvida durante o curso **DIO XP Inc. Full Stack Developer**, na trilha de React. O projeto pratica a criação de um formulário de cadastro tipado, com componentes reutilizáveis, validação de dados e estilização usando `styled-components`.

## Sobre a atividade

A aplicação apresenta uma tela de criação de conta com validações no front-end. O formulário utiliza o React Hook Form para controlar os campos e o Zod para declarar e executar as regras de validação.

Após o preenchimento válido, os dados são exibidos no console e uma mensagem de sucesso é apresentada. A integração com um backend ainda não está ativa; o projeto já possui uma instância do Axios preparada para uma futura API.

## Funcionalidades

- Formulário de criação de conta;
- Validação do nome com, no mínimo, três caracteres;
- Validação de e-mail;
- Validação de senha com, no mínimo, seis caracteres;
- Confirmação de senha igual à senha informada;
- Validação da data de nascimento no formato `YYYY-MM-DD`;
- Restrição de idade mínima de 18 anos;
- Aceite obrigatório dos termos e condições;
- Mensagens de erro exibidas junto aos campos inválidos;
- Estado de submissão com alteração do texto do botão para `Cadastrando...`;
- Componentes reutilizáveis de entrada e botão;
- Página de login implementada como complemento, ainda não conectada ao fluxo principal do `App`.

## Tecnologias utilizadas

- [React](https://react.dev/) 19;
- [TypeScript](https://www.typescriptlang.org/);
- [Vite](https://vite.dev/);
- [React Hook Form](https://react-hook-form.com/);
- [Zod](https://zod.dev/);
- [@hookform/resolvers](https://github.com/react-hook-form/resolvers);
- [styled-components](https://styled-components.com/);
- [Axios](https://axios-http.com/);
- ESLint.

## Pré-requisitos

- Node.js instalado;
- npm disponível no terminal.

## Como executar

No terminal, acesse a pasta da atividade e instale as dependências:

```bash
cd trilha-react-desafio-4
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Depois, acesse a URL informada pelo Vite, normalmente:

```text
http://localhost:5173
```

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento do Vite |
| `npm run build` | Executa a verificação do TypeScript e gera a build de produção |
| `npm run lint` | Analisa o código com ESLint |
| `npm run preview` | Serve localmente a build de produção |

## Estrutura do projeto

```text
trilha-react-desafio-4/
├── public/                         # Arquivos públicos da aplicação
├── src/
│   ├── assets/                     # Imagens e demais recursos
│   ├── components/
│   │   ├── button/                 # Botão reutilizável
│   │   ├── header/                 # Componente de cabeçalho
│   │   └── input/                  # Campo de entrada reutilizável
│   ├── pages/
│   │   ├── login/                  # Tela de login complementar
│   │   └── register/               # Tela principal de cadastro
│   ├── services/
│   │   └── api.ts                  # Cliente Axios preparado para a API
│   ├── styles/
│   │   └── global.ts               # Estilos globais
│   ├── validations/
│   │   └── registerSchema.ts       # Schema e tipo do formulário
│   ├── App.tsx                     # Composição da aplicação
│   └── main.tsx                    # Ponto de entrada do React
├── index.html
├── package.json
└── README.md
```

## Validação do formulário

As regras estão centralizadas em `src/validations/registerSchema.ts`:

- `name`: texto com pelo menos três caracteres;
- `email`: endereço de e-mail válido;
- `password`: texto com pelo menos seis caracteres;
- `confirmPassword`: deve ser igual a `password`;
- `birthDate`: data no formato `YYYY-MM-DD` e idade mínima de 18 anos;
- `terms`: deve ser `true`.

O tipo `RegisterFormData` é inferido diretamente do schema do Zod, mantendo a validação e a tipagem alinhadas.

## Aprendizados

Esta atividade reforça:

- composição de componentes funcionais;
- tipagem de formulários com TypeScript;
- gerenciamento de campos e submissão com React Hook Form;
- validação declarativa e personalizada com Zod;
- integração entre bibliotecas por meio do `zodResolver`;
- reutilização de estilos e componentes com `styled-components`;
- organização de uma aplicação React por responsabilidades.

## Curso

Este projeto faz parte do **DIO XP Inc. Full Stack Developer**, formação da [Digital Innovation One](https://www.dio.me/) voltada ao desenvolvimento de aplicações full stack.
