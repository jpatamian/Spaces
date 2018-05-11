require 'httparty'
require 'pry'

class MeetupParser
  attr_accessor :data

  def initialize
    @data = []
  end

  def search(zip, text)
    response = HTTParty.get("https://api.meetup.com/find/upcoming_events?key=2f1d6b66828f78466182e7157491e&zip=#{zip}&text=#{text}")

    meetup_data = response["events"][0]
    new_hash = {
      id: meetup_data["id"],
      event: meetup_data["name"],
      city: meetup_data["city"],
      date: meetup_data["local_date"],
      description: meetup_data["description"]
    }
    @data << new_hash

  end

  # What happens when no topics are found?

    # def search_events(query)
    #   # ...
    # end


end
