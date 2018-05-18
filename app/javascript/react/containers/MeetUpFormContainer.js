import React, { Component } from 'react'
import { browserHistory, withRouter } from 'react-router'
import TextField from '../components/TextField'
import MeetupTile from '../components/MeetUpTile'
import YelpTile from '../components/YelpTile'
import YelpFormContainer from './YelpFormContainer'

class MeetUpFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      city: '',
      data: []
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleCityChange = this.handleCityChange.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.addSearch = this.addSearch.bind(this)
  }

  handleTextChange(event) {
    this.setState({ text: event.target.value })
  }

  handleCityChange(event) {
    this.setState({ city: event.target.value })
  }

  addSearch(formPayload) {
    fetch('/api/v1/meetups', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin',
      body: JSON.stringify(formPayload)
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        data: body.data
      })
    })
    .catch(error=> console.error('error in fetch ${errorMessage}'))
  }

  handleClearForm(event) {
    event.preventDefault()
    this.setState({
    text: '',
    city: '',
    data: [],
    errors: {}})
  }

  handleFormSubmit(event) {
    event.preventDefault();

      let formPayload = {
        text: this.state.text,
        city: this.state.city
      }
      this.addSearch(formPayload)
  }

  render() {

    let data = this.state.data.map(data => {
      return <MeetupTile
        key={data.id}
        event={data.event}
        city = {data.city}
        date = {data.date}
        description = {data.description}
        link = {data.link}
    />
    })
  return(
    <div>
      <header className = 'meetuppic'/>
      <div className=" meetuprow medium-6 columns">
        <form className="meetupform" onSubmit={this.handleFormSubmit}>
        <TextField
          content={this.state.text}
          label="Category"
          name="category"
          handlerFunction={this.handleTextChange}
        />
        <TextField
          content={this.state.city}
          label="City"
          name="city"
          handlerFunction={this.handleCityChange}
        />
        <div className="button-group">
          <button className="tiny button secondary" onClick={this.handleClearForm}>Clear</button>
          <input className="tiny button secondary" type="submit" value="Search" />
        </div>
        </form>
    </div>
        <div className="yelp-container meet-feed row">
          {data}
      </div>
  </div>
  )}
}

export default MeetUpFormContainer
