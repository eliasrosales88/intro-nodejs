'use strict';

//cargo driver mysql
const mysql = require('mysql');

//creo una conexion
const conexion = mysql.createConnection('mysql://usuariocurso:us3r@didimo.es:3306/cursonode');

//conecto
conexion.connect();

//lanzo consulta
conexion.query('SELECT * FROM agentes', (err, rows, fields)=>{

    if (err) {
        console.log('Error', err);
        return;
    }
    console.log(rows);
    
})