/* Ejercicio 6
suma de elementos de una arreglo */

const arregloNum = [1,2,3,4,5,6,7,8,9];
console.log("Arreglo de numeros: " + arregloNum);

function sumaElementosArreglo() {
    let suma = 0;
    for(let i = 0; i<arregloNum.length ; i++){
         suma = arregloNum[i] + suma;
    }
    return suma;
} 
console.log("La suma de los elementos del arreglo es: "+ suma);