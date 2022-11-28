const { Schema, model }=  require("mongoose");

const userSchema = new Schema({
    _id: Number,
    nombreHab: String,
    apellido:String,
    tipoDocu: String,
    fechaNaci: Date,
    genero: String,
    telefono:String,
    paisOrigen:String,
    password:String,
    rol:String,
    img:String,

    reserva:[{
        type: Schema.Types.Number,
        ref: 'reserva'
    }]
})

module.exports= model('habitacion', habitacionSchema);
