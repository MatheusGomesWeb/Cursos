/*
  HTMLElement
    Todo elemento HTML do DOM herda propriedades e métodos do construtor HTMLElement.
*/

/* 
  Dataset
    é uma propriedade de HTMLElement, essa propriedade é um objeto do tipo DOMStringMap.
      Dentro desse objeto existe uma coleção chave / valor, com todos os atributos do elemento html
        que começarem com data-.

   Data-atributes
    Os atributos e valores que começarem com data- , poderão ser utilizados
      como forma de configuração de plugins e interações DOM/JS.

  Data- vs Class
    A vantagem de utilizar data atributes é que torna mais fácil evitarmos conflitos com estilos CSS.
      Além de deixar a estrutura da tag mais organizada.

  Nomenclatura
    Por padrão o JavaScript não aceita - (traço) como caractere válido
      para nomear propriedades. Então qualquer traço será removido e a letra seguinte 
        transformada em maiúscula.
*/

const data = document.querySelector('div');

data.dataset.titulo = "sobrescrevendo";

delete data.dataset.titulo;

console.log(data.dataset.titulo);
console.log(document.querySelector("[data-wrapper='200']"));