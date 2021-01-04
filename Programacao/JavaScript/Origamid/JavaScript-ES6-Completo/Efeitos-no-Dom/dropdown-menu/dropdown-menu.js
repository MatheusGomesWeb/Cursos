export default function initDropdownMenu() {

  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

  dropdownMenus.forEach((item) => {

    ['touchstart', 'click'].forEach((userEvent) => {
      item.addEventListener(userEvent, handleClick);
    });

  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active');

    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active');
    });
  }

  function outsideClick(element, eventos, callback) {

    const html = document.documentElement;
    const outside = 'data-outside';

    if (!element.hasAttribute(outside)) {

      eventos.forEach((eventos) => {
        html.addEventListener(eventos, handleOutsideClick);
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
}