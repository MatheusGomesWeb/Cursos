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
- [Restrições e Integridade de dados](#restricoes-e-integridade-de-dados)
  - [Integridade Referencial](#integridade-referencial)
  - [Integridade de Domínio](#integridade-de-dominio)
  - [Integridade de Vazio](#integridade-de-vazio)
  - [Integridade de Chave](#integridade-de-chave)
  - [Integridade definida pelo Usuário](#integridade-definida-pelo-usuario)
- [Normalização](#normalizacao)
  - [Primeira Forma Normal - 1FN](#primeira-forma-normal-1fn)
  - [Segunda Forma Normal - 2FN](#segunda-forma-normal-2fn)
  - [Terceira Forma Normal - 3FN](#terceira-forma-normal-3fn)
  - [Forma Normal de Boyce-Codd - FNBC](#forma-normal-de-boyce-codd)
- [Projeto Prático](#projeto-pratico)
  - [Apresentação](#apresentacao)
  - [Fases do Projeto](#fases-do-projeto)
  - [Regras de Negócio](#regras-de-negocio)
  - [Identificando Entidade](#identificando-entidades)
  - [Identificando Relacionamentos](#identificando-relacionamentos)
  - [Identificando Atributos](#identificando-atributos)
- [12 Dicas e Boas Praticas na Modelagem de Dados](#12-dicas-e-boas-praticas-na-modelagem-de-dados)
- [Dica Bonus Programacao SQL](#dica-bonus-programacao-sql)

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

---

### Restricoes e integridade de dados

Manutenção e garantia da consistência e precisão dos dados, sendo um aspecto crítico no design, implementação e uso de sistemas de armazenamento de dados.

A integrigade é atingida por meio da aplicação de **Restrições de Integridade**

#### Integridade Referencial

Assegura que valores de uma coluna em uma tabela são válidos baseados nos valores em uma outra tabela relacionada.

Ex: Se um produto de ID 532 foi cadastrado em uma tabela de Vendas, então um produto com ID 523 deve existir na tabela de Produtos relacionada.

#### Integridade de Dominio

Valores inseridos em uma coluna devem sempre obedecer á definição dos valores que são permitidos para essa coluna.

Ex: em uma coluna que armazena preços de mercadorias, os valores admitidos são do domínio número - ou seja, apenas números.

#### Integridade de Vazio

Informa se a coluna é obrigatória ou opcional - ou seja, se é possível não inserir um valor na coluna.

Uma coluna de chave primária, por exemplo, sempre deve ter dados inseridos, e nunca pode estar vazia, para nenhum registro.

**Valores NULL**

Um valor NULL significa que não existem dados. É diferente de zero, espaço, string vazia ou tabulação.

Os nulos podem ser problemáticos, pois indicam:

- O valor da coluna não é apropriado.
- O valor não foi inserido.
- O valor é desconhecido.

Ex: Nem todo aluno possui telefone, portando este campo não é obrigatório (atributo NULL).

#### Integridade de Chave

Os valores inseridos na coluna de chave primária (PK) devem ser sempre únicos, não admitindo-se repetições nesses valores.

Deste forma, as tuplas (registros) serão sempre distintas.

Os valores de chave primária também não podem ser nulos.

#### Integridade Definida pelo Usuario

Diz respeito as regras de negócio específicas que são definidas pelo usuário do banco de dados.

Por exemplo, pode-se definir que uma coluna somente aceitará um conjunto restrito de valores.

---

### Normalizacao

- O processo de normalização, proposto por Codd em 1972, aplica a um esquema de relação uma serie de testes para certificar que ele satisfaça uma Forma Normal (FN).
- Codd propos originalmente 3 formas normais: 1FN, 2FN, 3FN.
- Posteriormente, a 3FN foi revisada e uma definição mais robusta foi proposta por Boyce e Codd, denominada Forma Normal de Boyce-Codd (FNBC).

- Normalização consiste em um processo de análise de uma relação para assegurar que seja bem formada.
- Decompor relações com anomalias para produzir relações menores e bem-estruturadas.

Ou seja, em uma relação normalizada podemos inserir, excluir ou modificar registros sem criar anomalias.

**Obs**: O ideal é que o projeto do banco de dados relacional alcance a FNBC ou a 3FN para cada tabela. Não é adequado normalizar apenas até a 1FN ou á 2FN, pois na verdade essas formas normais são usadas para se chegar á 3FN ou FNBC.

#### Primeira Forma Normal 1FN

Definida historicamente para reprovar atributos multivalorados, compostos e suas combinações.
O domínio de um atributo deve incluir apenas valores atômicos (indivisíveis), e o valor de qualquer atributo em uma tupla deve ser único valor do domínio desse atributo.

**Uma tabela está na Primeira Forma Normal (1FN) quando**:

- Somente possui valores atômicos (campos que podem ser subdivididos em mais de um campo).
- Não ha grupos de atributos repetidos (há apenas um dado por coluna nas linhas)
- Existe uma chave primária
- Relação não possui atributos multivalorados ou relações aninhadas.

#### Segunda Forma Normal 2FN

- Baseada no conceito de Dependência Funcional Total.
- Um esquema de relação R está na 2FN se cada atributo não-chave de R for total e funcionalmente dependente da PK de R.
- Para testar a 2FN, testamos as dependências funcionais cujos atributos fazem parte da chave primária.
- Caso a PK tenha um único atributo, esse teste não precisa ser aplicado.

**Uma tabela está na Segunda Forma Normal (2FN) quando**:

- Está na 1ªFN
- Todos os atributos não-chave são funcionalmente dependentes de todas as partes da chave primária.
- Não existem dependências parciais.
- Caso contrário, deve-se gerar uma nova tabela com os dados.

#### Terceira Forma Normal 3FN

- Baseada no conceito de Dependência Transitiva
- A relação não deve ter um atributo não-chave determinado funcionalmente por outro atributo não-chave (ou conjunto).
- Não deve haver dependência transitiva de um atributo não-chave sobre a PK.
- Deve-se decompor e montar uma nova relação que inclua os atributos não-chave que determinam funcionalmente outros atributos não-chave.

**Uma tabela está na Terceira Forma Normal (3FN) quando**:

- Estiver na 2FN
- Não existirem dependências transitivas
- Uma tabela está na Terceira Forma Normal se ela estiver na segunda forma normal e se nenhuma coluna não-chave depender de outra coluna não-chave.

Uma dependência transitiva em uma tabela é uma dependência funcional entre dois ou mais atributos não-chave.

**Passos para Normalização, Resumo**:

- Tabela Não Normalizada
- Remover atributos multivalorados e compostos (1FN)
- Remover Dependências Parciais (2FN)
- Remover Dependências Transitivs (3FN)

#### Forma Normal de Boyce Codd

A definição original da 3FN de Codd não lidava adequadamente com uma relação que:

- Tivesse duas ou mais chaves canditadas.
- Essas chaves candidatas fossem compostas
- Elas tivessem superposição (atributos em comum)

Caso a combinação das condiçôes acima não ocorra em uma tabela, basta aplicar a 3FN.

Uma relação está em FNBC se e somente se os únicos determinantes são chaves candidatas.

---

### Projeto Pratico

#### Apresentacao

Banco de dados para Gerenciamento de uma Faculdade.

**Objetivos do Banco de dados**

- Realizar controle centralizado de alunos, professores, cursos, disciplinas, histórico escolar e turmas.

#### Fases do Projeto

- Levantamento dos Requisitos
- Identificação de Entidades e Relacionamentos
- Modelo E-R
- Diagrama E-R
- Dicionário de dados
- Normalização
- Implementação
- Testes básicos

#### Regras de negocio

- Um aluno só pode estar matriculado em um curso por vez
- Alunos possuem um código de identificação (RA)
- Cursos são compostos por disciplinas
- Cada disciplina terá no maximo 30 alunos por turma.
- As disciplinas podem ser obrigatórias ou optativas, dependendo do curso
- As disciplinas pertencem a departamentos específicos
- Cada disciplina possui um código de identificação
- Alunos podem trancar matrícula, não estando então matriculados em nenhuma disciplina no semestre
- Em cada semeste, cada aluno pode se matricular em no máximo 9 disciplinas
- O aluno só pode ser reprovado no máximo 3 vezes na mesma disciplina.
- A faculdade terá no máximo 3.000 alunos matriculados simultâneamente, em 10 cursos distintos.
- Entram 300 alunos novos por ano.
- Existem 90 disciplinas no total disponíveis.
- Um Histórico Escolar traz todas as disciplinas cursadas por um aluno, incluindo nota final, frequência e período do curso realizado.
- Professores podem ser cadastrados mesmo sem lecionar disciplinas
- Existem 40 professores trabalhando na escola.
- Cada professor irá lecionar no máximo 4 disciplinas diferentes
- Cada professor é vinculado a um departamento
- Professores são identificados por um código de professor.

#### Identificando Entidades

- Aluno
- Professor
- Disciplina
- Curso
- Departamento

#### Identificando Relacionamentos

- Aluno está matriculado em curso
- Aluno cursa disciplina
- Aluno realizou disciplina
- Disciplina pertence a curso
- Professor ministra disciplina
- Professor pertence a departamento
- Departamento é responsável por disciplina
- Departamento controla curso
- Disciplina depende de disciplina

#### Identificando Atributos

**Professor**

- Código do professor
- Nome
- Sobrenome
- Código do departamento

**Aluno**

- Número de matrícula
- Nome
- Sobrenome
- Endereço
  - Rua
  - Número
  - Bairro
  - Cep
  - Cidade
  - Estado
- Código do curso

**Disciplina**

- Código da disciplina
- Nome da disciplina
- Descrição curricular
- Código do departamento
- Número de alunos

**Curso**

- Código do curso
- Nome do curso
- Código do Departamento

**Departamento**

- Código do departamento
- Nome do departamento

---

### 12 Dicas e Boas Praticas na Modelagem de Dados

1. **Nome dos Objetos**: Use apenas nomes significativos para os objetos do banco, como tabelas, colunas e procedimentos armazenados.

Os nomes devem ser descritivos. Evite abreviações e siglas obscuras que possam atrapalhar a compreensão da finalidade do objeto.

2. **Tipos Corretos de Dados**: Usar os menores valores possíveis, A performance do banco é melhorada se usarmos os menores valores possíveis para os dados que os requisitos permitirem.

3. **Normalizar as Tabelas**: A Normalização de Dados é um princípio base dos bancos de dados relacionais, no qual os dados são organizados para minimizar ou eliminar a redundância.

Normalizar até a 3FN e Desnormalizar se for necessário.

4. **Usar e nomear Constraints**: Ao nomear Restrições, use prefixos que as descrevam, como por exemplo "PK" para chave primária e "FK" para chave estrangeira, seguidos do nome da tabela (ou tabelas) envolvidas.

- pk_idAutor
- fk_idEditora

5. **Identificação dos Elementos do MER**: Identifique os elementos de um modelo entidade relacionamento na seguinte ordem:

- Entidades Primeiro
- Relacionamentos na sequência
- Atributos de entidades por último
- Atributos de relacionamentos, se houver

6. **Tabelas Associativas**: Prestar sempre atenção em relacionamentos muitos-para-muitos (N:M), sempre que houver, simplificá-lo criando uma tabela associativa.

7. **Relacionamentos n-ários**: Também prestar sempre muita atenção quando surgirem relacionamentos n-ários, como ternários ou quaternários.

Sempre que um relacionamentos desse tipo ocorrer, simplificá-lo criando tabelas associativas.

8. **Documentação**: Documentar o processo de modelagem é de crucial importância.

- Criar o DER detalhado
- Criar Dicionário de dados
- Na codificação, usar comentários para descrever os scripts.

9. **Prefixos de nomes de Objetos**: Prefixar nomes de objetos para identificar sua categoria.

- tb ou tbl para tabelas
- vw para view
- db para banco de dados
- sp para procedimentos armazenados
- tg para triggers
  etc...

10. **Nomes de tabelas e colunas**: Use termos no singular para nomes de tabelas, ex: tblCliente, pois uma tabela representa uma coleção de entidades.

Igualmente para atributos, ex: nomeLivro.

Procure não usar acentuação, espaços e caracteres especiais !.

11. **Levantamento e análise de requisitos**: Extremamente importante, saiba levantar todas as informações necessárias para o processo de modelagem.

Pergunte ao máximo que puder, e anote toda informação fornecida pelo cliente / usuário. Interação sempre !

Na dúvida, entre em contato com o cliente e pergunte novamente.

12. **Campos de chave primária**:

- Tabelas sempre devem possuir uma chave primária
- Procura usar chaves naturais, sempre que possível
- Entre uma chave composta ou surrogada, prefira surrogada
- Procure usar tipos numéricos em vez de caracteres para economizar recursos e aumentar a performance de busca.

---

### Dica Bonus Programacao SQL

A seguir, 5 dicas bônus relacionadas á programação do banco de dados usando a linguagem de consulta estruturada SQL.

1 - **Usar views**: Procure usar views para ocultar a complexidade, fornecer dados agregados e restringir o acesso a linhas e colunas de tabelas.

2 - **SELECT \***: Evite realizar consultar utilizando SELECT \*, a não ser que sejam realmente necessárias, o ideal é retornar apenas as colunas necessárias, isso aumentará a performance da aplicação.

3 - **Campos de Senha**: Senhas sempre devem ser guardadas criptografadas usando algoritmos fortes, A Decriptação deve ocorrer na aplicação quando for necessário.

4 - **Sempre usar Procedures e Views**:

- Aumentam a performance em consultas.
- Diminuem possibilidade de erros
- Simplificam codificação da aplicação

5 - **Usar índices em colunas muito consultadas**: Ìndices podem aumentar significativamente a performance de acesso em consultas, caso colunas sejam muito frequentemente acessadas.

Crie índices sempre que detectar essa necessidade, mas cuidado com colunas que não são modificadas com frequência.
