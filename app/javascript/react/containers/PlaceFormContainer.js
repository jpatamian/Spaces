import React, { Component } from 'react'
import { browserHistory, withRouter } from 'react-router'
import TextField from '../components/TextField'

class PlaceFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      country: '',
      zipcode: '',
      description: ''
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleAddressChange = this.handleAddressChange.bind(this)
    this.handleCityChange = this.handleCityChange.bind(this)
    this.handleStateChange = this.handleStateChange.bind(this)
    this.handleCountryChange = this.handleCountryChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleZipcodeChange = this.handleZipcodeChange.bind(this)

    this.handleClearForm = this.handleClearForm.bind(this)

    this.addPlace = this.addPlace.bind(this)
  }


  handleClearForm(event) {
    event.preventDefault()
    this.setState({
    name: '',
    address: '',
    city: '',
    state: '',
    country: '',
    zipcode:'',
    description: '',
    errors: {}})
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value })
  }
  handleZipcodeChange(event) {
    this.setState({ zipcode: event.target.value })
  }

  handleAddressChange(event) {
    this.setState({ address: event.target.value })
  }

  handleCityChange(event) {
    this.setState({ city: event.target.value })
  }

  handleStateChange(event) {
    this.setState({ state: event.target.value })
  }

  handleCountryChange(event) {
    this.setState({ country: event.target.value })
  }

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value })
  }

  addPlace(submission) {

    fetch(`http://localhost:3000/api/v1/places`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin',
      body: JSON.stringify(submission)
    }).then( () => {
      browserHistory.push('/')
    })
  }

  handleFormSubmit(event) {
    event.preventDefault();

    if (this.state.name.trim() != '' &&
       this.state.address.trim() != '') {

      let formPayload = {
          name: this.state.name,
          address: this.state.address,
          city: this.state.city,
          state: this.state.state,
          country: this.state.country,
          zipcode: this.state.zipcode,
          description: this.state.description
      }
      this.addPlace(formPayload)
    }else{
      alert("Please Fill Out All Fields")
    }
  }

  render() {
    return(
      <div>
        <h1 className = 'add-new' > Add A Suggestion </h1>
      <div className="row">
        <div className="columns medium-6">
          <form className="callout" onSubmit={this.handleFormSubmit}>
          <TextField
            content={this.state.name}
            label="Name"
            name="name"
            handlerFunction={this.handleNameChange}
          />
          <TextField
            content={this.state.address}
            label="Street Name"
            name="street"
            handlerFunction={this.handleAddressChange}
          />
          <TextField
            content={this.state.city}
            label="City"
            name="city"
            handlerFunction={this.handleCityChange}
          />
          <TextField
            content={this.state.state}
            label="State"
            name="state"
            handlerFunction={this.handleStateChange}
          />
          <TextField
            content={this.state.country}
            label="Country"
            name="country"
            handlerFunction={this.handleCountryChange}
          />
          <TextField
            content={this.state.zipcode}
            label="Zipcode"
            name="zipcode"
            handlerFunction={this.handleZipcodeChange}
          />
          <TextField
            content={this.state.description}
            label="Description"
            name="description"
            handlerFunction={this.handleDescriptionChange}
          />

          <div className="button-group">
            <button className="button" onClick={this.handleClearForm}>Clear</button>
            <input className="button" type="submit" value="Submit" onClick = {this.handleFormSubmit} />
          </div>
          </form>
        </div>
      </div>
    </div>
    )
  }
}

export default PlaceFormContainer;
