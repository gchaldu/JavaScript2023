let numero = 123;
console.log('---------------------------------------------------------------');
console.log(numero + 100);  

let cadena = 'cadena de caracteres';
console.log(cadena.toUpperCase());
console.log(cadena.split(" "));


//! ----------Variables: let, const----------
//? 1. Declarar una variable `nombre` y asignarle tu nombre. Imprimir en la consola.
let nombre = 'sergio';
console.log('---------01-----------------------------------------------------');
console.log(nombre);
//? 2. Declarar dos variables numéricas `num1` y `num2`, y calcular su suma. Imprimir el resultado.
let num1 = 36;
let num2 = 28;
let suma = num1 + num2;
console.log('---------02-----------------------------------------------------');
console.log(suma);
//? 3. Declarar una constante `PI` con el valor 3.14159. Imprimir en la consola.
const PI = 3.14159;
console.log('---------03-----------------------------------------------------');
console.log('Const PI: ' + PI);
console.log('Math.PI: ' + Math.PI);

//! ----------Funciones: function----------
//? 4. Crear una función `saludar` que tome un parámetro `nombre` y retorne un saludo personalizado.
function saludar(name) {
    console.log('Hola ' + name);
}
console.log('---------04-----------------------------------------------------');
saludar(nombre);
    //? 4.1 Igual con Arrow Function
    //*saludar2('Saludar 2 despues'); no funciona porque no esta declarada aun, => son variables que se comportan como func
    const saludar2 = (name) => {console.log('Hola ' + name);};
    saludar2('Saludar 2 despues');
//? 5. Crear una función `esPar` que tome un número como parámetro y retorne `true` si es par, y `false` si es impar.
function esPar(numero) {
    if(numero % 2 === 0){ 
        return true;
    }else{
        return false;
    }
}
console.log('---------05-----------------------------------------------------');
console.log(esPar(4));
console.log(esPar(5));
//? 6. Crear una función `sumarArray` que tome un array de números como parámetro y retorne la suma de sus elementos.
function sumarArray(unArr) {
    let respuesta = 0;
    for(i=0; i<unArr.length; i++){
        respuesta += unArr[i];
    }
    return respuesta;
}
let unArrSum = [8,3,5,7];
console.log('---------06-----------------------------------------------------');
console.log('Suma del array = ' + sumarArray(unArrSum));

//! ----------Objetos literales y constructores----------
//? 7. Crear un objeto literal `persona` con las propiedades `nombre`, `edad` y `profesion`.
let persona = {
    nombre: 'sergio',
    edad: 36,
    profesion: 'programador'
};
console.log('---------07-----------------------------------------------------');
console.log(')Nombre: ' + persona.nombre + ' )Edad: ' + persona.edad + ' )Profesion: ' + persona.profesion);
//? 8. Crear un constructor `Producto` que tome parámetros `nombre`, `precio` y `stock`, y cree un objeto con esas propiedades.
function Producto(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
};
let unProducto = new Producto('Una pc', 20000, 3);
console.log('---------08-----------------------------------------------------');
console.log(unProducto);
//? 9. Crear un objeto `pelicula` utilizando el constructor `Pelicula` con propiedades como `titulo`, `director` y `anio`.
function Pelicula(titulo, director, anio) {
    this.titulo = titulo;
    this.director = director;
    this.anio = anio;
};
let pelicula = new Pelicula('La Momia', 'Un turco', 1999);
console.log('---------09-----------------------------------------------------');
console.log('Una pelicula: ' + pelicula.titulo + ' ' + pelicula.director + ' ' + pelicula.anio); 

//! ----------Arrays----------
//? 10. Crear un array `frutas` con varios nombres de frutas. Imprimir el tercer elemento del array.
let frutaArr = ['pera', 'manzana', 'mandarina', 'sandia', 'melon'];
console.log('---------10-----------------------------------------------------');
console.log('La tercer fruta: ' + frutaArr[2]);
//? 11. Agregar una fruta más al final del array `frutas`. Imprimir el array actualizado.
frutaArr.push('frutilla');
console.log('---------11-----------------------------------------------------');
console.log('Arr de frutas: ' + frutaArr);
//? 12. Crear una función `filtrarPares` que tome un array de números como parámetro y retorne un nuevo array solo con los números pares.
function filtrarPares(unArrNums) {
    let arrRta = [];
    for(i=0; i<unArrNums.length; i++) {
        if(unArrNums[i] % 2 == 0) {
            arrRta.push(unArrNums[i]);
        }
    }
    return arrRta;
};
let unArrNumFilt = [9,8,7,6,5,4,3,2,1];
let unArrFilt = filtrarPares(unArrNumFilt);
console.log('---------12-----------------------------------------------------');
console.log('Array de pares filtrados: ' + unArrFilt); 

//! ----------Funciones y Objetos combinados----------
//? 13. Crear una función `crearPersona` que tome parámetros `nombre` y `edad`, y retorne un objeto persona con esas propiedades.
function crearPersona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
};
let personaCreada = new crearPersona('Persona Creada', 28);
console.log('---------13-----------------------------------------------------');
console.log(personaCreada);
//? 14. Crear una función `obtenerInfo` que tome un objeto persona como parámetro y retorne una cadena con su información.
function obtenerInfo(persona) {
    let cadenaPersona = [];
    cadenaPersona.push(persona.nombre);
    cadenaPersona.push(persona.edad);
    return cadenaPersona;
};
console.log('---------14-----------------------------------------------------');
console.log(obtenerInfo(personaCreada)); //* persona creada lin 105

//! ----------Más sobre Arrays y Funciones----------
//? 15. Crear una función `duplicarArray` que tome un array de números como parámetro y retorne un nuevo array con cada elemento duplicado.
function duplicarArray(unArr) {
    const arrDup = [...unArr];
    return arrDup;
};
const unArr15 = ['Tornillo','Clavo','Bulon'];
const unArrDup15 = duplicarArray(unArr15);
console.log('---------15-----------------------------------------------------');
unArr15.shift();
console.log(unArr15);
console.log(unArrDup15);
//? 16. Crear una función `invertirCadena` que tome una cadena como parámetro y retorne la cadena invertida.
function invertirCadena(cadena) {
    let arrInv = cadena.split('');
    arrInv.reverse();
    let invCad = arrInv.join('');
    return invCad;
};
let unaInvertCadena = invertirCadena('ivaN ehT nioJ');
console.log('---------16-----------------------------------------------------');
console.log(unaInvertCadena);
//? 17. Crear una función `filtrarPorLongitud` que tome un array de palabras y un número como parámetro, y retorne un nuevo array con las palabras que tienen una longitud mayor al número.
function filtrarPorLongitud(unArr, num) {
    let resArr = [];
    unArr.forEach(element => {
        if(element.length > num){
            resArr.push(element);
        }
    });
    return resArr;
};
let arrStr = ["Saab", "Volvo", "BMW", "Banana", "Orange", "Apple", "Mango"];
let arrFiltNum = filtrarPorLongitud(arrStr,5);
console.log('---------17-----------------------------------------------------');
console.log(arrFiltNum);

//! ----------Objetos y Arrays de Objetos----------
//? 18. Crear un array de objetos `estudiantes`, donde cada objeto tenga propiedades como `nombre`, `edad` y `promedio`.
function Estudiante(nombre, edad, promedio) {
    this.nombre = nombre;
    this.edad = edad;
    this.promedio = promedio;
};
let estudiante1 = new Estudiante('Jorge', 28, 8);
let estudiante2 = new Estudiante('Gabriel', 18, 7);
let estudiante3 = new Estudiante('Marcos', 24, 9);
let arrEstud = [estudiante1, estudiante2, estudiante3];
console.log('---------18-----------------------------------------------------');
console.log(arrEstud);
//? 19. Crear una función `buscarEstudiante` que tome un array de estudiantes y un nombre, y retorne el objeto del estudiante con ese nombre.
function buscarEstudiante(arrEst, nombreEst) {
    let resObj = {};
    arrEst.forEach(item => {
        if(item.nombre == nombreEst){
            resObj = item;
        }
    });
    return resObj;
};
let estBuscado = {};
estBuscado = buscarEstudiante(arrEstud, 'Gabriel');
console.log('---------19-----------------------------------------------------');
console.log(estBuscado);
//? 20. Crear una función `promedioClase` que tome el array de estudiantes y retorne el promedio de sus promedios.
function promedioClase(arrEst) {
    let sum = 0;
    let cant = arrEst.length;
    arrEst.forEach(item => {
        sum += item.promedio
    });
    let promedio = sum/cant;
    return promedio;
};
let proEstArr = promedioClase(arrEstud); //* arrrEstud  lin 155
console.log('---------20-----------------------------------------------------');
console.log('Promedio: ' + proEstArr + '  (Deberia dar 8)');  

//! ----------Uso avanzado de Objetos y Funciones----------
//? 21. Crear un objeto `coche` con propiedades como `marca`, `modelo` y `anio`, y métodos como `arrancar` y `detener`.
function Coche(marca, modelo, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}
Coche.prototype.arrancar = function() {
        console.log('El vehiculo marca ' + this.marca + ' modelo ' + this.modelo + ' del año ' + this.anio + ' ARRANCA!!!!');
        };
Coche.prototype.detener = function() {
        console.log('El vehiculo marca ' + this.marca + ' modelo ' + this.modelo + ' del año ' + this.anio + ' se Detiene!!!!');
        };
let unCoche = new Coche('Renault', 'Mod 12', '1990');
console.log('---------21-----------------------------------------------------');
unCoche.arrancar();
unCoche.detener();    
//? 22. Crear un constructor `Persona` con propiedades `nombre` y `edad`, y un método `saludar` que imprima un saludo personalizado.
function Persona22(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
};
Persona22.prototype.saludoPersonalizado = function() {
        console.log(this.nombre + ' de ' + this.edad + ' años de edad, te saluda');
        };
let unaPersona22 = new Persona22('Carlos', 54);
console.log('---------22-----------------------------------------------------');
unaPersona22.saludoPersonalizado();
//? 23. Crear un método `agregarProducto` a la función constructora `Carrito` que agregue un producto al carrito.
function Carrito(cosas) {
    this.cosas = cosas
};
Carrito.prototype.agregarProducto = function(producto) {
        this.cosas.push(producto);
        };
let unCarrito = new Carrito(['Jugo','Papas']);
unCarrito.agregarProducto('Tomate');
console.log('---------23-----------------------------------------------------');
console.log(unCarrito);

//! ----------Manipulación de Arrays y Objetos----------
//? 24. Crear una función `ordenarNumeros` que tome un array de números como parámetro y retorne un nuevo array con los números ordenados de menor a mayor.
function ordenarNumeros(unArrNum) {
    return unArrNum.sort(function(a, b){return a - b}) //* W3 JS ARRAY SORT
};
let arrNum24 = [4,76,3,69,46,13,87,76];
console.log('---------24-----------------------------------------------------');
console.log(ordenarNumeros(arrNum24));
//? 25. Crear una función `eliminarEstudiante` que tome un array de estudiantes y un nombre, y retorne un nuevo array sin el estudiante con ese nombre.
function eliminarEstudiante(arrEst25, nombEst25) {
    let resArr = [];
    arrEst25.forEach(item => {    //!
        if(item.nombre != nombEst25){
            resArr.push(item);  //!
        }
    });
    return resArr;
};
const unArrPrePurgado = [...arrEstud];  //* lin 155
const unArrPurgado = eliminarEstudiante(unArrPrePurgado, 'Gabriel');   //!
console.log('---------25-----------------------------------------------------');
console.log(unArrPurgado);
//? 26. Crear una función `totalCarrito` que tome un array de productos y retorne el precio total de los productos.
function totalCarrito(arrProd) {
    let totalCompra = 0;
    arrProd.forEach(item =>{
        totalCompra += item.precio;
    });
    return totalCompra;
};
let unCarritoCompras = [{producto: 'banana', precio: 25},{producto: 'pera', precio: 30},{producto: 'manzana', precio: 15},{producto: 'melon', precio: 50}];
let totalCompra26 = 0;
totalCompra26 = totalCarrito(unCarritoCompras);
console.log('---------26-----------------------------------------------------');
console.log('El total de las compras es: $' + totalCompra26 + ' (debe dar 120)');

//! ----------Uso avanzado de Funciones y Objetos----------
//? 27. Crear una función `crearCalculadora` que retorne un objeto con métodos `sumar`, `restar`, `multiplicar` y `dividir`.
function CrearCalculadora() {};
CrearCalculadora.prototype.sumar = function(num1, num2) {
    let suma = num1 + num2;
    return suma;
};
CrearCalculadora.prototype.restar = function(num1, num2) {
    let resta = num1 - num2;
    return resta;
};
CrearCalculadora.prototype.multiplicar = function(num1, num2) {
    let multiplicacion = num1 * num2;
    return multiplicacion;
};
CrearCalculadora.prototype.dividir = function(num1, num2) {
    let division = num1 / num2;
    return division;
};
let unaCalculadora = new CrearCalculadora();
let unaSuma = unaCalculadora.sumar(7,3);
let unaresta = unaCalculadora.restar(15,5);
let unaMulti = unaCalculadora.multiplicar(5,2);
let unaDiv = unaCalculadora.dividir(70,7);
console.log('---------27-----------------------------------------------------');
console.log('Resultados(sum-res-mult-div): ' + unaSuma + ' ' + unaresta + ' ' + unaMulti + ' ' + unaDiv);
//? 28. Crear una función `crearCuentaBancaria` que retorne un objeto con métodos `depositar`, `retirar` y `saldo`.
function CrearCuentaBancaria() {
    this.saldo = 0;
};
CrearCuentaBancaria.prototype.depositar = function(monto) {
    this.saldo += monto;
    return 'Se depositaron $' + monto + ' en su cuenta, su saldo actual es de $' + this.saldo;
};
CrearCuentaBancaria.prototype.retirar = function(monto) {
    if(this.saldo >= monto){
        this.saldo -= monto;
        return 'Se retiraron $' + monto + ' de su cuenta, su saldo actual es de $' + this.saldo;
    }else{
        return 'Su saldo es insuficiente para retirar ese monto, ($' + monto + ') su saldo es de $' + this.saldo;
    }
};
const cuentaBanc28 = new CrearCuentaBancaria();
console.log('---------28-----------------------------------------------------');
console.log(cuentaBanc28.depositar(100));
console.log(cuentaBanc28.retirar(50));
console.log(cuentaBanc28.retirar(70));
CrearCuentaBancaria.prototype.saldo = function() {return this.saldo};
//? 29. Crear un constructor `Libro` con propiedades `titulo`, `autor` y `paginas`, y un método `detalles` que imprima la información del libro.
function Libro(titulo, autor, paginas) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
};
Libro.prototype.detalles = function() {
    return console.log('Titulo: ' + this.titulo + ' Autor: ' + this.autor + ' Paginas: ' + this.paginas);
};
let libro29 = new Libro('Libro1', 'Autor1', 53);
console.log('---------29-----------------------------------------------------');
libro29.detalles();
//! ----------Proyecto Final: Manejo de Datos----------
//? 30. Crear un programa que simule una lista de tareas (`to-do list`) utilizando objetos y arrays. Debe permitir agregar tareas, marcar tareas como completadas y listar las tareas pendientes
function toDoList(){
    this.lista = new Array();
};
toDoList.prototype.agregarTarea = function(tarea){
    let nuevaTarea = {};
    nuevaTarea.nombre = tarea;
    nuevaTarea.estado = 'Pendiente';
    this.lista.push(nuevaTarea);
};
toDoList.prototype.listarTareas = function(){
    console.log(this.lista);
};
toDoList.prototype.completarTarea = function(compTarea){
    let compTar = this.lista.findIndex(item => item.nombre == compTarea);
    if(compTar != -1){
        this.lista[compTar].estado = 'Completa';
    }else{
        console.log('La actividad "' + compTarea + '" no se encuentra en la lista');
    }
}
let toDoLista30 = new toDoList();
console.log('---------30-----------------------------------------------------');
toDoLista30.agregarTarea('limpiar');
toDoLista30.agregarTarea('lijar');
toDoLista30.agregarTarea('pintar');
toDoLista30.agregarTarea('2° pint');
toDoLista30.agregarTarea('pulir');
toDoLista30.completarTarea('limpiar');
toDoLista30.completarTarea('lijar');
toDoLista30.completarTarea('lacado');
toDoLista30.listarTareas();

