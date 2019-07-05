var mongoose=require('mongoose');

module.exports=new mongoose.Schema({
    folio:{
        type:String,
        required:true
    },
    fecha:{
        type:Date,
        required:true
    },
    productoId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Producto',
        required:true
    },
    cant:{
        type:Number,
        required:true
    },
    subtotal:Number,
    IVA:Number,
    total:Number
});