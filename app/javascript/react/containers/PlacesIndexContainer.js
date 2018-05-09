import React, { Component } from 'react'
import PlaceTile from '../components/PlaceTile'

class PlacesIndexContainer extends Component {
  constructor(props) {
      super(props)
      this.state = {
        places: []
      }
    }

  componentDidMount() {
    fetch('api/v1/places')
      .then(response => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState( { places: body } )
      })
      .catch(error => console.error(`fetch failed because ${error.message}`))
  }

  render() {


    let places = this.state.places.map(place => {

      return(
        <PlaceTile
          key = {place.id}
          id = {place.id}
          name = {place.name}
        />
      )
    })

    return(
      <div className="row text-center">
        <div className = "row">
          <div className ="middlenav">
            <a id = 'placenav' href="#about">About</a>
            <a id = 'placenav' href="#services">Services</a>
            <a id = 'placenav' href="#clients">Clients</a>
            <a id = 'placenav' href="#contact">Contact</a>
          </div>
          <h1 className = 'page-header' > Find Your Spaces </h1>

        <div>{places}</div>
      </div>
    </div>
    )
  }
}

export default PlacesIndexContainer
