'use strict'
// cargar libreria de Mongoose
const mongoose = require('mongoose');
const conn = mongoose.connection;

// gestionar eventos de conexion
conn.on('error', err =>{
    console.log('error de conexion', err);
    process.exit(1);
});


conn.once('open', ()=>{
    console.log('Conectado a MongoDB en', conn.name);
})

// conectar
mongoose.connect('mongodb://localhost/cursonode', { useNewUrlParser: true });

// exportar la conexion (opcional)
module.exports = conn;
