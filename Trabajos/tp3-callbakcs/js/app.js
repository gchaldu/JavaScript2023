/** 1- Escribe una función llamada `mostrarMensaje` que acepte un mensaje como argumento y una 
función de callback. La función `mostrarMensaje` debe mostrar el mensaje y luego llamar a la 
función de callback. */

const mostrarMensaje = (mensaje, callback) => { //* Creamos un arrow function y le pasamos el callback por parametro, depsues lo llamamos dentro de la función */
    if(mensaje){
        callback(null ,mensaje);
    }else{
        callback(mensaje);
    }
}

mostrarMensaje("Hola soy un mensaje xd", (err, msj) => { //**Aca especificamos lo que recibimos del callback y que hacemos con ello, en este caso lo mostramos. */
    if(err != null){
        console.log("ERROR: No hay mensaje");
    }else{
        console.log(msj);
    }
}); /**Como se ve, hacemos el (cosita1, cosita2) => {} es una arrow function */

/**2-Crea una función llamada `sumarAsync` que acepte dos números y una función de callback. 
Esta función debe sumar los números y luego llamar a la función de callback con el resultado.
 */

const sumarAsync = (valor1, valor2, callback) => { /**Bueno, usamos una arrow function apra est caso */
    const resultado = valor1 + valor2; /**Sumamos */

    if(typeof resultado === 'number'){ /**Si resultado es un numero, significa que se pudo sumar dos numeros, sino sera un string u otra cosa*/
        callback(null, resultado); /**llamada al callback con el error=null y el resultado */
    }else{
        callback("No se pudo cargar los valores"); /**llamada al callbakc con el msj de error */
    }
}

sumarAsync(1, 8, (err, res) => {
    if(err !== null){
        console.log("Error 404!");
        console.log(err);
    }else{
        console.log("El resultado de la suma es: " +res);
    }
})

/**3- Escribe una función llamada `retrasarEjecucion` que acepte una función de callback y un 
número de milisegundos. La función debe llamar al callback después de la cantidad 
especificada de tiempo utilizando `setTimeout`. */

function retrasarEjecucion(callback, milisegundos){
    setTimeout(()=>{
        callback(milisegundos);
    }, milisegundos);
}

/*retrasarEjecucion((ms)=> {
    console.log(`Ese es un mensaje que se realizo de spues de una pausa de ${ms} milisegundos`);
}, 5000);*/

/** Crea una función llamada `obtenerDatosUsuario` que simule una solicitud HTTP para obtener 
datos de usuario. Esta función debe aceptar un ID de usuario y una función de callback. Luego, 
dentro de la función, debes simular una solicitud a una API y, cuando se complete, llamar a la 
función de callback con los datos del usuario. */
const usuarios = [
    {
        id: 0,
        nombre: "Juan"
    }, 
    {
        id: 1,
        nombre: "Matias"
    },
    {
        id: 2,
        nombre: "Lorena"
    },
    {
        id: 3,
        nombre: "Tina"
    },
    {
        id: 4,
        nombre: "Tom"
    }
]


const obtenerDatosUsuario = (id, callback) => {
    const usuario = usuarios.find((element) => id === element.id);

    (usuario)
        ? callback(null, usuario)
        : callback(`No se pudo encontrar el usuario con la id: ${id}`)
}

obtenerDatosUsuario(3, (err, usuario) => {
    if(err !== null){
        console.log("Error 404!");
        console.log(err);
    }else{
        console.log(`El usuario con la id ${usuario.id} es ${usuario.nombre}`);
    }
});