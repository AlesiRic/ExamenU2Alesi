
function insertar(idProducto,venta,Venta,productoController,cantidad,Producto){
    venta["productoId"]=idProducto;
    var busqueda=Venta.create(Venta,venta).then((data) => {
        console.log("Venta Guardada!!!");
        productoController.ventaHecha(cantidad,idProducto,Producto);
        return data;
    })
    .catch((error) => {
        console.log("Error!!!");
        return error;
    });
}


