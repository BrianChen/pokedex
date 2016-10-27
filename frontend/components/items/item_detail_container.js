import { connect } from 'react-redux';
import ItemDetail from './item_detail';
import selectPokemonItem from '../../reducers/selector';

const mapStateToProps = (state, ownProps) => ({
  item: selectPokemonItem(state, ownProps.params.itemId)
});

export default connect(mapStateToProps)(ItemDetail);
