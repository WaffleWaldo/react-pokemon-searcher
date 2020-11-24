import React, { Component } from 'react'

class Search extends Component {
  render() {
    return (
      <div className="ui search">
        <div className="ui icon input">
          <input className="prompt" value="" onChange={this.props.searchHandler}/>
          <i className="search icon" />
        </div>
      </div>
    )
  }
}

export default Search
