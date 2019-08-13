// require('../index');

function quinta() {
    var target = document.querySelector('#cinco');

    function listar(lista){
        var resultado = [];
        for(let usuario of lista){

            resultado.push("O " + usuario.nome + " possui as habilidades: " + usuario.habilidades.join(' ,'));
        }
        return resultado;
    }

    var usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
    ];

    var resultado = listar(usuarios);

    target.value = resultado.join('\n');

    newHeight(target);
}