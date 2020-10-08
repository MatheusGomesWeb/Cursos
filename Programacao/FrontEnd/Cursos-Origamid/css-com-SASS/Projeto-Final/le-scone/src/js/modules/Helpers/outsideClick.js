export default function outsideClick(element, eventos, callback) {
  const html = document.documentElement;

  // verifica se o elemento clicado é filho do menu e fecha caso não seja
  function handleOutsideClick() {
    html.addEventListener(eventos, (event) => {
      if (!element.contains(event.target) && !event.target.hasAttribute('data-mobileButton')) {
        setTimeout(() => callback());
      }
    });
  }
  // executa o callback e remove o evento do documentElement
  handleOutsideClick();
  html.removeEventListener(eventos, handleOutsideClick);
}
