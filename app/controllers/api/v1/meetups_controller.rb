class Api::V1::MeetupsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: Meetup.all
  end

  def search
    meetup_parser = MeetupParser.new
    meetup_parser.search(params[:text], params[:city])

    render json: { data: meetup_parser.data }
  end
end
