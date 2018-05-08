import React, { Component } from 'react'
import PlaceShow from '../components/PlaceShow'
import MapContainer from "./MapContainer";


class PlacesShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      place: {},
      photos: [],
      placeId: this.props.params.id
    }
  }

  componentDidMount() {
  let placeId = this.state.placeId

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

    return(
    <div>
      <h1 className = 'place-photo'> <img src= {this.state.place.place_photo} /> </h1>

      <h2>{this.state.place.name}</h2>
      <div className="place-info">
          <p className="address">Location: {this.state.place.address}, {this.state.place.city}, {this.state.place.state}, {this.state.place.zip}</p>
          <p className="description">Description: {this.state.place.description}</p>
      </div>

      <MapContainer />
    </div>
    )
  }
}

export default PlacesShowContainer
