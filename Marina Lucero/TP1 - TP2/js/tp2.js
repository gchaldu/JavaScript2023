// 1. Suma de Elementos: Dado un arreglo de números, calcula la suma de todos los elementos.

let arrayNum = [2,3,6,4];

const suma = function (arrayNum){
    let suma =0;

    for (let num of arrayNum){
        suma+= num;
    }return suma;
}

console.log(suma(arrayNum));

// 2. Promedio: Calcula el promedio de los números en un arreglo.

let array2= [3,6,5,8,12];

const promedio = (array2)=>{
    let suma=0,i=0,promedio=0;

    for(let num of array2){
        suma+= num;
        i++;
    }
    return promedio = suma /i;
}

console.log(promedio(array2));

// 3. Máximo y Mínimo: Encuentra el número máximo y el número mínimo en un arreglo de números.

const minMax = (array)=> {
    return resultado = {
        min : Math.min(...array),
        max:  Math.max(...array)
    } 
}

console.log(minMax(array2));

// 4. Buscar Valor: Escribe una función que busque un valor específico en un arreglo y devuelva su índice, si existe.

let arrayX = [2,5,6,4,1]

const buscarValor = (array2, valor)=> {
   return array2.indexOf(valor);
}

console.log(buscarValor(arrayX,99));

// 5. Filtrar Pares e Impares: Separa un arreglo de números en dos arreglos diferentes, uno con números pares y otro con números impares.

const arrayPares = array2.filter(elemento => elemento %2==0);
const arrayImpares = array2.filter(elemento => elemento %2==0);
console.log(arrayPares);
console.log(arrayImpares);

// 6. Eliminar Duplicados: Crea una función que elimine los elementos duplicados de un arreglo.

let array3= [3,4,4,3,2,6,7];

// const arregloSinDuplicados = array3.filter((valor, indice, self) => {
//     return self.indexOf(valor) === indice;
//   });

function arregloSinDuplicados(array) {
    return array.filter((valor,indice, self) =>  self.indexOf(valor)===indice );
  }

  console.log(arregloSinDuplicados(array3));

//   otra forma con Set

const arregloSinDuplicados2 = [...new Set(array3)];
console.log(arregloSinDuplicados2);

// otra forma con reduce

const arregloSinDuplicados3 = array3.reduce ((resultado,valor)=> {
    if(!resultado.includes(valor)){
        resultado.push(valor);
    }return resultado;
},[])

console.log(arregloSinDuplicados3);

// 7. Ordenar Arreglo: Ordena un arreglo de números de forma ascendente.

const arrayOrdenado = array3.sort((a, b) => a - b);

console.log(arrayOrdenado);

// 8. Eliminar Valor: Elimina todas las ocurrencias de un valor específico de un arreglo.

const eliminaOcurrencias = function (array, valor){
    let resultado =array.filter(elemento=> elemento!=valor);
    return resultado;
}

console.log(eliminaOcurrencias(array3,2));

// 9. Combinar Arreglos: Combina dos arreglos en uno solo, asegurándote de que no haya duplicados.

const combinarArreglos= (array1, array2)=>{

    let arrayFinal = [...array1,...array2];
    let resultado = arregloSinDuplicados(arrayFinal);
    return resultado.sort((a, b) => a - b);
}

console.log(combinarArreglos(array2,array3));

// 10. Lista de Compras: Crea una lista de compras que incluya productos y sus cantidades.

let listaCompras = [
    {producto: "leche", cantidad: 2},
    {producto: "pan", cantidad: 1},
    {producto: "queso", cantidad: 3},

];

// 11. Agenda de Contactos: Crea una agenda de contactos con nombres, números de teléfono y correos electrónicos.

let agenda = [
{
    nombre: "Maria",
    numeroTel: "3454223",
    mail:"maria@gmail.com"
},
{
    nombre: "Juan",
    numeroTel: "342354223",
    mail:"juan@gmail.com"
},
{
    nombre: "Antonio",
    numeroTel: "3224223",
    mail:"antonio@gmail.com"
},
]

// 12. Búsqueda de Palabras: Dado un párrafo y una palabra, cuenta cuántas veces aparece la palabra en el párrafo.


let parrafo = "hola mundo, este es el segundo tp de javascript";

let palabra = 'a';

const vecesLetra = (parrafo,palabra)=>{
    let i=0;
    for(let pal of parrafo){
        if(pal===palabra)
            i++;
    }return i;
}

console.log(vecesLetra(parrafo,palabra));

// 13. Clasificación de Objetos: Ordena un arreglo de objetos por una propiedad específica.

const ordenarXNombre = function (a,b){
    const nombreA = a.nombre.toUpperCase();
    const nombreB = b.nombre.toUpperCase();

    if(nombreA< nombreB)
        return -1;
    if(nombreA>nombreB)
        return 1;
    else
        return 0;
}

const AgendaOrdenadaNombre = agenda.sort(ordenarXNombre);
console.log(AgendaOrdenadaNombre);


// 14. Registro de Ventas: Crea un registro de ventas con información sobre productos, cantidades y precios.

let registroVentas = [
    {producto: "leche", cantidad: 2, precio: 50},
    {producto: "pan", cantidad: 1, precio: 30},
    {producto: "queso", cantidad: 3, precio: 100},

];

// 15. Carrito de Compras: Simula un carrito de compras que permite agregar, eliminar y calcular el total.

const Producto = function (nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

const Carrito = function (){

    this.lista =[];

    this.agregarProducto = (producto,cantidad)=>{
        producto.cantidad = cantidad;
        this.lista.push(producto);
    }

    this.mostrarLista = function (){
        return this.lista;
    }

    this.eliminarProducto = (producto)=>{
          let indice = this.lista.indexOf(producto);
          this.lista.splice(indice,1);  
    }

}

const producto1 = new Producto ("auto",20000);
const carro= new Carrito();
carro.agregarProducto(producto1,2);
console.log(carro.mostrarLista());
carro.eliminarProducto(producto1);
console.log(carro.mostrarLista());

// 16. Gestor de Tareas: Crea un gestor de tareas que permita agregar, completar y listar tareas pendientes.

const Tarea = function (nombre){
    this.nombre = nombre;
    this.completado = false;
}

const GestorTareas = function (){
    this.lista = [];

    this.agregarTarea = (tarea)=>{
        this.lista.push(tarea);
    }

    this.completarTarea = (tarea)=>{
        tarea.completado = true;
    }

    this.listarTareas = ()=>{
        return this.lista;
    }
}

const tarea1 = new Tarea("comprar pan");
const tarea2 = new Tarea("comprar leche");
const gestor = new GestorTareas();
gestor.agregarTarea(tarea1);
gestor.agregarTarea(tarea2);
console.log(gestor.listarTareas());
gestor.completarTarea(tarea1);
console.log(gestor.listarTareas());











