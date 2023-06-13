
import { useState, useEffect } from 'react';
import { Layout } from "../../components/layouts"
import { FavoritesPokemons } from "../../components/pokemon"; 
import { NoFavorites } from "../../components/ui"; 
import { localFavorites } from "../../utils";

const favoritesPage = () => {

  const [favoritesPokemon, setFavoritesPokemon] = useState<number[]>([])

  useEffect(() => {
    setFavoritesPokemon(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Pokemons favoritos">
      {favoritesPokemon.length === 0 
      ? (<NoFavorites />) 
      : ( <FavoritesPokemons pokemons={favoritesPokemon}/> )
      }

    </Layout>
  )
}

export default favoritesPage; 