//! --------------------Trabajo practico nº 2 – Arreglos - Objetos--------------------

//! ----------Arreglos con Tipos de Datos Primitivos:----------
//? 1. Suma de Elementos: Dado un arreglo de números, calcula la suma de todos los elementos.
const unArr1 = [4,7,3,6,9,2];
console.log('UN ARRAY DE NUM: ' + unArr1);
function sumarArr1(unArr) {
    let response = 0;
    unArr.forEach(item => {
        response += item;
    });
    return response;
};
let res1 = sumarArr1(unArr1);
console.log(res1);
//? 2. Promedio: Calcula el promedio de los números en un arreglo.
function promedio2(unArr) {
    let suma = 0;
    let cant = 0;
    let promedio = 0;
    unArr.forEach(item => {
        suma += item;
        cant ++;
    });
    promedio = suma/cant;
    return promedio
};
let res2 = promedio2(unArr1);
console.log(res2);
//? 3. Máximo y Mínimo: Encuentra el número máximo y el número mínimo en un arreglo de números.
let rta3Max = Math.max(...unArr1);
let rta3Min = Math.min(...unArr1);
console.log('El Max: ' + rta3Max + '\nEl Min: ' + rta3Min);
//? 4. Buscar Valor: Escribe una función que busque un valor específico en un arreglo y devuelva su índice, si existe.
function buscarValor4(unArr, unValor) {
    let response = '';
    unArr.forEach((item, index) => {
        if(item == unValor){
            response = 'El valor esta en el indice: ' + index;
        }
    });
    if(response === ''){
        response = 'El elemento no esta en el array';
    }
    return response;
};
let esta4 = buscarValor4(unArr1, 3);
let noEsta4 = buscarValor4(unArr1, 8);
console.log(esta4 + '\n' + noEsta4);
//? 5. Filtrar Pares e Impares: Separa un arreglo de números en dos arreglos diferentes, uno con números pares y otro con números impares.
const unArr5Par = [];
const unArr5Impar = [];
unArr1.forEach(item => {
    if(item %2 == 0){
        unArr5Par.push(item);
    }
});
unArr1.forEach(item => {
    if(item %2 != 0){
        unArr5Impar.push(item);
    }
});
console.log('Pares: ' + unArr5Par + ' \nImpares: ' + unArr5Impar);
//? 6. Eliminar Duplicados: Crea una función que elimine los elementos duplicados de un arreglo.
const unArr6 = [3,5,7,5,2,8,9,5,6,4,3,6,8,2,6];
function eliminaDup6(unArr) {
    const unSet6 = new Set();
    unArr.forEach(item => {
        unSet6.add(item);
    });
    const response = [];
    unSet6.forEach(item => {
        response.push(item);
    });
    return response;
};
const unNoDup6 = eliminaDup6(unArr6);
console.log('Array Original: ' + unArr6 + '\nUn Arr sin Dupliucados: ' + unNoDup6);
//? 7. Ordenar Arreglo: Ordena un arreglo de números de forma ascendente.
const unArr7 = [...unNoDup6];
unArr7.sort((a, b) => {
    return a - b;
});
console.log('Un Arr: ' + unNoDup6 + '\nUn Arr Ordenado: ' + unArr7);
//? 8. Eliminar Valor: Elimina todas las ocurrencias de un valor específico de un arreglo.
const unArr8 = [6,5,4,3,5,6,7,8,6,5,6,7,4,5,6,3,5,6,6];
const unArr8Filt = unArr8.filter(item => item != 6);
console.log('Un Arr: ' + unArr8 + '\nUn Arr sin 6: ' + unArr8Filt);
//? 9. Combinar Arreglos: Combina dos arreglos en uno solo, asegurándote de que no haya duplicados.
const unArr9sub1 = [1,2,3,4,5,6,7,2,3,4,5];
const unArr9sub2 = [3,5,7,8,9,6,2];
function combinaArrSinDup9(unArr, dosArr) {
    const unSet9 = new Set();
    const response9 = [];
    unArr.forEach(item => {
        unSet9.add(item);
    });
    dosArr.forEach(item => {
        unSet9.add(item);
    });
    unSet9.forEach(item => {
        response9.push(item);
        response9.sort((a, b) => {
            return a - b;
        });
    });
    return response9
};
const unArr9 = combinaArrSinDup9(unArr9sub1, unArr9sub2);
console.log('Arr1: ' + unArr9sub1 + '\nArr2: ' + unArr9sub2 + '\nArr1+2 sin Dup: ' + unArr9);

//! ----------Arreglos con Tipos de Datos Compuestos:----------
//? 10. Lista de Compras: Crea una lista de compras que incluya productos y sus cantidades.
function Compra10(producto, cantidad) {
    this.producto = producto;
    this.cantidad = cantidad;
};
function ListaDeCompras10() {
    this.lista = new Array();
};
ListaDeCompras10.prototype.agregarCompra = function(compra) {
    this.lista.push(compra);
};
ListaDeCompras10.prototype.mostrarLista = function() {
    let response10 = JSON.stringify(this.lista);
    console.log(response10);
};
let compra10Sub01 = new Compra10('papa', 5);
let compra10Sub02 = new Compra10('batata', 10);
let compra10Sub03 = new Compra10('cebolla', 15);
let lista10 = new ListaDeCompras10();
lista10.agregarCompra(compra10Sub01);
lista10.agregarCompra(compra10Sub02);
lista10.agregarCompra(compra10Sub03);
let compras10 = JSON.stringify(lista10.lista);
console.log('Lista de Compras: \n' + compras10);
//? 11. Agenda de Contactos: Crea una agenda de contactos con nombres, números de teléfono y correos electrónicos.
function Contacto11(nombre) {
    this.nombre = nombre;
    this.telefonos = new Array();
    this.correos = new Array();
};
Contacto11.prototype.agregarTelefono = function(unTelefono) {
    this.telefonos.push(unTelefono);
};
Contacto11.prototype.agregarCorreo = function(unCorreo) {
    this.correos.push(unCorreo);
};
function AgendaContactos11() {
    this.contactos = new Array();
};
AgendaContactos11.prototype.agregarContacto = function(contacto) {
    this.contactos.push(contacto);
};
let unContacto11Sub1 = new Contacto11('Jorge');
let unContacto11Sub2 = new Contacto11('Claudio');
let unContacto11Sub3 = new Contacto11('Martin');
unContacto11Sub1.agregarTelefono('155-155155');
unContacto11Sub1.agregarTelefono('155-166166');
unContacto11Sub1.agregarCorreo('unCorreo01@unMail.com');
unContacto11Sub1.agregarCorreo('unCorreo02@unMail.com');
unContacto11Sub2.agregarTelefono('155-255255');
unContacto11Sub2.agregarTelefono('155-266266');
unContacto11Sub2.agregarCorreo('dosCorreo01@unMail.com');
unContacto11Sub2.agregarCorreo('dosCorreo02@unMail.com');
unContacto11Sub3.agregarTelefono('155-355355');
unContacto11Sub3.agregarTelefono('155-366366');
unContacto11Sub3.agregarCorreo('tresCorreo01@unMail.com');
unContacto11Sub3.agregarCorreo('tresCorreo02@unMail.com');
const unaAgenda11 = new AgendaContactos11();
unaAgenda11.agregarContacto(unContacto11Sub1);
unaAgenda11.agregarContacto(unContacto11Sub2);
unaAgenda11.agregarContacto(unContacto11Sub3);
//? 12. Búsqueda de Palabras: Dado un párrafo y una palabra, cuenta cuántas veces aparece la palabra en el párrafo.
let parrafo12 = 'Siempre trabaja en ramas separadas para cada tarea y evita hacer cambios directamente en la rama principal (master/main). \n- Coordina con otros colaboradores para evitar duplicación de esfuerzos.\n- Las decisiones importantes sobre el repositorio serán tomadas a través de discusiones en las Pull Requests. \n- No dudes en utilizar la sección de problemas (Issues) para discutir problemas específicos o hacer preguntas.';
function cuentaPalabra12(unParrafo, unaPalabra) {
    const unArr12 = unParrafo.split(' ');
    let response = 0;
    unArr12.forEach(item => {
        if(unaPalabra === item){
            response += 1;
        }
    });
    return response;
};
let cant12 = cuentaPalabra12(parrafo12, 'en');
console.log('Parrafo: ' + parrafo12);
console.log('La Palabra "en", se encuentra ' + cant12 + ' veces en el parrafo anterior');
//? 13. Clasificación de Objetos: Ordena un arreglo de objetos por una propiedad específica.
const unArrObj13nom = [{nombre: 'Jorge', edad: 25},{nombre: 'Andres', edad: 32},{nombre: 'Oscar', edad: 19},{nombre: 'Pablo', edad: 28}];
const unArrObj13ed = [{nombre: 'Jorge', edad: 25},{nombre: 'Andres', edad: 32},{nombre: 'Oscar', edad: 19},{nombre: 'Pablo', edad: 28}];
console.log(unArrObj13nom);
console.log(unArrObj13ed);
unArrObj13nom.sort((a, b) => {
    let nom13subA = a.nombre;
    let nom13subB = b.nombre;
    if(nom13subA > nom13subB){
        return 1;
    }else if(nom13subA < nom13subB){
        return -1
    }else{
        return 0;
    }
});
unArrObj13ed.sort((a,b) => a.edad - b.edad);
console.log(unArrObj13nom);
console.log(unArrObj13ed);
//? 14. Registro de Ventas: Crea un registro de ventas con información sobre productos, cantidades y precios.
class Producto14{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
    get getPrecio(){
        return this.precio;
    }
    get getNombre(){
        return this.nombre;
    }
    set setPrecio(nuevoPrecio){
        this.precio = nuevoPrecio;
    }
    set setNombre(nuevoNombre){
        this.nombre = nuevoNombre;
    }
}
class RegistroVentas14{
    constructor(){
        this.lista = new Array();
    }
    agregarProducto(nuevoProducto, cantidad) {
        let newProd = this.lista.findIndex(item => item.nombre == nuevoProducto.nombre);
        if(newProd == -1){
            let prodObj = {};
            prodObj.nombre = nuevoProducto.nombre;
            prodObj.precio = nuevoProducto.precio;
            prodObj.cantidad = cantidad;
            this.lista.push(prodObj);            
        }else{
            this.lista[newProd].cantidad += cantidad;
        }
    };
};
let unProd14Sub1 = new Producto14('banana', 15);
let unProd14Sub2 = new Producto14('pera', 35);
let unProd14Sub3 = new Producto14('manzana', 10);
let unProd14Sub4 = new Producto14('mandarina', 5);
let unRegistroVta14 = new RegistroVentas14();
unRegistroVta14.agregarProducto(unProd14Sub1, 3);
unRegistroVta14.agregarProducto(unProd14Sub2, 7);
unRegistroVta14.agregarProducto(unProd14Sub3, 8);
unRegistroVta14.agregarProducto(unProd14Sub4, 9);
unRegistroVta14.agregarProducto(unProd14Sub1, 13);
console.log(unRegistroVta14);
//? 15. Carrito de Compras: Simula un carrito de compras que permite agregar, eliminar y calcular el total.
class Carrito15{
    constructor(){
        this.lista = new Array();
    }
    agregarCompra(producto, precio){
        let prodObj = {};
        prodObj.nombre = producto;
        prodObj.precio = precio;
        this.lista.push(prodObj);
    }
    eliminarCompra(prodNombre){
        let elimObj = this.lista.findIndex(item => item.nombre == prodNombre);
        if(elimObj != -1){
            this.lista.splice(elimObj, 1);
        }else{
            console.log('El producto ue desea eliminar no esta en el carro');
        }
    }
    calcularTotal(){
        let total = 0;
        this.lista.forEach(item => {
            total += item.precio;
        });
        return 'El total de la compra es: $' + total;
    }
};
let unCarrito15 = new Carrito15();
unCarrito15.agregarCompra('asado', 90);
unCarrito15.agregarCompra('costillar', 100);
unCarrito15.agregarCompra('vacio', 250);
unCarrito15.agregarCompra('tapa', 70);
console.log(unCarrito15);
unCarrito15.eliminarCompra('compra');
unCarrito15.eliminarCompra('costillar');
console.log(unCarrito15);
console.log(unCarrito15.calcularTotal());
//? 16. Gestor de Tareas: Crea un gestor de tareas que permita agregar, completar y listar tareas pendientes.
class Tarea16{
    constructor(nombreTarea){
        this.nombre = nombreTarea;
        this.estado = 'Pendiente'; 
    }
};
class Gestor16{
    constructor(){
        this.lista = new Array();
    }
    agregarTarea(nuevaTarea){
        let newTarea = new Tarea16(nuevaTarea);
        this.lista.push(newTarea);
    }
    completarTarea(compTarea){
        let compTar = this.lista.findIndex(item => item.nombre == compTarea);
        if(compTar != -1){
            this.lista[compTar].estado = 'Completa';
        }else{
            console.log('La tarea ' + compTarea + ' no se encuentra en la lista');
        }
    }
};
let gestorTareas16 = new Gestor16();
gestorTareas16.agregarTarea('caminata');
gestorTareas16.agregarTarea('trote');
gestorTareas16.agregarTarea('fondo');
gestorTareas16.agregarTarea('4k');
gestorTareas16.completarTarea('caminata');
gestorTareas16.completarTarea('12k');
console.log(gestorTareas16);




//!-----------------------------------------------------------------------------------------------------------------------
class Rectangulo99{                                             //!-------------------------------------------------------
    constructor(alto, ancho){                                   //!-------------------------------------------------------
        this.alto = alto;                                       //!-------------------------------------------------------
        this.ancho = ancho;                                     //!-------------------------------------------------------
    }                                                           //!-------------------------------------------------------
    calcularArea(){                                             //!-------------------------------------------------------        
        return this.alto * this.ancho;                          //!-------------------------------------------------------
    }                                                           //!-------------------------------------------------------
    get altoRec(){                                              //!-------------------------------------------------------
        return this.alto;                                       //!-------------------------------------------------------
    }                                                           //!-------------------------------------------------------
}                                                               //!-------------------------------------------------------
const unRect99 = new Rectangulo99(10,20);                       //!-------------------------------------------------------
console.log(unRect99.calcularArea());                           //!-------------------------------------------------------
console.log(unRect99.altoRec);                                  //!-------------------------------------------------------
//!-----------------------------------------------------------------------------------------------------------------------