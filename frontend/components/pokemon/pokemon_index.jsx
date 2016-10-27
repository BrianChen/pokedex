import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

const PokemonIndex = (props) => (
  <section className="pokedex">
    <ol className="pokelist">
      {props.pokemon.map(poke => (
        <PokemonIndexItem key={poke.id} pokemon={poke} />
      ))}
    </ol>
    {props.children}
  </section>
);

export default PokemonIndex;
