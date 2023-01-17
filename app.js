const form = document.querySelector('#form1');
const btc = document.querySelector('#btc');

function validar() {
    const desabilitar = false;

    if(form.NOMBRE.value===''){
        desabilitar = true;
    }
    if(form.TELÉFONO.value===''){
        desabilitar = true;
    }
    if (desabilitar ===true){
        btc.desabled = true;
    }else{
        btc.desibled = false;
    }
}

form.addEventListener("keyup", validar)