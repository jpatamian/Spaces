import React, { Component } from 'react'
import PlaceShow from '../components/PlaceShow'
import ReviewsIndexContainer from './ReviewsIndexContainer'
import TextField from '../components/TextField'


class PlacesShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      place: {},
      placeId: this.props.params.id,
      reviews: [],
      body: '',
      isSaved: false,
      favorited: []
      }

    this.handleBodyChange = this.handleBodyChange.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.addReview = this.addReview.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.changeColor = this.changeColor.bind(this)
    this.handleClick = this.handleClick.bind(this)

  }

  handleSave(favoritedPlace) {
    fetch(`/api/v1/favorites`, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
    },
      credentials: 'same-origin',
      body: JSON.stringify(favoritedPlace)
    })
  }


  handleClick() {
    if (this.state.isSaved === false) {
      let favoritedPlace = this.state.place

      this.setState({
        isSaved: true
      })

    this.handleSave(favoritedPlace)
    } else {
      this.setState({
        isSaved: false
      })
    }
  }

  changeColor() {
    if (this.state.isSaved === true ) {
      return "fa fa-heart"
    } else {
      return "fa fa-heart-o"
    }
  }


  componentDidMount() {
    let placeId = this.props.params.id
    let place = {}

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
      this.setState({
        place: body,
        reviews: body.reviews
        })
      })

      .catch(error => console.error(`${error.message}`))
    }

  handleBodyChange(event) {
    this.setState({ body: event.target.value })
  }

  handleClearForm(event) {
    event.preventDefault()
    this.setState({ body: '' })
  }

  addReview(submission) {
    let placeId = this.state.place.id
    fetch(`/api/v1/places/${placeId}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin',
      body: JSON.stringify(submission)
    }).then(response => response.json())
    .then(reviews => {
      this.setState( {
        reviews: reviews,
        body: ''
      })
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    let formPayload = {
      review: {
        review: this.state.body,
        place_id: this.state.place.id
      }
    }
    this.addReview(formPayload)
  }


  render() {

    return(
      <div>
      <header className = 'showpic'/>
      <div className = 'show-body'>

      <div className = 'container'>
        <h2>{this.state.place.name}</h2>
        <p id= 'favorite'> Add To Favorites <i onClick={this.handleClick} className={this.changeColor()} aria-hidden="true"></i></p>


        <div className="place-info">
          <p className="address">Location: {this.state.place.address} {this.state.place.city}, {this.state.place.state} {this.state.place.zip}</p>
          <p className="description">Description: {this.state.place.description}</p>
        </div>


        <div className = "review-form">
          <TextField
            content={this.state.body}
            label="Add A Review"
            name="Add A Review"
            handlerFunction={this.handleBodyChange}
          />

          <div className="button-group">
            <button className="button" onClick={this.handleClearForm}>Clear</button>
            <button className="button" onClick={this.handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    <div className = 'review-container'>
        <ReviewsIndexContainer
          reviews={this.state.reviews}
        />
        </div>
      </div>
    </div>
    )
  }
}

  export default PlacesShowContainer
