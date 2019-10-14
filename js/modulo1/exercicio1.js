// require('../index');

function primeira01() {
   // selecionandoo elemento com id 'um' 
   var target = document.querySelector('#um');
   // montando o objeto endereço
   var endereco = {
      rua: "Rua dos pinheiros",
      numero: 1293,
      bairro: "Centro",
      cidade: "São Paulo",
      uf: "SP"
      };
   //montando string concatenando com os dados do objeto endereço
   var resultado = 'O usuário mora em '+ endereco.cidade + ' / ' + endereco.uf + ', no bairro' + endereco.bairro +', na rua "'+ endereco.rua +'" com nº ' + endereco.numero;
   //colocando a string resultado como valor do campo selecionado pelo id no inicio
   target.value = resultado;

   newHeight(target);
}
