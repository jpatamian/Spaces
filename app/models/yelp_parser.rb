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

  @data = response["businesses"].map do |business|
      new_hash = {
        name: business["name"],
        business_location: business["location"],
        phone: business["phone"],
        image: business["image_url"],
        description: business["description"],
        categories: business["categories"],
        attributes: business["gender_neutral_restrooms"]
      }
    end
  end


end
