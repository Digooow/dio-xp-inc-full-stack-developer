# Sistema de Estacionamento

Projeto desenvolvido como parte do **DIO XP Inc. Full Stack Developer**, na trilha

de fundamentos do .NET da [DIO](https://www.dio.me/).

## Sobre o desafio

O desafio propõe a criação de um sistema de terminal para gerenciar os veículos
estacionados. A aplicação foi construída com foco nos fundamentos de C#, como:

- criação e utilização de classes;
- encapsulamento de atributos;
- listas e operações de coleção;
- métodos e estruturas de repetição;
- condicionais e `switch`;
- leitura e conversão de dados informados pelo usuário;
- formatação de valores monetários.

## Funcionalidades

Ao iniciar, o sistema solicita:

1. o preço inicial da permanência;
2. o preço cobrado por hora.

Em seguida, é exibido um menu interativo com as opções:

| Opção | Ação                                                                     |
| ------- | -------------------------------------------------------------------------- |
| `1`   | Cadastrar um veículo pela placa                                           |
| `2`   | Remover um veículo, informando as horas estacionadas e calculando o valor |
| `3`   | Listar os veículos estacionados                                           |
| `4`   | Encerrar o programa                                                        |

As placas são armazenadas em letras maiúsculas. Ao remover um veículo, o valor
total é calculado com a seguinte regra:

```text
valor total = preço inicial + (preço por hora × quantidade de horas)
```

O sistema também informa quando a placa não foi encontrada, quando os dados
digitados são inválidos ou quando não existem veículos estacionados.

## Estrutura do projeto

```text
trilha-net-fundamentos-desafio/
├── DesafioFundamentos/
│   ├── Models/
│   │   └── Estacionamento.cs
│   ├── DesafioFundamentos.csproj
│   └── Program.cs
├── diagrama_classe_estacionamento.png
└── README.md
```

### Classe `Estacionamento`

A classe [`Estacionamento`](DesafioFundamentos/Models/Estacionamento.cs) possui:

- `precoInicial`: valor fixo cobrado pela permanência;
- `precoPorHora`: valor cobrado por hora;
- `veiculos`: lista com as placas dos veículos estacionados.

Seus principais métodos são:

- `AdicionarVeiculo()`: solicita e adiciona uma placa à lista;
- `RemoverVeiculo()`: localiza a placa, calcula o valor e remove o veículo;
- `ListarVeiculos()`: exibe todas as placas cadastradas.

## Como executar

### Pré-requisitos

- [.NET SDK 6.0](https://dotnet.microsoft.com/download/dotnet/6.0) ou
  versão compatível;
- terminal, Visual Studio ou Visual Studio Code.

### Executando pelo terminal

Na pasta do projeto, execute:

```bash
dotnet run --project DesafioFundamentos/DesafioFundamentos.csproj
```

Também é possível entrar na pasta do projeto e executar:

```bash
cd DesafioFundamentos
dotnet run
```

## Exemplo de uso

```text
Seja bem vindo ao sistema de estacionamento!
Digite o preço inicial:
10
Agora digite o preço por hora:
5

Digite a sua opção:
1 - Cadastrar veículo
2 - Remover veículo
3 - Listar veículos
4 - Encerrar
```

## Diagrama de classe

O desafio disponibiliza o seguinte diagrama para a classe principal:

![Diagrama de classe da solução](diagrama_classe_estacionamento.png)

## Aprendizados

Este exercício reforça a construção de uma aplicação de console em C#,
organizando as responsabilidades em uma classe de domínio e utilizando um
menu para interação com o usuário. Ele faz parte da formação **DIO XP Inc.
Full Stack Developer** e serve como prática dos fundamentos necessários para
as próximas etapas do desenvolvimento backend com .NET.
