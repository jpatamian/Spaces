require 'httparty'

 API_KEY = "#{ENV["YELP_KEY"]}"

 API_HOST = "https://api.yelp.com"
 SEARCH_PATH = "/v3/businesses/search"


class YelpParser
  include HTTParty
  base_uri 'https://api.yelp.com/v3/'

  attr_accessor :data

  def initialize
    @data = []
  end

  def search(term, location, attributes)
    response = self.class.get("/businesses/search",
      {
        query: { term: term, location: location, attributes: attributes},
        headers: {"Authorization" => "Bearer #{ENV["YELP_KEY"]}"}
      }
    )
    @data = response["businesses"].map do |business|
      new_hash = {
        name: business["name"],
        location: business["location"],
        phone: business["phone"],
        image: business["image_url"],
        description: business["description"],
        categories: business["categories"],
        attributes: business["gender_neutral_restrooms"],
        url: business["url"]
      }
    end
  end
end
