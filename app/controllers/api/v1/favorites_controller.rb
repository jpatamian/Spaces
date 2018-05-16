class Api::V1::FavoritesController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!

  def index
    render json: Favorite.all
  end

  def show
    @favorite = Favorite.find(params[:id])
    @user = @favorite.user
  end

  def create
    favoritedPlace = JSON.parse(request.body.read)
    place = Place.find(favoritedPlace["id"])
    user = current_user
    favorite = Favorite.create!(user: user, place: place, name: place.name, address: place.address, city: place.city, state: place.state, favorite: true)

    render json: favorite
  end
end
