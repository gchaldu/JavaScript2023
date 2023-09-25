/**Ejercicio 1: Crea una Promise que se resuelva después de 2 segundos y muestra un mensaje
cuando se resuelva.
 */

/*const promesa = new Promise((resolve, reject) => {
    let sum = 0;
    const num1 = 10;
    const num2 = 4;

    console.log("Pasan dos segundos...");

    setTimeout(() => {
        sum = num1 + num2;
        if (sum != 0) {
            resolve(sum);
        } else {
            reject("Error 404!");
        }
    }, 2000);
});*/

/**promesa
    .then(resolve => console.log(`El resultado de la operacion es ${resolve}`))
    .catch(err => console.log(err));
*/
/**Ejercicio 2: Crea una función que acepte un número y devuelva una Promise que se resuelva
con el doble del número después de 1 segundo. */

/*const ejercicio2 = (num) => {
    return new Promise((resolve, err) => {
        let resultado = 0;
        console.log("Resolviendo la opeacion del ejercicio 2...");
        setTimeout(() => {
            resultado = num * 2;
            if(resultado != 0){
                resolve(resultado); 
            }else{
                err("Error 404!: No se pudo realizar la operación");
            }
        }, 5000);
    });
};

ejercicio2(5)
    .then(resolve => console.log(`El resultado de la operacion del ejercicio 2 es ${resolve}`))
    .catch(err => console.log(err));

/**Ejercicio 3: Crea dos Promises que se resuelvan después de 3 segundos cada una. Combina
ambas Promises para mostrar un mensaje cuando ambas se hayan resuelto. (Pista: usar
Promise.all) */

const prom1 = new Promise((resolve, reject) => {
    console.log("Resolviendo promesa 1...");
    setTimeout(() => {
        resolve("Soy la promesa 1 ...")
    }, 3000);
});

const prom2 = new Promise((resolve, reject) => {
    console.log("Resolviendo promesa 2...");
    setTimeout(() => {
        resolve("Soy la promesa 2 ...")
    }, 3000);
});

Promise.all([prom1, prom2]) 
                        .then((resultado) => {console.log(resultado)})
