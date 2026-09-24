# API de Gerenciamento de Veículos

Projeto desenvolvido com ASP.NET Core Minimal API para gerenciamento de veículos e administradores, com autenticação e autorização via JWT.

## Objetivo

Fornecer uma API REST para:

- cadastro, consulta, atualização e exclusão de veículos;
- autenticação de administradores;
- controle de acesso por perfil (`Adm` e `Editor`);
- documentação interativa com Swagger;
- persistência simples com SQLite;
- estrutura organizada por módulos e endpoints agrupados por contexto.

## Tecnologias utilizadas

- .NET 10
- ASP.NET Core Minimal API
- Entity Framework Core
- SQLite
- JWT Bearer Authentication
- BCrypt para hash de senha
- Swashbuckle / Swagger
- xUnit para testes

## Estrutura do projeto

- `Models/Administrador.cs`: modelo do administrador
- `Models/Veiculo.cs`: modelo do veículo
- `Data/AppDbContext.cs`: contexto do EF Core com seed inicial
- `Services/TokenService.cs`: geração do token JWT
- `Filters/ValidationFilter.cs`: validação de payloads por endpoint
- `Extensions/EndpointExtensions.cs`: configuração de Swagger, autenticação e endpoints
- `Program.cs`: bootstrap da aplicação
- `minimal-api.Tests/`: testes automatizados

## Funcionalidades implementadas

### Autenticação

- Login de administrador via `/admin/login`
- Emissão de JWT com claim de perfil
- Proteção de endpoints por políticas de autorização

### Gestão de administradores

- `POST /admin/login`
- `GET /admin` (somente `Adm`)
- `POST /admin` (somente `Adm`)

### Gestão de veículos

- `GET /veiculos` (autorizado para `Editor` e `Adm`)
- `GET /veiculos/{id}`
- `POST /veiculos` (somente `Adm`)
- `PUT /veiculos/{id}` (somente `Adm`)
- `DELETE /veiculos/{id}` (somente `Adm`)

## Usuário padrão

O sistema cria um administrador padrão ao iniciar a aplicação:

- Email: `admin@admin.com`
- Senha: `admin123`

## Configuração

A aplicação usa SQLite por padrão com a connection string em `appsettings.json`:

```json
"ConnectionStrings": {
  "DefaultConnection": "Data Source=minimal-api.db"
},
"Jwt": {
  "Key": "super-secret-key-for-jwt-token-1234567890",
  "Issuer": "minimal-api",
  "Audience": "minimal-api-users"
}
```

## Como executar

No terminal, dentro da pasta do projeto:

```bash
dotnet restore
dotnet build
dotnet run
```

A API ficará disponível em:

```bash
http://localhost:5000
```

Ou, no ambiente atual configurado para essa solução, em:

```bash
http://127.0.0.1:5088
```

## Swagger

Após iniciar a aplicação, acesse:

```bash
https://localhost:5001/swagger
```

ou localmente conforme a porta configurada pelo ambiente de execução.

## Testes

Para rodar os testes:

```bash
dotnet test
```

## Observações

Este projeto foi estruturado como exemplo realista de Minimal API com autenticação, autorização, persistência e documentação, e já foi validado em execução local com login e geração de token JWT funcionando corretamente.
