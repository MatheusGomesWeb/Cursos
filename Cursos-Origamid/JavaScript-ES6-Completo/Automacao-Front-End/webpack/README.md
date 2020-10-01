# Webpack

Webpack é uma ferramenta do NodeJS que Agrupa / processa diversos arquivos e otimiza os mesmos. Ele suporta configurações complexas para diversos tipos de configurações.

Geralmente utilizado em modulos JavaScript para gerar arquivos compatível com navegadores antigos.

## Instalação

### Instala o webpack e o CLI localmente (necessario ter package.json antes)

> npm install --save-dev webpack webpack-cli

## Utilizando

### processa o arquivo e gera um novo arquivo convertido

> webpack ./arquivoInput.js --output ./bundler.js

### monitora alteração no arquivo 

> webpack ./arquivoInput.js --output ./bundler.js --watch

### Criando comando personalizado no package.json

### --mode production

Cria o arquivo final, sem espaços e convertido.

### --mode development

Cria o arquivo com comentarios, espaços etc...

``` 
// package.json
"scripts": {
  "build": "webpack --mode production ./arquivoInput.js --output ./bundler.js",
  "dev": "webpack --mode development ./arquivoInput.js --output ./bundler.js --watch"
}
```

### Utilizando

> npm run build

> npm run dev
