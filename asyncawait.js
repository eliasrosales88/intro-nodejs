'use strict';

// funcion que retorna una promesa
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function main() {
    console.log('empiezo');
    await sleep(2000);
    console.log('sigo');
    await sleep(2000);
    console.log('sigo');
    await sleep(2000);
    console.log('sigo');
    await sleep(2000);
    console.log('sigo');
}

main();