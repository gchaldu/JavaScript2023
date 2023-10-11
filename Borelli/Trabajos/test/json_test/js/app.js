const url = "http://localhost:4000/usuarios"

const getApi = async () => {
    try {
        const resultado = await fetch(url);

        const data = await resultado.json();

        console.log(data);
    } catch {
        console.log("Error 404!: Error grave");
    }
}

const postApi = async (newUser) => {
    let i = 0;
    try {
        if(i != 1){
            await fetch(url, {
                method: "POST",
                body: JSON.stringify(newUser),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then((response) => response.json())
                .then((json) => console.log(json));
            i = 1;    
        }
    } catch (err) {
        console.log(err);
    }
}

let u = {
    name: "Remedio de escalada",
    age: 55,
    id: 31
}

postApi(u);

const l = getApi();