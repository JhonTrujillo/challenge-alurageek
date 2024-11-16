const url = "http://localhost:3000/productos";
// const id = "http://localhost:3000/productos/id"

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

async function deleteProductos(id){
    const response = await fetch(`${url}/4`,{
        method:"DELETE",
    });
    
}

// async function deleteProductos(id){
    
//     try{
//             const response = await fetch(`${url}/:${productos.id}`,{
//             method:"DELETE",
//         });

//         if(!response.ok){
//             throw new Error(`Error al eliminar el recurso: ${response.statusText}`);
//         }
//         console.log(`recurso con ID ${productos.id} eliminado correctamente.`);
//         return true;
//     }catch (error){
//         console.error(`Error: ${error.message}`)
//     }
     
        
// }


export const conexionAPI={
    listarProductos, enviarProductos, deleteProductos
}
//  listarProductos();
