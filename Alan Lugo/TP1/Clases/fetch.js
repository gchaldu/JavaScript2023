urlText = "/TP1/archivos/datos.txt";

const verTxt = (url) => {
    fetch(url)
    .then(resultado => console.log(resultado))
}

const verTxt2 = (url) => {
    fetch(url)
    .then(resultado => console.log(resultado))
    .then(text => console.log(texto))
}

async function verTxt3 (url) {
    try{
        const resultado = await fetch (url);
        const texto = await resultado.text();
        console.log(texto);
    }catch(error){
        console.log(error);
    }
}

verTxt(urlText)

/* https://publicapi.dev/ */