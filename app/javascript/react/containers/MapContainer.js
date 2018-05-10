import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import MapComponent from '../components/MapComponent'

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }
  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  render() {
    if (!this.props.google) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Map
          style={{
            minWwidth: "100px",
            minHeight: "100px"
          }}
          google={this.props.google}
          zoom={14}
        >
          <Marker
            onClick={this.onMarkerClick}
            icon={{
              url: "https://www.google.com/imgres?imgurl=http%3A%2F%2Ficons.iconarchive.com%2Ficons%2Fpaomedia%2Fsmall-n-flat%2F1024%2Fmap-marker-icon.png&imgrefurl=http%3A%2F%2Fwww.iconarchive.com%2Fshow%2Fsmall-n-flat-icons-by-paomedia%2Fmap-marker-icon.html&docid=UrA3DqlCg75OQM&tbnid=3DqWQ-7j1GBx-M%3A&vet=10ahUKEwiwur2Yn_naAhXEct8KHQnHAhkQMwjOASgAMAA..i&w=1024&h=1024&bih=880&biw=1077&q=marker%20image&ved=0ahUKEwiwur2Yn_naAhXEct8KHQnHAhkQMwjOASgAMAA&iact=mrc&uact=8",
              anchor: new google.maps.Point(32, 32),
              scaledSize: new google.maps.Size(64, 64)
            }}
            name={"Current location"}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
})(MapContainer);
