import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { requestAllPokemon, requestPokemon } from '../actions/pokemon_actions';
import ItemDetailContainer from './items/item_detail_container';
import PokemonFormContainer from './pokemon/pokemon_form_container';

const Root = ({ store }) => {
  const requestOnEnter = () => {
     store.dispatch(requestAllPokemon());
  };

  const requestSinglePokemon = (routerState) => {
    store.dispatch(requestPokemon(routerState.params.pokemonId));
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={PokemonIndexContainer} onEnter={requestOnEnter} >
          <IndexRoute component={PokemonFormContainer}/>
          <Route path="pokemon/:pokemonId" component={PokemonDetailContainer} onEnter={requestSinglePokemon}>
              <Route path='items/:itemId' component={ItemDetailContainer}/>
          </Route>
        </Route>
      </Router>
    </Provider>
);
};

export default Root;
