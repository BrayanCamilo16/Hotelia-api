const { Router } = require("express");
const rutasReserva = Router();
const ctrReserva = require("../controller/Reserva.controller");


// Metodos de Consulta
// rutasReserva.get('/', ctrHab.obtener);
// rutasReserva.get('/:id', ctrHab.obtenerId);

// // Metodos de Agregacion 
// rutasReserva.post('/', ctrHab.add);

// // Metodos de Actualizacion
// rutasReserva.put('/:id', ctrHab.edit);


// Exportar Modulo
module.exports = rutasReserva;