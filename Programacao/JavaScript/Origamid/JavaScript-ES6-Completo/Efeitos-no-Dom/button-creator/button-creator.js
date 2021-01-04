export default function buttonCreator() {

  // selecionando os elementos
  const controles = document.querySelector('#controles');
  const cssText = document.querySelector('.css');
  const btn = document.querySelector('.btn');

  // objeto que armazena o elemento que será alterado, e os métodos para alterá-lo
  const handlestyle = {

    element: btn,

    texto(value) {
      this.element.textContent = value;
    },
    color(value) {
      this.element.style.color = value;
    },
    backgroundColor(value) {
      this.element.style.backgroundColor = value;
      console.log('mudou bg');
    },
    width(value) {
      this.element.style.width = value + 'px';
    },
    height(value) {
      this.element.style.height = value + 'px';
      console.log('modou height');
    },
    border(value) {
      this.element.style.border = value;
    },
    borderRadius(value) {
      this.element.style.borderRadius = value + 'px';
    },
    fontFamily(value) {
      this.element.style.fontFamily = value;
    },
    fontSize(value) {
      this.element.style.fontSize = value + 'rem';
    }
  };

  // mostra o css na tela
  function showCss() {
    cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>');
  }

  // salvando os dados no localStorage
  function saveOnLocalStorage(name, value) {
    localStorage[name] = value;
  }

  function setValues() {
    const properties = Object.keys(localStorage);

    properties.forEach((propertie) => {
      handlestyle[propertie](localStorage[propertie]);
      controles.elements[propertie].value = localStorage[propertie];
    });

    showCss();
  }

  setValues();

  function handleChange(event) {

    const name = event.target.name;
    const value = event.target.value;

    handlestyle[name](value);

    saveOnLocalStorage(name, value);

    showCss();
  }

  controles.addEventListener('change', handleChange);

}