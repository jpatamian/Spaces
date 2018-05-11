require 'httparty'
require 'pry'

class MeetupParser
  attr_accessor :data

  def initialize
    @data = []
  end

  def search(zip, text)
    response = HTTParty.get("https://api.meetup.com/find/upcoming_events?key=2f1d6b66828f78466182e7157491e&zip=#{zip}&text=#{text}")

    @data = response["events"].map do |event|

      new_hash = {
        id: event["id"],
        event: event["name"],
        city: event["city"],
        date: event["local_date"],
        description: event["description"]
      }
    end
  end

  # What happens when no topics are found?

    # def search_events(query)
    #   # ...
    # end


end
