const clienteUrl= "http://localhost:4000/clientes";
const proveedoresUrl= "http://localhost:4000/proveedores";

export async function getClientes(){
    try{
        const resultado = await fetch(clienteUrl, {method: "GET"});

        if(!resultado.ok){
            throw new Error("Problemas con la peticion GET a la api...");
        }

        const clientes = await resultado.json();

        return clientes;
    }catch(err){
        console.log(err);
    }
}

export async function postCliente(cliente){
    try{
        await fetch(clienteUrl, 
            {
                method: "POST", 
                body: JSON.stringify(cliente),
                headers: {"Content-type": "application/json"}

            });
            
        window.location.href= "index.html";

    }catch(error){
        console.log(error);
    }
}