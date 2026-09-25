# Test-Driven Development (TDD) - Desafio

## Sobre a atividade

Este projeto faz parte do curso **DIO XP Inc Full Stack Developer**, na etapa dedicada a **Test-Driven Development (TDD)**.

O objetivo da atividade é praticar a criação de testes automatizados para validar comportamentos antes de evoluir a implementação. Para isso, o projeto reúne exemplos simples de testes unitários e de testes de componentes React:

- uma função de soma com cenários para números positivos e negativos;
- um componente de contador que inicia em zero e é incrementado por meio de um botão.

## Tecnologias utilizadas

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [Vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Testing Library User Event](https://testing-library.com/docs/user-event/intro/)
- [jest-dom](https://github.com/testing-library/jest-dom)
- [JSDOM](https://github.com/jsdom/jsdom)

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado;
- npm, instalado junto com o Node.js.

## Como executar

1. Clone o repositório e acesse a pasta da atividade:

   ```bash
   git clone https://github.com/Digooow/dio-xp-inc-full-stack-developer.git
   cd dio-xp-inc-full-stack-developer/test-driven-development-desafio
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Execute os testes:

   ```bash
   npx vitest run
   ```

Para executar o Vitest em modo de observação, acompanhando alterações nos arquivos:

```bash
npx vitest
```

## Estrutura principal

```text
.
├── src
│   ├── components
│   │   ├── Counter.jsx
│   │   └── Counter.test.jsx
│   ├── test
│   │   └── setup.js
│   └── utils
│       ├── math.js
│       └── math.test.js
├── vite.config.js
└── package.json
```

## Cenários testados

### Função `somar`

Os testes verificam:

- a soma de dois números positivos;
- a soma de números negativos.

### Componente `Counter`

Os testes verificam:

- a renderização do valor inicial `0`;
- o incremento do contador para `1` após o clique no botão **Incrementar**.

## Aprendizados

Com esta atividade, são praticados:

- escrita de testes unitários com Vitest;
- testes de interação e renderização com React Testing Library;
- simulação de eventos de usuário;
- configuração de ambiente `jsdom` para testes de componentes;
- validação contínua do comportamento esperado durante o desenvolvimento.

## Curso

**DIO - XP Inc Full Stack Developer**

Este repositório contém o exercício desenvolvido durante a formação e tem finalidade educacional.