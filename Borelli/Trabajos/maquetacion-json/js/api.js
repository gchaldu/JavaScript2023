const url = "http://localhost:4000/clientes"

const getClientes = async (url) => {
    try {
        const resultados = await fetch(url, { method: 'GET' });
        
        const clientes = await resultados.json();

        return clientes;
    } catch(err) {
        console.log(err);
    }
}