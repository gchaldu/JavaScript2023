// 1. Declarar una variable `nombre` y asignarle tu nombre. Imprimir en la consola.

let nombre = "Marina";
console.log(nombre);

// 2. Declarar dos variables numéricas `num1` y `num2`, y calcular su suma. Imprimir el resultado.

let num1 = 5;
let num2 = 10;
let suma = num1 + num2;
console.log(suma);

// 3. Declarar una constante `PI` con el valor 3.14159. Imprimir en la consola.

let pi = 3.14159;
console.log(pi);

// 4. Crear una función `saludar` que tome un parámetro `nombre` y retorne un saludo personalizado.

const saludar = function (nombre) {
  return `Hola ${nombre}`;
};

console.log(saludar("Marina"));

// 5. Crear una función `esPar` que tome un número como parámetro y retorne `true` si es par, y `false` si es impar.

const esPar = function (num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
};

// const esPar = (num) => {
//     if (num%2==0){
//         return true;
//     } else {
//         return false;
//     }
// }

console.log(esPar(3));

// 6. Crear una función `sumarArray` que tome un array de números como parámetro y retorne la suma de sus elementos.

const sumarArray = function (array) {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    suma = suma + array[i];
  }
  return suma;
};

console.log("nueva funcion " + sumarArray([1, 2, 3, 4, 5]));

// 7. Crear un objeto literal `persona` con las propiedades `nombre`, `edad` y `profesion`.

const persona = {
  nombre: "Marina",
  edad: 42,
  profesion: "programadora",
};

console.log(persona);

// 8. Crear un constructor `Producto` que tome parámetros `nombre`, `precio` y `stock`, y cree un objeto con esas propiedades.

const Producto = function (nombre, precio, stock) {
  this.nombre = nombre;
  this.precio = precio;
  this.stock = stock;
};

// class Producto {
//     constructor(nombre, precio, stock) {
//         this.nombre = nombre;
//         this.precio = precio;
//         this.stock = stock;
//     }
// }

console.log(new Producto("camisa", 100, 10));

// 9. Crear un objeto `pelicula` utilizando el constructor `Pelicula` con propiedades como `titulo`, `director` y `anio`.

const Pelicula = function (titulo, director, anio) {
  this.titulo = titulo;
  this.director = director;
  this.anio = anio;
};

const pelicula = new Pelicula("Titanic", "James Cameron", 1997);
console.log(pelicula);

// 10. Crear un array `frutas` con varios nombres de frutas. Imprimir el tercer elemento del array.

let frutas = ["manzana", "pera", "banana", "naranja"];
console.log(frutas[2]);

// Agregar una fruta más al final del array `frutas`. Imprimir el array actualizado.

frutas.push("kiwi");
console.log(frutas);

// 12. Crear una función `filtrarPares` que tome un array de números como parámetro y retorne un nuevo array solo con los números pares.

const filtrarPares = function (array) {
  let arrayPares = [];
  for (let numero of array) {
    if (numero % 2 == 0) {
      arrayPares.push(numero);
    }
  }
  return arrayPares;
};

console.log(filtrarPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 13. Crear una función `crearPersona` que tome parámetros `nombre` y `edad`, y retorne un objeto persona con esas propiedades.

const crearPersona = function (nombre, edad) {
  return {
    nombre: nombre,
    edad: edad,
  };
};

console.log(crearPersona("Marina", 42));

// 14. Crear una función `obtenerInfo` que tome un objeto persona como parámetro y retorne una cadena con su información.

const obtenerInfo = function (persona) {
  return `${persona.nombre} tiene ${persona.edad} años`;
};

console.log(obtenerInfo({ nombre: "Marina", edad: 42 }));

persona.carrera = "programacion";

console.log(persona);

// 15. Crear una función `duplicarArray` que tome un array de números como parámetro y retorne un nuevo array con cada elemento duplicado.

const duplicarArray = function (array) {
  let arrayDuplicado = [];
  for (numero of array) {
    arrayDuplicado.push(numero * 2);
  }
  return arrayDuplicado;
};

const duplicarArray2 = (array) => {
  let arrayDuplicado = [];
  for (let numero in array) {
    arrayDuplicado.push(array[numero] * 2);
  }
  return arrayDuplicado;
};

console.log("Array de duplicados: " + duplicarArray2([1, 2, 3, 4, 5]));

// 16. Crear una función `invertirCadena` que tome una cadena como parámetro y retorne la cadena invertida.

const invertirCadena = (string) => {
  let cadena = "";
  for (let i = string.length - 1; i >= 0; i--) {
    cadena = cadena + string[i];
  }
  return cadena;
};

console.log(invertirCadena("hola"));

// Practicando con objetos

const objeto1 = {
  nombre: "Jose",
  edad: 42,
};

const objeto2 = {
  direccion: "Mexico 22",
  ciudad: "CABA",
};

// unir los dos objetos en uno solo

const objetoFinal = { ...objeto1, ...objeto2 };
const objetoFinal2 = Object.assign({}, objeto1, objeto2);

// const objetoFinal = Object.assign(objeto1, objeto2);
console.log(objetoFinal);
console.log(objetoFinal2);

// 17. Crear una función `filtrarPorLongitud` que tome un array de palabras y un número como parámetro, y retorne un nuevo array con las palabras que tienen una longitud mayor al número.


const filtrarPorLongitud = (arrayPalabras, num) => {
  let arrayNuevo = [];
  for (let palabra of arrayPalabras) {
    console.log(palabra);
    if (palabra.length > num) {
      arrayNuevo.push(palabra);
    }
  }
  return arrayNuevo;
};

console.log(filtrarPorLongitud(["leon", "paloma", "aguila", "buey"], 5));

// 18. Crear un array de objetos `estudiantes`, donde cada objeto tenga propiedades como `nombre`, `edad` y `promedio`.

let estudiantes = [
  {
    nombre: "Juan",
    edad: "33",
    promedio: 8,
  },
  {
    nombre: "Pedro",
    edad: "22",
    promedio: 5,
  },
  {
    nombre: "Maria",
    edad: "45",
    promedio: 9,
  },
];

console.log(estudiantes);

// 19. Crear una función `buscarEstudiante` que tome un array de estudiantes y un nombre, y retorne el objeto del estudiante con ese nombre.

const buscarEstudiante = (arrayEstudiantes, nombre) => {
  for (let estudiante of arrayEstudiantes) {
    if (estudiante.nombre == nombre) {
      return estudiante;
    }
  }
};

console.log(buscarEstudiante(estudiantes, "Maria"));

// 20. Crear una función `promedioClase` que tome el array de estudiantes y retorne el promedio de sus promedios.

const promedioClase = (estudiantes) => {
  let promedioFinal = 0,
    suma = 0,
    i = 0;
  for (let estud of estudiantes) {
    suma += estud.promedio;
    i++;
  }
  return (promedioFinal = suma / i);
};

console.log(promedioClase(estudiantes));

// 21. Crear un objeto `coche` con propiedades como `marca`, `modelo` y `anio`, y métodos como `arrancar` y `detener`.

const coche = {
  marca: "Ford",
  modelo: "Fiesta",
  anio: 2010,
  arrancar: function () {
    return "Arrancando";
  },
  detener: function () {
    return "Deteniendo";
  },
};

console.log(coche.arrancar());

const Coche = function (marca, modelo, anio) {
  this.marca = marca;
  this.modelo = modelo;
  this.anio = anio;
  this.arrancar = function () {
    return "Arrancando";
  };
  this.detener = function () {
    return "Deteniendo";
  };
};

const coche2 = new Coche("Ford", "Fiesta", 2010);
console.log(coche2.arrancar());

// 22. Crear un constructor `Persona` con propiedades `nombre` y `edad`, y un método `saludar` que imprima un saludo personalizado.

const Persona = function (nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.saludar = function () {
    return `Hola ${nombre}`;
  };
};

const persona1 = new Persona("Marina", 42);
console.log(persona1.saludar());

// 23. Crear un método `agregarProducto` a la función constructora `Carrito` que agregue un producto al carrito.

const Carrito = function () {
  this.productos = [];
  this.agregarProducto = function (producto) {
    this.productos.push(producto);
  };
};

const carrito1 = new Carrito();
carrito1.agregarProducto("producto1");
console.log(carrito1.productos);

// o con Prototype

const Carrito2 = function () {
  this.productos = [];
};

Carrito2.prototype.agregarProducto = function (producto) {
  this.productos.push(producto);
};

const carrito3 = new Carrito2();
carrito3.agregarProducto("pantalon");
console.log(carrito3.productos);

// 24. Crear una función `ordenarNumeros` que tome un array de números como parámetro y retorne un nuevo array con los números ordenados de menor a mayor.

const ordenarNumeros = function (arrayNum) {
  // let arrayFinal = [];
  return (arrayFinal = arrayNum.sort());
};

console.log(ordenarNumeros([3, 2, 5, 1]));

// 25. Crear una función `eliminarEstudiante` que tome un array de estudiantes y un nombre, y retorne un nuevo array sin el estudiante con ese nombre.

const eliminarEstudiante = function (arrayEst, nombre) {
  // let arrayFinal =[...arrayEst];
  for (let estudiante in arrayEst) {
    if (arrayEst[estudiante].nombre === nombre) {
      arrayEst.splice(estudiante, 1);
    }
  }
  return arrayEst;
};

// console.log(eliminarEstudiante(estudiantes,"Maria"));

// otra forma con filter

const eliminarEstudiante2 = function (arrayEst, nombre) {
  return arrayEst.filter((estudiante) => estudiante.nombre != nombre);
};

console.log(eliminarEstudiante2(estudiantes, "Maria"));

// 26. Crear una función `totalCarrito` que tome un array de productos y retorne el precio total de los productos.

let productos = [
  {
    nombre: "pantalon",
    precio: 300,
  },
  {
    nombre: "zapatillas",
    precio: 3000,
  },
  {
    nombre: "remera",
    precio: 200,
  },
  {
    nombre: "campera",
    precio: 1000,
  },
];

const totalCarrito = (array) => {
  let suma = 0;
  for (let producto of array) {
    suma += producto.precio;
  }
  return suma;
};

console.log(totalCarrito(productos));

// 27. Crear una función `crearCalculadora` que retorne un objeto con métodos `sumar`, `restar`,
// `multiplicar` y `dividir

const crearCalculadora = () => {
  return {
    sumar: function (...num) {
      let suma = 0;
      for (let numero of num) {
        suma += numero;
      }
      return suma;
    },
    restar: function (...num) {
      let resta = 0;
      for (let numero of num) {
        resta -= numero;
      }
      return resta;
    },
    multiplicar: function (...num) {
      let multiplicacion = 1;
      for (let numero of num) {
        multiplicacion *= numero;
      }
      return multiplicacion;
    },
    dividir: function (...num) {
      let division = 1;
      for (let numero of num) {
        division /= numero;
      }
      return division;
    },
  };
};

console.log(crearCalculadora());

console.log(crearCalculadora().sumar(3, 4));

// 28. Crear una función `crearCuentaBancaria` que retorne un objeto con métodos `depositar`,
// `retirar` y `saldo`.

const crearCuentaBancaria = function () {
  return {
    capital: 2000,
    depositar: function (num) {
      this.capital += num;
    },
    retirar: function (num) {
      if (num < this.capital) {
        this.capital -= num;
      }
    },
    saldo: function () {
      return this.capital;
    },
  };
};
let cuentaBancaria = crearCuentaBancaria();
cuentaBancaria.depositar(3000);
console.log(cuentaBancaria.saldo());

// 29. Crear un constructor `Libro` con propiedades `titulo`, `autor` y `paginas`, y un método
// `detalles` que imprima la información del libro.

const Libro = function (titulo, autor, paginas) {
  this.titulo = titulo;
  this.autor = autor;
  this.paginas = paginas;
  this.detalles = function () {
    
    return (
      this.titulo +
      " fue escrito por " +
      this.autor +
      " y tiene " +
      this.paginas +
      " paginas"
    );
  };
};

let libro = new Libro("El nombre del viento", "Patrick Rothfuss", 600);
console.log(libro.detalles());

// 30. Crear un programa que simule una lista de tareas (`to-do list`) utilizando objetos y arrays.
// Debe permitir agregar tareas, marcar tareas como completadas y listar las tareas pendientes.
// Las tareas tienen los campos `titulo`, y arrancan con estado pendiente, el constructor dentro del objeto .



const ListaTareas = function () {
  this.lista = [];

  function Tarea (titulo) {
    this.titulo = titulo;
    this.estado = "pendiente";
  }
 
  this.agregarTarea = function (tarea) {
    tarea = new Tarea (tarea);
    this.lista.push(tarea);
  };
  
  this.tareaCompletada = function (nombreT) {
    for (let tar of this.lista) {
      if (tar.titulo == nombreT) {
        tar.estado = "completada";
      }
    }
  };
  
  this.listarTareas = function () {
    return this.lista;
  };
};

const listaT = new ListaTareas();

listaT.agregarTarea("Estudiar Matematicas");
console.log(listaT.listarTareas());
listaT.tareaCompletada("Estudiar Matematicas");
console.log(listaT.listarTareas());
listaT.agregarTarea("Estudiar Ingles");
console.log(listaT.listarTareas());













