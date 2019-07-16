//Cargar liberia http
const http = require('http'); //Usar require es usar los modulos estandar de nodejs
//import ESModules se puede usar pero hay que activar una libreria externa

const Chance = require('chance');

const chance = new Chance();

//Definir un servidor
const server = http.createServer(function(request, response){
    // Cada peticion se ejecuta esto
    response.writeHead(200, {'Content-Type': 'text/html'});

    response.end('Wake up, <b>Neo</b>'+ chance.name());
});
//Arrancar el servidor
server.listen(1337, '127.0.0.1');
console.log('Servidor arrancado en http://127.0.0.1:1337');
