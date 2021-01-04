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
  - [Funções da SQL](#funcoes-da-sql)
  - [Grupos de Comandos](#grupos-de-comandos)
    - [DDL - Data Definition Language](#ddl)
    - [DML - Data Manipulation Language](#dml)
    - [DCL - Data Control Language](#dcl)
    - [DQL - Data Query Language](#dql)

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

### Grupos de Comandos

Os comandos SQL podem ser divididos em quatro grupos principais:

#### DDL

**Comandos DDL (Data Definition Language)**

- **CREATE**: Cria uma nova tabela, visão ou outro objeto no banco de dados.
- **ALTER**: Modifica um objeto existente no banco de dados, como uma tabela.
- **DROP**: Exclui uma tabela inteira, uma exibição de uma tabela ou outro objeto no banco de dados.

#### DML

**Comandos DML (Data Manipulation Language)**

- **INSERT**: Cria um registro (linha/tupla)
- **UPDATE**: Modifica registros
- **DELETE**: Excluir registros

#### DCL

**Comandos DCL (Data Control Language)**

- **GRANT**: Dá privilégios a um usuário
- **REVOKE**: Retira privilégios fornecidos a um usuário

#### DQL

**Comandos DQL (Data Query Language)**

- **SELECT**: Obtém registros especificados de uma ou mais tabelas. (consulta)
