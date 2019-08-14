var lista = document.querySelector('#AppToDo ul');
var botao = document.querySelector('#AppToDo button');
var input = document.querySelector('#AppToDo input');

var ToDos = JSON.parse(localStorage.getItem('list_ToDos', )) || []

function renderTodos() {
    lista.innerHTML = '';

    for(todo of ToDos){
        var newTodo = document.createElement('li');
        var newTodoTex = document.createTextNode(todo + ' - ');
        var newLink = document.createElement('a');
        var newLinkText = document.createTextNode('Excluir');
        var pos = ToDos.indexOf(todo);

        newLink.setAttribute('href', '#');
        newLink.setAttribute('onClick', 'delToDo(' + pos + ')');
        
        newLink.appendChild(newLinkText);
        newTodo.appendChild(newTodoTex);

        newTodo.appendChild(newLink);

        lista.appendChild(newTodo);
    }
}

function delToDo(pos) {
    ToDos.splice(pos, 1);

    renderTodos();
    salvar();
}

function  addTodo(){
    ToDos.push(input.value);
    input.value = '';

    renderTodos();
    salvar();
};

function salvar() {
    localStorage.setItem('list_ToDos', JSON.stringify(ToDos));
}

botao.onclick = addTodo;

renderTodos();