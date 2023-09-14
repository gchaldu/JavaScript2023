/* 21. Crear un objeto `coche` 
con propiedades como `marca`, `modelo` y `anio`, y métodos como
`arrancar` y `detener`. */


class Coche {
    constructor(marca, modelo, anio){
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }

    arrancar(){
        console.log("El auto se ha encendido...");
    }

    detener(){
        console.log("El auto se ha detenido");
    }    
}
console.log("Ejercicio 21- ");
console.log(Coche);