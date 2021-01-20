##########################################
# Comandos DDL = Data Definition Language - CREATE, ALTER, DROP
##########################################

# Listar todos os bancos bases de dados
# SHOW DATABASES;

# Utilizar o banco de dados
# USE db_boson;

# Mostra o banco de dados que esta em uso
# SELECT DATABASE();

# Mostra as tabelas do banco de dados
# SHOW TABLES;

# ---------------------------

# CREATE - Criar o banco de dados
# CREATE database IF NOT EXISTS db_boson;

# ---------------------------

# CREATE - Criar Tabela
/* CREATE TABLE IF NOT EXISTS tb_autor(
	id_autor INT AUTO_INCREMENT PRIMARY KEY,
	nome_autor VARCHAR(50) NOT NULL,
	idade INT NOT NULL
);

CREATE TABLE IF NOT EXISTS tb_livro (
	id_livro INT AUTO_INCREMENT PRIMARY KEY,
	nome_livro VARCHAR(50) NOT NULL,
	preco_livro DECIMAL NOT NULL, 
    autor INT NOT NULL,
    FOREIGN KEY(autor) REFERENCES tb_autor(id_autor)
); */

# ---------------------------

# DROP - Deletar o banco de dados
# DROP DATABASE IF EXISTS db_boson;

# -----------------------------------------------------------------------------

##########################################
# Comandos DML = Data Manipulation Language - INSERT, UPDATE, DELETE
##########################################

# INSERT - Inserir Registro
# INSERT INTO tb_autor(nome_autor, idade) VALUES ('Matheus Gomes', 26);
# INSERT INTO tb_livro (nome_livro, preco_livro, autor) VALUES ('Criando Templates Wordpress', 59.90, 1); 

# ---------------------------

# UPDATE - Atualizar Registro - Sempre utilizar WHERE senão atualiza todos registros
# UPDATE tb_livro SET nome_livro = 'Php - Programando com Orientação a Objetos' WHERE autor = 1; 

# ---------------------------

# DELETE - Deletar Registro - Sempre utilizar WHERE senão deleta todos registros
# DELETE from tb_livro WHERE autor = 1;

# -----------------------------------------------------------------------------

##########################################
# Comandos DQL = Data Query Language - SELECT
##########################################

# SELECT - Selecionar Todos os Registros
# SELECT * FROM tb_livro;

# SELECT - Selecionar Registros específicos
# SELECT nome_autor FROM tb_autor WHERE id_autor = 1;

# -----------------------------------------------------------------------------

##########################################
# Comandos DCL = Data Control Language - GRANT, REVOKE
##########################################