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
});

// en los metodos de modelos de mongoose no usar arrow functions(perdemos el this a la instancia)
agenteSchema.statics.list = function({filter, skip, limit, fields, sort}){ // no hacer arrow function
    const query = Agente.find(filter);
    query.skip(skip);
    query.limit(limit);
    query.select(fields)// elegimos los campos que queremos consultar
    query.sort(sort);
    return query.exec();
}


// creamos el modelo de agente
const Agente = mongoose.model('Agente', agenteSchema); // El nombre Agente esta en mayuscula pero Mongoose pluraliza el nombre

module.exports = Agente;