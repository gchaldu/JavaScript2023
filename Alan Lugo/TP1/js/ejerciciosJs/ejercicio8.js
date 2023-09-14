/* Ejercicio 8
Creacion de Objetos constructor */

function Producto(nombre, precio, stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
}

console.log("Ejercicio 8- ");
const caja = new Producto("caja", 20, 400);
console.log("El producto es: " + caja.nombre+caja.precio+caja.stock);

