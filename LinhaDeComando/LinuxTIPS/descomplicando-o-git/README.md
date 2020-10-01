# Descomplicando o Git

* [Instalando o Git](#instalando-o-git)
* [Configurando Usuário do Git](#configurando-usuario-do-git)
* [Iniciando um Repositório](#iniciando-um-repositorio)
* [Verificando se os arquivos estão sendo monitorados ou se foram modificados](#verificando-se-os-arquivos-estao-sendo-monitorados-ou-se-foram-modificados)
* [Adicionando arquivos para serem monitorados pelo Git](#adicionando-arquivos-para-serem-monitorados-pelo-git)
* [Removendo arquivos monitorados pelo Git](#removendo-arquivos-monitorados-pelo-git)
* [Dando commit nos arquivos](#dando-commit-nos-arquivos)
* [Enviando Repositório local para o repositório remoto](#enviando-repositorio-local-para-o-repositorio-remoto)
* [Clonando um repositório remoto](#clonando-um-repositorio-remoto)
* [Atualiza o repositório local com as mudanças do repositorio remoto](#atualiza-o-repositorio-local-com-as-mudancas-do-repositorio-remoto)
* [Verificando o histórico de commits (LOGS) do repositório](#verificando-o-historico-d-e-commits-do-repositorio)

## Instalando o Git

``` 
sudo apt get install git
```

## Configurando usuario do Git

``` 
git config --global user.name "Matheus"
git config --global user.email "matheusgomes1203@hotmail.com"

// editor de código padrão
git config --global core.editor vim 

// ferramenta que irá gerenciar o diff dos arquivos
git config --global merge.tool vimdiff

// Listando configurações do git
git config --list
```

## Iniciando um repositorio

``` 
git init
```

### Verificando se os arquivos estão sendo monitorados ou se foram modificados

``` 
git status
```

### Adicionando arquivos para serem monitorados pelo Git

``` 
git add *
```

### Removendo arquivos monitorados pelo Git

``` 
git checkout -- <nomearquivo>
```

### Dando Commit nos arquivos

``` 
git commit -m "Meu primeiro commit"
```

### Enviando repositorio local para o repositorio remoto

``` 
git push origin master
```

### Clonando um repositorio remoto

``` 
git clone linkrepo.git
```

### Atualiza o repositorio local com as mudancas do repositorio remoto

``` 
git pull
```

### Verificando o historico de commits do repositório

``` 
git log
git log -n 2
git log -p
```
