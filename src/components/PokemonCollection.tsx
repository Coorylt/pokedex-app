import { Pokemon } from "../interface"
import PokemonList from "./PokemonList"
import './pokemon.css'

interface Props {
    pokemons : Pokemon[]
}

function PokemonCollection(props: Props) {
    const { pokemons } = props

    console.log(pokemons)

  return (
    <section className='collection-container'>
    {pokemons.map((pokemon) => {
        return <PokemonList 
            key={pokemon.id} 
            name={pokemon.name} 
            id={pokemon.id} 
            types={pokemon.types[0].type.name} 
            sprites={pokemon.sprites.front_default}/>
    })}
    </section>
  )
}
 
export default PokemonCollection