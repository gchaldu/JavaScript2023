/* Ejercicio 5
Funcion es par */

function esPar(numero) {
    var verdadero = new Boolean(false);
    if(numero % 2 == 0){
        verdadero = true;
    }else{
        verdadero = false;
    }
    return verdadero;
}

console.log(esPar(5));