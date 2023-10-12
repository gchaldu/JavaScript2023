import { postCliente } from "./api.js";
import { validar } from "./funciones.js";

(function () {

    const form = document.querySelector("#form-nuevo-editar-cliente");

    form.addEventListener("submit", addCliente);

    async function addCliente(e) {
        e.preventDefault();
        const c = crearCliente();
        console.log(c);

        if (!validar(c)) {
            alert("Todos los campos son obligatorios!");
            return
        }

       await postCliente(c);
    }

    const crearCliente = () => {
        const iNombre = document.querySelector("#nombre");
        const iApellido = document.querySelector("#apellido");
        const iDni = document.querySelector("#dni");
        const iFechaInicio = document.querySelector("#date");

        const nuevoCliente = {
            nombre: iNombre.value,
            apellido: iApellido.value,
            dni: iDni.value,
            f_inicio: iFechaInicio.value,
        }

        return nuevoCliente;
    }

})();