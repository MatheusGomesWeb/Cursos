export default function fetchAnimais() {
  async function send(url) {
    let result;
    try {
      const appendEl = document.querySelector('main.content');
      const loader = document.createElement('p');
      loader.setAttribute('data-loader', '');
      const span = document.createElement('span');
      loader.appendChild(span);
      appendEl.appendChild(loader);

      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      result = animaisJSON;
    } catch (erro) {
      result = erro;
      console.log(erro);
    }

    return result;
  }

  return send('./public/js/modules/Animais/animais.json');
}
