/**Ejercicio 4: Crea una función que simule una solicitud HTTP asincrónica utilizando setTimeout y 
devuelva una Promise que se resuelva con un objeto JSON después de 2 segundos.*/
const url = "./json/usuarios.json"

const ejercicio4 = async (url) => {
    return new Promise((resolve, reject) => {
        console.log("Empiezo a cargar datos...");
        console.log("Hago una solicitud a un api...");
        setTimeout(async () => {
            try {
                const resultado = await fetch(url);
                const data = await resultado.json();
                console.log("Termino la solicitud del api...");
                resolve(data);
            } catch {
                reject("Error 404!: Error grave");
            }
        }, 5000)
    });
}

ejercicio4(url)
            .then(res => console.log(res))
            .catch(err => console.log(err));

//**Ejercicio 5: Crea una función que acepte un arreglo de números y devuelva una Promise que se
//resuelva con la suma de los números después de 1 segundo. (Usar reduce) */

const ejercicio5 = (arr) => {
    return new Promise((resolve, reject) => {
        let sum = 0;
        setTimeout(() => {
            arr.forEach(element => {
                sum += element;
            });

            if(sum != 0){
                resolve(sum);
            }else{
                reject("Error 404!: Error grave al sumar los datos...");
            }
        }, 1000);
    });
}

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
ejercicio5(numberArray)
                    .then(resultado => console.log(`El resultado de la suma de todos los numeros del array es: ${resultado}`))
                    .catch(err => console.log(err));