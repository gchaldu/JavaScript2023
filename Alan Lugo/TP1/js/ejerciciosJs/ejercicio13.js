/* Funciones y Objetos combinados
13. Crear una función `crearPersona` que tome parámetros `nombre` y `edad`, y retorne un
objeto persona con esas propiedades. */

class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}


function crearPersona(nombre, edad) {
    var persona = new Persona(nombre, edad)
    return persona;
}

var alan = new Persona("Alan", 24);

console.log("Ejercicio 13- ");
console.log(crearPersona("ivan", 13));

console.log("El nombre de la persona es: "+alan.nombre);
console.log("La edad de la persona es: "+alan.edad);