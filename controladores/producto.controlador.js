function insertar(producto){
    Producto.create(Producto,producto)
        .then((data) => {
            console.log("Producto Guardado!!!");
            return data;
        })
        .catch((error) => {
            console.log("Error!!!");
            return error;
        });
}

function selectTodos(Producto){
    var busqueda=Producto.find({})
    .then(data=>{
        return data;
    })
    .catch(err=>{
        return error;
    });
    return busqueda;
}


function selectPorNombre(Producto,nombre){
    var params={
        nombreProducto:nombre
    };
    var busqueda=Producto.findOne(params).then(docs=>{return docs[0]}).catch(err=>{return err});
    return busqueda;
}

function selectIdPorNombre(Producto,nombre){
    var params={
        nombreProducto:nombre
    };
    var busqueda=Producto.findOne(params).then(doc=>{return doc._id}).catch(err=>{return err});
    return busqueda
}

function ventaHecha(cantidad,idProducto,Producto){
    var params={_id:idProducto}
    var busqueda=Producto.findOne(params).then(doc=>{return doc.cantidad}).catch(err=>{return err});

    nuevaCantidad=busqueda-cantidad;

    Producto.update(params,{$set:{cantidad:nuevaCantidad}});
}

function selectTodos(Producto){
    var busqueda=Producto.find({})
    .then(data=>{
        return data;
    })
    .catch(err=>{
        return error;
    });
    return busqueda;
}

module.exports.insertar=insertar;
module.exports.selectIdPorNombre=selectIdPorNombre;
module.exports.ventaHecha=ventaHecha;