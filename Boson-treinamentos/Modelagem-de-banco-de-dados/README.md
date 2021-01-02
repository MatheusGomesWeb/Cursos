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
- [Chaves Primárias, Estrangeiras e outros](#chaves-privarias-estrangeiras-e-outros)
  - [Chaves Candidatas](#chaves-candidatas)
  - [Chaves Primárias](#chaves-primarias)
  - [Chaves Estrangeiras](#chaves-estrangeiras)
  - [Chaves Compostas](#chaves-compostas)
  - [Chaves Surrogadas / Substitutas](#chaves-surrogadas-ou-substitutas)
  - [Conceito de Domínio](#conceito-de-dominio)
- [Cardinalidade](#cardinalidade)
  - [Relacionamento Binário Um para Um (1,1)](#relacionamento-binario-um-para-um)
  - [Relacionamento Binário Um para Muitos (1,N)](#relacionamento-binario-um-para-muitos)
  - [Relacionamento Binário Muitos para Muitos (N,M)](#relacionamento-binario-muitos-para-muitos)

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

  - **Convenção**: Nome único, singular, em caixa alta (PRODUTO, CLIENTE, PEDIDO)
  - **retângulo**: Representam entidades
  - Os nomes das tabelas devem ser únicos

---

- **Atributo**: Algo que descreve ou qualifica uma entidade. Exemplo: a entidade cliente possui atributos que descrevem seu **nome, endereço, telefone, número de identificação** etc... Atributos podem ser obrigatórios ou opcionais.

  - **Convenção**: Nome singular, caixa baixa, atributos obrigatórios marcados com '\*', identificador único com '#'.
  - **elipses**: Representam os atributos e são ligados á entidade por uma linha. Opcionalmente, podemos representar um atributo penas pelo seu nome ligado á entidade, sem utilizar a elipse.

  - **Tipos de Atributos**: Os atributos podem ser de vários tipos, tais como:
    - **Simples**: Não possui características especiais, e são indivisiveis. Ex: nome, cpf, cnpj etc...
    - **Composto**: É formado por itens menores, pode ser subdividido em outros atributos. Ex: endereco pode ser subdividido em (rua, cep, bairro etc...)
    - **Multivalorado**: Pode conter mais de um valor para um mesmo registro (informação). Ex: empresa (telefone), uma empresa pode possuir varios telefones.
    - **Determinante**: Define de forma única as instâncias de uma entidade. Não podem existir duas instâncias com o mesmo valor nesse atributo. Ex: empresa (cnpj).
    - **Identificador (chaves)**: Uma chave identifica uma instância específica na classe da entidade. Ex: cpf, codigo_produto, matricula, id_setor.
      - As chaves podem ser únicas (o valor dos dados da chave é único na entidade) ou não únicas (usada para agrupar instâncias de classe em categorias).
      - As chaves podem ser compostas, consistindo de dois ou mais atributos combinados.

---

- **Relacionamento**: Trata-se de uma associação nomeada entre entidades, com um grau de associação. Por exemplo, **clientes podem estar associados a pedidos**.

  - **Convenção**: Nome identificador (verbo), opcionalidade ('deve ser' ou 'pode ser'), grau ou cardinalidade ('um e apenas um' ou 'um ou mais')
  - **Losangos**: Representam relacionamentos

  - **Características de uma Relação**:
    - Linhas contém dados sobre instâncias de uma entidade (registros).
    - Colunas contém dados sobre atributos da entidade (campos)
    - Relacionamentos podem ser unários (auto relaciona), binarios (dois), ternários (trêz) , (N)nários (N)

---

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

### Chaves Primarias Estrangeiras e outros

Uma chave consiste em uma ou mais colunas de uma relação cujos valores são usados para identificar de forma exclusiva uma linha ou conjunto de linhas.

- Pode ser única (PK) (identifica uma única linha) ou não única (FK) (identifica um conjunto de linhas)

#### Chaves Candidatas

- Atributo ou grupo de atributos com o potencial para se tornarem uma chave primária.
- Uma chave candidata que não seja usada como chave primária será conhecida como **Chave Alternativa**.
  Ex: Campos num_matricula e cpf em uma tabela de registro de alunos.

#### Chaves Primarias

- Chave candidata escolhida para ser a **chave principal** na relação.
- Identifica de forma exclusiva os registros em uma tabela, não podendo ter repetição de valores nem tampouco valor nulo.
- Primary Key / PK

**Instruções para criação de chaves primárias**

- Não é possível haver valores duplicados em uma chave primária.
- No geral, não é possível alterar o valor de uma chave primária.

#### Chaves Estrangeiras

- Coluna de uma tabela que estabelece um **Relacionamento com a Chave Primária** (PK) de outra tabela.

- É a partir da chave estrangeira (Foreign Key / FK) que sabemos com qual registro em outra tabela um registro está relacionado.

**Instruções para criação de chaves estrangeiras**

- Chaves estrangeiras são baseadas em valores de dados, classificadas como ponteiros lógicos
- O valor de uma chave estrangeira deve corresponder a um valor existente em uma chave primária associadda (ou valor de chave única). Caso contrário, deve ser (NULL).
- Uma chave estrangeira deve referenciar uma chave primária ou uma coluna de chave única.

#### Chaves Compostas

- Chave que é composta de dois ou mais atributos (colunas).
- Geralmente empregada quando nao é possível utilizar uma única coluna de uma tabela para identificar de forma exclusiva seus registros.

#### Chaves Surrogadas ou Substitutas

- Valor numérico, único, adicionado a uma relação para servir como chave estrangeira.
- Não possui significado para os usuários e geralmente fica escondidanas aplicações.
- As chaves substitutas são frequentemente usadas no lugar de uma chave primária composta.

#### Conceito de Dominio

- O Conceito de Domínio define os tipos de dados e especifica os valores válidos em um campo.

Ex: id_cliente (FK) (number) (varchar(255)) = chave primaria, do tipo numérido e no maximo 255 caracteres.

---

### Cardinalidade

A Cardinalidade diz respeito ao número de itens que se relacionam nas entidades.

A Cardinalidade pode ser máxima ou mínima, significando respectivamente os números mínimo e máximo de instâncias de cada entidade associada no relacionamento.

**Cardinalidade Mínima**: Número mínimo de instâncias de entidade que **devem** obrigatoriamente participar em um relacionamento; zero é participação opcional e um é obrigatório.

**Cardinalidade Maxima**: Trata-se do número máximo de instâncias de entidade que podem participar em um relacionamento. Pode ser 1 ou N (muitos).

Ex: (1, N) - no mínimo um no maximo N (muitos)

#### Relacionamento Binario um para um

- **1:1**: Uma instância de entidade única em uma entidade está relacionada com uma instância de entidade única em outra entidade.

#### Relacionamento Binario um para Muitos

- **1:N**: Uma instância de entidade única em uma classe de entidade está relacionada a muitas instâncias de entidade em outra classe de entidade.

#### Relacionamento Binario Muitos para Muitos

- **N:M**: Muitas instâncias em uma entidade estão relacionadas a muitas instâncias de entidade em outra entidade.
