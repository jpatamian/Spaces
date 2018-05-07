import React, { Component } from 'react'
import PlaceShow from '../components/PlaceShow'


class PlacesShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      place: {}
    }
  }

  componentDidMount() {
  let placeId = this.props.params.id

  fetch(`/api/v1/places/${placeId}`)
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState( { place: body } )
    })
    .catch(error => console.error(`${error.message}`))
  }

  render() {
    debugger

    return(
      <div>
      <PlaceShow
        id={this.state.place.id}
        place = {this.state.place}
        name={this.state.place.name}
        photo={this.state.place.photo}
        description = {this.state.place.description}
      />
    </div>
    )
  }
}

export default PlacesShowContainer
