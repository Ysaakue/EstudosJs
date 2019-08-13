function terceira2() {
    var nomes = ["Diego", "Gabriel", "Lucas"];
    var target = document.getElementById('tres2');
    for(let nome of nomes) {
        var elemento = document.createElement('li');

        var text = document.createTextNode(nome);
        elemento.appendChild(text);

        target.appendChild(elemento);
    }
}