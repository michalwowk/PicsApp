import React, { Component } from 'react'

export class SearchBar extends Component {
  state = {
    term: ''
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
            <label>Image Search</label>
            <input
              className="field"
              type="text" 
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
        </form>
      </div>
    )
  }
}

export default SearchBar
