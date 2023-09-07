/* 14. Crear una función `obtenerInfo` que tome un objeto persona como parámetro y retorne
una cadena con su información. */

function obtenerInfo(Persona){
    const arregloInfo = Object.keys(Persona).map(elemento => elemento);
    return arregloInfo;
}

function obtenerInfoPush(Persona){
    const arregloInfo = [arregloInfo.push(Persona)];
    return arregloInfo;
}

const santi = new Persona("Santi", 24);

const arregloInfo = obtenerInfo(alan);

arregloInfo.push(obtenerInfo(santi));

console.log(arregloInfo);
