// Se crea el servidor Express 
const express  = require('express');
// Nos permite trabajar con toda la data de Json
const bodyParser = require('body-parser');

// Se ingresa el archivo de configuración

// Para leer de un archivo raiz se coloca doble punto
const config = require('../config.js')
// Para leer un archivo dentro de una carpeta se ingresa un solo punto
const user =require('./components/user/network');


// Se agrega la app
const app = express();

// Se definen las ROUTES

app.use('/api/user', user);

app.listen(config.api.port, () =>{
    console.log('Api escuchando en el puerto', config.api.port);
})