import React, { Component } from 'react'
import { browserHistory, withRouter } from 'react-router'
import TextField from '../components/TextField'
import MeetupTile from '../components/MeetUpTile'

class MeetUpFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      zip: '',
      data: []
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleZipChange = this.handleZipChange.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.addSearch = this.addSearch.bind(this)
  }

  handleTextChange(event) {
    this.setState({ text: event.target.value })
  }

  handleZipChange(event) {
    this.setState({ zip: event.target.value })
  }

  addSearch(formPayload) {
    fetch('http://localhost:3000/api/v1/meetups', {
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
    zip: '',
    data: [],
    errors: {}})
  }

  handleFormSubmit(event) {
    event.preventDefault();

      let formPayload = {
        text: this.state.text,
        zip: this.state.zip
      }
      this.addSearch(formPayload)
  }

  render() {

    let data = this.state.data.map(data => {
      debugger

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
      <h1 className = 'add-new' > Search MeetUps </h1>
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
          content={this.state.zip}
          label="Zip"
          name="zip"
          handlerFunction={this.handleZipChange}
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
