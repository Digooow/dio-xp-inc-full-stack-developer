# Desafio de POO com C#

Implementação do desafio de **Programação Orientada a Objetos** da trilha
**.NET do curso DIO XP Inc. Full Stack Developer**.

## Sobre a atividade

O desafio propõe a criação de uma aplicação console para representar
smartphones de diferentes marcas. A solução utiliza uma classe abstrata como
base e classes derivadas para implementar comportamentos específicos de um
Nokia e de um iPhone.

O objetivo é praticar os principais conceitos de orientação a objetos em C#:

- abstração;
- herança;
- polimorfismo;
- encapsulamento;
- sobrescrita de métodos.

## Funcionalidades

Cada smartphone possui:

- número de telefone;
- modelo;
- IMEI;
- capacidade de memória;
- operação para realizar uma ligação;
- operação para receber uma ligação;
- instalação de aplicativos com comportamento específico por marca.

O método `InstalarAplicativo` é abstrato em `Smartphone` e sobrescrito nas
classes `Nokia` e `Iphone`, permitindo que cada tipo apresente sua própria
mensagem de instalação.

## Estrutura do projeto

```text
trilha-net-poo-desafio/
├── Imagens/
│   └── diagrama.png
├── Models/
│   ├── Iphone.cs
│   ├── Nokia.cs
│   └── Smartphone.cs
├── DesafioPOO.csproj
├── Program.cs
└── README.md
```

### Diagrama de classes

![Diagrama de classes](Imagens/diagrama.png)

## Tecnologias utilizadas

- C#;
- .NET 6;
- aplicação console;
- Visual Studio, Visual Studio Code ou outra IDE compatível com .NET.

## Como executar

### Pré-requisitos

Instale o [.NET 6 SDK](https://dotnet.microsoft.com/download/dotnet/6.0) ou
uma versão compatível com o projeto.

### Executando pela linha de comando

No diretório da atividade, execute:

```bash
dotnet restore
dotnet run
```

Para gerar somente a compilação:

```bash
dotnet build
```

## Exemplo de saída

```text
Smartphone Nokia
Ligando...
Recebendo ligação...
Instalando WhatsApp no Nokia...
Smartphone Iphone
Ligando...
Recebendo ligação...
Instalando Instagram no Iphone...
```

## Conceitos aplicados

### Abstração

A classe `Smartphone` é abstrata e define a estrutura comum dos aparelhos.
Por isso, ela não pode ser instanciada diretamente.

### Herança

`Nokia` e `Iphone` herdam de `Smartphone` e reutilizam seus atributos,
construtor e comportamentos comuns.

### Polimorfismo

As instâncias são referenciadas pelo tipo `Smartphone`, mas executam a
implementação correspondente de `InstalarAplicativo` em cada classe concreta.

### Encapsulamento

As informações específicas do aparelho, como modelo, IMEI e memória, são
mantidas na classe base, enquanto as operações são expostas por métodos.

## Referência

Este projeto foi desenvolvido como parte do desafio prático da formação
**DIO XP Inc. Full Stack Developer**, no módulo de **Programação Orientada a
Objetos com .NET**.
