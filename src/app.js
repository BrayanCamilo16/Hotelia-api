const express= require('express');
const conexionDB = require('./db');

require('dotenv').config();
//conexion a DB
conexionDB();

//configuraciones
app.set("name", "Hotelia-api");
app.set("port", process.env.PORT ||0000);
app.set("host", process.env.HOST || 'localhost');