# Cálculo de Combustível - Posto

Este projeto é uma aplicação simples em TypeScript que calcula se é mais vantajoso abastecer um carro com Gasolina ou Etanol em determinados postos de combustíveis. Utilizando conceitos de Orientação a Objetos, o programa determina qual combustível oferece melhor custo-benefício com base nos preços fornecidos.

## Descrição

O programa implementa duas classes principais:

- **Combustivel**: Representa um tipo de combustível, contendo atributos como tipo e preço.
- **Posto**: Representa um posto de combustível, contendo o nome do posto e referências para os combustíveis Gasolina e Etanol.

A lógica de cálculo é baseada na seguinte condição:

- Se o preço do Etanol dividido pelo preço da Gasolina for menor que 0,7 (70%), então é vantajoso abastecer com Etanol.

## Funcionalidades

- Cálculo do custo-benefício entre Gasolina e Etanol.
- Impressão das recomendações de abastecimento no console.

## Estrutura do Projeto

```
calculo-combustivel-posto/
│
├── index.ts         # Código-fonte principal em TypeScript
├── tsconfig.json    # Configuração do TypeScript
└── dist/            # Diretório com os arquivos JavaScript compilados
```

## Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado na sua máquina.
- TypeScript instalado globalmente.

### Passos para Execução

1. Clone o repositório:

   ```bash
   git clone https://github.com/erickserpe/calculo-combustivel-posto.git
   cd calculo-combustivel-posto
   ```

2. Instale o TypeScript, se ainda não o fez:

   ```bash
   npm install -g typescript
   ```

3. Compile o código TypeScript:

   ```bash
   tsc
   ```

4. Execute o arquivo compilado:

   ```bash
   node dist/index.js
   ```

