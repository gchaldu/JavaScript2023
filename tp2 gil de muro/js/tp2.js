//Arreglos con Tipos de Datos Primitivos:

//1. Suma de Elementos: Dado un arreglo de números, calcula la suma de todos los elementos.

let numeros = [];
let dimension = Math.floor(Math.random() * 5) + 5;
for (let i = 0; i < dimension; i++) {
    numeros[i] = Math.floor(Math.random() * 9) + 1;
}
let suma = 0;

numeros.forEach((numero) => {
    suma += numero;
});

console.log(`Arreglo ${numeros}`);
console.log(`Suma de los elementos: ${suma}`);

//2. Promedio: Calcula el promedio de los números en un arreglo.

console.log(`Promedio de los elementos: ${suma / numeros.length}`);

//3. Máximo y Mínimo: Encuentra el número máximo y el número mínimo en un arreglo de números.

console.log(`Maximo: ${Math.max(...numeros)}`);
console.log(`Minimo: ${Math.min(...numeros)}`);

//4. Buscar Valor: Escribe una función que busque un valor específico en un arreglo y devuelva su índice, si existe.

function buscarValor(arreglo, buscado) {
    return arreglo.indexOf(buscado);
}

let valor = Math.floor(Math.random() * 10);
console.log(`Valor a buscar: ${valor}`);

let indice = buscarValor(numeros, valor);
if (indice === -1) {
    console.log(`El valor no se encuentra en el arreglo`);
} else {
    console.log(`Indice del valor: ${indice}`);
}

//5. Filtrar Pares e Impares: Separa un arreglo de números en dos arreglos diferentes, uno con números pares y otro con números impares.

let pares = numeros.filter(numero => numero % 2 === 0);
let impares = numeros.filter(numero => numero % 2 !== 0);
console.log(`Arreglo de pares: ${pares}`);
console.log(`Arreglo de impares: ${impares}`);

//6. Eliminar Duplicados: Crea una función que elimine los elementos duplicados de un arreglo.

function eliminarDuplicados(arreglo) {
    return arreglo.filter((valor, indice) => arreglo.indexOf(valor) === indice);
}

console.log(`Arreglo sin duplicados: ${eliminarDuplicados(numeros)}`);

//7. Ordenar Arreglo: Ordena un arreglo de números de forma ascendente.

console.log(`Arreglo sin ordenar: ${numeros}`);
console.log(`Arreglo ordenado: ${numeros.sort()}`);

//8. Eliminar Valor: Elimina todas las ocurrencias de un valor específico de un arreglo.

numeros = numeros.filter(numero => numero !== valor);
console.log(`Arreglo sin el valor ${valor}: ${numeros}`);

//9. Combinar Arreglos: Combina dos arreglos en uno solo, asegurándote de que no haya duplicados.

let numeros2 = [];
for (let i = 0; i < dimension; i++) {
    numeros2[i] = Math.floor(Math.random() * 9) + 1;
}

console.log(`Arreglo 1: ${numeros}`);
console.log(`Arreglo 2: ${numeros2}`);

let numeros3 = numeros.concat(numeros2);
console.log(`Arreglo combinado: ${numeros3}`);
console.log(`Arreglo combinado sin duplicados: ${eliminarDuplicados(numeros3)}`);

//Arreglos con Tipos de Datos Compuestos:

//10. Lista de Compras: Crea una lista de compras que incluya productos y sus cantidades.

let listaCompras = {
    productos: [],
    cantidades: [],
    agregarProducto: function (producto, cantidad) {
        this.productos.push(producto);
        this.cantidades.push(cantidad);
    }
}

listaCompras.agregarProducto("Manzanas", 5);
listaCompras.agregarProducto("Peras", 3);
listaCompras.agregarProducto("Bananas", 2);

console.log(`Lista de Compras:`);
listaCompras.productos.forEach((producto, indice) => {
    console.log(`Producto: ${producto} - Cantidad: ${listaCompras.cantidades[indice]}`);
});

//11. Agenda de Contactos: Crea una agenda de contactos con nombres, números de teléfono y correos electrónicos.

let agenda = {
    contactos: [],
    agregarContacto: function (nombre, telefono, email) {
        this.contactos.push({
            nombre: nombre,
            telefono: telefono,
            email: email
        });
    },
    listarContactos: function () {
        console.log(`Agenda de Contactos:`);
        this.contactos.forEach((contacto) => {
            console.log(`Nombre: ${contacto.nombre} - Telefono: ${contacto.telefono} - Email: ${contacto.email}`);
        });
    }
}

agenda.agregarContacto("Juan", "123456789", "mail@mail.com");
agenda.agregarContacto("Pedro", "987654321", "mail@mail.com");
agenda.agregarContacto("Maria", "456789123", "mail@mail.com");
agenda.listarContactos();

//12. Búsqueda de Palabras: Dado un párrafo y una palabra, cuenta cuántas veces aparece la palabra en el párrafo.

function buscarPalabra(parrafo, buscada) {
    let contador = 0;
    let palabras = parrafo.split(" ");
    palabras.forEach((palabra) => {
        if (palabra === buscada) {
            contador++;
        }
    });
    return contador;
}

let parrafo = "lorem ipsum dolor sit amet consectetur adipiscing elit aliquam dictum lorem ipsum dolor sit amet consectetur adipiscing elit aliquam dictum lorem ipsum dolor sit amet consectetur adipiscing elit aliquam dictum";
let palabra = "lorem";
console.log(`Parrafo: ${parrafo}`);
console.log(`Palabra a buscar: ${palabra}`);
console.log(`Cantidad de veces que aparece la palabra: ${buscarPalabra(parrafo, palabra)}`);

//13. Clasificación de Objetos: Ordena un arreglo de objetos por una propiedad específica.

function ordenarPorEdad(personas) {
    return personas.sort(function (a, b) {
        return a.edad - b.edad;
    });
}

let personas = [{nombre: "Juan", edad: 20}, {nombre: "Pedro", edad: 30}, {nombre: "Maria", edad: 25}];
console.log(`Personas sin ordenar: ${JSON.stringify(personas)}`);
console.log(`Personas ordenadas por edad: ${JSON.stringify(ordenarPorEdad(personas))}`);

//14. Registro de Ventas: Crea un registro de ventas con información sobre productos, cantidades y precios.

let registroVentas = {
    productos: [],
    cantidades: [],
    precios: [],
    agregarVenta: function (producto, cantidad, precio) {
        this.productos.push(producto);
        this.cantidades.push(cantidad);
        this.precios.push(precio);
    },
    listarVentas: function () {
        console.log(`Registro de Ventas:`);
        this.productos.forEach((producto, indice) => {
            console.log(`Producto: ${producto} - Cantidad: ${this.cantidades[indice]} - Precio: ${this.precios[indice]}`);
        });
    }
}

registroVentas.agregarVenta("Manzanas", 5, 100);
registroVentas.agregarVenta("Peras", 3, 200);
registroVentas.agregarVenta("Bananas", 2, 300);
registroVentas.listarVentas();

//15. Carrito de Compras: Simula un carrito de compras que permite agregar, eliminar y calcular el total.

let carrito = {
    productos: [],
    cantidades: [],
    precios: [],
    agregarProducto: function (producto, cantidad, precio) {
        this.productos.push(producto);
        this.cantidades.push(cantidad);
        this.precios.push(precio);
    },
    eliminarProducto: function (producto) {
        let indice = this.productos.indexOf(producto);
        this.productos.splice(indice, 1);
        this.cantidades.splice(indice, 1);
        this.precios.splice(indice, 1);
    },
    calcularTotal: function () {
        let total = 0;
        this.productos.forEach((producto, indice) => {
            total += this.cantidades[indice] * this.precios[indice];
        });
        return total;
    },
    listarProductos: function () {
        console.log(`Carrito de Compras:`);
        this.productos.forEach((producto, indice) => {
            console.log(`Producto: ${producto} - Cantidad: ${this.cantidades[indice]} - Precio: ${this.precios[indice]}`);
        });
    }
}

carrito.agregarProducto("Manzanas", 5, 100);
carrito.agregarProducto("Peras", 3, 200);
carrito.agregarProducto("Bananas", 2, 300);
carrito.listarProductos();
console.log(`Total: ${carrito.calcularTotal()}`);
carrito.eliminarProducto("Peras");
carrito.listarProductos();
console.log(`Total: ${carrito.calcularTotal()}`);

//16. Gestor de Tareas: Crea un gestor de tareas que permita agregar, completar y listar tareas pendientes.

let gestorTareas = {
    tareas: [],
    agregarTarea: function (tarea) {
        this.tareas.push({
            tarea: tarea,
            completada: false
        });
    },
    completarTarea: function (completada) {
        this.tareas.forEach((tarea) => {
            if (tarea.tarea === completada) {
                tarea.completada = true;
            }
        });
    },
    listarTareasPendientes: function () {
        console.log(`Tareas pendientes:`);
        this.tareas.forEach((tarea) => {
            if (!tarea.completada) {
                console.log(`Tarea: ${tarea.tarea}`);
            }
        });
    }
}

gestorTareas.agregarTarea("Tarea 1");
gestorTareas.agregarTarea("Tarea 2");
gestorTareas.agregarTarea("Tarea 3");
gestorTareas.listarTareasPendientes();
gestorTareas.completarTarea("Tarea 2");
gestorTareas.listarTareasPendientes();