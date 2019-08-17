var botao = document.getElementById('04-segundo-botao');
var input = document.getElementById('04-segundo-input');
var lista = document.getElementById('repositorios')

botao.onclick = function buscarUser() {
    var user = input.value;
    input.value = '';

    var carregando = document.createElement('li');
    var carregandoText = document.createTextNode('Carregando...');

    carregando.appendChild(carregandoText);
    lista.appendChild(carregando)

    axios.get('http://api.github.com/users/'+ user + '/repos')
        .then(function(response) {
            lista.innerHTML = '';

            lista.style.listStyleType = 'disc';
            for(const repo of response.data){
                var newElement = document.createElement('li');
                var newElementText = document.createTextNode(repo.name);

                newElement.appendChild(newElementText);
                lista.appendChild(newElement)
            }
        })
        .catch(function(error) {
            lista.innerHTML = '';
            console.warn("error 404: User not found");

            var elementError = document.createElement('li');
            var elementErrorText = document.createTextNode("Usuario não encontrado");

            lista.style.listStyleType = 'none';

            elementError.appendChild(elementErrorText);
            lista.appendChild(elementError)
        });
}