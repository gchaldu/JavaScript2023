//Variables: let, const

//1. Declarar una variable `nombre` y asignarle tu nombre. Imprimir en la consola.

let nombre = 'Federico Gil de Muro';
console.log('Nombre: ' + nombre);

//2. Declarar dos variables numéricas `num1` y `num2`, y calcular su suma. Imprimir el resultado.

let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 10);
let resultado = num1 + num2;
console.log(num1 + ' + ' + num2 + ' = ' + resultado);

//3. Declarar una constante `PI` con el valor 3.14159. Imprimir en la consola.

const PI = 3.14159;
console.log('PI = ' + PI);

//Funciones: function

//4. Crear una función `saludar` que tome un parámetro `nombre` y retorne un saludo personalizado.

function saludar(nombre) {
    return `Hola ${nombre}`;
}

console.log(saludar(nombre));

//5. Crear una función `esPar` que tome un número como parámetro y retorne `true` si es par, y `false` si es impar.

function esPar(numero) {
    return numero % 2 === 0;
}

console.log('El número ' + num1 + ' es par? ' + esPar(num1));

//6. Crear una función `sumarArray` que tome un array de números como parámetro y retorne la suma de sus elementos.

function sumarArray(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma;
}

let array = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
console.log('La suma del array ' + array + ' es: ' + sumarArray(array));

//Objetos literales y constructores

//7. Crear un objeto literal `persona` con las propiedades `nombre`, `edad` y `profesion`.

let persona = {
    nombre: 'Federico',
    edad: 42,
    profesion: 'Programador'
}

console.log('Objeto persona: ');
console.log(persona);

//8. Crear un constructor `Producto` que tome parámetros `nombre`, `precio` y `stock`, y cree un objeto con esas propiedades.

function Producto(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
}

nombre = 'Producto 1';
let precio = 100;
let stock = 10;
let producto = new Producto(nombre, precio, stock);

console.log('Objeto producto: ');
console.log(producto);

//9. Crear un objeto `pelicula` utilizando el constructor `Pelicula` con propiedades como `titulo`, `director` y `anio`.

function Pelicula(titulo, director, anio) {
    this.titulo = titulo;
    this.director = director;
    this.anio = anio;
}

let titulo = 'Película 1';
let director = 'Director 1';
let anio = 2023;
let pelicula = new Pelicula(titulo, director, anio);

console.log('Objeto película: ');
console.log(pelicula);

//Arrays

//10. Crear un array `frutas` con varios nombres de frutas. Imprimir el tercer elemento del array.

let frutas = ['manzana', 'pera', 'banana', 'naranja', 'mandarina'];
console.log('Tercer elemento del array frutas: ' + frutas[2]);

//11. Agregar una fruta más al final del array `frutas`. Imprimir el array actualizado.

frutas.push('kiwi');
console.log('Array frutas actualizado: ' + frutas);

//12. Crear una función `filtrarPares` que tome un array de números como parámetro y retorne un nuevo array solo con los números pares.

function filtrarPares(array){
    let arrayPares = [];
    for (let i = 0; i < array.length; i++) {
        if (esPar(array[i])) {
            arrayPares.push(array[i]);
        }
    }
    return arrayPares;
}

console.log('Array original: ' + array);
console.log('Array de pares: ' + filtrarPares(array));

//Funciones y Objetos combinados

//13. Crear una función `crearPersona` que tome parámetros `nombre` y `edad`, y retorne un objeto persona con esas propiedades.

function crearPersona(nombre, edad){
    let persona = {
        nombre: nombre,
        edad: edad
    }
    return persona;
}

console.log('Objeto persona: ');
console.log(crearPersona('Federico', 42));

//14. Crear una función `obtenerInfo` que tome un objeto persona como parámetro y retorne una cadena con su información.

function obtenerInfo(persona){
    return `Nombre: ${persona.nombre} - Edad: ${persona.edad}`;
}

console.log('Información de la persona: ');
console.log(obtenerInfo(persona));

//Más sobre Arrays y Funciones

//15. Crear una función `duplicarArray` que tome un array de números como parámetro y retorne un nuevo array con cada elemento duplicado.

function duplicarArray(array){
    let arrayDuplicado = [];
    for (let i = 0; i < array.length; i++) {
        arrayDuplicado.push(array[i]);
        arrayDuplicado.push(array[i]);
    }
    return arrayDuplicado;
}

console.log('Array original: ' + array);
console.log('Array duplicado: ' + duplicarArray(array));

//16. Crear una función `invertirCadena` que tome una cadena como parámetro y retorne la cadena invertida.

function invertirCadena(nombre){
    let nombreInvertido = '';
    for (let i = nombre.length - 1; i >= 0; i--) {
        nombreInvertido += nombre[i];
    }
    return nombreInvertido;
}

nombre = 'Federico';
console.log('Nombre original: ' + nombre);
console.log('Nombre invertido: ' + invertirCadena(nombre));

//17. Crear una función `filtrarPorLongitud` que tome un array de palabras y un número como parámetro, y retorne un nuevo array con las palabras que tienen una longitud mayor al número.

function filtrarPorLongitud(array, numero){
    let arrayFiltrado = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > numero) {
            arrayFiltrado.push(array[i]);
        }
    }
    return arrayFiltrado;
}

let arrayPalabras = ['casa', 'perro', 'auto', 'computadora', 'celular'];
let tamanio = Math.floor(Math.random() * 10);

console.log('Array palabras: ' + arrayPalabras);
console.log('Array con palabras cuya longitud es mayor a ' + tamanio + ': ' + filtrarPorLongitud(arrayPalabras, tamanio));

//Objetos y Arrays de Objetos

//18. Crear un array de objetos `estudiantes`, donde cada objeto tenga propiedades como `nombre`, `edad` y `promedio`.

let estudiantes = [{nombre: 'Federico', edad: 42, promedio: 8}, {nombre: 'Juan', edad: 20, promedio: 7}, {nombre: 'Pedro', edad: 30, promedio: 9}];

console.log('Array estudiantes: ');
for(let i = 0; i < estudiantes.length; i++){
    console.log(estudiantes[i]);
}

//19. Crear una función `buscarEstudiante` que tome un array de estudiantes y un nombre, y retorne el objeto del estudiante con ese nombre.

function buscarEstudiante(estudiantes, nombre){
    for(let i = 0; i < estudiantes.length; i++){
        if(estudiantes[i].nombre === nombre){
            return estudiantes[i];
        }
    }
}

let nombreEstudiante = 'Federico';
console.log('Estudiante con nombre ' + nombreEstudiante + ': ');
console.log(buscarEstudiante(estudiantes, nombreEstudiante));

//20. Crear una función `promedioClase` que tome el array de estudiantes y retorne el promedio de sus promedios.

function promedioClase(estudiantes){
    let suma = 0;
    for(let i = 0; i < estudiantes.length; i++){
        suma += estudiantes[i].promedio;
    }
    return suma / estudiantes.length;
}

console.log('Promedio de la clase: ' + promedioClase(estudiantes));

//Uso avanzado de Objetos y Funciones

//21. Crear un objeto `coche` con propiedades como `marca`, `modelo` y `anio`, y métodos como `arrancar` y `detener`.

let coche = {
    marca: 'Ford',
    modelo: 'Fiesta',
    anio: 2010,
    arrancar: function(){
        console.log('Arrancando...');
    },
    detener: function(){
        console.log('Deteniendo...');
    }
}

console.log('Objeto coche: ');
console.log(coche);
coche.arrancar();
coche.detener();

//22. Crear un constructor `Persona` con propiedades `nombre` y `edad`, y un método `saludar` que imprima un saludo personalizado.

function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
}

Persona.prototype.saludar = function(){
    console.log(`Hola ${this.nombre}`);
}

persona = new Persona('Federico', 42);
console.log('Objeto persona: ');
console.log(persona);
persona.saludar();

//23. Crear un método `agregarProducto` a la función constructora `Carrito` que agregue un producto al carrito.

function Carrito(){
    this.productos = [];
}

Carrito.prototype.agregarProducto = function(producto){
    this.productos.push(producto);
}

let carrito = new Carrito();
carrito.agregarProducto(producto);
console.log('Carrito: ');
console.log(carrito);

//Manipulación de Arrays y Objetos

//24. Crear una función `ordenarNumeros` que tome un array de números como parámetro y retorne un nuevo array con los números ordenados de menor a mayor.

function ordenarNumeros(array){
    return array.sort();
}

console.log('Array original: ' + array);
console.log('Array ordenado: ' + ordenarNumeros(array));

//25. Crear una función `eliminarEstudiante` que tome un array de estudiantes y un nombre, y retorne un nuevo array sin el estudiante con ese nombre.

function eliminarEstudiante(estudiantes, nombre){
    let arrayFiltrado = [];
    for(let i = 0; i < estudiantes.length; i++){
        if(estudiantes[i].nombre !== nombre){
            arrayFiltrado.push(estudiantes[i]);
        }
    }
    return arrayFiltrado;
}

estudiantes = eliminarEstudiante(estudiantes, nombreEstudiante);
console.log('Array estudiantes sin el estudiante con nombre ' + nombreEstudiante + ': ');
console.log(estudiantes);

//26. Crear una función `totalCarrito` que tome un array de productos y retorne el precio total de los productos.

function totalCarrito(productos){
    let total = 0;
    for(let i = 0; i < productos.length; i++){
        total += productos[i].precio;
    }
    return total;
}

console.log('Total del carrito: ' + totalCarrito(carrito.productos));

//Uso avanzado de Funciones y Objetos

//27. Crear una función `crearCalculadora` que retorne un objeto con métodos `sumar`, `restar`, `multiplicar` y `dividir`.

function crearCalculadora(){
    return {
        sumar: function(num1, num2){
            return num1 + num2;
        },
        restar: function(num1, num2){
            return num1 - num2;
        },
        multiplicar: function(num1, num2){
            return num1 * num2;
        },
        dividir: function(num1, num2){
            return num1 / num2;
        }
    }
}

let calculadora = crearCalculadora();
console.log('Calculadora: ');
console.log(num1 + ' + ' + num2 + ' = ' + calculadora.sumar(num1, num2));
console.log(num1 + ' - ' + num2 + ' = ' + calculadora.restar(num1, num2));
console.log(num1 + ' * ' + num2 + ' = ' + calculadora.multiplicar(num1, num2));
console.log(num1 + ' / ' + num2 + ' = ' + calculadora.dividir(num1, num2));

//28. Crear una función `crearCuentaBancaria` que retorne un objeto con métodos `depositar`, `retirar` y `saldo`.

function crearCuentaBancaria(){
    return {
        saldo: 0,
        depositar: function(monto){
            this.saldo += monto;
            console.log(`Se depositaron ${monto}`);
        },
        retirar: function(monto){
            this.saldo -= monto;
            console.log(`Se retiraron ${monto}`);
        }
    }
}

let cuentaBancaria = crearCuentaBancaria();
console.log('Cuenta bancaria: ');
console.log('Saldo: ' + cuentaBancaria.saldo);
cuentaBancaria.depositar(100);
console.log('Saldo: ' + cuentaBancaria.saldo);
cuentaBancaria.retirar(50);
console.log('Saldo: ' + cuentaBancaria.saldo);

//29. Crear un constructor `Libro` con propiedades `titulo`, `autor` y `paginas`, y un método `detalles` que imprima la información del libro.

function Libro(titulo, autor, paginas){
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
}

Libro.prototype.detalles = function(){
    console.log(`Título: ${this.titulo} - Autor: ${this.autor} - Páginas: ${this.paginas}`);
}

let libro = new Libro('Libro 1', 'Autor 1', 100);
libro.detalles();

//Proyecto Final: Manejo de Datos

//30. Crear un programa que simule una lista de tareas (`to-do list`) utilizando objetos y arrays. Debe permitir agregar tareas, marcar tareas como completadas y listar las tareas pendientes.

function Tarea(tarea){
    this.tarea = tarea;
    this.completada = false;
}

function ListaTareas(){
    this.tareas = [];
}

ListaTareas.prototype.agregarTarea = function(tarea){
    this.tareas.push(tarea);
    console.log(`Se agregó la tarea ${tarea.tarea}`);
}

ListaTareas.prototype.marcarTareaCompletada = function(tarea){
    for(let i = 0; i < this.tareas.length; i++){
        if(this.tareas[i].tarea === tarea){
            this.tareas[i].completada = true;
            console.log(`Se marcó la tarea ${tarea} como completada`);
        }
    }
}

ListaTareas.prototype.listarTareasPendientes = function(){
    let tareasPendientes = [];
    for(let i = 0; i < this.tareas.length; i++){
        if(!this.tareas[i].completada){
            tareasPendientes.push(this.tareas[i]);
        }
    }
    return tareasPendientes;
}

let listaTareas = new ListaTareas();
listaTareas.agregarTarea(new Tarea('Tarea 1'));
listaTareas.agregarTarea(new Tarea('Tarea 2'));
listaTareas.agregarTarea(new Tarea('Tarea 3'));
listaTareas.marcarTareaCompletada('Tarea 2');
console.log('Tareas pendientes: ');
console.log(listaTareas.listarTareasPendientes());