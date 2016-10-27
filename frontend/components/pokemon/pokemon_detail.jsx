import React from 'react';

const PokemonDetail = ({ pokemon }) => {
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
        <ul>
          {pokemon.items.map( item => <img src={item.image_url}></img> )}
        </ul>
      </section>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};


export default PokemonDetail;
