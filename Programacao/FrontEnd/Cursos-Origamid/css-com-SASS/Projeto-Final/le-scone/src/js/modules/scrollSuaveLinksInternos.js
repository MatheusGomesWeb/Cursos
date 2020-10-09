export default function scrollSuaveLinksInternos(menu) {
  const menuLinks = document.querySelectorAll(menu);

  function scrollToSection(event) {
    event.preventDefault();

    const section = document.querySelector(event.target.getAttribute('href'));
    const distanciaTopo = section.offsetTop;

    if (section) {
      // section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.scrollTo({ top: (distanciaTopo - 50), left: 0, behavior: 'smooth' });
    }
  }

  function addEvents() {
    menuLinks.forEach((link) => link.addEventListener('click', scrollToSection));
  }

  if (menuLinks.length) {
    addEvents();
  }
}
