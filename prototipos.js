'use strict';

//Definimos una funcion constructora de objetos
function Persona(nombre) {
    this.nombre = nombre;
    //Esto crea una funcion por objeto instanciado. No es correcto este enfoque.
    /* this.saluda = function () {
        console.log('Hola, me llamo', this.nombre);
        
    } */
}


//Construir un objeto
const luis = new Persona('Luis');
Persona.prototype.saluda = function () {
    console.log('Hola, me llamo', this.nombre);
} 

luis.saluda();

// Herencia de persona (herencia simple) ------------------------------------------------------------

//constructor de Agentes

function Agente(nombre) {
    //Heredar el constructor de Personas
    //Usando call o apply hace que el this de Agente sea aceptado por el padre para que use las propiedades del padre que se definan en el call o apply.
    Persona.call(this, nombre); // Persona.apply(this, [nombre, apellido1, apellido2]);
}

//Heredamos sus propiedades y metodos.
Agente.prototype = Object.create(Persona.prototype); 
Agente.prototype.constructor = Agente;


const smith = new Agente('Smith');

smith.saluda();

//Cadena de prototipos

console.log(
    smith instanceof Agente,    //true
    smith instanceof Persona,   //true
    smith instanceof Object     //true
)

//Esto es monkey patching y esta desaconsejado
//Object.prototype.despidete = function () {...}


// Herencia multiple (tienen varios padres) ------------------------------------------------------------

//Para la herencia multiple se usa un patron de diseño llamado Mixin

//MIXIN SUPERHEROE
function Superheroe() {
    this.vuela = function () {
        console.log(this.nombre, 'vuela');
        
    }
    this.esquivaBalas = function () {
        console.log(this.nombre, 'esquiva balas');
        
    }
}

//Copiar todas las propiedades y metodos de superheroe al prototipo del Agente
Object.assign(Agente.prototype, new Superheroe());


//Ahora...
smith.vuela();
smith.esquivaBalas();



