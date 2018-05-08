class Api::V1::PlacesController < ApplicationController
  # skip_before_action :verify_authenticity_token

  def index
    render json: Place.all
  end

  def show
    render json: Place.find(params[:id])
  end

  def create
     place = Place.new(place_params)
     if current_user
       place.user = current_user
     else
       place.user_id = 1
     end

     if place.save
       render json: Place.all
     else
       render json: {message: "Did not save."}
     end
  end

 private

   def place_params
      params.require(:place).permit(:name, :address, :city, :state, :country, :description)
   end

 end
