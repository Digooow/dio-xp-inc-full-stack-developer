# API Calculadora

Atividade prática do curso **DIO XP Inc. - Full Stack Developer**, criada para exercitar a construção de uma API HTTP com Node.js, JavaScript e Express.

## Situação atual

O projeto está em uma primeira versão funcional e serve como base para a evolução da atividade.

### O que já foi implementado

- Inicialização de um servidor Express na porta `3000`;
- Leitura de requisições JSON com `express.json()`;
- Endpoint `GET` para consultar as operações previstas;
- Endpoint `POST` para realizar uma soma;
- Script de desenvolvimento com recarregamento automático usando `node --watch`.

### O que ainda pode ser desenvolvido

- Implementar as operações de subtração, divisão e multiplicação;
- Padronizar os nomes e a estrutura das rotas;
- Validar se os valores enviados são números;
- Tratar divisão por zero e outros dados inválidos;
- Definir códigos HTTP e mensagens de erro consistentes;
- Criar testes automatizados;
- Adicionar documentação interativa, como Swagger/OpenAPI;
- Separar rotas, regras de negócio e validações em módulos próprios.

> **Resumo:** a atividade já demonstra o funcionamento básico de uma API REST, mas ainda não representa uma calculadora completa. O próximo passo natural é concluir as operações e adicionar validações e testes.

## Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- JavaScript com módulos ES (`"type": "module"`)
- npm

## Estrutura atual

```text
APICalculadora/
├── index.js          # Configuração do servidor e endpoints
├── package.json      # Scripts e dependências do projeto
├── package-lock.json # Versões exatas das dependências
└── .vscode/          # Configurações locais do editor
```

## Pré-requisitos

- Node.js instalado;
- npm disponível no terminal.

## Como executar

No terminal, dentro desta pasta:

```bash
npm install
npm run dev
```

O servidor ficará disponível em:

```text
http://localhost:3000
```

Para interromper a aplicação, pressione `Ctrl+C`.

## Endpoints disponíveis

### Consultar operações

```http
GET /api/calculadora
```

Resposta atual:

```json
{
  "operacoes": [
    "Soma",
    "Subtração",
    "Divisão",
    "Multiplicação"
  ]
}
```

### Realizar uma soma

```http
POST /api/soma
Content-Type: application/json
```

Corpo da requisição:

```json
{
  "num1": 10,
  "num2": 5
}
```

Resposta esperada:

```json
{
  "soma": 15
}
```

Exemplo com `curl`:

```bash
curl -X POST http://localhost:3000/api/soma \
  -H "Content-Type: application/json" \
  -d "{\"num1\":10,\"num2\":5}"
```

## Scripts npm

| Comando | Descrição |
| --- | --- |
| `npm install` | Instala as dependências do projeto |
| `npm run dev` | Inicia o servidor em modo de desenvolvimento |
| `npm test` | Ainda não configurado; não existem testes automatizados no projeto |

## Objetivo de aprendizagem

Esta atividade faz parte da prática de desenvolvimento backend do bootcamp e ajuda a consolidar:

- criação de um servidor HTTP;
- definição de rotas;
- uso dos métodos HTTP `GET` e `POST`;
- recebimento de dados em formato JSON;
- organização inicial de uma API REST;
- execução de um projeto Node.js com npm.

## Próximas melhorias sugeridas

1. Corrigir e centralizar a conversão dos valores recebidos no corpo da requisição.
2. Criar uma rota para cada operação ou uma rota única com o operador informado.
3. Retornar `400 Bad Request` quando os dados forem inválidos.
4. Retornar `422 Unprocessable Entity` para regras como divisão por zero, se esse padrão for adotado.
5. Adicionar testes para casos de sucesso e erro.
6. Criar uma interface frontend para consumir a API e completar a proposta full stack.

## Licença

Projeto educacional desenvolvido para acompanhamento do curso DIO XP Inc. - Full Stack Developer.
