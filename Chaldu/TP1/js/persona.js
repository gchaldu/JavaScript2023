"use strict"

function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function () {
        console.log("Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + "años" );

    };
}



const producto = {
    nombre: '',
    precio: 100,
    disponibilidad: true,

    mostrarInfo: function() {
        console.log(`El producto es: ${this.nombre}`);

    },
    informacion: {
        medidas: {
            peso: '10kg',
            medida: '1mt'
        },
        fabricacion: {
            pais: 'china'
        }
    },

}

const medidas2 = {
    diametro: "10cm",
    ancho: "50cm"
}

const resultado = Object.assign(producto,medidas2);

console.log("El ancho del producto es: " + resultado.diametro);

console.log("Peso del producto es: " + producto.informacion.medidas.peso);

Object.freeze(producto);

producto.informacion.medidas.peso = "50kg";

console.log("Peso del producto es: " + producto.informacion.medidas.peso);


console.log(producto);
const {nombre, precio} = producto;
const personaConst = {
    nombre: "Monitor",
    precio: 10,
    disponibilidad: true

}
//===================================================================
//OBJETO CONSTRUCTOR

function Producto(nombre, precio){
    this.nombre = nombre
    this.precio = precio
    this.disponibilidad = this.disponibilidad
}

Producto.prototype.saludar = function () {
    console.log("Hola, mi nombre es "+ this.nombre + "y valgo " + this.precio);
}

//ME TRAIGO LA PERSONA DE LA LINEA 81 (persona1)
Persona.prototype.saludar = function () {
    console.log("Hola, soy una persona y me llamo " + persona1.nombre + "y tengo " + persona1.edad + "anios de edad");
}

console.log(personaConst.precio);
//--------------------------------------------------
var persona1 = new Persona("Alan", 24);
var persona2 = new Persona("Santiago", 24);

//funcion de la persona 1
persona1.saludar();

//Edad de la persona 1
console.log(persona1.edad);

//Nombre de la persona 2
console.log(persona2[`nombre`]);