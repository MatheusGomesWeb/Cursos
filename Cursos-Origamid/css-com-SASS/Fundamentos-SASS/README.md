# CSS com SASS

* [@import](#import)
  + [scss partials](#scss-partials)
* [Variáveis](#variaveis)
* [Nesting (Aninhamento)](#nesting)
  + [& Uppersend](#nesting)
  + [Nesting propriedades](#nesting-propriedades)
* [Mixin](#mixin)
  + [@content](#content)
* [Extend](#extend)
* [Operadores](#operadores)
* [Condicionais](#condicionais)
* [Funções](#funcoes)
* [Loop](#loop)

___

## import

Importa o conteudo do arquivo para dentro do arquivo que está importando

``` 
@import "arquivo.scss" ou "arquivo"
```

### scss partials

Caso o arquivo tenha um _ (underline) na frente, o sass irá importar somente o conteudo do arquivo para dentro do arquivo que está importando, e não irá gerar arquivo novo, que iria pesar nas requisições http.

``` 
style.scss - importa os arquivos 
  _partes.scss - scss partials
```

**Em projetos Frontend, é recomendado utilizar um arquivo principal que importa todos os scss partials para manter uma organização.**

___

## Variaveis

As variáveis nos ajudam na consistência do site, criando um local único de armazenamento de uma informação, como por exemplo: 

* cor principal de paragrafos
* fontes principais etc.

As variáveis nos ajudam na manutenção do site, porque só precisamos alterar em um local específico. 

**Sem elas, precisaríamos percorrer todo o código e alterar em varios locais**

``` 
$cor-principal: #fff;
$fonte-principal: "Arial";
```

``` 
p {
  color: $cor-principal;
  font-family: $fonte-principal;
}
```

___

## Nesting

O Nesting (aninamento) nos dá a capacidade de colocar uma tag css dentro da outra, e ao final do processamento gerar tags encadeadas (pai e filhas) que nos ajudam na organização e leitura do código css. Exemplo:

``` 
header {
  color:red;

  nav {
    background: yellow;
  }
}
```

``` 
// código final css
header {
  color: red;
}

header nav {
  background: yellow;
}
```

### & Nesting

o operador & serve para grudar uma tag dentro do Nesting, para tags que precisam ser grudadas. exemplo:

``` 
a {
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
```

``` 
// css final
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
```

### Nesting propriedades

É possível encadear propriedades que começem com o mesmo nome, e reduzir a sintax do código.

``` 
div {
  font: {
    family: "Arial";
    size: 20px;
    style: italic;
  }
}
```

``` 
// css final
div {
  font-family: "Arial";
  font-size: 20px;
  font-style: italic;
}

```

**É recomendado colocar no máximo 3 Nesting (aninamento) por seção, para manter um código legível e de fácil entendimento**

___

## Mixin

È bem parecido com função, agrupa uma lista de propriedades css, onde podemos agrupar elementos que se repetem no site, e reaproveitar ele em vários lugares. 

É possível passar varios parâmetros no nesting, basta separar por virgula, 
também é possível passar valores padrão nos parâmetros do mixins, para caso não seja passado nada no argumento ele coloque o valor no lugar.

Exemplo

``` 
parâmetro... - são parâmetros que passam varias propriedades separadas por virgula (,)

@mixin botao-grande($color, $background: blue, $boxShadow...: rgba(0,0,#fff, 0,0,#000)) {
  width: 200px;
  height: 50px;
  background: $background;
  color: $color;
  box-shadow: $boxShadow;
}
```

``` 
// utilizando
button {
  @include botao-grande(#000);
}
```

``` 
// css final
button {
  width: 200px;
  height: 50px;
  background: blue;
  color: #000;
  box-shadow: rgba(0,0,#fff, 0,0,#000);
}
```

### content

O @content, serve para colocarmos um bloco de código dentro de o estilo de uma tag, exemplo: 

``` 
@mixin mobile {
  @media(max-width: 600px) {
    @content
  }
}
```

``` 
h1 {
  @include mobile {
    font-size: 10px;
  }
}
```

___

## Extend

Reaproveita as propriedades de outro elemento, porém ele cria uma nova linha com o elemento atual, e o elemento extendido separados por vírgula.

**Não é recomendado utilizar, pode gerar erros no estilo do site e códigos gigantes e desorganizados**

___

## Operadores

Utilizado para somar valores, automaticamente, como por exemplo somar o tamanho da fonte com outro numero.

* adicao: font-size: 16px + 10; 
* subtração font-size: 16px - 10; 
* multiplicação font-size: 16px * 10; 
* divisão font-size: 16px / 10; 

Também é possível somar o hexadecimal das cores, #fff + #000

___

## Condicionais

Cria condicionais IF... ELSE para alterar determinadas propriedades de acordo com o condicional. 
Tambem podemos colocar maior (>) e menor (<) para condicionais.

``` 
$tema: preto;
$primary-color: black;

@if $tema == azul {
$primary-color: blue;
} @else if $tema == deserto {
  $primary-color: orange;
}
```

___

## Funçoes

O SASS por padrão fornece algumas funcôes para nos ajudar no desenvolvimento.

* lighten - clareia a cor
* darken - escureçe a cor
* transparentize - aplica transparencia (rgba(0, 0, 0, .5))

``` 
$roxo: purple;

div {
  background: lighten($roxo, 20%);
}
```

``` 
@function nomefuncao(param, param) {
  @return round();
}

nomefuncao(param, param);
```

## Loop

### For

``` 
@form $i from 1 throught 6 {
  .item-#{$i} {
    width: 100px + $i;
  }
}

.item-1{width:100px}
.item-2{width:200px}
.item-3{width:300px}
.item-4{width:400px}
.item-5{width:500px}
.item-6{width:600px}
```

### While

``` 
$i: 1;
@while $i <= 6 {
  logica
}
```

### @each (forEach)

``` 
$item: face twi test;
@each $item in $list {
  logica;
}

```
