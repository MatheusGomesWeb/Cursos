function initScrollSuave() {

  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector('section' + href);

    // offsetTop - pega a distancia do topo do elemento referente ao topo do site
    const distanciaTopo = section.offsetTop;

    // move o scroll (eixoX, eixoY)
    /*window.scrollTo({
      top: distanciaTopo,
      behavior: "smooth"
    });*/

    // outra forma - scrollIntoView()
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    console.log(href);
    console.log(section);
    console.log(section.offsetTop);
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });

}