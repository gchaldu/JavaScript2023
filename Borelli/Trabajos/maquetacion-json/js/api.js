const url = 'http://localhost:4000/clientes';

export const getClientes = async () => {
    try {
        const resultados = await fetch(url, { method: 'GET' });

        const clientes = await resultados.json();

        return clientes;
    } catch (err) {
        console.log(err);
    }
}

export const postCliente = async (newCliente) => {
    try {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(newCliente),
            header: {
                "Content-type": "application/json"
            }
        })
    } catch (err) {
        console.log(err);
    }
}


/**
export const postClienteXML = async (newCliente) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    const body = JSON.stringify(newCliente);
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 201) {
            console.log(JSON.parse(xhr.responseText));
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };
    xhr.send(body);
} Con XML, tampooco funciona*/