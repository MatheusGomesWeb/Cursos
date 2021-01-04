export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

  function outsideClick(element, eventos, callback) {
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
        html.addEventListener(evento, handleOutsideClick);
      });
      element.setAttribute(outside, '');
    }
  }

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active');

    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active');
    });
  }

  dropdownMenus.forEach((item) => {
    ['touchstart', 'click'].forEach((userEvent) => {
      item.addEventListener(userEvent, handleClick);
    });
  });
}
