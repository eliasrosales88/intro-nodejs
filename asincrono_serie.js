'use stric';

console.log('empiezo');



//funcion que escribe un texto en la consola tras dos segundos

function escribeTrasDosSegundos(texto, callback) {
    setTimeout(function () {
        console.log(texto);
        callback();
    },2000);
}

//Bucle asincrono en serie
//Llamar una funcion n veces en serie
function serie(n, fn, callbackFinalizacion) {
    if (n == 0) {
        callbackFinalizacion();
        return;
    }
    n = n - 1;

    fn('texto' + n, function () { // fn() seria la llamada a escribeTrasDosSegundos
        serie(n, fn, callbackFinalizacion);
    })
}

serie(5, escribeTrasDosSegundos, function(){
    
    console.log('fin');
});
  
