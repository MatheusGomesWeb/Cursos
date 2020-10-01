function ScrollSuave(navLink, btnTop) {

  const navLinks = document.querySelectorAll(navLink);
  const btnScrollTop = document.querySelector(btnTop);

  function scrollToSection(event) {
    event.preventDefault();

    // const section = document.querySelector('section' + event.target.hash);
    // const section = document.querySelector(event.target.getAttribute('href'));
    const section = document.querySelector(this.getAttribute('href'));

    section.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }

  function scrollTop(event) {
    event.preventDefault();

    if (btnScrollTop) {
      document.querySelector('nav').scrollIntoView({ block: 'start', behavior: 'smooth' });
    }

  }
  function addEvents() {
    if (navLinks.length) {
      navLinks.forEach((link) => link.addEventListener('click', scrollToSection));
    }

    btnScrollTop.addEventListener('click', scrollTop);
  }

  return addEvents();
}

ScrollSuave('nav li a', '.scrollTop');