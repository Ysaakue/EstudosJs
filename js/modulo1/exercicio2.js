// require('../index');

function segunda() {
    var target = document.querySelector('#dois');

    function pares(x, y) {
        if(x>y){
            var maior=x,menor=y;
        } else {
            var maior=y,menor=x;
        }

        var retorno = [];

        if( menor % 2 != 0) menor++;

        while( menor < maior ){
            retorno.push(menor);
            menor+=2
        }

        return retorno;
    }

    var resultado = pares(32, 321);

    target.value = resultado;

    newHeight(target);
}