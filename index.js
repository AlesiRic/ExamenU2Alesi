const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/Examen_U2');

const productoSchema=require('./modelos/producto.modelo');
const ventaSchema=require('./modelos/venta.modelo');

const Producto=mongoose.model('Producto',productoSchema,'productos');
const Venta=mongoose.model('Venta',ventaSchema,'ventas');

const productoController=require('./controladores/producto.controlador');
const ventaController=require('./controladores/venta.controlador');


function crearProductos(){
    var producto={
        nombreProducto: 'Cepillo dental',
        cantidad:35,
        costo: 3,
        precio: 5,
        minimo: 3,
        maximo: 12
    }
    productoController.insertar(Producto,producto);
    producto={
        nombreProducto: 'Pasta dental',
        cantidad:37,
        costo: 10,
        precio: 15,
        minimo: 1,
        maximo: 5
    }
    productoController.insertar(Producto,producto);
    producto={
        nombreProducto: 'Enjuague bucal',
        cantidad:8,
        costo: 20,
        precio: 35,
        minimo: 1,
        maximo: 4
    }
    productoController.insertar(Producto,producto);
    producto={
        nombreProducto: 'Jabón',
        cantidad:2,
        costo: 14,
        precio: 23,
        minimo: 4,
        maximo: 6
    }
    productoController.insertar(Producto,producto);
    producto={
        nombreProducto: 'Papel higienico',
        cantidad:40,
        costo: 15,
        precio: 20,
        minimo: 5,
        maximo: 20
    }
    productoController.insertar(Producto,producto);
}

function crearVenta(){
    cantidad=1
    venta={
        folio:"FSAJKLFAS",
        fecha:Date.now(),
        cant:cantidad
    }
    idProducto=productoController.selectIdPorNombre(Producto,'Pasta dental');
    ventaController(idProducto,venta,Venta,productoController,cantidad,Producto);

}
function enviarEmail(){
 var busqueda=productoController.find({});
    const sendmail=require("./sendmail");
    const env={
        to: "iarjona@ittepic.edu.mx",
        subject:"Examen 2 - Alesi",
        text:`AAAA`,    
        html:`<div>
        ${busqueda}
        </div>`
    }
    sendmail.send(env);
}



crearProductos();
crearVenta();
enviarEmail();

