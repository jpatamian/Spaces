class Api::V1::YelpsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: Yelp.all
  end

  def search
    yelp_parser = YelpParser.new
    yelp_parser.search(params[:term], params[:location], params[:attributes])
binding.pry 
    render json: { data: yelp_parser.data }
  end
end
