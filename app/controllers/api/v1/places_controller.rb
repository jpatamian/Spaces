class Api::V1::PlacesController < ApplicationController
  # skip_before_action :verify_authenticity_token

  def index
    render json: Place.all
  end

  def show
    render json: Place.find(params[:id])
  end

 end
