// Todo objeto herda de Object, que é nativo do JavaScript

// Declarando um objeto
const menu = {
  width: 800,
  height: 40,
  // declarando método
  getBgColor() {
    // this: faz referencia ao próprio objeto
    return this.backgroundColor;
  }
}

// adicionando atributos ao objeto
menu.backgroundColor = "#fff";
menu.color = "#000";

// imprimindo valores do objeto
console.log(menu.color);

// imprimindo utilizando o método
console.log(menu.getBgColor());