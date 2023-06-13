


const toggleFavorites = (id: number):void => {
    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]'); //sino regresa nada regresa un string como objeto
    if (favorites.includes(id)) {
        favorites = favorites.filter(pokeId => pokeId !== id); //excluimos el pokemon que tenga ese id del arreglo que esta en el localStorage
    } else {
        favorites.push(id); // Se agrega al arreglo
    }
    localStorage.setItem('favorites', JSON.stringify(favorites)); //Establecemos nuevamente al localStorge 
}

const existInFavorites = (id:number):boolean => {
    if(typeof window === 'undefined') return false;
    const favorites:number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.includes(id); //retorna true si existe y false sino es asi
}

const pokemons = ():number[] => {
    return JSON.parse(localStorage.getItem('favorites') || '[]');

}


export default {
    toggleFavorites,
    existInFavorites,
    pokemons,
};