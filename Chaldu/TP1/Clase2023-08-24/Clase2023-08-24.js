
function persona2(nombre,edad) {
    this.nombre = nombre;
    this.edad = edad;
}

const persona3 = {
    nombre: "Alan",
    edad: 20
}


var santi1 = new persona2("Santi", "20");

const miArray = [1,2,3,4,5,9999];
const meses = ["enero","febrero"];
const deTodo = new Array(20,true,"pepe", santi1);

console.log("La posicion 5 es: " + miArray[5]);

console.log("La persona es: " + deTodo[3]+" "+ deTodo[3]);

//Ejemplo de Spread Operator
//Agregra datos de forma DECLARATIVA

console.log("Ejemplo arreglo con Spread Operator");

let otroArray = [1,2,3,4,5,6,7];

otroArray = [...otroArray, 8,9,10];

console.log(otroArray);

//Ejemplo recorrido con for

const evenNumbers = [];

for(let i = 0; i<otroArray.length; i++){
    if(otroArray[i] % 2 === 0 ){
        evenNumbers.push(otroArray[i]);
        
    }
}
console.log(evenNumbers);

const yyArray = otroArray.filter(num => num % 2 === 0);
console.log(yyArray);

console.log("forEach");

/* forEach trabaja con el arreglo dado, no crea uno nuevo
maneja los datos de el arreglo dado */
otroArray.forEach((numero,index,arr) => {
    arr[index] = numero + 1; 
    console.log(arr[index]);
})

/* Filter me genera otro arreglo 
a partir de los datos de un arreglo dado */
const arrayNuevoConFilter = otroArray.filter(num => num % 2 === 0);
console.log(arrayNuevoConFilter);

//saludar con arrow function(PRUEBA)
const saludar2 = (nombre) => {
    console.log("Hola");
    function saludar(nombre) {
        console.log(nombre + " te saluda");
    }

    function saludarYbailar(nombre) {
        console.log(nombre + " te saluda y baila");
    }
}
saludar2(santi1.nombre);

let arregloNum = [2,4,56,7,8,9];

const [,,cincuentaYseis,,,nueve] = arregloNum;

console.log(cincuentaYseis,nueve);

//ejemplo de map para transformar un arreglo

const numeroAlCuadrado = otroArray.map(num => num ** 2);
console.log("Los numeros al cuadrado: " + numeroAlCuadrado);