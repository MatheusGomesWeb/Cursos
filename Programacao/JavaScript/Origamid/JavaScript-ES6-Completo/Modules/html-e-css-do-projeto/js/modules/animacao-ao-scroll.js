// adicionando classe para animar scroll nas seções
export function addClassScroll() {

  // selecionando todas as seções
  const section = document.querySelectorAll('section.grid-section');

  // percorrendo as seções e adicionando a classe para animar
  section.forEach((secao) => {
    //secao.classList.add('js-scroll');
    secao.dataset.scroll = "js-scroll";
  });

}

export default function animacaoAoScroll() {
  // selecionando as seções que possuem a classe js-scroll
  //const sectionJsScroll = document.querySelectorAll('section.js-scroll');
  const sectionJsScroll = document.querySelectorAll('[data-scroll="js-scroll"');

  if (sectionJsScroll) {
    const metadeTela = window.innerHeight * 0.6;

    // função anima scrolll
    function animaScroll() {
      sectionJsScroll.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - metadeTela;

        if (sectionTop < 0) {
          section.classList.add('ativo');
        } else if (section.classList.contains("ativo")) {
          section.classList.remove('ativo');
        }

        //console.log(section, sectionTop);

      })
    }

    // executando ao carregar a pagina
    animaScroll();

    // adicionando evento no objeto window
    //window.addEventListener('load', animaScroll);
    window.addEventListener('scroll', animaScroll);

  } // endif

}