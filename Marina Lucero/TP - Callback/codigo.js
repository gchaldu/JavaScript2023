// Ejercicio 1: Función Callback Básica
// Escribe una función llamada `mostrarMensaje` que acepte un mensaje como argumento y una función de callback. La función `mostrarMensaje` debe mostrar el mensaje y luego llamar a la función de callback.


function mostrarMensaje(mensaje, callback) {
    console.log(mensaje);
    callback();
}

mostrarMensaje("Hola Mundo", function () {
    console.log("Este mensaje se muestra después del mensaje original");
}
);

// Ejercicio 2: Callback con Retorno de Datos
// Crea una función llamada `sumarAsync` que acepte dos números y una función de callback. Esta función debe sumar los números y luego llamar a la función de callback con el resultado.


function sumarAsync(num, num1, callback) {
    let suma = num + num1;
    callback(suma);
}

function mostrarResultado(mensaje) {
    console.log(mensaje);
}

sumarAsync(2, 3, mostrarResultado);

// Ejercicio 3: Uso de setTimeout
// Escribe una función llamada `retrasarEjecucion` que acepte una función de callback y un número de milisegundos. La función debe llamar al callback después de la cantidad especificada de tiempo utilizando `setTimeout`.


const retrasarEjecucion = (num, callback) => {
    setTimeout(callback, num);
}

retrasarEjecucion(4000, () => console.log("Se ejecuto el callback"));

// Ejercicio 4: Callback Anidado
// Crea una función llamada `obtenerDatosUsuario` que simule una solicitud HTTP para obtener datos de usuario. Esta función debe aceptar un ID de usuario y una función de callback. Luego, dentro de la función, debes simular una solicitud a una API y, cuando se complete, llamar a la función de callback con los datos del usuario.

const datosUsuario = [
    {
        id: 1,
        nombre: "Juan",
        edad: 33
    },
    {
        id: 2,
        nombre: "Maria",
        edad: 25
    },
    {
        id: 3,
        nombre: "Pedro",
        edad: 40
    },
    {
        id: 4,
        nombre: "Ana",
        edad: 20
    }
]

const obtenerDatosUsuario = (id, callback) => {
    let usuario;
    setTimeout(function () {
        usuario = datosUsuario.find(elem => elem.id == id);
        if (usuario) callback(null, usuario);
        else callback("No se encontro un usuario con ese id");
    }, 5000)

}

let id = 3;

obtenerDatosUsuario(id, (err, usuario) => {
    if (err) console.log(err);
    else console.log(`El usuario con id ${id} se llama ${usuario.nombre}`);
})

// Ejercicio 5: Promesas y Callbacks
// Modifica el ejercicio 4 para que en lugar de utilizar callbacks, utilice promesas para manejar la solicitud de datos de usuario.

const obtenerDatosUsuario2 = (id)=>{

    let usuario2 = datosUsuario.find(elem => elem.id == id);

    return new Promise ((resolve, reject)=>{
        if (usuario2) resolve (usuario2.nombre);
        else reject("No existe el id");
    })
}

obtenerDatosUsuario2(1).then(nombre=> console.log(nombre)).catch(error=>console.log(error));

