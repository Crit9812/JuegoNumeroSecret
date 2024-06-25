let numeroSecret = 0;
let contador = 0;
let listaNumeros = [];
let numeroMax = 10;

function asignarTextoElemento(elemento, texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
}

function verificarIntento () {
    let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);

    if (numeroUsuario === numeroSecret){
        asignarTextoElemento('p',`Acertaste el numero en : ${contador} ${contador === 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{//no acierta
        limpiarCaja();
        if(numeroUsuario > numeroSecret){
            asignarTextoElemento('p',"El numero secreto es menor");
        }else{
            asignarTextoElemento('p',"El numero secreto es mayor");
        }
        contador ++;
    }
    return;
}


function condicionesIniciales(){
    asignarTextoElemento('h1', "juego del numero secreto");
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMax}`);
    numeroSecret = generarNumero();
    contador = 1;
}

function limpiarCaja(){
    document.querySelector('#numeroUsuario').value = '';;
}

function generarNumero() {

    let numeroGenerado = Math.floor(Math.random() * numeroMax + 1);
    console.log(numeroGenerado);
    console.log(listaNumeros);
    if ( listaNumeros.length == numeroMax){
        asignarTextoElemento('p','Ya se sortearon todos los numeros disponibles');
    }else{
        if(listaNumeros.includes(numeroGenerado)){
            return generarNumero();
        }else{
            listaNumeros.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //Menaje de instuccion
    condicionesIniciales();
    //deshabilitar boton
    document.querySelector('#reiniciar').setAttribute('disabled',('True'));
}

condicionesIniciales();