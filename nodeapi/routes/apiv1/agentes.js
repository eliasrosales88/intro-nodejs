'use strict';

const express = require('express');
const router = express.Router();

const Agente = require('../../models/Agente');

/* 
 * GET /agentes
 * return lista de agentes
 */

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

        const limit = parseInt(req.query.limit); //forzamos error con limit
        
        const agentes = await Agente.find().limit(limit).exec();
        res.json({ success: true, agentes: agentes });
        
    } catch (err) {
        next(err);
    }
});


/**
 * Get /agentes:id
 * Obtiene un agente
 */

router.get('/:id', async (req, res, next) =>{
    try {
        const _id = req.params.id;
        const agente = await Agente.findById(_id).exec();//exec() sobraria ya que hay un await por delante

        if (!agente) {
            res.status(404).json({ success: false });// con 404 bastaria
            return;
        }

        res.json({ success: true, result: agente });

    } catch (err) {
        next(err);
    }
})
module.exports = router;