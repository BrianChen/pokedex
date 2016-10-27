import React from 'react';
import { withRouter } from 'react-router';

const PokemonIndexItem = (props) => {

  const handleClick = url => props.router.push(url);
  return (
    <li
      className="pokemon-index-item"
      key={props.pokemon.id}
      onClick={() => handleClick(`/pokemon/${props.pokemon.id}`)}>
      <img src={props.pokemon.image_url}></img>
        <span>{props.pokemon.name}</span>
    </li>
  );
};

export default withRouter(PokemonIndexItem);
