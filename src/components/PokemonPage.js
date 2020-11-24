import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    api: [],
    filteredPokemon: []
  }

  submitHandler = (pokemonObj) => {
    fetch("http://localhost:3000/pokemon", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(pokemonObj)
    })
    .then(r => r.json())
    .then(newPokemon => this.setState({ api: [...this.state.api, newPokemon] }))
    .catch(console.log)
  }

  searchHandler = (e) => {
    console.log(e.target.value)
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Index</h1>
        <br />
        <PokemonForm submitHandler={this.submitHandler} />
        <br />
        <Search searchHandler={this.searchHandler} />
        <br />
        <PokemonCollection />
      </Container>
    )
  }
}

export default PokemonPage
