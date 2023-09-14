/* 23. Crear un método `agregarProducto`
 a la función constructora `Carrito` que agregue un
producto al carrito. */

class Producto1 {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Carrito {
    constructor(arrayCarrito = []) {
        this.arrayCarrito = arrayCarrito;
    }

    agregarCarrito(producto){
        this.arrayCarrito.push(producto);
    }
}

botella = new Producto1("Botella", 40);

carritoCompras = new Carrito();

carritoCompras.agregarCarrito(botella);

console.log(carritoCompras);