import debounce from '../Helpers/debounce.js';

export default class Tooltip {
  constructor(element) {
    this.element = element;

    this.createTooltip = debounce(this.createTooltip.bind(this), 100);
    this.removeTooltip = debounce(this.removeTooltip.bind(this), 20);

    this.removeTooltipOutside = debounce(this.removeTooltipOutside.bind(this), 20);
  }

  // Cria uma div com o tooltip
  createTooltip(event) {
    this.toolTipBox = document.createElement('div');

    this.toolTipBox.innerText = (event.target.alt !== undefined ? event.target.alt : this.toolTipBox.style.display = 'none');
    this.toolTipBox.style.color = '#fafbfc';
    this.toolTipBox.style.position = 'absolute';
    this.toolTipBox.style.display = (event.target.alt !== undefined ? 'block' : 'none');
    this.toolTipBox.style.left = `${event.target.offsetLeft + 20}px`;
    this.toolTipBox.style.top = `${event.target.offsetTop - 35}px`;
    this.toolTipBox.style.backgroundColor = '#8844ee';
    this.toolTipBox.style.maxWidth = `${event.target.width}px`;
    this.toolTipBox.style.padding = '7px';
    this.toolTipBox.style.borderRadius = '15px';
    this.toolTipBox.style.textAlign = 'center';
    this.toolTipBox.animate([
      { opacity: 0 },
      { opacity: 1 },
    ],
    {
      duration: 400,
    });

    event.target.parentNode.appendChild(this.toolTipBox);

    event.target.setAttribute('data-tooltip', '');
  }

  // Remove o tooltip ao hover do mouse no elemento
  removeTooltip(event) {
    if (this.toolTipBox) {
      this.toolTipBox.style.display = 'none';
      this.removeTooltipOutside(event);
    }
  }

  // Remove o tooltip ao hover do mouse fora do elemento
  removeTooltipOutside(event) {
    if (!event.target.hasAttribute('data-tooltip')) {
      if (this.toolTipBox) {
        this.toolTipBox.style.display = 'none';
      }
    }
  }

  // adiciona os eventos aos elementos
  addEvent() {
    this.element.forEach((el) => el.parentNode.addEventListener('mouseover', this.createTooltip));
    this.element.forEach((el) => el.parentNode.addEventListener('mouseout', this.removeTooltip));

    document.documentElement.addEventListener('mouseover', this.removeTooltipOutside);
  }

  // inicia a classe
  init() {
    if (this.element.length) {
      this.addEvent();
    }
  }
}
