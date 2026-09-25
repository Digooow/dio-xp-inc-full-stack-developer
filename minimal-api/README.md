# Desafio: Construindo uma Minimal API de Gerenciamento de Veículos

Atividade desenvolvida como parte do curso **DIO XP Inc. - Full Stack Developer**.

O projeto aplica os conceitos de construção de APIs REST com ASP.NET Core Minimal API,
persistência de dados, autenticação e autorização. A solução simula uma API para
gerenciamento de veículos e administradores de uma empresa.

## Objetivos de aprendizagem

- Criar endpoints REST usando o modelo de Minimal API do ASP.NET Core.
- Organizar a aplicação por responsabilidades, separando modelos, dados, serviços,
  filtros e configuração de endpoints.
- Persistir dados com Entity Framework Core e SQLite.
- Implementar autenticação baseada em JWT.
- Controlar o acesso por perfil de usuário (`Adm` e `Editor`).
- Validar dados de entrada e retornar códigos HTTP adequados.
- Documentar e explorar a API por meio do Swagger.
- Criar testes unitários e testes de integração para os principais fluxos.

## Funcionalidades

### Autenticação e autorização

- Login de administrador com e-mail e senha.
- Senhas armazenadas com hash BCrypt.
- Emissão de token JWT contendo o perfil do administrador.
- Política `AdmPolicy`: permite acesso apenas ao perfil `Adm`.
- Política `EditorOrAdmPolicy`: permite acesso aos perfis `Editor` e `Adm`.

### Administradores

- Listagem de administradores, restrita ao perfil `Adm`.
- Cadastro de novos administradores, restrito ao perfil `Adm`.
- Validação de e-mail, nome, senha e perfil.
- Garantia de e-mail único.

### Veículos

- Listagem de veículos para usuários autenticados com perfil `Editor` ou `Adm`.
- Consulta de um veículo por identificador.
- Cadastro, alteração e exclusão de veículos, restritos ao perfil `Adm`.
- Garantia de placa única.
- Validação dos campos obrigatórios e do intervalo permitido para o ano.

## Tecnologias utilizadas

- **.NET 10**
- **ASP.NET Core Minimal API**
- **Entity Framework Core 10**
- **SQLite**
- **JWT Bearer Authentication**
- **BCrypt.Net-Next**
- **Swagger / Swashbuckle**
- **xUnit**
- **Microsoft.AspNetCore.Mvc.Testing**

## Estrutura do projeto

```text
minimal-api/
├── Data/
│   └── AppDbContext.cs          # Contexto EF Core, índices e usuário inicial
├── Extensions/
│   └── EndpointExtensions.cs    # Configuração de JWT, políticas e endpoints
├── Filters/
│   └── ValidationFilter.cs      # Validação dos modelos recebidos pela API
├── Models/
│   ├── Administrador.cs         # Entidade e regras de validação do administrador
│   └── Veiculo.cs               # Entidade e regras de validação do veículo
├── Services/
│   └── TokenService.cs          # Geração de tokens JWT
├── minimal-api.Tests/
│   ├── IntegrationTests.cs      # Testes de saúde, login e autorização
│   ├── TokenServiceTests.cs     # Teste unitário do token e da claim de perfil
│   └── VehicleCrudIntegrationTests.cs
│                                  # Teste integrado do fluxo CRUD de veículos
├── Program.cs                   # Inicialização da aplicação
├── appsettings.json             # Connection string e configurações JWT
└── minimal-api.csproj
```

## Modelo de dados

### Administrador

| Campo | Tipo | Regra |
|---|---|---|
| `Id` | `int` | Identificador gerado pelo banco |
| `Nome` | `string` | Obrigatório, até 100 caracteres |
| `Email` | `string` | Obrigatório, formato de e-mail e único |
| `SenhaHash` | `string` | Obrigatório; a senha é convertida para hash BCrypt |
| `Perfil` | `string` | Aceita `Adm` ou `Editor` |

### Veículo

| Campo | Tipo | Regra |
|---|---|---|
| `Id` | `int` | Identificador gerado pelo banco |
| `Marca` | `string` | Obrigatória, até 100 caracteres |
| `Modelo` | `string` | Obrigatório, até 100 caracteres |
| `Placa` | `string` | Obrigatória, até 20 caracteres e única |
| `Ano` | `int` | Deve estar entre 1900 e 2100 |
| `Cor` | `string` | Opcional, até 50 caracteres |
| `Ativo` | `bool` | Ativo por padrão |

## Endpoints

### Acesso público

| Método | Rota | Descrição | Respostas principais |
|---|---|---|---|
| `GET` | `/` | Verifica se a API está em execução | `200 OK` |
| `POST` | `/admin/login` | Autentica um administrador e gera JWT | `200 OK`, `401 Unauthorized`, `400 Bad Request` |

Exemplo de login:

```json
{
  "email": "admin@admin.com",
  "senha": "admin123"
}
```

Resposta:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

### Administradores

Todas as rotas desta seção exigem um token JWT e o perfil `Adm`.

| Método | Rota | Descrição | Respostas principais |
|---|---|---|---|
| `GET` | `/admin` | Lista os administradores | `200`, `401`, `403` |
| `POST` | `/admin` | Cadastra um administrador | `201`, `400`, `401`, `403`, `409` |

### Veículos

| Método | Rota | Perfil | Descrição |
|---|---|---|---|
| `GET` | `/veiculos` | `Editor` ou `Adm` | Lista todos os veículos |
| `GET` | `/veiculos/{id}` | `Editor` ou `Adm` | Consulta um veículo |
| `POST` | `/veiculos` | `Adm` | Cadastra um veículo |
| `PUT` | `/veiculos/{id}` | `Adm` | Atualiza um veículo |
| `DELETE` | `/veiculos/{id}` | `Adm` | Remove um veículo |

As operações de cadastro e atualização retornam `409 Conflict` quando a placa já
está cadastrada. Consultas ou alterações de identificadores inexistentes retornam
`404 Not Found`.

Exemplo de payload para cadastro:

```json
{
  "marca": "Toyota",
  "modelo": "Corolla",
  "placa": "ABC-1234",
  "ano": 2024,
  "cor": "Prata",
  "ativo": true
}
```

Para as rotas protegidas, envie o token obtido no login no cabeçalho:

```text
Authorization: Bearer <token>
```

## Usuário inicial

Na primeira execução, o banco é criado automaticamente e recebe um administrador
para testes:

```text
E-mail: admin@admin.com
Senha: admin123
Perfil: Adm
```

Esse usuário é criado pelo seed do `AppDbContext`. Em um ambiente real, as
credenciais e a chave JWT devem ser substituídas e mantidas fora do código-fonte.

## Configuração

A aplicação utiliza SQLite e cria o arquivo `minimal-api.db` na pasta do projeto.
As configurações de desenvolvimento ficam em `appsettings.json`:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Data Source=minimal-api.db"
  },
  "Jwt": {
    "Key": "super-secret-key-for-jwt-token-1234567890",
    "Issuer": "minimal-api",
    "Audience": "minimal-api-users"
  }
}
```

Para produção, use variáveis de ambiente ou um mecanismo seguro de gerenciamento
de segredos. A chave apresentada acima é somente para o exercício local.

## Como executar

Pré-requisito: SDK do .NET 10 instalado.

No terminal, a partir da pasta `minimal-api`:

```bash
dotnet restore
dotnet build
dotnet run
```

A porta pode variar conforme o perfil de execução. O endereço exibido no terminal
é a fonte oficial para acessar a aplicação. Em uma configuração local comum:

```text
http://localhost:5088
```

## Swagger

Em ambiente de desenvolvimento, o Swagger fica disponível em:

```text
http://localhost:5088/swagger
```

Também é possível usar a interface para consultar os contratos dos endpoints e
informar o token JWT no botão **Authorize**, usando o formato:

```text
Bearer <token>
```

## Testes automatizados

Para executar todos os testes:

```bash
dotnet test
```

Os testes cobrem:

- disponibilidade do endpoint raiz;
- login com credenciais válidas;
- bloqueio de acesso sem token;
- geração de token com claim de perfil;
- fluxo completo de criação, consulta, atualização e exclusão de veículo.

## Fluxo recomendado de demonstração

1. Inicie a aplicação.
2. Acesse o Swagger.
3. Faça login em `POST /admin/login` com o usuário inicial.
4. Copie o token retornado.
5. Autorize as requisições com `Bearer <token>`.
6. Cadastre um veículo em `POST /veiculos`.
7. Consulte, altere e remova o veículo usando as demais rotas.
8. Execute `dotnet test` para validar o comportamento automatizado.

## Resultado da atividade

Ao final, a atividade entrega uma API funcional, documentada e testada, reunindo
os fundamentos praticados no curso DIO XP Inc.: desenvolvimento backend com
.NET, APIs REST, persistência relacional, autenticação, autorização, validação e
testes automatizados.
