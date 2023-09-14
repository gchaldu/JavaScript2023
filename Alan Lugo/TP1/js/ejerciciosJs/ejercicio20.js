/* 20. Crear una función `promedioClase` 
que tome el array de estudiantes y retorne el promedio
de sus promedios. */

function promedioClase(arrayEstudiante) {
    const promedioEstudiantes = arrayEstudiante.reduce((total, siguiente) => total + siguiente.promedio, 0) / arrayEstudiante.length;
    return promedioEstudiantes;
}

console.log("Ejercicio 20- ");
console.log("El promedio de todos los estudiante es de: ");
console.log(promedioClase(arregloEstudiantes));