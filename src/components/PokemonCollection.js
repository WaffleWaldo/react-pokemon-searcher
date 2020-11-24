import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  state = {
    api: []
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/pokemon")
      .then(r => r.json())
      .then(data => this.setState({
        api: data
      }))
  }

  renderPokemon = () => {
    return this.state.api.map(pokemon => <PokemonCard 
      key={pokemon.id} 
      name={pokemon.name} 
      hp={pokemon.hp} 
      frontSprite={pokemon.sprites.front} 
      backSprite={pokemon.sprites.back} 
      />)
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.renderPokemon()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
