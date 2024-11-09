import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");

function crearCard(imagen, descripcion, valor) {
    const producto = document.createElement("div");
    producto.className = "card";
    producto.innerHTML=`<img src="${imagen}"/>
                    <div class="card-container--info">
                        <p>${descripcion}</p>
                        <div class="card-container--value">
                            <p>${valor}</p>
                            <i class="fa-regular fa-trash-can"></i>
                        </div>
                    </div>`;

    return producto;
}

async function listarProductos(){
    const listaAPI = await conexionAPI.listarProductos();

    listaAPI.forEach(producto => lista.appendChild(crearCard(producto.imagen, producto.descripcion, producto.valor)));
};


listarProductos();