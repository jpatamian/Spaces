import React, { Component } from 'react';

class MapFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startingLocation: '',
      endingLocation: ''
    }
    this.handleStartChange=this.handleStartChange.bind(this)
    this.handleEndChange=this.handleEndChange.bind(this)
    this.handleFormSubmit=this.handleFormSubmit.bind(this)
  }

  handleStartChange(event){
    this.setState({startingLocation: event.target.value})
  }

  handleEndChange(event){
    this.setState({endingLocation: event.target.value})
  }

  handleFormSubmit(event){
    event.preventDefault()
    let formPayload = {
      start: this.state.startingLocation,
      end: this.state.endingLocation
    }
    this.props.handleCoordChange(formPayload)
  }

  render(){
    return (
      <div className="map-form-border">
        <input
          placeholder='... add starting location'
          type='text'
          value={this.state.startingLocation}
          onChange={this.handleStartChange}
          className="start-form"
        />
        <input
          placeholder='... add ending location'
          type='text'
          value={this.state.endingLocation}
          onChange={this.handleEndChange}
          className="end-form"
        />
        <button className="button-sml" type="submit" value="Submit" onClick={this.handleFormSubmit}>Map Route</button>
      </div>
    )
  }
}

export default MapFormContainer;
