'use strict'

//constructor objetos
function Coche(ruedas) {
    this.ruedas = ruedas;
    this.cuantasRuedas = function () {  
        console.log('Tiene ', this.ruedas, ' ruedas');
        
    }
}


const todoTerreno = new Coche(4);

//Donde esten los parentesis () lo que hay a la izquierda del punto en esa instruccion.
todoTerreno.cuantasRuedas();


//setTimeout(todoTerreno.cuantasRuedas, 2000);


//Esto hace perder el this. Para solucionarlo podemos usar bind()

// const otraVariable = todoTerreno.cuantasRuedas.bind(todoTerreno);
// otraVariable();


