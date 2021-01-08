export default function initModal() {

  const abrir = document.querySelector('[data-modal="abrir"');
  const containerModal = document.querySelector('[data-modal="container"');
  const fechar = document.querySelector('[data-modal="fechar"');

  if (abrir && containerModal && fechar) {

    function toggleModal(event) {
      event.preventDefault();
      containerModal.classList.toggle('ativo');
    }

    /* function fecharModal() {
       containerModal.classList.remove('ativo');
     }*/

    function cliqueForaMoral(event) {

      if (event.target === this) {
        toggleModal(event);
      }

    }

    abrir.addEventListener('click', toggleModal);
    fechar.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', cliqueForaMoral);

  }

}
