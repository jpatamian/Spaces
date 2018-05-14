class Api::V1::ReviewsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def show
    render json: Review.find(params[:id])
  end

  def create

    review = Review.new(review_params)

    if current_user
      review.user = current_user
    else
      review.user_id = 1
    end

    review.save
    reviews = Review.where(place_id: params["place_id"]).reverse
    render json: reviews
  end

  def review_params
     params.require(:review).permit(:review, :place_id)
  end
end
