// require('../index');

function terceira() {
    var target = document.querySelector('#tres');

    function temHabilidade(skills) {
        if(skills.indexOf("Javascript") != -1) return true;
        else return false; 
    }

    var skills = ["Javascript", "ReactJS", "React Native"];
    var resultado = temHabilidade(skills); // true ou false

    target.value = resultado;

    newHeight(target);
}