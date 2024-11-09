async function listarProductos(){
    const conexion = await fetch("http://localhost:3000/productos");
    const conexionConvertida = conexion.json();
    //  console.log(conexion);
    //  console.log(conexionConvertida);
    return conexionConvertida
}

async function enviarProductos(imagen, descripcion, valor){
    const conexion = await fetch("http://localhost:3000/productos",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            imagen:imagen,
            descripcion:descripcion,
            valor:valor,
        })
    });
    const conexionConvertida = conexion.json();
    return conexionConvertida;
}

export const conexionAPI={
    listarProductos, enviarProductos
}
//  listarProductos();
