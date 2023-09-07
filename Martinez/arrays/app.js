const empleados = [
    {id: 1, salario: 1000},
    {id: 2, salario: 2000},
    {id: 3, salario: 3000},
    {id: 4, salario: 4000}
]

empleados.reduce

const getSalarioById = (id, callback) => {
    const empleado = empleados.find((sal) => sal.id === id)
    
    if(empleado){
        callback(null, empleado)
    }else{
        callback(`El empleado con ${id} no existe`)
    }
}

getSalarioById(1, (err, empleado) => {
    if(err){
        console.log("ERROR");
        return console.log(err);
    }
    console.log(empleado);
})

