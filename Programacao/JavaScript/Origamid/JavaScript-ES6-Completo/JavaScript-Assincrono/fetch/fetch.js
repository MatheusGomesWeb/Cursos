/*
  Fetch API ( Browser )
    Permite fazermos requisições HTTP através do método fetch().
      Este método retorna a resolução de uma Promise. Podemos então utilizar
        o then() para interagirmos com a resposta, que é um objeto do tipo Response.

  Response
    O objeto Response, possui um corpo com o conteúdo da resposta. 
      Esse corpo pode ser transformado utilizando métodos do protótipo do objeto Response. 
        Estes retornam outras promises.  
        
    Servidor Local
      o fetch faz uma requisição HTTP/HTTPS. Se você iniciar um site local diretamente pelo 'index.html',
        sem um servidor local, o fetch não irá funcionar.

  JSON
    Um tipo de dados muito utilizado com JavaScript é o JSON (JavaScript Object Notation). 
      Pelo fato dele possuir basicamente a mesma sintaxe que a de um objeto js. 
      
      * .json() transforma um corpo em json em um objeto JavaScript.

   .text()
      Podemos utilizar o .text() para diferentes formatos como txt, json, html, css e mais...       
*/

const doc = fetch('./arquivo.txt').then(response => {
  return response.text();
}).then(corpo => corpo)
  .then(texto => {
    document.body.innerHTML = texto + '<br>';
  });

const json = fetch('./arquivo.json')
  .then(response => response.json())
  .then(resp => resp)
  .then(resp => {
    document.body.innerText += resp.nome;
  });


const injectCss = fetch('./style.css').then(response => response.text())
  .then(bodyCss => {
    const style = document.createElement('style');
    style.textContent = bodyCss;

    document.body.appendChild(style);
    console.log(bodyCss);
  });