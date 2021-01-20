# Curso de MySql - Boson Treinamentos

- [O que é o MySql](#oque-e-o-mysql)
- [Instando Mysql no Ubuntu](#instalando-mysql-no-ubuntu)
  - [Comando para instalacao do mysql](#comando-para-instalacao-do-mysql)
  - [Alterar senha do admin](#alterar-senha-do-admin)
  - [Acessar o mysql](#acessar-o-mysql)
  - [Dar permissão para um usuario ao banco de dados](#dar-permissao-para-um-usuario-ao-banco-de-dados)
  - [Verificando status do mysql](#verificando-status-do-mysql)
  - [Reiniciando mysql](#reiniciando-mysql)
  - [Iniciando mysql](#iniciando-mysql)
- [SGBDR - Sistema gerenciador de bancos de dados relacional](#sgbdr)
- [Composição de um banco de dados](#composicao-de-um-banco-de-dados)
  - [Tabelas](#tabelas)
  - [Campos](#campos)
  - [Registros](#registros)
- [Structured Query Language - SQL](#structured-query-language)
  - [Para que serve o SQL](#funcoes-da-sql)
  - [Sql Constraints ou Restrições](#sql-constraints-ou-restricoes)
    - [AUTO_INCREMENT](#auto-increment)
    - [NOT NULL](#sql-constraints-ou-restricoes)
    - [UNIQUE](#unique)
    - [PRIMARY KEY](#primary-key)
    - [FOREIGN KEY](#foreign-key)
    - [DEFAULT](#default)
  - [Tipos de Dados](#tipos-de-dados)
  - [Grupos de Comandos](#grupos-de-comandos)
    - [DDL - Data Definition Language - CREATE, ALTER, DROP](#ddl)
    - [DML - Data Manipulation Language - INSERT, UPDATE, DELETE](#dml)
    - [DCL - Data Control Language - GRANT, REVOKE](#dcl)
    - [DQL - Data Query Language - SELECT](#dql)

---

## Oque e o Mysql

- Mysql é um banco de dados usado por milhares de grandes e pequenas empresas.
- O Mysql é distribuido sob a licença open-source e é mantido pela Oracle.
- Ele usa uma forma padrâo da linguagem SQL, e roda em muitos S.Os. como Windows e Linux.
- É compatível com muitas linguagens de programação, como PHP, JAVA, Python etc...
- Suporta grande bancos de dados, com até 256TB de tamanho (depende do tipo de sistema de arquivos utilizado);

---

## Instalando Mysql no Ubuntu

Antes de iniciar, atualize os programas e recursos do sistema operacional

```
sudo apt upgrade
sudo apt update
```

### Comando para Instalacao do Mysql

```
sudo apt install mysql-server mysql-client
```

### Verificando status do mysql

```
sudo service mysql status
```

### Reiniciando mysql

```
sudo service mysql restart
```

### Iniciando mysql

```
sudo service mysql start
```

### Alterar senha do admin

```
sudo mysqladmin -u root -p password

// basta digitar a senha antiga e a nova senha e pressionar enter
```

**Solução 2**

```
sudo mysql
SELECT user,authentication_string,plugin,host FROM mysql.user;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
FLUSH PRIVILEGES;
SELECT user,authentication_string,plugin,host FROM mysql.user;
exit;
sudo service mysql restart
```

### Acessar o Mysql

```
sudo mysql -u root -p

// para sair digite exit; ou ctrl + d
```

### Dar permissao para um usuario ao banco de dados

```
GRANT ALL PRIVILEGES ON banco_teste.* TO root@localhost
```

---

## SGBDR

- Sistema Gerenciador de Banco de Dados Relacional
- Trata-se de um sistema de gerenciamento de bancos de dados baseado no modelo relacional introduzido por E.F.Codd.

---

## Composicao de um banco de dados

### Tabelas

- Tabelas (entidades) são onde são armazenados os dados em um banco de dados relacional.
- Uma tabela é uma coleção de entradas de dados relacionados e consiste em linhas e colunas.

### Campos

- Campos (colunas ou atributos) representam os atributos dos dados, como nome, data de nascimento, saário, preço, etc...
- Um campo é uma coluna em uma tabela que mantém informações específicas sobre cada registro.

### Registros

- Registros (linhas ou tuplas) é cada entrada individual em uma tabela.
- Trata-se de um conjunto de campos relacionados que caracterizam os dados de um mesmo grupo de informações, formando uma entidade única.

---

## Structured Query Language

- Linguagem de consulta estruturada padrâo para acesso a bancos de dados.
- Usada em inúmeros sistemas de bancos de dados, como Mysql, Sql Server, Oracle, Sybase, Access, DB2, PostgreSql, etc...
- Cada sistema pode usar um 'dialeto' do SQL, como T-SQL (SQL Server), PL/SQL (Oracle), JET SQL(Access), etc...

### Funcoes da SQL

- Permite o acesso a dados em SGBDR
- Permite definir os dados no banco de dados e manipulá-los.
- Pode ser embutido em outras linguagens como módulos SQL, bibliotecas etc...
- Permite criar e excluir bancos de dados e tabelas.
- Permite a criação de visões (exibições), Stored Procedures e Funçôes em um banco de dados.
- Permite configurar permissôes de acesso em tabelas, procedimentos e visôes.

#### Sql Constraints ou Restricoes

##### AUTO INCREMENT

- Criar um valor unico para cada registro
- O valor padrâo se unicia em 1, mas pode ser alterado pelo valor que desejar.

##### NOT NULL

- Impôe a uma coluna a NÃO aceitar valores NULL.
- Obriga o campo a sempre possuir um valor

##### UNIQUE

- Identifica de forma única cada registro na tabela
- pode haver varias constraints UNIQUE em uma tabela, mas apenas uma chave primária

##### PRIMARY KEY

- Identifica de forma unica cada registro em uma tabela de banco de dados.
- Não pode conter valores NULL
- Cada tabela deve ter uma chave primária e apenas uma chave primária.

##### FOREIGN KEY

- FK (Chave Estrangeira) é um campo que aponta para uma chave primária em outra tabela.

##### DEFAULT

- É usada para inserir um valor padrâo em uma coluna.
- O valor padrâo será adicionado a todos os novos registros caso nenhum outro valor seja especificado.

---

#### Tipos de Dados

- INT - Inteiros entre -2,147,483,648 e 2,147,483,648
- TINYINT - Numeros inteiros entre -128 a 127
- SMALLINT - Numeros inteiros entre -32768 e 32767
- MEDIUMINT - Numeros inteiros entre -8388608 e 8388607
- BIGINT - Numeros inteiros entre -9.4324.34234.324.32.4. e 9.4323.324.32.432.4.32.
- DECIMAL - Ponto decimal com N digitos no total(precisao) - (10,20,30 etc)
- FLOAT - Ponto flutuante com precisão e escala (10.2, 9.99 etc)
- CHAR - String que ocupa tamanho fixo entre 0 e 255 caracteres
- BOOL / BOOLEAN - Valores binários 0 / 1 (true ou false) é um alias para o tipo TINYINT(1)
- VARCHAR - String de tamanho variável, até 65532 caracteres.
- BLOB / MEDIUMBLOB / TINYBLOB - Campo com tamanho maximo de 65535 caracteres binários e sao utilizados grandes quantidades de dados como imagens.
  MEDIUMTEXT: Permite armazenar 16.777.215 caracteres
- LONGTEXT: Permite armazenar 4.294.977.295 caracteres
- DATE: Uma data de 01/01/1000 a 31/12/9999, YYYY-YY-YY
- DATETIME: Uma combinação de data e hora YYYY-YY-YY HH:MM:SS
- TIME: Hora apenas, no formato HH:MM:SS
- YEAR: Ano nos formatos de 2 a 4 digitos.

---
