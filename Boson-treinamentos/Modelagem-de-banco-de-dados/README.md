# Bóson Treinamentos - Modelagem de Banco de Dados

- [Conceitos de Bancos de Dados](#conceitos-de-bancos-de-dados)
  - [SGBD](#sgbd)
  - [Dado x Informação](#dado-x-informacao)
- [Modelo de dados](#modelo-de-dados)
  - [Relacional](#relacional)
  - [Modelo Entidade Relacionamento](#modelo-entidade-relacionamento)
  - [Componentes do MER](#componentes-do-mer)

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

MER cria um diagrama entidade-relacionamento a partir das especificações do negócio ou narrativas do usuário. Permite ilustrar as entidades em um negócio e também relacionamentos entre elas.

Construimos o MER durante a fase de análise no ciclo de vida de desenvolvimento do sistema.

Um MER separa a informação necessária ao negócio das atividades que são realizadas no negócio.

#### Componentes do MER

- **Entidade**: Algo significativo, sobre o qual devemos possuir informações. Como exemplos, temos **clientes, funcionários, pedidos e produtos**.

  - **Convenção**: Nome único, singular, em caixa alta

- **Atributo**: Algo que descreve ou qualifica uma entidade. Exemplo: a entidade cliente possui atributos que descrevem seu **nome, endereço, telefone, número de identificação** etc... Atributos podem ser obrigatórios ou opcionais.

  - **Convenção**: Nome singular, caixa baixa, atributos obrigatórios marcados com '\*', identificador único com '#'.

- **Relacionamento**: Trata-se de uma associação nomeada entre entidades, com um grau de associação. Por exemplo, **clientes podem estar associados a pedidos**.

  - **Convenção**: Nome identificador (verbo), opcionalidade ('deve ser' ou 'pode ser'), grau ou cardinalidade ('um e apenas um' ou 'um ou mais')

- **Cardinalidade**: Significa que cada entidade pode ou deve se relacionar de forma **uma e apenas uma** ou **uma ou mais** com outra entidade.

---
