# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = User.create(email:"guest@guest.com", password: "guest123")

places = [
  {place_photo:'https://lh3.ggpht.com/p/AF1QipMz1LUj43ZW4G-CVmjeiiQLEXmyis4ilnV0QtY=w1400', name: "Club Cafe", address: "209 Columbus Ave", city: "Boston", state: "MA", country: "US", zipcode: '02116', description: "Happening gay-friendly cabaret, piano bar, dance club & classy New American bistro."},

  {place_photo:'https://www.thebostoncalendar.com/system/events/photos/000/013/224/original/Screen_Shot_2014-06-11_at_10.42.29_PM.png?1443860232', name: "Boston Harbor Hotel at Rowes Wharf", address: "70 Rowes Wharf", city: "Boston", state: "MA", country: "US", zipcode: '02110', description: "Located on the historic Rowes Wharf Harbor, the Boston Harbor Hotel’s inviting ambiance and unparalleled service provide the ideal home away from home for all travelers. Luxurious accommodations with sweeping views of Boston’s cityscape or breathtaking waterfront, a contemporary spa and fitness center, world-class dining and a 34-slip marina make the Boston Harbor Hotel a destination Beyond Compare."},

  {place_photo:'https://gaytravel-hotels.s3.amazonaws.com/40568/monarch-beach-lawn-min__banner-large.jpg', name: "Monarch Beach Resort", address: "1 Monarch Beach Resort N", city: "Dana Point", state: "CA", country: "US", zipcode: '92629', description: "Perched on a golden hillside overlooking the azure waters of the Pacific, Monarch Beach Resort is Orange County’s most luxurious coastal playground. The AAA Five-Diamond sanctuary offers LGBT guests an array of exclusive activities and inspiring experiences that embody Southern California’s serene coastal lifestyle. From championship golf links and restorative spa services to water sports and celebrated dining, discover the allure of Orange County’s premier luxury resort."}
  ]

places.each do |a|
  new_place = Place.create(a)
end
