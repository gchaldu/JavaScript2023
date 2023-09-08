console.log(
    "Hola mundo!"
);

//**Crear una funcion que devuelva la suma de un array de numeros*/

function arraySum(array){
    let sum = 0;
    array.forEach(element => {
        sum += element;
        //**console.log("El elemento es: ".concat(element)); */
    });

    return sum;
}

let numbersArray = [4, 5, 6, 9, 10, 55, 100];

console.log("La suma del array es: ".concat(arraySum(numbersArray)));

//**Crear objetos*/

const person = {
    name : "Juancito",
    edad : 27,
    profession : "estudiante",
    hello : function(){
        return ("Hola soy " +this.name+ ", tengo " +this.edad+ " años y te estoy saludando.");
    }
};

function Producto(name, price, stock){
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.mostrar = function(){
        console.log(this.name+ ", precio de " +this.price+ " con un stock de " +this.stock);
    }
}

const prodructo = new Producto("Monitor 24", 80000, 5);

prodructo.mostrar();

function Movie(title, director, year){
    this.title = title;
    this.director = director;
    this.year = year;
    this.mostrar = function(){
        console.log("Pelicula: " +this.title+ "\nDirector: " +this.director+ "\nAño: " +this.year);
    }
}

let movie = new Movie("The Fast and Furious", "Rob Cohen", 2001);
movie.mostrar();

//**Arrays */

let fruits  = ["manzana", "naranja", "mandarina", "anana", "limon"];

console.log(fruits.at(3));

fruits.push("uva");

console.log(fruits);

function evenfilter(numbersArray){
    let array = new Array();
    numbersArray.forEach(element => {
        if(element % 2 == 0){
            console.log("object:" +element);
            array.push(element);
        }
    });

    return array;
}

//console.log("Soy un array de pares: " + evenfilter(numbersArray));

//**Funciones y objetos combinados */

function Person(name, age){
    this.name = name;
    this.age = age;
}

function obtainInfo(persona){
    return("Hola soy " +persona.name+ " y tengo " +persona.age+ " años.");
}

function createPerson(name,  age){
    let pers = new Person(name, age);
    return pers;
}

const per1 = createPerson("Juan", 27);

//**console.log(obtainInfo(per1)); */

//**Fuincioones y arrays */

function duplicateArray(array){
    let arr = new Array();
    array.forEach(element => {
        arr.push(element);
        arr.push(element);
    });

    return arr;
}

let cadena = "Hola mundo!, aguante boca."

function invertirCadena(cadena){
    //**Priemro dividimos le  string con un split()*/
    let arrString = cadena.split("");
    
    //**Segundo damos vuelta el array con reverse() */
    let invertArr = arrString.reverse();

    //**Unimos el array en un string*/
    joinString = invertArr.join("");

    //**Retornamos el stirng*/
    return joinString;
}

function filtrarPorLongitud(array, numero){
    let arrReturn = new Array();

    array.forEach(element => {
        if(element.length > numero){
            arrReturn.push(element);
        }
    })

    return arrReturn;
}

//console.log(filtrarPorLongitud(fruits, 5));

//**Objetos y arrays */

function Estudiante(nombre, edad, promedio){
    this.nombre = nombre;
    this.edad = edad;
    this.promedio = promedio;
}

function crearEstudiante(nombre, edad, promedio){
    let estudiante = new Estudiante(nombre, edad, promedio);
    return estudiante;
}

function mostrarEstudiante(estudiante){
    return("Estudiante: " +estudiante.nombre+ "\nEdad: " +estudiante.edad+ "\nPromedio: " +estudiante.promedio);
}

let est1 = crearEstudiante("Juan", 27, 8.5);
let est2 = crearEstudiante("Maria", 25, 7.9);
let est3 = crearEstudiante("Roberto", 20, 7.4);
let est4 = crearEstudiante("Matias", 22, 9.4);
let est5 = crearEstudiante("Emi", 27, 8.3);

let arr = new Array();

arr.push(est1);
arr.push(est2);
arr.push(est3);
arr.push(est4);
arr.push(est5);

console.log(arr);

function buscarEstudiante(arrEstudiantes, nombre){
    let estReturn;

    arrEstudiantes.forEach(element => {
        if(element.nombre == nombre){
            estReturn = element;
        }
    });

    return estReturn;
}

console.log(mostrarEstudiante(buscarEstudiante(arr, "Matias")));

function promedioClase(arrEst){
    let sum = 0;

    arrEst.forEach(element => {
        sum += element.promedio;
    });

    return sum / arrEst.length;
}

console.log("El promedio de la clase es: " +promedioClase(arr));

//**Obbjetos y  funciones */

function Coche(marca, modelo, anio){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.arrancar = function(){
        console.log("Soy el auto " +this.marca+ " y estoy arrancando.");
    }
    this.detener = function(){
        console.log("Soy el auto " +this.marca+ " y me estoy deteniendo.");
    }
}

let car1 = new Coche("mercedez-benz", "clase C", 2022);

car1.arrancar();
car1.detener();

function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function(){
        console.log("Soy " +this.nombre+ ", tengo " +this.edad+ " y te estoy saludando.");
    }
}

const persona1 = new Persona("Juancito", 27);

persona1.saludar();

function Carrito(){
    this.arrProd = new Array();
    this.agregarProducto = function(producto){
        this.arrProd.push(producto);
    }
    this.verCarrito = function(){
        this.arrProd.forEach(element => {
            console.log("Producto: " +element.name);
        });
    }
    this.precioTotal = function(){
        let sumTotal = 0;
        this.arrProd.forEach(element => {
            sumTotal += element.price;
        });
        return sumTotal;
    }
}

let carrito = new Carrito();

let cereales = new Producto("Cereales", 1200, 20);
let quesoCrema = new Producto("Queso crema", 800, 20);
let nesquik = new Producto("Nesquik", 600, 20);
let leche = new Producto("Leche", 700, 20);
let panLactal = new Producto("Pan lactal", 1500, 20);

carrito.agregarProducto(cereales);
carrito.agregarProducto(quesoCrema);
carrito.agregarProducto(nesquik);
carrito.agregarProducto(leche);
carrito.agregarProducto(panLactal);

carrito.verCarrito();
console.log("Precio total: " +carrito.precioTotal());

function ordenarNumeros(arrayN){
    let arrayOrdenado = new Array();
    let arrayLenght = arrayN.length;

    while(arrayOrdenado.length != arrayLenght){
        let menor = arrayN[0];
        for (let index = 1; index < arrayN.length; index++) {
            if(arrayN[index] < menor){
                menor = arrayN[index]; 
            }
        }

        arrayN.splice(arrayN.indexOf(menor), 1);
        arrayOrdenado.push(menor);
    }

    return arrayOrdenado;
}

let arrayNumeros = [1, 4, 1, 8, 1, 9, 22, 45, 15, 30, 69, 11, 5, 10];

//console.log(arrayNumeros);

//console.log(ordenarNumeros(arrayNumeros));

//console.log(arrayNumeros);

function eliminarEstudiante(arrE, nombre){
    arrE.forEach(element => {
        if(element.nombre == nombre){
            arrE.splice(arrE.indexOf(element), 1);
            console.log("Es estudiante " +element.nombre+ " a sido eliminado. ");
        }
    });

    return arrE;
}

//console.log(arr);

//console.log(eliminarEstudiante(arr, "Roberto"));

function crearCalculadora(){

    const calculadora = {
        sumar : function(num1, num2){
            return num1+num2;
        },

        restar : function(num1, num2){
            return num1 - num2;
        },

        multiplicar : function(num1, num2){
            return num1 * num2;
        },

        dividir : function(num1, num2){
            return num1 / num2;
        }
    };

    return calculadora;
}

//Creamos la calculadora
let calc = crearCalculadora();

console.log(calc);

console.log("La suma entre 2 y 4 es: " +calc.sumar(2,4));
console.log("La resta entre 9 y 10 es: " +calc.restar(9,10));
console.log("La multiplicación entre 5 y 6 es: " +calc.multiplicar(5,6));
console.log("La división entre 16 y 8 es: " +calc.dividir(16,8));

function crearCuentaBancaria(){
    const cuentaBancaria = {
        saldo : 0,

        depositar : function(deposito){
            this.saldo += deposito;
        },

        retirar : function(retiro){
            if(this.saldo >= retiro){
                this.saldo -= retiro;
                console.log("Extracción realizada con éxito");
                return retiro;
            }else{
                console.log("No tenes saldo suficiente para realizar la extracción.");
            }
        },

        consultaraldo : function(){
            console.log("Tu saldo es de: " +this.saldo);
        }
    }

    return cuentaBancaria;
}

///Creamso la cuenta
let cuentaB = crearCuentaBancaria();

cuentaB.consultaraldo();

cuentaB.depositar(3000);

cuentaB.consultaraldo();

cuentaB.retirar(3000);

cuentaB.consultaraldo();
