/**1. Suma de Elementos: Dado un arreglo de números, calcula la suma de todos los elementos. */

function sumarElementos(numeros){
    let sumatoria = 0;

    numeros.forEach(element => {
        sumatoria += element;
    });

    return sumatoria;
}

const numbers = [1,2,3,4,5,6,7,8,9,10,7,3,8,4,4,1];

//**Forma declarativa */
//const sumaTotal = numbers.reduce((total, element) => total += element, 0);

//const resultado = sumarElementos(numbers);
//console.log(resultado);
//console.log(sumaTotal);

/**2. Promedio: Calcula el promedio de los números en un arreglo. */
//const promedio = sumarElementos(numbers) / numbers.length;
//console.log(promedio);

/**3. Máximo y Mínimo: Encuentra el número máximo y el número mínimo en un arreglo de
números. */
//const minimo = Math.min(...numbers);
//const maximo = Math.max(...numbers);

//console.log("El minimo es: ".concat(minimo));
//console.log("El maximo es: ".concat(maximo));

/**4. Buscar Valor: Escribe una función que busque un valor específico en un arreglo y devuelva su
índice, si existe. */

function buscarValor(arreglo, valor){
    let index;
    
    arreglo.forEach(element => {
        if(element === valor){
            index = arreglo.indexOf(valor);
        }
    });

    if(index != undefined){
        return index;
    }else{
        return "El valor no se encontró";
    }
}

//const indexValorEncontrado = buscarValor(numbers, 56);
//console.log(indexValorEncontrado);

//**5. Filtrar Pares e Impares: Separa un arreglo de números en dos arreglos diferentes, uno con
// números pares y otro con números impares. */

//const pares = new Array();
//const impares = new Array();
//numbers.forEach(element => {if(element % 2 === 0){pares.push(element)}else{impares.push(element)}});
//console.log(pares);
//console.log(impares);

//**Forma declarativa */
const pares = numbers.filter(element => element % 2 === 0);
const impares = numbers.filter(numeros => numeros % 2 !== 0);
//console.log("Numeros pares: " + pares);
//console.log("Numerso impares: " + impares);

//**6. Eliminar Duplicados: Crea una función que elimine los elementos duplicados de un arreglo. */

function eliminarDuplicados(array){

    return array.filter((element, index) => array.indexOf(element) === index);
}

//const duplicateNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 3, 4, 5, 6, 7];
//const num = eliminarDuplicados(duplicateNumbers);
//console.log(num);

//**7. Ordenar Arreglo: Ordena un arreglo de números de forma ascendente. */

function odenarAscendente(array){
    return array.sort((a, b) => {return a - b});
}

//const arrOrdenado = odenarAscendente(numbers)
//console.log(odenarAscendente(arrOrdenado));

/**8. Eliminar Valor: Elimina todas las ocurrencias de un valor específico de un arreglo. */

function eliminarElemento(array, valor){

    return array.filter((element) => element !== valor);
}

//eliminarElemento(arrOrdenado, 4);

/**9. Combinar Arreglos: Combina dos arreglos en uno solo, asegurándote de que no haya 
duplicados. */

const arr1 = [1, 2, 3, 4, 69, 3, 2];
const arr2 = [7, 8, 9, 10, 69, 8, 7];

const nuevoArreglo = arr1.concat(arr2);
const arrOrdenado = nuevoArreglo.filter((element, index) => nuevoArreglo.indexOf(element) === index);

console.log(arr1);
console.log(arr2);
console.log(nuevoArreglo);
console.log(arrOrdenado);