const empleados = [{id: 1, nombre: "Roman", salario: 5000}, {id: 2, nombre: "Juan", salario: 1000}];

const getEmpleadoById =  (id, callback) => {
    const empleado = empleados.find((emp) => emp.id === id);

    if(empleado){
        callback(null, empleado);
    }else{
        callback("El empleado ${id} no Existe...");
    }
}

getEmpleadoById (1,(err, empleado) => {
    if(err){
        console.log("ERROR..");
        return console.log(err);
    }
    console.log(empleado);
});

const getEmpleadoBySalario = (salario, callback) => {
    const empleado = empleados.find((emp) => emp.salario === salario);

    if(empleado){
        callback(null, empleado);
    }else{
        callback("El empleado ${id} no tiene Salario");
    }
}