class Api::V1::PreferencesController < ApplicationController

  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: current_user.preferred_places
  end

  def show
    @id = params[:id]
    @preference = Preference.find(@id)
    @user = @preference.user
  end

  def create
    data = JSON.parse(request.body.read)
    place = Place.find(data["id"])
    save = data["save"]
    if save == "yes"
      Preference.create(user: current_user, place: place, preference: true)
    else
      Preference.create(user: current_user, place: place)
    end
    render json: place
  end
end
