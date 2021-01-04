import animarNumeros from '../../../Efeitos-no-Dom/animar-numeros/animar-numeros.js';

export default async function animaisFetch() {

  async function fetchAnimais(url) {

    try {
      // faz a requisição e espera resolver a Promise
      const animaisResponse = await fetch(url);
      // espera converter os dados da promise (Resolve ou Reject)(then ou catch) para json
      const animaisJSON = await animaisResponse.json();

      animaisJSON.forEach(animal => {
        createAnimal(animal);
      });

      animarNumeros();
    } catch (erro) {
      console.log(erro);
    }

  }

  // cria um novo animal dinamicamente no DOM
  function createAnimal(animal) {

    const numerosGrid = document.querySelector('.numeros-grid');

    const animalElement = `
    <div class="numero-animal">
      <h3>${animal.specie}</h3>
      <span data-numero>${animal.total}</span>
    </div>
    `;

    numerosGrid.innerHTML += animalElement;
  }

  fetchAnimais('../../../JavaScript-Assincrono/animais-fetch/animais.json');
}