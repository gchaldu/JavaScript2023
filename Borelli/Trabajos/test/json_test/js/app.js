const url = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=1272"

const getApi = async(url) => {
    try{
        const resultado = await fetch(url);

        const data = await resultado.json();

        console.log(data);
    }catch{
        console.log("Error 404!: Error grave");
    }
}

getApi(url);