$(function(){
  $("#asterisco").click(function(){
    $('*').addClass('seleccionado');
  });
  $('#signoDeNumero').click(function(){
    $('#correo').addClass('seleccionado');
  });
  $('#campo').click(function(){
    $('.campo').addClass('seleccionado');
  });
  $('#selectorDiv').click(function(){
    $('div').addClass('seleccionado');
  });
  $('#selectorP').click(function(){
    $('p').addClass('seleccionado');
  });
  $('#selectorInput').click(function(){
    $('input').addClass('seleccionado');
  });
  $('#selectorDivP').click(function(){
    $('div p').addClass('seleccionado');
  });
})
