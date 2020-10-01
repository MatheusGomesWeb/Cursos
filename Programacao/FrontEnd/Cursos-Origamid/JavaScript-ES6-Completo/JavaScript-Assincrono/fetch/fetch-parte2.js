/*
  .blob()
      Um blob é um tipo de objeto utilizado para representação de dados de um arquivo.
        O blob pode ser utilizado para transformarmos requisições de imagens por exemplo.
          O blob gera um URL único.

   .clone()
      Ao utilizarmos os métodos acima, text, json e blob, a resposta é modificada.
        Por isso existe o método clone, caso você necessite transformar uma resposta em diferentes valores.
        
    .headers()
      È uma propriedade que possui os cabeçalhos da requisição. É um tipo de dado iterável então
        podemos utilizar o forEach para vermos cada um deles.

    .status e .ok
      Retorna o status da requisição. Se foi 404, 202, 200 e mais.
        ok retorna um valor booleano sendo true para uma requisição de sucesso e false para uma sem sucesso.
*/

const imagem = fetch('./imagem.jpg')
  .then(response => response.blob())
  .then(resp => {
    const url = URL.createObjectURL(resp);

    const imgDom = document.querySelector('img');

    imgDom.src = url;
    console.log(url);
  });

const arquivo = fetch('./arquivo.txt').then(response => {
  const clone = response.clone();

  const r = response.text();

  console.log(r);
});