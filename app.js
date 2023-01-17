var nombre = document.getElementById('NOMBRE');
var telefono = document.getElementById('TELÉFONO');
var error = document.getElementById('error');
error.style.color = 'red';

function Mymensaje(){
    console.log('Contratando...');

    var mensajeError = [];

    if(nombre.value===null||nombre.value===''){
        mensajeError.push('Ingrese su nombre');
    }
    if(telefono.value===null||telefono.value===''){
        mensajeError.push('Ingrese su teléfono ');
    }
    error.innerHTML = mensajeError.join(', ');

    return false;
}