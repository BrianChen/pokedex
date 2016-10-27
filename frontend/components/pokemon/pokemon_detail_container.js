import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = state => {
  return ({
  pokemon: state.pokemonDetail
  });
};

export default connect(mapStateToProps)(PokemonDetail);
