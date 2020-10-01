# Babel

O Babel é uma ferramenta do NodeJS, que tranforma código JavaScript moderno em código suportado por navegadores antigos.

## Polyfill vs Transpiler

### Polyfill

Cria métodos / funções com o mesmo nome das atuais, porém utilizando código antigo para permitir o uso em browsers que não possuem a API.

### Transpiler

Transforma código novo em código antigo. Ou seja, transforma **const** em **var**

## Instalação

### core do babel, cli - comando line interface, preset-env - configurações padrão do babel

> npm install --save-dev @babel/core @babel/cli @babel/preset-env
> npm install --save-dev @babel/polyfill

## Utilizando Webpack com o Babel

``` 
module.exports = {
  entry: ['@babel/polyfill', './bundle.js'],
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'main.js',
  },
};
```
