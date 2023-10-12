export function validar(objetoCualquiera){
    return Object.values(objetoCualquiera).every(element => element !== '');
}