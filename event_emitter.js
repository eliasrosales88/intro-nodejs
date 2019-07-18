'use strict';

//Crear un emisor de eventos
const EventEmitter = require('events');

const emisor = new EventEmitter();

const EVENT_LLAMADA_TELEFONO = 'llamada de telefono';

//emitir eventos
emisor.emit(EVENT_LLAMADA_TELEFONO);
emisor.emit(EVENT_LLAMADA_TELEFONO);

//actua ante eventos
emisor.on(EVENT_LLAMADA_TELEFONO, info =>{
    if (info.llamante === 'madre') {
        return;
    }
    console.log('ring ring');
    
});


emisor.once(EVENT_LLAMADA_TELEFONO, () =>{
    console.log('brrr brrr');
    
});

//emitir eventos

emisor.emit(EVENT_LLAMADA_TELEFONO, {llamante: 'madre'});
emisor.emit(EVENT_LLAMADA_TELEFONO, {llamante: 'madre'});