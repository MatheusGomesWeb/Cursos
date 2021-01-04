/*
  History API
    È possível acessarmos o histórico de acesso do browser em uma sessão específica através do window.history().
      O objeto history possui diferentes métodos e propriedades.
*/

// altera no nome da URL do browser (nome do arquivo)
//window.history.pushState(null, null, 'contato.html');

// popstate: detecta se apertou no botao 'voltar' e 'avancar' do navegador
//window.addEventListener('popstate', () => console.log('Teste'));

// selecionando Links do menu
const links = document.querySelectorAll('a');


function handleClick(event) {

  // prevenir o padrao do browser, para não dar relod na pagina
  event.preventDefault();

  // deixando link ativo
  linkActive(event.target);

  // requisitando conteudo do arquivo
  fetchPage(event.target.href);

  // mudando URL
  window.history.pushState(null, null, event.target.href);
}

// consumir os dados do arquivo
async function fetchPage(url) {

  document.querySelector('.content').innerHTML = "Carregando...";
  // consome o arquivo
  const pageResponse = await fetch(url);

  // retorna o texto dentro do arquivo
  const pageText = await pageResponse.text();

  replaceContent(pageText);
}

// mudar conteudo
function replaceContent(newText) {

  // selecionando a div com o conteudo
  const newHtml = document.createElement('div');
  newHtml.innerHTML = newText;

  const oldContent = document.querySelector('.content');
  const newContent = newHtml.querySelector('.content');

  oldContent.innerHTML = newContent.innerHTML;

  document.title = newHtml.querySelector('title').innerText;
}

// deixar o link ativo
function linkActive(link) {

  // removendo active dos links não clicados
  links.forEach(link => {
    if (link.classList.contains('active')) {
      link.classList.remove('active');
    }
  })

  // adicionando active no link clicado
  link.classList.add('active');

}

// atualiza o conteudo ao voltar a pagina
window.addEventListener('popstate', () => {
  fetchPage(window.location.href);
});

// adicionando evento nos links
links.forEach(link => link.addEventListener('click', handleClick));