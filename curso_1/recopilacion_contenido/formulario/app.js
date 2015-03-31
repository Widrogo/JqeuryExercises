$(function(){
  $('#btnAgregarTelefono').click(function(){
    $('#telefonos').append('<div><input type="text" placeholder="otro."/><button class="borrarTelefono" onclick="eliminarTelefono(this);"><strong>X</strong></button></div>');
  });
  $('#btnEnviar').click(function(){
    var nombre = $('#nombre').attr('value');
    var apellido = $('#apellido').attr('value');
    $('<h1>'+ nombre + ' ' + apellido + '<br/> Gracias por su comentario</h1>').replaceAll('#formulario');
  });
});
function eliminarTelefono(telefono){
  $(telefono).parent().remove();
}
