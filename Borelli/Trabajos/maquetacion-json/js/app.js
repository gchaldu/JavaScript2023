import { getClientes } from "./api.js";

(function(){
    document.addEventListener('DOMContentLoaded', mostrarClientes);

    async function mostrarClientes(){
        const clientes = await getClientes();

        const clienteFilas = document.querySelector("#clientes");
        
        clientes.forEach(element => {
            const {nombre, apellido, dni, f_inicio, id} = element;

            const tr = document.createElement("tr");

            const tdNombre = document.createElement("td");
            tdNombre.textContent = nombre;
            const tdApellido = document.createElement("td");
            tdApellido.textContent = apellido;
            const tdDni = document.createElement("td");
            tdDni.textContent = dni;
            const tdFecha = document.createElement("td");
            tdFecha.textContent = f_inicio;
            const tdEliminar = document.createElement("td");
            tdEliminar.innerHTML = `<a href="#" data-cliente="${id}" id="eliminar">Eliminar</a>`;
            const tdModificar = document.createElement("td");
            tdModificar.innerHTML = `<a href="/editar-cliente.html?id=${id}">Modificar</a>`;

            tr.appendChild(tdNombre);
            tr.appendChild(tdApellido);
            tr.appendChild(tdDni);
            tr.appendChild(tdFecha);
            tr.appendChild(tdModificar);
            tr.appendChild(tdEliminar);

            clienteFilas.appendChild(tr);
        });
    }
})();