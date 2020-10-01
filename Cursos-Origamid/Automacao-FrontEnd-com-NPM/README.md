# Automação Front-End com NPM - [Origamid](https://www.origamid.com/curso/automacao-front-end-com-npm/) - Finalizado

Automatizar tarefas utilizando o **Gulp**, para minificar imagens e arquivos, concatenar arquivos, converter sass para css, suportar navegadores antigos, converter JavaScript moderno para funcionar em navegadores antigos, automatizar um servidor com LiveReload utilizando browser-Sync e muito mais...

## Sumário

* <a href="#gulp">Oque é Gulp?</a>
  + <a href="#bibliotecas-gulp">Bibliotecas Gulp</a>

* <a href="#basico-linha-de-comando">Básico de Linha de Comando</a>
  + <a href="#navegar-para-o-diretorio">Navegar para o diretório</a>
  + <a href="#volta-um-diretorio">Volta um diretório</a>
  + <a href="#limpa-a-tela-do-terminal">Limpa a tela do terminal</a>
  + <a href="#lista-diretorios-e-arquivos">Lista diretórios e arquivos</a>
  + <a href="#renomear-e-mover-arquivos-e-diretorios">Renomear e mover arquivos e diretórios</a>
  + <a href="#criar-diretorios">Criar diretórios</a>
  + <a href="#criar-arquivo">Criar arquivo</a>
  + <a href="#remover-arquivo">Remover arquivo</a>
  + <a href="#remover-diretorio">Remover diretório</a>

* <a href="#instalar-nodejs-npm-e-git">Instalar Node.js, NPM e Git</a>
  + <a href="#site-nodejs-e-npm">Site Nodejs e NPM</a>
  + <a href="#verificando-se-esta-instalado">Verificando se esta instalado</a>
* <a href="#introducao-ao-npm">Introdução ao NPM</a>
  + <a href="#verificando-o-local-dos-pacotes-globais">Verificando o local dos pacotes globais</a>
  + <a href="#instalando-uma-biblioteca">Instalando uma biblioteca</a>
  + <a href="#atualizando-uma-biblioteca">Atualizando uma biblioteca</a>
  + <a href="#desinstalando-uma-biblioteca">Desinstalando uma biblioteca</a>

* <a href="#basico-de-git">Básico de Git</a>
  + <a href="#configurando-usuario-do-git">Configurando usuário do Git</a>
  + <a href="#iniciando-um-repositorio-local">Iniciando um repositório local</a>
  + <a href="#adicionando-arquivo-modificado-para-o-staging-area">Adicionando arquivo modificado para o Staging area</a>
  + <a href="#verificando-as-mudancas-e-os-itens-modificados">Verificando as mudanças e os itens adicionados</a>
  + <a href="#realizando-um-commit">Realizando um commit</a>
  + <a href="#definindo-um-repositorio-remoto">Definindo um repositório remoto</a>
  + <a href="#enviando-o-repositorio-local-para-o-repositorio-remoto">Enviando o repositório local para o repositório remoto</a>
  + <a href="#criando-uma-nova-branch">Criando uma nova branch</a>
  + <a href="#trocando-de-branch">Trocando de branch</a>
  + <a href="#dando-merge-em-uma-branch">Dando merge em uma branch</a>
  + <a href="#clonando-um-repositorio">Clonando um repositório</a>

## Gulp

O gulp é um kit de ferramentas JavaScript de código aberto criado por Eric Schoffstall usado como um sistema de criação de **tarefas automatizadas** no desenvolvimento web front-end.

## Bibliotecas Gulp

* [Imagemin](https://www.npmjs.com/package/gulp-imagemin) - Minificar imagens
* [Uglify](https://www.npmjs.com/package/gulp-uglify) - Minificar JavaScript
* [Sass](https://www.npmjs.com/package/gulp-sass) - Concatenar arquivos sass e gerar arquivo css
* [Concat](https://www.npmjs.com/package/gulp-concat) - Concatenar arquivos
* [AutoPrefixer](https://www.npmjs.com/package/gulp-autoprefixer) - Adicionar TAGS para compatibilidade com navegadores antigos
* [Babel](https://www.npmjs.com/package/gulp-babel) - Converter JavaScript Moderno para funcionar em navegadores antigos.
* [BrowserSync](https://www.npmjs.com/package/browser-sync) - Executa um serviço de LiveReload

___

## Basico de linha de comando

* **Comandos anteriores** - Seta para baixo / Seta para cima
* **Tab** - Auto-completa o comando
* **sudo** - Executa o comando como superuser
* **~** Diretório padrão, home 

### Navega para o diretorio

``` 
cd nomedapasta
cd ~/Desktop/origamid
```

### Volta um diretorio

``` 
cd ..
```

### Limpa a tela do terminal

``` 
clear
```

### Lista diretorios e arquivos

``` 
// Lista diretórios e arquivos

ls

// Lista diretórios, arquivos invisíveis e com permissões

ls -la
la -all
```

### Renomar e mover arquivos e diretorios

``` 
// Renomeia o diretório de origamid para projeto caso o diretório projeto não exista no mesmo local.

// Caso exista, move a pasta origamid para dentro de projeto.

mv origamid projeto
```

### Criar diretorio

``` 
mkdir projeto
```

### Criar arquivo

``` 
touch arquivo.html
```

### Remover arquivo

``` 
rm arquivo.html
```

### Remover diretorio

``` 
// Remove diretório que possui arquivos dentro.

rm -r
```

___

## Instalar Nodejs NPM e Git

**Node.js** é o Runtime criado em cima do interpretador de JavaScript do Google Chrome chamado **V8**, com ele é possivel executar código JavaScript no servidor em aplicações Back-End.

### Site Nodejs e NPM

* [Node.js](https://nodejs.org/en/)
* [Git](https://git-scm.com/downloads)

### Verificando se esta instalado

``` 
// Verificando versão do node.js

node -v
```

``` 
// Verificando versão do NPM

npm -v
```

``` 
// Verificando versão do Git

git --version
```

___

## Introducao ao NPM

**NPM** é o gerenciador de pacotes do Node.js, com ele podemos baixar e utilizar bibliotecas de terceiros em nosso projeto.

### Verificando o local dos pacotes globais

**Obs**: sudo é necessario no Mac/Linux para instalar os pacotes.

``` 
npm -g
```

### Instalando uma biblioteca

``` 
// instala localmente

npm install nomedalib

// instalando globalmente

npm install -g nomedalib
```

### Atualizando uma biblioteca

``` 
// atualiza a biblioteca localmente

npm update nomedalib

// atualiza a biblioteca globalmente

npm update nomedalib -g
```

### Desinstalando uma biblioteca

``` 
// desinstala biblioteca local

npm uninstall nomedalib

// desinstala biblioteca globalmente

npm uninstall nomedalib -g
```

___

## Basico de Git

**Git** é um sistema de gerenciamento de versões de arquivos, ele torna simples a comparação entre versões de um arquivo / diretório.

### Configurando usuario do Git

``` 
git config --global user.name "seu nome"
git config --global user.email "seu email"
```

### Iniciando um repositorio local

``` 
git init
```

### Adicionando arquivo modificado para o Staging area

``` 
// adiciona todos os arquivos

git add .

// adiciona o arquivo

git add <nome arquivo>
```

### Verificando as mudancas e os itens modificados

``` 
git status
```

### Realizando um commit

``` 
git commit -m "Comentário"
```

### Definindo um repositorio Remoto

``` 
git remote add origin https://github.com/repositorio/repositorio.git
```

### Enviando o repositorio local para o repositorio remoto

``` 
git push -u origin master
```

### Criando uma nova branch

``` 
git branch nomebranch
```

### Trocando de branch

``` 
git checkout branch
```

### Dando merge em uma branch

``` 
git merge nomebranch
```

### Clonando um repositorio

``` 
git clone https://github.com/repositorio/repositorio.git
```
