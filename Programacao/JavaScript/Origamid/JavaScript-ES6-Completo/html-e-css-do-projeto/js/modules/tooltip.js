export default function initTooltip() {
  const tooltip = document.querySelectorAll('[data-tooltip]');

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = `${event.pageY}20px`;
      this.tooltipBox.style.left = `${event.pageX}20px`;
    },
  };

  const onMouseLeave = {
    handleEvent() {
      this.tooltip.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    },
  };

  function criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;

    document.body.appendChild(tooltipBox);

    // console.log(tooltipBox);

    return tooltipBox;
  }

  function onMouseOver() {
    const tooltipBox = criarTooltipBox(this);

    onMouseLeave.tooltip = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);

    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', onMouseMove);
  }

  tooltip.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);
  });
}
