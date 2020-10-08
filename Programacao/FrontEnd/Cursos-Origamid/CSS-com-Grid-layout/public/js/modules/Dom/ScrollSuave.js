export default class ScrollSuave {
  constructor(links, options) {
    // seleciona todos os links do menu
    this.linksInternos = document.querySelectorAll(links);

    // caso não passe nada como argumento, ele utiliza propriedades pré definidas
    if (options === undefined) {
      this.options = { behavior: 'smooth', block: 'start' };
    } else {
      this.options = options;
    }

    // faz o eventListener referenciar a classe global e não a do escopo interno dele.
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  // faz o efeito de scroll até o elemento selecionado
  scrollToSection(event) {
    event.preventDefault();

    // pega o valor do href do link clicado
    const href = event.target.getAttribute('href');
    // pega o id da secao que vai dar o scroll (section#href do link)
    const section = document.querySelector(href);
    
    // faz o efeito de scroll suave, com as propriedades definidas no construtor
    section.scrollIntoView(this.options);
  }

  // adiciona o evento de click nos links do menu, para executar a funcao de scroll suave
  addEventLinks() {
    this.linksInternos.forEach((link) => link.addEventListener('click', this.scrollToSection));
  }

  // verifica se existe o link, e adiciona os eventos de click neles ao instanciar a classe.
  init() {
    if (this.linksInternos.length) {
      this.addEventLinks();
    }
    return this;
  }
}
