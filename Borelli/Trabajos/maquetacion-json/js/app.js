import "../js/api.js";
import { getClientes, postCliente} from "../js/api.js";

class Cliente {
    constructor(nombre, apellido, dni) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.f_inicio = "";
        this.id = "";
    }

    mostrarCliente() {
        console.log(`Id: ${this.id}\nNombre: ${this.nombre} \nApellido: ${this.apellido}\nDni: ${this.dni}\nfecha-inicio: ${this.f_inicio}`);
    }
}

const c = new Cliente("Pepito", "Pepote", 34567987);

c.mostrarCliente();

const listaC = await getClientes();
console.log(listaC);

postCliente(c);