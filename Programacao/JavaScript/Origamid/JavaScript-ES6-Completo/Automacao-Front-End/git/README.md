# Git 

Sistema de controle de versões. Facilita o trabalho em equipe e o controle de mudanças entre arquivos e diretórios.

## .gitignore

Para o git ignorar arquivos ou pastas basta criar um arquivo .gitignore e colocar o nome deles dentro do arquivo.

## Branchs

Uma das principais vantagens do git é a possíbilidade de criarmos "ramificações". Assim podemos trabalhar em funcionalidades adicionais oara um projeto, sem modificarmos o 'ramificação principal', o master.

### Comandos Branchs

* git branch - lista as branchs
* git branch nomebranch - cria uma nova branch
* git branch -b nomebranch - cria e ja muda para a branch
* git checkout nomebranch - muda para branch

# Github

Plataforma Online de hospedagem de repositórios Git. Existem outras como GitLab e Bitbucket. 

# Instalação

> sudo apt install git

## Configurando Git

> git config --global user.name "matheus"

> git config --global user.email "matheusgomes1203@hotmail.com"

## Comandos Básicos

* git init - inicia um repositório
* git add <arquivo.js> - adiciona o arquivo alterado para o staging area
* git add . - adiciona todos os arquivos ao staging area
* git status - verifica arquivos alterados no repositorio
* git commit -m "texto commit" - enviar os arquivos do staging area para o repositório local
* git merge nomebranch - junta as alterações com outra branch

## Github

github.com -> criar uma conta -> criar repositório

### Adicionar repositório remoto ao repositório local

> git remote add origin https://linkdorepositorio.git

### Enviar alterações do repositório local para o remoto (github)

> git push origin master
> git push

### Atualiza o repositorio clonado caso tenha alterações no repositório

> git pull

### Clonar repositório remoto para o pc

> git clone https://linkrepo.git

## Github Pages

No github é possível hospedar sites simples, sem banco de dados, basta ir nas configuraçôes do repositório e ativar.
