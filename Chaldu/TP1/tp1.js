//10.
const frutas = ["naranja", "manzana", "banana", "uva"]

console.log(frutas[2]);

//11.
frutas.push("mandarina")

console.log(frutas);

//12.
const numeros = [3,7,9,5,1]

console.log(numeros);

let numerosPares = numeros.filter(num => num %2 == 0)

console.log(numerosPares);


//15.
let duplicarArray = function (arr) {
    return arr.map(num => num * 2)
}

const numerosDuplicados = duplicarArray(numeros)

console.log(numerosDuplicados);

//16.
let invertirCadena = function (arr) {
    let i = 0
    let newArray = []
    arr.forEach(num=>{  
        i++
    });
    for(i>0; i--;){
        newArray.push(arr[i])
    }
    return newArray
}

const arregloInvertido = invertirCadena(numeros)

console.log(arregloInvertido);

//17.
const palabras = ["auto", "nombre", "si", "saracatunga"]

let filtrarPorLongitud = function (arr, num){
    let newArray = []
    arr.forEach((word, i)=>{
        if (word.length > num) {
            newArray.push(arr[i])
        }
    })
    return newArray
}

const arregloPalabras = filtrarPorLongitud(palabras, 4)

console.log(arregloPalabras);

//18.
function estudiante(nombre, edad, promedio){
    this.nombre = nombre;
    this.edad = edad;
    this.promedio = promedio;
}

var student1 = new estudiante("Santi", 24, 7)
var student2 = new estudiante("Peter", 23, 9)
var student3 = new estudiante("Valen", 22, 6)

const estudiantes = [student1, student2, student3]

console.log(estudiantes);

//19.
let buscarEstudiante = function (arr, name){
    var student = new estudiante()
    arr.forEach((std, i)=>{
        if (std.nombre == name) {
            student = arr[i]
        }
    })
    return student
}

console.log(buscarEstudiante(estudiantes,"Valen"));

//20.
let promedioClase = function (arr){
    var sumaNotas = 0
    let i = 0
    arr.forEach(std =>{
        sumaNotas += std.promedio
        i++
    })
    return sumaNotas / i
}

console.log(promedioClase(estudiantes));

//23.

function producto(nombre, precio, stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
}

const agregarProducto = new Function('product', 'cart', 'return cart.push(product)');

//24.
let ordenarNumeros = function(arr){
    let aux1 = [...arr]
    let aux2 = []
    let indiceMenor
    let menor
    while(aux1.length != 0){
        menor = aux1[0]
        indiceMenor = 0
        aux1.forEach((num, i) => {
            if (num < menor) {
                menor = num
                indiceMenor = i
            }
        });
        aux1.splice(indiceMenor, 1)
        aux2.push(menor)
    }
    console.log(aux1);
    return aux2
}

const numeritos = [5,2,6,3,1]

console.log(ordenarNumeros(numeritos));

let eliminarEstudiante = function(arr, name){
    aux = [...arr]
    aux.forEach((est, i) => {
        if (est.nombre == name) {
            aux.splice(i, 1)
        }
    })
    return aux
}

console.log(eliminarEstudiante(estudiantes, "Peter"));

const carrito = []

agregarProducto(new producto("Galletitas", 350, 10), carrito)
agregarProducto(new producto("Leche", 200, 30), carrito)
agregarProducto(new producto("Cafe", 500, 8), carrito)

console.log(carrito);

//26.
let totalCarrito = function(arr){
    var suma = 0
    arr.forEach(prod => {
        suma += prod.precio
    });
    return suma
}

console.log(totalCarrito(carrito));