/**Ejercicio 6: Crea una función asincrónica que haga una solicitud HTTP a una API de tu elección 
utilizando la función fetch y devuelva el resultado en formato JSON. Maneja los errores 
posibles.*/

async function getApi(){
    try{
        /**limit de 151 porque solo quiero los pokemon de la primera generación */
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/    ?limit=151");
        const data = await response.json();
        return data;
    }catch(err){
        console.log(err);
    }
}

//**arrow function para mostrar los pokmeon de la primera generación. Que son 151 */
const mostrarPokemonFG = async() => {
    const listPokemon = await getApi();
    const pokeArr = listPokemon.results;
    
    pokeArr.forEach((poke, index) => {
        console.log(`Pokemon nº${index+1}: ${poke.name}`);
    });
}

mostrarPokemonFG();

//**Ejercicio 7: Investigar una Api que se pueda paginar. Crea una función asincrónica que haga una 
// serie de solicitudes HTTP secuenciales para obtener datos de una API paginada. Utiliza 
// async/await para manejar la paginación hasta que todos los datos se hayan recuperado. */

//Vamos a usar la misma api del ejercicio anterior...
const ejercicioSiete = async() => {
    
}