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
//Llamar una funcion con cada elemento de un array en serie, y al terminar llamar al callback de finalizacion
function serie(arr, fn, callbackFinalizacion) {
    if (arr.length === 0) {
        callbackFinalizacion();
        return;
    }

    fn('texto' + arr.shift(), function () { // fn() seria la llamada a escribeTrasDosSegundos
        serie(arr, fn, callbackFinalizacion);
    })
}

serie([1, 2, 3, 4, 5], escribeTrasDosSegundos, function(){
    
    console.log('fin');
});
  
