BLOG PESSOAL - NEST.JS + SUPABASE + PRISMA

VISÃO GERAL
------------
Este projeto é uma API REST para um blog pessoal, desenvolvida com Nest.js,
utilizando Supabase como provedor de autenticação e banco de dados PostgreSQL,
e Prisma como ORM. O sistema permite registro e login de usuários,
criação, listagem, atualização e exclusão de posts, com relacionamento
entre usuários e posts.

TECNOLOGIAS UTILIZADAS
----------------------
- Node.js (v16+)
- Nest.js (framework progressivo para Node.js)
- TypeScript
- Supabase (Backend-as-a-Service)
  - Autenticação (Auth) com JWT
  - Banco de dados PostgreSQL
  - (Futuro) Storage para upload de imagens
- Prisma (ORM) com driver adapter @prisma/adapter-pg
- pg (driver PostgreSQL)
- class-validator / class-transformer (validação de dados)
- @nestjs/swagger / swagger-ui-express (documentação da API)
- @nestjs/config (variáveis de ambiente)

PRÉ-REQUISITOS
--------------
- Node.js 16+ instalado
- Conta no Supabase (https://supabase.com)
- Projeto criado no Supabase com as credenciais de acesso
- Conhecimento básico de APIs REST

CONFIGURAÇÃO DO PROJETO
-----------------------
1. Clone ou crie um novo projeto Nest.js:
   $ nest new blog-pessoal

2. Instale as dependências necessárias:
   npm install @nestjs/config @supabase/supabase-js @prisma/client @prisma/adapter-pg pg
   npm install class-validator class-transformer @nestjs/swagger swagger-ui-express
   npm install -D prisma

3. Inicialize o Prisma:
   npx prisma init

4. Configure o banco de dados no arquivo .env.local:
   DATABASE_URL="postgresql://postgres.seudb:[SENHA]@db.seudb.supabase.co:6543/postgres?pgbouncer=true&sslmode=no-verify"
   SUPABASE_URL=https://seudb.supabase.co
   SUPABASE_ANON_KEY=sua_chave_anon_publica

5. Defina os modelos no schema.prisma (User e Post) com as devidas
   relações e crie a migração inicial:
   npx prisma migrate dev --name init

6. No Supabase, crie as tabelas manualmente com SQL, ative o trigger
   para sincronizar usuários de auth.users para public.users, e
   configure as políticas de RLS conforme necessário.

ESTRUTURA DE PASTAS PRINCIPAL
-----------------------------
src/
  auth/                # Módulo de autenticação
    dto/               # DTOs de registro e login
    guards/            # SupabaseAuthGuard
    auth.module.ts
    auth.controller.ts
    auth.service.ts
  users/               # Módulo de usuários (busca na tabela pública)
    users.module.ts
    users.service.ts
  posts/               # Módulo de posts (CRUD)
    dto/               # CreatePostDto, UpdatePostDto
    posts.module.ts
    posts.controller.ts
    posts.service.ts
  prisma/              # PrismaService com adapter
    prisma.module.ts
    prisma.service.ts
  common/              # Decorators e guardas globais
    decorators/
      public.decorator.ts
      current-user.decorator.ts
  app.module.ts
  main.ts              # Configuração Swagger e IPv4first

VARIÁVEIS DE AMBIENTE (.env.local)
----------------------------------
DATABASE_URL=postgresql://postgres.seudb:senha@aws-0-ca-central-1.pooler.supabase.com:6543/postgres?pgbouncer=true&sslmode=no-verify
SUPABASE_URL=https://seudb.supabase.co
SUPABASE_ANON_KEY=sb_publishable_...
JWT_SECRET=chave_qualquer (usado internamente)
PORT=3000

END-POINTS DA API
-----------------
Método  Rota                   Descrição                          Token?
POST    /auth/register         Registrar novo usuário            Não
POST    /auth/login            Login e obtenção de access_token  Não
POST    /posts                 Criar um novo post                Sim
GET     /posts                 Listar todos os posts (público)   Não
GET     /posts/:id             Obter um post específico          Não
PUT     /posts/:id             Atualizar um post                 Sim (ser autor)
DELETE  /posts/:id             Excluir um post                   Sim (ser autor)

Como testar a API:
- Acesse a documentação Swagger em http://localhost:3000/api/docs
- Use ferramentas como curl, Postman ou Insomnia
- Após login, use o access_token no header: Authorization: Bearer <token>

PRINCIPAIS DESAFIOS E SOLUÇÕES
------------------------------
1. Erro "password authentication failed" - senha do banco incorreta.
   Solução: Resetar a senha no painel do Supabase e atualizar o .env.

2. Erro de timeout IPv6 (ETIMEDOUT) - rede priorizando IPv6.
   Solução: Adicionar setDefaultResultOrder('ipv4first') no main.ts.

3. Erro SSL "self-signed certificate in certificate chain" - verificação
   rigorosa do certificado.
   Solução: Usar sslmode=no-verify na DATABASE_URL ou configurar
   rejectUnauthorized: false no PrismaService.

4. Erro "PrismaClientConstructorValidationError" - Prisma 7 exige driver
   adapter.
   Solução: Instalar @prisma/adapter-pg e instanciar PrismaPg no
   construtor do PrismaService.

5. Erro "Foreign key constraint failed" ao criar posts - usuário não
   existe na tabela public.users.
   Solução: Criar trigger no Supabase para sincronizar auth.users com
   public.users e/ou implementar fallback no código para inserir
   o usuário automaticamente.

6. Erro "Argument authorId: Expected String, provided Object" - passando
   req.user inteiro em vez de req.user.id.
   Solução: Modificar o controller para enviar apenas o ID.

7. Erro de coluna updated_at null na inserção manual - tabela exige
   NOT NULL sem default.
   Solução: Fornecer valor com NOW() na inserção ou alterar a coluna
   com DEFAULT NOW().

MELHORIAS FUTURAS (SUGESTÕES)
-----------------------------
- Upload de imagens: utilizar o Storage do Supabase para capas dos posts.
- Paginação: adicionar parâmetros skip e take no endpoint de listagem.
- Comentários: criar nova tabela comments com relação a posts.
- Categorias/Tags: relacionar posts com categorias (muitos-para-muitos).
- Perfil de usuário: permitir editar nome, bio, foto de perfil.
- Validações mais rigorosas: título mínimo, conteúdo obrigatório, etc.
- Testes automatizados: unitários e e2e com Jest.
- Migrations versionadas: usar prisma migrate dev para gerenciar o schema.
- Logging estruturado: integrar com winston ou pino.
- Dockerização: facilitar deploy em qualquer ambiente.
- Frontend: construir uma interface React/Next.js para consumir a API.
- Deploy: hospedar em Render, Vercel ou Railway.

COMO EXECUTAR O PROJETO
-----------------------
- Instale as dependências: npm install
- Configure o .env.local com as credenciais do Supabase
- Rode as migrações (se necessário): npx prisma migrate dev
- Inicie o servidor: npm run start:dev
- Acesse a documentação: http://localhost:3000/api/docs

COMANDOS ÚTEIS
--------------
npx prisma generate         # Gerar o Prisma Client
npx prisma studio           # Interface visual para o banco
npx prisma db pull          # Introspectar banco existente
npx prisma migrate dev      # Criar nova migração
npm run start:dev           # Modo desenvolvimento com hot-reload

CRÉDITOS
--------
Projeto desenvolvido como desafio de criação de blog pessoal,
utilizando Nest.js, Supabase e Prisma.

Data da conclusão: 16/08/2026