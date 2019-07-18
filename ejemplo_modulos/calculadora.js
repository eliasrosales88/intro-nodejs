'use strict';


console.log('Inicializo el modulo');

function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

module.exports.multiply = function (a, b) {
    return a*b;
}

module.exports.suma = suma;
exports.resta = resta;
