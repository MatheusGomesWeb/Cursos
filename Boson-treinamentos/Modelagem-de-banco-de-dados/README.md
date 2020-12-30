# Bóson Treinamentos - Modelagem de Banco de Dados

- [Conceitos de Bancos de Dados](#conceitos-de-bancos-de-dados)
  - [SGBD](#sgbd)
  - [Dado x Informação](#dado-x-informacao)
- [Modelo de dados](#modelo-de-dados)
  - [Relacional](#relacional)
  - [Modelo Entidade Relacionamento](#modelo-entidade-relacionamento)
  - [Componentes do MER](#componentes-do-mer)
- [Níveis de Modelagem de Bancos de Dados](#niveis-de-modelagem)
  - [Conceitual](#conceitual)
  - [Lógico](#logico)
  - [Físico](#fisico)
  - [Etapas do desenvolvimento de um Banco de Dados](#etapas-do-desenvolvimento-de-um-banco-de-dados)
  - [Tarefas para Modelagem](#tarefas-para-modelagem)

## Conceitos de Bancos de Dados

### Bancos de Dados

Um Banco de dados (BD) é uma coleção organizada de dados. Esses dados são organizados de modo a modelar aspectos do mundo real, para que seja possível efetuar processamento que gere informaçôes relevantes para os usuários a partir desses dados.

Um Banco de Dados é composto por diversos objetos, tais como: tabelas, esquemas, visôes, consultas, relatórios, procedimentos, triggers, entre outros...

---

### SGBD

- Um **SGBD (Sistema de Gerenciamento de Bancos de Dados)** é uma coleção de softwares que permite aos usuários criarem e manterem um ou mais bancos de dados.

- São usados nas terefas de definição, construção, manipulação e compartilhamento dos bancos de dados entre aplicações e usuários.

- Permitem proteger o banco de dados e mantê-lo ao longo do tempo.

---

### Dado x Informacao

- **Dados**: São fatos em uma forma primária, que podem ser armazenados em algum meio.

Ex: nome, rg, cpf, data...

- **Informaçôes**: São os fatos organizados de maneira a produzir um significado -> Dados colocados em contexto.

Ex: Lista de clientes com seus números de CPF, ordenados.

---

### Modelo de dados

Os princípios do modelo relacional foram esboçados em julho de 1970 por E.F. Codd(IBM), no qual o Dr. Codd propôs o modelo relacional para sistemas de bancos de dados.

#### Relacional

No modelo relacional, os dados são organizados em coleções de tabelas bidimencionais.

- Essas tabelas são também chamadas de "Relações", que é uma forma de organizar os dados em linhas e colunas, baseado em lógica e teoria de conjunto.

#### Modelo Entidade Relacionamento

MER (Conceito) cria um **diagrama entidade-relacionamento** (DER) a partir das especificações do negócio ou narrativas do usuário. Permite ilustrar as entidades em um negócio e também relacionamentos entre elas.

Construimos o MER durante a fase de análise no ciclo de vida de desenvolvimento do sistema.

Um MER separa a informação necessária ao negócio das atividades que são realizadas no negócio.

**Resumindo**

- Modelo Entidade Relacionamento (MER) é o conceito, lista de entidades, atributos e relacionamentos, que traz informação sobre tipos de dados, restrições, descrições de entidades etc...

- DER (Diagrama Entidade Relacionamento) é a representação gráfica (diagrama) associada ao MER (ou parte dele).

- A partir do DER é feito o modelo Físico que é o nível mais próximo da implementação (SQL, SGBD etc...).

- Todo o resultado, (tabelas, linhas ou tuplas, colunas, SP (stored procedures) etc...) ficam armazenados dentro de um banco de dados que é chamado de (DICIONARIO DE DADOS).

#### Componentes do MER

- **Entidade**: Algo significativo, sobre o qual devemos possuir informações. Como exemplos, temos **clientes, funcionários, pedidos e produtos**.

  - **Convenção**: Nome único, singular, em caixa alta
  - **retângulo**: Representam entidades

- **Atributo**: Algo que descreve ou qualifica uma entidade. Exemplo: a entidade cliente possui atributos que descrevem seu **nome, endereço, telefone, número de identificação** etc... Atributos podem ser obrigatórios ou opcionais.

  - **Convenção**: Nome singular, caixa baixa, atributos obrigatórios marcados com '\*', identificador único com '#'.
  - **elipses**: Representam os atributos

- **Relacionamento**: Trata-se de uma associação nomeada entre entidades, com um grau de associação. Por exemplo, **clientes podem estar associados a pedidos**.

  - **Convenção**: Nome identificador (verbo), opcionalidade ('deve ser' ou 'pode ser'), grau ou cardinalidade ('um e apenas um' ou 'um ou mais')
  - **Losangos**: Representam relacionamentos

- **Cardinalidade**: Significa que cada entidade pode ou deve se relacionar de forma **uma e apenas uma** ou **uma ou mais** com outra entidade.

- **Associação / Linhas**: Linhas que ligam atributos a entidades e entidades a relacionamentos

---

### Niveis de Modelagem

Classificamos o processo de modelagem de dados em três níveis:

#### Conceitual

Esta é a primeira fase da modelagem, onde representamos o mundo real por meio de uma visão simplificada dos dados e seus relacionamentos. Assim poderemos determinar quais informações serão armazenadas no banco de dados.

- Neste nível o projeto é independente do SGBD.

Ex: Cadastro de Produtos em uma loja, dados necessáriros: Nome do produto, categoria, código do fornecedor etc...

#### Logico

- Um modelo lógico possui conceitos que os usuários são capazes de entender, ao mesmo tempo em que não está diante do modelo físico do banco de dados.

- Neste nível o projeto é independente de SGBD.

- Consiste na especificação lógica dos dados em um formato adequado ao SGBD escolhido.

- Os tipos de dados são completamente definidos.

#### Fisico

- A partir de um modelo lógico, nós derivamos o modelo físico, onde se detalham os componentes de estrutura física do banco de dados, incluíndo as tabelas, campos, tipos de valores, restrições etc...

- Ao criarmos o modelo físico, poderemos partir para a implementação física do banco de dados, utilizando o SGBD mais adequado.

#### Etapas do desenvolvimento de um banco de dados

1. Especificação e Análise de Requisitos

- Os requisitos são documentados.

2. Projeto Conceitual

- Baseado nos requisitos.

3. Projeto Lógico

- Expresso em um modelo de dados, como o relacional.

4. Projeto Físico

- Especificações para armazenar e acessar o banco de dados.
- Implementação do Banco de dados, inserção de dados reais e manutenção.

#### Tarefas para Modelagem

As tarefas a seguir devem ser realizadas para que seja possível efetuar modelagem de dados e projeto de BANCO DE DADOS funcional.

- identificar os tipos de entidade.
- identificar atributos.
- identificar relacionamentos.
- criar e associar chaves.
- normalizar para reduzir redundância.
- desnormalizar para aumentar performance.

---
