import {values} from 'lodash';

export const selectAllPokemon = (state) => {
  return values(state.pokemon);
};

export const selectPokemonItem = (state, pokeId) => {
  return state.pokemonDetail.items[pokeId];
};
