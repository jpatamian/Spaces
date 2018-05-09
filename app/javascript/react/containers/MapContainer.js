import React, { Component } from 'react';
import { Link } from 'react-router';
import MapFormContainer from './MapFormContainer'

class MapContainer extends Component {
  constructor(props){
    super(props)
    this.state={
     starting: '',
     ending: '',
     userLocations: ''
    }
    this.initMap=this.initMap.bind(this)
    this.reInitMap=this.reInitMap.bind(this)
    this.handleCoordChange=this.handleCoordChange.bind(this)
    this.buildMap=this.buildMap.bind(this)
    this.reBuildMap=this.reBuildMap.bind(this)
  }

  componentDidMount() {
    this.buildMap()
  }

  initMap() {
    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: {lat: 42.3611, lng: -71.0570}
    });
  }

  buildMap(){
    window.initMap = this.initMap;
    loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyBO4j3Lhl6mWVDVkk07XJfYIToTGtbLe68&callback=initMap')
    console.log('buildmap!')
  }

  reBuildMap(){
    window.reInitMap = this.reInitMap;
    loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyBO4j3Lhl6mWVDVkk07XJfYIToTGtbLe68&callback=reInitMap')
    console.log('reBuildmap!')
  }

  reInitMap() {
    if (this.state.starting != '' && this.state.ending != '') {
      let start = this.state.starting;
      let end = this.state.ending;
      let directionsDisplay = new google.maps.DirectionsRenderer();
      let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: start
      });
      directionsDisplay.setMap(map);
      let directionsService = new google.maps.DirectionsService();
      let request = {
      origin: start,
      destination: end,
      travelMode: 'DRIVING'
      };
      directionsService.route(request, function(result, status) {
        if (status == 'OK') {
          directionsDisplay.setDirections(result);
        }
      });
      fetch('api/v1/users'
      )
      .then(response => response.json())
      .then(body => {
        this.setState({
          userLocations: body
        })
      })
    }
  }

  handleCoordChange(formPayload){
    let sloc = formPayload.start.split(' ').join('+')
    let eloc = formPayload.end.split(' ').join('+')
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${sloc}&key=AIzaSyBO4j3Lhl6mWVDVkk07XJfYIToTGtbLe68`
    )
    .then(response => response.json())
    .then(body => {
      this.setState({
        starting: body.results[0].geometry.location
      })
    })
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${eloc}&key=AIzaSyBO4j3Lhl6mWVDVkk07XJfYIToTGtbLe68`
    )
    .then(response => response.json())
    .then(body => {
      this.setState({
        ending: body.results[0].geometry.location
      })
    })
    this.reBuildMap()
  }

  render(){
    return(
      <div>
        <div className="link-tabs">
          <Link className="fa fa-map fa-3x" to={`/maps`}/>
          <Link className="fa fa-comments fa-3x" to={`/posts`} />
          <Link className="fa fa-users fa-3x" to={`/users`} />
        </div>
        <div className="map-container">
        <div className="map-title">FeRox Route Planner</div>
        <div className="wrap-map">
          <MapFormContainer
          handleCoordChange={this.handleCoordChange}
          />
          <div className="map" id='map'></div>
        </div>
        </div>
      </div>
    )
   }
  }

export default MapContainer;

function loadJS(src) {
  let ref = window.document.getElementsByTagName("script")[0];
  let script = window.document.createElement("script");
  script.src = src;
  script.async = true;
  ref.parentNode.insertBefore(script, ref);
}
