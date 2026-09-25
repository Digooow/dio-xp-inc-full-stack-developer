# Calculadora em React

Atividade prática do curso **DIO XP Inc. - Full Stack Developer**, criada para exercitar os fundamentos do React na construção de uma calculadora web.

## Sobre a atividade

O projeto implementa uma calculadora com uma interface simples e operações matemáticas básicas. A aplicação utiliza componentes funcionais, gerenciamento de estado e eventos para receber os valores e atualizar o resultado na tela.

### Funcionalidades

- Adição, subtração, multiplicação e divisão;
- Entrada de números por botões;
- Operações com números decimais;
- Operações encadeadas;
- Limpeza da operação pelo botão `C`;
- Tratamento de divisão por zero.

## Tecnologias utilizadas

- [React](https://react.dev/) 18;
- JavaScript;
- [styled-components](https://styled-components.com/);
- [Create React App](https://create-react-app.dev/);
- npm.

## Estrutura do projeto

```text
trilha-react-desafio01-calculadora/
├── public/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── index.js
│   │   │   └── styles.js
│   │   └── Input/
│   │       ├── index.js
│   │       └── styles.js
│   ├── App.js
│   ├── global.js
│   ├── index.js
│   └── styles.js
├── package.json
└── README.md
```

## Pré-requisitos

- Node.js instalado;
- npm disponível no terminal.

## Como executar

No terminal, dentro desta pasta:

```bash
npm install
npm start
```

A aplicação ficará disponível em:

```text
http://localhost:3000
```

## Scripts npm

| Comando | Descrição |
| --- | --- |
| `npm install` | Instala as dependências do projeto |
| `npm start` | Inicia a aplicação em modo de desenvolvimento |
| `npm test` | Executa os testes no modo interativo |
| `npm run build` | Gera a versão otimizada para produção |

## Objetivo de aprendizagem

Esta atividade faz parte da trilha de React do bootcamp e ajuda a consolidar:

- criação e composição de componentes;
- uso do hook `useState`;
- manipulação de eventos em componentes React;
- atualização da interface a partir do estado;
- estilização de componentes com styled-components;
- implementação de regras de negócio no front-end.

## Licença

Projeto educacional desenvolvido para acompanhamento do curso **DIO XP Inc. - Full Stack Developer**.
