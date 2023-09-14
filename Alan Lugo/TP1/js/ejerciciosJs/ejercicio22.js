/* 22. Crear un constructor `Persona` 
con propiedades `nombre` y `edad`, y un método `saludar`
que imprima un saludo personalizado. */

class Persona1 {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(){
        console.log(this.nombre+"te saluda <3");
    }
}

console.log("Ejercicio 22- ");
console.log(Persona1);