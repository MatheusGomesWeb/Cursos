export default function initBitcoinsFetch() {
  function bitcoinsFetch(url) {
    /* const bitcoinResponse = await fetch(url);
    const bitcoinJSON = await bitcoinResponse.json(); */

    fetch(url).then((bitcoinResponse) => bitcoinResponse.json())
      .then((bitcoinJSON) => {
        const btcElement = document.querySelector('.btc-preco');

        btcElement.textContent = (1000 / bitcoinJSON.BRL.buy).toFixed(4);
      }).catch((erro) => console.log(Error(erro)));
  }

  bitcoinsFetch('https://blockchain.info/ticker');
}
