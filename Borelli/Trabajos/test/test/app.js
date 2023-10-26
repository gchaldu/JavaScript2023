/*const persona = {
    nombre: "Roberto",
    apellido: "Perez",
    edad: 25
}

const {nombre, apellido, edad} = persona;

//console.log(nombre);
//console.log(apellido);
//console.log(edad);


let num1, num2, resto;

[num1,,,num2, resto] = [10,20,30,40,50]

console.log(num1);
console.log(num2);
console.log(resto);*/

const empleados = [
    {
        id: 0,
        nombre: "Juancito"
    },
    {
        id: 1,
        nombre: "Marta"
    },
    {
        id: 2,
        nombre: "Roberto"
    }
]

const salarios = [
    {
        id: 0,
        salario: 15000
    },
    {
        id: 1,
        salario: 11000
    },
    {
        id: 2,
        salario: 12000
    }
]

const getEmpleadoById = (id, callback) => {
    let emp = empleados.find(emp => emp.id === id);

    if(emp){
        callback(null, emp);
    }else{
        callback("ERROR EL EMPLEADO CON LA ID: "+id+ " NO EXISTE!");
    }
}

function getSalarioById(id, callback){
    let sal = salarios.find(sal => sal.id === id);

    if(sal){
        callback(null, sal)
    }else{
        callback("ERROR EL SALARIO CON LA ID: "+id+ " NO EXISTE!")
    }

}

getEmpleadoById(2, (err, emp) => {
    if(err != null){
        console.log("Error!:");
        return console.log(err);
    }else{
        console.log(emp);
        getSalarioById(2, (err, sal) => {
            if(err != null){
                console.log(err);
            }else{
                console.log(sal);
            }
        })
    }
})


