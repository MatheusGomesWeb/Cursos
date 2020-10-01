/*
  Forms
    É comum utilizarmos inputs de formulários para criarmos uma interface entre funções de JavaScript e o usuário final do site.
      Para isso precisamos aprender como pegar os valores dos formulários.

      * document.forms - lista com os formulários
      * document.forms.contato - form com o nome contato
      * document.forms.contato.elements - elementos do formulário
      * document.forms[0].elements[0].value - valord o primeiro campo do formulário.
      
    Values
      a propriedade values retorna o valor do elemento do formulário.
        Se adicionarmos um callback ao keyup (tecla levantar), podemos ficar de olho
          no evento e puxar o valor sempre que ele mudar.
            change dispara quando houver mudanças.

    Validação
      O método checkValidity verifica se um input com o atributo required, é válido ou não.
        a propriedade validationMessage possui a mensagem padrão de erro do browser. 
          É possível modificar com setCustomValidity('');
    
    Pegando todos os valores
      Ao invés de selecionarmos elemento por elemento, podemos utilizar um objeto para colocarmos 
        todos os dados que o usuário colocar no formulário;      
*/

export default function forms() {

  const form = document.querySelector("#contato");
  const data = {};
  /*function handleKeyup(event) {
 
     if (event.target.checked) {
       event.target.nextElementSibling.innerText = "Selecionou";
     } else {
       event.target.nextElementSibling.innerText = "Não Selecionou";
     }
 
     document.body.style.backgroundColor = event.target.value;
 
   }*/
  function handleChange(event) {

    /*const evento = event.target;

    if (!evento.checkValidity()) {
      evento.setCustomValidity('Este campo é super importante !');
      evento.nextElementSibling.innerText = evento.validationMessage;
    }

    console.log(evento.nextElementSibling);

    console.log(event.target.value);*/

    data[event.target.name] = event.target.name;
    console.log(data);

  }

  const eve = ['change', 'keyup'];

  eve.forEach((evento) => form.addEventListener(evento, handleChange));

}