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
    $(element).height($(element).prop('scrollHeight') + 30);
 };
 
 newHeight($('#um'));
 newHeight($('#dois'));