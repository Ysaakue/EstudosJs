function ajudante() {
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', 'js/modulo2/script_exercicio2.js');
    
    var target = document.querySelector('body');
    target.appendChild(script);
}