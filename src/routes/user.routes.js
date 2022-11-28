const { Router } = require("express");
const rutasUser = Router();
const ctrUser = require("../controller/ user.controller");


// Metodos de Consulta
// rutasUser .get('/', ctrHab.obtener);
// rutasUser.get('/:id', ctrHab.obtenerId);

// // Metodos de Agregacion 
// rutasUser.post('/', ctrHab.add);

// // Metodos de Actualizacion
// rutasUser.put('/:id', ctrHab.edit);


// Exportar Modulo
module.exports = rutasUser;