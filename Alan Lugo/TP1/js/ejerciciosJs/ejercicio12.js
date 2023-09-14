/* 12. Crear una función `filtrarPares` que tome un array de números como parámetro y retorne
un nuevo array solo con los números pares.
 */

const arregloNumeros = [1,2,3,4,5,6,7,8,9,10];

const filtrarPares = arregloNumeros.filter(num => num % 2 == 0);

console.log("Ejercicio 12- ");
console.log("El arreglo de solo numero pares es: "+filtrarPares);