var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan'); //liberia para hacer logs

// var expressValidator = require('express-validator');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

// Aqui cambiamos la extension de ejs a html
app.set('view engine', 'html');
app.engine('html', require('ejs').__express);


//Middlewares ---> una funcion que recibe 3 parametros
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //en postman para procesar peticiones tipo form-data necesita un middleware i.e multerjs
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));// Otro middleware que sirve para servir ficheros estaticos
// app.use('/pdf', express.static(pat.join(__dirname, 'd:pdf')));


/* 
 *  Conexion con la base de datos
 */

require('./lib/connectMongoose');
require('./models/Agente');



app.use(( req, res, next)=> {
  // Un middleware tiene que hacer una de 2 cosas:

  //  - Responder
  // res.send('ok');

  //  - O llamar a next
  // console.log('Peticion a', req.originalUrl);
  
  next();

})

/*  
 * Rutas de mi API
 */

app.use('/apiv1/agentes', require('./routes/apiv1/agentes'));
app.locals.title = 'NodeAPI';

/* 
 * Rutas de mi aplicacion
 */
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
if (err.array) {
  err.status = 422;
  const errInfo = err.array({onlyFirstError: true})[0];
  err.message = isAPI(req)? { message: 'Not valid', errors: err.mapped() }:`Not valid - ${errInfo.param} ${errInfo.msg}`;
}

res.status(err.status || 500);

if (isAPI(req)) {
  res.json({ success: false, error: err.message});
  return;
}

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.render('error.ejs');
});

function isAPI(req) {
  return req.originalUrl.indexOf('/apiv') === 0;
  console.log(req);
  
}


module.exports = app;
