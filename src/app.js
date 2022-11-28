const express= require('express');
const conexionDB = require('./db');
const rutasHab= require('./routes/habitacion.routes');
const app = express();
require('dotenv').config();
//conexion a DB
conexionDB();

//configuraciones
app.set("name", "Hotelia-api");
app.set("port", process.env.PORT ||0000);
app.set("host", process.env.HOST || 'localhost');


//midlewire
app.use(express.json());

//llamado de rutas
app.use(express.static('public'));
app.use('/public', express.static('public/upload'));

app.use('/habitaciones', rutasHab);

module.exports=app;