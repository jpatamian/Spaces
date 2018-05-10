require 'httparty'
require 'pry'

 API_KEY = "#{ENV["YELP_API_KEY"]}"

 API_HOST = "https://api.yelp.com"
 SEARCH_PATH = "/v3/businesses/search"
 SEARCH_LIMIT = 5

class YelpParser
  attr_reader :data

  def initialize
    @data = []
  end

  def search(term, location)
    # response = HTTParty.get("https://api.meetup.com/2/groups?key=#{ENV["MEETUP_KEY"]}&topic=#{query}")
    # response = HTTParty.get("https://api.meetup.com/2/groups?key=#{ENV["MEETUP_KEY"]}&topic=dogs")
    response = HTTParty.get("https://api.yelp.com/v3/businesses/search?key=#{ENV["YELP_API_KEY"]}&term=#{term}&location=#{location}")
    binding.pry

    yelp_data = response["businesses"][0]
    new_hash = {
      name: yelp_data["name"],
      location: yelp_data["location"],
      phone: yelp_data["phone"],
      location: yelp_data["location"],
      image: yelp_data["image_url"],
      description: yelp_data["description"],
      id: yelp_data["id"],
      reviews: yelp_data["id"]["reviews"]
    }
    @data << new_hash
  end


end
