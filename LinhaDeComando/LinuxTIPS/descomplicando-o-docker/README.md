# Curso Descomplicando o Docker - LINUXtips - Prof: Jeferson Fernando

## Sumário

  + [Oque é Docker?](#oque-é-docker-?)
  + [Oque são Containers?](#oque-sao-containers?)
  + [Tipos de Isolamentos](#tipos-de-isolamentos)
  + [Imagens Docker](#imagens-docker)
  + [Instalando o Docker](#instalando-o-docker)

**Comandos**

  + [Comandos Docker](#comandos-docker) - [Executando um Container](#executando-um-container) - [Executando um Container e Acessando o Terminal interativo dele](#executando-um-container-e-acessando-o-terminal-interativo-dele) - [Parando a Execução de um Container](#parando-a-execucao-de-um-container) - [Pausar um Container](#pausar-um-container) - [Despausar um Container](#despausar-um-container) - [Conectando a um Container em Execução](#conectando-a-um-container-em-execucao) - [Criando um Container, Mas sem Executar](#criando-um-container-mas-sem-executar) - [Verificando os Logs do Container](#verificando-os-logs-do-container) - [Remover um Container PARADO](#remover-um-container-parado) - [Remover um Container em EXECUÇÃO](#remover-um-container-em-execucao) - [Listando os Containers em Execução](#listando-os-containers-em-execucao) - [Listando todos os Containers Disponíveis](#listando-todos-os-containers-disponiveis) - [Executando uma Imagem Docker](#executando-uma-imagem-docker) - [Listando as Imagens Disponíveis](#listando-as-imagens-disponiveis) - [Verificando o Consumo de Hardware do Container](#verificando-o-consumo-de-hardware-do-container) - [Verificando o Consumo dos Processos em Execução no Container](#verificando-o-consumo-dos-processos-em-execucao-no-container) - [Verificar configuraçôes do Container](#verificar-configuracoes-do-container) - [Verificar limite de MEMORIA que o container pode utilizar](#verificar-limite-de-memoria-que-o-container-pode-utilizar) - [Verificar limite de CPU que o container pode utilizar](#verificar-limite-de-cpu-que-o-container-pode-utilizar)    

**Volumes**

   - [Criando um Volume](#criando-um-volume)
   - [Listando Volume](#listando-volume)

**Scripts**
   - [Dockerfile](#dockerfile)
   - [Executando Dockerfile e criando imagem](#executando-dockerfile-e-criando-imagem)

___

## Oque é Docker ?

Docker é um software que isola as aplicações em **Containers**, tornando possivel a utilização de varios serviços, sistemas operacionais e ferramentas, isolados do sistema operacional(HOST).

O Docker surgiu em 2013 e foi criado por **Solomon Hykes** da empresa Parallels, a empresa resolveu disponibilizar o (Core) do docker para a comunidade no Github. Rapidamente a comunidade começou a contribuir com o projeto, e o Docker cresceu se tornando oque é hoje.

Docker não é o primeiro software que isola recursos e processos em containers, antigamente (muito tempo atraz) tinhamos o **CHROOT** que funcionava de uma forma parecida com o Docker.

Muitas empresas de hospedagem utilizavam o **OPENVZ** para criar e vender produtos de VPS (Virtual private server).

O Docker utiliza o **LXC**(linux containers), que é a base (core) do Docker

___

## Oque sao Containers?

**Containers** são serviços que rodam em cima do Docker, onde podemos configurar diferentes tipos de serviços, ferramentas e sistemas operacionais isolados do sistema operacional, por exemplo: um container rodando o Nodejs com o sistema operacional Windows, e outro rodando o Wordpress com sistema operacional MacOs, tudo no mesmo sistema operacional (HOST).

Com containers a redução de custo com o servidor diminui drasticamente, porque só é necessario adquirir um servidor(HOST) e configurar diversos serviços e sistemas operacionais diferentes através de Containers Docker.

Sem ele, precisariamos comprar varios servidores para diferentes aplicações, ficando muito custoso.

**Obs**: um container não tem acesso ao outro, apenas o Host tem acesso a todos os containers. 

___

## Tipos de Isolamentos

**Isolamento de Processos**: Isolar softwares, sistemas, ferramentas etc..., que é a parte **LÓGICA** de um isolamento, os responsáveis pela parte lógica são os **Namespaces**.

**Isomaneto de Recursos**: Isolar quantidade de memoria ram, rede, processador (IO) etc..., que é a parte **FÍSICA** de um isolamento, os responsáveis são os **CGROUP**

___

## Imagens Docker

Imagens Docker, são sistemas operacionais, ferramentas, softwares que são utilizados para gerar um container especifico com as caracteristicas da imagem.

Quando atualizamos a imagem com uma nova configuração, e criamos um novo container utilizando a imagem, não é criado uma nova imagem, ele irá utilizar a mesma imagem, alterando apenas a quantidade de informações da imagem (ATUALIZA A IMAGEM)(FAZ UM UPDATE).

Quando executamos comandos no shell, eles funcionam como camadas, ao executar varios comandos, um comando não tem acesso a outro.

Somente a primeira camada (o comando digitado agora) é **Read-write**, os outros comandos (outras camadas) são **Read-only**

Ao fazer uma alteração, o docker cria uma copia da camada Read-only e permite que escreva uma nova camada a partir dela (nunca alteramos a camada principal).
___

## Instalando o Docker

Para instalar siga as instruções no site do Docker: https://docs.docker.com/engine/install/ubuntu/

**Instalar com curl**

``` 
curl -fsSL https://get.docker.com/ | sh
curl -fsSL https://get.docker.com/ | bash
```

## Comandos Docker

### Versao do Docker

``` 
docker -v
docker --version 
```

### Executando um container

``` 
docker run
```

### Executando uma imagem Docker

``` 
// Caso a imagem não exista, ele da um pull no Docker Hub, e baixa automaticamente.

docker container run -ti hello-world
docker run hello-world
```

### Listando as imagens disponiveis

``` 
docker images
docker image ls
```

### Listando os Containers em Execucao

``` 
docker container ls
docker ps
```

### Listando todos os Containers Disponiveis

``` 
docker container ls -a
docker ps -a
```

### Executando um Container e acessando o Terminal Interativo dele

``` 
docker container run -ti ubuntu /bin/bash
docker run -ti ubuntu /bin/bash

//cria um ALIAS para o container (nome personalizado)
docker container run -ti ubuntu --name <nomecontainer>
docker run -ti ubuntu --name <nomecontainer>

// limita a memoria ram do container
docker run -ti --memory 512m --name <nomecontainer> ubuntu /bin/bash
docker update -m 256m <alias nomecontainer>

// limita o uso de CPU do container
docker run -ti --cpu-shares 1024 --name <nomecontainer> ubuntu
docker update --cpu-shares 512 <nomecontainer>

// Sair do container

ctrl + p + q = Sair do container e mantem ele em execução
ctrl + d ou exit = Sair do container e parar a execução
```

### Parando a execução de um container

``` 
docker stop <idcontainer>
```

### Conectando a um Container em execucao

``` 
docker container attach <icontainer>
docker attach <id container>

// Caso seja um container de processo (nginx apache etc...) 
// Rodando como Daemon (em segundo plano)(não travar o shell)
docker container exec -ti <idcontainer> <comando>
docker container exec -ti <idcontainer> cd /var/www
```

### Criando um container mas sem executar

``` 
docker create <nomedaiamgem>
```

### Executando um Container

``` 
docker start <idcontainer>
```

### Reiniciando um Container

``` 
docker restart <idcontainer>
```

### Pausar um Container

``` 
docker pause <idcontainer>
```

### Despausar um Container

``` 
docker unpause <idcontainer>
```

### Verificando Consumo de Hardware do Container

``` 
docker stats <idcontainer>
docker container stats <idcontainer>
```

### Verificando Consumo dos Processos em Execucao no Container

``` 
docker top <idcontainer>
```

### Verificando os logs do Container

``` 
docker logs -f <idcontainer>
docker container logs -f <idcontainer>
```

### Remover um Container PARADO

``` 
docker rm <idcontainer>
docker container rm <idcontainer>
```

### Remover um Container EM EXECUCAO

``` 
// CUIDADO

docker rm -f <idcontainer>
docker container rm -f <idcontainer>
```

### Verificar configuracoes do Container

``` 
docker inspect <idcontainer>
docker container inspect <idcontainer>
```

   

### Verificar limite de memoria que o container pode utilizar

``` 
// 0 = sem limite

docker inspect <idcontainer> | grep -i mem
```

### Verificar limite de CPU que o container pode utilizar

``` 
docker inspect <idcontiner> | grep -i cpu
```

### Criando um volume

``` 
docker volume create <nomevolume>
```

``` 
docker run -ti -v </nomevolume> ubuntu /bin/bash

// pasta do volume no HOST (pc)
docker inspect 6a5330971daa -f {{.Mounts}}

// informações do volume
docker inspect <nomevolume>

// Criando um volume para uma pasta especifica
docker run -ti -v <caminho até a pasta no pc>:<nomepasta do container> ubuntu

// Criando um volume para armazenar apenas os volumes para serem compartilhados
docker create -v /data --name dbdados centos

// Utilizando volumes compartilhados de outro container
--volumes-from <nomevolume>
```

``` 
// Cria um volume do tipo bind
docker container run -ti --mount type=bind,src=/opt/giropops/,dst=/giropops debian

// somente leitura
docker container run -ti --mount type=bind,src=/opt/giropops/,dst=/giropops,ro debian

// utilizando volume em um container
docker container run -ti --mount type=volume,src=giropops,dst=/giropops debian
```

### Listando Volumes

``` 
docker volume ls
```

### Dockerfile

Dockerfile é um arquivo que contém as instruções e regras para o Docker saber como ele deverá montar uma imagem ou container.

``` 
// Comandos básicos de um Dockerfile

FROM debian // Imagem do Container

MAINTAINER Matheus Gomes // Pessoa responsável pela manutenção do Container

// Comando que será executado no container
RUN apt-get update && apt-get install apache2 && apt-get clean

// adicionando novo arquivo em um diretório especifico
ADD opa.txt /diretorio/

// comando que será executado no shell
CMD ["sh", "-c", "echo", "$HOME"]

// Descrição do container
LABEL Description="Bla balblabla"

// copia um arquivo para um diretório especifico
COPY opa.txt /diretorio/

// caso o apache caia, o container cai junto
ENTRYPOINT ["/usr/bin/apache2ctl", "-D", "FOREGROUND"]

// Configurando variavel de Ambiente
ENV meunome="Matheus Gomes" 

// Porta do container que será exposta 
EXPOSE 80 

// Usuario ROOT do container
USER matheus 

// Diretório principal do container
WORKDIR /diretorioPrincipal 

// Volume do container
VOLUME /diretorio 
```

### Executando Dockerfile e criando imagem

``` 
docker image build -t <nomeimagem>:1.0 . - (.) é o caminho do diretório do Dockerfile
```
