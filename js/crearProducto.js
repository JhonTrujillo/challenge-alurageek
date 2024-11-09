import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function crearProductos(evento){

    evento.preventDefault();

    const imagen = document.querySelector("[data-imagen]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    const valor = document.querySelector("[data-valor]").value;

    await conexionAPI.enviarProductos(imagen,descripcion,valor);
    window.location.href="../envio-concluido.html";
}
formulario.addEventListener("submit",evento=> crearProductos(evento));

// console.log(formulario);