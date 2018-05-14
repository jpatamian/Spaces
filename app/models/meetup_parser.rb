require 'httparty'
require 'pry'
require 'sanitize'
require 'nokogiri'

class MeetupParser
  include ActionView::Helpers::SanitizeHelper

  attr_accessor :data

  def initialize
    @data = []
  end

  def search(text, city)
    response = HTTParty.get("https://api.meetup.com/find/upcoming_events?key=2f1d6b66828f78466182e7157491e&city=#{city}&text=#{text}")
    @data = response["events"].map do |event|
      new_hash = {
        id: event["id"],
        event: event["name"],
        city: event["city"],
        date: event["local_date"],
        description: Sanitize.clean(event["description"],
        group: event["group"])
      }
    end
  end

    # def search_events(query)
    #   # ...
    # end


end
