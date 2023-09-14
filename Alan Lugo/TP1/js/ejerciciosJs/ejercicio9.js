//Ejercicio 9 
/* . Crear un objeto `pelicula` utilizando el 
constructor `Pelicula` con propiedades como `titulo`,
`director` y `anio`. */

function Pelicula(titulo, director, anio) {
    this.titulo = titulo;
    this.director = director;
    this.anio = anio;
}

const pelicula = new Pelicula("Fast and Furious", "Vin Disel", 2020); 

console.log("Ejercicio 9- ");
console.log(pelicula);
console.log("La pelicula es: " + pelicula.titulo + ", su director es: "+pelicula.director+", y salio el año"+pelicula.anio);
