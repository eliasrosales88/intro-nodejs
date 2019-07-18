'use strict';

const calculadora = require('./calculadora');

//se le puede agregar nuevas propiedades en el objeto 
calculadora.loquesea = 'algo';

const calculadora2 = require('./calculadora');
const calculadora3 = require('./calculadora');

// console.log(calculadora.suma(1, 6));

console.log(calculadora.multiply(1, 6));

// aunque se intente instanciar varias veces la calculadora, solo sera instanciada una sola vez
// esto se debe a que es un SINGLETON = objeto que se instancia una sola vez.
console.log(calculadora3.loquesea);
