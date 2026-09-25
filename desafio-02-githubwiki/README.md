# GitHub Wiki

Aplicação web desenvolvida como parte do **Bootcamp DIO XP Inc. - Full Stack Developer**. O projeto apresenta uma interface para consultar os repositórios públicos de um usuário do GitHub e visualizar informações importantes de cada repositório.

## Sobre o desafio

Este desafio tem como objetivo praticar a construção de uma aplicação React consumindo uma API externa. A aplicação recebe o nome de um usuário, consulta a API pública do GitHub e exibe os repositórios encontrados em cards informativos.

Além de reforçar os fundamentos do React, a atividade trabalha conceitos importantes do desenvolvimento front-end, como:

- criação e composição de componentes;
- gerenciamento de estado com Hooks;
- consumo de APIs REST;
- tratamento de carregamento e erros;
- estilização reutilizável com `styled-components`;
- organização de um projeto utilizando Vite.

## Funcionalidades

- Busca de repositórios públicos pelo nome do usuário do GitHub.
- Execução da busca pelo botão ou pela tecla `Enter`.
- Estado de carregamento durante a requisição.
- Mensagem quando nenhum resultado foi encontrado.
- Mensagem de erro para usuário inexistente ou falha na requisição.
- Exibição, para cada repositório:
  - nome e link para a página no GitHub;
  - descrição, quando disponível;
  - linguagem principal;
  - quantidade de estrelas;
  - quantidade de forks;
  - licença;
  - data da última atualização.
- Interface com tema escuro inspirado no GitHub e layout responsivo.

## Tecnologias utilizadas

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [Axios](https://axios-http.com/)
- [styled-components](https://styled-components.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Oxlint](https://oxc.rs/docs/guide/usage/linter)
- API REST do [GitHub](https://docs.github.com/en/rest)

## Como executar

### Pré-requisitos

- Node.js 18 ou superior;
- npm.

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/Digooow/dio-xp-inc-full-stack-developer.git
   ```

2. Acesse a pasta da atividade:

   ```bash
   cd dio-xp-inc-full-stack-developer/desafio-02-githubwiki
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Abra no navegador o endereço exibido pelo Vite, normalmente:

   ```text
   http://localhost:5173
   ```

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento com HMR. |
| `npm run build` | Gera a versão otimizada para produção. |
| `npm run preview` | Serve localmente a versão de produção gerada. |
| `npm run lint` | Executa o Oxlint no projeto. |

## API utilizada

A aplicação utiliza o endpoint público do GitHub:

```text
GET https://api.github.com/users/{username}/repos
```

Não é necessário configurar uma chave de API para executar a atividade. Como a consulta depende da API pública do GitHub, podem existir limites de requisições impostos pelo serviço.

## Estrutura do projeto

```text
desafio-02-githubwiki/
├── public/                  # Arquivos públicos e favicon
├── src/
│   ├── assets/              # Imagens e recursos visuais
│   ├── components/
│   │   ├── Button/          # Botão reutilizável
│   │   ├── CardRepo/        # Card com os dados do repositório
│   │   └── Input/           # Campo de busca reutilizável
│   ├── pages/
│   │   └── Home.jsx         # Tela principal e fluxo de busca
│   ├── services/
│   │   └── api.js           # Instância do Axios para a API do GitHub
│   ├── styles/              # Tema e estilos globais
│   ├── App.jsx              # Componente raiz
│   └── main.jsx             # Ponto de entrada da aplicação
├── index.html
├── package.json
└── README.md
```

## Fluxo da aplicação

1. O usuário informa um nome de usuário do GitHub.
2. A aplicação valida se o campo não está vazio.
3. Uma requisição é enviada ao endpoint de repositórios do usuário.
4. Enquanto aguarda a resposta, o botão é desabilitado e exibe o estado de busca.
5. Os dados recebidos são armazenados no estado do componente.
6. Cada repositório é renderizado por meio do componente `CardRepo`.
7. Em caso de falha, a lista é limpa e uma mensagem de erro é apresentada.

## Aprendizados

Com esta atividade, é possível praticar:

- uso de `useState` para controlar formulário, resultados, carregamento e erros;
- eventos de teclado e clique em componentes React;
- requisições assíncronas com Axios;
- renderização de listas com `map`;
- criação de componentes reutilizáveis;
- estilização baseada em propriedades e variáveis CSS;
- integração de uma aplicação front-end com uma API pública.

## Próximas melhorias

Algumas evoluções possíveis para a aplicação são:

- adicionar paginação ou carregamento incremental;
- permitir ordenar e filtrar os repositórios;
- exibir o perfil do usuário consultado;
- mostrar uma tela dedicada com detalhes do repositório;
- adicionar testes automatizados;
- melhorar a acessibilidade e incluir estados de foco mais completos.

## Contexto

Projeto desenvolvido para fins educacionais durante o **Bootcamp DIO XP Inc. - Full Stack Developer**.
