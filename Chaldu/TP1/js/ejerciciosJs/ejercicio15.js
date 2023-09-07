/* Más sobre Arrays y Funciones
15. Crear una función `duplicarArray` que tome un array de números como parámetro y
retorne un nuevo array con cada elemento duplicado.
 */

function duplicarArray(arregloNum){

    const arregloDuplicado = arregloNum.map(num => num*2);
    return arregloDuplicado;
}

console.log("Arreglo de numeros duplicados: "+duplicarArray(arregloNumeros));