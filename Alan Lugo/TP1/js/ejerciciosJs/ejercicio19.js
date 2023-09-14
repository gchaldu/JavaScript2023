/* 19. Crear una función `buscarEstudiante` que 
tome un array de estudiantes y un nombre, y
retorne el objeto del estudiante con ese nombre.
 */
 
function buscarEstudiante (arrayEstudiante, nombreAbuscar) {
    const estudianteAbuscar = arrayEstudiante.find(({nombre}) => nombre  === nombreAbuscar);
    return estudianteAbuscar; 
}

console.log("Ejercicio 19- ");
console.log("El estudiante a buscar es: ");
console.log(buscarEstudiante(arregloEstudiantes, "Mauro"));