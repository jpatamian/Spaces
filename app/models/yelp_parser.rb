require 'httparty'
require 'pry'

 API_KEY = "#{ENV["YELP_API_KEY"]}"

 API_HOST = "https://api.yelp.com"
 SEARCH_PATH = "/v3/businesses/search"


class YelpParser
  include HTTParty
  base_uri 'https://api.yelp.com/v3/'

  attr_accessor :data

  def initialize
    @data = []
  end

  def search(term, location)
    # response = HTTParty.get("https://api.meetup.com/2/groups?key=#{ENV["MEETUP_KEY"]}&topic=#{query}")
    # response = HTTParty.get("https://api.meetup.com/2/groups?key=#{ENV["MEETUP_KEY"]}&topic=dogs")
    response = self.class.get("/businesses/search",
      {
        query: { term: term, location: location},
        headers: {"Authorization" => "Bearer #{ENV["YELP_API_KEY"]}"}
      }
    )

    yelp_data = response["businesses"][0]

    new_hash = {
      name: yelp_data["name"],
      location: yelp_data["location"],
      phone: yelp_data["phone"],
      image: yelp_data["image_url"],
      description: yelp_data["description"],
      categories: yelp_data["categories"],
      attributes: yelp_data["gender_neutral_restrooms"]
    }
    @data << new_hash

  end


end
