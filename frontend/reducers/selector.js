import {values} from 'lodash';

export const selectAllPokemon = (state) => {
  return values(state.pokemon);
};

export const selectPokemonItem = (state, itemId) => {
  return state.pokemonDetail.items.filter(item => item.id === Number(itemId))[0];
};
