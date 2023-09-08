/**10. Lista de Compras: Crea una lista de compras que incluya productos y sus cantidades. */

/*function Producto(nombre, cantidad, precio){
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.precioXunidad = precio;
}*/

//const listaCompra = [new Producto("huevos", 6), new Producto("leche", 2), new Producto("Queso crema", 1), new Producto ("Galletitas", 3)]
//console.log(listaCompra);

//** 11. Agenda de Contactos: Crea una agenda de contactos con nombres, números de teléfono y 
// correos electrónicos. */
function Contacto(nombre, nTel, email){
    this.nombre = nombre;
    this.numeroTelefono = nTel;
    this.email = email;
}

const listaContactos = [
    new Contacto(
        "Matias",
        2236548925,
        "matias@gmail.com"
    ),

    new Contacto(
        "Juan",
        2235808565,
        "juan@gmail.com"
    ),
    
    new Contacto(
        "Lorena",
        2235662541,
        "lorena@hotmail.com"
    ),

    new Contacto(
        "Gustavo",
        2235876514,
        "gustavo@gmail.com"
    ),
]

//console.log(listaContactos);

//**12. Búsqueda de Palabras: Dado un párrafo y una palabra, cuenta cuántas veces aparece la 
// palabra en el párrafo. */

function encontrarPalabra(parrafo, palabra){
    let arrParrafo = parrafo.split(palabra);

    if(arrParrafo.length > 1)
    {
        console.log("La palabra " +palabra+ " se encontró " +(arrParrafo.length-1)+ " veces.");
    }else{
        console.log("No se encontró la palabra " +palabra);
    }
}

const parrafo = "Soy un parrafo y tengo muchas palabras, y si las palabras tengo que encotnrarlas,asi que estoy probando cuantas palabras puedo encontrarpalabras.";
//encontrarPalabra(parrafo, "palabra");

//**13. Clasificación de Objetos: Ordena un arreglo de objetos por una propiedad específica. */

function ordenarObjetos(array, propiedad){
    return array.filter((element) => element.propiedad === propiedad);
}

//**14. Registro de Ventas: Crea un registro de ventas con información sobre productos, cantidades 
// y precios. */
class Producto {
    constructor(nombre, cantidad, precio){
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.precioXunidad = precio;
    }

    aumentarCantidad(cantidad){
        this.cantidad += cantidad;
    }
}
    
class RegsitroVentas {
    constructor(){
        this.productosVendidos = new Array();
    }

    //Metodo para agregar productos
    venderProducto(producto){
        //Me fijo si el array esta vacio
        if(this.productosVendidos.length == 0){
            this.productosVendidos.push(producto);
        }else{  //Si no está vacio, tenemos que fiajrnos si el producto ya está añadido
            //bolenao que utilizamos para saber si esta el producto o no. 
            let bool = false;
            this.productosVendidos.forEach(element => {
                //Analizamos si el producto ya esta agregado
                if(element.nombre === producto.nombre){
                    //Si es asi aumentamso al cantidad de este, de lo que se vnedió. 
                    element.aumentarCantidad(producto.cantidad);
                    bool = true;
                }
            });

            //Si el producto no se encontró y habia elementos en el array lo agregamos.
            if(bool === false){
                this.productosVendidos.push(producto);
            }
        }
    }
}

const carro22 = [new Producto("Huevo", 6, 150), new Producto("Leche descremada", 2, 200), new Producto("Dulce de leche", 1, 500)]
const carro2 = [new Producto("Huevo", 6, 150), new Producto("Galletitas chocolinas", 2, 500), new Producto("Dulce de batata", 1, 300)]
const carro3 = [new Producto("Galletitas chocolinas", 5, 500), new Producto("Leche descremada", 5, 200), new Producto("Gaseosa", 1, 850)]

class Carrito {
    constructor(){
        this.productosAgreados = new Array();
    }

    agregar(producto){
        //Me fijo si el array esta vacio
        if(this.productosAgreados.length == 0){
            this.productosAgreados.push(producto);
        }else{  //Si no está vacio, tenemos que fiajrnos si el producto ya está añadido
            //bolenao que utilizamos para saber si esta el producto o no. 
            let bool = false;
            this.productosAgreados.forEach(element => {
                //Analizamos si el producto ya esta agregado
                if(element.nombre === producto.nombre){
                    //Si es asi aumentamso al cantidad de este, de lo que se vnedió. 
                    element.aumentarCantidad(producto.cantidad);
                    bool = true;
                }
            });

            //Si el producto no se encontró y habia elementos en el array lo agregamos.
            if(bool === false){
                this.productosAgreados.push(producto);
            }
        }
    }

    eliminar(productoNombre){
        this.productosAgreados = this.productosAgreados.filter(element =>
            element.nombre !== productoNombre
        );
    }

    calcularTotal(){
        let sum = 0;
        this.productosAgreados.forEach(element => {
            sum += (element.cantidad * element.precioXunidad);
        })

        return sum;
    }
}

const carrito = new Carrito();


carro22.forEach(element => {
    carrito.agregar(element);
});
carro2.forEach(element => {
    carrito.agregar(element);
});
carro3.forEach(element => {
    carrito.agregar(element);
});

//console.log(carrito);
//console.log("Total del carrito es: " + carrito.calcularTotal());
class Tarea {
    constructor(nombre){
        this.nombre = nombre;
        this.realizado = false;
    }

    tareaTerminada(){
        this.realizado = true;
    }
}

class GestorTareas {
    constructor(){
        this.listaTareas = new Array();
    }

    agregar(tareaNombre){
        let tarea = new Tarea(tareaNombre);
        this.listaTareas.push(tarea);
        
    }

    listarTareasPendientes(){
        this.listaTareas.forEach(element => {
            if(element.realizado === false){
                console.log("Tarea nº" +(this.listaTareas.indexOf(element)+1)+ ": " +element.nombre);
            }
        })
    }

    completar(nombreTarea){
        this.listaTareas.forEach(element => {
            if(element.nombre === nombreTarea){
                if(element.realizado !== true){
                    element.realizado = true;
                }else{
                    console.log("La tarea ya ha sido realizada.");
                }
            }
        });
    }
}

const listaTarea = new GestorTareas();
listaTarea.agregar("Sacar la basura");
listaTarea.agregar("asdasd");
listaTarea.agregar("asdfasfasf");
listaTarea.agregar("dsfsdf4124");
//listaTarea.completar("Sacar la basura");
//listaTarea.completar("Sacar la basura");
console.log(listaTarea);
listaTarea.listarTareasPendientes();

