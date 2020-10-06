import fetchAnimais from '../Animais/fetchAnimais.js';
import AnimaNumeros from './AnimaNumeros.js';
import Modal from './Modal.js';
import AnimarAoScroll from './AnimarAoScroll.js';


export default class TabNav {
  constructor(tabMenu, tabContent) {
    // selecionando links do menu e o conteudo que irá aparecer
    this.tabMenu = document.querySelectorAll(tabMenu);
    this.tabContent = document.querySelectorAll(tabContent);

    // definindo tag indicando que está ativo, e animação
    this.dataActiveTab = 'data-activetab';
    this.dataAnimation = 'data-anime';
  }

  // percorrendo os links e os conteudos e adicionando as classes
  activeTab(index) {
    // percorrendo os conteudos e removendo a classe ativo para sumir todos
    this.tabContent.forEach((content) => content.removeAttribute(this.dataActiveTab));

    // adicionando classe active para o elemento clicado
    this.tabContent[0].setAttribute(this.dataActiveTab, '');
    this.tabContent[0].setAttribute(this.dataAnimation, '');

    // percorrendo todos os links e removendo a classe ativo
    this.tabMenu.forEach((link) => link.removeAttribute('data-tabactive'));
    // adicionando a classe ativo para adicionar borda e background do elemento clicado
    this.tabMenu[index].setAttribute('data-tabactive', '');

    // substitui os dados do DOM pelos dados do arquivo json de animais
    const animalContent = this.tabContent[0];

    fetchAnimais().then((response) => {
      // Desestruturando animais json
      const {
        nome, familia, blockquote, descricao: { destacado, principal },
      } = response[index];

      const {
        imagens: {
          imagem1: { url, alt, figcaption },
          imagem2: { url2, alt2, figcaption2 },
          imagem3: { url3, alt3 },
        },
      } = response[index];

      const {
        caracteristicas: {
          peso, age, surgiu, tipo, idadeMedia, pesoMachoAdulto, pesoFemeaAdulta,
          caracteristicasDescricao: { caracteristicasDescricao1, caracteristicasDescricao2 },
        },
      } = response[index];

      // Substituindo html do DOM pelos dados do arquivo de animais JSON

      const paginaMontada = `
      <!--main-->  
        <!--titulo-->
        <div class="titulo" data-anime>
          <h1>${nome}</h1>
          <span>${familia}</span>
        </div>
        <!--titulo-->
        
        <!--caracteristicas-->
        <div class="caracteristicas" data-anime>
          <div>
            <span class="numero" data-numero>${peso}</span>
            <span class="rotulo">kg</span>
          </div>
          <div>
            <span class="numero" data-numero>${age}</span>
            <span class="rotulo">age</span>
          </div>
        </div>
        <!--caracteristicas-->  

        <!--descricao-->
        <p class="col-wide" data-anime>${principal}</p>  
        <img src="${url}" alt="${alt}" class="imagem-1" data-modal data-anime>  
        <p class="destaque" data-anime>${destacado}</p>  
        <img src="${url2}" alt="${alt2}" class="imagem-2" data-modal data-anime>   
        <p data-anime>${figcaption}</p>  
        <p data-anime>${figcaption2}</p>
        <!--descricao-->  

        <!--citação-->
        <blockquote class="citacao col-wide" cite="#" data-anime data-scroll><q>${blockquote}</q></blockquote>
        <!--citação-->
  
        <!--atributos-list-->
        <ul class="atributos-list" id="caracteristicas" data-anime>
          <li>Surgiu: <span data-numero> ${surgiu} </span> anos</li>
          <li>Tipo: ${tipo}</li>
          <li>Idade Média: ${idadeMedia} anos</li>
          <li>Macho adulto: <span data-numero> ${pesoMachoAdulto} </span>kg</li>
          <li>Fêmea adulta: <span data-numero> ${pesoFemeaAdulta} </span>kg</li>
          <li>Família: ${familia}</li>
        </ul>
        <!--atributos-list-->
  
        <!--informacoes-->
        <div class="informacoes" data-anime>
          <p>${caracteristicasDescricao1}</p>
          <p> ${caracteristicasDescricao2}</p>
        </div>
        <!--informacoes-->
  
        <img src="${url3}" alt="${alt3}" class="col-wide imagem-3" id="imagem" data-modal data-anime data-scroll>
      <!--main-->     

      <!-- modal ANIMAIS -->
      <div class="modal">
        <div class="container">
          <span class="btnFechar">X</span>
          <figure>
            <div class="imagem"></div>
            <figcaption></figcaption>
          </figure>          
        </div>
      </div>
      <!-- modal -->
      `;

      animalContent.innerHTML = paginaMontada;

      // Animar os números
      const animarNumero = new AnimaNumeros('[data-numero]');
      animarNumero.init();

      // Modal nas Imagens (imagem que será clicada, botao de fechar, elemento container modal)
      const modal = new Modal('[data-modal]', '.modal .btnFechar', '.modal');
      modal.init();

      // Animar ao Scroll
      const animarAoScroll = new AnimarAoScroll('[data-scroll]');
      animarAoScroll.init();

      // continuar com os outros dados
    }).catch((erro) => {
      const errorElement = document.createElement('p');
      errorElement.textContent = `Erro ao carregar os dados: ${erro}`;
      animalContent.innerHTML = errorElement.innerHTML;
    });
  }

  // adiciona o evento de click e executa a active tab para aparecer o content
  addTabEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', (event) => {
        event.preventDefault();
        this.activeTab(index);
      });
    });
  }

  // inicia a classe
  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.activeTab(0);
      this.addTabEvent();
    }

    return this;
  }
}
