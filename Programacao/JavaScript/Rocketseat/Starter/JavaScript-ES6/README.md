## Configurando Babel

**babel**: transforma o codigo javascript moderno( ES6, ES7, ES8 etc...) para o javascript que funciona em todos os navegadores

**.babelrc** - arquivo config do babel

``` 
 "scripts": {
    "dev": "babel ./main.js -o ./bundle.js -w"
  }
 ```

* **-w**: monitora o arquivo que ao ser modificado converte automaticamente

``` 
 {
    "presets": ["@babel/preset-env"],
    "plugins": ["@babel/plugin-proposal-object-rest-spread"]
}
 ```

**presets**: o babel reconhece o ambiente de desenvolvimento que estamos trabalhando
**plugins**: plugins do babel

### instalar babel

``` 
yarn add @babel/cli
```

``` 
yarn add @babel/preset-env
```

``` 
yarn add @babel/core
```

## Operadores REST - SPREAD

Necessario instalar o plugin do babel porque ele ainda não reconhece como sintax oficial do javascript novo

``` 
yarn add @babel/plugin-proposal-object-rest-spread
```

## Webpack

Webpack é um serviço onde podemos trabalhar com varios arquivos Javascript separados e ele converte todos eles em apenas um arquivo '**bundle.js**'.

``` 
yarn add webpack webpack-cli -D
```

**webpack.config.js** - arquivo de configuração do webpack

``` 
module.exports = {
    entry: './src/modulo2/main.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: __dirname + '/public'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};
```

``` 
yarn add babel-loader@8.0.0-beta.0 -D
```

**executando webpack**

``` 
"webpack --mode=development -w"
```

**Webpack dev server**

```
yarn add webpack-dev-server -D
```

```
 "scripts": {
    "dev": "webpack-dev-server --mode=development",
    "build": "webpack --mode=production"
  }
```

## Asyc, Await

Trabalhar com javascript de forma assincrona

** Plugin para o babel converter async await **

```
yarn add @babel/plugin-transform-async-to-generator -D
```
```
yarn add @babel/polyfill -D
```


## Configurando Axios

```
yarn add axios
```