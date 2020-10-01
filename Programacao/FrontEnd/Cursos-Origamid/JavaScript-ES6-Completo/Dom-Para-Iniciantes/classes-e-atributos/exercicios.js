// Exercicios

// Adicione a classe ativo a todos os itens do menu

// selecionando todos os itens do menu
const menu = document.querySelectorAll('.menu ul li');

// adicionando a classe ativo

menu.forEach((item) => item.classList.add('ativo'));

// mostrando no console
console.log(menu);

// -----------------------------------------------

// Remova a classe ativo de todos os itens do menu e mantenha apenas o primeiro

// selecionand os itens do menu

const menuAtivo = menu;

// removendo a classe ativo, menos do primeiro item

menuAtivo.forEach((item, index) => {
  if (index !== 0) {
    item.classList.remove('ativo');
  }
});

// mostrando no console
console.log(menuAtivo);

// --------------------------------------

// Verifique se as imagens possui o atributo alt

// selecionando as imagens
const imagens = document.querySelectorAll('img');

// verificando se as imagens possui atributo alt
imagens.forEach((item) => (item.hasAttribute('alt') ? console.log(item, "Possui o atributo alt") : console.log("Não possui o atributo alt")));

// monstrando no console
console.log(imagens);

// --------------------------------

// Modifique o href do link externo do menu

// selecionando link externo

const linkExterno = document.querySelector('.menu ul li a[href*="origamid"]');

linkExterno.setAttribute('href', 'google.com');

console.log(linkExterno);