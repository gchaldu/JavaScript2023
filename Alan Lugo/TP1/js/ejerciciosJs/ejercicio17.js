/* 17. Crear una función `filtrarPorLongitud` que tome un array de palabras y un número como
parámetro, y retorne un nuevo array con las palabras que tienen una longitud mayor al
número */

const arrayNombres = ["juan","pedro","carlos","ivan","alan","ramiro"];

function filtrarPorLongitud(arregloNum, num){
    const new_array = arregloNum.filter((element) => element.length > num);
    return new_array;
}


/* const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result); */
console.log("Ejercicio 17- ");
console.log(filtrarPorLongitud(arrayNombres,4));