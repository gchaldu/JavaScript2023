/* 18. Crear un array de objetos `estudiantes`, donde cada objeto tenga propiedades como
`nombre`, `edad` y `promedio`.
 */

class Estudiante {
    constructor(nombre, edad, promedio){
        this.nombre = nombre;
        this.edad = edad;
        this.promedio = promedio;
    }
}

var Ramiro = new Estudiante("Ramiro", 24, 9.5);
var Jose = new Estudiante("Jose", 25, 8);
var Mauro = new Estudiante("Mauro", 32, 7.6);

const arregloEstudiantes = new Array;
arregloEstudiantes.push(Ramiro);
arregloEstudiantes.push(Jose);
arregloEstudiantes.push(Mauro);

console.log(arregloEstudiantes);