# Webpack e Babel

## Instalação

Iniciar um pacote mínimo na pasta do projeto

```
npm init -y
```

Instalar webpack, webpack-cli (command line interface) e webpack dev server(servidor de desenvolvimento no navegador) e salvando como dev dependencies

```
npm install webpack webpack-cli webpack-dev-server --save-dev
```

---

## Instalando React e React-dom

React é o framework em si, e o React-dom é a biblioteca para manipulação do DOM do navegador, eles são independentes.

```
npm install react react-dom
```

---

## Instalando Babel

Instalar @babel/core, @babel/preset-react e babel-loader

```
npm install @babel/core @babel/preset-react babel-loader --save-dev
```

---

## Loaders (CSS)

```
npm install style-loader css-loader --save-dev
```

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

```
