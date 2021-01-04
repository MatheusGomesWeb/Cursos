function $$(selectedElements) {

  const elements = document.querySelectorAll(selectedElements);

  // esconder
  function hide() {
    elements.forEach(element => {
      element.style.display = 'none';
    });
    return this;
  }

  // mostrar
  function show() {
    elements.forEach(element => {
      element.style.display = 'initial';
    });
    return this;
  }

  // events
  function on(onEvent, callback) {
    elements.forEach(element => {
      element.addEventListener(onEvent, callback);
    });
    return this;
  }

  // addClass
  function addClass(className) {
    elements.forEach(element => {
      element.classList.add(className);
    });
    return this;
  }

  // removeClass
  function removeClass(className) {
    elements.forEach(element => {
      element.classList.remove(className);
    });
    return this;
  }

  // toggleClass
  function toggleClass(className) {
    elements.forEach(element => {
      element.classList.toggle(className);
    });
    return this;
  }

  return {
    elements,
    hide,
    show,
    on,
    addClass,
    removeClass,
    toggleClass
  };
}

const btn = $$('button');

console.log(btn.hide());
console.log(btn.show());

//btn.addClass('ativo');
//btn.removeClass('comprar')
btn.toggleClass('ativo');

function handleClick(event) {
  console.log(event);
}
btn.on('click', handleClick);
