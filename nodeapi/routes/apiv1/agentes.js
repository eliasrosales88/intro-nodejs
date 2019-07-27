'use strict';

const express = require('express');
const router = express.Router();

const Agente = require('../../models/Agente');

router.get('/',  async (req, res, next) =>{
    
    // Version con callbacks
    //Agente.find().then()thenable simula ser una promesa
    // Agente.find().exec( (err, agentes )=>{
    //     if (err) {
    //         next(err); // escalar el error al gestor de errores
    //         return;
    //     }
    //     res.json({ success: true, agentes: agentes })
    // }) 
    
    
    // Version con promesas y async await    
    try {
        const agentes = await Agente.find().exec();
        res.json({ success: true, agentes: agentes });
        
    } catch (err) {
        next(err);
    }
});


module.exports = router;