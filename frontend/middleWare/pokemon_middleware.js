import { fetchAllPokemon, fetchPokemon, postPokemon } from '../util/api_util';
import {
  REQUEST_POKEMON,
  REQUEST_ALL_POKEMON,
  receiveAllPokemon,
  receivePokemon,
  CREATE_POKEMON,
  receiveNewPokemon,
  receivePokemonErrors} from '../actions/pokemon_actions';
  import { hashHistory } from 'react-router';

const PokemonMiddleware = ({ dispatch }) => next => action => {
  let success;
  switch(action.type) {
    case REQUEST_ALL_POKEMON:
      success = response => dispatch(receiveAllPokemon(response));
      fetchAllPokemon(success);
      return next(action);
    case REQUEST_POKEMON:
      success = response => dispatch(receivePokemon(response));
      fetchPokemon(action.pokeId, success);
      return next(action);
    case CREATE_POKEMON:
      success = pokemon => {
        dispatch(receiveNewPokemon(pokemon));
        hashHistory.push(`/pokemon/${pokemon.id}`);
      };
      const errors = error => {
        dispatch(receivePokemonErrors(error));
      };

      postPokemon(action.pokemon, success, errors);
      return next(action);
    default:
      return next(action);
  }
};

export default PokemonMiddleware;
