const arregloNumeros = [13, 98, 53, 2, 77]

console.log(arregloNumeros);

//1.
let sumaNumeros = function(arr){
    var suma = 0
    arr.forEach(num => {
        suma += num
    });
    return suma
}

//console.log(sumaNumeros(arregloNumeros));

//2.
//console.log(sumaNumeros(arregloNumeros) / arregloNumeros.length);

//3.
let minMax = function(arr){
    var min = arr[0]
    var max = arr[0]
    arr.forEach(num => {
        if (num < min) {
            min = num
        }
        if (num > max) {
            max = num
        }
    });
    console.log("El minimo es:", min, "y el maximo es:", max);
}

//minMax(arregloNumeros)

//4.
let buscarValor = function(arr, valor){
    var indice
    arr.forEach((num, i) =>{
        if (num == valor) {
            indice = i
        }
    })
    if (indice == null) {
        console.log("No existe un numero con ese valor");
    } else {
        return indice
    }
}

//console.log(buscarValor(arregloNumeros, 77));

//5.
const numerosPares = arregloNumeros.filter(num => num %2 == 0)
const numerosImpares = arregloNumeros.filter(num => num %2 == 1)

//console.log(numerosPares);
//console.log(numerosImpares);

//6.
let eliminarDuplicados = function(arr){
    var comparacion
    for (let i = 0; i < arr.length; i++) {
        comparacion = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] == comparacion) {
                arr.splice(j, 1)
            }
        }
    }
    return arr
}

//console.log(eliminarDuplicados(arregloNumeros));

//7.
let ordenarAscendente = function(arr){
    var ordenados = []
    var menor
    var indice
    while (arr.length > 0) {
        menor = arr[0]
        indice = 0
        arr.forEach((num, i) => {
            if (num < menor) {
                menor = num
                indice = i
            }
        });
        ordenados.push(menor)
        arr.splice(indice, 1)
    }
    return ordenados
}

//console.log(ordenarAscendente(arregloNumeros));

//8.
let eliminarValor = function(arr, valor){
    arr.forEach((num, i) => {
        if (num == valor) {
            arr.splice(i, 1)
        }
    });
    return arr
}

//console.log(eliminarValor(arregloNumeros, 53));

//9.
let combinarArreglos = function(arr1, arr2){
    var combinedArray = [...arr1, ...arr2]
    return eliminarDuplicados(combinedArray)
}

const numbersArray = [31, 98, 66, 1, 77]

console.log(numbersArray);

//console.log(ordenarAscendente(combinarArreglos(arregloNumeros, numbersArray)));

//10.
function producto(nombre, precio, stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
}

const agregarProducto = new Function('product', 'cart', 'return cart.push(product)');

const carrito = []

agregarProducto(new producto("Pan", 900, 18), carrito)
agregarProducto(new producto("Huevos", 800, 11), carrito)
agregarProducto(new producto("Café", 1000, 7), carrito)

console.log(carrito);

//11.
function contacto(nombre, nroTel, mail){
    this.nombre = nombre
    this.nroTel = nroTel
    this.mail = mail
}

const agregarContacto = new Function('contact', 'agenda', 'return agenda.push(contact)')

const agenda = []

agregarContacto(new contacto("Santi", 2233605050, "santi@mail.com"), agenda)
agregarContacto(new contacto("Alan", 2237058080, "alan@mail.com"), agenda)

//12.
var palabras = "Combinar arreglos combina dos arreglos en uno solo, asegurándote de que no haya duplicados"

const parrafo = palabras.split(" ")

//console.log(parrafo);

let buscarPalabras = function (arr, palabra){
    var suma = 0
    arr.forEach(word => {
        if (word == palabra) {
            suma++
        }
    });
    return suma
}

//console.log(buscarPalabras(parrafo, "arreglos"));

//13.
let ordenarPrecios = function (arr){
    var aux = []
    var menor
    var indice
    while (arr.length > 0) {
        menor = arr[0]
        indice = 0
        arr.forEach((prod, i) => {
            if (prod.precio < menor.precio) {
                menor = prod
                indice = i
            }
        });
        aux.push(menor)
        arr.splice(indice, 1)
    }
    return aux
}

//console.log(ordenarPrecios(carrito));

//15.
let eliminarProducto = function(arr, product){
    arr.forEach((prod, i) => {
        if (prod.nombre == product) {
            arr.splice(i, 1)
        }
    });
    return arr
}

//console.log(eliminarProducto(carrito, "Huevos"));

let calcularTotal = function(arr){
    var total = 0
    arr.forEach(prod => {
        total += prod.precio
    });
    return total
}

//console.log(calcularTotal(carrito));
