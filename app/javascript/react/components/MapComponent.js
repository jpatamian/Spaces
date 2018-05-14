import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";


class MapComponent extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     currentLocation: {
       lat: lat,
       lng: lng
     }
   }

  }

  componentDidMount() {
    if (this.props.centerAroundCurrentLocation) {
      if (navigator && navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((pos) => {
              const coords = pos.coords;
              this.setState({
                  currentLocation: {
                      lat: coords.latitude,
                      lng: coords.longitude
                  }
              })
          })
      }
    }
    this.loadMap();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
    if (prevState.currentLocation !== this.state.currentLocation) {
      this.recenterMap();
    }
  }

  recenterMap() {
    const map = this.map;
    const curr = this.state.currentLocation;

    const google = this.props.google;
    const maps = google.maps;

    if (map) {
        let center = new maps.LatLng(curr.lat, curr.lng)
        map.panTo(center)
    }
  }

  propTypes = {
    google: React.PropTypes.object,
    zoom: React.PropTypes.number,
    initialCenter: React.PropTypes.object,
  }

  defaultProps = {
    zoom: 13,
    // San Francisco, by default
    initialCenter: {
      lat: 37.774929,
      lng: -122.419416
    }
  }

 loadMap() {
   if (this.props && this.props.google) {
     // google is available
     const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let {initialCenter, zoom} = this.props;
      const {lat, lng} = this.state.currentLocation;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);
    }
  }

  render() {
    return (
      <div ref='map'>
        Loading map...
      </div>
    )
  }
}


export default MapComponent
