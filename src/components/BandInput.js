// Add BandInput component
import React, { Component } from 'react'


class BandInput extends Component {
  state = {
    name: "",
  }
  
  handleChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.addBand(this.state)
    this.setState({
      name: "",
    })
  }


  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event) }>
        <input 
          type="text" 
          placeholder="Bandname"
          value={ this.state.name } 
          onChange={event => this.handleChange(event) } 
        />
        <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput

