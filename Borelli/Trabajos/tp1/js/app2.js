function ordenarNumeros(...arrayN){
    let arrayOrdenado = new Array();
    let arrayLenght = arrayN.length;

    while(arrayOrdenado.length != arrayLenght){
        let menor = arrayN[0];
        for (let index = 1; index < arrayN.length; index++) {
            if(arrayN[index] < menor){
                menor = arrayN[index]; 
            }
        }

        arrayN.splice(arrayN.indexOf(menor), 1);
        arrayOrdenado.push(menor);
    }

    return arrayOrdenado;
}

//let arrayNumeros = [1, 4, 1, 8, 1, 9, 22, 45, 15, 30, 69, 11, 5, 10];
//const numerosOrdenados = ordenarNumeros(...arrayNumeros);

//console.log(arrayNumeros);
//console.log(numerosOrdenados);
//console.log(arrayNumeros);

/**29. Crear un constructor `Libro` con propiedades `titulo`, `autor` y `paginas`, y un método 
`detalles` que imprima la información del libro. */
class Libro{
    constructor(titulo, autor, paginas){
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    }

    detalles(){
        console.log(`Titulo del libro: ${this.titulo} \nAutor: ${this.autor} \nCantidad de páginas: ${this.paginas}`);
    }
}

//const libroUno = new Libro("Veinte mil leguas de viaje submarino", "Julio Verne", 320);
//libroUno.detalles();

//**30. Crear un programa que simule una lista de tareas (`to-do list`) utilizando objetos y arrays. 
// Debe permitir agregar tareas, marcar tareas como completadas y listar las tareas pendientes */

class Task{
    constructor(name){
        this.name = name;
        this.done = false;
    }

    seeTask(){
        console.log(`Task: ${this.name}`); 
        if(this.done === false){ 
            console.log("Done: Not done");
        }else{
            console.log("Done: Done");
        }
    }

    doneTask(){
        if(this.done !== true){
            this.done = true;
        }else{
            console.log("Task already done.");
        }
    }
}

class TodoList {
    constructor(){
        this.taskList = new Array();
    }

    addTask(taskName){
        this.taskList.push(new Task(taskName));
    }

    removeTask(taskName){ ///By name
        this.taskList = this.taskList.filter(element => 
            element.name !== taskName
        )
    }

    seeList(){
        this.taskList.forEach(element => {
            element.seeTask();
        })
    }

    completeTask(taskName){
        this.taskList.forEach(element => {
            if(element.name === taskName){
                element.doneTask();
            }
        })
    }
}

const todoList = new TodoList();

todoList.addTask("Sacar la basura");
todoList.addTask("Limpiar la cocina");
todoList.addTask("Ir a hacer las compras del día");
todoList.completeTask("Limpiar la cocina");
todoList.seeList();

