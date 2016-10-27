import React from 'react';
import Item from '../items/item';

const PokemonDetail = ({ pokemon, children }) => {
  if (pokemon.constructor === Object && Object.keys(pokemon).length > 0) {
    return (
      <section className="pokemon-detail">
        <figure> <img src={pokemon.image_url}></img> </figure>
        <h1>{pokemon.name}</h1>
        <ul>
          <li>Type: {pokemon.poke_type}</li>
          <li>Attack: {pokemon.attack}</li>
          <li>Defense: {pokemon.defense}</li>
          <li>Moves: {pokemon.moves.map(move => `${move }`)}</li>
        </ul>
        <h2> Items </h2>
        <div>
          {pokemon.items.map( item => <Item key={item.id} pokeId={pokemon.id} item={item}/>) }
        </div>
        {children}
      </section>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};


export default PokemonDetail;
