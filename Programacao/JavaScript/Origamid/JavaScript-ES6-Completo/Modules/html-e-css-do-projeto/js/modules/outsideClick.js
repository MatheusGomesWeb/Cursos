export default function outsideClick(element, eventos, callback) {

  const html = document.documentElement;
  const outside = 'data-outside';

  if (!element.hasAttribute(outside)) {

    eventos.forEach((eventos) => {
      setTimeout(() => {
        html.addEventListener(eventos, handleOutsideClick);
      }, 0)
    })
    element.setAttribute(outside, '');
  }

  function handleOutsideClick(event) {

    const haveElement = element.contains(event.target);

    if (!haveElement) {
      //element.classList.remove('active');
      element.removeAttribute(outside, '');
      eventos.forEach((eventos) => {
        html.removeEventListener(eventos, handleOutsideClick);
      })
      callback();
    }

  }

}