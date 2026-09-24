Este projeto implementa uma tela de cadastro de usuário com validações utilizando React com TypeScript, React Hook Form, Zod para validação de esquemas e styled-components para estilização. O objetivo é demonstrar boas práticas de desenvolvimento com formulários controlados e tipagem estática.

Funcionalidades

A tela de cadastro contém os seguintes campos:

Nome completo (obrigatório, mínimo 3 caracteres)

E-mail (obrigatório, formato válido)

Senha (obrigatório, mínimo 6 caracteres)

Confirmação de senha (deve ser idêntica à senha)

Data de nascimento (obrigatória, formato YYYY-MM-DD, idade mínima de 18 anos)

Aceite dos termos (checkbox obrigatório)

Todas as validações são executadas em tempo real e as mensagens de erro são exibidas abaixo de cada campo. O botão de envio é desabilitado durante o processamento da submissão.

Também há uma tela de login simples com e-mail e senha, apenas para complementar a navegação.

Tecnologias utilizadas

React 18

TypeScript

React Hook Form (gerenciamento de estado e submissão)

Zod (validação de esquemas)

@hookform/resolvers (integração do Zod com React Hook Form)

styled-components (estilização)

Estrutura de pastas

src/
components/
Button/
index.tsx
styles.ts
Input/
index.tsx
styles.ts
pages/
login/
index.tsx
styles.ts
register/
index.tsx
styles.ts
validations/
registerSchema.ts
services/
api.ts
styles/
global.ts
App.tsx
main.tsx

Como executar o projeto

Certifique-se de ter Node.js instalado (versão 16 ou superior).

Clone este repositório.

No terminal, navegue até a pasta do projeto e instale as dependências com o comando:
npm install

Para iniciar o servidor de desenvolvimento, execute:
npm run dev

Acesse a aplicação em http://localhost:5173 (ou porta indicada no terminal).

Validações implementadas

Nome: mínimo de 3 caracteres.

E-mail: formato válido (usando a validação nativa do Zod).

Senha: mínimo de 6 caracteres.

Confirmação de senha: deve ser igual à senha. Esta validação é feita no nível do objeto com refine do Zod.

Data de nascimento: formato YYYY-MM-DD e idade calculada para garantir que o usuário tenha pelo menos 18 anos.

Aceite dos termos: o checkbox deve estar marcado.

Todas as mensagens de erro são personalizadas e exibidas dinamicamente.

API e integração

O projeto possui um arquivo src/services/api.ts configurado com axios, pronto para ser integrado com um backend real. As funções de submissão já contêm chamadas para a API (comentadas) e tratamento de erro.

Considerações finais

Este projeto serve como base para sistemas de autenticação e cadastro, com foco em segurança e usabilidade. A arquitetura é escalável e permite a adição de novos campos e validações facilmente.

