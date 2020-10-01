// Width e Height
/* 
  Estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são ReadOnly
*/

// selecionando um elemento
const section = document.querySelector('.animais');

// Selecionando valor de Altura dos elementos (height), mesma coisa para largura(width)
console.log(section.clientHeight); // height + padding
console.log(section.offsetHeight); // height + padding + border
console.log(section.scrollHeight); // height total, mesmo dentro do scroll
console.log(section.offsetTop); // distancia do elemento até o topo da página
console.log(section.offsetLeft); // distancia do elemento, até o canto esquerdo da página
console.log(section.getBoundingClientRect()); // cria um objeto e tem acesso a atributos referente a largura, altura, distancia etc...

// WINDOW

console.log(innerHeight); // verifica o tamanho exato do site na tela do navegador
console.log(outerHeight); // verifica o tamanho total da tela do navegador
// mesma coisa para width (largura)

console.log(pageYOffset); // verifica no eixo Y ( altura) se o elemento psssou do scroll
console.log(pageXOffset); // verifica no eixo X (largura) se o elemento psssou do scroll

// matchMedia() - media queryes - objeto, possui atributos e metodos

// verifica o tamanho da tela do usuario, utilizando media queries do css no javascript.
const small = window.matchMedia('(max-width: 600px)');

// matches returna TRUE ou False
if (small.matches) {
  console.log("tela menor que 600");
} else {
  console.log('tela maior que 600');
}
