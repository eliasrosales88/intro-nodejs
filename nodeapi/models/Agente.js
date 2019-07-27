'use strict';

const mongoose = require('mongoose');

// definimos un esquema

const agenteSchema = mongoose.Schema({
    name: String,
    age: Number,
    // email: {
    //     type: String,
    //     index: true, // crea un indice
    //     unique: true, // el registro debe ser unico Mongo no permite que se repita el dato
    //     default: ''        
    // }
})

// creamos el modelo de agente
const Agente = mongoose.model('Agente', agenteSchema); // El nombre Agente esta en mayuscula pero Mongoose pluraliza el nombre

module.exports = Agente;