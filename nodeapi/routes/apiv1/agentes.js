'use strict';

const express = require('express');
const router = express.Router();

const Agente = require('../../models/Agente');

/* 
 * GET /agentes
 * return lista de agentes
 * Por ejemplo
 * http://localhost:3000/apiv1/agentes?limit=2&skip=2&fields=name%20age%20-_id
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

        const name = req.query.name;
        const age = req.query.age;
        const skip = parseInt(req.query.skip);
        const limit = parseInt(req.query.limit); // eliminamos parseInt y forzamos error con limit 
        const fields = req.query.fields;
        const sort = req.query.sort;

        const filter = {};
        
        if (name) {
            filter.name = name;
        }

        // los tipo numericos 
        if (typeof age !== 'undefined') {
            filter.age = age;
        }

        const agentes = await Agente.list({filter: filter, skip, limit, fields, sort});// si colocamos llaves dentro de list podemos decir que el orden ya no es relevante
        res.json({ success: true, results: agentes });
        
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
});


/**
 * POST /agentes
 * Crear un agente
 */
router.post('/', async (req, res, next) =>{
    try {
        const data = req.body;

        const agente = new Agente(data);

        const agenteGuardado = await agente.save();

        res.json({ success: true, result: agenteGuardado });
    } catch (err) {
        next(err);    
    }
})

/**
 * PUT /agentes:id
 * Actualiza un agente
 */
router.put('/:id', async (req, res, next) => {
    try {
        const _id = req.params.id;
        const data = req.body;

        const agenteGuardado =  await Agente.findOneAndUpdate({_id: _id}, data, { new: true}).exec(); // new: true --> hace que retorne la version del agente guardada en la base de datos
        
        res.json({ success: true, result: agenteGuardado });
    } catch (err) {
        next(err);
    }
});

/**
 * DELETE /agentes:id 
 * Elimina un agente
 */
router.delete('/:id', async (req, res, next) => {
    try {
        const _id = req.params.id;

        await Agente.deleteOne({ _id: _id }).exec();

        res.json({ success: true });
    } catch (err) {
        next(err);
    }
})
module.exports = router;