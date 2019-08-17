var botao = document.getElementById('04-primeiro-botao');
var input = document.getElementById('04-primeiro-input');

function checaIdade(idade) {
   return new Promise(function(resolve, reject) {
        setTimeout( function(){
            if(idade > 18){
                resolve("Maior que 18");
            } else {
                reject("Menor que 18");
            }
        }, 2000);
    });
}
    
botao.onclick = function() {
    var idade = parseInt(input.value, 10);

    checaIdade(idade)
       .then(function(response) { console.log(response); })
       .catch(function(error) { console.warn(error); })
}
