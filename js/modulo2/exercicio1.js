var id = 0;
function primeira02() {
    var bloco = document.createElement('div');
    bloco.setAttribute('class', 'blocao');
    bloco.setAttribute('onmouseover', 'segunda2(this)');
    bloco.setAttribute('id', "b"+ id);
    id++;
    
    var div = document.querySelector('#blocos');
    div.appendChild(bloco);

    bloco.style.backgroundColor = "red";
    bloco.style.width = 100;
    bloco.style.height = 100;
    bloco.style.margin = 5;
}