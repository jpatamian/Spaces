import React, { Component } from 'react'
import { browserHistory, withRouter } from 'react-router'
import TextField from '../components/TextField'
import MeetupTile from '../components/MeetUpTile'

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
        name={data.event}
        city = {data.city}
        date = {data.date}
        description = {data.description}
    />
    })
  return(
    <div>
      <img id= 'meetup-logo' src="https://secure.meetup.com/s/img/0/logo/svg/logo--script.svg" />
      <h1 className = 'add-new' > </h1>
    <div className="row">
      <div className="columns medium-6">
        <form className="callout" onSubmit={this.handleFormSubmit}>
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
          <button className="button" onClick={this.handleClearForm}>Clear</button>
          <input className="button" type="submit" value="Submit" />
        </div>
        </form>
      </div>
    </div>
      <div className="columns">
        <div className="meetup-feed">
          <ul> {data} </ul>
        </div>
      </div>
  </div>
  )}
}

export default MeetUpFormContainer
