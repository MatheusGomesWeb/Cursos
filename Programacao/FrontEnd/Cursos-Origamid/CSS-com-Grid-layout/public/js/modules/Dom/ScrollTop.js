import debounce from '../Helpers/debounce.js';

export default function ScrollTop(element) {

    const el = document.querySelector(element);
    const button = document.querySelector('[data-scroll-top]');

    if (el) {

        // adiciona evento de click ao botao
        button.addEventListener('click', () => {
            el.scrollIntoView({ block: "start", behavior: "smooth" });
        });

        // verifica o tamanho do scroll e mostra / remove botao
        function showButton() {
            if (pageYOffset > 800) {
                button.style.display = 'block';
            } else {
                button.style.display = 'none';
            }
        }

        // adiciona evento ao scroll e limita com debounce
        window.addEventListener('scroll', debounce(showButton, 100));
    }
}