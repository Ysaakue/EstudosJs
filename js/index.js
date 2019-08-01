$(function DocumentReady(){
    $('#vermelho').click(function MudaCorVermelho(){
        $('h1,h2,p').css("color", "red");
    });

    $('#azul').click(function MudaCorAzul(){
        $('h1,h2,p').css("color", "blue");
    });

    $('#verde').click(function MudaCorVerde(){
        $('h1,h2,p').css("color", "green");
    });

    $('#rest-cor').click(function RestauraCor(){
        $('h1,h2,p').css("color", "rgb(0,0,0)");
    });

    $('#12').click(function MudaFonte12(){
        $('p').css("font-size", "12px");
    });

    $('#14').click(function MudaFonte14(){
        $('p').css("font-size", "14px");
    });

    $('#16').click(function MudaFonte16(){
        $('p').css("font-size", "16px");
    });

    $('#18').click(function MudaFonte18(){
        $('p').css("font-size", "18px");
    });

    $('#rest-tam').click(function RestauraFonte(){
        $('p').css("font-size", "16px")
    });

    $('#padrao').click(function RestauraPadroes(){
        $('h1,h2,p').css("color", "rgb(0,0,0)");
        $('p').css("font-size", "16px");
    });

    $('#imagem1').click(function Slideshow1(){
        $('#img1').show();
        $('#img2').hide();
        $('#img3').hide();
        $('#img4').hide();
    });

    $('#imagem2').click(function Slideshow2(){
        $('#img2').show();
        $('#img1').hide();
        $('#img3').hide();
        $('#img4').hide();
    });

    $('#imagem3').click(function Slideshow3(){
        $('#img3').show();
        $('#img1').hide();
        $('#img2').hide();
        $('#img4').hide();
    });

    $('#imagem4').click(function Slideshow4(){
        $('#img4').show();
        $('#img1').hide();
        $('#img2').hide();
        $('#img3').hide();
    });
});