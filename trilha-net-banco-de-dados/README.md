# Banco de Dados com SQL Server

Atividade desenvolvida como parte do curso **DIO - XP Inc. Full Stack Developer**, na trilha de .NET, durante o módulo de **Banco de Dados**.

O projeto apresenta scripts SQL para criação e carga inicial de tabelas de clientes e produtos. A atividade exercita os fundamentos de definição de estruturas relacionais, tipos de dados, chave primária, identidade e inserção de registros no SQL Server.

## Objetivos

- Criar tabelas utilizando comandos `CREATE TABLE`;
- Definir uma chave primária com incremento automático;
- Escolher tipos de dados adequados para cada atributo;
- Permitir ou restringir valores nulos conforme a necessidade do campo;
- Popular as tabelas com dados utilizando `INSERT`;
- Praticar a organização de scripts SQL para execução no SQL Server.

## Tecnologias utilizadas

- Microsoft SQL Server;
- Transact-SQL (T-SQL);
- SQL Server Management Studio (SSMS) ou Azure Data Studio.

## Estrutura do projeto

```text
trilha-net-banco-de-dados/
├── Scripts/
│   ├── 1 - Tabela Clientes.sql
│   └── 2 - Tabela Produtos.sql
└── README.md
```

## Modelo de dados

### Tabela `Clientes`

Armazena informações cadastrais dos clientes.

| Campo | Tipo | Descrição |
|---|---|---|
| `Id` | `int` | Identificador do cliente, com incremento automático |
| `Nome` | `varchar(255)` | Primeiro nome do cliente |
| `Sobrenome` | `varchar(255)` | Sobrenome do cliente |
| `Email` | `varchar(255)` | Endereço de e-mail |
| `AceitaComunicados` | `bit` | Indica se o cliente aceita receber comunicados |
| `DataCadastro` | `datetime2(7)` | Data e hora do cadastro |

### Tabela `Produtos`

Armazena informações dos produtos comercializados.

| Campo | Tipo | Descrição |
|---|---|---|
| `Id` | `int` | Identificador do produto, com incremento automático |
| `Nome` | `varchar(255)` | Nome do produto |
| `Cor` | `varchar(50)` | Cor do produto |
| `Preco` | `decimal(13, 2)` | Preço do produto com duas casas decimais |
| `Tamanho` | `varchar(5)` | Tamanho do produto |
| `Genero` | `char(1)` | Classificação de gênero do produto |

O campo `Id` da tabela `Produtos` é definido como chave primária e os campos `Nome` e `Preco` são obrigatórios. Os demais atributos podem receber valor nulo conforme a definição do script.

## Como executar

### Pré-requisitos

- SQL Server instalado ou uma instância acessível;
- SQL Server Management Studio, Azure Data Studio ou outra ferramenta compatível com T-SQL;
- Permissão para criar tabelas no banco de dados selecionado.

### Passo a passo

1. Clone o repositório:

   ```bash
   git clone https://github.com/Digooow/dio-xp-inc-full-stack-developer.git
   ```

2. Abra o SQL Server Management Studio ou o Azure Data Studio e conecte-se à instância do SQL Server.

3. Selecione o banco de dados no qual as tabelas serão criadas. Caso necessário, crie um banco de estudos:

   ```sql
   CREATE DATABASE DioBancoDados;
   GO

   USE DioBancoDados;
   GO
   ```

4. Execute o script [1 - Tabela Clientes.sql](Scripts/1%20-%20Tabela%20Clientes.sql).

5. Execute o script [2 - Tabela Produtos.sql](Scripts/2%20-%20Tabela%20Produtos.sql).

Os scripts criam as tabelas e inserem os registros de exemplo. O script de produtos começa removendo a tabela `Produtos`, caso ela já exista, para permitir uma nova carga durante os estudos. Execute-o somente no banco de desenvolvimento ou em um ambiente no qual essa recriação seja esperada.

## Consultando os dados

Depois de executar os scripts, algumas consultas para validar a carga são:

```sql
SELECT *
FROM Clientes;

SELECT *
FROM Produtos;

SELECT Nome, Preco
FROM Produtos
ORDER BY Preco DESC;
```

## Aprendizados

Esta atividade reforça a criação de tabelas relacionais, a definição de campos obrigatórios e opcionais, o uso de `IDENTITY` para geração de identificadores, a aplicação de tipos numéricos e de data e hora e a inserção de dados em massa com comandos SQL.

## Curso

Este projeto faz parte do curso **DIO - XP Inc. Full Stack Developer**, oferecido pela [Digital Innovation One](https://www.dio.me/).