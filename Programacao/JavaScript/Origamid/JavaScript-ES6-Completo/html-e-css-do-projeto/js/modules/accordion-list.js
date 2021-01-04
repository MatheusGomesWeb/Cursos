// isolando a função accordion list
export default function accordionList() {
  // selecionando os dt
  // const accordionList = document.querySelectorAll('.js-accordion dt');
  const accordionDt = document.querySelectorAll('[data-accordion="js-accordion"] dt');
  const ativoClass = 'ativo';

  // adiciona a classe ativo ao elemento clicado
  function activeAcordion() {
    this.classList.add(ativoClass);
    this.nextElementSibling.classList.toggle(ativoClass);
  }

  // verifica se o elemento existe > 0
  if (accordionDt.length) {
    // inicia a pagina com o primeiro elemento ativado
    accordionDt[0].classList.add(ativoClass);
    accordionDt[0].nextElementSibling.classList.add(ativoClass);

    // percorre os dt e adiciona evento de click que executa a função activeAcordion
    accordionDt.forEach((item) => {
      item.addEventListener('click', activeAcordion);
    });
  }
} // endif
