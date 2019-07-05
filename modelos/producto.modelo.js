var mongoose=require('mongoose');

module.exports=new mongoose.Schema({  
    nombreProducto: {
        type: String,
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
    costo: {
        type: Number,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    minimo: {
        type: Number,
        required: true
    },
    maximo: {
        type: Number,
        required: true
    }
    
})