import React from 'react';

class PokemonForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        name: "",
        attack: 0,
        defense: 0,
        image_url: "",
        move1: "",
        move2: "",
        poke_type: "bug"
      };
  }

  update(property) {
     return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    const moves = [this.state.move1, this.state.move2];
    const pokemon = {
      name: this.state.name,
      attack: this.state.attack,
      defense: this.state.defense,
      image_url: this.state.image_url,
      moves: moves,
      poke_type: this.state.poke_type
    };
    this.props.createPokemon(pokemon);
  }

  displayErrors() {
    return (
      <ul>
        {this.props.errors.map ((el, i) => <li key={i}>{el}</li>)}
      </ul>
    );
  }

  render(){
    return (
    <form>
      {this.displayErrors()}
      <input type="text" placeholder="Name" onChange={ this.update("name")}></input>
      <input type="text" placeholder="Image Url" onChange={ this.update("image_url")}></input>
      <select onChange={ this.update("poke_type")}>
        <option>bug</option>
        <option>dragon</option>
        <option>electric</option>
        <option>flying</option>
        <option>ghost</option>
        <option>grass</option>
        <option>fire</option>
        <option>water</option>
        <option>ice</option>
        <option>ground</option>
        <option>normal</option>
        <option>psychic</option>
        <option>rock</option>
        <option>steel</option>
      </select>
      <input type="text" placeholder="Attack" onChange={ this.update("attack")}></input>
      <input type="text" placeholder="Defense" onChange={ this.update("defense")}></input>
      <input type="text" placeholder="Move 1" onChange={ this.update("move1")}></input>
      <input type="text" placeholder="Move 2" onChange={ this.update("move2")}></input>
      <button onClick={ e => this.handleSubmit(e)}>Create Pokemon</button>
    </form>
  );
  }
}


export default PokemonForm;
