$(function(){
    $('#vermelho').click(function(){
        $('h1,h2,p').css("color", "red");
    });

    $('#azul').click(function(){
        $('h1,h2,p').css("color", "blue");
    });

    $('#verde').click(function(){
        $('h1,h2,p').css("color", "green");
    });

    $('#rest-cor').click(function(){
        $('h1,h2,p').css("color", "rgb(0,0,0)");
    });

    $('#12').click(function(){
        $('p').css("font-size", "12px");
    });

    $('#14').click(function(){
        $('p').css("font-size", "14px");
    });

    $('#16').click(function(){
        $('p').css("font-size", "16px");
    });

    $('#18').click(function(){
        $('p').css("font-size", "18px");
    });

    $('#rest-tam').click(function(){
        $('p').css("font-size", "16px")
    });

    $('#padrao').click(function(){
        $('h1,h2,p').css("color", "rgb(0,0,0)");
        $('p').css("font-size", "16px");
    });
});