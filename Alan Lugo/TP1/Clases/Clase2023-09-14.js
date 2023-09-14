 const calcularDescuento = new Promise((resolve, reject)=>{
    const descuento = false;
    if(descuento){
        resolve("Descuento fue realizado");
    }else{
        reject("Error, el descuento no puede ser aplicado");
    }
})

 console.log(calcularDescuento);

calcularDescuento
    .then((data) => console.log(data))
    .catch((err) => console.log(err))



const estudiantes = [
    {id: 1, nombre: "Maria"},
    {id: 2, nombre: "Ana"},
    {id: 3, nombre: "Marcelo"},
    {id: 4, nombre: "Adrian"}
]

const getEstudianteById = (id) => new Promise((resolve, reject) => {
    const estudiante = estudiantes.find ((e)=> e.id === id)

    if(estudiante){
        resolve(estudiante);
    }else{
        reject(`EL estudiante con id ${id} NO existe....`);
    }
})

const notas = [
    {id: 1, nota: 10},
    {id: 2, nota: 9},
    {id: 3, nota: 8}
]

const getNotaById = (id) => new Promise((resolve, reject) => {
    const nota = notas.find ((e)=> e.id === id)

    if(nota){
        resolve(nota);
    }else{
        reject(`El estudiante con id ${id} NO tiene nota....`);
    }
})


let idEstudiante = 4;
getEstudianteById(idEstudiante)
.then(estudiante => 
    getNotaById(idEstudiante)
    .then(nota => console.log(`El estudiante ${estudiante.nombre} 
    con id ${idEstudiante} tiene la nota: ${nota.nota}`))

    .catch((error) => console.log(error)))
