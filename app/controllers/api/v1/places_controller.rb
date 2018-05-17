class Api::V1::PlacesController < ApplicationController
  skip_before_action :verify_authenticity_token
  serialization_scope :current_user

  def index
    render json: Place.all
  end

  def show
    render json: Place.find(params[:id]), serializer: PlaceShowSerializer
  end

  def create
     @place = Place.new(place_params)
     if @place.save
       render json: Place.all
     else
       render json: {message: "Did not save."}
     end
  end

 private

   def place_params
      params.require(:place).permit(:name, :address, :city, :state, :country, :zipcode, :description, :reviews)
   end

 end
