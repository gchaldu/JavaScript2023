// "use strict";

// Ejercicio 1: Crea una Promise que se resuelva después de 2 segundos y muestra un mensaje cuando se resuelva.

const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Se resuelve después de 3 segundos');
    }, 3000);
});

promise.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
});


// Otra forma
let nombre = "Juan";


const promise1 = new Promise ((resolve, reject)=>{
    if (nombre=="Juan") resolve(nombre)
    else reject("Error en el nombre")
});

promise1.then((nombre)=>console.log(nombre)).catch((err)=>console.log(err));


// Misma forma con temporizador
const promise2 = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        if (nombre=="Juan") resolve(nombre)
        else reject("Error en el nombre")
    },4000)
});

promise2.then((nombre)=>console.log(nombre)).catch((err)=>console.log(err)); 


// Ejercicio 2: Crea una función que acepte un número y devuelva una Promise que se resuelva con el doble del número después de 1 segundo.


function aceptarNumero(numero){
    return new Promise ((resolve)=>setTimeout(()=>resolve(numero*2),2000))
};

function aceptarNumero2 (numero){
    return new Promise ((resolve, reject)=>{
        if (typeof numero === "number") resolve(numero*2)
        else reject("Error en el tipo de dato")
    })
};

aceptarNumero(2).then((num)=>console.log(num + " primera funcion"))
.catch((err)=>console.log(err));

aceptarNumero2("sd").then((num)=>console.log(num)).catch((err)=>console.log(err));

// Ejercicio 3: Crea dos Promises que se resuelvan después de 3 segundos cada una. Combina ambas Promises para mostrar un mensaje cuando ambas se hayan resuelto. (Pista: usar Promise.all)

const prom1= new Promise ((resolve)=> setTimeout(()=>resolve ("Resuelta la prom1"),3000));

const prom2= new Promise ((resolve)=> setTimeout(()=>resolve ("Resuelta la prom2"),3000));

Promise.all([prom1,prom2]).then((msj)=>console.log(msj)); 



// Ejercicio 4: Crea una función que simule una solicitud HTTP asincrónica utilizando setTimeout y devuelva una Promise que se resuelva con un objeto JSON después de 2 segundos.

const objeto = {
    nombre: "Juan",
    apellido: "Lopez",
    edad: 33
}

function obtenerJSON (){
    return new Promise((resolve)=> setTimeout(()=>resolve(objeto), 2000))
}

obtenerJSON().then((nombre)=>console.log(nombre))

// Ejercicio 5: Crea una función que acepte un arreglo de números y devuelva una Promise que se
// resuelva con la suma de los números después de 1 segundo. (Usar reduce)

let arreglo = [1,2,3,4,5];

function sumaArreglo (){
    return new Promise ((resolve)=>{
        setTimeout(()=> resolve(arreglo),1000);
    })
}

sumaArreglo().then((msj)=>console.log(msj));

// Ejercicio 6: Crea una función asincrónica que haga una solicitud HTTP a una API de tu elección
// utilizando la función fetch y devuelva el resultado en formato JSON. Maneja los errores
// posibles.

    
fetch("https://reqres.in/api/users/2")
.then((res)=>res.json())
.then((data)=>console.log(data))
.catch((err)=>console.log(err));

// Ejercicio 7: Investigar una Api que se pueda paginar. Crea una función asincrónica que haga una serie de solicitudes HTTP secuenciales para obtener datos de una API paginada. Utiliza async/await para manejar la paginación hasta que todos los datos se hayan recuperado.


async function obtenerPagina (...pagina){

    for(let i=0; i<pagina.length; i++){
        let respuesta = await fetch(`https://reqres.in/api/users?page=${pagina[i]}`);
        let data = await respuesta.json();
        console.log(data);
    }
    
}

obtenerPagina(1,2);