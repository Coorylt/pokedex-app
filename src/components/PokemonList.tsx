import './pokemon.css'

interface Props {
    name: string;
    id: number;
    sprites: string;
    types: string;
}

function PokemonList(props : Props) {

    const {name, id, sprites, types} = props
  return (
    <div>
      <section className={`pokemon-list-container ${types}`}>
            <p className="pokemon-name"> # {id}</p>
            <p className="pokemon-name"> {name} </p>
            <img src={sprites} alt={name}/>
            <p className="pokemon-name"> Type : {types} </p>
        </section>
    </div>
  )
}

export default PokemonList