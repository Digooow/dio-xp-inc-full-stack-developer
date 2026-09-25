# DIO.me - Interface da plataforma

Projeto desenvolvido como parte do **Bootcamp DIO XP Inc. Full Stack Developer**, na trilha de React. A atividade reproduz uma interface inspirada na plataforma DIO, com páginas de apresentação, autenticação, cadastro de usuários e feed de conteúdos.

## Sobre o projeto

O objetivo deste desafio é praticar a construção de uma aplicação React organizada em componentes reutilizáveis, com navegação entre páginas, formulários controlados e integração com uma API local simulada.

### Funcionalidades

- Página inicial com apresentação da plataforma;
- Navegação entre as páginas por meio do React Router;
- Tela de login com validação de campos;
- Cadastro de novos usuários;
- Validação de confirmação e tamanho mínimo da senha;
- Persistência dos usuários em uma API fake com JSON Server;
- Redirecionamento para o feed após o login;
- Feed com cards de publicações;
- Ranking dos cinco principais usuários;
- Layout estilizado com `styled-components`;
- Interface responsiva para diferentes tamanhos de tela.

## Tecnologias utilizadas

- [React](https://react.dev/) 18;
- [React Router](https://reactrouter.com/);
- [React Hook Form](https://react-hook-form.com/);
- [Axios](https://axios-http.com/);
- [Styled Components](https://styled-components.com/);
- [React Icons](https://react-icons.github.io/react-icons/);
- [JSON Server](https://github.com/typicode/json-server);
- Create React App.

## Como executar

### Pré-requisitos

- Node.js instalado;
- npm ou Yarn.

### Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/Digooow/dio-xp-inc-full-stack-developer.git
   ```

2. Acesse a pasta da atividade:

   ```bash
   cd dio-xp-inc-full-stack-developer/trilha-react-desafio-3
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie a aplicação e a API fake simultaneamente:

   ```bash
   npm run dev
   ```

5. Abra [http://localhost:3000](http://localhost:3000) no navegador.

O JSON Server ficará disponível em [http://localhost:3001](http://localhost:3001). A aplicação utiliza esse endereço para consultar e cadastrar usuários.

### Executando separadamente

Para iniciar apenas a aplicação React:

```bash
npm start
```

Para iniciar apenas a API fake:

```bash
npm run api
```

> O script `npm run api` utiliza a porta `8001`. Para executar a API na porta esperada pela aplicação (`3001`), prefira o comando `npm run dev` ou execute manualmente:
>
> ```bash
> npx json-server --watch db.json --port 3001
> ```

## Acesso para teste

O arquivo [`db.json`](./db.json) contém usuários de exemplo. É possível testar o login com:

```text
E-mail: pablo@email.com
Senha: 123456
```

Também é possível criar uma nova conta pela página de cadastro. Os dados serão adicionados à coleção `users` do JSON Server.

## Estrutura do projeto

```text
trilha-react-desafio-3/
├── public/                 # Arquivos públicos e ícones da aplicação
├── src/
│   ├── assets/             # Imagens e recursos visuais
│   ├── components/         # Componentes reutilizáveis
│   ├── pages/              # Páginas Home, Login, Cadastro e Feed
│   ├── services/           # Configuração do cliente HTTP
│   ├── styles/             # Estilos globais
│   ├── App.js              # Rotas principais da aplicação
│   └── index.js            # Ponto de entrada do React
├── db.json                 # Banco de dados local usado pelo JSON Server
└── package.json            # Dependências e scripts do projeto
```

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm start` | Inicia o servidor de desenvolvimento do React |
| `npm run dev` | Inicia o React e o JSON Server simultaneamente |
| `npm run api` | Inicia o JSON Server na porta `8001` |
| `npm test` | Executa os testes do projeto |
| `npm run build` | Gera a versão otimizada para produção |

## Aprendizados

Durante a atividade foram praticados conceitos importantes do desenvolvimento front-end com React:

- criação e composição de componentes;
- reutilização de propriedades e eventos;
- navegação declarativa com rotas;
- gerenciamento e validação de formulários;
- consumo de endpoints HTTP;
- organização de estilos com `styled-components`;
- separação entre páginas, componentes, serviços e estilos.

## Curso

Esta atividade faz parte do **DIO XP Inc. Full Stack Developer**, uma formação da [Digital Innovation One](https://www.dio.me/) voltada ao desenvolvimento de aplicações full stack.
