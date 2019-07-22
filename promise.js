'use strict';

//funcion que retorna una promesa
function sleep(miliSeconds) {
    return new Promise((resolve, reject)=>{
        //Aqui va el codigo que hara resolverse o rechazarse la promesa.
        setTimeout(()=>{
            resolve('algo');
            reject(new Error('fatal'));
        }, miliSeconds);
    })
}

//obtener la promesa
const promesa = sleep(2000);
console.log('promesa',promesa);


//consumir la promesa
promesa.then(res =>{
    console.log('La promesa se completo', res);  
}).catch(err => {
    console.log('Promesa rechazada', err);
    
})