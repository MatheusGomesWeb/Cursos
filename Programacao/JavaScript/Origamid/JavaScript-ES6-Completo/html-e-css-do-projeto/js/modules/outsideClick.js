export default function outsideClick(element, eventos, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  function handleOutsideClick(event) {
    const haveElement = element.contains(event.target);

    if (!haveElement) {
      // element.classList.remove('active');
      element.removeAttribute(outside, '');
      eventos.forEach((evento) => {
        html.removeEventListener(evento, handleOutsideClick);
      });
      callback();
    }
  }

  if (!element.hasAttribute(outside)) {
    eventos.forEach((evento) => {
      setTimeout(() => {
        html.addEventListener(evento, handleOutsideClick);
      }, 0);
    });
    element.setAttribute(outside, '');
  }
}
