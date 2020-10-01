# ESLint

ESLint é uma ferramenta que ajuda a evitar problemas no código, indica possíveis padrôes problemáticos no código. É muito útil para padronizar e manter a consistência entre diferentes códigos JavaScript.

## Instalação

### Instalar o ESLint globalmente

> npm install eslint -g

### Iniciar repositório NPM local

> npm init -y

### Iniciar ESLint

> eslint --init

### Executar ESLint

> eslint novearquivo.js
> ./node_modules/.bin/eslint

### Configuração do eslint

``` 
"extends": ["airbnb-base", "prettier"]
rules: {
  "no-console": 0 - desativa
}
```

### Instalar Prettier ESLINT para formatar código

> npm install --save-dev prettier-eslint
