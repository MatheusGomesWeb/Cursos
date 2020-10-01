# NPM

NPM (Node Package Manager) é um gerenciador de pacotes para NodeJS, com ele podemos instalar pacotes, plugins, bibliotecas, frameworks, etc... através da linha de comando e utilizar em nossos projetos.

**Obs:** È preciso ter o **NodeJS** instalado.

## Instalação

> sudo apt install nodejs -g
> sudo apt install npm -g

**Obs** Quando instalamos o nodejs ele instala o NPM junto.

___

### Comandos básicos NPM

**Versão do NPM**

> npm -v

**iniciar um projeto com npm, e gera o package.json (npm init -y, pula as etapas)**

> npm init

**instalar biblioteca jquery**

> npm install jquery

**(dependencia de desenvolvimento)(local)**

 --save-dev 

**(dependencia global)**

 -g 

**atualizar biblioteca jquery**

> npm update jquery

**desinstala o jquery**

> npm unistall jquery

**entra no modo interativo do NodeJS**

> node
