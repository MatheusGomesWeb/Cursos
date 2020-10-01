// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li

//const totalLi = ['li', 'li', 'li', 'li'];
const li = document.querySelectorAll('li');

/*for (const li of totalLi) {
  const element = document.createElement(li);
  element.classList.add('umaClasse');
  console.log(element);
}*/

for (const listLi of li) {
  listLi.classList.add('umaClasse');
  console.log(listLi);
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

for (const propriedades in window) {
  //console.log(propriedades, window[propriedades]);
}
