'use stric'

//Con el doblre return dejamos accesible el ambito de la funcion

function crear(numero) {
    
    return{
        porDos: function () {
            const resultado = numero *2;
            console.log('El numero es', resultado);
            
            return resultado * 2;
        }
    }
}


const calculador4 = crear(4);
const calculador6 = crear(6);


// console.log(calculador4.porDos());
// console.log(calculador6.porDos());


//Los metodos creados con closures no pierden nunca el acceso al objeto propietario.
// setTimeout(calculador6.porDos, 2000);


//Aunque tengamos un objeto por el medio, no se pierde el acceso al objeto propietario.
const otroObjeto = {
    porDos: calculador4.porDos
}

otroObjeto.porDos();