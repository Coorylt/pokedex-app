import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { Pokemon } from './interface';
import PokemonCollection from './components/PokemonCollection';
import { Pokemons } from './interface';
import './components/pokemon.css';


function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const res = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
        );

        console.log(res.data.results);

        const pokemonNames = res.data.results.map((pokemon: Pokemons) => pokemon.name);
        const pokemonDataPromises = pokemonNames.map(async (pokemonName: string) => {
          const pokeRes = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
          );
          const pokeData: Pokemon = pokeRes.data;
          return pokeData;
        });

        const pokemonData = await Promise.all(pokemonDataPromises);
        setPokemons(pokemonData);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    getPokemons();
  }, []);

  return (
    <div className="App">
      <header className="pokemon-header">
        <h1>Pokedex</h1>
      </header>
      <PokemonCollection pokemons={pokemons} />
    </div>
  );
}

export default App;
