const form = document.getElementById('form1');
        form.addEventListener('submit', function(evt){
            evt.preventDefault();
            const mensajesError = [];
            var mensajeError = [];

            if(nombre.value===null||nombre.value===''){
                mensajeError.push('Ingrese su nombre');
            }
            if(telefono.value===null||telefono.value===''){
                mensajeError.push('Ingrese su teléfono ');
            }
            error.innerHTML = mensajeError.join(', ');
        });

const form2 = document.getElementById('form2');
      form2.addEventListener('submit', function(evt){
            evt.preventDefault();
            const mensajesError = [];
            var mensajeError = [];

            if(nombre.value===null||nombre.value===''){
                mensajeError.push('Ingrese su nombre');
            }
            if(telefono.value===null||telefono.value===''){
                mensajeError.push('Ingrese su teléfono ');
            }
            error.innerHTML = mensajeError.join(', ');
        });