import React from 'react'
import ReviewTile from '../components/ReviewTile'

const ReviewsIndexContainer = (props) => {
  if(props.reviews){
    let reviews = props.reviews
    let tiles = reviews.map(review => {
      return(
        <ReviewTile
          key={review.id}
          body={review.review}
          userEmail={review.user_email}
        />
      )
    })
    return(
      <div className = "row ">
        <div className = "review-container ">
          <table className = "review-table">
            <thead>
              <tr>
                <th width="200">Review</th>
                <th width="100">Review By</th>
              </tr>
            </thead>
          </table>
          {tiles}
        </div>
      </div>
      )
  }
}

export default ReviewsIndexContainer
