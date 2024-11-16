import { conexionAPI } from "./conexionAPI.js";

const dlt = document.querySelector("[data-lista]");

async function eliminarProductos(evento){

    evento.preventDefault();

    const imagen = document.querySelector("[data-imagen]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    const valor = document.querySelector("[data-valor]").value;

    await conexionAPI.deleteProductos(imagen,descripcion,valor);
    // window.location.href="../envio-concluido.html";
}
dlt.addEventListener("click",evento => eliminarProductos(evento));


// console.log(formulario);