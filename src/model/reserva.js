const { Schema, model }=  require("mongoose");

const reservaSchema = new Schema({
    fentrada: Date,
    fsalida:Date,
    freserva: Date,
    cantidadnoches: Number,
    totalReserva: Number,

    user: [{
        type:Schema.Types.Number,
        ref: 'user'
    }],

    habitaciones:[{
        type: Schema.Types.Number,
        ref: 'habitacion'
    }]
})

module.exports= model('habitacion', habitacionSchema);
// module.exports= model('user', userSchema);