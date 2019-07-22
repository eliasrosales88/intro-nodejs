var express = require('express');
var router = express.Router();

//object destructuring
// const { query, validationResult } = require('express/validator/check');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.locals.valor = '<script>alert("inyeccion de codigo")</script>';

  const segundo = (new Date()).getSeconds();
  res.locals.condicion = {
    segundo: segundo,
    estado: segundo % 2 === 0 //es par

  }
  res.locals.users = [
    {name: 'Smith', age: 23},
    {name: 'Jones', age: 35},
    {name: 'Tomas', age: 21}
  ];
  res.render('index');
});


router.get('/paramenruta/:numero?', (req, res, next) => {
  console.log('req.params',req.params);
  res.send('ok');
  
});

// Parametros predefinidos
router.get('/params/:id([0-9]+)/piso/:piso/puerta/:puerta', (req, res, next) => {
  console.log('req.params',req.params);
  res.send('ok');
  
});


// // Parametros en querystring
// router.get('/enquerystring', query('color').isLowercase().withMessage('must be lower case')
//   , (req, res, next) => {
//     validationResult(req).throw();//lanza excepcion si no valida
//     //si llego aqui es que los parametros de entrada son validos
//     console.log('req.query',req.query);
//   res.send('ok');
  
// });

// Recibiendo peticion post
router.post('/rutapost', (req, res, next) => {
  console.log('req.body',req.body);
  res.send('ok');
  
});


module.exports = router;
