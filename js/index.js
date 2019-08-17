$('#textarea').keyup(function() {
    newHeight(this);
});
 
function newHeight(element) {
   if ( !$(element).prop('scrollTop') ) {
      do {
         var a = $(element).prop('scrollHeight');
         var b = $(element).height();
      
         $(element).height(b - 5);
      }
      while ( a && ( a != $(element).prop('scrollHeight') ) );
   };

   // Mude o valor + 30 para qualquer um que desejar.
   $(element).height($(element).prop('scrollHeight') + 1);
};

function tab_modulo1() {
   //Mudança de titulos
   $('.resultado h1').show();
   $('#AppToDo h1').hide();

   //Mostrar módulo 1
   $('#modulo01').show();
   $('#aba_modulo1').addClass("active");

   //Esconder o resto
   $('#modulo02').hide();
   $('#aba_modulo2').removeClass("active");

   $('#AppToDo').hide();
   $('#aba_App').removeClass("active");

   $('#modulo04').hide();
   $('#aba_modulo4').removeClass("active");
}

function tab_modulo2() {
   //Mudança de titulos
   $('.resultado h1').show();
   $('#AppToDo h1').hide();

   //Mostrar módulo 2
   $('#modulo02').show();
   $('#aba_modulo2').addClass("active");

   //Esconder o resto
   $('#modulo01').hide();
   $('#aba_modulo1').removeClass("active");

   $('#AppToDo').hide();
   $('#aba_App').removeClass("active");

   $('#modulo04').hide();
   $('#aba_modulo4').removeClass("active");
}

function tab_App() {
   //Mudança de titulo
   $('.resultado h1').hide();
   $('#AppToDo h1').show();

   //Mostrar App
   $('#AppToDo').show();
   $('#aba_App').addClass("active");

   //Esconder o resto
   $('#modulo01').hide();
   $('#aba_modulo1').removeClass("active");

   $('#modulo02').hide();
   $('#aba_modulo2').removeClass("active");

   $('#modulo04').hide();
   $('#aba_modulo4').removeClass("active");
}

function tab_modulo4() {
   //Mudança de titulos
   $('.resultado h1').show();
   $('#AppToDo h1').hide();

   //Mostrar módulo 2
   $('#modulo04').show();
   $('#aba_modulo4').addClass("active");

   //Esconder o resto
   $('#modulo01').hide();
   $('#aba_modulo1').removeClass("active");
   
   $('#modulo02').hide();
   $('#aba_modulo2').removeClass("active");

   $('#AppToDo').hide();
   $('#aba_App').removeClass("active");
}