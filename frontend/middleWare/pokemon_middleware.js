import { fetchAllPokemon, fetchPokemon } from '../util/api_util';
import {
  REQUEST_POKEMON,
  REQUEST_ALL_POKEMON,
  receiveAllPokemon,
  receivePokemon} from '../actions/pokemon_actions';


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
    default:
      return next(action);
  }
};

export default PokemonMiddleware;
