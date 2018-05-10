class Api::V1::YelpsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: Yelp.all
  end

  def search
    params = params[:term, :location]
    yelp_parser = YelpParser.new
    yelp_parser.search(params)

     render json: { data: yelp_parser.data }
  end

end
