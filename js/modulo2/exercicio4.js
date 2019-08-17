function quarta2() {
    var nome = document.querySelector('input[name=nome]').value;
    document.querySelector('input[name=nome]').value = '';
    var target = document.getElementById('tres2');
    
    var elemento = document.createElement('li');
    var text = document.createTextNode(nome);
    
    elemento.appendChild(text);
    target.appendChild(elemento);
}