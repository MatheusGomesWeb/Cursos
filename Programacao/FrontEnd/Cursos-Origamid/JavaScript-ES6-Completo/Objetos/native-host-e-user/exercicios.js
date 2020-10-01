// Liste 5 objetos Nativos
console.log(Object);
console.log(Array);
console.log(String);
console.log(Number);
console.log(Function);

// Liste 5 objetos de browser
console.log(NodeList);
console.log(HTMLCollection);
console.log(Document);
console.log(History);
console.log(Window);

// Liste 2 métodos, propriedades ou objetos presentes no Chrome que não existem no Firefox

webkitVisibilityState
adaptNode

// verificando se existe a propriedade no browser
if (document.webkitVisibilityState !== 'undefinided') {
  console.log('existe');
} else if (document.adaptNode !== 'undefinided') {
  console.log('existe');
} else {
  console.log('não existe');
}
