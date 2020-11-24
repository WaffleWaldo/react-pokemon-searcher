import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    clicked: false
  }

  clickHandler = () => {
    this.setState({clicked: !this.state.clicked})
  }

  spriteRender = () => {
    return this.state.clicked ? this.props.backSprite : this.props.frontSprite
  }

  render() {
    return (
      <Card>
        <div>
          <div onClick={this.clickHandler} className="image">
            <img src={this.spriteRender()} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
