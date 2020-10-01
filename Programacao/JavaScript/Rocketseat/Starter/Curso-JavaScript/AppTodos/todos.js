var el = document.querySelector("#app ul");
var inputEl = document.querySelector("#app input");
var btnEl = document.querySelector("#app button");

var todos = JSON.parse(localStorage.getItem('meus_todos')) || [];

// carregar a lista
function renderTodos() {

    el.innerHTML = "";

    for (todo of todos) {
        var elTodo = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkEl = document.createElement('a');
        linkEl.setAttribute('href', '#');
        var linkTxt = document.createTextNode('Excluir');

        var pos = todos.indexOf(todo);
        linkEl.setAttribute('onclick', 'excluirTodo(' + pos + ')');

        linkEl.appendChild(linkTxt);
        elTodo.appendChild(todoText);
        elTodo.appendChild(linkEl);

        el.appendChild(elTodo);

    }

}

renderTodos();

// adicionar item na lista
function addTodo() {
    var todoText = inputEl.value;

    todos.push(todoText);

    inputEl.value = "";

    renderTodos();
    saveToStorage();
}

btnEl.addEventListener('click', function () {
    addTodo();
});

// excluir item da lista
function excluirTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
}

// saveToStorage
function saveToStorage() {
    localStorage.setItem('meus_todos', JSON.stringify(todos));
}