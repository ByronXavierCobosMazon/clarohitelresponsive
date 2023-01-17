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

const form2 = document.querySelector('#form2');
const btc2 = document.querySelector('#btc2');

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